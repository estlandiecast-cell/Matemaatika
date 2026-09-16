# AI-arendusmeetodid ja prompti-tööriistad

Tärnide arvud on kontrollitud GitHubi API-ga **16.09.2026**. Algses nimekirjas olnud arvud
olid õiged; siin on need värskendatud ja nimekiri laiendatud.

---

## 1. BMAD-stiilis arendusmeetodid (spec-driven development)

### Algne nimekiri, värskendatud

| Repo | ⭐ | Mida teeb |
|---|---:|---|
| [obra/superpowers](https://github.com/obra/superpowers) | 287k | Agendioskuste raamistik + struktureeritud arendusmetoodika |
| [github/spec-kit](https://github.com/github/spec-kit) | 137k | Spec → plaan → ülesanded → teostus, GitHubi enda tööriistakomplekt |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | 68.5k | Kerge spetsifikatsioonipõhine arendus, hea olemasolevas projektis |
| [bmad-code-org/BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) | 53.1k | Täismahus planeerimis- ja arendusraamistik rollipõhiste agentidega |

### Juurde leitud

| Repo | ⭐ | Mida teeb |
|---|---:|---|
| [anthropics/skills](https://github.com/anthropics/skills) | 177k | Anthropicu ametlik Agent Skills repo — oskuste kirjutamise standard ja näited |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | 95k | Tootmiskvaliteediga inseneritöö oskused kodeerimisagentidele |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 54k | Kureeritud kogu Claude Code'i oskustest, agentidest ja tööriistadest |
| [wshobson/agents](https://github.com/wshobson/agents) | 39.7k | Suur valmis subagentide ja pluginate kogu mitmele agendikeskkonnale |
| [humanlayer/12-factor-agents](https://github.com/humanlayer/12-factor-agents) | 25.9k | 12 põhimõtet, mille järgi LLM-rakendus päriselt tootmisse kõlbab |
| [open-gsd/gsd-core](https://github.com/open-gsd/gsd-core) · [gsd-build/gsd-2](https://github.com/gsd-build/gsd-2) | 9.5k · 7.8k | GSD — metaprompti ja kontekstihalduse süsteem pikkadeks autonoomseteks jooksudeks (algne `get-shit-done`, 64k ⭐, on arhiveeritud) |
| [Gentleman-Programming/gentle-ai](https://github.com/Gentleman-Programming/gentle-ai) | 6.9k | Seadistab olemasolevad agendid: püsimälu, SDD, oskused, MCP, review |
| [gemini-cli-extensions/conductor](https://github.com/gemini-cli-extensions/conductor) | 3.7k | Spec → plaan → teostus pluginana (Claude Code, Antigravity) |
| [gotalab/cc-sdd](https://github.com/gotalab/cc-sdd) | 3.7k | Minimaalne SDD-raamistik: kinnitatud spetsist pikk autonoomne teostus |
| [maxritter/pilot-shell](https://github.com/maxritter/pilot-shell) | 2.1k | SDD + TDD + kvaliteedivärvad + püsimälu, tugev verifitseerimisele |
| [spec-kitty/spec-kitty](https://github.com/spec-kitty/spec-kitty) | 1.6k | SDD koos Kanbani töölaua, git worktree'de ja automaatse mergega |
| [GanyuanRan/Aegis](https://github.com/GanyuanRan/Aegis) | 1.2k | Arhitektuuriteadlik töövoog: baasjoon enne, tõendipõhine kontroll, triivikontroll |
| [modu-ai/moai-adk](https://github.com/modu-ai/moai-adk) | 1.2k | SPEC-põhine plan/run/sync + kvaliteedivärvad, üks Go binaar |

---

## 2. Prompti loomine ja optimeerimine

### Algne nimekiri, värskendatud

| Repo | ⭐ | Mida teeb |
|---|---:|---|
| [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) | 38.1k | Programmeerib ja optimeerib prompte näidete ja mõõdiku abil |
| [linshenkx/prompt-optimizer](https://github.com/linshenkx/prompt-optimizer) | 34.8k | Mugav graafilise liidesega prompti kirjutaja ja optimeerija |
| [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) | 25.2k | Testib, võrdleb ja hindab prompte eri mudelitel; CI-sõbralik |
| [mshumer/gpt-prompt-engineer](https://github.com/mshumer/gpt-prompt-engineer) | 9.7k | Genereerib mitu prompti, testib ja järjestab ELO-ga |
| [microsoft/PromptWizard](https://github.com/microsoft/PromptWizard) | 4.0k | Genereerib, kritiseerib ja parandab prompti ning näiteid iteratiivselt |
| [microsoft/prompty](https://github.com/microsoft/prompty) | 1.3k | Prompt failivorminguna: loo, halda, käivita, hinda |
| [meta-llama/prompt-ops](https://github.com/meta-llama/prompt-ops) | 1.1k | Teisendab olemasolevad prompid Llama mudelitele sobivaks |

### Juurde leitud

| Repo | ⭐ | Mida teeb |
|---|---:|---|
| [gepa-ai/gepa](https://github.com/gepa-ai/gepa) | 6.6k | **GEPA** — refleksiivne evolutsiooniline optimeerimine; sageli parem kui klassikalised few-shot optimeerijad, töötab DSPy-ga koos |
| [SylphAI-Inc/AdalFlow](https://github.com/SylphAI-Inc/AdalFlow) | 4.2k | LLM-rakenduse ehitus + automaatne prompti optimeerimine ühes teegis |
| [zou-group/textgrad](https://github.com/zou-group/textgrad) | 3.7k | „Tekstilised gradiendid" — tagasilevi loomuliku keele kaudu (Nature'is avaldatud) |
| [Meirtz/Awesome-Context-Engineering](https://github.com/Meirtz/Awesome-Context-Engineering) | 3.3k | Ülevaade kontekstiinsenerist: sajad artiklid ja raamistikud |
| [microsoft/sammo](https://github.com/microsoft/sammo) | 779 | Struktuuriteadlik mitme eesmärgiga metaprompti optimeerimine |
| [microsoft/Trace](https://github.com/microsoft/Trace) | 757 | Otsast-otsani generatiivne optimeerimine agentidele (mitte ainult promptile) |
| [jxzhangjhu/Awesome-LLM-Prompt-Optimization](https://github.com/jxzhangjhu/Awesome-LLM-Prompt-Optimization) | 418 | Lugemisnimekiri: prompti optimeerimise ja häälestuse meetodid |

---

## 3. Mõõtmine (ilma selleta ei tea, kas prompt läks paremaks)

| Repo | ⭐ | Mida teeb |
|---|---:|---|
| [langfuse/langfuse](https://github.com/langfuse/langfuse) | 34.7k | Avatud lähtekoodiga jälgimine, hindamine ja promptide haldus |
| [mlflow/mlflow](https://github.com/mlflow/mlflow) | 28.0k | Katsete jälgimine ja hindamine, nüüd ka LLM-idele ja agentidele |
| [comet-ml/opik](https://github.com/comet-ml/opik) | 22.1k | LLM-i ja agenditöövoogude jälgimine, automaathindamine, töölauad |
| [Arize-ai/phoenix](https://github.com/Arize-ai/phoenix) | 11.5k | Vaadeldavus ja evalid, tugev RAG-i analüüsis |
| [Agenta-AI/agenta](https://github.com/Agenta-AI/agenta) | 4.8k | Tööruum promptide ja agentide ühiseks arendamiseks ja võrdlemiseks |

---

## 4. Õppematerjal

| Repo | ⭐ | Mida teeb |
|---|---:|---|
| [f/prompts.chat](https://github.com/f/prompts.chat) | 170k | Suur kogukonna promptide kogu (endine Awesome ChatGPT Prompts) |
| [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 78.4k | Juhendid, artiklid ja märkmikud prompti- ja kontekstiinsenerist |
| [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) | 52.7k | Anthropicu enda retseptid ja märkmikud Claude'i kasutamiseks |

---

## Soovitus

**Automaatseks prompti optimeerimiseks:** [PromptWizard](https://github.com/microsoft/PromptWizard)
on endiselt hea valik — annad ülesande kirjelduse ja algse juhise, tema genereerib variandid,
hindab, kritiseerib nõrkusi ja tagastab parema prompti. Tugevaim praegune alternatiiv on
**[DSPy](https://github.com/stanfordnlp/dspy) koos [GEPA](https://github.com/gepa-ai/gepa)
optimeerijaga** — sama idee, aga refleksiivse evolutsiooniga ja tavaliselt väiksema arvu
mudelipäringutega. Kui prompt on pigem tekst kui programm, tee sama asi
[TextGradiga](https://github.com/zou-group/textgrad).

**Graafilise liidesega ja lihtsalt:** [Prompt Optimizer](https://github.com/linshenkx/prompt-optimizer)
(veeb, töölaud, brauserilaiend, Docker).

**BMAD-i asemel:** alusta [Spec Kitist](https://github.com/github/spec-kit) või
[OpenSpecist](https://github.com/Fission-AI/OpenSpec). Olemasolevas projektis on OpenSpec
kergem sisse tuua; uue asja alustamisel annab Spec Kit rohkem struktuuri. Kui tahad ainult
põhimõtteid, mitte raamistikku, loe [12-factor-agents](https://github.com/humanlayer/12-factor-agents).

**Igal juhul lisaks:** pane kõrvale [promptfoo](https://github.com/promptfoo/promptfoo) või
[Langfuse](https://github.com/langfuse/langfuse). Ilma mõõtmiseta on „parem prompt" ainult
tunne — optimeerija vajab mõõdikut, mille järgi valida.
