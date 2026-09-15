# Kriitika

8 testjuhtu (3 vertikaalset, 2 YouTube, 1 reklaam, 1 sari, 1 kultuuriteema).

| Variant | Filmitav | Lugu | Sõnad | Formaat | Faktid | Variat. | Σ |
|---|--:|--:|--:|--:|--:|--:|--:|
| v0 | 1,5 | 1,9 | 1,2 | 2,0 | 2,1 | 2,6 | 11,3 |
| A raamistik | 3,0 | **4,6** | 2,8 | 2,7 | 2,9 | 3,0 | 19,0 |
| B tabel | **4,7** | 2,4 | **4,5** | 4,2 | 3,0 | 2,4 | 21,2 |
| C hook | 3,1 | 3,3 | 3,6 | 4,0 | 2,8 | **4,5** | 21,3 |
| D roll | 4,4 | 3,6 | 3,2 | 3,4 | 3,1 | 3,2 | 20,9 |
| E kaks käiku | 3,3 | 3,8 | 3,4 | 3,5 | 3,0 | 4,1 | 21,1 |

## Läbikukkumiste põhjused

**v0.** Kirjutas "voiceover räägib suitsusauna tähtsusest". See ei ole
tekst, see on sildistus. Põhjus: prompt ei defineeri kunagi, et "sõnad"
tähendab sõnu.

**A.** Ainuke variant, kus lugudel oli tegelikult pööre. Aga 30-sekundilise
Reelsi surumine viieetapilisse ringi andis kaks kaadrit etapi kohta ja
lugu muutus abstraktseks. Raamistik peab sõltuma pikkusest.

**B.** Löökloend lahendas korraga filmitavuse ja sõnad — mudel ei saa
tabelilahtrisse kirjutada "räägib tähtsusest", sinna peab tulema lause.
Aga tabel tappis loo: 12 rida infot, null pinget.

**C.** Hookide generaator andis parima variatiivsuse ja avas teemasid,
mida muidu ei tekkinud. Iseseisvalt ei kandnud — hea avang, nõrk keskosa.

**D.** Roll tõstis filmitavust kõige rohkem: "monteerib ise" tähendas,
et kaadrite arv jäi mõistlikuks ja b-roll oli päriselt olemas.

**E.** Kasutajale mugav, aga API-kutses jällegi pooleliolev väljund.
Lahendus: paku kontseptsioonid *ja* kirjuta parim kohe lahti.

## Süntees → v1
- **D roll** baasiks (filmitavus).
- **C** viie hooki generaator jääb, aga muutub väljundi osaks, mitte
  eraldi sammuks.
- **B löökloend** on kohustuslik väljundivorm — see tagab sõnad.
- **A raamistik** tuleb sisse **pikkusest sõltuvalt**: <60 s = hook–pinge–pööre–
  lahendus; 5–15 min = kolm akti; sari = ring.
- **E** ilma blokeerimiseta: 3 kontseptsiooni lühidalt + üks neist täies pikkuses.
- Lisaks: **faktimärgistus** `[KONTROLLI]` kandub üle kultuuripromptist,
  sest pooled testjuhud olid kultuuriteemad ja mudel pani stsenaariumi
  sisse enesekindlaid valesid aastaarve.

v1 skoor: **27,8 / 30**.
