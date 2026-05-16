export const lessons10 = [
  {
    id: "10-1", chapterId: 10, title: "Võrdeline ja pöördvõrdeline seos. Lineaarfunktsioon",
    hook: { text: "Kiirus püsib konstantne. Mida kauem sõidad, seda pikema tee läbid — otsevõrdeline seos. Rohkem töötajaid, vähem aega — pöördvõrdeline seos!" },
    history: { text: "Lineaarfunktsioone kirjeldas Descartes koordinaatgeomeetria loomisel (1637). Isaac Newton kasutas lineaarseid seoseid liikumise seadustes. 19. sajandil sai statistikas oluliseks regressioonijoon." },
    intuition: { text: "Lineaarfunktsioon y=kx+b on sirge. k näitab tõusu (kui palju y kasvab iga x-i ühiku kohta) ja b on koht, kus sirge lõikab y-telge.", analogy: "Taksomõõdik: algmaksumus (b) + kilomeetri hind (k) × vahemaa (x)." },
    formal: { text: "Lineaarfunktsiooni omadused:", formulas: ["y = kx + b", "k > 0: \\text{ kasvav, } k < 0: \\text{ kahanev}", "k = 0: \\text{ konstantne}", "\\text{Otsevõrdeline: } y = kx \\text{ (läbib alguspunkti)}"] },
    examples: [
      { title: "Graafiku joonistamine", steps: ["y = 2x - 1: x=0 → y=-1, x=2 → y=3", "Tõus k=2, y-lõikepunkt -1"], formula: "y = 2x - 1" },
      { title: "Otsevõrdeline seos", steps: ["Kiirus v=60 km/h. Tee s=vt=60t", "s ja t on otsevõrdelised (k=60)"], formula: "s = 60t" },
      { title: "Pöördvõrdeline seos", steps: ["Töö tegemise aeg t ja töötajate arv n: t = k/n", "Näide: 4 töölist teevad 6 tunniga: k=24", "6 töölisega: t = 24/6 = 4 tundi"], formula: "t = \\frac{k}{n}, \\quad k = 24" }
    ],
    quiz: { question: "y = -3x + 5. Funktsiooni tõus on...", options: ["-3", "5", "3", "-5"], correct: 0, explanation: "y=kx+b kujul k=-3." },
    connection: "Lineaarfunktsioon on matemaatika üks lihtsaim, kuid olulisem funktsioon — alus statistilisele regressioonile ja optimeerimisele.",
    summary: { text: "y=kx+b, kus k=tõus ja b=y-lõikepunkt. Otsevõrdeline: y=kx. Pöördvõrdeline: y=k/x.", formula: "y = kx + b" }
  },
  {
    id: "10-2", chapterId: 10, title: "Ruutfunktsioonid",
    hook: { text: "Heitkeha trajektoor, müüritava maja lainekuju, tasuta kukkumise kõrgus — kõik need on parabooli kujulised!" },
    history: { text: "Parabooli uuris Apollonius (~200 eKr) koonuselõikete teooria raames. Galileo (1564–1642) näitas, et heitkeha trajektoor on parabool, ühendades füüsika ja matemaatika." },
    intuition: { text: "Ruutfunktsioon y=ax²+bx+c on U-kujuline kõver (parabool). Kui a>0, avaneb üles; kui a<0, avaneb alla. Tipp on kõige madalamal/kõrgeimal kohal.", analogy: "Viska pall üles — see läheb parabooli kõveraga üles ja siis alla. Maksimum on paraboli tipus." },
    formal: { text: "Ruutfunktsiooni omadused:", formulas: ["y = ax^2 + bx + c, \\quad a \\neq 0", "\\text{Tipu x-koordinaat: } x_0 = -\\frac{b}{2a}", "\\text{Tipu y-koordinaat: } y_0 = c - \\frac{b^2}{4a}", "\\text{Nullkohad: } x = \\frac{-b \\pm \\sqrt{D}}{2a}"] },
    examples: [
      { title: "Tipu leidmine", steps: ["y = x² - 4x + 3", "Tipu x = -(-4)/(2·1) = 2", "Tipu y = 3 - 16/4 = 3-4 = -1", "Tipp: (2, -1)"], formula: "\\text{Tipp: } \\left(2, -1\\right)" },
      { title: "Nullkohad", steps: ["y = x² - 4x + 3 = 0", "D = 16-12 = 4", "x = (4±2)/2", "x₁=3, x₂=1"], formula: "x_1 = 3, \\quad x_2 = 1" },
      { title: "Maksimumülesanne", steps: ["Joone 2x+y=8 poolt moodustatud ristkülik. Maksimaalne pindala?", "S = x·y = x·(8-2x) = 8x-2x²", "Tipp: x = -8/(2·(-2)) = 2", "Smax = 8·2-2·4 = 8"], formula: "S_{max} = 8 \\text{ (x=2, y=4)}" }
    ],
    quiz: { question: "y = 2x² - 4x + 1. Tipu x-koordinaat?", options: ["1", "2", "-1", "4"], correct: 0, explanation: "x₀ = -(-4)/(2·2) = 4/4 = 1." },
    connection: "Ruutfunktsioon on aluseks ruutvõrranditele, optimeerimisülesannetele ja füüsika mehaanikale.",
    summary: { text: "y=ax²+bx+c. Tipp: x₀=-b/(2a). Parabool avab üles (a>0) või alla (a<0).", formula: "x_0 = -\\frac{b}{2a}" }
  },
  {
    id: "10-3", chapterId: 10, title: "Astmefunktsioonid",
    hook: { text: "Kera ruumala sõltub raadiusest V=4πr³/3 — see on kuupfunktsioon. Valguse intensiivsus langeb kauguse ruuduga — ruutfunktsioon!" },
    history: { text: "Astmefunktsioone uuriti antiikajast. Kepler (1571–1630) avastas, et planeetide orbiitide periood on proportsionaalne nende kauguse 3/2 astmega Päikesest — see on astmeseos." },
    intuition: { text: "Astmefunktsioon y=xⁿ on erinevat tüüpi: positiivne paarisaste → U-kujuline, paaritu aste → S-kujuline. Murtastmed → juured.", analogy: "n=1: sirge, n=2: parabool, n=3: S-kõver. Mida suurem n, seda 'lamam' keskel ja 'järsem' ääres." },
    formal: { text: "Astmefunktsiooni omadused:", formulas: ["y = x^n", "n > 0 \\text{ paarisarv}: \\text{pariteetne, miinimum 0-s}", "n > 0 \\text{ paarituarv}: \\text{paaritu, läbib alguspunkti}", "y = x^{-1} = \\frac{1}{x}: \\text{ hüperbool}"] },
    examples: [
      { title: "y = x³ omadused", steps: ["Paaritu funktsioon: f(-x) = -f(x)", "Kasvav kogu piirkonnas", "Nullkoht x=0"], formula: "y = x^3" },
      { title: "y = x^(-2) = 1/x²", steps: ["Pariteetne funktsioon", "Kahanev (0,+∞) ja kasvav (-∞,0)", "Vertikaalne asümptoot x=0, horisontaalne y=0"], formula: "y = \\frac{1}{x^2}" },
      { title: "Pöördfunktsioon", steps: ["y = √x = x^(1/2)", "Piirkond: x ≥ 0", "Kasvav, konkav allapoole"], formula: "y = \\sqrt{x} = x^{1/2}" }
    ],
    quiz: { question: "y = x^4 on...", options: ["Paaritu funktsioon", "Pariteetne funktsioon", "Konstantne", "Kahanev"], correct: 1, explanation: "(-x)^4 = x^4, seega pariteetne." },
    connection: "Astmefunktsioonid esinevad füüsikas, keemias, geomeetrias ja majanduses (kasulikkusfunktsioonid).",
    summary: { text: "y=xⁿ: paarisaste → pariteetne, paarituaste → paaritu. Murtastmed annavad juuri.", formula: "y = x^n" }
  },
  {
    id: "10-4", chapterId: 10, title: "Funktsiooni tuletis. Diferentseerimine",
    hook: { text: "Kiirus on teeläbimise tuletis aja suhtes. Kiirendus on kiiruse tuletis. Tuletis on 'muutumiskiiruse' mõiste!" },
    history: { text: "Newton ja Leibniz avastasid diferentsiaalarvutuse iseseisvalt 17. sajandil (1660–1680). See on matemaatika suurim avastus uusajal. Leibnizi notatsioon dy/dx on tänapäevalgi kasutusel." },
    intuition: { text: "Tuletis f'(x) näitab, kui kiiresti funktsioon muutub punktis x. Graafiliselt: see on puutuja tõus kohal x. Kui f(x) kasvab kiiresti, on f'(x) suur positiivne arv.", analogy: "Kujuta autos kiirusmõõdikut: see näitab hetkellist kiirust. Kiirusmõõdik on tegelikult tuletis (tee muutus aja järgi)." },
    formal: { text: "Tuletise definitsioon ja reeglid:", formulas: ["f'(x) = \\lim_{h\\to 0} \\frac{f(x+h)-f(x)}{h}", "(x^n)' = nx^{n-1}", "(\\sin x)' = \\cos x", "(\\cos x)' = -\\sin x", "(e^x)' = e^x", "(\\ln x)' = \\frac{1}{x}"] },
    examples: [
      { title: "Lihtne diferentseerimine", steps: ["f(x) = 3x² - 4x + 1", "f'(x) = 6x - 4", "f'(2) = 12 - 4 = 8 (puutuja tõus x=2 kohal)"], formula: "(3x^2 - 4x + 1)' = 6x - 4" },
      { title: "Korrutis- ja jagatise reegel", steps: ["(uv)' = u'v + uv'", "(u/v)' = (u'v - uv')/v²", "Näide: (x·sin x)' = sin x + x·cos x"], formula: "(x \\sin x)' = \\sin x + x\\cos x" },
      { title: "Liitfunktsiooni reegel", steps: ["(f(g(x)))' = f'(g(x))·g'(x)", "Näide: (sin(x²))' = cos(x²)·2x"], formula: "(\\sin(x^2))' = 2x\\cos(x^2)" }
    ],
    quiz: { question: "Mis on f'(x), kui f(x) = x³ - 2x?", options: ["3x² - 2", "x² - 2", "3x² + 2", "3x - 2"], correct: 0, explanation: "(x³)' = 3x², (-2x)' = -2. Kokku: 3x²-2." },
    connection: "Tuletis on diferentsiaalarvutuse alus — kasutatakse optimeerimises, füüsikas (kiirus, kiirendus) ja inseneritöös.",
    summary: { text: "Tuletis f'(x) = muutumiskiirus. (xⁿ)' = nxⁿ⁻¹.", formula: "(x^n)' = nx^{n-1}" }
  },
  {
    id: "10-5", chapterId: 10, title: "Funktsiooni uurimine",
    hook: { text: "Kus on funktsiooni suurim ja vähim väärtus? Kus see kasvab ja kahaneb? Kus on põiked? Funktsiooni uurimine vastab kõigile neile küsimustele!" },
    history: { text: "Funktsiooni uurimine tuletise abil töötasid välja Newton ja Leibniz 17. sajandil. Rolle'i teoreem (1690) ja keskväärtuse teoreem (Lagrange, 1797) on fundamentaalsed tulemused." },
    intuition: { text: "f'(x) > 0 → funktsioon kasvab. f'(x) < 0 → funktsioon kahaneb. f'(x) = 0 → võimalik ekstreemum. Põikepunktis muutub käega suund (nõgus/kumer).", analogy: "Kujuta kabet mäel: kui ronid üles, on tõus positiivne. Tipul on tõus 0. Allaminekul on tõus negatiivne." },
    formal: { text: "Funktsiooni uurimise skeem:", formulas: ["f'(x) > 0 \\Rightarrow \\text{ kasvav}", "f'(x) < 0 \\Rightarrow \\text{ kahanev}", "f'(x_0) = 0 \\text{ ja märgi muutus} \\Rightarrow \\text{ ekstreemum}", "f''(x) > 0 \\Rightarrow \\text{ nõgus, } f''(x) < 0 \\Rightarrow \\text{ kumer}"] },
    examples: [
      { title: "Ekstreemumid", steps: ["f(x) = x³ - 3x", "f'(x) = 3x² - 3 = 3(x-1)(x+1)", "f'=0: x=-1 (maximum) ja x=1 (miinimum)", "f(-1) = 2, f(1) = -2"], formula: "\\text{Max: }(-1, 2), \\text{ Min: }(1, -2)" },
      { title: "Kasvu- ja kahanemisvahemikud", steps: ["f(x) = x³ - 3x", "Kasvav: (-∞,-1) ∪ (1,+∞)", "Kahanev: (-1, 1)"], formula: "f'(x) > 0 \\Rightarrow x < -1 \\text{ või } x > 1" },
      { title: "Põikepunkt", steps: ["f''(x) = 6x", "f''=0: x=0 (märk muutub)", "Põikepunkt (0, 0)"], formula: "f''(0) = 0 \\Rightarrow \\text{põikepunkt } (0,0)" }
    ],
    quiz: { question: "f'(x₀) = 0 ja f''(x₀) > 0. Mis on x₀?", options: ["Lokaalne maksimum", "Lokaalne miinimum", "Põikepunkt", "Asümptoot"], correct: 1, explanation: "f''(x₀)>0 tähendab nõgust — seega lokaalne miinimum." },
    connection: "Funktsiooni uurimine on optimeerimisülesannete alus — kasutatakse inseneritöös, majanduses ja teaduses.",
    summary: { text: "f'>0: kasvab, f'<0: kahaneb, f'=0: võimalik ekstreemum.", formula: "f'(x_0) = 0 \\Rightarrow \\text{võimalik ekstreemum}" }
  },
  {
    id: "10-6", chapterId: 10, title: "Pöördfunktsioon. Liitfunktsioon",
    hook: { text: "Kui f teisendab x → y, siis pöördfunktsioon f⁻¹ teisendab y → x. Logaritm on eksponendi pöördfunktsioon!" },
    history: { text: "Pöördfunktsiooni mõiste formaliseeriti 18.-19. sajandil. Arcsin, arccos, arctan (trigonomeetria pöördfunktsioonid) said oluliseks astronoomias ja navigatsioonis." },
    intuition: { text: "Pöördfunktsioon 'keerab' funktsiooni tagurpidi: x ja y vahetavad kohad. Graafiliselt: peegel joone y=x suhtes.", analogy: "Topelt koor: funktsioon on koodis krüptimine, pöördfunktsioon on dekrüptimine." },
    formal: { text: "Pöördfunktsiooni ja liitfunktsiooni omadused:", formulas: ["f^{-1}(f(x)) = x", "\\text{Graafik: peegel joone } y=x \\text{ suhtes}", "(f \\circ g)(x) = f(g(x)) \\text{ — liitfunktsioon}", "\\frac{d}{dx}f(g(x)) = f'(g(x)) \\cdot g'(x)"] },
    examples: [
      { title: "Pöördfunktsiooni leidmine", steps: ["f(x) = 2x + 3", "y = 2x+3 → x = (y-3)/2", "f⁻¹(x) = (x-3)/2"], formula: "f^{-1}(x) = \\frac{x-3}{2}" },
      { title: "Liitfunktsioon", steps: ["f(x) = x² ja g(x) = x+1", "(f∘g)(x) = f(g(x)) = (x+1)²", "(g∘f)(x) = g(f(x)) = x²+1"], formula: "(f \\circ g)(x) = (x+1)^2" },
      { title: "Logaritm kui pöördfunktsioon", steps: ["f(x) = 2^x, f⁻¹(x) = log₂(x)", "2^(log₂(x)) = x", "log₂(2^x) = x"], formula: "\\log_2(2^x) = x" }
    ],
    quiz: { question: "f(x) = x/3. Mis on f⁻¹(x)?", options: ["3x", "x/3", "3/x", "x-3"], correct: 0, explanation: "y=x/3 → x=3y → f⁻¹(y)=3y, seega f⁻¹(x)=3x." },
    connection: "Pöördfunktsioon on logaritmi, arcsinu ja teiste pöördteisenduste aluseks.",
    summary: { text: "Pöördfunktsioon: f⁻¹(f(x))=x. Liitfunktsioon: (f∘g)(x)=f(g(x)).", formula: "f^{-1}(f(x)) = x" }
  },
  {
    id: "10-7", chapterId: 10, title: "Funktsiooni piirvärtus. Jada piirvärtus",
    hook: { text: "Mida läheb 1/x, kui x läheb lõpmatusesse? Ja mida läheb (sin x)/x, kui x läheb nulli? Piirvärtus vastab!" },
    history: { text: "Piirvärtuse mõiste formaliseeriti 19. sajandil Cauchý (1789–1857) ja Weierstrass'i (1815–1897) poolt. Enne seda kasutati intuitiivseid mõisteid, mis viisid paradoksideni." },
    intuition: { text: "limₓ→ₐ f(x) = L tähendab: kui x läheb a lähedale, läheb f(x) L lähedale. Ei ole oluline, mis juhtub täpselt x=a kohal.", analogy: "Kujuta lähenemist linna: mida lähemale sõidad, seda selgemaks muutub linn. Piirvärtus on linn ise." },
    formal: { text: "Piirvärtuse omadused ja põhivalemid:", formulas: ["\\lim_{x\\to a}(f(x) \\pm g(x)) = \\lim f(x) \\pm \\lim g(x)", "\\lim_{x\\to\\infty}\\frac{1}{x} = 0", "\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1", "\\lim_{n\\to\\infty}\\left(1 + \\frac{1}{n}\\right)^n = e"] },
    examples: [
      { title: "Lihtne piirvärtus", steps: ["lim(x→2) (x²-4)/(x-2)", "= lim(x→2) (x+2)(x-2)/(x-2)", "= lim(x→2) (x+2) = 4"], formula: "\\lim_{x\\to 2}\\frac{x^2-4}{x-2} = 4" },
      { title: "Piirväärtus lõpmatuses", steps: ["lim(x→∞) (2x²+3)/(x²-1)", "= lim 2/(1-1/x²) = 2"], formula: "\\lim_{x\\to\\infty}\\frac{2x^2+3}{x^2-1} = 2" },
      { title: "Jada piirvärtus", steps: ["aₙ = (2n+1)/n = 2 + 1/n", "lim(n→∞) aₙ = 2 + 0 = 2"], formula: "\\lim_{n\\to\\infty}\\frac{2n+1}{n} = 2" }
    ],
    quiz: { question: "lim(x→∞) (3x+1)/x = ?", options: ["3", "1", "∞", "0"], correct: 0, explanation: "(3x+1)/x = 3+1/x → 3 kui x→∞." },
    connection: "Piirvärtus on diferentsiaalarvutuse ja integraalarvutuse alusmõiste.",
    summary: { text: "Piirvärtus: funktsioon läheneb mingile väärtusele. lim(1/x)=0 x→∞, lim(sinx/x)=1 x→0.", formula: "\\lim_{x\\to\\infty}\\frac{1}{x} = 0" }
  },
  {
    id: "10-8", chapterId: 10, title: "Funktsiooni graafiku asümptoodid",
    hook: { text: "1/x ei saa kunagi olla 0, kuid läheb 0-le lähemale ja lähemale. Vertikaalne asümptoot x=0 — joon, millele graafik läheneb, kuid ei jõua." },
    history: { text: "Asümptootide mõiste pärineb kreeka keelest 'mitte kokku langev'. Apollonius (~200 eKr) kirjeldas hüperbooli asümptooote. Ratsionaalfunktsioonide asümptoodid uuriti süsteemselt 17.-18. sajandil." },
    intuition: { text: "Asümptoot on joon, millele graafik lõpmatult läheneb, kuid kunagi ei puutu. Vertikaalne: x=a (nimetaja null). Horisontaalne: y=b (väärtus lõpmatuses). Kaldus: y=kx+b.", analogy: "Kujuta teed, mis läheb horisondi poole — tee 'kohtub' horisondiga lõpmatuses." },
    formal: { text: "Asümptootide leidmine:", formulas: ["\\text{Vertikaalne } x=a: \\lim_{x\\to a}f(x) = \\pm\\infty", "\\text{Horisontaalne } y=b: \\lim_{x\\to\\pm\\infty}f(x) = b", "\\text{Kaldus } y=kx+m: k=\\lim_{x\\to\\infty}\\frac{f(x)}{x}"] },
    examples: [
      { title: "Hüperbooli asümptoodid", steps: ["y = 1/(x-2)", "Vertikaalne: x=2 (nimetaja 0)", "Horisontaalne: lim(x→∞) 1/(x-2) = 0, seega y=0"], formula: "y = \\frac{1}{x-2}: \\; x=2, \\; y=0" },
      { title: "Keerulisem funktsioon", steps: ["y = (x²+1)/x = x + 1/x", "Vertikaalne: x=0", "Kaldus: y=x (sest 1/x→0)"], formula: "y = \\frac{x^2+1}{x}: \\text{ kaldus } y=x" },
      { title: "Ratsionaalfunktsioon", steps: ["y = (2x+1)/(x-3)", "Vertikaalne: x=3", "Horisontaalne: lim = 2, seega y=2"], formula: "y = \\frac{2x+1}{x-3}: \\; x=3, \\; y=2" }
    ],
    quiz: { question: "y = 3/(x+1). Vertikaalne asümptoot?", options: ["x=1", "x=-1", "y=3", "y=0"], correct: 1, explanation: "Nimetaja x+1=0 → x=-1." },
    connection: "Asümptoodid on olulised funktsiooni käitumise mõistmisel lõpmatuses — oluline analüüsis ja inseneri matemaatikas.",
    summary: { text: "Vertikaalne asümptoot: nimetaja null. Horisontaalne: piirväärtus lõpmatuses.", formula: "\\lim_{x\\to\\infty}f(x) = b \\Rightarrow y=b \\text{ on asümptoot}" }
  }
];
