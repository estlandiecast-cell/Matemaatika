export const lessons9 = [
  {
    id: "9-1",
    chapterId: 9,
    title: "Nurga mõiste üldistamine",
    hook: {
      text: "Miks pöördub tuulik pidevalt? Kuidas teab lennuk, et ta on jõudnud õigesse suunda? Vastus peitub nurga mõiste laiendamises — nurgad ei lõpe 360° juures!"
    },
    history: {
      text: "Babüloonlased jagasid ringi 360 osaks umbes 2000 aastat eKr — tõenäoliselt seetõttu, et aastas on ligikaudu 360 päeva. Kreeklased, sealhulgas Hipparchus (190–120 eKr), arendasid trigonomeetria süsteemseks teaduseks. Radiaanmõõt tuli kasutusele palju hiljem — 19. sajandil, kui matemaatikud mõistsid, et see lihtsustab arvutusi oluliselt."
    },
    intuition: {
      text: "Kujuta ette, et seisad keskel ja vaatad ette. Kui pöördud natuke paremale — see on nurk. Kuid mis juhtub, kui pöördud nii palju, et oled tagasi algses kohas? Oled läbinud 360°. Aga mis siis, kui jätkad pöördumist? 400°, 720°, isegi 1000°! Nurgad ei pea peatuma. Ja vastupäeva pöördumine? See on negatiivne nurk.",
      analogy: "Mõtle nagu kella viisutitel: minutiviit teeb ühe täisringi (360°) tunniga. Kahe tunniga on see läbinud 720°. Matemaatikas võime jälgida, mitu ringi ja mis suunas viit on pöördunud."
    },
    formal: {
      text: "Nurka mõõdetakse kraadides (°) või radiaanides (rad). Positiivsed nurgad mõõdetakse vastupäeva, negatiivsed päripäeva. Nurk α ja nurk α + 360° näitavad sama suunda — need on kaasnurgad (koterminal angles).",
      formulas: [
        "\\alpha + 360° \\cdot k, \\quad k \\in \\mathbb{Z}",
        "360° = 2\\pi \\text{ rad}",
        "1° = \\frac{\\pi}{180} \\text{ rad}",
        "1 \\text{ rad} = \\frac{180°}{\\pi} \\approx 57{,}3°"
      ]
    },
    examples: [
      {
        title: "Kraadide teisendamine radiaanideks",
        steps: [
          "Teisenda 45° radiaanideks",
          "Kasutame valemit: rad = kraadid × π/180",
          "45° × π/180 = 45π/180 = π/4",
          "Vastus: 45° = π/4 rad ≈ 0,785 rad"
        ],
        formula: "45° = \\frac{\\pi}{4} \\approx 0{,}785 \\text{ rad}"
      },
      {
        title: "Radiaanide teisendamine kraadideks",
        steps: [
          "Teisenda 3π/2 radiaani kraadideks",
          "Kasutame valemit: kraadid = rad × 180/π",
          "3π/2 × 180/π = 3 × 180/2 = 270°",
          "Vastus: 3π/2 rad = 270°"
        ],
        formula: "\\frac{3\\pi}{2} \\text{ rad} = 270°"
      },
      {
        title: "Kaasnurgad",
        steps: [
          "Leia kõik nurgad vahemikus -720° kuni 720°, mis on kaasnurgad nurgale 30°",
          "Kaasnurgad: 30° + 360°k, kus k on täisarv",
          "k = -2: 30° - 720° = -690°",
          "k = -1: 30° - 360° = -330°",
          "k = 0: 30°",
          "k = 1: 30° + 360° = 390°",
          "k = 2: 30° + 720° = 750° (väljaspool vahemikku)",
          "Vastus: -690°, -330°, 30°, 390°"
        ],
        formula: "30° + 360° \\cdot k, \\quad k \\in \\mathbb{Z}"
      }
    ],
    quiz: {
      question: "Mitu radiaani on 180°?",
      options: ["π/2", "π", "2π", "π/4"],
      correct: 1,
      explanation: "180° = π radiaani. See on poolringi nurk. Täisring on 360° = 2π radiaani."
    },
    connection: "Nurga mõiste üldistamine on aluseks trigonomeetrilistele funktsioonidele (sin, cos, tan), mis on defineeritud kõikidele reaalarvulistele nurkadele — mitte ainult teravnurkadele.",
    summary: {
      text: "Nurki saab mõõta kraadides või radiaanides. 360° = 2π rad. Nurgad võivad olla suuremad kui 360° või negatiivsed.",
      formula: "360° = 2\\pi \\text{ rad} \\quad\\Rightarrow\\quad 1° = \\frac{\\pi}{180} \\text{ rad}"
    }
  },
  {
    id: "9-2",
    chapterId: 9,
    title: "Mistahes nurga trigonomeetrilised funktsioonid",
    hook: {
      text: "Kuidas arvutab laev oma asukoha avamerel ilma GPS-ita? Kuidas teab insener, millise nurga all sild vibreerib? Trigonomeetrilised funktsioonid — sin, cos, tan — on selle taga kõige taga."
    },
    history: {
      text: "Sõna 'sinus' tuleb araabia keelest 'jiba' kaudu, mis tähendas poolvaba. Araabia matemaatik Al-Battani (858–929 pKr) täiustas kreeklaste trigonomeetrilist tabelit. Euroopa matemaatikud tõlkisid need teosed 12. sajandil ja sõna moondumine ladina keelde andis meile 'sinus'. Cosinus on lihtsalt täiendsurga sinus."
    },
    intuition: {
      text: "Kujuta ette ühikringi (raadius = 1) koordinaatteljestiku keskel. Liigu mööda ringi nurgani α. Sinu asukoha x-koordinaat on cos(α) ja y-koordinaat on sin(α). See on kõik! Ringil liikumine = trigonomeetria.",
      analogy: "Mõtle nagu kompassinõel: kui nõel osutab paremale (0°), on x = 1, y = 0. Üles (90°): x = 0, y = 1. Vasakule (180°): x = -1, y = 0. Alla (270°): x = 0, y = -1."
    },
    formal: {
      text: "Olgu α suvaline nurk standardasendis (tipp koordinaatide alguspunktis, algkülg positiivsel x-teljel). Olgu P(x, y) ühikringi (r=1) punkt nurga α lõpukülg. Siis: sin α = y, cos α = x, tan α = y/x (x≠0). Ühikringil kehtib Pythagorase teoreem: sin²α + cos²α = 1.",
      formulas: [
        "\\sin\\alpha = y, \\quad \\cos\\alpha = x, \\quad \\tan\\alpha = \\frac{y}{x}",
        "\\sin^2\\alpha + \\cos^2\\alpha = 1",
        "\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}"
      ]
    },
    examples: [
      {
        title: "Trigonomeetrilised väärtused 0°, 90°, 180°, 270° jaoks",
        steps: [
          "0°: Punkt ühikringil on (1, 0). Seega sin 0° = 0, cos 0° = 1, tan 0° = 0/1 = 0",
          "90°: Punkt ühikringil on (0, 1). Seega sin 90° = 1, cos 90° = 0, tan 90° on määramata (jagamine nulliga!)",
          "180°: Punkt ühikringil on (-1, 0). Seega sin 180° = 0, cos 180° = -1, tan 180° = 0",
          "270°: Punkt ühikringil on (0, -1). Seega sin 270° = -1, cos 270° = 0, tan 270° on määramata"
        ],
        formula: "\\sin 90° = 1, \\quad \\cos 90° = 0, \\quad \\tan 90° \\text{ — määramata}"
      },
      {
        title: "Märgireeglid kvaadrantides",
        steps: [
          "I kvartal (0°–90°): x > 0, y > 0 → sin > 0, cos > 0, tan > 0",
          "II kvartal (90°–180°): x < 0, y > 0 → sin > 0, cos < 0, tan < 0",
          "III kvartal (180°–270°): x < 0, y < 0 → sin < 0, cos < 0, tan > 0",
          "IV kvartal (270°–360°): x > 0, y < 0 → sin < 0, cos > 0, tan < 0",
          "Meeldejätmiseks: 'Kõik Sügavad Tammed Kasvavad' — K(I), S(II), T(III), K(IV)"
        ],
        formula: "\\text{II kvartal: } \\sin > 0, \\cos < 0, \\tan < 0"
      },
      {
        title: "Eriliste nurkade trigonomeetrilised väärtused",
        steps: [
          "sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3 = √3/3",
          "sin 45° = √2/2, cos 45° = √2/2, tan 45° = 1",
          "sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3",
          "Need väärtused on pärit täisvõrdkülgsest kolmnurgast (30-60-90) ja ruudust (45-45-90)"
        ],
        formula: "\\sin 30° = \\frac{1}{2}, \\quad \\sin 60° = \\frac{\\sqrt{3}}{2}, \\quad \\sin 45° = \\frac{\\sqrt{2}}{2}"
      }
    ],
    quiz: {
      question: "Mis on cos(180°)?",
      options: ["0", "1", "-1", "määramata"],
      correct: 2,
      explanation: "180° nurga lõpupunkt ühikringil on (-1, 0). Cosinus on x-koordinaat, seega cos(180°) = -1."
    },
    connection: "Need funktsioonid on aluseks trigonomeetriliste funktsioonide graafikutele (sin ja cos lained), mida kasutatakse helianalüüsis, elektrotehnikas ja looduse kirjeldamisel.",
    summary: {
      text: "Ühikringil: sin α = y-koordinaat, cos α = x-koordinaat. Põhisamasus: sin²α + cos²α = 1.",
      formula: "\\sin^2\\alpha + \\cos^2\\alpha = 1"
    }
  },
  {
    id: "9-3",
    chapterId: 9,
    title: "Trigonomeetria valemid",
    hook: {
      text: "Kuidas arvutab arvuti sin(75°) kui see väärtus pole tabelis? Trigonomeetria valemid võimaldavad jagada keerulisi nurki lihtsamateks!"
    },
    history: {
      text: "Liitmisvalemeid tundis juba Ptolemaios (100–170 pKr), kes kasutas neid astronoomiliste tabelite koostamisel. François Viète (1540–1603) kirjutas need üles kaasaegses kujus. Topeltnurga valemid (sin 2α = 2 sin α cos α) avaldas Johann Bernoulli 17. sajandil."
    },
    intuition: {
      text: "Kujuta, et tead sin(30°) ja sin(45°). Aga kuidas leida sin(75°) = sin(30° + 45°)? Lihtsalt liita ei saa: sin(30° + 45°) ≠ sin(30°) + sin(45°). Selle jaoks on spetsiaalsed valemid.",
      analogy: "See on nagu toiduretsept: ainete koguste lihtsalt liitmine ei anna sama tulemust nagu õige retsepti järgimine."
    },
    formal: {
      text: "Trigonomeetria põhivalemid:",
      formulas: [
        "\\sin(\\alpha \\pm \\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta",
        "\\cos(\\alpha \\pm \\beta) = \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta",
        "\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha",
        "\\cos 2\\alpha = \\cos^2\\alpha - \\sin^2\\alpha = 1 - 2\\sin^2\\alpha = 2\\cos^2\\alpha - 1",
        "\\tan(\\alpha + \\beta) = \\frac{\\tan\\alpha + \\tan\\beta}{1 - \\tan\\alpha\\tan\\beta}"
      ]
    },
    examples: [
      {
        title: "sin(75°) arvutamine liitmisvalemiga",
        steps: [
          "75° = 45° + 30°",
          "sin(75°) = sin(45° + 30°) = sin 45° · cos 30° + cos 45° · sin 30°",
          "= (√2/2)(√3/2) + (√2/2)(1/2)",
          "= √6/4 + √2/4",
          "= (√6 + √2)/4 ≈ 0,966"
        ],
        formula: "\\sin 75° = \\frac{\\sqrt{6} + \\sqrt{2}}{4}"
      },
      {
        title: "Topeltnurga valem",
        steps: [
          "Arvuta sin(60°) topeltnurga valemi abil, teades sin(30°) = 1/2 ja cos(30°) = √3/2",
          "sin(60°) = sin(2 · 30°) = 2 · sin(30°) · cos(30°)",
          "= 2 · (1/2) · (√3/2)",
          "= √3/2 ✓"
        ],
        formula: "\\sin 60° = 2 \\cdot \\frac{1}{2} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{3}}{2}"
      },
      {
        title: "cos(2α) leidmine, kui on teada sin α",
        steps: [
          "Olgu sin α = 3/5 (α on I kvartalis). Leia cos(2α).",
          "Esmalt: cos α = √(1 - sin²α) = √(1 - 9/25) = √(16/25) = 4/5",
          "cos(2α) = 1 - 2sin²α = 1 - 2·(9/25) = 1 - 18/25 = 7/25"
        ],
        formula: "\\cos 2\\alpha = 1 - 2\\sin^2\\alpha = 1 - \\frac{18}{25} = \\frac{7}{25}"
      }
    ],
    quiz: {
      question: "Mis on sin(2α), kui sin α = 1/2 ja cos α = √3/2?",
      options: ["1/2", "√3/2", "√3/4", "1"],
      correct: 1,
      explanation: "sin(2α) = 2·sin α·cos α = 2·(1/2)·(√3/2) = √3/2."
    },
    connection: "Neid valemeid kasutatakse trigonomeetriliste võrrandite lahendamisel ja integraalide arvutamisel (kõrgemas matemaatikas).",
    summary: {
      text: "Trigonomeetria põhivalemid võimaldavad teisendada keerulisi nurke lihtsamateks.",
      formula: "\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta"
    }
  },
  {
    id: "9-4",
    chapterId: 9,
    title: "Kaare pikkus ja sektori pindala",
    hook: {
      text: "Kui suur on pizzalõigu koorik? Kui pikk on ventilaatori laba otsa teekond ühe pöörde jooksul? See kõik on kaare pikkus!"
    },
    history: {
      text: "Archimedese (287–212 eKr) meetod ringi ümbermõõdu leidmiseks oli esimene samm kaare pikkuse mõistmisel. Radiaanide kasutuselevõtt 19. sajandil lihtsustas kaare pikkuse valemit tohutult — valemist l = (α/360°)·2πr sai lühike l = αr."
    },
    intuition: {
      text: "Ringi ümbermõõt on 2πr. Kui lõikad ringist välja 'sektori' (nagu pizzalõik), siis selle kaar on osa tervest ümbermõõdust. Kui sektor on pool ringist (180°), on kaare pikkus pool ümbermõõdust = πr.",
      analogy: "Kujuta pizzat: kogu serv (360°) on 2πr. Kui lõikad 1/4 pizza, on koorik 1/4 · 2πr = πr/2."
    },
    formal: {
      text: "Olgu r ringi raadius ja α nurk radiaanides. Kaare pikkus l ja sektori pindala S on:",
      formulas: [
        "l = \\alpha r",
        "S = \\frac{\\alpha r^2}{2} = \\frac{lr}{2}",
        "\\text{Kraadides: } l = \\frac{\\alpha°}{360°} \\cdot 2\\pi r",
        "\\text{Kraadides: } S = \\frac{\\alpha°}{360°} \\cdot \\pi r^2"
      ]
    },
    examples: [
      {
        title: "Kaare pikkus radiaanides",
        steps: [
          "Ringi raadius r = 5 cm, nurk α = π/3 rad. Leia kaare pikkus.",
          "l = αr = (π/3) · 5 = 5π/3 cm ≈ 5,24 cm"
        ],
        formula: "l = \\frac{\\pi}{3} \\cdot 5 = \\frac{5\\pi}{3} \\approx 5{,}24 \\text{ cm}"
      },
      {
        title: "Sektori pindala kraadides",
        steps: [
          "Ringi raadius r = 6 cm, sektori nurk 120°. Leia sektori pindala.",
          "S = (120°/360°) · π · 6² = (1/3) · π · 36 = 12π cm² ≈ 37,7 cm²"
        ],
        formula: "S = \\frac{120°}{360°} \\cdot \\pi \\cdot 36 = 12\\pi \\approx 37{,}7 \\text{ cm}^2"
      },
      {
        title: "Segaülesanne: Leia nurk",
        steps: [
          "Sektori pindala on 18π cm² ja raadius on 6 cm. Leia nurk radiaanides.",
          "S = αr²/2 → α = 2S/r² = 2·18π/36 = π radiaani",
          "π rad = 180°"
        ],
        formula: "\\alpha = \\frac{2S}{r^2} = \\frac{2 \\cdot 18\\pi}{36} = \\pi \\text{ rad}"
      }
    ],
    quiz: {
      question: "Ringi raadius on 4 cm ja nurk on π/2 radiaani. Mis on kaare pikkus?",
      options: ["2π cm", "4π cm", "π cm", "8π cm"],
      correct: 0,
      explanation: "l = αr = (π/2) · 4 = 2π cm."
    },
    connection: "Kaare pikkuse valem l = αr selgitab, miks radiaanid on nii mugavad — valem on lihtsam kui kraadidega.",
    summary: {
      text: "Kaare pikkus: l = αr (α radiaanides). Sektori pindala: S = αr²/2.",
      formula: "l = \\alpha r \\qquad S = \\frac{\\alpha r^2}{2}"
    }
  },
  {
    id: "9-5",
    chapterId: 9,
    title: "Trigonomeetrilised funktsioonid",
    hook: {
      text: "Miks on lained — nii merel kui raadios — sinusoidid? Miks kordub aastaajad igal aastal, meretõus iga päev, südamelöögid iga sekund? Perioodilisus on looduse keel."
    },
    history: {
      text: "Sinusfunktsiooni graafikut uuris esimesena Leonhard Euler (1707–1783), kes seostas trigonomeetria eksponentfunktsiooniga. Jean Baptiste Fourier (1768–1830) näitas 1807. aastal, et igasugune korrapärane laine saab esitada sinusoidide summana — see avastus muutis füüsikat ja inseneritehnikat igaveseks."
    },
    intuition: {
      text: "Mõtle ühikringil liikuvast punktist. Kui see punkt teeb täisringi, jälgi ainult selle y-koordinaati aja jooksul. See joonistabki sinuslaine! Punkt alustab 0-st, tõuseb 1-ni, langeb 0-ni, siis -1-ni, siis tagasi 0-ni. Ja kordub. Igavesti.",
      analogy: "Mõtle kiigele: kiige kõrgus ajas on sinuslaine. Kiik algab tasakaalus (0), läheb kõrgele (1), tagasi (0), madalale (-1) ja tagasi. See perioodiline liikumine kirjeldab lõputut hulka loodusnähtusi."
    },
    formal: {
      text: "Põhilised trigonomeetrilised funktsioonid ja nende omadused:",
      formulas: [
        "y = \\sin x: \\text{ periood } 2\\pi, \\text{ amplituud } 1, \\text{ väärtuspiirkond } [-1, 1]",
        "y = \\cos x: \\text{ periood } 2\\pi, \\text{ amplituud } 1, \\text{ väärtuspiirkond } [-1, 1]",
        "y = \\tan x: \\text{ periood } \\pi, \\text{ väärtuspiirkond } \\mathbb{R}",
        "y = A\\sin(Bx + C) + D: A\\text{ — amplituud}, \\frac{2\\pi}{B}\\text{ — periood}"
      ]
    },
    examples: [
      {
        title: "Sinusfunktsiooni põhiomadused",
        steps: [
          "y = sin x on paaritu funktsioon: sin(-x) = -sin(x)",
          "Periood: sin(x + 2π) = sin(x) — kordub iga 2π järel",
          "Nullkohad: x = πk, kus k ∈ ℤ",
          "Maksimum: y = 1 kohal x = π/2 + 2πk",
          "Miinimum: y = -1 kohal x = 3π/2 + 2πk = -π/2 + 2πk"
        ],
        formula: "\\sin(x + 2\\pi) = \\sin x, \\quad x \\in \\mathbb{R}"
      },
      {
        title: "Graafiku teisendused: y = 2sin(3x)",
        steps: [
          "Võrreldes y = sin x: amplituud on 2 (mitte 1) ja periood on 2π/3 (mitte 2π)",
          "Amplituud A = 2 tähendab: maksimum on 2, miinimum on -2",
          "Periood T = 2π/B = 2π/3 tähendab: graafik kordub kiiremini (3× kiiremini)"
        ],
        formula: "y = 2\\sin(3x): A = 2, T = \\frac{2\\pi}{3}"
      },
      {
        title: "Faasinihe: y = sin(x - π/4)",
        steps: [
          "Võrreldes y = sin x: graafik on nihutatud paremale π/4 võrra",
          "Nullkoht, mis oli x = 0, on nüüd x = π/4",
          "Kõik graafikupunktid liiguvad paremale π/4 võrra"
        ],
        formula: "y = \\sin\\left(x - \\frac{\\pi}{4}\\right): \\text{ nihe } \\frac{\\pi}{4} \\text{ paremale}"
      }
    ],
    quiz: {
      question: "Mis on funktsiooni y = 3sin(2x) periood?",
      options: ["2π", "π", "3π", "π/2"],
      correct: 1,
      explanation: "Periood T = 2π/B = 2π/2 = π. Tegur 3 mõjutab amplituudi, mitte perioodi."
    },
    connection: "Trigonomeetriliste funktsioonide graafikute mõistmine on vajalik trigonomeetriliste võrrandite lahendamisel ja füüsikas lainete kirjeldamisel.",
    summary: {
      text: "sin x ja cos x on perioodilised funktsioonid perioodiga 2π ja amplituudiga 1. Üldkujul y = A·sin(Bx + C) + D muutuvad amplituud ja periood.",
      formula: "T = \\frac{2\\pi}{B}, \\quad A = \\text{amplituud}"
    }
  },
  {
    id: "9-6",
    chapterId: 9,
    title: "Trigonomeetrilised võrrandid",
    hook: {
      text: "Millal on laine kõrgus täpselt pool maksimaalsest? Millal on päike täpselt 30° horisondi kohal? Need on trigonomeetrilised võrrandid — ja neil on lõpmatult palju lahendeid!"
    },
    history: {
      text: "Trigonomeetriliste võrrandite süstemaatilise lahendamise töötasid välja araablased 9.-10. sajandil. Abu al-Wafa (940–998) koostas trigonomeetrilisi tabeleid ja lahendas võrrandeid astronoomia tarbeks. Üldlahendite ∀k∈ℤ notatsioon on kaasaegne konventsioon, mis tuli käibele 20. sajandil."
    },
    intuition: {
      text: "sin x = 1/2. Mis nurga siinus on 1/2? Noh, 30°. Aga ka 150°! Ja 30° + 360°, 150° + 360°... Perioodilisuse tõttu on lõpmatult palju lahendeid.",
      analogy: "Kujuta kellaringil küsimust: 'Millal on minutiviit ülevalpool?' Kord tunnis? Jah, aga iga tunni sees kaks korda (nt 15 minutit ja 45 minutit). Trigonomeetrilistel võrranditel on samamoodi korduvad lahendid."
    },
    formal: {
      text: "Algtüüpi trigonomeetriliste võrrandite lahendused:",
      formulas: [
        "\\sin x = a \\Rightarrow x = (-1)^k \\arcsin a + \\pi k, \\quad k \\in \\mathbb{Z}",
        "\\cos x = a \\Rightarrow x = \\pm \\arccos a + 2\\pi k, \\quad k \\in \\mathbb{Z}",
        "\\tan x = a \\Rightarrow x = \\arctan a + \\pi k, \\quad k \\in \\mathbb{Z}",
        "\\text{Erijuht: } \\sin x = \\sin\\alpha \\Rightarrow x = \\alpha + 2\\pi k \\text{ või } x = \\pi - \\alpha + 2\\pi k"
      ]
    },
    examples: [
      {
        title: "sin x = 1/2 lahendamine",
        steps: [
          "sin x = 1/2",
          "arcsin(1/2) = π/6 (30°)",
          "x = π/6 + 2πk või x = π - π/6 + 2πk = 5π/6 + 2πk",
          "kus k ∈ ℤ",
          "Põhilahendid vahemikus [0, 2π]: x = π/6 ≈ 0,52 ja x = 5π/6 ≈ 2,62"
        ],
        formula: "x = \\frac{\\pi}{6} + 2\\pi k \\quad \\text{või} \\quad x = \\frac{5\\pi}{6} + 2\\pi k"
      },
      {
        title: "cos x = -√2/2 lahendamine",
        steps: [
          "cos x = -√2/2",
          "arccos(√2/2) = π/4, seega arccos(-√2/2) = π - π/4 = 3π/4",
          "x = ±3π/4 + 2πk, kus k ∈ ℤ",
          "Põhilahendid: x = 3π/4 ≈ 2,36 ja x = -3π/4 ≈ -2,36 (ehk 5π/4)"
        ],
        formula: "x = \\pm\\frac{3\\pi}{4} + 2\\pi k, \\quad k \\in \\mathbb{Z}"
      },
      {
        title: "2sin²x - sin x - 1 = 0 lahendamine",
        steps: [
          "Asendame sin x = t: 2t² - t - 1 = 0",
          "Ruutvõrrandi valem: t = (1 ± √(1+8))/4 = (1 ± 3)/4",
          "t₁ = 1, t₂ = -1/2",
          "sin x = 1 → x = π/2 + 2πk",
          "sin x = -1/2 → x = -π/6 + 2πk või x = π + π/6 + 2πk = 7π/6 + 2πk"
        ],
        formula: "2\\sin^2 x - \\sin x - 1 = 0 \\Rightarrow \\sin x = 1 \\text{ või } \\sin x = -\\frac{1}{2}"
      }
    ],
    quiz: {
      question: "Milline on võrrandi cos x = 0 üldlahend?",
      options: [
        "x = πk",
        "x = π/2 + πk",
        "x = π/2 + 2πk",
        "x = ±π/2"
      ],
      correct: 1,
      explanation: "cos x = 0 kohal on x = π/2, 3π/2, -π/2, ... ehk x = π/2 + πk, kus k ∈ ℤ."
    },
    connection: "Trigonomeetriliste võrrandite lahendamisel kasutatakse kõiki eelnevalt õpitud trigonomeetria valemeid ja funktsioonide perioodi mõistet.",
    summary: {
      text: "Trigonomeetrilistel võrranditel on perioodilisuse tõttu lõpmatult palju lahendeid. Üldlahend sisaldab alati parameetrit k ∈ ℤ.",
      formula: "\\sin x = a \\Rightarrow x = (-1)^k \\arcsin a + \\pi k"
    }
  }
];
