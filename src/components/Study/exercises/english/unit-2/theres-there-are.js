// English, unit 2: There’s a (hall). There are (two bedrooms). One thing is There’s, more are There are.
const theresThereAre = {
  slug: 'theres-there-are',
  title: 'There’s… There are…',
  heading: 'There’s or There are?',
  type: 'quiz',
  instructions: 'For one thing, say There’s. For two or more, say There are.',
  questions: [
    {
      prompt: '🏠 … a kitchen in my house.', say: false, choices: ['There’s', 'There are'], answer: 'There’s',
    },
    {
      prompt: '🛏️🛏️ … two bedrooms in my house.', say: false, choices: ['There’s', 'There are'], answer: 'There are',
    },
    {
      prompt: '🌳 … a garden in my house.', say: false, choices: ['There’s', 'There are'], answer: 'There’s',
    },
    {
      prompt: '🛁🛁 … two bathrooms in my house.', say: false, choices: ['There’s', 'There are'], answer: 'There are',
    },
    {
      prompt: '🚪 … a hall in my house.', say: false, choices: ['There’s', 'There are'], answer: 'There’s',
    },
    {
      prompt: '🪟🪟🪟 … three windows in my bedroom.', say: false, choices: ['There’s', 'There are'], answer: 'There are',
    },
  ],
  more: [
    {
      title: 'Look and choose',
      type: 'quiz',
      instructions: 'Count and choose the right sentence.',
      questions: [
        {
          prompt: '🛏️🛏️ How many bedrooms?',
          choices: ['There’s a bedroom.', 'There are two bedrooms.', 'There are three bedrooms.'],
          answer: 'There are two bedrooms.',
        },
        {
          prompt: '🚗 Is there a garage?',
          choices: ['There’s a garage.', 'There are two garages.'],
          answer: 'There’s a garage.',
        },
        {
          prompt: '🪟🪟🪟🪟 How many windows?',
          choices: ['There are three windows.', 'There are four windows.', 'There’s a window.'],
          answer: 'There are four windows.',
        },
        {
          prompt: '🛁 How many bathrooms?',
          choices: ['There’s a bathroom.', 'There are two bathrooms.'],
          answer: 'There’s a bathroom.',
        },
        {
          prompt: '🛋️🛋️ How many sofas?',
          choices: ['There’s a sofa.', 'There are two sofas.', 'There are four sofas.'],
          answer: 'There are two sofas.',
        },
      ],
    },
    {
      title: 'In my house',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'En mi casa hay un recibidor.', answer: ['In', 'my', 'house', 'there’s', 'a', 'hall.'] },
        { prompt: 'En mi casa hay dos dormitorios.', answer: ['In', 'my', 'house', 'there', 'are', 'two', 'bedrooms.'] },
        { prompt: 'Hay un jardín.', answer: ['There’s', 'a', 'garden.'] },
        { prompt: 'Hay tres ventanas.', answer: ['There', 'are', 'three', 'windows.'] },
        { prompt: 'Este es el salón.', answer: ['This', 'is', 'the', 'living', 'room.'] },
      ],
    },
  ],
};

export default theresThereAre;
