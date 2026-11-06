// English, unit 6, culture: summer activities in the UK, and the bar chart project.
const summerActivities = {
  slug: 'summer-activities',
  title: 'Summer activities',
  heading: 'Match the activities',
  type: 'match',
  instructions: 'Tap an activity in English, then the same activity in Spanish.',
  pairs: [
    { id: 'playground', en: 'play in the playground', es: 'jugar en el parque infantil' },
    { id: 'crafts', en: 'do crafts', es: 'hacer manualidades' },
    { id: 'dress-up', en: 'dress up', es: 'disfrazarse' },
    { id: 'castle', en: 'visit a castle', es: 'visitar un castillo' },
  ],
  more: [
    {
      title: 'What do they do in summer?',
      type: 'quiz',
      instructions: 'Look at the picture and choose the right sentence.',
      questions: [
        {
          prompt: '🏰',
          say: false,
          choices: ['I visit a castle.', 'I do crafts.', 'I dress up.'],
          answer: 'I visit a castle.',
        },
        {
          prompt: '✂️🎨',
          say: false,
          choices: ['I dress up.', 'I do crafts.', 'I play in the playground.'],
          answer: 'I do crafts.',
        },
        {
          prompt: '👑🦸',
          say: false,
          choices: ['I visit a castle.', 'I play in the playground.', 'I dress up.'],
          answer: 'I dress up.',
        },
        {
          prompt: '🛝',
          say: false,
          choices: ['I play in the playground.', 'I do crafts.', 'I visit a castle.'],
          answer: 'I play in the playground.',
        },
      ],
    },
    {
      title: 'In summer, I…',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'En verano, voy al parque.', answer: ['In', 'summer,', 'I', 'go', 'to', 'the', 'park.'] },
        { prompt: 'Voy en bici.', answer: ['I', 'go', 'by', 'bike.'] },
        { prompt: 'Juego en el parque infantil.', answer: ['I', 'play', 'in', 'the', 'playground.'] },
        { prompt: 'Mi sitio favorito es la playa.', answer: ['My', 'favourite', 'place', 'is', 'the', 'beach.'] },
      ],
    },
    {
      title: 'Our bar chart',
      type: 'quiz',
      instructions: 'Each 🙋 is a friend who says “Yes, I do.” Count and choose the right sentence.',
      questions: [
        {
          prompt: '🏖️ 🙋🙋🙋🙋🙋',
          say: false,
          choices: ['Five friends go to the beach in summer.', 'Two friends go to the beach in summer.', 'Four friends go to the beach in summer.'],
          answer: 'Five friends go to the beach in summer.',
        },
        {
          prompt: '🎡 🙋🙋',
          say: false,
          choices: ['Three friends go to the funfair in summer.', 'Two friends go to the funfair in summer.', 'Five friends go to the funfair in summer.'],
          answer: 'Two friends go to the funfair in summer.',
        },
        {
          prompt: '⛰️ 🙋🙋🙋',
          say: false,
          choices: ['Three friends go to the mountains in summer.', 'Six friends go to the mountains in summer.', 'One friend goes to the mountains in summer.'],
          answer: 'Three friends go to the mountains in summer.',
        },
        {
          prompt: '🐠 🙋',
          say: false,
          choices: ['Two friends go to the aquarium in summer.', 'One friend goes to the aquarium in summer.', 'Four friends go to the aquarium in summer.'],
          answer: 'One friend goes to the aquarium in summer.',
        },
        {
          prompt: '💦 🙋🙋🙋🙋',
          say: false,
          choices: ['Four friends go to the water park in summer.', 'Five friends go to the water park in summer.', 'Three friends go to the water park in summer.'],
          answer: 'Four friends go to the water park in summer.',
        },
      ],
    },
  ],
};

export default summerActivities;
