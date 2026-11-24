// Social Science, unit 2, pages 30–31: the local council. We live in a municipality, governed by
// the local council: the mayor and the councillors, in the town hall. It organises the local
// services. First each word with its Spanish, then with what it means (in English, with a flag for
// the Spanish), then the local services with their Spanish.

// The words of the local council: in Spanish, what each one is, and that in Spanish.
const WORDS = [
  {
    id: 'municipality', en: 'Municipality', es: 'municipio', meaning: 'One or more villages or towns and the area around them.', meaningEs: 'Uno o varios pueblos o ciudades y el campo de alrededor.',
  },
  {
    id: 'council', en: 'Local council', es: 'ayuntamiento', meaning: 'The people who govern the municipality.', meaningEs: 'Las personas que gobiernan el municipio.',
  },
  {
    id: 'mayor', en: 'Mayor', es: 'alcalde o alcaldesa', meaning: 'The head of the local council.', meaningEs: 'La persona que dirige el ayuntamiento.',
  },
  {
    id: 'councillors', en: 'Councillors', es: 'concejales', meaning: 'The people who help the mayor.', meaningEs: 'Las personas que ayudan al alcalde o a la alcaldesa.',
  },
  {
    id: 'town-hall', en: 'Town hall', es: 'el edificio del ayuntamiento', meaning: 'The building where the local council works.', meaningEs: 'El edificio donde trabaja el ayuntamiento.',
  },
  {
    id: 'services', en: 'Local services', es: 'servicios municipales', meaning: 'Things the council organises for everybody, like libraries and parks.', meaningEs: 'Lo que el ayuntamiento organiza para todos, como las bibliotecas y los parques.',
  },
];

// The local services, as on page 31.
const SERVICES = [
  { id: 'transport', en: 'Public transport', es: 'transporte público' },
  { id: 'rubbish', en: 'Rubbish collection', es: 'recogida de basura' },
  { id: 'events', en: 'Cultural events', es: 'actos culturales' },
  { id: 'museums', en: 'Museums and libraries', es: 'museos y bibliotecas' },
  { id: 'parks', en: 'Parks and gardens', es: 'parques y jardines' },
  { id: 'police', en: 'Police and traffic', es: 'policía y tráfico' },
];

const localCouncil = {
  slug: 'local-council',
  title: 'The local council',
  heading: 'The words in Spanish',
  type: 'match',
  related: { exercise: 'diagrams', part: 'The local council', label: 'Look at the mind map of the local council' },
  instructions: 'Tap a word, then the same word in Spanish.',
  explain: false, // the flags would give the Spanish away
  columns: ['Word', 'In Spanish'],
  pairs: WORDS.map(({ id, en, es }) => ({ id, en, es })),
  more: [
    {
      title: 'Who is who?',
      type: 'match',
      instructions: 'Tap a word, then what it means. The flag on each meaning says it in Spanish.',
      columns: ['Word', 'What is it?'],
      pairs: WORDS.map(({
        id, en, meaning, meaningEs,
      }) => ({
        id, en, es: meaning, meaningEs,
      })),
    },
    {
      title: 'Local services in Spanish',
      type: 'match',
      instructions: 'The local council organises the local services. Tap a service, then the same service in Spanish.',
      explain: false,
      columns: ['Local service', 'In Spanish'],
      pairs: SERVICES,
    },
    {
      title: 'Complete the sentences',
      type: 'gaps',
      instructions: 'As on page 31: drag each word to its gap, or tap it and then tap the gap.',
      sentences: [
        'The [mayor] is the head of the local council.',
        'The [councillors] work in the [town hall].',
        'The councillors organise the local [services].',
        'The mayor is the [head] of the local council.',
        'The [councillors] help the [mayor].',
      ],
    },
    {
      title: 'Choose the word',
      type: 'quiz',
      instructions: 'Choose the word that goes in the gap.',
      questions: [
        { prompt: 'The … is the head of the local council.', choices: ['mayor', 'councillors', 'town hall'], answer: 'mayor' },
        { prompt: 'The … help the mayor.', choices: ['councillors', 'neighbours', 'mayor'], answer: 'councillors' },
        { prompt: 'The local council works in the …', choices: ['town hall', 'supermarket', 'school'], answer: 'town hall' },
        { prompt: 'The local council organises the local …', choices: ['services', 'mountains', 'rivers'], answer: 'services' },
        { prompt: 'The local council governs the …', choices: ['municipality', 'family', 'classroom'], answer: 'municipality' },
        { prompt: 'People elect the local council every … years.', choices: ['four', 'ten', 'two'], answer: 'four' },
      ],
    },
  ],
};

export default localCouncil;
