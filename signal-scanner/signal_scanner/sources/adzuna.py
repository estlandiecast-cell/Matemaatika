"""Adzuna job search API, free tier.

UNVERIFIED AGAINST LIVE DATA. The endpoint responds (401 AUTH_FAIL with
placeholder credentials, matching the documented error shape), but no
real app_id/app_key was available to confirm the job-record schema
end-to-end. Built from https://developer.adzuna.com/docs/search.

Known limitation from the docs themselves: "we currently only provide a
snippet of the job description in the response" -- Adzuna's free API does
not expose the full job description, only a keyword-centered snippet. A
manual-task phrase that exists in the full posting but falls outside that
snippet will not be found. This is a source limitation, not a bug in the
extractor.

Set ADZUNA_APP_ID / ADZUNA_APP_KEY env vars to use this source.
"""

import datetime
import logging
import os
import time

import requests

from ..config import QUERY_TERMS, USER_AGENT
from ..extract import find_matching_sentences_in_text

log = logging.getLogger(__name__)

BASE_URL = "https://api.adzuna.com/v1/api/jobs/{country}/search/{page}"
RESULTS_PER_PAGE = 20
MAX_PAGES_PER_TERM = 3

# Adzuna does not cover Estonia; assumed primary language per supported
# EU country this scanner targets. Unverified.
COUNTRY_LANGS = {
    "gb": ["en"],
    "de": ["de", "en"],
    "at": ["de"],
    "nl": ["nl", "en"],
    "fr": ["fr"],
    "pl": ["pl"],
}


def _credentials() -> tuple[str, str] | None:
    app_id = os.environ.get("ADZUNA_APP_ID")
    app_key = os.environ.get("ADZUNA_APP_KEY")
    if not app_id or not app_key:
        return None
    return app_id, app_key


def _search_page(session: requests.Session, country: str, term: str, page: int, app_id: str, app_key: str) -> dict:
    resp = session.get(
        BASE_URL.format(country=country, page=page),
        params={
            "app_id": app_id,
            "app_key": app_key,
            "results_per_page": RESULTS_PER_PAGE,
            "what": term,
            "content-type": "application/json",
        },
        timeout=30,
    )
    resp.raise_for_status()
    return resp.json()


def fetch() -> list[dict]:
    creds = _credentials()
    if not creds:
        log.warning("Adzuna: ADZUNA_APP_ID/ADZUNA_APP_KEY not set, skipping source")
        return []
    app_id, app_key = creds

    session = requests.Session()
    session.headers["User-Agent"] = USER_AGENT
    retrieved_at = datetime.datetime.now(datetime.timezone.utc).isoformat()

    rows: list[dict] = []
    seen_ids: set[str] = set()

    for country, langs in COUNTRY_LANGS.items():
        for lang in langs:
            for term in QUERY_TERMS[lang]:
                for page in range(1, MAX_PAGES_PER_TERM + 1):
                    try:
                        data = _search_page(session, country, term, page, app_id, app_key)
                    except requests.RequestException as exc:
                        log.warning("Adzuna search failed (%s, %r, page %d): %s", country, term, page, exc)
                        break

                    results = data.get("results") or []
                    if not results:
                        break

                    for job in results:
                        job_id = job.get("id")
                        snippet = job.get("description") or ""
                        matches = find_matching_sentences_in_text(snippet, [term])
                        if not matches:
                            continue
                        seen_ids.add(job_id)
                        company = (job.get("company") or {}).get("display_name")
                        location = (job.get("location") or {}).get("display_name")
                        salary = None
                        if job.get("salary_min") or job.get("salary_max"):
                            salary = f"{job.get('salary_min')}-{job.get('salary_max')}"
                        url = job.get("redirect_url")
                        if not url:
                            continue
                        for sentence, matched_term in matches:
                            rows.append(
                                {
                                    "source": "adzuna",
                                    "employer": company,
                                    "title": job.get("title"),
                                    "country": location or country.upper(),
                                    "sentence": sentence,
                                    "matched_term": matched_term,
                                    "salary": salary,
                                    "url": url,
                                    "retrieved_at": retrieved_at,
                                }
                            )

                    if len(results) < RESULTS_PER_PAGE:
                        break
                    time.sleep(0.2)

    log.info("Adzuna: %d unique jobs matched, %d sentence matches", len(seen_ids), len(rows))
    return rows
