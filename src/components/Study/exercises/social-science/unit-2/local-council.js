// Social Science, unit 2, pages 30–31: the local council. We live in a municipality, governed by
// the local council: the mayor and the councillors, in the town hall. It organises the local
// services.
const localCouncil = {
  slug: 'local-council',
  title: 'The local council',
  heading: 'Who is who?',
  type: 'match',
  instructions: 'Tap a word, then what it means.',
  root: 'The local council',
  columns: ['Word', 'What is it?'],
  pairs: [
    { id: 'municipality', en: 'Municipality', es: 'One or more villages or towns and the area around them.' },
    { id: 'council', en: 'Local council', es: 'The people who govern the municipality.' },
    { id: 'mayor', en: 'Mayor', es: 'The head of the local council.' },
    { id: 'councillors', en: 'Councillors', es: 'The people who help the mayor.' },
    { id: 'town-hall', en: 'Town hall', es: 'The building where the local council works.' },
    { id: 'services', en: 'Local services', es: 'Things the council organises for everybody, like libraries and parks.' },
  ],
  more: [
    {
      title: 'Local services',
      type: 'sort',
      instructions: 'The local council organises the local services. Is it a local service?',
      columns: [
        { id: 'service', title: '✅ Local service' },
        { id: 'not', title: '❌ Not a local service' },
      ],
      cards: [
        { id: 'library', text: 'Libraries', columns: ['service'] },
        { id: 'museum', text: 'Museums', columns: ['service'] },
        { id: 'parks', text: 'Parks and gardens', columns: ['service'] },
        { id: 'police', text: 'Police and traffic', columns: ['service'] },
        { id: 'bus', text: 'Public transport', columns: ['service'] },
        { id: 'rubbish', text: 'Rubbish collection', columns: ['service'] },
        { id: 'events', text: 'Cultural events', columns: ['service'] },
        { id: 'kitchen', text: 'The kitchen at home', columns: ['not'] },
        { id: 'toys', text: 'My toys', columns: ['not'] },
        { id: 'bedroom', text: 'My bedroom', columns: ['not'] },
      ],
    },
    {
      title: 'Complete the sentences',
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
