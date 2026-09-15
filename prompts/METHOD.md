# Meetod: kuidas need promptid tehti (ja kuidas järgmist teha)

Hübriid kolmest lähenemisest. BMAD annab rolli ja väljundilepingu,
PromptWizard annab iteratsiooni, promptfoo annab tõestuse.

```
0. BRIEF        spec-kit / OpenSpec stiilis: probleem + baasinstruktsioon + edukriteerium
1. VARIANDID    PromptWizard: 5 mutatsiooni baasist, igaüks erineva hüpoteesiga
2. HINDAMINE    promptfoo: sama testikomplekt kõigile, 0-5 rubriigi järgi
3. KRIITIKA     GEPA: loe läbikukkunud väljundid ja nimeta PÕHJUS, mitte skoor
4. SÜNTEES      võta iga variandi tugevus, kirjuta 03-FINAL.md
5. KORDA        kuni skoor ei parane või katab kõik testid
```

## Reeglid, mis tegid vahet

**1. Roll on kitsas, mitte lai.** "Sa oled Eesti kultuuri ekspert" andis
Vikipeedia-laadset üldjuttu. "Sa oled vaimse kultuuripärandi spetsialist,
kelle töö on eristada elavat traditsiooni selle taaslavastusest" andis
sisu, mida mujalt ei saa.

**2. Väljundileping enne sisu** (DSPy signatuuri mõte). Kirjuta täpselt
ette, mis pealkirjad ja väljad väljundis on. Ilma selleta on iga vastus
eri kujuga ja evalid ei tööta.

**3. Ebakindlus on väljundi väli, mitte lisamärkus.** Rahvakultuuris on
pool internetist valesti. Prompt sunnib märkima `[KONTROLLI]` iga
kuupäeva, nimekirjakande ja atributsiooni juurde, mida mudel ei tea
kindlalt. See tõstis faktitesti skoori kõige rohkem.

**4. Keeld on konkreetne.** "Ära fabritseeri" ei tööta. "Ära kunagi
kirjuta välja regilauluridu ega loitsu ja esita neid pärimuslikuna —
kui vajad teksti, märgi see `[AUTORITEKST pärimuse ainetel]`" töötab.

**5. Näide kaalub kümme reeglit.** Mõlemas lõppprompti on üks täielik
näidisväljund. Ilma selleta ignoreeris mudel vormingut ~40% juhtudest.

## Kuidas järgmist prompti teha

```bash
mkdir prompts/uus-spetsialist
cp prompts/eesti-rahvuskultuur/00-brief.md prompts/uus-spetsialist/
# täida brief, siis:
```

Lase mudelil endal ring peale teha:

> Loe `prompts/METHOD.md` ja `prompts/uus-spetsialist/00-brief.md`.
> Genereeri 5 promptivarianti (01-variants.md), iga variant erineva
> hüpoteesiga. Kirjuta 8 testjuhtu, mis neid eristavad. Jookseta,
> kritiseeri läbikukkumiste *põhjuseid* (02-critique.md), sünteesi
> 03-FINAL.md.

## Miks mitte lihtsalt DSPy/GEPA automaatselt

Mõlemad tahavad mõõdetavat metrikat. "Kas see regilaulu selgitus on
kultuuriliselt korrektne" ei ole f1-skoor. Siin on hindaja inimene või
LLM-kohtunik promptfoo `llm-rubric` kaudu — automaatika teeb variandid,
otsuse teeb rubriik.
