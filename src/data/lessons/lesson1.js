export const lessons1 = [
  {
    id: "1-1",
    chapterId: 1,
    title: "Arvuhulgad",
    hook: {
      text: "Kas -5 on arv? Kas π on arv? Kas lõpmatuse ruutjuur on arv? Matemaatika vastab: see sõltub sellest, millisest arvuhulgast räägime!"
    },
    history: {
      text: "Looduslikud arvud olid inimkonnale teada juba aastatuhandeid. Negatiivsed arvud võttis kasutusele Hiina matemaatika umbes 200 eKr. Irratsionaalsed arvud avastas Pythagoras (~500 eKr) ja see oli toona skandaal — tema koolkond üritas seda saladuses hoida."
    },
    intuition: {
      text: "Kujuta arvuhulki nagu vene matrjoška nukke: iga hull mahub eelmise sisse. Naturaalarvud ⊂ Täisarvud ⊂ Ratsionaalarvud ⊂ Reaalarvud. Iga järgmine hulk on suurem ja hõlmab rohkem arve.",
      analogy: "Naturaalarvud on nagu maja numbrid tänaval. Täisarvud lisavad miinusmärgi. Ratsionaalarvud lisavad murrud. Reaalarvud täidavad kõik 'augud' nagu π ja √2."
    },
    formal: {
      text: "Põhilised arvuhulgad:",
      formulas: [
        "\\mathbb{N} = \\{1, 2, 3, 4, \\ldots\\} \\text{ — naturaalarvud}",
        "\\mathbb{Z} = \\{\\ldots, -2, -1, 0, 1, 2, \\ldots\\} \\text{ — täisarvud}",
        "\\mathbb{Q} = \\left\\{\\frac{p}{q} \\mid p, q \\in \\mathbb{Z}, q \\neq 0\\right\\} \\text{ — ratsionaalarvud}",
        "\\mathbb{R} \\text{ — reaalarvud (sisaldab ka irratsionaalarve nagu } \\pi, \\sqrt{2}\\text{)}"
      ]
    },
    examples: [
      {
        title: "Arvude klassifitseerimine",
        steps: [
          "Klassifitseeri arv -7: see on täisarv (Z), ratsionaaalarv (Q) ja reaalarv (R), kuid mitte naturaaalarv",
          "Klassifitseeri arv 3/4: see on ratsionaalarv (Q) ja reaalarv (R), kuid mitte täisarv",
          "Klassifitseeri arv √2: see on reaalarv (R), kuid mitte ratsionaalarv — seda ei saa esitada murduna"
        ],
        formula: "\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}"
      },
      {
        title: "Kas arv on ratsionaalne?",
        steps: [
          "0,333... = 1/3 — ratsionaalne (korduv kümnendmurd)",
          "0,25 = 1/4 — ratsionaalne (lõplik kümnendmurd)",
          "π = 3,14159... — irratsionaalne (ei kordu, pole lõplik)"
        ],
        formula: "0{,}\\overline{3} = \\frac{1}{3} \\in \\mathbb{Q}"
      },
      {
        title: "Arvtelg ja intervallid",
        steps: [
          "Arvtelg kujutab kõiki reaalarve",
          "Intervall [a, b] sisaldab kõiki x, kus a ≤ x ≤ b (suletud intervall)",
          "Intervall (a, b) sisaldab kõiki x, kus a < x < b (avatud intervall)",
          "Näide: [-3, 5) tähendab -3 ≤ x < 5"
        ],
        formula: "x \\in [-3, 5) \\Leftrightarrow -3 \\leq x < 5"
      }
    ],
    quiz: {
      question: "Milline arvuhulkadest sisaldab arvu -√9 = -3?",
      options: ["Ainult N", "Z, Q ja R", "Ainult R", "N, Z, Q ja R"],
      correct: 1,
      explanation: "-3 on negatiivne täisarv, seega kuulub hulkadesse Z, Q (kui -3/1) ja R, kuid mitte N (naturaalarvud on positiivsed)."
    },
    connection: "Arvuhulgad on matemaatika alus. Kõik võrrandid, funktsioonid ja analüüs põhinevad sellel, milliste arvudega me töötame.",
    summary: {
      text: "Arvuhulgad N ⊂ Z ⊂ Q ⊂ R on järjest suuremad hulgad, kus iga järgmine sisaldab eelmist.",
      formula: "\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}"
    }
  },
  {
    id: "1-2",
    chapterId: 1,
    title: "Hulgateooria",
    hook: {
      text: "Klassis on 30 õpilast. 18 mängib jalgpalli, 12 mängib korvpalli ja 5 mängib mõlemat. Mitu ei mängi kumbagi? Hulgateooria lahendab sellised ülesanded elegantsel viisil!"
    },
    history: {
      text: "Georg Cantor (1845–1918) lõi kaasaegse hulgateooria, näidates et lõpmatuid hulki on erinevat 'suurust'. John Venn populariseeris 1880. aastal Venni diagrammid, mis muutsid hulgateooria visuaalseks ja arusaadavaks."
    },
    intuition: {
      text: "Hulk on lihtsalt kogum objekte. Nende objektide vahel saame teha operatsioone: liita hulki (ühend), leida ühisosa (ühisosa) või võtta vahe.",
      analogy: "Kujuta kahte ringi (Venni diagramm). Vasak ring on 'jalgpallurid', parem ring on 'korvpallurid'. Kattuvad osa on need, kes mängivad mõlemat."
    },
    formal: {
      text: "Hulgatehtete põhimõisted:",
      formulas: [
        "A \\cup B = \\{x \\mid x \\in A \\text{ või } x \\in B\\} \\text{ — ühend}",
        "A \\cap B = \\{x \\mid x \\in A \\text{ ja } x \\in B\\} \\text{ — ühisosa}",
        "A \\setminus B = \\{x \\mid x \\in A \\text{ ja } x \\notin B\\} \\text{ — vahe}",
        "|A \\cup B| = |A| + |B| - |A \\cap B| \\text{ — ühendi valem}"
      ]
    },
    examples: [
      {
        title: "Hulgatehtete arvutamine",
        steps: [
          "A = {1, 2, 3, 4}, B = {3, 4, 5, 6}",
          "A ∪ B = {1, 2, 3, 4, 5, 6}",
          "A ∩ B = {3, 4}",
          "A \\ B = {1, 2}"
        ],
        formula: "A \\cup B = \\{1,2,3,4,5,6\\}, \\quad A \\cap B = \\{3,4\\}"
      },
      {
        title: "Ühendi valemi kasutamine",
        steps: [
          "30 õpilasest 18 mängib jalgpalli, 12 korvpalli, 5 mõlemat",
          "|J ∪ K| = |J| + |K| - |J ∩ K| = 18 + 12 - 5 = 25",
          "Kumbagi ei mängi: 30 - 25 = 5 õpilast"
        ],
        formula: "|J \\cup K| = 18 + 12 - 5 = 25"
      },
      {
        title: "Intervallide lõikumine",
        steps: [
          "A = [-2, 4], B = [1, 7]",
          "A ∩ B = [1, 4]",
          "A ∪ B = [-2, 7]"
        ],
        formula: "[-2, 4] \\cap [1, 7] = [1, 4]"
      }
    ],
    quiz: {
      question: "A = {1,2,3,4,5} ja B = {3,4,5,6,7}. Mis on |A ∩ B|?",
      options: ["3", "7", "5", "2"],
      correct: 0,
      explanation: "A ∩ B = {3,4,5}, seega |A ∩ B| = 3."
    },
    connection: "Hulgateooria on aluseks tõenäosusteooriale ja matemaatilisele loogikale. Venni diagramme kasutatakse igapäevases andmeanalüüsis.",
    summary: {
      text: "Hulgatehted: ühend (∪), ühisosa (∩), vahe (\\). Ühendi valem: |A∪B| = |A| + |B| - |A∩B|.",
      formula: "|A \\cup B| = |A| + |B| - |A \\cap B|"
    }
  },
  {
    id: "1-3",
    chapterId: 1,
    title: "Arvu aste",
    hook: {
      text: "Mitu bakterit on pärast 24 tundi, kui iga tund nende arv kahekordistub? 2^24 = 16 777 216! Astmed kirjeldavad plahvatuslikku kasvu."
    },
    history: {
      text: "Astmete notatsioon a^n võttis kasutusele René Descartes 17. sajandil. Varem kirjutati 'a kolmandas astmes' sõnadega. Archimedes kasutas suuri astmeid juba 200 eKr, et kirjeldada liiva tera arvu universumis."
    },
    intuition: {
      text: "a^n tähendab lihtsalt: korruta a iseendaga n korda. 2^5 = 2·2·2·2·2 = 32. Negatiivsed astmed tähendavad jagamist: 2^(-3) = 1/2^3 = 1/8.",
      analogy: "Kujuta astmeid nagu kordistamist: 10^3 = 1000 (tuhat), 10^6 = 1 000 000 (miljon). Iga täiendav aste lisab ühe nulli."
    },
    formal: {
      text: "Astme põhireeglid:",
      formulas: [
        "a^m \\cdot a^n = a^{m+n}",
        "\\frac{a^m}{a^n} = a^{m-n}",
        "(a^m)^n = a^{mn}",
        "a^0 = 1 \\quad (a \\neq 0)",
        "a^{-n} = \\frac{1}{a^n}"
      ]
    },
    examples: [
      {
        title: "Astme põhireeglid",
        steps: [
          "2³ · 2⁴ = 2^(3+4) = 2⁷ = 128",
          "3⁶ / 3² = 3^(6-2) = 3⁴ = 81",
          "(2³)² = 2^(3·2) = 2⁶ = 64"
        ],
        formula: "2^3 \\cdot 2^4 = 2^7 = 128"
      },
      {
        title: "Negatiivsed astmed",
        steps: [
          "2^(-3) = 1/2³ = 1/8 = 0,125",
          "10^(-2) = 1/100 = 0,01",
          "(3/4)^(-2) = (4/3)² = 16/9"
        ],
        formula: "a^{-n} = \\frac{1}{a^n}"
      },
      {
        title: "Murdastmed",
        steps: [
          "a^(1/2) = √a",
          "a^(1/3) = ∛a",
          "a^(m/n) = (ⁿ√a)^m",
          "8^(2/3) = (∛8)² = 2² = 4"
        ],
        formula: "8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4"
      }
    ],
    quiz: {
      question: "Mis on 2^(-4) väärtus?",
      options: ["-16", "1/16", "8", "1/8"],
      correct: 1,
      explanation: "2^(-4) = 1/2^4 = 1/16."
    },
    connection: "Astmed on aluseks eksponentfunktsioonidele, logaritmidele ja geomeetrilistele jadadele.",
    summary: {
      text: "Põhireeglid: a^m · a^n = a^(m+n), (a^m)^n = a^mn, a^(-n) = 1/a^n.",
      formula: "a^m \\cdot a^n = a^{m+n}, \\quad (a^m)^n = a^{mn}"
    }
  },
  {
    id: "1-4",
    chapterId: 1,
    title: "Arvu n-es juur",
    hook: {
      text: "Kui ruudukujulise aia pindala on 100 m², mis on selle külje pikkus? √100 = 10 m. Juurimine on astmete pöördtehe!"
    },
    history: {
      text: "Ruutjuure sümbol √ pärineb 16. sajandist, kui Christoph Rudolff (1499–1545) võttis selle kasutusele. Irratsionaalsete juurte olemasolu avastas Hippasus (~450 eKr) Pythagore koolkonnas, tõestades et √2 pole ratsionaalarv."
    },
    intuition: {
      text: "ⁿ√a on arv, mis iseendaga n korda korrutatuna annab a. √16 = 4, sest 4² = 16. ∛27 = 3, sest 3³ = 27.",
      analogy: "Juur on küsimus: 'Mis arv, iseendaga korrutatuna, annab selle tulemuse?' √25 = ? → 5, sest 5·5 = 25."
    },
    formal: {
      text: "Juure omadused:",
      formulas: [
        "\\sqrt[n]{a} = a^{1/n}",
        "\\sqrt[n]{a \\cdot b} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}",
        "\\sqrt[n]{\\frac{a}{b}} = \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}",
        "\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[mn]{a}"
      ]
    },
    examples: [
      {
        title: "Juure lihtsustamine",
        steps: [
          "√72 = √(36·2) = √36 · √2 = 6√2",
          "√(12/3) = √4 = 2",
          "∛(8x³) = 2x"
        ],
        formula: "\\sqrt{72} = 6\\sqrt{2}"
      },
      {
        title: "Nimetaja ratsionaliseerimine",
        steps: [
          "1/√2 = √2/2 (korrutame lugeja ja nimetaja √2-ga)",
          "1/√3 = √3/3",
          "3/(√5 - √2) = 3(√5 + √2)/((√5)² - (√2)²) = 3(√5 + √2)/3 = √5 + √2"
        ],
        formula: "\\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}"
      },
      {
        title: "Murdastmega arvutamine",
        steps: [
          "27^(1/3) = ∛27 = 3",
          "16^(3/4) = (∜16)³ = 2³ = 8",
          "(-8)^(1/3) = ∛(-8) = -2"
        ],
        formula: "16^{3/4} = (\\sqrt[4]{16})^3 = 2^3 = 8"
      }
    ],
    quiz: {
      question: "Mis on √(75) lihtsustatud kujul?",
      options: ["5√3", "3√5", "5√5", "15"],
      correct: 0,
      explanation: "√75 = √(25·3) = √25 · √3 = 5√3."
    },
    connection: "Juured on seotud astmete ja eksponentfunktsioonidega. Neid kasutatakse füüsikas, geomeetrias ja inseneritöös.",
    summary: {
      text: "ⁿ√a = a^(1/n). Juure omadused: √(a·b) = √a · √b, √(a/b) = √a/√b.",
      formula: "\\sqrt[n]{a} = a^{1/n}"
    }
  },
  {
    id: "1-5",
    chapterId: 1,
    title: "Tehted algebraliste murdudega",
    hook: {
      text: "Kuidas liita 1/x + 1/(x+1)? Algebralised murrud on tavaliste murdude üldistus — ja neid kasutatakse igal pool füüsikas ja inseneritöös!"
    },
    history: {
      text: "Algebralised murrud olid tuntud juba antiikajal. Diophantus (200–284 pKr) töötas süsteemselt murravaldistega. Kaasaegne murrualgebra kujunes välja 17.-18. sajandil koos sümboolse algebra arenguga."
    },
    intuition: {
      text: "Algebraline murd on nagu tavaline murd, aga arvude asemel on avaldised. Kõik tavaliste murdude reeglid kehtivad — pead lihtsalt meeles pidama, et muutuja ei tohi võtta selliseid väärtusi, mis teeksid nimetaja nulliks.",
      analogy: "3/4 on tavaline murd. 3/(x+2) on algebraline murd — sama idee, aga 4 asemele on tulnud x+2."
    },
    formal: {
      text: "Algebraliste murdude tehted:",
      formulas: [
        "\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}",
        "\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} = \\frac{ad}{bc}",
        "\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}",
        "\\frac{a}{c} + \\frac{b}{c} = \\frac{a+b}{c}"
      ]
    },
    examples: [
      {
        title: "Murdude korrutamine",
        steps: [
          "(x²-4)/(x+1) · (x+1)/(x-2)",
          "= (x+2)(x-2)/(x+1) · (x+1)/(x-2)",
          "= (x+2)(x-2)(x+1) / [(x+1)(x-2)]",
          "= x+2 (pärast taandamist)"
        ],
        formula: "\\frac{x^2-4}{x+1} \\cdot \\frac{x+1}{x-2} = x+2"
      },
      {
        title: "Murdude liitmine ühise nimetajaga",
        steps: [
          "1/x + 1/(x+1)",
          "Ühine nimetaja: x(x+1)",
          "= (x+1)/[x(x+1)] + x/[x(x+1)]",
          "= (x+1+x)/[x(x+1)]",
          "= (2x+1)/[x(x+1)]"
        ],
        formula: "\\frac{1}{x} + \\frac{1}{x+1} = \\frac{2x+1}{x(x+1)}"
      },
      {
        title: "Murraldis-avaldise lihtsustamine",
        steps: [
          "(x²-9)/(x²-x-6)",
          "= (x+3)(x-3)/[(x-3)(x+2)]",
          "= (x+3)/(x+2) (pärast taandamist, x≠3)"
        ],
        formula: "\\frac{x^2-9}{x^2-x-6} = \\frac{x+3}{x+2}, \\quad x \\neq 3"
      }
    ],
    quiz: {
      question: "Mis on 2/x + 3/x²?",
      options: ["5/(x+x²)", "(2x+3)/x²", "5/x³", "6/x³"],
      correct: 1,
      explanation: "2/x + 3/x² = 2x/x² + 3/x² = (2x+3)/x²."
    },
    connection: "Algebralised murrud esinevad murdvõrrandites, ratsionaalfunktsioonides ja integreerimisel.",
    summary: {
      text: "Algebraliste murdude tehted järgivad tavaliste murdude reegleid. Liitmiseks leia ühine nimetaja. Taanda alati võimaluse korral.",
      formula: "\\frac{a}{b} + \\frac{c}{d} = \\frac{ad+bc}{bd}"
    }
  }
];
