export const lessons2 = [
  {
    id: "2-1",
    chapterId: 2,
    title: "Lineaarvõrratused",
    hook: { text: "Kas sul on piisavalt raha? Kas auto jõuab kohale enne tankla sulgemist? Need on lineaarvõrratuste ülesanded — mitte 'millal on võrdne', vaid 'millal on suurem'!" },
    history: { text: "Võrratuste süstemaatiline uurimine algas 17. sajandil. Thomas Harriot (1560–1621) tutvustas märke < ja > oma teoses 1631. aastal. Cauchy ja teised 19. sajandi matemaatikud arendasid võrratuste teooriat täpsemaks." },
    intuition: { text: "Lineaarvõrratus on nagu kaalukauss: mõlemale poole lisamine või eemaldamine ei muuda suhet. Kuid kui pöördad kaalu — nagu korrutades negatiivarvuga — pöördub ka suund!", analogy: "Kujuta kaalu: -2x > 6. Jagatuna -2-ga (kaal pöördub!): x < -3." },
    formal: { text: "Lineaarvõrratuse lahendamise reeglid:", formulas: ["ax + b > c \\Rightarrow ax > c - b", "\\text{Korrutades/jagades negatiivsega: pööra märk}", "ax > b \\Rightarrow x > b/a \\text{ (kui } a > 0\\text{)}", "ax > b \\Rightarrow x < b/a \\text{ (kui } a < 0\\text{)}"] },
    examples: [
      { title: "Lihtne lineaarvõrratus", steps: ["2x - 3 > 7", "2x > 10", "x > 5", "Lahend: x ∈ (5, +∞)"], formula: "2x - 3 > 7 \\Rightarrow x > 5" },
      { title: "Negatiivse kordajaga", steps: ["-3x + 2 ≤ 11", "-3x ≤ 9", "x ≥ -3 (märk pöördub!)", "Lahend: x ∈ [-3, +∞)"], formula: "-3x \\leq 9 \\Rightarrow x \\geq -3" },
      { title: "Kahepoolne võrratus", steps: ["-4 < 2x + 2 ≤ 8", "-6 < 2x ≤ 6", "-3 < x ≤ 3", "Lahend: x ∈ (-3, 3]"], formula: "-3 < x \\leq 3" }
    ],
    quiz: { question: "Lahenda: -2x > 8", options: ["x > -4", "x < -4", "x > 4", "x < 4"], correct: 1, explanation: "-2x > 8 → x < -4 (korrutades -1/2-ga pöördub märk)." },
    connection: "Lineaarvõrratused on aluseks optimeerimisülesannetele ja lineaarprogrammeerimisele, mida kasutatakse majanduses.",
    summary: { text: "Lineaarvõrratus: lahenda nagu võrrand, kuid negatiivarvuga korrutades/jagades pööra märk.", formula: "-ax > b \\Rightarrow x < -b/a" }
  },
  {
    id: "2-2",
    chapterId: 2,
    title: "Ruutvõrratused",
    hook: { text: "Millal on heitkeha kõrgus üle 10 meetri? See nõuab ruutvõrratust — võrratust, kus on x²!" },
    history: { text: "Ruutvõrratused tekkisid loomulikult ruutvõrrandite uurimisel 16.-17. sajandil. Fermat ja Descartes töötasid välja meetodid polünomiaalsete võrratuste lahendamiseks." },
    intuition: { text: "x² > 4 tähendab: 'Millised x väärtused teevad x² suuremaks kui 4?' Graafiku järgi: parabool y = x² on üle joone y = 4 siis, kui x > 2 või x < -2.", analogy: "Kujuta parabooli. Võrratus ax² + bx + c > 0 küsib: kus on parabool üle x-telje?" },
    formal: { text: "Ruutvõrratuse lahendamine:", formulas: ["ax^2 + bx + c > 0", "\\text{1. Leia juured: } ax^2 + bx + c = 0", "\\text{2. Analüüsi märki intervallides}", "x^2 > a^2 \\Leftrightarrow |x| > a \\Leftrightarrow x < -a \\text{ või } x > a"] },
    examples: [
      { title: "x² - 5x + 6 > 0", steps: ["Juured: x = 2 ja x = 3", "Parabool avatud üles (a=1>0)", "Parabool on üle x-telje kui x < 2 või x > 3", "Lahend: (-∞, 2) ∪ (3, +∞)"], formula: "x^2 - 5x + 6 > 0 \\Rightarrow x < 2 \\text{ või } x > 3" },
      { title: "x² - 4 ≤ 0", steps: ["x² ≤ 4", "|x| ≤ 2", "-2 ≤ x ≤ 2", "Lahend: [-2, 2]"], formula: "x^2 \\leq 4 \\Rightarrow -2 \\leq x \\leq 2" },
      { title: "-x² + x + 2 ≥ 0", steps: ["Juured: x = -1 ja x = 2", "Parabool avatud alla (a=-1<0)", "Parabool on x-telje kohal vahemikus [-1, 2]"], formula: "-x^2 + x + 2 \\geq 0 \\Rightarrow -1 \\leq x \\leq 2" }
    ],
    quiz: { question: "Mis on lahend: x² - 9 < 0?", options: ["x < 3", "x > -3", "-3 < x < 3", "x < -3 või x > 3"], correct: 2, explanation: "x² < 9 → |x| < 3 → -3 < x < 3." },
    connection: "Ruutvõrratused esinevad füüsikas (trajektoorid), majanduses (kasumi maksimeerimine) ja inseneritöös.",
    summary: { text: "Ruutvõrratuse lahendamiseks leia parabool, selle juured ja määra märk igas intervallis.", formula: "ax^2 + bx + c > 0 \\Rightarrow \\text{vaata parabooli asukohta}" }
  },
  {
    id: "2-3",
    chapterId: 2,
    title: "Intervallide meetod",
    hook: { text: "Kuidas lahendada keerulist võrratust (x-1)(x+2)(x-3) > 0 ilma iga juhu eraldi läbi proovimata? Intervallide meetod!" },
    history: { text: "Intervallide meetod (ka märkide analüüs) kujunes välja 18.-19. sajandil matemaatilise analüüsi arenguga. See on üldistus ruutvõrratuste lahendamisele ja töötab igasuguste polünomiaalsete võrratuste jaoks." },
    intuition: { text: "Polünoomi märk muutub ainult nullkohtades. Kui tead nullkohti, jaga arvtelg intervallideks. Kontrolli ühe punkti märki igas intervallis — see kehtib kogu intervallis!", analogy: "Kujuta teekonda mäestikus. Kui tee läheb üle mäe (nullkoht), muutub suund. Kontrollides üht punkti tead, kas oled ülespoole või allapoole teel." },
    formal: { text: "Intervallide meetodi sammud:", formulas: ["\\text{1. Leia kõik nullkohad}", "\\text{2. Jaga arvtelg intervalliks nullkohtadega}", "\\text{3. Kontrolli märki igas intervallis}", "\\text{4. Vali sobivad intervallid}"] },
    examples: [
      { title: "(x-1)(x+2) > 0", steps: ["Nullkohad: x = 1 ja x = -2", "Intervallid: (-∞,-2), (-2,1), (1,+∞)", "Kontrolli x=-3: (-4)(-1) = 4 > 0 ✓", "Kontrolli x=0: (-1)(2) = -2 < 0 ✗", "Kontrolli x=2: (1)(4) = 4 > 0 ✓", "Lahend: (-∞,-2) ∪ (1,+∞)"], formula: "(x-1)(x+2) > 0 \\Rightarrow x < -2 \\text{ või } x > 1" },
      { title: "x(x-2)(x+1) ≤ 0", steps: ["Nullkohad: x = -1, 0, 2", "Intervallid: (-∞,-1), (-1,0), (0,2), (2,+∞)", "Märgid: -, +, -, +", "Lahend: (-∞,-1] ∪ [0,2]"], formula: "x(x-2)(x+1) \\leq 0" },
      { title: "(x²-1)/(x-3) < 0", steps: ["Nullkohad: x = -1, 1, 3", "Kontrolli märgid igas intervallis", "Lahend: (-∞,-1) ∪ (1,3)"], formula: "\\frac{x^2-1}{x-3} < 0" }
    ],
    quiz: { question: "Millal on (x+3)(x-1) < 0?", options: ["x < -3 või x > 1", "-3 < x < 1", "x > -3", "x < 1"], correct: 1, explanation: "Nullkohad -3 ja 1. Vahemikus (-3,1) on avaldis negatiivne." },
    connection: "Intervallide meetodit kasutatakse murdvõrratuste, logaritmiliste võrratuste lahendamisel ja funktsiooni märgi analüüsimisel.",
    summary: { text: "Intervallide meetod: leia nullkohad, jaga arvtelg, kontrolli märki igas intervallis.", formula: "\\text{Nullkohad jagavad arvtelje intervalliks}" }
  },
  {
    id: "2-4",
    chapterId: 2,
    title: "Murdvõrratused",
    hook: { text: "Millal on 1/x > 2? See pole lineaarvõrratus — see on murdvõrratus ja sellel on üllatav lahend!" },
    history: { text: "Murdvõrratused tekkisid ratsionaalfunktsioonide uurimisel 17.-18. sajandil. Nende lahendamine muutus süsteemseks koos intervallide meetodi arenguga." },
    intuition: { text: "1/x > 2 ei tähenda 1 > 2x! Murdavaldiste puhul ei tohi otse nimetajaga korrutada, sest ei tea, kas nimetaja on positiivne või negatiivne. Tuleb kasutada intervallide meetodit.", analogy: "Kujuta: 'Kui pühkida vaip alla...' Murdvõrratuste puhul tuleb olla ettevaatlik märkidega." },
    formal: { text: "Murdvõrratuse lahendamine:", formulas: ["\\frac{a}{b} > 0 \\Leftrightarrow (a > 0 \\text{ ja } b > 0) \\text{ või } (a < 0 \\text{ ja } b < 0)", "\\frac{f(x)}{g(x)} > 0 \\Rightarrow \\text{intervallide meetod}", "\\text{Nimetaja } \\neq 0 \\text{ alati!}"] },
    examples: [
      { title: "1/x > 2", steps: ["1/x - 2 > 0", "(1-2x)/x > 0", "Nullkohad: x = 0 (nimis.) ja x = 1/2 (lugeja)", "Vahemik (0, 1/2): positiivne ✓", "Lahend: 0 < x < 1/2"], formula: "\\frac{1}{x} > 2 \\Rightarrow 0 < x < \\frac{1}{2}" },
      { title: "(x+1)/(x-2) ≤ 0", steps: ["Nullkohad: x = -1 (lugeja) ja x = 2 (nimetaja)", "Intervallid: (-∞,-1), (-1,2), (2,+∞)", "Lahend: [-1, 2) (2 ei kuulu, sest nimetaja = 0)"], formula: "\\frac{x+1}{x-2} \\leq 0 \\Rightarrow -1 \\leq x < 2" },
      { title: "(x²-4)/(x+1) > 0", steps: ["(x+2)(x-2)/(x+1) > 0", "Nullkohad: x = -2, -1, 2", "Märgid: -, +, -, +", "Lahend: (-2,-1) ∪ (2,+∞)"], formula: "\\frac{x^2-4}{x+1} > 0" }
    ],
    quiz: { question: "Millal on x/(x-1) > 0?", options: ["x > 1", "x < 0 või x > 1", "0 < x < 1", "x < 0"], correct: 1, explanation: "Nullkohad: x=0, x=1. Positiivne: (-∞,0) ja (1,+∞)." },
    connection: "Murdvõrratused esinevad füüsika valemites, majanduses ja funktsiooni piirkonna määramisel.",
    summary: { text: "Murdvõrratuse lahendamiseks kasuta intervallide meetodit. Nimetaja nullväärtused kuuluvad alati välja lahendist.", formula: "\\frac{f(x)}{g(x)} > 0: \\text{ kasuta intervallide meetodit}" }
  },
  {
    id: "2-5",
    chapterId: 2,
    title: "Võrratusesüsteemid",
    hook: { text: "Vanus on üle 18 ja alla 65. Sissetulek on üle 500 euro kuus. Mitu tingimust korraga — see on võrratusesüsteem!" },
    history: { text: "Võrratusesüsteemid tekkisid loomulikult lineaarprogrammeerimise arenguga 20. sajandil. Georgi Dantzig lõi 1947. aastal simpleksmeetodi, mis lahendab suuri lineaarprogrammeerimise ülesandeid." },
    intuition: { text: "Võrratusesüsteem nõuab, et kõik tingimused oleksid samaaegselt täidetud. Lahendiks on nende lahendihulkade ühisosa.", analogy: "Kujuta, et filtrid: üks filter läbib numbreid > 5, teine filter läbib numbreid < 10. Mõlemat läbivad ainult arvud 5 < x < 10." },
    formal: { text: "Võrratusesüsteemi lahendamine:", formulas: ["\\begin{cases} f_1(x) > 0 \\\\ f_2(x) < 0 \\end{cases}", "\\text{Lahend} = L_1 \\cap L_2", "\\text{Leia iga võrratuse lahend eraldi, siis lõika}"] },
    examples: [
      { title: "Lihtne süsteem", steps: ["{x > 2 ja x < 5", "L₁: x ∈ (2,+∞)", "L₂: x ∈ (-∞,5)", "Ühisosa: x ∈ (2,5)"], formula: "\\begin{cases} x > 2 \\\\ x < 5 \\end{cases} \\Rightarrow 2 < x < 5" },
      { title: "Kompleksem süsteem", steps: ["{2x - 1 > 3 ja x + 4 ≤ 7", "2x > 4 → x > 2", "x ≤ 3", "Lahend: 2 < x ≤ 3"], formula: "2 < x \\leq 3" },
      { title: "Tühja lahendiga süsteem", steps: ["{x > 5 ja x < 3", "L₁: x ∈ (5,+∞)", "L₂: x ∈ (-∞,3)", "Ühisosa: ∅ (tühi) — lahendeid pole"], formula: "\\{x > 5\\} \\cap \\{x < 3\\} = \\emptyset" }
    ],
    quiz: { question: "Lahenda: {x ≥ -1 ja x < 4}", options: ["-1 ≤ x < 4", "x > -1", "x < 4", "Lahendeid pole"], correct: 0, explanation: "Mõlemad tingimused: -1 ≤ x < 4." },
    connection: "Võrratusesüsteemid on lineaarprogrammeerimise alus, mida kasutatakse logistikas, majanduses ja inseneritöös.",
    summary: { text: "Võrratusesüsteemi lahend on kõigi võrratuste lahendite ühisosa.", formula: "\\text{Lahend} = L_1 \\cap L_2 \\cap \\ldots \\cap L_n" }
  }
];
