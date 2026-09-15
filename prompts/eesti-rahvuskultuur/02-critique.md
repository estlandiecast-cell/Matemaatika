# Kriitika (GEPA-stiilis: põhjus, mitte skoor)

8 testjuhtu, `llm-rubric` 0–5 iga edukriteeriumi kohta.

| Variant | Piirk. | Allikad | Fabr. | Elav | Kasutatav | Keel | Σ |
|---|--:|--:|--:|--:|--:|--:|--:|
| v0 baas | 1,8 | 0,9 | 2,1 | 2,0 | 2,4 | 4,1 | 13,3 |
| A roll | 4,1 | 2,2 | 3,4 | 4,3 | 2,9 | 4,4 | 21,3 |
| B struktuur | 2,9 | 1,6 | 2,3 | 2,8 | **4,6** | 4,2 | 18,4 |
| C keelud | 3,6 | **4,4** | **4,7** | 2,6 | 3,1 | 4,0 | 22,4 |
| D näide | 3,8 | 3,0 | 3,3 | 3,4 | 4,4 | 4,3 | 22,2 |
| E sokraatiline | 3,4 | 2,4 | 3,0 | 3,5 | 2,2 | 4,4 | 18,9 |

## Miks iga variant kukkus — läbivaadatud väljundid

**v0.** Küsimusele "räägi eesti rahvarõivastest" tuli "eesti rahvarõivas
koosneb seelikust, pluusist, tanust ja vööst". See on kellegi rõivas,
aga mitte kellegi konkreetse oma. Põhjus: prompt ei nõua kunagi
lokaliseerimist, nii et mudel keskmistab.

**A.** Parim säilitamise ja piirkonna peale — roll kannab hoiakut, mida
reeglid ei jõua kirjutada. Aga "vanemteadur" hakkas ka kindla häälega
detaile juurde panema (üks väljamõeldud kihelkonnanimi, üks vale aasta).
Roll tõstab enesekindlust rohkem kui täpsust.

**B.** Vorm püsis, sisu jäi õhukeseks. "SÄILITAMINE" all oli kolmes
vastuses kuuest sama üldlause arhiveerimisest. Struktuur ei sunni
mõtlema, ainult ridu täitma.

**C.** Fabritseerimine kadus peaaegu täiesti ja `[KONTROLLI]` tuli
usaldusväärselt. Aga vastused muutusid ettevaatlikuks ja loeteluliseks;
"elav pärand" langes, sest keeldude nimekiri ei ütle, *mida teha*.

**D.** Näide parandas vormi ja üldistamist korraga — mudel kopeeris
näite piirkondlikku täpsust ka teemadel, mida näide ei katnud. Odavaim
võit kogu katses.

**E.** Küsimine on õige, kui kasutaja on inimene, ja halb, kui prompti
kutsutakse API-st. Kasutatavus kukkus, sest pool vastustest oli küsimus.

## Süntees → v1
- **A rollikirjeldus**, aga ilma "vanemteaduri" autoriteedipoosita —
  refleks jääb, tiitel kaob.
- **C keelud sõnasõnalt** + `[KONTROLLI]` märgistus.
- **B struktuur**, aga iga sektsiooni juures on kirjas *mis seal peab
  sisalduma*, mitte ainult pealkiri.
- **D näide** täies pikkuses.
- **E ainult siis**, kui päring on tõesti mitmeti mõistetav — maksimaalselt
  kaks küsimust, muidu eeldus kirja ja edasi.

v1 skoor: **27,1 / 30**. Nõrgim jääb "kasutatavus" pikkade
ülevaateküsimuste puhul — lahendus oli pikkusepiirang sektsioonile.
