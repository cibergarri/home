// Social Science, unit 2 (We love our neighbourhood), pages 24–25: villages, towns and cities.
// Cities and towns are large and busy; villages are small and quiet.
const villagesAndCities = {
  slug: 'villages-and-cities',
  title: 'Villages, towns and cities',
  heading: 'Village or city?',
  type: 'sort',
  instructions: 'The place we live in can be a village, a town or a city. Drag each card to the place it tells you about.',
  columns: [
    { id: 'village', title: 'Village', subtitle: 'Small and quiet' },
    { id: 'city', title: 'City or town', subtitle: 'Large and busy' },
  ],
  cards: [
    { id: 'few-inhabitants', text: 'There are few inhabitants', columns: ['village'] },
    { id: 'many-inhabitants', text: 'There are many inhabitants', columns: ['city'] },
    { id: 'low-buildings', text: 'Most of the buildings are low', columns: ['village'] },
    { id: 'tall-buildings', text: 'Most of the buildings are tall', columns: ['city'] },
    { id: 'narrow-streets', text: 'The streets are narrow and short', columns: ['village'] },
    { id: 'wide-streets', text: 'The streets are long and wide', columns: ['city'] },
    { id: 'little-traffic', text: 'There is not much traffic', columns: ['village'] },
    { id: 'lots-of-traffic', text: 'There is a lot of traffic', columns: ['city'] },
    { id: 'few-houses', text: 'Few houses', columns: ['village'] },
    { id: 'many-houses', text: 'Many houses', columns: ['city'] },
    { id: 'neighbourhoods', text: 'It has different neighbourhoods', columns: ['city'] },
  ],
  more: [
    {
      title: 'Busy or quiet?',
      type: 'quiz',
      instructions: 'Read and choose.',
      questions: [
        { prompt: 'A place with many inhabitants and a lot of traffic is…', choices: ['a city', 'a village'], answer: 'a city' },
        { prompt: 'A small place with few inhabitants is…', choices: ['a village', 'a city'], answer: 'a village' },
        { prompt: 'Which place is busy?', choices: ['The city', 'The village'], answer: 'The city' },
        { prompt: 'Which place is quiet?', choices: ['The village', 'The city'], answer: 'The village' },
        { prompt: 'In a city, most of the buildings are…', choices: ['tall', 'low'], answer: 'tall' },
        { prompt: 'In a village, the streets are…', choices: ['narrow and short', 'long and wide'], answer: 'narrow and short' },
        { prompt: 'Cities and towns are divided into…', choices: ['neighbourhoods', 'mountains', 'rivers'], answer: 'neighbourhoods' },
        { prompt: 'Is a town small or large?', choices: ['Large', 'Small'], answer: 'Large' },
      ],
    },
  ],
};

export default villagesAndCities;
