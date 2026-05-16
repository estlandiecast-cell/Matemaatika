export const chapters = [
  {
    id: 1,
    title: "Avaldised ja arvuhulgad",
    topics: [
      { id: "1-1", title: "Arvuhulgad" },
      { id: "1-2", title: "Hulgateooria" },
      { id: "1-3", title: "Arvu aste" },
      { id: "1-4", title: "Arvu n-es juur" },
      { id: "1-5", title: "Tehted algebraliste murdudega" },
    ]
  },
  {
    id: 2,
    title: "Võrratused ja võrratusesüsteemid",
    topics: [
      { id: "2-1", title: "Lineaarvõrratused" },
      { id: "2-2", title: "Ruutvõrratused" },
      { id: "2-3", title: "Intervallide meetod" },
      { id: "2-4", title: "Murdvõrratused" },
      { id: "2-5", title: "Võrratusesüsteemid" },
    ]
  },
  {
    id: 3,
    title: "Võrrandid ja võrrandisüsteemid",
    topics: [
      { id: "3-1", title: "Lineaarvõrrandid" },
      { id: "3-2", title: "Võrdekujuline võrrand" },
      { id: "3-3", title: "Ruutvõrrandid" },
      { id: "3-4", title: "Murdvõrrandid" },
      { id: "3-5", title: "Juurvõrrandid" },
      { id: "3-6", title: "Absoluutväärtust sisaldavad võrrandid" },
      { id: "3-7", title: "Lineaarvõrrandisüsteemid determinandiga" },
      { id: "3-8", title: "Lineaarvõrrandisüsteemid" },
      { id: "3-9", title: "Protsentülesannete põhitüübid" },
      { id: "3-10", title: "Tekstülesannete lahendamine" },
    ]
  },
  {
    id: 4,
    title: "Planimeetria",
    topics: [
      { id: "4-1", title: "Lähis- ja põiknurgad" },
      { id: "4-2", title: "Kolmnurk ja selle omadused" },
      { id: "4-3", title: "Rööpkülik, romb, trapets" },
    ]
  },
  {
    id: 5,
    title: "Vektorid ja joonte võrrandid",
    topics: [
      { id: "5-1", title: "Vektorid. Tehted vektoritega geomeetriliselt" },
      { id: "5-2", title: "Koordinaatidega määratud vektorid" },
      { id: "5-3", title: "Joone võrrandid" },
    ]
  },
  {
    id: 6,
    title: "Tõenäosusteooria",
    topics: [
      { id: "6-1", title: "Kombinatoorika" },
      { id: "6-2", title: "Sündmuse tõenäosus" },
      { id: "6-3", title: "Statistiline ja geomeetriline tõenäosus" },
      { id: "6-4", title: "Bernoulli valem" },
    ]
  },
  {
    id: 7,
    title: "Arvjadad",
    topics: [
      { id: "7-1", title: "Arvjadad" },
      { id: "7-2", title: "Aritmeetilised jadad" },
      { id: "7-3", title: "Geomeetrilised jadad" },
      { id: "7-4", title: "Hääbuvad geomeetrilised jadad" },
    ]
  },
  {
    id: 8,
    title: "Eksponent- ja logaritmfunktsioon",
    topics: [
      { id: "8-1", title: "Eksponentfunktsioonid ja -võrrandid" },
      { id: "8-2", title: "Liitprotsendiline kasv ja kahanemine" },
      { id: "8-3", title: "Logaritmfunktsioonid ja -võrrandid" },
    ]
  },
  {
    id: 9,
    title: "Trigonomeetrilised funktsioonid ja võrrandid",
    topics: [
      { id: "9-1", title: "Nurga mõiste üldistamine" },
      { id: "9-2", title: "Mistahes nurga trigonomeetrilised funktsioonid" },
      { id: "9-3", title: "Trigonomeetria valemid" },
      { id: "9-4", title: "Kaare pikkus ja sektori pindala" },
      { id: "9-5", title: "Trigonomeetrilised funktsioonid" },
      { id: "9-6", title: "Trigonomeetrilised võrrandid" },
    ]
  },
  {
    id: 10,
    title: "Funktsiooni uurimine",
    topics: [
      { id: "10-1", title: "Võrdeline ja pöördvõrdeline seos. Lineaarfunktsioon" },
      { id: "10-2", title: "Ruutfunktsioonid" },
      { id: "10-3", title: "Astmefunktsioonid" },
      { id: "10-4", title: "Funktsiooni tuletis. Diferentseerimine" },
      { id: "10-5", title: "Funktsiooni uurimine" },
      { id: "10-6", title: "Pöördfunktsioon. Liitfunktsioon" },
      { id: "10-7", title: "Funktsiooni piirvärtus. Jada piirvärtus" },
      { id: "10-8", title: "Funktsiooni graafiku asümptoodid" },
    ]
  },
  {
    id: 11,
    title: "Ekstreemumülesanded",
    topics: [
      { id: "11-1", title: "Ekstreemumülesanded" },
    ]
  },
];

// Helper to get all topics flat
export const getAllTopics = () => chapters.flatMap(ch => ch.topics.map(t => ({ ...t, chapterId: ch.id, chapterTitle: ch.title })));

// Get lesson order
export const getLessonOrder = () => getAllTopics().map(t => t.id);

// Get prev/next lesson
export const getAdjacentLessons = (lessonId) => {
  const order = getLessonOrder();
  const idx = order.indexOf(lessonId);
  return {
    prev: idx > 0 ? order[idx - 1] : null,
    next: idx < order.length - 1 ? order[idx + 1] : null,
  };
};
