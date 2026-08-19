"""EURES job search API (europa.eu/eures/api/jv-searchengine).

Verified 2026-08-19: POST (not GET) to
https://europa.eu/eures/api/jv-searchengine/public/jv-search/search
with a JSON body; 200 with real vacancy data. See
github.com/rorar/EURES-API-Documentation for the OpenAPI spec.
"""

import datetime
import logging
import time

import requests

from ..config import QUERY_TERMS, USER_AGENT
from ..extract import find_matching_sentences

log = logging.getLogger(__name__)

SEARCH_URL = "https://europa.eu/eures/api/jv-searchengine/public/jv-search/search"
RESULTS_PER_PAGE = 50
MAX_PAGES_PER_TERM = 4  # 200 candidates per (language, term) pair

# EURES requestLanguage codes for the languages we search in.
LANG_CODES = {"en": "en", "de": "de", "nl": "nl", "fr": "fr", "et": "et", "pl": "pl"}


def _search_page(session: requests.Session, term: str, lang: str, page: int) -> dict:
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
    resp = session.post(SEARCH_URL, json=body, timeout=30)
    resp.raise_for_status()
    return resp.json()


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


def fetch() -> list[dict]:
    session = requests.Session()
    session.headers["User-Agent"] = USER_AGENT
    retrieved_at = datetime.datetime.now(datetime.timezone.utc).isoformat()

    seen_job_ids: set[str] = set()
    rows: list[dict] = []

    for lang, terms in QUERY_TERMS.items():
        if lang not in LANG_CODES:
            continue
        for term in terms:
            for page in range(1, MAX_PAGES_PER_TERM + 1):
                try:
                    data = _search_page(session, term, lang, page)
                except requests.RequestException as exc:
                    log.warning("EURES request failed (%s, %r, page %d): %s", lang, term, page, exc)
                    break

                jvs = data.get("jvs") or []
                if not jvs:
                    break

                for jv in jvs:
                    job_id = jv.get("id")
                    translations = jv.get("translations") or {}
                    # Match each available language's description against
                    # that same language's own term list, to keep the
                    # matched sentence in its original language.
                    for jv_lang, tr in translations.items():
                        job_terms = QUERY_TERMS.get(jv_lang)
                        if not job_terms:
                            continue
                        desc_html = tr.get("description") or ""
                        matches = find_matching_sentences(desc_html, job_terms)
                        if not matches:
                            continue
                        dedup_key_base = job_id or jv.get("title")
                        employer = (jv.get("employer") or {}).get("name")
                        country = ",".join(sorted((jv.get("locationMap") or {}).keys()))
                        salary = _format_salary(jv.get("offeredRemunerationPackage"))
                        url = (
                            f"https://europa.eu/eures/portal/jv-se/jv-details/{job_id}?lang=en"
                            if job_id
                            else None
                        )
                        if not url:
                            continue
                        for sentence, matched_term in matches:
                            rows.append(
                                {
                                    "source": "eures",
                                    "employer": employer,
                                    "title": tr.get("title") or jv.get("title"),
                                    "country": country or None,
                                    "sentence": sentence,
                                    "matched_term": matched_term,
                                    "salary": salary,
                                    "url": url,
                                    "retrieved_at": retrieved_at,
                                }
                            )
                    if job_id:
                        seen_job_ids.add(job_id)

                total = data.get("numberRecords") or 0
                if page * RESULTS_PER_PAGE >= total:
                    break
                time.sleep(0.2)

    log.info("EURES: %d candidate jobs scanned, %d sentence matches", len(seen_job_ids), len(rows))
    return rows
