// English, unit 6: the sound /st/ with its tongue twister, and asking the way ("Where's the funfair, please?").
const wheresTheFunfair = {
  slug: 'wheres-the-funfair',
  title: 'St… and Where’s the funfair?',
  heading: 'Words with st',
  type: 'quiz',
  instructions: 'Look at the picture and choose the word with the letters “st”.',
  questions: [
    { prompt: '🚉', say: false, choices: ['station', 'shop', 'school'], answer: 'station' },
    { prompt: '🛑', say: false, choices: ['shout', 'stop', 'sail'], answer: 'stop' },
    { prompt: '🪜', say: false, choices: ['stairs', 'shower', 'sofa'], answer: 'stairs' },
    { prompt: '🏙️ A road in a town:', say: false, choices: ['shark', 'street', 'sea'], answer: 'street' },
    { prompt: '⭐', say: false, choices: ['shell', 'sun', 'star'], answer: 'star' },
    { prompt: '📖 Once upon a time…', say: false, choices: ['story', 'shoe', 'swim'], answer: 'story' },
  ],
  more: [
    {
      title: 'The tongue twister',
      type: 'build',
      instructions: 'Tap the words in the right order, then say it fast!',
      puzzles: [
        {
          prompt: '¡Para! La calle de la estación está subiendo las escaleras.',
          answer: ['Stop!', 'Station', 'street', 'is', 'up', 'the', 'stairs.'],
        },
      ],
    },
    {
      title: 'Which way?',
      type: 'quiz',
      instructions: 'Look at the arrow and choose the right way.',
      questions: [
        {
          prompt: '⬅️', say: false, choices: ['Turn left.', 'Turn right.', 'Go straight on.'], answer: 'Turn left.',
        },
        {
          prompt: '➡️', say: false, choices: ['Turn left.', 'Turn right.', 'Go straight on.'], answer: 'Turn right.',
        },
        {
          prompt: '⬆️', say: false, choices: ['Turn left.', 'Turn right.', 'Go straight on.'], answer: 'Go straight on.',
        },
        {
          prompt: '➡️ ⬆️', say: false, choices: ['Turn right, then go straight on.', 'Turn left, then turn right.', 'Go straight on, then turn left.'], answer: 'Turn right, then go straight on.',
        },
        {
          prompt: '⬅️ ➡️', say: false, choices: ['Turn right, then turn left.', 'Turn left, then turn right.', 'Turn left, then go straight on.'], answer: 'Turn left, then turn right.',
        },
        {
          prompt: '«Gira a la izquierda»', say: false, choices: ['Turn left.', 'Turn right.', 'Go straight on.'], answer: 'Turn left.',
        },
        {
          prompt: '«Sigue recto»', say: false, choices: ['Turn left.', 'Turn right.', 'Go straight on.'], answer: 'Go straight on.',
        },
      ],
    },
    {
      title: 'Ask the way',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: '¿Dónde está la feria, por favor?', answer: ['Where’s', 'the', 'funfair,', 'please?'] },
        { prompt: 'Gira a la derecha y luego sigue recto.', answer: ['Turn', 'right,', 'then', 'go', 'straight', 'on.'] },
        { prompt: '¿Dónde está el acuario, por favor?', answer: ['Where’s', 'the', 'aquarium,', 'please?'] },
        { prompt: 'Gira a la izquierda. La playa está ahí.', answer: ['Turn', 'left.', 'The', 'beach', 'is', 'there.'] },
      ],
    },
  ],
};

export default wheresTheFunfair;
