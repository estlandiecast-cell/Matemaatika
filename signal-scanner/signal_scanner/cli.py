"""Run every configured source and store one row per posting in SQLite."""

import argparse
import logging

from . import db
from .config import CACHE_DIR, DB_PATH, EXCLUDED_DOMAINS
from .sources import bundesagentur, eures, hn

# Only sources verified live against real data/schema (see README).
SOURCES = {
    "eures": eures.fetch,
    "bundesagentur": bundesagentur.fetch,
    "hn": hn.fetch,
}


def _is_excluded(url: str) -> bool:
    return any(domain in url for domain in EXCLUDED_DOMAINS)


def run(db_path: str, cache_dir: str, sources: list[str]) -> None:
    conn = db.connect(db_path)
    total_seen = 0
    total_inserted = 0
    total_excluded = 0
    total_duplicate = 0

    for name in sources:
        fetch = SOURCES[name]
        logging.info("Running source: %s", name)
        rows = fetch(cache_dir)
        for row in rows:
            total_seen += 1
            if _is_excluded(row["full_url"]):
                logging.warning("Dropping row from excluded domain: %s", row["full_url"])
                total_excluded += 1
                continue
            if db.insert_signal(conn, row):
                total_inserted += 1
            else:
                total_duplicate += 1

    logging.info(
        "Done. %d rows seen, %d inserted, %d duplicate, %d excluded. DB: %s",
        total_seen, total_inserted, total_duplicate, total_excluded, db_path,
    )
    conn.close()


def main() -> None:
    parser = argparse.ArgumentParser(description="EU B2B software opportunity signal collector")
    parser.add_argument("--db", default=DB_PATH, help="SQLite output path")
    parser.add_argument("--cache-dir", default=CACHE_DIR, help="Directory for cached raw API responses")
    parser.add_argument(
        "--source",
        action="append",
        choices=list(SOURCES.keys()),
        help="Limit to one or more sources (repeatable). Default: all.",
    )
    parser.add_argument("-v", "--verbose", action="store_true")
    args = parser.parse_args()

    logging.basicConfig(
        level=logging.DEBUG if args.verbose else logging.INFO,
        format="%(asctime)s %(levelname)s %(name)s: %(message)s",
    )
    logging.getLogger("urllib3").setLevel(logging.WARNING)

    run(args.db, args.cache_dir, args.source or list(SOURCES.keys()))


if __name__ == "__main__":
    main()
