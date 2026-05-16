export const lessons6 = [
  {
    id: "6-1", chapterId: 6, title: "Kombinatoorika",
    hook: { text: "Mitu erinevat 4-kohalist PIN-koodi saab teha? Mitu erinevat 11-mängijast koosnevat jalgpallivõistkonda saab valida 20 mängijast? Kombinatoorika vastab!" },
    history: { text: "Pascal (1623–1662) ja Fermat (1601–1665) panid aluse kombinatoorikale oma kirjavahetuses hasartmängude kohta. Pascali kolmnurk, binoomikordajad ja tõenäosuse alused tekkisid sellest koostööst." },
    intuition: { text: "Kombinatoorika on loendamine — mitmel viisil saab asju valida ja järjestada. Permutatsioon: järjestus loeb. Kombinatsioon: järjestus ei loe.", analogy: "Permutatsioon on nagu podiumikoha andmine (1., 2., 3.). Kombinatsioon on nagu tiimide valimine (ainult kes, mitte kes ees)." },
    formal: { text: "Põhivalemid:", formulas: ["n! = 1 \\cdot 2 \\cdot 3 \\cdots n \\text{ (faktoriaal)}", "P_n = n! \\text{ (permutatsioone n-st elemendist)}", "C_n^k = \\binom{n}{k} = \\frac{n!}{k!(n-k)!} \\text{ (kombinatsioonid)}", "A_n^k = \\frac{n!}{(n-k)!} \\text{ (paigutused)}"] },
    examples: [
      { title: "Faktoriaal", steps: ["5! = 1·2·3·4·5 = 120", "6! = 720", "0! = 1 (konventsioon)"], formula: "5! = 120" },
      { title: "Kombinatsioonid", steps: ["Mitu 3-liikmelist komiteed saab valida 8 inimesest?", "C(8,3) = 8!/(3!·5!) = 56"], formula: "C_8^3 = \\frac{8!}{3! \\cdot 5!} = 56" },
      { title: "PIN-kood", steps: ["4-kohaline PIN, kordused lubatud: 10⁴ = 10000", "Ilma kordusteta: 10·9·8·7 = 5040"], formula: "10^4 = 10000 \\text{ võimalust}" }
    ],
    quiz: { question: "Mitu viisi saab 5 raamatut riiulile panna?", options: ["25", "120", "60", "20"], correct: 1, explanation: "5! = 120." },
    connection: "Kombinatoorika on tõenäosusteooria alus ning kasutatakse krüptograafias, statistikas ja arvutiteaduses.",
    summary: { text: "Permutatsioon Pn = n!. Kombinatsioon C(n,k) = n!/(k!(n-k)!).", formula: "C_n^k = \\frac{n!}{k!(n-k)!}" }
  },
  {
    id: "6-2", chapterId: 6, title: "Sündmuse tõenäosus",
    hook: { text: "Kui viskad münti 10 korda, kas saad täpselt 5 korda 'pea'? Tõenäosus ei garanteeri, kuid annab keskmise ootuse!" },
    history: { text: "Klassikalise tõenäosuse kujundas Jacob Bernoulli 'Ars Conjectandi' (1713). Kolmogorov aksiomaatilise tõenäosusteooria alusel (1933) sai tõenäosusteooriat matemaatiliselt täpselt käsitleda." },
    intuition: { text: "Tõenäosus = soodsate tulemuste arv / kõigi võimalike tulemuste arv. Kuid see kehtib ainult siis, kui kõik tulemused on võrdselt tõenäolised!", analogy: "Täringul on 6 tahukat, kõik võrdselt tõenäolised. Kolme veeretamise tõenäosus: 1/6." },
    formal: { text: "Klassikaline tõenäosus:", formulas: ["P(A) = \\frac{|A|}{|\\Omega|} = \\frac{\\text{soodsad}}{\\text{kõik}}", "0 \\leq P(A) \\leq 1", "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)", "P(\\bar{A}) = 1 - P(A) \\text{ (vastandsündmus)}"] },
    examples: [
      { title: "Mündi viskamine", steps: ["Kaks võimalust: pea või kiri", "P(pea) = 1/2 = 0,5"], formula: "P(\\text{pea}) = \\frac{1}{2}" },
      { title: "Täring", steps: ["P(paarisarv) = P(2,4,6) = 3/6 = 1/2", "P(number > 4) = P(5,6) = 2/6 = 1/3"], formula: "P(\\text{paaris}) = \\frac{3}{6} = \\frac{1}{2}" },
      { title: "Kaartide tõenäosus", steps: ["52 kaarti. P(äss) = 4/52 = 1/13", "P(punane) = 26/52 = 1/2", "P(punane äss) = 2/52 = 1/26"], formula: "P(\\text{äss}) = \\frac{4}{52} = \\frac{1}{13}" }
    ],
    quiz: { question: "P(A) = 0,3. Mis on P(Ā)?", options: ["0,7", "0,3", "0,6", "1"], correct: 0, explanation: "P(Ā) = 1 - P(A) = 1 - 0,3 = 0,7." },
    connection: "Tõenäosus on aluseks statistikale, riskianalüüsile, kindlustusmatemaatikale ja tehisintellektile.",
    summary: { text: "P(A) = soodsad/kõik. P(Ā) = 1-P(A). 0 ≤ P(A) ≤ 1.", formula: "P(A) = \\frac{|A|}{|\\Omega|}" }
  },
  {
    id: "6-3", chapterId: 6, title: "Statistiline ja geomeetriline tõenäosus",
    hook: { text: "Kui tihti vihab Tallinnas? Statistiline tõenäosus vastab mitmest vaatlusest. Geomeetriline tõenäosus kasutab hoopis pindalasid!" },
    history: { text: "Statistiline tõenäosus arenes 17.-18. sajandil surmatabeli ja kindlustuse vajaduste tõttu. Geomeetrilist tõenäosust uuris Buffon (1707–1788) kuulsa nõelakatsega." },
    intuition: { text: "Statistiline tõenäosus: korruta katset paljukordselt ja vaata suhtelist sagedust. Geomeetriline: tõenäosus = soodne pindala / kogu pindala.", analogy: "Geomeetriline tõenäosus on nagu dartsi viskamine: tõenäosus tabada ringi = ringi pindala / tahvli pindala." },
    formal: { text: "Statistiline ja geomeetriline tõenäosus:", formulas: ["P_{stat}(A) \\approx \\frac{n_A}{n} \\text{ (n katsega)}", "P_{geom}(A) = \\frac{S_A}{S_{\\Omega}} \\text{ (pindaade suhe)}", "\\lim_{n\\to\\infty} \\frac{n_A}{n} = P(A) \\text{ (suurte arvude seadus)}"] },
    examples: [
      { title: "Statistiline tõenäosus", steps: ["500 katses sadab vihma 120 päeval", "P(vihm) ≈ 120/500 = 0,24 = 24%"], formula: "P(\\text{vihm}) \\approx \\frac{120}{500} = 0{,}24" },
      { title: "Geomeetriline tõenäosus", steps: ["Punkt kukub 10×10 ruutu. Ring raadiusega 3 keskel.", "P(punkt ringis) = π·9/100 ≈ 28%"], formula: "P = \\frac{\\pi \\cdot 3^2}{10^2} \\approx 0{,}28" },
      { title: "Buffoni nõel", steps: ["Paralleeljoonte vahe d=10, nõela pikkus l=5", "P(lõikab joont) = 2l/(πd) = 10/(10π) = 1/π ≈ 0,318"], formula: "P = \\frac{2l}{\\pi d}" }
    ],
    quiz: { question: "Punkt kukub 6×6 ruutu juhuslikult. P(punkt 2×2 ruudusse)?", options: ["1/3", "1/9", "2/9", "4/9"], correct: 1, explanation: "4/36 = 1/9." },
    connection: "Statistiline tõenäosus on aluseks empiirilistele uuringutele. Geomeetrilist kasutatakse Monte Carlo meetodis.",
    summary: { text: "Statistiline: P≈nA/n. Geomeetriline: P=SA/SΩ.", formula: "P_{geom} = \\frac{S_A}{S_{\\Omega}}" }
  },
  {
    id: "6-4", chapterId: 6, title: "Bernoulli valem",
    hook: { text: "Münti visatakse 10 korda. Mis tõenäosusega saab täpselt 3 korda 'pea'? Bernoulli valem annab vastuse!" },
    history: { text: "Jacob Bernoulli avaldas oma 'Ars Conjectandi' 1713. aastal (postuumselt). Binoomjaotus (Bernoulli skeemi tulemus) on tänapäeva statistika üks olulisemaid jaotusi." },
    intuition: { text: "Bernoulli skeem: n katset, igaühe tõenäosus p. Kui palju saab täpselt k 'õnnestumist'? Kõigepealt valik (C(n,k) viisi), siis tõenäosus iga valiku jaoks.", analogy: "Kujuta 10 mündiviset. 'Pea' tuleb kolm korda — kuhu need 3 jäävad (C(10,3) võimalust), ja iga kord tõenäosus (1/2)³·(1/2)⁷." },
    formal: { text: "Bernoulli valem:", formulas: ["P_n(k) = C_n^k \\cdot p^k \\cdot q^{n-k}", "q = 1 - p \\text{ (ebaõnnestumise tõenäosus)}", "\\text{Näide: n=10, k=3, p=0,5}", "P_{10}(3) = C_{10}^3 \\cdot (0{,}5)^3 \\cdot (0{,}5)^7"] },
    examples: [
      { title: "Mündi viskamine", steps: ["n=10, k=3, p=0,5, q=0,5", "C(10,3) = 120", "P = 120 · (0,5)³ · (0,5)⁷ = 120/1024 ≈ 0,117"], formula: "P_{10}(3) = \\binom{10}{3} \\cdot 0{,}5^{10} \\approx 0{,}117" },
      { title: "Täring: kuue veeretamine", steps: ["n=5, p=1/6, k=2", "C(5,2) = 10", "P = 10·(1/6)²·(5/6)³ ≈ 0,161"], formula: "P_5(2) = \\binom{5}{2} \\cdot \\left(\\frac{1}{6}\\right)^2 \\cdot \\left(\\frac{5}{6}\\right)^3 \\approx 0{,}161" },
      { title: "Vähemalt k korda", steps: ["P(vähemalt 1 kord) = 1 - P(0 korda)", "n=3, p=1/3: P(0) = (2/3)³ = 8/27", "P(≥1) = 1 - 8/27 = 19/27 ≈ 0,704"], formula: "P(\\geq 1) = 1 - q^n" }
    ],
    quiz: { question: "Täringut veeretati 4 korda. P(täpselt 2 kuut), p=1/6?", options: ["≈0,116", "≈0,5", "≈0,278", "≈0,012"], correct: 0, explanation: "C(4,2)·(1/6)²·(5/6)² = 6·(1/36)·(25/36) = 150/1296 ≈ 0,116." },
    connection: "Bernoulli valem on statistilise tõenäosuse alus ja kasutatakse kvaliteedikontrollis, bioinformaatikas ja kindlustuses.",
    summary: { text: "Bernoulli valem: P(k) = C(n,k)·pᵏ·qⁿ⁻ᵏ, kus q=1-p.", formula: "P_n(k) = \\binom{n}{k} p^k q^{n-k}" }
  }
];
