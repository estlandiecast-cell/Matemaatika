# Agendid

Selles kaustas on projekti Claude Code'i alamagendid. Iga fail on üks spetsialist: YAML-päis ütleb, millal agenti kutsuda, ning sisu on tema tööjuhend.

## kirjanduse-filmi-teatri-spetsialist

Eestikeelne kirjanduse, filmi ja teatri spetsialist. Ta analüüsib ja kirjutab: kirjandusanalüüs, arvustus, essee, stsenaariumistseen, näidendistseen, lavastuskontseptsioon, õppematerjal, teksti toimetamine.

**Kasutamine**

```
> kasuta kirjanduse-filmi-teatri-spetsialisti ja kirjuta analüüs Kivirähki „Rehepapi“ jutustaja kohta
```

Claude Code võib agendi ka ise valida, kui küsimus puudutab kirjandust, filmi või teatrit.

**Mille poolest ta erineb tavavastusest**

- Kirjutab alati eesti keeles ja eesti kirjavahemärkidega („…“, mõttekriips, vahemik 1905–1907).
- Ei luba hinnangut ilma tõendita: iga väide vajab tsitaati, stseeni või konkreetset võtet.
- Kasutab eesti oskussõnu, mitte toorlaene (tegelane, süžee, montaaž, rollilahendus).
- Ütleb otse välja, kui ta teost ei tunne, selle asemel et kirjutada üldsõnalist analüüsi.

## Kuidas juhend tehti

Juhend on kirjutatud BMAD-i laienduspakkide agendifaili vormis (roll → reeglid → tööprotsess → väljundivormid → kontroll-loend) ja lihvitud Microsoft PromptWizardi loogika järgi: lähtejuhis → kriitika → parandatud juhis. Kolm ringi:

1. **Lähtejuhis.** „Oled eesti kirjanduse, filmi ja teatri spetsialist, kirjuta eesti keeles.“
   *Kriitika:* roll on olemas, kvaliteedilatt puudub. Mudel võib ikka kirjutada „sügav ja mõtlemapanev teos“.
   *Parandus:* lisatud keelatud hinnangusõnade loend ja vormel „võte → mõju → tõend“ koos halb/hea näidetega.

2. **Teine ring.** *Kriitika:* „korrektne eesti keel“ on mõõtmatu nõue – mudel ei tea, mida täpselt kontrollida.
   *Parandus:* reeglid muudetud kontrollitavaks (jutumärkide kuju, mõttekriipsu pikkus, ülakoma võõrnimedes, pealkirja vormistus, toorlaenude asendustabel).

3. **Kolmas ring.** *Kriitika:* kolm valdkonda kipuvad kokku sulama üheks üldiseks „kunstijutuks“; puudub kaitse väljamõeldud tsitaatide vastu.
   *Parandus:* eraldi analüüsivõtmed kirjandusele, filmile ja teatrile; tõesuse reegel („ära leiuta tsitaate, palu tekst“); seitsmepunktiline kontroll-loend enne väljastamist.

## Allikad

BMAD-stiilis arendusmeetodid:

- [bmad-code-org/BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) – agendifaili vorm ja laienduspakkide loogika; sisaldab ka loomingulise kirjutamise laienduspakki (süžeearhitekt, tegelaskujundaja, maailmaehitaja), kus eesti keele ja teatri spetsialisti ei ole.
- [obra/superpowers](https://github.com/obra/superpowers), [github/spec-kit](https://github.com/github/spec-kit), [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec)

Juhendi optimeerimine:

- [microsoft/PromptWizard](https://github.com/microsoft/PromptWizard) – kriitika- ja parandusring, mida ülal rakendati.
- [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy), [linshenkx/prompt-optimizer](https://github.com/linshenkx/prompt-optimizer), [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo)

Lisaks leitud hoidlad, mis puudutavad otse ilukirjandust ja kirjutamiskvaliteeti (tärnid seisuga 15.09.2026):

| Hoidla | Tärnid | Mida annab |
|---|---:|---|
| [zenstory-ai/oh-story-claudecode](https://github.com/zenstory-ai/oh-story-claudecode) | 6,9 k | 13 Claude Code'i oskust pikaproosa kirjutamiseks koos järjepidevuse jälgimisega failides |
| [conorbronsdon/avoid-ai-writing](https://github.com/conorbronsdon/avoid-ai-writing) | 4,4 k | auditeerib teksti ja eemaldab tüüpilised tehisaruteksti mustrid |
| [PenglongHuang/chinese-novelist-skill](https://github.com/PenglongHuang/chinese-novelist-skill) | 2,9 k | romaani ülesehitus peatükkide kaupa, loomemälu ja automaatkontroll |
| [Nanako0129/sepia](https://github.com/Nanako0129/sepia) | 2,6 k | narratiivistruktuuri parandus ja väljaandepõhised stiilireeglid |
| [coji/natural-japanese](https://github.com/coji/natural-japanese) | 1,1 k | keelespetsiifiline kirjutamisoskus ühele keelele – lähim eeskuju eestikeelsele keelekontrollile |

Kolm esimest rida tabelis andsid otsest sisendit: „ära leiuta“ reegel ja kontroll-loend on laenatud järjepidevuskontrolli mõttest, keelatud hinnangusõnade loend tehisaruteksti mustrite eemaldamise mõttest.
