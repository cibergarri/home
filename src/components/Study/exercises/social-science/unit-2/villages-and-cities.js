// Social Science, unit 2 (We love our neighbourhood), pages 24–25: villages, towns and cities.
// Cities and towns are large and busy; villages are small and quiet. With exercises 1 and 2 of
// page 25: join each picture to village or city, and each to what it is like.
import { Village, City, LIKE } from '../../../drawings/VillageOrCity';

const villagesAndCities = {
  slug: 'villages-and-cities',
  title: 'Villages, towns and cities',
  heading: 'Village or city?',
  type: 'sort',
  related: { exercise: 'diagrams', label: 'Look at the mind map: village or city?' },
  instructions: 'The place we live in can be a village, a town or a city. Drag each card to the place it tells you about.',
  columns: [
    { id: 'village', title: 'Village', subtitle: 'Small and quiet' },
    { id: 'city', title: 'City or town', subtitle: 'Large and busy' },
  ],
  cards: [
    {
      id: 'few-inhabitants', text: 'There are few inhabitants', columns: ['village'], Picture: LIKE.fewPeople,
      es: 'Hay pocos habitantes',
    },
    {
      id: 'many-inhabitants', text: 'There are many inhabitants', columns: ['city'], Picture: LIKE.manyPeople,
      es: 'Hay muchos habitantes',
    },
    {
      id: 'low-buildings', text: 'Most of the buildings are low', columns: ['village'], Picture: LIKE.lowBuildings,
      es: 'La mayoría de los edificios son bajos',
    },
    {
      id: 'tall-buildings', text: 'Most of the buildings are tall', columns: ['city'], Picture: LIKE.tallBuildings,
      es: 'La mayoría de los edificios son altos',
    },
    {
      id: 'narrow-streets', text: 'The streets are narrow and short', columns: ['village'], Picture: LIKE.narrowStreets,
      es: 'Las calles son estrechas y cortas',
    },
    {
      id: 'wide-streets', text: 'The streets are long and wide', columns: ['city'], Picture: LIKE.wideStreets,
      es: 'Las calles son largas y anchas',
    },
    {
      id: 'little-traffic', text: 'There is not much traffic', columns: ['village'], Picture: LIKE.littleTraffic,
      es: 'No hay mucho tráfico',
    },
    {
      id: 'lots-of-traffic', text: 'There is a lot of traffic', columns: ['city'], Picture: LIKE.lotsOfTraffic,
      es: 'Hay mucho tráfico',
    },
    {
      id: 'few-houses', text: 'Few houses', columns: ['village'], Picture: LIKE.fewHouses,
      es: 'Pocas casas',
    },
    {
      id: 'many-houses', text: 'Many houses', columns: ['city'], Picture: LIKE.manyHouses,
      es: 'Muchas casas',
    },
    {
      id: 'neighbourhoods', text: 'It has different neighbourhoods', columns: ['city'], Picture: LIKE.neighbourhoods,
      es: 'Tiene distintos barrios',
    },
  ],
  more: [
    {
      title: 'Which one is it?',
      type: 'join',
      instructions: 'As on page 25: is it a village or a city? Tap a picture, then join it to its word.',
      left: [{ id: 'village', text: 'village' }, { id: 'city', text: 'city' }],
      right: [
        {
          id: 'city-picture', to: 'city', text: 'Many tall buildings, a wide street and a lot of traffic.', Drawing: City,
        },
        {
          id: 'village-picture', to: 'village', text: 'A few low houses, a little church and green hills.', Drawing: Village,
        },
      ],
    },
    {
      title: 'What are they like?',
      type: 'join',
      instructions: 'As on page 25: what are cities and villages like? Tap a word, then join it to villages or cities.',
      left: [{ id: 'villages', text: 'villages' }, { id: 'cities', text: 'cities' }],
      right: [
        { id: 'few-houses', text: 'few houses', to: 'villages' },
        { id: 'many-houses', text: 'many houses', to: 'cities' },
        { id: 'tall-buildings', text: 'tall buildings', to: 'cities' },
        { id: 'low-buildings', text: 'low buildings', to: 'villages' },
      ],
    },
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
