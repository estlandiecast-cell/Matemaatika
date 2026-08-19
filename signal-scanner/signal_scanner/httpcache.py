"""Polite, rate-limited HTTP client that caches raw JSON responses to disk.

A cache hit never touches the network, so re-runs are free and repeatable.
Failures (network errors, unexpected status codes, non-JSON bodies) are
logged with enough detail to diagnose, and return None rather than
raising -- callers are responsible for treating None as "this request
failed, log and skip", never as "no results"."""

import hashlib
import json
import logging
import time
from pathlib import Path

import requests

log = logging.getLogger(__name__)


class RateLimiter:
    def __init__(self, min_interval: float):
        self.min_interval = min_interval
        self._last = 0.0

    def wait(self) -> None:
        elapsed = time.monotonic() - self._last
        remaining = self.min_interval - elapsed
        if remaining > 0:
            time.sleep(remaining)
        self._last = time.monotonic()


class CachedClient:
    def __init__(self, cache_dir: str | Path, min_interval: float, session: requests.Session | None = None):
        self.cache_dir = Path(cache_dir)
        self.cache_dir.mkdir(parents=True, exist_ok=True)
        self.limiter = RateLimiter(min_interval)
        self.session = session or requests.Session()

    def _cache_path(self, method: str, url: str, params, json_body) -> Path:
        key_material = json.dumps(
            {"method": method, "url": url, "params": params, "json": json_body},
            sort_keys=True,
            default=str,
        )
        digest = hashlib.sha256(key_material.encode()).hexdigest()
        return self.cache_dir / f"{digest}.json"

    def request_json(
        self,
        method: str,
        url: str,
        *,
        params: dict | None = None,
        json_body: dict | None = None,
        headers: dict | None = None,
        max_retries: int = 3,
        timeout: int = 30,
    ) -> dict | list | None:
        cache_path = self._cache_path(method, url, params, json_body)
        if cache_path.exists():
            try:
                return json.loads(cache_path.read_text())
            except (OSError, json.JSONDecodeError) as exc:
                log.warning("Cache file unreadable (%s), refetching: %s", cache_path, exc)

        for attempt in range(1, max_retries + 1):
            self.limiter.wait()
            try:
                resp = self.session.request(
                    method, url, params=params, json=json_body, headers=headers, timeout=timeout
                )
            except requests.RequestException as exc:
                log.warning(
                    "Request failed (%s %s params=%s, attempt %d/%d): %s",
                    method, url, params, attempt, max_retries, exc,
                )
                time.sleep(2**attempt)
                continue

            if resp.status_code == 429 or resp.status_code >= 500:
                retry_after = float(resp.headers.get("Retry-After", 2**attempt))
                log.warning(
                    "%d from %s %s params=%s (attempt %d/%d), backing off %.1fs",
                    resp.status_code, method, url, params, attempt, max_retries, retry_after,
                )
                time.sleep(retry_after)
                continue

            if resp.status_code == 404:
                log.warning("404 for %s %s params=%s", method, url, params)
                return None

            if not resp.ok:
                log.warning(
                    "Unexpected status %d for %s %s params=%s: %s",
                    resp.status_code, method, url, params, resp.text[:300],
                )
                return None

            try:
                data = resp.json()
            except ValueError:
                log.warning("Non-JSON response for %s %s params=%s", method, url, params)
                return None

            cache_path.write_text(json.dumps(data))
            return data

        log.error("Giving up on %s %s params=%s after %d attempts", method, url, params, max_retries)
        return None
