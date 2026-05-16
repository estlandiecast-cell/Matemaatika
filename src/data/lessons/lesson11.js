export const lessons11 = [
  {
    id: "11-1", chapterId: 11, title: "Ekstreemumülesanded",
    hook: { text: "Milline ristküliku kujuline aed 100-meetrise aiaga piiramiseks annab maksimaalse pindala? Mis on optimeerimine? See on ekstreemumülesanne!" },
    history: { text: "Ekstreemumülesandeid lahendas esimesena süsteemselt Fermat (1601–1665) enne tuletise ametlikku avastamist. Newton ja Leibniz andsid diferentsiaalarvutuse, mis tegi optimeerimise universaalselt lahendatavaks." },
    intuition: { text: "Ekstreemum (maksimum või miinimum) leitakse seal, kus funktsiooni tuletis on null — kus muutumiskiirus on null, seal on tipp või org. Kuid tuletis=0 ei garanteeri ekstreemumit, tuleb kontrollida!", analogy: "Kujuta mägedmaastikku: tipp (maksimum) ja org (miinimum) on kohad, kus maastiku kalle on 0." },
    formal: { text: "Ekstreemumi leidmise skeem:", formulas: ["\\text{1. Kirjuta eesmärgifunktsioon } f(x)", "\\text{2. Leia piirangud (kitsendused)}", "\\text{3. Asenda piirang funktsiooni}", "f'(x) = 0 \\Rightarrow \\text{kriitilised punktid}", "\\text{5. Kontrolli: max või min?}"] },
    examples: [
      { title: "Aiaülesanne", steps: ["Piirdeks 100 m, ristkülik. Maksimaalne pindala?", "Perimeeter: 2x + 2y = 100 → y = 50-x", "Pindala: S = x·y = x(50-x) = 50x-x²", "S'(x) = 50-2x = 0 → x=25", "Smax = 25·25 = 625 m²"], formula: "S = x(50-x), \\quad S_{max} = 625 \\text{ m}^2 \\text{ (x=25)}" },
      { title: "Kasumi maksimeerimine", steps: ["Müügihind p, kogus q: p = 100-2q", "Kulu: C = 10q", "Kasum: π = pq - C = (100-2q)q - 10q = 90q-2q²", "π'(q) = 90-4q = 0 → q=22,5", "Kasummax = 90·22,5 - 2·22,5² = 1012,5"], formula: "\\pi_{max} = 1012{,}5 \\text{ (q=22,5)}" },
      { title: "Ruudu suurim pindala sisse kirjutatud kolmnurgas", steps: ["Täisnurkne kolmnurk, kaatetid 6 ja 8. Suurim ruut?", "Ruudu külg x: seos (6-x)/6 = x/8", "8(6-x) = 6x", "48-8x = 6x, 14x=48, x=24/7≈3,43", "Smax = x² ≈ 11,76"], formula: "x = \\frac{24}{7}, \\quad S = x^2 \\approx 11{,}76" }
    ],
    quiz: { question: "f(x) = -x² + 4x. Maksimumi koht?", options: ["x=2", "x=4", "x=0", "x=-2"], correct: 0, explanation: "f'(x) = -2x+4 = 0 → x=2. f(2)=4 on maksimum." },
    connection: "Ekstreemumülesanded on matemaatilise optimeerimise alus — kasutatakse majanduses, inseneritöös, tehisintellektis ja teaduses igal pool.",
    summary: { text: "Ekstreemum: f'(x)=0, kontrolli max/min. Koosta eesmärgifunktsioon ja asenda kitsendused.", formula: "f'(x_0) = 0 \\Rightarrow \\text{ekstreemum kohal } x_0" }
  }
];
