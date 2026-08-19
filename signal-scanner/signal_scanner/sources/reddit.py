"""Reddit search API.

NOT YET VERIFIED LIVE -- awaiting OAuth client_id/client_secret from the
user. Reddit's unauthenticated .json endpoints (www.reddit.com/search.json,
old.reddit.com/search.json) return 403 unconditionally as of 2026, even
with a compliant User-Agent; this is Reddit's documented post-2023 policy,
not a bug. Built against Reddit's official OAuth API docs
(https://www.reddit.com/dev/api), using the client_credentials
("app-only") grant, which needs only a client_id/secret from a "script"
type app at https://www.reddit.com/prefs/apps -- no user login required.

Reddit's public search endpoint (/search) searches submissions (title +
selftext) only; there is no official full-text comment search, so this
source does not claim comment coverage.

Set REDDIT_CLIENT_ID / REDDIT_CLIENT_SECRET env vars to use this source.
"""

import datetime
import logging
import os
import time

import requests

from ..config import ALL_TERMS, USER_AGENT
from ..extract import find_matching_sentences_in_text

log = logging.getLogger(__name__)

TOKEN_URL = "https://www.reddit.com/api/v1/access_token"
SEARCH_URL = "https://oauth.reddit.com/search"
LIMIT = 100
MAX_PAGES_PER_TERM = 2


def _credentials() -> tuple[str, str] | None:
    client_id = os.environ.get("REDDIT_CLIENT_ID")
    client_secret = os.environ.get("REDDIT_CLIENT_SECRET")
    if not client_id or not client_secret:
        return None
    return client_id, client_secret


def _get_token(session: requests.Session, client_id: str, client_secret: str) -> str:
    resp = session.post(
        TOKEN_URL,
        auth=(client_id, client_secret),
        data={"grant_type": "client_credentials"},
        headers={"User-Agent": USER_AGENT},
        timeout=30,
    )
    resp.raise_for_status()
    return resp.json()["access_token"]


def fetch() -> list[dict]:
    creds = _credentials()
    if not creds:
        log.warning("Reddit: REDDIT_CLIENT_ID/REDDIT_CLIENT_SECRET not set, skipping source")
        return []
    client_id, client_secret = creds

    session = requests.Session()
    try:
        token = _get_token(session, client_id, client_secret)
    except requests.RequestException as exc:
        log.error("Reddit: failed to obtain OAuth token: %s", exc)
        return []

    session.headers["Authorization"] = f"bearer {token}"
    session.headers["User-Agent"] = USER_AGENT
    retrieved_at = datetime.datetime.now(datetime.timezone.utc).isoformat()

    rows: list[dict] = []
    seen_ids: set[str] = set()

    for term in ALL_TERMS:
        after = None
        for _ in range(MAX_PAGES_PER_TERM):
            params = {"q": f'"{term}"', "limit": LIMIT, "sort": "new", "type": "link"}
            if after:
                params["after"] = after
            try:
                resp = session.get(SEARCH_URL, params=params, timeout=30)
                resp.raise_for_status()
                data = resp.json()
            except requests.RequestException as exc:
                log.warning("Reddit search failed (%r): %s", term, exc)
                break

            children = (data.get("data") or {}).get("children") or []
            if not children:
                break

            for child in children:
                post = child.get("data") or {}
                post_id = post.get("id")
                text = f"{post.get('title') or ''}\n{post.get('selftext') or ''}"
                matches = find_matching_sentences_in_text(text, [term])
                if not matches:
                    continue
                seen_ids.add(post_id)
                permalink = post.get("permalink")
                url = f"https://www.reddit.com{permalink}" if permalink else None
                if not url:
                    continue
                for sentence, matched_term in matches:
                    rows.append(
                        {
                            "source": "reddit",
                            "employer": post.get("author"),
                            "title": post.get("title"),
                            "country": None,
                            "sentence": sentence,
                            "matched_term": matched_term,
                            "salary": None,
                            "url": url,
                            "retrieved_at": retrieved_at,
                        }
                    )

            after = (data.get("data") or {}).get("after")
            if not after:
                break
            time.sleep(0.5)

    log.info("Reddit: %d unique posts matched, %d sentence matches", len(seen_ids), len(rows))
    return rows
