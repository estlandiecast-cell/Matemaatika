"""Run every configured source and store matches in SQLite."""

import argparse
import logging

from . import db
from .config import DB_PATH, EXCLUDED_DOMAINS
from .sources import adzuna, bundesagentur, eures, hn, reddit

SOURCES = {
    "eures": eures.fetch,
    "bundesagentur": bundesagentur.fetch,
    "hn": hn.fetch,
    "adzuna": adzuna.fetch,
    "reddit": reddit.fetch,
}


def _is_excluded(url: str) -> bool:
    return any(domain in url for domain in EXCLUDED_DOMAINS)


def run(db_path: str, sources: list[str]) -> None:
    conn = db.connect(db_path)
    total_inserted = 0
    total_seen = 0

    for name in sources:
        fetch = SOURCES[name]
        logging.info("Running source: %s", name)
        rows = fetch()
        for row in rows:
            total_seen += 1
            if _is_excluded(row["url"]):
                logging.warning("Dropping row from excluded domain: %s", row["url"])
                continue
            if db.insert_signal(conn, row):
                total_inserted += 1

    logging.info("Done. %d rows seen, %d new rows inserted into %s", total_seen, total_inserted, db_path)
    conn.close()


def main() -> None:
    parser = argparse.ArgumentParser(description="EU B2B software opportunity signal scanner")
    parser.add_argument("--db", default=DB_PATH, help="SQLite output path")
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

    run(args.db, args.source or list(SOURCES.keys()))


if __name__ == "__main__":
    main()
