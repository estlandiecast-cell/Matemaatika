export const lessons7 = [
  {
    id: "7-1", chapterId: 7, title: "Arvjadad",
    hook: { text: "1, 1, 2, 3, 5, 8, 13, 21... Miks esinevad need arvud kõikjal looduses — karbikestades, päevalilleseemnetes, käbides?" },
    history: { text: "Fibonacci (~1170–1250) tutvustas Euroopale Lähis-Idast pärit jada 'Liber Abaci' (1202) raamatus, kasutades jäneseid näitena. Hiljem avastati seosed kuldsektsiooniga (φ≈1,618)." },
    intuition: { text: "Jada on arvude järjend, kus iga arv on 'järgmine'. Mõnel jadal on kindel muster, mõnel mitte. Matemaatiliselt huvitavad on aritmeetilised (liitmisega kasvavad) ja geomeetrilised (korrutamisega kasvavad) jadad.", analogy: "Jada on nagu muusikaline meloodia: igal noodil on oma koht, mõnikord on mustrit kuulda, mõnikord mitte." },
    formal: { text: "Jada põhimõisted:", formulas: ["\\{a_n\\} = a_1, a_2, a_3, \\ldots", "a_n \\text{ — n-nda liikme valem}", "\\text{Lõplik jada: lõplik arv liikmeid}", "\\text{Lõpmatu jada: lõpmatu arv liikmeid}"] },
    examples: [
      { title: "Jada liikme leidmine", steps: ["aₙ = 2n + 1: a₁=3, a₂=5, a₃=7, ...", "Kontrolli: a₅ = 2·5+1 = 11"], formula: "a_n = 2n+1 \\Rightarrow a_5 = 11" },
      { title: "Fibonacci jada", steps: ["aₙ = aₙ₋₁ + aₙ₋₂, a₁=1, a₂=1", "1, 1, 2, 3, 5, 8, 13, 21, ...", "Φ = limn→∞ aₙ₊₁/aₙ = (1+√5)/2 ≈ 1,618"], formula: "a_n = a_{n-1} + a_{n-2}" },
      { title: "Jada summa", steps: ["Esimese n liikme summa: Sₙ = a₁+a₂+...+aₙ", "S₄ = a₁+a₂+a₃+a₄ = 3+5+7+9 = 24"], formula: "S_4 = \\sum_{k=1}^{4}(2k+1) = 24" }
    ],
    quiz: { question: "Jada aₙ = n² - 1. Mis on a₄?", options: ["15", "16", "9", "7"], correct: 0, explanation: "a₄ = 4² - 1 = 16 - 1 = 15." },
    connection: "Jadad on aluseks jadade piirväärtustele, integreerimisele ja Fourier' analüüsile.",
    summary: { text: "Jada on järjestatud arvude kogum. Liikme valem aₙ annab iga liikme väärtuse.", formula: "a_n = f(n)" }
  },
  {
    id: "7-2", chapterId: 7, title: "Aritmeetilised jadad",
    hook: { text: "Aritmeetiline jada: 3, 7, 11, 15... Iga liige on 4 võrra suurem eelmisest. Mitu treppe on 100. korruse majas?" },
    history: { text: "Legend räägib, et noor Gauss (1777–1855) arvutas minutitega 1+2+...+100=5050, leides üldvalemi. See on aritmeetilise jada summa valem, mida õpime täna." },
    intuition: { text: "Aritmeetiline jada kasvab ühtlaselt — nagu treppide astmeid üles minnes. Iga samm on sama suur (d = 'jätkuv ehk diferents'). Summa leidmiseks on Gaussi trikk: liida esimene ja viimane, siis korruta paaride arvuga.", analogy: "Gauss: 1+100 = 101, 2+99 = 101, 3+98 = 101... 50 paari: 50·101 = 5050." },
    formal: { text: "Aritmeetilise jada valemid:", formulas: ["a_n = a_1 + (n-1)d", "S_n = \\frac{n(a_1 + a_n)}{2}", "S_n = \\frac{n(2a_1 + (n-1)d)}{2}", "d = a_2 - a_1 \\text{ — diferents}"] },
    examples: [
      { title: "n-nda liikme leidmine", steps: ["Jada: 5, 9, 13, ..., d=4, a₁=5", "a₁₀ = 5 + (10-1)·4 = 5 + 36 = 41"], formula: "a_{10} = 5 + 9 \\cdot 4 = 41" },
      { title: "Jada summa", steps: ["1+2+3+...+100", "a₁=1, a₁₀₀=100, n=100", "S = 100·(1+100)/2 = 5050"], formula: "S_{100} = \\frac{100 \\cdot 101}{2} = 5050" },
      { title: "Tuntematu leidmine", steps: ["Jada: 3, ?, ?, 15. Leia puuduvad liikmed.", "d = (15-3)/(4-1) = 4", "Jada: 3, 7, 11, 15"], formula: "d = \\frac{a_n - a_1}{n-1} = \\frac{15-3}{3} = 4" }
    ],
    quiz: { question: "Jada 2, 5, 8, 11,... 20. liige?", options: ["59", "57", "56", "62"], correct: 0, explanation: "a₂₀ = 2 + 19·3 = 2 + 57 = 59." },
    connection: "Aritmeetiline jada seostub lineaarfunktsiooniga — mõlemad kasvavad ühtlase sammuga.",
    summary: { text: "Aritmeetiline jada: aₙ = a₁+(n-1)d. Summa: Sₙ = n(a₁+aₙ)/2.", formula: "a_n = a_1 + (n-1)d, \\quad S_n = \\frac{n(a_1+a_n)}{2}" }
  },
  {
    id: "7-3", chapterId: 7, title: "Geomeetrilised jadad",
    hook: { text: "Bakterid kahekordistuvad iga tund. 1, 2, 4, 8, 16... Mitu bakterit on 24 tunni pärast? See on geomeetriline jada!" },
    history: { text: "Geomeetrilisi jadasid kasutasid babiloonlased intressiarvutustes. Eukleidese 'Elemendid' käsitleb geomeetrilisi progressioone. Liitintress on klassikaline geomeetrilise jada rakendus." },
    intuition: { text: "Geomeetriline jada korrutab — iga liige on eelmisest q korda suurem. q nimetatakse kvoodiks. Eksponentiaalne kasv on ülikiire: 2³⁰ > miljard!", analogy: "Kujuta paberit, mida volditakse pooleks. Pärast 42 voltimist oleks pakk Kuu kaugusele!" },
    formal: { text: "Geomeetrilise jada valemid:", formulas: ["a_n = a_1 \\cdot q^{n-1}", "S_n = a_1 \\cdot \\frac{q^n - 1}{q - 1} \\quad (q \\neq 1)", "q = \\frac{a_2}{a_1} \\text{ — kvooot}"] },
    examples: [
      { title: "n-nda liikme leidmine", steps: ["Jada: 3, 6, 12, 24,..., q=2", "a₈ = 3·2^(8-1) = 3·128 = 384"], formula: "a_8 = 3 \\cdot 2^7 = 384" },
      { title: "Jada summa", steps: ["S₆ jada 1, 2, 4, 8, 16, 32", "S₆ = 1·(2⁶-1)/(2-1) = 63"], formula: "S_6 = \\frac{2^6-1}{2-1} = 63" },
      { title: "Bakterid", steps: ["Algul 100 bakterit, iga tund kahekordistuvad", "Pärast 10 tundi: 100·2¹⁰ = 102400"], formula: "100 \\cdot 2^{10} = 102400" }
    ],
    quiz: { question: "Jada 2, 6, 18,... 5. liige?", options: ["162", "54", "486", "108"], correct: 0, explanation: "q=3, a₅ = 2·3⁴ = 2·81 = 162." },
    connection: "Geomeetriline jada kirjeldab eksponentsiaalset kasvu/kahanemist — oluline füüsikas, majanduses, bioloogias.",
    summary: { text: "Geomeetriline jada: aₙ = a₁·q^(n-1). Summa: Sₙ = a₁·(qⁿ-1)/(q-1).", formula: "a_n = a_1 \\cdot q^{n-1}" }
  },
  {
    id: "7-4", chapterId: 7, title: "Hääbuvad geomeetrilised jadad",
    hook: { text: "Pall põrkab kõrgusest 1 m, iga kord 60% eelmisest kõrgusest. Kui kõrge on põrge pärast 10 korda? Ja kui pikk on kogu teekond kokku?" },
    history: { text: "Lõpmatu jada summa uurimist alustas Archimedes (~250 eKr), leides ringkonna pindala kui lõpmatu summa. Zeno paradoks (400 eKr) käsitles samuti lõpmatuid summasid." },
    intuition: { text: "Kui |q| < 1, siis geomeetriline jada hääbub — liikmed lähevad nulli. Sellisel juhul on lõpmatul jadal lõplik summa! S∞ = a₁/(1-q).", analogy: "Palli põrkamine: iga kord pool kõrgusest. Kokku läbib pall 2× algse kõrguse — lõplik summa lõpmatust põrkest!" },
    formal: { text: "Lõpmatu geomeetrilise jada summa:", formulas: ["S_\\infty = \\frac{a_1}{1-q}, \\quad |q| < 1", "\\text{Kehtib ainult kui } |q| < 1", "\\lim_{n\\to\\infty} q^n = 0 \\text{ kui } |q| < 1"] },
    examples: [
      { title: "Lõpmatu jada summa", steps: ["Jada 1, 1/2, 1/4, 1/8,..., q=1/2", "S∞ = 1/(1-1/2) = 1/(1/2) = 2"], formula: "S_\\infty = \\frac{1}{1-\\frac{1}{2}} = 2" },
      { title: "Palli põrkamine", steps: ["Algne kõrgus 1 m, q=0,6", "Kokku alla: S∞ = 1/(1-0,6) = 2,5 m", "Kokku üles: 0,6·2,5 = 1,5 m", "Kogu teekond: 1 + 2·1,5 = 4 m"], formula: "S_\\infty = \\frac{1}{1-0{,}6} = 2{,}5 \\text{ m}" },
      { title: "Kümnendmurd murduna", steps: ["0,333... = 0,3 + 0,03 + 0,003 + ...", "a₁=0,3, q=0,1", "S∞ = 0,3/(1-0,1) = 0,3/0,9 = 1/3 ✓"], formula: "0{,}\\overline{3} = \\frac{0{,}3}{1-0{,}1} = \\frac{1}{3}" }
    ],
    quiz: { question: "Jada summa S∞, kui a₁=6 ja q=1/3?", options: ["9", "6", "3", "18"], correct: 0, explanation: "S∞ = 6/(1-1/3) = 6/(2/3) = 9." },
    connection: "Lõpmatu geomeetriline jada seostub eksponentfunktsiooni ja liitprotsendiga.",
    summary: { text: "Hääbuva geomeetrilise jada S∞ = a₁/(1-q), |q|<1.", formula: "S_\\infty = \\frac{a_1}{1-q}, \\quad |q| < 1" }
  }
];
