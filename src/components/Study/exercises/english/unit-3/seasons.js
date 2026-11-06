import {
  Spring, Summer, Autumn, Winter, Sunhat, Sunglasses, Boots, Scarf,
} from '../../../drawings/Clothes';

// English, unit 3 (social science): clothes and the four seasons, and which clothes protect us
// from the snow and from the sun.
const seasons = {
  slug: 'seasons',
  title: 'Clothes and the seasons',
  heading: 'Find the picture',
  type: 'match',
  instructions: 'Tap a word, then its picture.',
  columns: ['Word', 'Picture'],
  pairs: [
    { id: 'spring', en: 'spring', es: 'primavera', Picture: Spring },
    { id: 'summer', en: 'summer', es: 'verano', Picture: Summer },
    { id: 'autumn', en: 'autumn', es: 'otoño', Picture: Autumn },
    { id: 'winter', en: 'winter', es: 'invierno', Picture: Winter },
    { id: 'sunhat', en: 'sunhat', es: 'gorro para el sol', Picture: Sunhat },
    { id: 'sunglasses', en: 'sunglasses', es: 'gafas de sol', Picture: Sunglasses },
    { id: 'boots', en: 'boots', es: 'botas', Picture: Boots },
    { id: 'scarf', en: 'scarf', es: 'bufanda', Picture: Scarf },
  ],
  more: [
    {
      title: 'The four seasons',
      type: 'match',
      instructions: 'Tap a word in English, then the same word in Spanish.',
      pairs: [
        { id: 'spring', en: 'spring', es: 'primavera' },
        { id: 'summer', en: 'summer', es: 'verano' },
        { id: 'autumn', en: 'autumn', es: 'otoño' },
        { id: 'winter', en: 'winter', es: 'invierno' },
        { id: 'sunhat', en: 'sunhat', es: 'gorro para el sol' },
        { id: 'sunglasses', en: 'sunglasses', es: 'gafas de sol' },
        { id: 'boots', en: 'boots', es: 'botas' },
        { id: 'scarf', en: 'scarf', es: 'bufanda' },
      ],
    },
    {
      title: 'Summer or winter?',
      type: 'sort',
      instructions: 'Drag each piece of clothing to the season you wear it in.',
      columns: [
        { id: 'summer', title: '☀️ Summer' },
        { id: 'winter', title: '❄️ Winter' },
      ],
      cards: [
        { id: 'sunhat', text: 'a sunhat', columns: ['summer'] },
        { id: 'sunglasses', text: 'sunglasses', columns: ['summer'] },
        { id: 't-shirt', text: 'a T-shirt', columns: ['summer'] },
        { id: 'scarf', text: 'a scarf', columns: ['winter'] },
        { id: 'sweater', text: 'a sweater', columns: ['winter'] },
        { id: 'boots', text: 'boots', columns: ['winter'] },
      ],
    },
    {
      title: 'Clothes protect us',
      type: 'quiz',
      instructions: 'Read and choose the right answer.',
      questions: [
        {
          prompt: '❄️ In winter I wear … to protect my body.',
          say: 'In winter I wear something to protect my body.',
          choices: ['a sweater', 'a sunhat', 'sunglasses'],
          answer: 'a sweater',
        },
        {
          prompt: '☀️ In summer I wear … to protect my head.',
          say: 'In summer I wear something to protect my head.',
          choices: ['a scarf', 'a sunhat', 'boots'],
          answer: 'a sunhat',
        },
        {
          prompt: '😎 What protects your eyes from the sun?',
          choices: ['sunglasses', 'a scarf', 'trainers'],
          answer: 'sunglasses',
        },
        {
          prompt: '⛄ What protects your feet in the snow?',
          choices: ['a sunhat', 'boots', 'a T-shirt'],
          answer: 'boots',
        },
        {
          prompt: '🧣 What protects your neck when it’s cold?',
          choices: ['a scarf', 'sunglasses', 'a skirt'],
          answer: 'a scarf',
        },
        {
          prompt: '🍂 Which season comes after summer?',
          choices: ['spring', 'autumn', 'winter'],
          answer: 'autumn',
        },
      ],
    },
    {
      title: 'My favourite season',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'Es verano. Llevo puesta una camiseta amarilla.', answer: ['It’s', 'summer.', 'I’m', 'wearing', 'a', 'yellow', 'T-shirt.'] },
        { prompt: 'Es invierno. Llevo puesta una bufanda.', answer: ['It’s', 'winter.', 'I’m', 'wearing', 'a', 'scarf.'] },
        { prompt: 'Llevo puesto un gorro rojo.', answer: ['I’m', 'wearing', 'a', 'red', 'hat.'] },
        { prompt: 'Llevo puestas unas zapatillas azules.', answer: ['I’m', 'wearing', 'blue', 'trainers.'] },
      ],
    },
  ],
};

export default seasons;
