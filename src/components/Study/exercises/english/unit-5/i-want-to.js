// English, unit 5: I want to… and I don't want to… with the camp activities.
const iWantTo = {
  slug: 'i-want-to',
  title: 'I want to…',
  heading: 'Want or don’t want?',
  type: 'quiz',
  instructions: 'Look at the faces. 😀 is “I want to”, 🙁 is “I don’t want to”. Choose the right sentence.',
  questions: [
    {
      prompt: '😀 🧘',
      say: false,
      choices: ['I want to do yoga.', 'I don’t want to do yoga.', 'I want to sail a boat.'],
      answer: 'I want to do yoga.',
    },
    {
      prompt: '🙁 ⛵',
      say: false,
      choices: ['I want to sail a boat.', 'I don’t want to sail a boat.', 'I don’t want to swim in the lake.'],
      answer: 'I don’t want to sail a boat.',
    },
    {
      prompt: '😀 🏀',
      say: false,
      choices: ['I don’t want to play basketball.', 'I want to play volleyball.', 'I want to play basketball.'],
      answer: 'I want to play basketball.',
    },
    {
      prompt: '🙁 🏊',
      say: false,
      choices: ['I don’t want to swim in the lake.', 'I want to swim in the lake.', 'I don’t want to go for a walk.'],
      answer: 'I don’t want to swim in the lake.',
    },
    {
      prompt: '😀 🌳🧗',
      say: false,
      choices: ['I want to go for a walk.', 'I want to climb a tree.', 'I don’t want to climb a tree.'],
      answer: 'I want to climb a tree.',
    },
    {
      prompt: '🙁 🏓',
      say: false,
      choices: ['I want to play table tennis.', 'I don’t want to play basketball.', 'I don’t want to play table tennis.'],
      answer: 'I don’t want to play table tennis.',
    },
    {
      prompt: '😀 🏐',
      say: false,
      choices: ['I want to play volleyball.', 'I don’t want to play volleyball.', 'I want to do yoga.'],
      answer: 'I want to play volleyball.',
    },
    {
      prompt: '🙁 🚶',
      say: false,
      choices: ['I want to go for a walk.', 'I don’t want to go for a walk.', 'I don’t want to sail a boat.'],
      answer: 'I don’t want to go for a walk.',
    },
  ],
  more: [
    {
      title: 'Make the sentence',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'Quiero hacer yoga.', answer: ['I', 'want', 'to', 'do', 'yoga.'] },
        { prompt: 'No quiero navegar en barco.', answer: ['I', 'don’t', 'want', 'to', 'sail', 'a', 'boat.'] },
        { prompt: 'Quiero jugar al baloncesto.', answer: ['I', 'want', 'to', 'play', 'basketball.'] },
        { prompt: 'No quiero nadar en el lago.', answer: ['I', 'don’t', 'want', 'to', 'swim', 'in', 'the', 'lake.'] },
        { prompt: 'Quiero trepar a un árbol. ¿Y tú?', answer: ['I', 'want', 'to', 'climb', 'a', 'tree.', 'What', 'about', 'you?'] },
      ],
    },
    {
      title: 'What do they want?',
      type: 'quiz',
      instructions: 'Read and choose the right answer.',
      questions: [
        {
          prompt: 'Anika: “I want to do yoga.”',
          choices: ['😀 🧘', '🙁 🧘', '😀 🏊'],
          answer: '😀 🧘',
        },
        {
          prompt: 'Mario: “I don’t want to swim in the lake.”',
          choices: ['😀 🏊', '🙁 🏊', '🙁 ⛵'],
          answer: '🙁 🏊',
        },
        {
          prompt: 'Susie: “I want to sail a boat.”',
          choices: ['🙁 ⛵', '😀 🏓', '😀 ⛵'],
          answer: '😀 ⛵',
        },
        {
          prompt: 'Joe: “I don’t want to play table tennis.”',
          choices: ['🙁 🏓', '😀 🏓', '🙁 🏀'],
          answer: '🙁 🏓',
        },
        {
          prompt: '«Quiero» es…', say: false, choices: ['I want to', 'I don’t want to'], answer: 'I want to',
        },
        {
          prompt: '«No quiero» es…', say: false, choices: ['I want to', 'I don’t want to'], answer: 'I don’t want to',
        },
        {
          prompt: '«¿Y tú?» es…', say: false, choices: ['What about you?', 'What’s that?', 'Can you help me?'], answer: 'What about you?',
        },
      ],
    },
  ],
};

export default iWantTo;
