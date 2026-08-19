# EU B2B signal scanner

Scans EU job postings and Hacker News text for the sentence describing
manual spreadsheet/tracker work (a proxy signal for B2B software
opportunities), and stores one row per posting in SQLite. No
summarization: `verbatim_sentence` is the original text, HTML-stripped
and whitespace-normalized only -- never paraphrased.

Scoped to only the sources verified live against real data (see below).
Adzuna and Reddit were built and evaluated in an earlier pass but are
excluded from this collector per instruction to use only sources that
passed verification.

## Endpoint verification (2026-08-19)

Every source was hit live before any pipeline code was written. If an
endpoint 404s or its schema differs from the docs, that's reported, not
built around.

| Source | Status | Notes |
|---|---|---|
| EURES (`jv-searchengine`) | Verified | Search is **POST** with a JSON body, not GET. Schema matches the community OpenAPI spec at github.com/rorar/EURES-API-Documentation. |
| Bundesagentur Jobsuche | Verified, with a correction | `/pc/v4/jobs` (the doc's example) now 403s. The working search endpoint is `/pc/v6/jobs`. Detail endpoint `/pc/v4/jobdetails/{base64(refnr)}` works and is required for full description text (search results don't include it). |
| Hacker News Algolia | Verified | Matches docs exactly. |
| Adzuna | Dropped | Endpoint responds but no real free-tier key was available to confirm the job-record schema; out of scope for this collector. |
| Reddit | Dropped | Every unauthenticated `.json` endpoint 403s; OAuth credentials were never supplied. Out of scope for this collector. |

Excluded per instructions regardless: G2, Capterra, LinkedIn, Indeed,
Glassdoor. Any row whose URL contains one of those domains is dropped
before insert (`cli.py: _is_excluded`) as a backstop.

## Setup

```bash
pip install -r requirements.txt
```

## Run

```bash
python -m signal_scanner.cli --db signals.db --cache-dir cache -v
# or a subset:
python -m signal_scanner.cli --source eures --source hn
```

Re-running is cheap and hits the network only for requests not already
in `cache/`: every raw API response (search pages and detail lookups) is
cached to disk keyed by a hash of method+URL+params/body, so a re-run
after a crash or a code change resumes without re-querying anything
already fetched. Delete the `cache/` directory (or pass a different
`--cache-dir`) to force a fresh pull.

## Schema

```sql
CREATE TABLE signals (
    id                INTEGER PRIMARY KEY AUTOINCREMENT,
    employer          TEXT,
    title             TEXT,
    country           TEXT,
    sector            TEXT,             -- see per-source caveats below
    salary_if_stated  TEXT,
    verbatim_sentence TEXT NOT NULL,    -- exact sentence, never paraphrased
    full_url          TEXT NOT NULL,    -- permanent link to the posting/thread
    retrieved_at      TEXT NOT NULL,    -- ISO 8601 UTC
    source_api        TEXT NOT NULL,    -- eures | bundesagentur | hn
    UNIQUE(full_url)                    -- one row per posting
);
```

One row per posting: if a posting matches more than one query term, the
first verbatim sentence found is stored; the rest are not additional
rows. If a candidate matched an API's own search but no exact sentence
containing one of the query terms could be independently confirmed in
its full description text, that record is skipped and logged as a
warning rather than stored or silently dropped -- see "Failure logging"
below.

### `sector` caveats (never guessed)

- **EURES**: `employer.sectorCodes` (a raw NACE section letter like
  `G`), when EURES itself provides it. Its own docs call this
  "frequently an empty array", confirmed empty across every sampled
  result in testing -- so `sector` is null for most EURES rows. No
  letter-to-label translation is applied: the only lookup endpoint found
  (`shared-data-rest-api/public/reference/nace`) returns bare codes with
  no text label, so translating `G` to a human-readable name would be a
  guess.
- **Bundesagentur**: always null. No sector/branche field exists
  anywhere in the confirmed search or jobdetails schema.
- **HN**: always null. Forum posts have no structured sector field.

## Query terms

```
EN: maintain the tracker, update the spreadsheet, reconcile spreadsheets,
    maintain compliance documentation, coordinate supplier records
DE: Excel-Listen pflegen, Listen aktualisieren, Nachweise verwalten
NL: tabel bijhouden, overzicht bijhouden
FR: tableau de suivi, mise à jour des tableaux
ET: tabelite haldamine, andmete sisestamine
PL: prowadzenie arkuszy, aktualizacja tabel
```

Matching is case-insensitive substring search against each
sentence/bullet line extracted from a posting's description (or an HN
post's title+body), independent of whatever full-text matching the
source's own search API does internally -- every stored sentence is
independently re-confirmed to contain the phrase before insertion.

## Known caveat: negated matches

Substring matching has no notion of negation. In earlier testing,
several Bundesagentur hits were job ads saying the role is *not* just
manual Excel work ("Du willst nicht nur ... Excel-Listen pflegen?" --
"don't want to just maintain Excel lists?", used as a hook to pitch a
different role). These are genuine verbatim matches of the phrase, just
not genuine "this job requires manual work" signals. Filtering those out
automatically would require judgment calls the "verbatim, never
paraphrased" instruction is designed to avoid making silently -- they're
left in the table for you to triage by eye.

## Failure logging

Nothing is silently dropped. Every skip is logged at WARNING or above
with identifying detail (job ID/refnr/objectID, title, reason):

- a request that failed after retries (network error, repeated 429/5xx)
- a 404 on a detail lookup
- a search hit with no usable ID/URL
- a candidate whose description had no text, or where none of the query
  terms could be independently confirmed as an exact substring of any
  sentence (i.e. the source's own search matched something our
  extractor couldn't verify verbatim)
- a row dropped for being on an excluded domain

Run with `-v` to also see per-request debug detail; without it you still
get every WARNING/ERROR on stdout/stderr.

## Rate limiting

Each source uses its own `CachedClient` (`signal_scanner/httpcache.py`)
with a minimum interval between *network* requests (cache hits are
instant, no delay): EURES and Bundesagentur at 1 request/second,
Hacker News Algolia at 2/second. Transient failures (429, 5xx, network
errors) back off exponentially (or honor `Retry-After` when the server
sends one) and retry up to 3 times before being logged as a failure and
skipped.
