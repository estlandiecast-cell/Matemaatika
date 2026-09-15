# Prompt-pakett: Eesti rahvuskultuur + videosüžee

Siin kaustas on kaks tootmisvalmis spetsialisti-prompti ja kogu nende
arendusjälg (brief → variandid → kriitika → lõppversioon → testid).

| Kaust | Mida annab |
|---|---|
| [`METHOD.md`](METHOD.md) | Korduskasutatav optimeerimistsükkel (BMAD + PromptWizard + GEPA hübriid) |
| [`eesti-rahvuskultuur/`](eesti-rahvuskultuur/) | Eesti rahvuskultuuri ja selle säilitamise spetsialist |
| [`video-syzee/`](video-syzee/) | Videosüžee / sisu väljamõtleja koos sõnade ja plotiga |
| [`reference/`](reference/) | Faktibaas, mida mõlemad promptid kasutavad |
| [`evals/`](evals/) | promptfoo testikomplekt mõlemale promptile |

## Kuidas kasutada

**Claude Code'is** — agendid on repos olemas (`.claude/agents/`), nii et
nad ilmuvad automaatselt, kui selles kaustas sessiooni alustad:

```
/agents                       # nimekirjas: eesti-kultuur, video-syzee
```

Kutsu nimega:

```
> kasuta eesti-kultuur agenti: kirjelda Kihnu naise rõivastust
> kasuta video-syzee agenti: 45 s vertikaalvideo mardisantidest
```

Claude võib neid ka ise valida, kui teema kattub agendi kirjeldusega.

**Ahelas** — nii nad on mõeldud koos töötama:

```
> kasuta eesti-kultuur agenti ja kogu faktid Setomaa leelo kohta,
  seejärel anna need video-syzee agendile 3-osalise sarja jaoks
```

Kultuuriagent annab faktid koos `[KONTROLLI]` märgetega, videoagent
kannab need märked stsenaariumisse edasi — nii ei kao ebakindlus
tootmisahelas ära.

**Mujal (ChatGPT, Gemini, API)** — kopeeri süsteemipromptiks:

- `prompts/eesti-rahvuskultuur/03-FINAL.md`
- `prompts/video-syzee/03-FINAL.md`

**Testimine:**

```bash
npx promptfoo@latest eval -c prompts/evals/culture.promptfoo.yaml
npx promptfoo@latest eval -c prompts/evals/video.promptfoo.yaml
npx promptfoo@latest view
```

## Kust meetod pärineb

Valitud tööriistad ja see, mida igaühest võeti:

| Repo | Tähed | Mis siit võetud |
|---|---:|---|
| [microsoft/PromptWizard](https://github.com/microsoft/PromptWizard) | ~4k | Tuum: genereeri variante → hinda → kritiseeri → sünteesi parem prompt |
| [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) | ~37,6k | Signatuuri mõtteviis: sisend/väljund kirjeldatakse lepinguna, mitte jutuna |
| [gepa-ai/gepa](https://github.com/gepa-ai/gepa) | — | Reflektiivne mutatsioon: paranda prompti *täidetud jälje* põhjal, mitte skoori põhjal (ICLR 2026) |
| [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) | ~24,7k | Evalid: iga prompti kohta käivitatav testikomplekt |
| [github/spec-kit](https://github.com/github/spec-kit) | ~132k | Spec → plaan → ülesanded: `00-brief.md` on spetsifikatsioon, mitte märkmed |
| [bmad-code-org/BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) | ~52,2k | Rollipõhine agent + "elicitation": agent küsib enne tootmist täpsustusi |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | ~66,6k | Muudatused käivad läbi spetsi, mitte otse lõppfaili |
| [obra/superpowers](https://github.com/obra/superpowers) | ~279k | Oskuste pakendamine korduskasutatavaks failiks |
| [linshenkx/prompt-optimizer](https://github.com/linshenkx/prompt-optimizer) | ~33,6k | Käsitsi kiirparandusteks, kui GUI on mugavam |
| [SalesforceAIResearch/promptomatix](https://github.com/SalesforceAIResearch/promptomatix) | ~188 | Lisaleid: automaatne prompti-kompilaator DSPy peal |
| [promptslab/Awesome-Prompt-Engineering](https://github.com/promptslab/awesome-prompt-engineering) | — | Lisaleid: kureeritud tehnikate nimekiri |

Kaks esimest tabelirida katavad 90% tööst: **PromptWizard** genereerib ja
kritiseerib, **promptfoo** tõestab, et uus versioon on vanast parem.
