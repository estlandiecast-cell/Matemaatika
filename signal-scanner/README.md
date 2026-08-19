# EU B2B signal scanner

Scans EU job postings and forum text for sentences describing manual
spreadsheet/tracker work (a proxy signal for B2B software opportunities),
and stores the verbatim matching sentences in a SQLite database. No
summarization: the `sentence` column is the original text, HTML-stripped
and whitespace-normalized only.

## Endpoint verification (2026-08-19)

Every source was hit live before any pipeline code was written, per the
project's own rule: if an endpoint 404s or the schema differs from its
docs, stop and report rather than build around a guess.

| Source | Status | Notes |
|---|---|---|
| EURES (`jv-searchengine`) | Verified | Search is **POST** with a JSON body, not GET as the task description implied. Schema matches the community OpenAPI spec at github.com/rorar/EURES-API-Documentation. |
| Bundesagentur Jobsuche | Verified, with a correction | `/pc/v4/jobs` (the doc's example) now 403s. The working search endpoint is `/pc/v6/jobs`. Detail endpoint `/pc/v4/jobdetails/{base64(refnr)}` works and is required for full description text (search results don't include it). |
| Hacker News Algolia | Verified | Matches docs exactly. |
| Adzuna | **Unverified** | Endpoint responds correctly (401 `AUTH_FAIL` on placeholder credentials, matching the documented error shape) but no real free-tier key was available to confirm the job-record schema. Built from developer.adzuna.com/docs/search. Known source limitation: Adzuna's API only returns a keyword-centered *snippet* of the description, not the full text -- a manual-task phrase outside that snippet will not be found. |
| Reddit | **Not yet verified live** | Every unauthenticated `.json` endpoint 403s (Reddit's documented post-2023 policy). Built against Reddit's official OAuth `client_credentials` flow, which needs a `client_id`/`client_secret` from a free "script" app. Reddit's `/search` endpoint covers submissions (title + selftext) only -- there's no official full-text comment search. |

Excluded per instructions: G2, Capterra, LinkedIn, Indeed, Glassdoor. Any
row whose URL contains one of those domains is dropped before insert
(`cli.py: _is_excluded`), as a backstop -- none of the five sources above
scrape those sites anyway.

## Setup

```bash
pip install -r requirements.txt
```

Optional credentials (sources are skipped, not faked, if unset):

```bash
export ADZUNA_APP_ID=...
export ADZUNA_APP_KEY=...
export REDDIT_CLIENT_ID=...
export REDDIT_CLIENT_SECRET=...
```

## Run

```bash
python -m signal_scanner.cli --db signals.db
# or a subset:
python -m signal_scanner.cli --source eures --source bundesagentur
```

## Schema

```sql
CREATE TABLE signals (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    source       TEXT NOT NULL,   -- eures | bundesagentur | hn | adzuna | reddit
    employer     TEXT,
    title        TEXT,
    country      TEXT,
    sentence     TEXT NOT NULL,   -- verbatim, no summarization
    matched_term TEXT,            -- which query term triggered this row
    salary       TEXT,
    url          TEXT NOT NULL,   -- permanent link to the posting/thread
    retrieved_at TEXT NOT NULL,   -- ISO 8601 UTC
    UNIQUE(url, sentence)
);
```

## Known caveat: negated matches

Substring matching has no notion of negation. In testing, several
Bundesagentur hits were job ads saying the role is *not* just manual
Excel work ("Du willst nicht nur ... Excel-Listen pflegen?" -- "don't
want to just maintain Excel lists?", used as a hook to pitch a different
role). These are genuine verbatim matches of the phrase, just not
genuine "this job requires manual reconciliation" signals. Filtering
those out would require judgment calls the task's "no summarisation, raw
sentences" instruction is designed to avoid making automatically -- so
they're left in the table for you to triage by eye (`matched_term`
column makes them easy to spot and filter downstream).

## Query terms

Manual-process phrases in EN/DE/NL/FR/ET/PL, defined in
`signal_scanner/config.py`. Matching is case-insensitive substring search
against each sentence/bullet line extracted from a posting's description
(or a forum post's title+body), independent of whatever full-text
matching the source's own search API does -- every stored sentence is
independently confirmed to contain the phrase before insertion.
