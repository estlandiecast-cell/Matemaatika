"""SQLite storage for extracted signals -- one row per posting."""

import sqlite3

SCHEMA = """
CREATE TABLE IF NOT EXISTS signals (
    id                INTEGER PRIMARY KEY AUTOINCREMENT,
    employer          TEXT,
    title             TEXT,
    country           TEXT,
    sector            TEXT,
    salary_if_stated  TEXT,
    verbatim_sentence TEXT NOT NULL,
    full_url          TEXT NOT NULL,
    retrieved_at      TEXT NOT NULL,
    source_api        TEXT NOT NULL,
    UNIQUE(full_url)
);
"""


def connect(db_path: str) -> sqlite3.Connection:
    conn = sqlite3.connect(db_path)
    conn.execute(SCHEMA)
    conn.commit()
    return conn


def insert_signal(conn: sqlite3.Connection, row: dict) -> bool:
    """Insert one signal row (one per posting). Returns True if newly
    inserted, False if this posting's URL was already stored."""
    try:
        conn.execute(
            """
            INSERT INTO signals
                (employer, title, country, sector, salary_if_stated,
                 verbatim_sentence, full_url, retrieved_at, source_api)
            VALUES (:employer, :title, :country, :sector, :salary_if_stated,
                    :verbatim_sentence, :full_url, :retrieved_at, :source_api)
            """,
            row,
        )
        conn.commit()
        return True
    except sqlite3.IntegrityError:
        return False
