export const lessons5 = [
  {
    id: "5-1", chapterId: 5, title: "Vektorid. Tehted vektoritega geomeetriliselt",
    hook: { text: "Lennuk lendab põhja poole 500 km/h, kuid tuul puhub itta 100 km/h. Kuhu lennuk tegelikult läheb? See on vektori liitmise ülesanne!" },
    history: { text: "Vektori mõiste formaliseeriti 19. sajandil William Rowan Hamiltoni ja Hermann Grassmanni poolt. Newton kasutas vektori ideed jõudude analüüsimisel, kuid modernne notatsioon on hilisem." },
    intuition: { text: "Vektor on suunatud lõik — tal on nii suurus kui suund. Kaks vektorit liidetakse 'noolest-sabani': pane teise alguspunkt esimese otsa. Tulemus on vektor esimese alguspunktist teise otsa.", analogy: "Kujuta kahte sammu: 3 sammu põhja, siis 4 sammu itta. Tulemuseks on üks diagonaalne samm kirde suunas." },
    formal: { text: "Vektoritehted geomeetriliselt:", formulas: ["\\vec{a} + \\vec{b}: \\text{ kolmnurkade reeglid (pane sabast otsa)}", "\\vec{a} - \\vec{b} = \\vec{a} + (-\\vec{b})", "k\\vec{a}: \\text{ pikkus kordub k korda, suund säilib (k>0) või pöördub (k<0)}", "|\\vec{a}| = \\text{ vektori pikkus (moodul)}"] },
    examples: [
      { title: "Vektori liitmine", steps: ["Vektor a = (3,0) (3 üksust paremale)", "Vektor b = (0,4) (4 üksust üles)", "a + b = (3,4)", "|a+b| = √(9+16) = 5"], formula: "|\\vec{a} + \\vec{b}| = \\sqrt{3^2 + 4^2} = 5" },
      { title: "Vektori korrutamine arvuga", steps: ["Vektor a, |a| = 3", "2a: pikkus on 6, suund sama", "-a: pikkus on 3, suund vastupidine"], formula: "|k\\vec{a}| = |k| \\cdot |\\vec{a}|" },
      { title: "Jõudude liitmine", steps: ["Jõud F₁ = 6 N põhja, F₂ = 8 N itta", "Resultant: |F| = √(36+64) = √100 = 10 N"], formula: "|\\vec{F}| = \\sqrt{6^2 + 8^2} = 10 \\text{ N}" }
    ],
    quiz: { question: "Mis on vektori (-3, 4) moodul?", options: ["5", "7", "1", "12"], correct: 0, explanation: "|(-3,4)| = √(9+16) = √25 = 5." },
    connection: "Vektoreid kasutatakse füüsikas (jõud, kiirus, elektriväli), arvutigraafikas ja inseneritöös.",
    summary: { text: "Vektor on suunaga suurus. Liitmisel: noolest-sabani. |a| = vektori pikkus.", formula: "|\\vec{a}| = \\sqrt{a_x^2 + a_y^2}" }
  },
  {
    id: "5-2", chapterId: 5, title: "Koordinaatidega määratud vektorid",
    hook: { text: "GPS annab asukoha koordinaatidega. Kuidas arvutada vahemaad ja suundi? Vektorid koordinaatides!" },
    history: { text: "Descartes'i koordinaatsüsteem (1637) tegi võimalikuks geomeetria ja algebra ühendamise. Vektorite koordinaatne esitus tegi arvutused palju lihtsamaks ja avas tee arvutigraafikale." },
    intuition: { text: "Vektor punktist A(x₁,y₁) punkti B(x₂,y₂) on AB = (x₂-x₁, y₂-y₁). Koordinaatidega on liitmine ja lahutamine triviaalne: lihtsalt koordinaadid liidad/lahutatult.", analogy: "Kujuta maanteed: kui oled kohal (2,3) ja lähed kohta (5,7), on vektor (3,4)." },
    formal: { text: "Vektori koordinaatides tehted:", formulas: ["\\vec{AB} = (x_2 - x_1, \\; y_2 - y_1)", "\\vec{a} + \\vec{b} = (a_x + b_x, \\; a_y + b_y)", "k\\vec{a} = (ka_x, \\; ka_y)", "\\vec{a} \\cdot \\vec{b} = a_x b_x + a_y b_y \\text{ (skalaarkorrutis)}"] },
    examples: [
      { title: "Vektori leidmine kahe punkti kaudu", steps: ["A(1,2), B(4,6)", "AB = (4-1, 6-2) = (3,4)", "|AB| = √(9+16) = 5"], formula: "\\vec{AB} = (3, 4), \\quad |\\vec{AB}| = 5" },
      { title: "Skalaarkorrutis", steps: ["a = (2,3), b = (4,-1)", "a·b = 2·4 + 3·(-1) = 8-3 = 5"], formula: "\\vec{a} \\cdot \\vec{b} = 2 \\cdot 4 + 3 \\cdot (-1) = 5" },
      { title: "Nurk kahe vektori vahel", steps: ["a = (1,0), b = (1,1)", "cos θ = a·b/(|a|·|b|) = 1/(1·√2) = 1/√2", "θ = 45°"], formula: "\\cos\\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}" }
    ],
    quiz: { question: "Vektor a=(3,0) ja b=(0,4). Mis on |a+b|?", options: ["5", "7", "12", "1"], correct: 0, explanation: "a+b=(3,4), |a+b|=√(9+16)=5." },
    connection: "Vektori skalaarkorrutis on oluline füüsikas (töö, võimsus) ja arvutigraafikas (valgustus).",
    summary: { text: "AB=(x₂-x₁, y₂-y₁). Skalaarkorrutis: a·b=axbx+ayby.", formula: "\\vec{a} \\cdot \\vec{b} = a_x b_x + a_y b_y" }
  },
  {
    id: "5-3", chapterId: 5, title: "Joone võrrandid",
    hook: { text: "Kuidas kirjeldada kõiki punkte, mis asuvad kindlal sirgel? Joone võrrand teeb seda elegantsel viisil!" },
    history: { text: "Sirge võrrandid koordinaatsüsteemis tõi matemaatikasse Descartes 1637. aastal. See ühendas geomeetria algebra — sündis analüütiline geomeetria, mis muutis matemaatika igaveseks." },
    intuition: { text: "Sirge on kogum punktidest, mis alluvad ühele lineaarsele seosele. Tõusuks nimetatakse sirge 'kaldet' — kui palju tõuseb y iga x-i üksuse kohta.", analogy: "Tõus on nagu kaldenurk mäel: tõus 1 tähendab, et iga meetri eest edasi läheb üks meeter üles (45°)." },
    formal: { text: "Sirge võrrandikujud:", formulas: ["y = kx + b \\text{ — tõususirge kuju (k=tõus, b=lõikepunkt y-teljel)}", "\\frac{x}{a} + \\frac{y}{b} = 1 \\text{ — tõikusirge kuju}", "ax + by + c = 0 \\text{ — üldkuju}", "k = \\frac{y_2 - y_1}{x_2 - x_1} \\text{ — tõus kahe punkti kaudu}"] },
    examples: [
      { title: "Tõus ja y-lõikepunkt", steps: ["Sirge y = 2x + 3: tõus k=2, y-lõikepunkt b=3", "Punkt (0,3) on sirgel, punkt (2,7) on sirgel"], formula: "y = 2x + 3: \\; k = 2, \\; b = 3" },
      { title: "Sirge kahe punkti kaudu", steps: ["Punktid (1,2) ja (3,6)", "k = (6-2)/(3-1) = 4/2 = 2", "y - 2 = 2(x - 1)", "y = 2x"], formula: "k = \\frac{6-2}{3-1} = 2, \\quad y = 2x" },
      { title: "Kahe sirge lõikepunkt", steps: ["{y = x + 1, y = -x + 5", "x+1 = -x+5", "2x = 4, x = 2, y = 3", "Lõikepunkt (2,3)"], formula: "x = 2, \\; y = 3" }
    ],
    quiz: { question: "Sirge y = -3x + 1 tõus on...", options: ["1", "-3", "3", "-1"], correct: 1, explanation: "Tõusu kuju y=kx+b, seega k=-3." },
    connection: "Joone võrrandid on koordinaatgeomeetria alus — kasutatakse arvutigraafikas, füüsikas ja statistikas (regressioonijooned).",
    summary: { text: "Sirge: y=kx+b, kus k=tõus, b=y-lõikepunkt. Tõus kahe punkti kaudu: k=(y₂-y₁)/(x₂-x₁).", formula: "y = kx + b, \\quad k = \\frac{\\Delta y}{\\Delta x}" }
  }
];
