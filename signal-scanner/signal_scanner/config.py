"""Query terms and shared settings for the B2B signal scanner."""

# Manual-process phrases, by language, exactly as specified for this run.
QUERY_TERMS = {
    "en": [
        "maintain the tracker",
        "update the spreadsheet",
        "reconcile spreadsheets",
        "maintain compliance documentation",
        "coordinate supplier records",
    ],
    "de": [
        "excel-listen pflegen",
        "listen aktualisieren",
        "nachweise verwalten",
    ],
    "nl": [
        "tabel bijhouden",
        "overzicht bijhouden",
    ],
    "fr": [
        "tableau de suivi",
        "mise à jour des tableaux",
    ],
    "et": [
        "tabelite haldamine",
        "andmete sisestamine",
    ],
    "pl": [
        "prowadzenie arkuszy",
        "aktualizacja tabel",
    ],
}

ALL_TERMS = sorted({term for terms in QUERY_TERMS.values() for term in terms})

USER_AGENT = "eu-b2b-signal-scanner/0.2 (+contact: romek.aus@gmail.com)"

DB_PATH = "signals.db"
CACHE_DIR = "cache"

EXCLUDED_DOMAINS = {
    "g2.com",
    "capterra.com",
    "linkedin.com",
    "indeed.com",
    "glassdoor.com",
}
