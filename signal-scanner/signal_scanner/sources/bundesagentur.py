"""Bundesagentur fuer Arbeit Jobsuche API.

Verified 2026-08-19: the doc's /pc/v4/jobs example now 403s (deprecated).
The working search endpoint is /pc/v6/jobs, confirmed with real data and
full-text matching (not just job-title matching, despite the "was" param
being documented as title-only). Detail endpoint /pc/v4/jobdetails/{id}
(base64 of referenznummer) is confirmed and holds the full description
text needed for verbatim sentence extraction. See
github.com/bundesAPI/jobsuche-api.
"""

import base64
import datetime
import logging
import time

import requests

from ..config import QUERY_TERMS, USER_AGENT
from ..extract import find_matching_sentences_in_text

log = logging.getLogger(__name__)

API_KEY = "jobboerse-jobsuche"
SEARCH_URL = "https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v6/jobs"
DETAIL_URL = "https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v4/jobdetails/{}"
RESULTS_PER_PAGE = 50
MAX_PAGES_PER_TERM = 4

TERMS_DE = QUERY_TERMS["de"]


def _headers() -> dict:
    return {"X-API-Key": API_KEY, "User-Agent": USER_AGENT}


def _search_page(session: requests.Session, term: str, page: int) -> dict:
    resp = session.get(
        SEARCH_URL,
        headers=_headers(),
        params={"was": term, "size": RESULTS_PER_PAGE, "page": page},
        timeout=30,
    )
    resp.raise_for_status()
    return resp.json()


def _fetch_detail(session: requests.Session, refnr: str) -> dict | None:
    encoded = base64.b64encode(refnr.encode()).decode()
    resp = session.get(DETAIL_URL.format(encoded), headers=_headers(), timeout=30)
    if resp.status_code == 404:
        return None
    resp.raise_for_status()
    return resp.json()


def fetch() -> list[dict]:
    session = requests.Session()
    retrieved_at = datetime.datetime.now(datetime.timezone.utc).isoformat()

    candidate_refnrs: set[str] = set()

    for term in TERMS_DE:
        for page in range(1, MAX_PAGES_PER_TERM + 1):
            try:
                data = _search_page(session, term, page)
            except requests.RequestException as exc:
                log.warning("Bundesagentur search failed (%r, page %d): %s", term, page, exc)
                break

            results = data.get("ergebnisliste") or []
            if not results:
                break
            for job in results:
                refnr = job.get("referenznummer")
                if refnr:
                    candidate_refnrs.add(refnr)

            total = data.get("maxErgebnisse") or 0
            if page * RESULTS_PER_PAGE >= total:
                break
            time.sleep(0.2)

    rows: list[dict] = []
    for refnr in candidate_refnrs:
        try:
            detail = _fetch_detail(session, refnr)
        except requests.RequestException as exc:
            log.warning("Bundesagentur jobdetails failed (%s): %s", refnr, exc)
            continue
        if not detail:
            continue

        description = detail.get("stellenangebotsBeschreibung") or ""
        matches = find_matching_sentences_in_text(description, TERMS_DE)
        if not matches:
            continue

        locations = detail.get("stellenlokationen") or []
        countries = sorted({
            (loc.get("adresse") or {}).get("land")
            for loc in locations
            if (loc.get("adresse") or {}).get("land")
        })
        salary_code = detail.get("verguetungsangabe")
        salary = salary_code if salary_code and salary_code != "KEINE_ANGABEN" else None
        url = f"https://www.arbeitsagentur.de/jobsuche/jobdetail/{refnr}"

        for sentence, matched_term in matches:
            rows.append(
                {
                    "source": "bundesagentur",
                    "employer": detail.get("firma"),
                    "title": detail.get("stellenangebotsTitel"),
                    "country": ",".join(countries) or "DEUTSCHLAND",
                    "sentence": sentence,
                    "matched_term": matched_term,
                    "salary": salary,
                    "url": url,
                    "retrieved_at": retrieved_at,
                }
            )
        time.sleep(0.1)

    log.info("Bundesagentur: %d candidate jobs scanned, %d sentence matches", len(candidate_refnrs), len(rows))
    return rows
