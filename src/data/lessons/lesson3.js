export const lessons3 = [
  {
    id: "3-1", chapterId: 3, title: "Lineaarvõrrandid",
    hook: { text: "Kui vana on Jüri, kui ta on 5 aasta pärast kaks korda vanem kui praegu on tema õde, kes on 8-aastane? Lineaarvõrrand lahendab selle!" },
    history: { text: "Lineaarvõrrandeid lahendasid juba babiloonlased 2000 eKr. Al-Khwarizmi 'Al-Jabr' (820 pKr) — millest pärineb sõna 'algebra' — sisaldas süsteemseid meetodeid lineaarvõrrandite lahendamiseks." },
    intuition: { text: "Lineaarvõrrand on mõistatus: 'Leia see arv, mis teeb võrrandi tõeseks.' Lahendes teeme mõlemale poolele samu tehteid, kuni x on üksi ühel poolel.", analogy: "Kujuta kaalukausi: kui lisad mõlemale poolele sama, jääb tasakaal. Eesmärk on saada x üksinda." },
    formal: { text: "Lineaarvõrrandi üldkuju:", formulas: ["ax + b = c", "x = \\frac{c-b}{a}, \\quad a \\neq 0"] },
    examples: [
      { title: "Lihtne lineaarvõrrand", steps: ["3x + 5 = 14", "3x = 9", "x = 3"], formula: "3x + 5 = 14 \\Rightarrow x = 3" },
      { title: "Murdudega lineaarvõrrand", steps: ["x/2 + x/3 = 5", "Korruta 6-ga: 3x + 2x = 30", "5x = 30, x = 6"], formula: "\\frac{x}{2} + \\frac{x}{3} = 5 \\Rightarrow x = 6" },
      { title: "Tekstülesanne", steps: ["Jüri on praegu x-aastane, õde on 8", "5 aasta pärast: x+5 = 2·(8+5-5+8)... uuesti: x+5 = 2·8 → x = 11"], formula: "x + 5 = 2 \\cdot 8 \\Rightarrow x = 11" }
    ],
    quiz: { question: "Lahenda: 2x - 7 = 13", options: ["x = 3", "x = 10", "x = -3", "x = 6"], correct: 1, explanation: "2x = 20, x = 10." },
    connection: "Lineaarvõrrandid on alus kõigile teistele võrranditüüpidele. Need esinevad kõikjal füüsikas, keemias ja majanduses.",
    summary: { text: "Lineaarvõrrand ax + b = c lahendatakse: x = (c-b)/a.", formula: "ax + b = c \\Rightarrow x = \\frac{c-b}{a}" }
  },
  {
    id: "3-2", chapterId: 3, title: "Võrdekujuline võrrand",
    hook: { text: "Kaart on mõõtkavas 1:50000. Kui kaardil on kaugus 3 cm, mis on tegelik kaugus? See on võrdekujuline võrrand!" },
    history: { text: "Võrded olid tuntud juba antiikajal. Eukleides kasutas võrdeid geomeetrias (~300 eKr). Võrde ristkorrutise reeglid kujunesid välja araabia matemaatikas 9.-10. sajandil." },
    intuition: { text: "a/b = c/d tähendab, et suhe jääb samaks. Ristkorrutis: a·d = b·c. See on kiire tee x leidmiseks.", analogy: "Retsept: 2 muna 4 inimesele. Mitu muna 6 inimesele? 2/4 = x/6 → x = 3." },
    formal: { text: "Võrde lahendamine:", formulas: ["\\frac{a}{b} = \\frac{c}{d} \\Rightarrow ad = bc", "\\frac{x}{a} = \\frac{b}{c} \\Rightarrow x = \\frac{ab}{c}"] },
    examples: [
      { title: "Lihtne võre", steps: ["x/4 = 3/6", "6x = 12", "x = 2"], formula: "\\frac{x}{4} = \\frac{3}{6} \\Rightarrow x = 2" },
      { title: "Mõõtkava ülesanne", steps: ["Mõõtkava 1:50000, kaugus kaardil 3 cm", "1/50000 = 3/x", "x = 150000 cm = 1500 m = 1,5 km"], formula: "\\frac{1}{50000} = \\frac{3}{x} \\Rightarrow x = 150000 \\text{ cm}" },
      { title: "Segatüüpi", steps: ["(x+1)/(x-1) = 3/2", "2(x+1) = 3(x-1)", "2x+2 = 3x-3", "x = 5"], formula: "\\frac{x+1}{x-1} = \\frac{3}{2} \\Rightarrow x = 5" }
    ],
    quiz: { question: "Lahenda: x/3 = 8/4", options: ["x = 6", "x = 4", "x = 12", "x = 2"], correct: 0, explanation: "4x = 24, x = 6." },
    connection: "Võrdekujulised võrrandid esinevad mõõtkava ülesannetes, sarnaste kujundite uurimisel ja füüsika seadustes.",
    summary: { text: "Võre a/b = c/d → ristkorrutis ad = bc.", formula: "\\frac{a}{b} = \\frac{c}{d} \\Rightarrow ad = bc" }
  },
  {
    id: "3-3", chapterId: 3, title: "Ruutvõrrandid",
    hook: { text: "Heitkeha kõrgus ajast: h(t) = -5t² + 20t. Millal jõuab heitkeha maani? See on ruutvõrrand!" },
    history: { text: "Ruutvõrrandeid lahendasid babiloonlased juba 1800 eKr geomeetriliselt. Brahmagupta (628 pKr) andis esimese üldise valemi. Valem, mida me täna kasutame, kujunes välja 16.-17. sajandil." },
    intuition: { text: "Ruutvõrrand on parabool. Lahendid on paraboli lõikepunktid x-teljega — 2, 1 või 0 lahendeid sõltuvalt diskriminandist.", analogy: "Kujuta parabooli lennates üle jõe. Kas see puutub põhja kahel kohal, ühel või ei puutu üldse?" },
    formal: { text: "Ruutvõrrandi lahendamine:", formulas: ["ax^2 + bx + c = 0", "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}", "D = b^2 - 4ac \\text{ — diskriminant}", "D > 0: \\text{kaks lahendit}, \\quad D = 0: \\text{üks lahend}, \\quad D < 0: \\text{lahendeid pole}"] },
    examples: [
      { title: "Ruutvõrrandi valem", steps: ["x² - 5x + 6 = 0", "D = 25 - 24 = 1", "x = (5±1)/2", "x₁ = 3, x₂ = 2"], formula: "x^2 - 5x + 6 = 0 \\Rightarrow x_1 = 3, x_2 = 2" },
      { title: "Täisruutu eraldamine", steps: ["x² + 4x - 5 = 0", "(x+2)² - 4 - 5 = 0", "(x+2)² = 9", "x+2 = ±3", "x = 1 või x = -5"], formula: "(x+2)^2 = 9 \\Rightarrow x = 1 \\text{ või } x = -5" },
      { title: "Vieta valemid", steps: ["x² + px + q = 0 juured x₁ ja x₂", "x₁ + x₂ = -p", "x₁ · x₂ = q", "Näide: x²-5x+6=0: juured 2 ja 3, summa 5, korrutis 6"], formula: "x_1 + x_2 = -p, \\quad x_1 \\cdot x_2 = q" }
    ],
    quiz: { question: "Mis on diskriminant D võrrandi 2x² - 4x + 2 = 0 jaoks?", options: ["8", "0", "16", "-8"], correct: 1, explanation: "D = (-4)² - 4·2·2 = 16 - 16 = 0." },
    connection: "Ruutvõrrandid esinevad füüsikas (vaba lange, heitliikumine), geomeetrias ja majanduses.",
    summary: { text: "Ruutvõrrandi valem: x = (-b ± √D)/(2a), kus D = b² - 4ac.", formula: "x = \\frac{-b \\pm \\sqrt{D}}{2a}" }
  },
  {
    id: "3-4", chapterId: 3, title: "Murdvõrrandid",
    hook: { text: "Kaks toru täidavad basseini — üks 3 tunniga, teine 6 tunniga. Mitu tundi kulub mõlemat kasutades? See on murdvõrrand!" },
    history: { text: "Murdvõrrandid tekkisid loomulikult tundmatuga murdude kasutamisel. Diophantus (~250 pKr) lahendas keerulisi murdvõrrandeid oma 'Arithmetica' raamatus." },
    intuition: { text: "Murdvõrrand sisaldab tundmatut nimetajas. Lahenduseks korruta kõiki termineid ühise nimetajaga — saad tavalise võrrandi. Kuid kontrolli lahendeid alati!", analogy: "Nimetaja null on nagu 'keelatud tsoon'. Lahend ei tohi sinna sattuda." },
    formal: { text: "Murdvõrrandi lahendamine:", formulas: ["\\frac{a}{f(x)} = \\frac{b}{g(x)}", "\\text{1. Korruta ühise nimetajaga}", "\\text{2. Lahenda saadud võrrand}", "\\text{3. Kontrolli: nimetaja} \\neq 0"] },
    examples: [
      { title: "Lihtne murdvõrrand", steps: ["1/x + 1/3 = 1/2", "Korruta 6x-ga: 6 + 2x = 3x", "x = 6", "Kontroll: 1/6 + 1/3 = 1/2 ✓"], formula: "\\frac{1}{x} + \\frac{1}{3} = \\frac{1}{2} \\Rightarrow x = 6" },
      { title: "Basseinülesanne", steps: ["Esimene toru: 1/3 basseinit/tund", "Teine toru: 1/6 basseinit/tund", "Koos: 1/3 + 1/6 = 1/t", "1/t = 2/6 + 1/6 = 3/6 = 1/2", "t = 2 tundi"], formula: "\\frac{1}{3} + \\frac{1}{6} = \\frac{1}{t} \\Rightarrow t = 2" },
      { title: "Ekslahend", steps: ["x/(x-2) = 2/(x-2) + 1", "Korruta (x-2)-ga: x = 2 + (x-2)", "x = x — kõik x sobivad?", "Kuid x≠2 (nimetaja nulliga)!", "Lahend puudub (ekslahend välistab)"], formula: "\\frac{x}{x-2} = \\frac{2}{x-2} + 1 \\Rightarrow \\text{lahend puudub}" }
    ],
    quiz: { question: "Murdvõrrandi lahendamisel pead alati...", options: ["Korrutama lugejaga", "Kontrollima, et nimetaja ≠ 0", "Kasutama diskriminanti", "Jagama kahega"], correct: 1, explanation: "Murdvõrrandites tuleb alati kontrollida, et lahendid ei muuda nimetajat nulliks." },
    connection: "Murdvõrrandid esinevad füüsika valemites (nt takistused rööbiti), majanduses ja töö-aeg ülesannetes.",
    summary: { text: "Murdvõrrand: korruta ühise nimetajaga, lahenda, kontrolli.", formula: "\\text{Kontrolli: } f(x) \\neq 0 \\text{ kõigi lahendite jaoks}" }
  },
  {
    id: "3-5", chapterId: 3, title: "Juurvõrrandid",
    hook: { text: "√(x+3) = 5. Mis on x? Juurvõrrandid peidavad x juure alla — kuid ruutu võttes saame selle kätte!" },
    history: { text: "Juurvõrrandid muutusid oluliseks algebra arenguga 15.-16. sajandil. Cardano (1501–1576) kasutas kuupjuuri kuupvõrrandite lahendamiseks — see oli oma aja sensatsioon." },
    intuition: { text: "√(x+3) = 5 → ruutu võttes: x+3 = 25 → x = 22. Kuid ruutu võttes võidakse lisada 'võltslahendeid', seega tuleb kontrollida!", analogy: "Ruutu võtmine on nagu peegli mees: ta näitab pilti, kuid mõnikord lisab kellegi, keda pole olemas." },
    formal: { text: "Juurvõrrandit lahendades:", formulas: ["\\sqrt{f(x)} = g(x)", "\\Leftrightarrow f(x) = [g(x)]^2 \\text{ ja } g(x) \\geq 0", "\\text{Kontrolli alati lahendeid!}"] },
    examples: [
      { title: "Põhiülesanne", steps: ["√(2x-1) = 3", "2x-1 = 9", "x = 5", "Kontroll: √(10-1) = √9 = 3 ✓"], formula: "\\sqrt{2x-1} = 3 \\Rightarrow x = 5" },
      { title: "Ekslahendiga näide", steps: ["√(x) = x - 2", "x = (x-2)² = x²-4x+4", "x²-5x+4 = 0", "x = 1 või x = 4", "Kontroll x=1: √1 = 1, 1-2 = -1 ✗ ekslahend!", "Kontroll x=4: √4 = 2, 4-2 = 2 ✓"], formula: "\\sqrt{x} = x-2 \\Rightarrow x = 4 \\text{ (x=1 on ekslahend)}" },
      { title: "Kuupjuurvõrrand", steps: ["∛(x+1) = 2", "x+1 = 8", "x = 7", "Kuupjuur lubab negatiivseid väärtusi!"], formula: "\\sqrt[3]{x+1} = 2 \\Rightarrow x = 7" }
    ],
    quiz: { question: "Juurvõrrandis √(x+5) = -2...", options: ["x = -1", "x = -9", "Lahend puudub", "x = 4"], correct: 2, explanation: "Ruutjuur on alati ≥ 0, seega see ei saa võrduda -2-ga. Lahendeid pole." },
    connection: "Juurvõrrandid esinevad füüsikas (kiirus, energia valemid) ja geomeetrias.",
    summary: { text: "Juurvõrrand: tõsta mõlemad pooled astmesse, lahenda, kontrolli ekslahendeid.", formula: "\\sqrt{f(x)} = g(x) \\Rightarrow f(x) = [g(x)]^2, \\; g(x) \\geq 0" }
  },
  {
    id: "3-6", chapterId: 3, title: "Absoluutväärtust sisaldavad võrrandid",
    hook: { text: "|x - 5| = 3. Millistest kohtadest on kaugus punktist 5 täpselt 3? On kaks vastust: 8 ja 2!" },
    history: { text: "Absoluutväärtuse mõiste formaliseeriti 19. sajandil, kui matemaatikud vajasid täpset 'kauguse' kirjeldust arvteljel. Karl Weierstrass kasutas seda analüüsis fundamentaalsel viisil." },
    intuition: { text: "|x| on x kaugus nullist. |x - a| on x kaugus punktist a. Kui kaugus on b, siis x on kas a+b või a-b — kaks võimalust!", analogy: "Kujuta arv-telge. |x-5|=3 küsib: kust on kaugus 5-ni täpselt 3? Vasakult 2 ja paremalt 8." },
    formal: { text: "Absoluutväärtuse võrrand:", formulas: ["|f(x)| = a \\Rightarrow f(x) = a \\text{ või } f(x) = -a \\quad (a \\geq 0)", "|f(x)| = |g(x)| \\Rightarrow f(x) = g(x) \\text{ või } f(x) = -g(x)"] },
    examples: [
      { title: "|2x - 3| = 5", steps: ["2x - 3 = 5 → x = 4", "2x - 3 = -5 → x = -1", "Lahend: x = 4 või x = -1"], formula: "|2x-3| = 5 \\Rightarrow x = 4 \\text{ või } x = -1" },
      { title: "|x + 1| = |x - 3|", steps: ["x+1 = x-3 → 1 = -3 (vastuolu!)", "x+1 = -(x-3) = -x+3", "2x = 2, x = 1"], formula: "|x+1| = |x-3| \\Rightarrow x = 1" },
      { title: "Kahe absoluutväärtusega", steps: ["|x - 2| + |x + 1| = 5", "Vaata kolme piirkonda: x < -1, -1 ≤ x ≤ 2, x > 2", "Lahend: x = -2 või x = 3"], formula: "|x-2| + |x+1| = 5" }
    ],
    quiz: { question: "Mitu lahendit on võrrandil |3x - 6| = 0?", options: ["0", "1", "2", "Lõpmatult"], correct: 1, explanation: "|3x-6| = 0 → 3x-6 = 0 → x = 2. Üks lahend." },
    connection: "Absoluutväärtust kasutatakse kauguse, vea ja hälbe mõõtmisel. Oluline statistikas ja optimeerimises.",
    summary: { text: "|f(x)| = a → f(x) = a või f(x) = -a (a ≥ 0).", formula: "|f(x)| = a \\Rightarrow f(x) = \\pm a" }
  },
  {
    id: "3-7", chapterId: 3, title: "Lineaarvõrrandisüsteemid determinandiga",
    hook: { text: "Kaks tundmatut, kaks võrrandit. Determinant on elegantne tööriist, mis lahendab süsteemi ühe valemiga!" },
    history: { text: "Determinante uuris Leibniz 1693. aastal. Cramer avaldas oma reegli 1750. aastal. Gauss töötas välja süsteemsema meetodi (Gaussi elimineerimine) 19. sajandil." },
    intuition: { text: "2x2 maatriks ja selle determinant näitab, kas süsteemil on ainulaadne lahend (det≠0), lõpmatult lahendeid või lahendeid pole (det=0).", analogy: "Determinant on nagu 'kontrollnumber' — kui see on null, on süsteemil probleemid." },
    formal: { text: "Cramer'i reegel 2x2 süsteemile:", formulas: ["\\begin{cases} a_1x + b_1y = c_1 \\\\ a_2x + b_2y = c_2 \\end{cases}", "D = \\begin{vmatrix} a_1 & b_1 \\\\ a_2 & b_2 \\end{vmatrix} = a_1b_2 - a_2b_1", "x = \\frac{D_x}{D}, \\quad y = \\frac{D_y}{D}"] },
    examples: [
      { title: "Cramer'i reegel", steps: ["{2x+y=7, x-y=2", "D = 2·(-1) - 1·1 = -3", "Dx = 7·(-1) - 2·1 = -9, x = -9/-3 = 3", "Dy = 2·2 - 1·7 = -3, y = -3/-3 = 1"], formula: "D = -3, \\quad x = 3, \\quad y = 1" },
      { title: "Determinandi arvutamine", steps: ["det([[3,1],[2,4]]) = 3·4 - 1·2 = 12 - 2 = 10"], formula: "\\begin{vmatrix} 3 & 1 \\\\ 2 & 4 \\end{vmatrix} = 10" },
      { title: "Lahenditeta süsteem", steps: ["{x+y=3, 2x+2y=5", "D = 1·2-1·2 = 0 → süsteemil pole ainulaadset lahendit"], formula: "D = 0 \\Rightarrow \\text{ainulaadset lahendit pole}" }
    ],
    quiz: { question: "Mis on det([[2,3],[1,4]])?", options: ["5", "8", "11", "14"], correct: 0, explanation: "2·4 - 3·1 = 8 - 3 = 5." },
    connection: "Determinandid ja maatriksid on lineaaralgebra alus, mida kasutatakse arvutigraafikas, tehisintellektis ja inseneritöös.",
    summary: { text: "Cramer'i reegel: x = Dx/D, y = Dy/D, kus D on süsteemi determinant.", formula: "D = a_1b_2 - a_2b_1" }
  },
  {
    id: "3-8", chapterId: 3, title: "Lineaarvõrrandisüsteemid",
    hook: { text: "Kaks kofta maksavad kokku 80 eurot. Üks on 10 euro võrra kallim kui teine. Kui palju maksab kumbki? Lineaarvõrrandisüsteem!" },
    history: { text: "Lineaarvõrrandisüsteemid lahendati Hiinas juba 2000 aastat tagasi 'Üheksa peatüki matemaatikas'. Gaussi elimineerimine (19. sajand) on tänapäeval arvutite peamine meetod suure süsteemide lahendamiseks." },
    intuition: { text: "Kaks võrrandit, kaks tundmatut — nagu kaks joont tasandil. Lahend on nende lõikepunkt. Asendamismetoodi, liitmismeetodi või determinandiga.", analogy: "Kujuta kahte joont kaardil. Kus nad kohtuvad? See on süsteemi lahend." },
    formal: { text: "Lahendamismeetodid:", formulas: ["\\text{Asendamine: väljenda } x \\text{ ja asenda teise võrrandisse}", "\\text{Liitmine: korruta ja liida võrrandeid, et üks tundmatu kadu}", "\\text{Determinant (Cramer'i reegel)}"] },
    examples: [
      { title: "Asendamismeetod", steps: ["{x+y=10, 2x-y=2", "x = 10-y, asenda: 2(10-y)-y=2", "20-3y=2, y=6, x=4"], formula: "x = 4, \\quad y = 6" },
      { title: "Liitmismeetod", steps: ["{3x+2y=12, x-2y=4", "Liida: 4x=16, x=4", "4-2y=4, y=0"], formula: "x = 4, \\quad y = 0" },
      { title: "Tekstülesanne", steps: ["Kaks koftat: x+y=80, x-y=10", "Liida: 2x=90, x=45", "y=35", "Üks maksab 45, teine 35 eurot"], formula: "x = 45 \\text{ €}, \\quad y = 35 \\text{ €}" }
    ],
    quiz: { question: "Lahenda: {x+y=5, x-y=1}", options: ["x=3,y=2", "x=2,y=3", "x=4,y=1", "x=1,y=4"], correct: 0, explanation: "Liida: 2x=6, x=3. Siis y=5-3=2." },
    connection: "Lineaarvõrrandisüsteemid esinevad igas teadusharus: füüsika, keemia, majandus, arvutigraafika.",
    summary: { text: "Lineaarvõrrandisüsteemi lahendusmeetodid: asendamine, liitmine, determinant.", formula: "\\begin{cases} a_1x + b_1y = c_1 \\\\ a_2x + b_2y = c_2 \\end{cases}" }
  },
  {
    id: "3-9", chapterId: 3, title: "Protsentülesannete põhitüübid",
    hook: { text: "Kaup maksab 120 eurot pärast 20% allahindlust. Kui palju maksis see enne? Protsentülesanded on igapäevaelu matemaatika!" },
    history: { text: "Protsendi mõiste (ladina 'per centum' = 100-st) tekkis kaubandusmatemaaatika arenguga 15.-16. sajandil Itaalias. Pangaprotsendid ja maksud olid peamised rakendused." },
    intuition: { text: "1% = 1/100. Kui midagi on x% arvust a, siis see on a·x/100. Lihtne! Keerulisemaks läheb protsendi lisamine/lahutamine ja pöördülesanded.", analogy: "Kujuta 100 ruuduga ruudustikku. 1 ruut = 1%. 20 ruutu = 20%." },
    formal: { text: "Protsendiülesannete valemid:", formulas: ["p\\% \\text{ arvust } a = \\frac{p \\cdot a}{100}", "\\text{Kasv } p\\%: \\; a \\cdot \\left(1 + \\frac{p}{100}\\right)", "\\text{Langus } p\\%: \\; a \\cdot \\left(1 - \\frac{p}{100}\\right)"] },
    examples: [
      { title: "Põhiülesanne", steps: ["15% arvust 80 = 80·15/100 = 12"], formula: "15\\% \\text{ arvust } 80 = 12" },
      { title: "Pöördülesanne", steps: ["120 on 80% millest?", "x · 0,8 = 120", "x = 150"], formula: "0{,}8x = 120 \\Rightarrow x = 150" },
      { title: "Allahindlusülesanne", steps: ["Hind pärast 20% allahindlust: 96 €", "Algne hind: 96 = x·0,8", "x = 120 €"], formula: "96 = x \\cdot 0{,}8 \\Rightarrow x = 120" }
    ],
    quiz: { question: "Hind tõusis 10%-lt 200 eurolt. Uus hind?", options: ["210 €", "220 €", "202 €", "205 €"], correct: 1, explanation: "200 · 1,1 = 220 €." },
    connection: "Protsendid esinevad pankades (laenuintress), kauplustes (allahindlused), statistikas (protsendid) igapäevaelus.",
    summary: { text: "p% arvust a = a·p/100. Kasv p%: a·(1+p/100). Langus: a·(1-p/100).", formula: "p\\% \\text{ arvust } a = \\frac{pa}{100}" }
  },
  {
    id: "3-10", chapterId: 3, title: "Tekstülesannete lahendamine",
    hook: { text: "Rong sõidab 120 km/h ja auto 80 km/h vastassuunast. Nad alustavad 400 km kauguselt. Millal nad kohtuvad? See on tekstülesanne!" },
    history: { text: "Tekstülesanded on matemaatika õpetamise põhiosa olnud läbi aegade. Vanim teadaolev matemaatika õpik — Ahmes'i papüürus (1650 eKr) — sisaldab peamiselt tekstülesandeid." },
    intuition: { text: "Tekstülesande lahendamine: 1) Loe hoolikalt, 2) Tähista tundmatu, 3) Kirjuta võrrand, 4) Lahenda, 5) Kontrolli vastust ülesande kontekstis.", analogy: "Tekstülesanne on nagu detektiivitöö: tõlgi sõnad matemaatikaks, lahenda, kontrolli." },
    formal: { text: "Tekstülesande lahendamise sammud:", formulas: ["\\text{1. Tundmatu: olgu } x = \\text{?}", "\\text{2. Kirjuta seosed võrrandina}", "\\text{3. Lahenda võrrand}", "\\text{4. Kontrolli ja vasta}"] },
    examples: [
      { title: "Liikumisülesanne", steps: ["Rong: 120 km/h, Auto: 80 km/h, kaugus: 400 km", "Kohtumisaeg t: 120t + 80t = 400", "200t = 400, t = 2 tundi"], formula: "120t + 80t = 400 \\Rightarrow t = 2 \\text{ h}" },
      { title: "Töö-aeg ülesanne", steps: ["Mees teeb töö 6 päevaga, naine 4 päevaga", "Koos: 1/6 + 1/4 = 1/t", "2/12 + 3/12 = 5/12 = 1/t", "t = 12/5 = 2,4 päeva"], formula: "\\frac{1}{6} + \\frac{1}{4} = \\frac{1}{t} \\Rightarrow t = 2{,}4 \\text{ päeva}" },
      { title: "Vanusülesanne", steps: ["Isa on praegu 3× vanem kui poeg. 10 aasta pärast on 2× vanem", "Isa: 3x, Poeg: x", "3x+10 = 2(x+10)", "3x+10 = 2x+20, x=10", "Poeg on 10, isa on 30"], formula: "3x + 10 = 2(x + 10) \\Rightarrow x = 10" }
    ],
    quiz: { question: "Kaks töötajat teevad töö 6 ja 12 tunniga. Koos?", options: ["4 tundi", "9 tundi", "3 tundi", "18 tundi"], correct: 0, explanation: "1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4. Koos 4 tundi." },
    connection: "Tekstülesanded ühendavad matemaatikat reaalelu probleemidega — see on kõige praktilisem matemaatika.",
    summary: { text: "Tekstülesande sammud: tähista, kirjuta võrrand, lahenda, kontrolli kontekstis.", formula: "\\text{Tundmatu} \\to \\text{võrrand} \\to \\text{lahend} \\to \\text{kontroll}" }
  }
];
