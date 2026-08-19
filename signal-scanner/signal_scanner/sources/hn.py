"""Hacker News Algolia search API.

Verified 2026-08-19: GET https://hn.algolia.com/api/v1/search works
exactly as documented, no auth, real story/comment data with HTML-escaped
text fields.

HN has no employer/country/sector/salary fields -- this is forum text,
not a job board record. employer is left null (HN username is not a
company), country and sector are always null, salary is only ever
populated if a number happens to appear right in the matched sentence
(it never gets guessed or parsed out separately).
"""

import datetime
import logging

from ..config import ALL_TERMS, USER_AGENT
from ..extract import find_matching_sentences
from ..httpcache import CachedClient

log = logging.getLogger(__name__)

SEARCH_URL = "https://hn.algolia.com/api/v1/search"
HITS_PER_PAGE = 50
MAX_PAGES_PER_TERM = 2
MIN_INTERVAL_SECONDS = 0.5


def fetch(cache_dir: str) -> list[dict]:
    client = CachedClient(f"{cache_dir}/hn", MIN_INTERVAL_SECONDS)
    retrieved_at = datetime.datetime.now(datetime.timezone.utc).isoformat()

    rows: list[dict] = []
    stored_urls: set[str] = set()
    candidates_scanned = 0

    for term in ALL_TERMS:
        for tags in ("comment", "story"):
            for page in range(MAX_PAGES_PER_TERM):
                data = client.request_json(
                    "GET",
                    SEARCH_URL,
                    params={"query": f'"{term}"', "tags": tags, "hitsPerPage": HITS_PER_PAGE, "page": page},
                    headers={"User-Agent": USER_AGENT},
                )
                if data is None:
                    log.warning("HN: giving up on term=%r tags=%s page=%d after repeated failures", term, tags, page)
                    break

                hits = data.get("hits") or []
                if not hits:
                    break

                for hit in hits:
                    candidates_scanned += 1
                    object_id = hit.get("objectID")
                    url = f"https://news.ycombinator.com/item?id={object_id}" if object_id else None
                    if not url:
                        log.warning("HN: hit with no objectID, title=%r", hit.get("title"))
                        continue
                    if url in stored_urls:
                        continue

                    text = hit.get("comment_text") or hit.get("story_text") or hit.get("title") or ""
                    matches = find_matching_sentences(text, [term])
                    if not matches:
                        log.warning(
                            "HN: no verbatim sentence extracted for objectID=%s (matched search but not confirmed) -- skipped",
                            object_id,
                        )
                        continue

                    sentence, matched_term = matches[0]
                    title = hit.get("story_title") or hit.get("title")

                    rows.append(
                        {
                            "employer": None,
                            "title": title,
                            "country": None,
                            "sector": None,
                            "salary_if_stated": None,
                            "verbatim_sentence": sentence,
                            "full_url": url,
                            "retrieved_at": retrieved_at,
                            "source_api": "hn",
                        }
                    )
                    stored_urls.add(url)

                nb_pages = data.get("nbPages") or 1
                if page + 1 >= nb_pages:
                    break

    log.info("HN: %d hits scanned, %d postings stored", candidates_scanned, len(rows))
    return rows
