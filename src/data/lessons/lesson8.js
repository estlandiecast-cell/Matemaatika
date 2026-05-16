export const lessons8 = [
  {
    id: "8-1", chapterId: 8, title: "Eksponentfunktsioonid ja -võrrandid",
    hook: { text: "COVID-19 levis eksponentsiaalselt — miks oli see nii kiire? 2^10 = 1024, 2^20 = üle miljoni. Eksponentfunktsioon kasvab kiiremini kui ükski polünoom!" },
    history: { text: "Eksponentsiaalne kasv kirjeldas juba Malthus (1798) rahvastikukasvu. Euler tutvustas e≈2,718 kui loomuliku eksponentfunktsiooni aluse 18. sajandil. e on matemaatika üks olulisemaid konstante." },
    intuition: { text: "Eksponentfunktsioon aˣ kasvab (a>1) või kahaneb (0<a<1) igal sammul sama protsendi võrra. See on liitintress — iga periood lisatakse eelmise peale.", analogy: "Liitintress: 1000 € 5% aastas: 1000·1,05^n. See kasvab eksponentsiaalselt." },
    formal: { text: "Eksponentfunktsiooni omadused:", formulas: ["f(x) = a^x, \\quad a > 0, a \\neq 1", "a^x = a^y \\Leftrightarrow x = y \\text{ (sama aluse võrrand)}", "a^x \\cdot a^y = a^{x+y}", "f(0) = 1, \\text{ piirkond: } (0, +\\infty)"] },
    examples: [
      { title: "Eksponentvõrrand: sama alus", steps: ["2^x = 2^5", "x = 5 (alused võrdsed)"], formula: "2^x = 2^5 \\Rightarrow x = 5" },
      { title: "Teisendamine sama alusele", steps: ["4^x = 8", "(2²)^x = 2³", "2^(2x) = 2^3", "2x = 3, x = 3/2"], formula: "4^x = 8 \\Rightarrow 2^{2x} = 2^3 \\Rightarrow x = \\frac{3}{2}" },
      { title: "Asendamisega lahendamine", steps: ["4^x - 5·2^x + 4 = 0", "Asenda t = 2^x: t² - 5t + 4 = 0", "(t-1)(t-4) = 0", "t=1 → 2^x=1=2^0 → x=0", "t=4 → 2^x=4=2^2 → x=2"], formula: "x = 0 \\text{ või } x = 2" }
    ],
    quiz: { question: "Lahenda: 3^(2x) = 9", options: ["x=1", "x=2", "x=1/2", "x=3"], correct: 0, explanation: "3^(2x) = 3² → 2x=2 → x=1." },
    connection: "Eksponentfunktsioonid on aluseks logaritmfunktsioonidele, geomeetrilistele jadadele ja liitprotsendile.",
    summary: { text: "Eksponentvõrrand: sama alus → võrdsed eksponendid. f(x)=aˣ, a>0, a≠1.", formula: "a^x = a^y \\Leftrightarrow x = y" }
  },
  {
    id: "8-2", chapterId: 8, title: "Liitprotsendiline kasv ja kahanemine",
    hook: { text: "1000 € pangakontol 5% aastas 30 aasta pärast: 1000·1,05^30 ≈ 4322 €. Liitintress on 'maailma kaheksas ime' (Einstein)!" },
    history: { text: "Liitintress oli tuntud juba Babyloonis 2000 eKr. Jacob Bernoulli (1654–1705) uuris liitintressiga seotud piirväärtuseülesannet ja avastas arvu e = lim(1+1/n)^n ≈ 2,718." },
    intuition: { text: "Liitintress: iga perioodi lõpus lisatakse intress kapitalile, ja järgmise perioodi intress arvutatakse suurenenud kapitalilt. See on eksponentsiaalse kasvu olemus.", analogy: "Lumepalliefekt: lumepal veereb mäest alla, kogub iga pöördega rohkem lund. Mida suurem pall, seda rohkem lund." },
    formal: { text: "Liitprotsendi valemid:", formulas: ["K_n = K_0 \\cdot \\left(1 + \\frac{p}{100}\\right)^n \\text{ (kasv)}", "K_n = K_0 \\cdot \\left(1 - \\frac{p}{100}\\right)^n \\text{ (kahanemine)}", "e = \\lim_{n\\to\\infty}\\left(1+\\frac{1}{n}\\right)^n \\approx 2{,}718"] },
    examples: [
      { title: "Liitintress", steps: ["K₀=1000, p=5%, n=10", "K₁₀ = 1000·1,05^10 ≈ 1000·1,629 = 1629 €"], formula: "K_{10} = 1000 \\cdot 1{,}05^{10} \\approx 1629 \\text{ €}" },
      { title: "Amortisatsioon", steps: ["Auto väärtus 20000, kahanes 15% aastas, 5 aastat", "K₅ = 20000·0,85^5 ≈ 20000·0,444 = 8874 €"], formula: "K_5 = 20000 \\cdot 0{,}85^5 \\approx 8874 \\text{ €}" },
      { title: "Aeg leidmine", steps: ["1000 € peab kahekordistuma (p=6%). Mitu aastat?", "2000 = 1000·1,06^n", "1,06^n = 2", "n·lg(1,06) = lg(2)", "n ≈ 11,9 aastat"], formula: "n = \\frac{\\lg 2}{\\lg 1{,}06} \\approx 11{,}9" }
    ],
    quiz: { question: "500€, 10% aastas, 2 aastat. Lõppsumma?", options: ["605 €", "600 €", "610 €", "550 €"], correct: 0, explanation: "500·1,1² = 500·1,21 = 605 €." },
    connection: "Liitintress seostub eksponentfunktsiooni, logaritmiga (kui tahame leida aega) ja geomeetrilise jadaga.",
    summary: { text: "Kasv: Kₙ=K₀·(1+p/100)^n. Kahanemine: Kₙ=K₀·(1-p/100)^n.", formula: "K_n = K_0 \\cdot \\left(1 \\pm \\frac{p}{100}\\right)^n" }
  },
  {
    id: "8-3", chapterId: 8, title: "Logaritmfunktsioonid ja -võrrandid",
    hook: { text: "Richteri skaala, helitugevuse detsibellid, pH-skaala — kõik need on logaritmilised! Miks? Sest logaritm muundab korrutamise liitmiseks." },
    history: { text: "John Napier (1550–1617) lõi 1614. aastal logaritmitabelid, et lihtsustada navigatsiooni arvutusi. Briggs (1561–1630) arendas kümnendlogaritmide tabelid. Logaritmid revolutsiooniseerisid teadusarvutused enne kalkulaatoritaegset aega." },
    intuition: { text: "logₐ(x) vastab küsimusele: 'Mis astmesse pean tõstma a, et saada x?' Kui 2^3 = 8, siis log₂(8) = 3. Logaritm on eksponentfunktsiooni pöördfunktsioon.", analogy: "Eksponent on nagu 'pane astmesse', logaritm on nagu 'võta aste tagasi'. 10^3=1000 ↔ log₁₀(1000)=3." },
    formal: { text: "Logaritmifunktsioon ja põhiomadused:", formulas: ["y = \\log_a x \\Leftrightarrow a^y = x", "\\log_a(xy) = \\log_a x + \\log_a y", "\\log_a\\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y", "\\log_a(x^n) = n \\cdot \\log_a x", "\\log_a x = \\frac{\\ln x}{\\ln a} \\text{ (aluse vahetamine)}"] },
    examples: [
      { title: "Logaritmvõrrand: otsene", steps: ["log₂(x) = 5", "x = 2^5 = 32"], formula: "\\log_2 x = 5 \\Rightarrow x = 32" },
      { title: "Logaritmid mõlemal poolel", steps: ["log₃(x+1) = log₃(2x-5)", "x+1 = 2x-5", "x = 6", "Kontroll: log₃(7) = log₃(7) ✓"], formula: "\\log_3(x+1) = \\log_3(2x-5) \\Rightarrow x = 6" },
      { title: "Logaritmide omaduste kasutamine", steps: ["log₂(x) + log₂(x-2) = 3", "log₂(x(x-2)) = 3", "x(x-2) = 8", "x²-2x-8=0", "(x-4)(x+2)=0", "x=4 (x=-2 sobimatu)"], formula: "\\log_2(x(x-2)) = 3 \\Rightarrow x = 4" }
    ],
    quiz: { question: "Mis on log₂(64)?", options: ["6", "8", "32", "4"], correct: 0, explanation: "2^6 = 64, seega log₂(64) = 6." },
    connection: "Logaritmfunktsioon on eksponentfunktsiooni pöördfunktsioon. Kasutatakse teaduses (pH, dB), matemaatilises analüüsis ja arvutiteaduses.",
    summary: { text: "logₐ(x): see aste, millele tõsta a, et saada x. Omadused: log(xy)=log x+log y.", formula: "\\log_a x = y \\Leftrightarrow a^y = x" }
  }
];
