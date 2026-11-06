// English, unit 3: the sound /sw/ ("Seven swans in sweaters swim in the swimming pool"), and
// "It’s cold. Put on your sweater." / "It’s hot. Take off your jacket."
const putOnYourSweater = {
  slug: 'put-on-your-sweater',
  title: 'Put on your sweater!',
  heading: 'Words with sw',
  type: 'quiz',
  instructions: 'Which word starts with the letters sw? Tap 🔊 to hear the words.',
  questions: [
    { prompt: 'Which word has sw?', say: 'sweater, trousers, skirt', choices: ['sweater', 'trousers', 'skirt'], answer: 'sweater' },
    { prompt: 'Find the sw word.', say: 'seven, swan, snake', choices: ['seven', 'swan', 'snake'], answer: 'swan' },
    { prompt: 'Which one starts with sw?', say: 'swim, sit, shout', choices: ['sit', 'shout', 'swim'], answer: 'swim' },
    { prompt: 'Where is sw?', say: 'scarf, swimming pool, school', choices: ['scarf', 'school', 'swimming pool'], answer: 'swimming pool' },
    { prompt: 'Tap the word with sw.', say: 'sweet, shoes, socks', choices: ['shoes', 'sweet', 'socks'], answer: 'sweet' },
  ],
  more: [
    {
      title: 'The tongue twister',
      type: 'build',
      instructions: 'Tap the words in the right order, then say it fast!',
      puzzles: [
        {
          prompt: 'Siete cisnes con jerséis nadan en la piscina.',
          answer: ['Seven', 'swans', 'in', 'sweaters', 'swim', 'in', 'the', 'swimming', 'pool.'],
        },
      ],
    },
    {
      title: 'Hot or cold?',
      type: 'quiz',
      instructions: 'Look at the weather and choose what to say.',
      questions: [
        {
          prompt: '🥶 It’s cold.',
          choices: ['Put on your sweater.', 'Take off your sweater.'],
          answer: 'Put on your sweater.',
        },
        {
          prompt: '🥵 It’s hot.',
          choices: ['Put on your jacket.', 'Take off your jacket.'],
          answer: 'Take off your jacket.',
        },
        {
          prompt: '❄️ It’s cold and snowy.',
          choices: ['Put on your jacket.', 'Take off your jacket.'],
          answer: 'Put on your jacket.',
        },
        {
          prompt: '☀️ It’s hot and sunny.',
          choices: ['Put on your sweater.', 'Take off your sweater.'],
          answer: 'Take off your sweater.',
        },
        {
          prompt: '«Ponte el jersey.»',
          say: false,
          choices: ['Put on your sweater.', 'Take off your sweater.', 'Put on your jacket.'],
          answer: 'Put on your sweater.',
        },
        {
          prompt: '«Quítate la chaqueta.»',
          say: false,
          choices: ['Put on your jacket.', 'Take off your sweater.', 'Take off your jacket.'],
          answer: 'Take off your jacket.',
        },
      ],
    },
    {
      title: 'Make the sentence',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'Hace frío. Ponte el jersey.', answer: ['It’s', 'cold.', 'Put', 'on', 'your', 'sweater.'] },
        { prompt: 'Hace calor. Quítate la chaqueta.', answer: ['It’s', 'hot.', 'Take', 'off', 'your', 'jacket.'] },
      ],
    },
  ],
};

export default putOnYourSweater;
