"""EURES job search API (europa.eu/eures/api/jv-searchengine).

Verified 2026-08-19: POST (not GET) to
https://europa.eu/eures/api/jv-searchengine/public/jv-search/search
with a JSON body; 200 with real vacancy data. See
github.com/rorar/EURES-API-Documentation for the OpenAPI spec.

Sector: EURES' own docs describe employer.sectorCodes (raw NACE section
letters, e.g. "G") as "frequently an empty array" -- confirmed empty
across every sampled result during testing. We store that raw code when
present and leave sector null otherwise; we do not guess or resolve it
to a friendly label, since the only label-resolution endpoint found
(shared-data-rest-api/public/reference/nace) returns bare letter codes
with no text label.
"""

import datetime
import logging

from ..config import QUERY_TERMS, USER_AGENT
from ..extract import find_matching_sentences
from ..httpcache import CachedClient

log = logging.getLogger(__name__)

SEARCH_URL = "https://europa.eu/eures/api/jv-searchengine/public/jv-search/search"
RESULTS_PER_PAGE = 50
MAX_PAGES_PER_TERM = 4
MIN_INTERVAL_SECONDS = 1.0

LANG_CODES = {"en": "en", "de": "de", "nl": "nl", "fr": "fr", "et": "et", "pl": "pl"}


def _search_page(client: CachedClient, term: str, lang: str, page: int) -> dict | None:
    body = {
        "resultsPerPage": RESULTS_PER_PAGE,
        "page": page,
        "sortSearch": "MOST_RECENT",
        "keywords": [{"keyword": term, "specificSearchCode": "DESCRIPTION"}],
        "publicationPeriod": None,
        "occupationUris": [],
        "skillUris": [],
        "requiredExperienceCodes": [],
        "positionScheduleCodes": [],
        "sectorCodes": [],
        "educationAndQualificationLevelCodes": [],
        "positionOfferingCodes": [],
        "locationCodes": [],
        "euresFlagCodes": [],
        "otherBenefitsCodes": [],
        "requiredLanguages": [],
        "minNumberPost": None,
        "sessionId": f"signal-scanner-{lang}",
        "requestLanguage": LANG_CODES[lang],
    }
    return client.request_json("POST", SEARCH_URL, json_body=body, headers={"User-Agent": USER_AGENT})


def _format_salary(package: dict | None) -> str | None:
    if not package:
        return None
    salary = package.get("salary") or {}
    parts = []
    if salary.get("minimumSalary") is not None:
        parts.append(f"min {salary['minimumSalary']}")
    if salary.get("maximumSalary") is not None:
        parts.append(f"max {salary['maximumSalary']}")
    if salary.get("referenceSalary") is not None:
        parts.append(f"ref {salary['referenceSalary']}")
    if not parts:
        return None
    currency = salary.get("currencyCode") or ""
    interval = salary.get("payingIntervalCode") or ""
    label = " / ".join(parts)
    suffix = " ".join(x for x in [currency, f"per {interval}" if interval else ""] if x)
    return f"{label} {suffix}".strip()


def fetch(cache_dir: str) -> list[dict]:
    client = CachedClient(f"{cache_dir}/eures", MIN_INTERVAL_SECONDS)
    retrieved_at = datetime.datetime.now(datetime.timezone.utc).isoformat()

    candidates_scanned = 0
    stored_urls: set[str] = set()
    rows: list[dict] = []

    for lang, terms in QUERY_TERMS.items():
        if lang not in LANG_CODES:
            continue
        for term in terms:
            for page in range(1, MAX_PAGES_PER_TERM + 1):
                data = _search_page(client, term, lang, page)
                if data is None:
                    log.warning("EURES: giving up on lang=%s term=%r page=%d after repeated failures", lang, term, page)
                    break

                jvs = data.get("jvs") or []
                if not jvs:
                    break

                for jv in jvs:
                    candidates_scanned += 1
                    job_id = jv.get("id")
                    url = f"https://europa.eu/eures/portal/jv-se/jv-details/{job_id}?lang=en" if job_id else None
                    if not url:
                        log.warning("EURES: skipping job with no id, title=%r", jv.get("title"))
                        continue
                    if url in stored_urls:
                        continue

                    translations = jv.get("translations") or {}
                    found = None
                    for jv_lang, tr in translations.items():
                        job_terms = QUERY_TERMS.get(jv_lang)
                        if not job_terms:
                            continue
                        desc_html = tr.get("description") or ""
                        matches = find_matching_sentences(desc_html, job_terms)
                        if matches:
                            found = (tr.get("title") or jv.get("title"), matches[0])
                            break

                    if not found:
                        log.warning(
                            "EURES: no verbatim sentence extracted for job id=%s title=%r (matched search term %r but not confirmed in description text) -- skipped",
                            job_id, jv.get("title"), term,
                        )
                        continue

                    title, (sentence, matched_term) = found
                    employer = (jv.get("employer") or {}).get("name")
                    country = ",".join(sorted((jv.get("locationMap") or {}).keys())) or None
                    sector_codes = (jv.get("employer") or {}).get("sectorCodes") or []
                    sector = ",".join(sector_codes) if sector_codes else None
                    salary = _format_salary(jv.get("offeredRemunerationPackage"))

                    rows.append(
                        {
                            "employer": employer,
                            "title": title,
                            "country": country,
                            "sector": sector,
                            "salary_if_stated": salary,
                            "verbatim_sentence": sentence,
                            "full_url": url,
                            "retrieved_at": retrieved_at,
                            "source_api": "eures",
                        }
                    )
                    stored_urls.add(url)

                total = data.get("numberRecords") or 0
                if page * RESULTS_PER_PAGE >= total:
                    break

    log.info("EURES: %d candidate jobs scanned, %d postings stored", candidates_scanned, len(rows))
    return rows
