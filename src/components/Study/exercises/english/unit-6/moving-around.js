// English, unit 6, social science: moving around, with more ways to travel and reading tickets.
const movingAround = {
  slug: 'moving-around',
  title: 'Moving around',
  heading: 'How do you travel?',
  type: 'match',
  instructions: 'Tap a way to travel in English, then the same in Spanish.',
  pairs: [
    { id: 'bike', en: 'by bike', es: 'en bici' },
    { id: 'bus', en: 'by bus', es: 'en autobús' },
    { id: 'ferry', en: 'by ferry', es: 'en ferri' },
    { id: 'underground', en: 'by underground train', es: 'en metro' },
  ],
  more: [
    {
      title: 'What is it?',
      type: 'quiz',
      instructions: 'Look at the picture and choose the way to travel.',
      questions: [
        { prompt: '🚲', say: false, choices: ['by bike', 'by bus', 'by ferry'], answer: 'by bike' },
        { prompt: '⛴️', say: false, choices: ['by underground train', 'by ferry', 'by car'], answer: 'by ferry' },
        { prompt: '🚇', say: false, choices: ['by bike', 'on foot', 'by underground train'], answer: 'by underground train' },
        { prompt: '🚌', say: false, choices: ['by bus', 'by ferry', 'by bike'], answer: 'by bus' },
        { prompt: '🦆 Some ducks can fly for … hours!', choices: ['eight', 'two', 'twenty'], answer: 'eight' },
        { prompt: '🐕 Assistance dogs can go on … trips!', choices: ['bus', 'boat', 'bike'], answer: 'bus' },
      ],
    },
    {
      title: 'Read the tickets',
      type: 'quiz',
      instructions: 'Read the tickets. 🎫 Bus ticket: to Sandy Beach, £1.00. 🎫 Train ticket: to Apple Village, £2.00. True or false?',
      questions: [
        {
          prompt: 'I go to the beach by bus.', choices: ['True ✅', 'False ❌'], answer: 'True ✅',
        },
        {
          prompt: 'The bus ticket is £3.00.', say: 'The bus ticket is three pounds.', choices: ['True ✅', 'False ❌'], answer: 'False ❌',
        },
        {
          prompt: 'I go to the village by bus.', choices: ['True ✅', 'False ❌'], answer: 'False ❌',
        },
        {
          prompt: 'The train ticket is £2.00.', say: 'The train ticket is two pounds.', choices: ['True ✅', 'False ❌'], answer: 'True ✅',
        },
        {
          prompt: 'I go to the village by train.', choices: ['True ✅', 'False ❌'], answer: 'True ✅',
        },
      ],
    },
    {
      title: 'Where do you want to go?',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'Quiero ir a la playa. Voy en autobús.', answer: ['I', 'want', 'to', 'go', 'to', 'the', 'beach.', 'I', 'go', 'by', 'bus.'] },
        { prompt: 'Voy al parque en bici.', answer: ['I', 'go', 'to', 'the', 'park', 'by', 'bike.'] },
        { prompt: 'Tengo curiosidad por cómo viaja la gente.', answer: ['I’m', 'curious', 'about', 'how', 'people', 'travel.'] },
      ],
    },
  ],
};

export default movingAround;
