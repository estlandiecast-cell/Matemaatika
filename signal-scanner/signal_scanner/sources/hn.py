"""Hacker News Algolia search API.

Verified 2026-08-19: GET https://hn.algolia.com/api/v1/search works
exactly as documented, no auth, real story/comment data with HTML-escaped
text fields.
"""

import datetime
import logging
import time

import requests

from ..config import ALL_TERMS, USER_AGENT
from ..extract import find_matching_sentences

log = logging.getLogger(__name__)

SEARCH_URL = "https://hn.algolia.com/api/v1/search"
HITS_PER_PAGE = 50
MAX_PAGES_PER_TERM = 2


def _search(session: requests.Session, term: str, tags: str, page: int) -> dict:
    resp = session.get(
        SEARCH_URL,
        params={"query": f'"{term}"', "tags": tags, "hitsPerPage": HITS_PER_PAGE, "page": page},
        timeout=30,
    )
    resp.raise_for_status()
    return resp.json()


def fetch() -> list[dict]:
    session = requests.Session()
    session.headers["User-Agent"] = USER_AGENT
    retrieved_at = datetime.datetime.now(datetime.timezone.utc).isoformat()

    rows: list[dict] = []
    seen_object_ids: set[str] = set()

    for term in ALL_TERMS:
        for tags in ("comment", "story"):
            for page in range(MAX_PAGES_PER_TERM):
                try:
                    data = _search(session, term, tags, page)
                except requests.RequestException as exc:
                    log.warning("HN search failed (%r, %s, page %d): %s", term, tags, page, exc)
                    break

                hits = data.get("hits") or []
                if not hits:
                    break

                for hit in hits:
                    object_id = hit.get("objectID")
                    text = hit.get("comment_text") or hit.get("story_text") or hit.get("title") or ""
                    matches = find_matching_sentences(text, [term])
                    if not matches:
                        continue
                    seen_object_ids.add(object_id)
                    title = hit.get("story_title") or hit.get("title")
                    url = f"https://news.ycombinator.com/item?id={object_id}"
                    for sentence, matched_term in matches:
                        rows.append(
                            {
                                "source": "hn",
                                "employer": hit.get("author"),
                                "title": title,
                                "country": None,
                                "sentence": sentence,
                                "matched_term": matched_term,
                                "salary": None,
                                "url": url,
                                "retrieved_at": retrieved_at,
                            }
                        )

                nb_pages = data.get("nbPages") or 1
                if page + 1 >= nb_pages:
                    break
                time.sleep(0.2)

    log.info("HN: %d unique hits, %d sentence matches", len(seen_object_ids), len(rows))
    return rows
