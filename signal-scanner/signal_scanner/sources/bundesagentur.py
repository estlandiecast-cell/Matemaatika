"""Bundesagentur fuer Arbeit Jobsuche API.

Verified 2026-08-19: the doc's /pc/v4/jobs example now 403s (deprecated).
The working search endpoint is /pc/v6/jobs, confirmed with real data and
full-text matching (not just job-title matching, despite the "was" param
being documented as title-only). Detail endpoint /pc/v4/jobdetails/{id}
(base64 of referenznummer) is confirmed and holds the full description
text needed for verbatim sentence extraction. See
github.com/bundesAPI/jobsuche-api.

Sector: no sector/branche field exists anywhere in the confirmed search
or jobdetails schema. sector is always null for this source -- not
guessed from the job title or occupation field.
"""

import base64
import datetime
import logging

from ..config import QUERY_TERMS, USER_AGENT
from ..extract import find_matching_sentences_in_text
from ..httpcache import CachedClient

log = logging.getLogger(__name__)

API_KEY = "jobboerse-jobsuche"
SEARCH_URL = "https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v6/jobs"
DETAIL_URL = "https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v4/jobdetails/{}"
RESULTS_PER_PAGE = 50
MAX_PAGES_PER_TERM = 4
MIN_INTERVAL_SECONDS = 1.0

TERMS_DE = QUERY_TERMS["de"]


def _headers() -> dict:
    return {"X-API-Key": API_KEY, "User-Agent": USER_AGENT}


def fetch(cache_dir: str) -> list[dict]:
    client = CachedClient(f"{cache_dir}/bundesagentur", MIN_INTERVAL_SECONDS)
    retrieved_at = datetime.datetime.now(datetime.timezone.utc).isoformat()

    candidate_refnrs: set[str] = set()

    for term in TERMS_DE:
        for page in range(1, MAX_PAGES_PER_TERM + 1):
            data = client.request_json(
                "GET", SEARCH_URL, params={"was": term, "size": RESULTS_PER_PAGE, "page": page}, headers=_headers()
            )
            if data is None:
                log.warning("Bundesagentur: giving up on term=%r page=%d after repeated failures", term, page)
                break

            results = data.get("ergebnisliste") or []
            if not results:
                break
            for job in results:
                refnr = job.get("referenznummer")
                if refnr:
                    candidate_refnrs.add(refnr)
                else:
                    log.warning("Bundesagentur: search hit with no referenznummer, title=%r", job.get("stellenangebotsTitel"))

            total = data.get("maxErgebnisse") or 0
            if page * RESULTS_PER_PAGE >= total:
                break

    rows: list[dict] = []
    for refnr in candidate_refnrs:
        encoded = base64.b64encode(refnr.encode()).decode()
        detail = client.request_json("GET", DETAIL_URL.format(encoded), headers=_headers())
        if detail is None:
            log.warning("Bundesagentur: jobdetails fetch failed for refnr=%s -- skipped", refnr)
            continue

        description = detail.get("stellenangebotsBeschreibung") or ""
        if not description:
            log.warning("Bundesagentur: no description text for refnr=%s -- skipped", refnr)
            continue

        matches = find_matching_sentences_in_text(description, TERMS_DE)
        if not matches:
            log.warning(
                "Bundesagentur: no verbatim sentence extracted for refnr=%s title=%r (matched search but not confirmed in description text) -- skipped",
                refnr, detail.get("stellenangebotsTitel"),
            )
            continue

        sentence, matched_term = matches[0]
        locations = detail.get("stellenlokationen") or []
        countries = sorted({
            (loc.get("adresse") or {}).get("land")
            for loc in locations
            if (loc.get("adresse") or {}).get("land")
        })
        salary_code = detail.get("verguetungsangabe")
        salary = salary_code if salary_code and salary_code != "KEINE_ANGABEN" else None
        url = f"https://www.arbeitsagentur.de/jobsuche/jobdetail/{refnr}"

        rows.append(
            {
                "employer": detail.get("firma"),
                "title": detail.get("stellenangebotsTitel"),
                "country": ",".join(countries) or "DEUTSCHLAND",
                "sector": None,
                "salary_if_stated": salary,
                "verbatim_sentence": sentence,
                "full_url": url,
                "retrieved_at": retrieved_at,
                "source_api": "bundesagentur",
            }
        )

    log.info("Bundesagentur: %d candidate jobs scanned, %d postings stored", len(candidate_refnrs), len(rows))
    return rows
