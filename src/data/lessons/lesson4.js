export const lessons4 = [
  {
    id: "4-1", chapterId: 4, title: "Lähis- ja põiknurgad",
    hook: { text: "Miks on maanteed ristumiskohal täpselt 4 nurka? Ja miks on vastamisi olevad nurgad võrdsed? Geomeetria seletab!" },
    history: { text: "Eukleidese 'Elemendid' (~300 eKr) sisaldavad kõiki põhiteoreeme nurgasuhetest. Need teoreemid on tõestatud üle 2000 aasta ja on siiani fundamentaalsed." },
    intuition: { text: "Lähisnurgad jagavad sirgjoone — nende summa on 180°. Põiknurgad on vastastikku ja need on võrdsed. Paralleelsete joonte lõikamisel tekivad erineva tüüpi nurgapaarid.", analogy: "Kujuta kaht joont ristumas. Tekib 4 nurka — vastastikused on võrdsed (põiknurgad)." },
    formal: { text: "Nurgatüübid:", formulas: ["\\text{Lähisnurgad: } \\alpha + \\beta = 180°", "\\text{Põiknurgad: } \\alpha = \\gamma, \\beta = \\delta", "\\text{Vahelduvad nurgad (paralleelsed jooned): võrdsed}", "\\text{Kaasuvad nurgad (paralleelsed jooned): summa 180°}"] },
    examples: [
      { title: "Lähisnurgad", steps: ["Üks nurk on 65°. Lähisnurk?", "65° + β = 180°", "β = 115°"], formula: "65° + \\beta = 180° \\Rightarrow \\beta = 115°" },
      { title: "Põiknurgad", steps: ["Kaks joont ristuvad. Üks nurk on 40°", "Põiknurk = 40°", "Lähisnurgad = 140°"], formula: "\\text{Põiknurk} = 40°, \\text{ lähisnurk} = 140°" },
      { title: "Paralleelsed jooned", steps: ["Paralleelsed jooned, lõikejoon. Üks nurk 55°", "Vahelduvad nurgad: 55°", "Kaasuvad nurgad: 125°"], formula: "\\text{Vahelduvad nurgad} = 55°" }
    ],
    quiz: { question: "Üks nurk on 70°. Mis on tema põiknurk?", options: ["110°", "70°", "20°", "180°"], correct: 1, explanation: "Põiknurgad on võrdsed: 70°." },
    connection: "Nurgad ja nende omadused on geomeetria alus — kasutatakse arhitektuuris, inseneritöös ja arvutigraafikas.",
    summary: { text: "Lähisnurgad: summa 180°. Põiknurgad: võrdsed. Paralleelsete joonte puhul vahelduvad nurgad võrdsed.", formula: "\\alpha + \\beta = 180° \\text{ (lähisnurgad)}" }
  },
  {
    id: "4-2", chapterId: 4, title: "Kolmnurk ja selle omadused",
    hook: { text: "Miks on kolmnurk ehituses nii tugev kujund? Miks kasutavad sillad kolmnurke? Ja kui suur on üks tohutu kolmnurga nurk?" },
    history: { text: "Kolmnurga omadused on tuntud antiikajast. Pythagorase teoreem (~500 eKr) on matemaatika ajaloo kõige rohkem tõestatud teoreem — üle 370 erineva tõestuse!" },
    intuition: { text: "Kolmnurk on lihtsaim suletud kujund. Tema nurgad annavad kokku alati 180°. Pythagorase teoreem seob täisnurkliku kolmnurga külgede pikkused.", analogy: "Kolmnurk on nagu trilogia: kolm külge ja kolm nurka, mis kõik on omavahel seotud." },
    formal: { text: "Kolmnurga põhiomadused:", formulas: ["\\alpha + \\beta + \\gamma = 180°", "\\text{Pythagorase teoreem: } a^2 + b^2 = c^2 \\text{ (täisnurkne kolmnurk)}", "S = \\frac{1}{2}ah \\text{ — pindala}", "S = \\frac{1}{2}ab\\sin C \\text{ — kahe külje ja nurga kaudu}"] },
    examples: [
      { title: "Nurgad kolmnurgas", steps: ["α = 50°, β = 70°. Leia γ.", "γ = 180° - 50° - 70° = 60°"], formula: "\\gamma = 180° - 50° - 70° = 60°" },
      { title: "Pythagorase teoreem", steps: ["Täisnurkne kolmnurk, kaatetid 3 ja 4", "Hüpotenuus: c² = 3² + 4² = 9 + 16 = 25", "c = 5"], formula: "c = \\sqrt{3^2 + 4^2} = 5" },
      { title: "Kolmnurga pindala", steps: ["Alus a = 8 cm, kõrgus h = 5 cm", "S = (1/2) · 8 · 5 = 20 cm²"], formula: "S = \\frac{1}{2} \\cdot 8 \\cdot 5 = 20 \\text{ cm}^2" }
    ],
    quiz: { question: "Kolmnurga kaks nurka on 45° ja 90°. Kolmas nurk?", options: ["45°", "90°", "60°", "135°"], correct: 0, explanation: "180° - 45° - 90° = 45°." },
    connection: "Kolmnurga omadused on aluseks trigonomeetriale, planimeetriale ja stereomeetriale.",
    summary: { text: "Nurgad: α+β+γ=180°. Pythagorase teoreem: a²+b²=c². Pindala: S=ah/2.", formula: "a^2 + b^2 = c^2" }
  },
  {
    id: "4-3", chapterId: 4, title: "Rööpkülik, romb, trapets",
    hook: { text: "Miks on lauajalg sageli trapetsikujuline? Miks on paljud plaadid rombikujulised? Neil kujunditel on erilised omadused!" },
    history: { text: "Rööpküliku pindala valemit teadsid babiloonlased. Trapetsi pindala valem esineb Ahmes'i papüüruses (1650 eKr) — see on üks vanimaid teadaolevaid matemaatika valemeid." },
    intuition: { text: "Rööpkülik on 'kaldu vajunud ristkülik' — vastaskülged paralleelsed ja võrdsed. Romb on 'kaldu ruut' — kõik küljed võrdsed. Trapets on 'ühel pool kaldu ristkülik'.", analogy: "Romb on kui ruut, mida on kergelt küljele vajutatud." },
    formal: { text: "Nelinurkade omadused:", formulas: ["\\text{Rööpkülik: } S = ah", "\\text{Romb: } S = \\frac{d_1 \\cdot d_2}{2} \\text{ (diagonaalide kaudu)}", "\\text{Trapets: } S = \\frac{(a+b)}{2} \\cdot h", "\\text{Romb: kõik küljed võrdsed, diagonaalid rististavad}"] },
    examples: [
      { title: "Rööpküliku pindala", steps: ["Alus a = 10 cm, kõrgus h = 6 cm", "S = 10 · 6 = 60 cm²"], formula: "S = 10 \\cdot 6 = 60 \\text{ cm}^2" },
      { title: "Rombi pindala", steps: ["Diagonaalid d₁ = 8 cm ja d₂ = 6 cm", "S = (8·6)/2 = 24 cm²"], formula: "S = \\frac{8 \\cdot 6}{2} = 24 \\text{ cm}^2" },
      { title: "Trapetsi pindala", steps: ["Alused a = 5 cm, b = 9 cm, kõrgus h = 4 cm", "S = (5+9)/2 · 4 = 7 · 4 = 28 cm²"], formula: "S = \\frac{(5+9)}{2} \\cdot 4 = 28 \\text{ cm}^2" }
    ],
    quiz: { question: "Trapetsi alused on 6 ja 10, kõrgus 4. Pindala?", options: ["32 cm²", "24 cm²", "40 cm²", "16 cm²"], correct: 0, explanation: "S = (6+10)/2 · 4 = 8 · 4 = 32 cm²." },
    connection: "Nelinurkade pindalad ja omadused on inseneritöö, arhitektuuri ja geomeetria alus.",
    summary: { text: "Rööpkülik S=ah, Romb S=d₁d₂/2, Trapets S=(a+b)h/2.", formula: "S_{\\text{trapets}} = \\frac{(a+b) \\cdot h}{2}" }
  }
];
