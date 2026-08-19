"""Query terms and shared settings for the B2B signal scanner."""

# Manual-process phrases, by language. These are matched case-insensitively
# as substrings against individual sentence/line units extracted from job
# descriptions and forum text. Each language list seeds from the phrase(s)
# given in the task and adds a small number of close variants of the same
# verbs (maintain/update/reconcile a tracker/spreadsheet by hand).
QUERY_TERMS = {
    "en": [
        "maintain the tracker",
        "maintain trackers",
        "update spreadsheets",
        "update the spreadsheet",
        "updating spreadsheets",
        "reconcile",
        "reconciling",
        "manually track",
        "manually update",
        "manually reconcile",
        "keep track of",
        "maintain the excel",
        "maintaining excel",
    ],
    "de": [
        "excel-listen pflegen",
        "excel-liste pflegen",
        "tabellen pflegen",
        "tabellen aktualisieren",
        "händisch abgleichen",
        "manuell abgleichen",
        "listen führen",
        "listen pflegen",
        "excel-tabellen führen",
    ],
    "nl": [
        "tabel bijhouden",
        "tabellen bijhouden",
        "spreadsheets bijwerken",
        "handmatig bijhouden",
        "excel-lijst bijhouden",
        "lijsten bijhouden",
    ],
    "fr": [
        "tableau de suivi",
        "tableaux de suivi",
        "mettre à jour les tableaux",
        "réconcilier manuellement",
        "tenir à jour le tableau",
        "mise à jour manuelle des tableaux",
    ],
    "et": [
        "tabelit pidama",
        "tabeleid täitma",
        "exceli tabeleid täitma",
        "käsitsi võrdlema",
        "arvestust pidama",
        "tabelite haldamine",
    ],
    "pl": [
        "prowadzić arkusz",
        "arkusze aktualizować",
        "aktualizować arkusze",
        "ręcznie uzgadniać",
        "prowadzenie arkuszy",
        "ręczna aktualizacja arkuszy",
    ],
}

ALL_TERMS = sorted({term for terms in QUERY_TERMS.values() for term in terms})

USER_AGENT = "eu-b2b-signal-scanner/0.1 (+contact: romek.aus@gmail.com)"

DB_PATH = "signals.db"

EXCLUDED_DOMAINS = {
    "g2.com",
    "capterra.com",
    "linkedin.com",
    "indeed.com",
    "glassdoor.com",
}
