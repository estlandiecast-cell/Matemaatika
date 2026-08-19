"""SQLite storage for extracted signals."""

import sqlite3

SCHEMA = """
CREATE TABLE IF NOT EXISTS signals (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    source       TEXT NOT NULL,
    employer     TEXT,
    title        TEXT,
    country      TEXT,
    sentence     TEXT NOT NULL,
    matched_term TEXT,
    salary       TEXT,
    url          TEXT NOT NULL,
    retrieved_at TEXT NOT NULL,
    UNIQUE(url, sentence)
);
"""


def connect(db_path: str) -> sqlite3.Connection:
    conn = sqlite3.connect(db_path)
    conn.execute(SCHEMA)
    conn.commit()
    return conn


def insert_signal(conn: sqlite3.Connection, row: dict) -> bool:
    """Insert one signal row. Returns True if a new row was inserted,
    False if it was a duplicate (same url + sentence)."""
    try:
        conn.execute(
            """
            INSERT INTO signals
                (source, employer, title, country, sentence, matched_term,
                 salary, url, retrieved_at)
            VALUES (:source, :employer, :title, :country, :sentence,
                    :matched_term, :salary, :url, :retrieved_at)
            """,
            row,
        )
        conn.commit()
        return True
    except sqlite3.IntegrityError:
        return False
