// English, unit 6: I go to the… in summer, and I don't go to the… in summer.
const inSummer = {
  slug: 'in-summer',
  title: 'I go to the… in summer',
  heading: 'Go or don’t go?',
  type: 'quiz',
  instructions: 'Look. ✅ is “I go to”, ❌ is “I don’t go to”. Choose the right sentence.',
  questions: [
    {
      prompt: '✅ 🏖️',
      say: false,
      choices: ['I go to the beach in summer.', 'I don’t go to the beach in summer.', 'I go to the village in summer.'],
      answer: 'I go to the beach in summer.',
    },
    {
      prompt: '❌ 🎡',
      say: false,
      choices: ['I go to the funfair in summer.', 'I don’t go to the funfair in summer.', 'I don’t go to the aquarium in summer.'],
      answer: 'I don’t go to the funfair in summer.',
    },
    {
      prompt: '✅ ⛰️',
      say: false,
      choices: ['I don’t go to the mountains in summer.', 'I go to the beach in summer.', 'I go to the mountains in summer.'],
      answer: 'I go to the mountains in summer.',
    },
    {
      prompt: '❌ 🐠',
      say: false,
      choices: ['I don’t go to the aquarium in summer.', 'I go to the aquarium in summer.', 'I don’t go to the water park in summer.'],
      answer: 'I don’t go to the aquarium in summer.',
    },
    {
      prompt: '✅ 🛹',
      say: false,
      choices: ['I go to the skate park in summer.', 'I go to the safari park in summer.', 'I don’t go to the skate park in summer.'],
      answer: 'I go to the skate park in summer.',
    },
    {
      prompt: '❌ 🦁',
      say: false,
      choices: ['I go to the safari park in summer.', 'I don’t go to the skate park in summer.', 'I don’t go to the safari park in summer.'],
      answer: 'I don’t go to the safari park in summer.',
    },
    {
      prompt: '✅ 💦🛝',
      say: false,
      choices: ['I go to the water park in summer.', 'I don’t go to the water park in summer.', 'I go to the funfair in summer.'],
      answer: 'I go to the water park in summer.',
    },
    {
      prompt: '❌ 🏘️',
      say: false,
      choices: ['I go to the village in summer.', 'I don’t go to the village in summer.', 'I don’t go to the mountains in summer.'],
      answer: 'I don’t go to the village in summer.',
    },
  ],
  more: [
    {
      title: 'Make the sentence',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'Voy a la playa en verano.', answer: ['I', 'go', 'to', 'the', 'beach', 'in', 'summer.'] },
        { prompt: 'No voy a la feria en verano.', answer: ['I', 'don’t', 'go', 'to', 'the', 'funfair', 'in', 'summer.'] },
        { prompt: 'Voy al pueblo en verano. ¿Y tú?', answer: ['I', 'go', 'to', 'the', 'village', 'in', 'summer.', 'What', 'about', 'you?'] },
        { prompt: 'No voy al acuario en verano.', answer: ['I', 'don’t', 'go', 'to', 'the', 'aquarium', 'in', 'summer.'] },
      ],
    },
    {
      title: 'Sally and Joe',
      type: 'quiz',
      instructions: 'Read and choose the picture.',
      questions: [
        {
          prompt: 'Sally: “I go to the aquarium in summer.”',
          choices: ['✅ 🐠', '❌ 🐠', '✅ 🏖️'],
          answer: '✅ 🐠',
        },
        {
          prompt: 'Joe: “I don’t go to the beach in summer.”',
          choices: ['✅ 🏖️', '❌ 🏖️', '❌ 🎡'],
          answer: '❌ 🏖️',
        },
        {
          prompt: 'Sally: “I don’t go to the mountains in summer.”',
          choices: ['❌ ⛰️', '✅ ⛰️', '❌ 🏘️'],
          answer: '❌ ⛰️',
        },
        {
          prompt: 'Joe: “I go to the skate park in summer.”',
          choices: ['❌ 🛹', '✅ 🦁', '✅ 🛹'],
          answer: '✅ 🛹',
        },
        {
          prompt: '«Voy a…» es…', say: false, choices: ['I go to…', 'I don’t go to…'], answer: 'I go to…',
        },
        {
          prompt: '«No voy a…» es…', say: false, choices: ['I go to…', 'I don’t go to…'], answer: 'I don’t go to…',
        },
      ],
    },
  ],
};

export default inSummer;
