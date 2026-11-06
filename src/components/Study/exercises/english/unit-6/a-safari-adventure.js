// English, unit 6: the story "A safari adventure", with questions about it, and caring for animals.
const aSafariAdventure = {
  slug: 'a-safari-adventure',
  title: 'Story: A safari adventure',
  heading: 'What happens in the story?',
  type: 'quiz',
  instructions: 'Remember the story “A safari adventure” and choose the right answer.',
  questions: [
    {
      prompt: 'Where are the children?',
      choices: ['At the safari park.', 'At the beach.', 'At camp.'],
      answer: 'At the safari park.',
    },
    {
      prompt: 'What animals does Grace want to see?',
      choices: ['The lions.', 'The penguins.', 'The monkeys.'],
      answer: 'The penguins.',
    },
    {
      prompt: 'Is the blue zone hot or cold?',
      choices: ['It’s hot.', 'It’s cold.'],
      answer: 'It’s cold.',
    },
    {
      prompt: '“Where’s the blue zone, please?”',
      choices: ['Turn left. Then turn right.', 'Yes, I do.', 'It’s my turn.'],
      answer: 'Turn left. Then turn right.',
    },
    {
      prompt: '“Pay attention, …”',
      choices: ['Sam.', 'Daisy.', 'Grace.'],
      answer: 'Sam.',
    },
    {
      prompt: '“I go to the blue zone in summer. I don’t go to the …”',
      choices: ['green zone.', 'blue zone.', 'beach.'],
      answer: 'green zone.',
    },
    {
      prompt: '¿Qué es importante en esta historia?',
      say: false,
      choices: ['Care for animals.', 'Take turns.', 'Be brave.'],
      answer: 'Care for animals.',
    },
  ],
  more: [
    {
      title: 'Go to or don’t go to?',
      type: 'quiz',
      instructions: 'Remember the story and choose.',
      questions: [
        {
          prompt: '“I … the safari park in summer.”',
          choices: ['go to', 'don’t go to'],
          answer: 'go to',
        },
        {
          prompt: '“I … the blue zone in summer.”',
          choices: ['go to', 'don’t go to'],
          answer: 'go to',
        },
        {
          prompt: '“I … the green zone in summer.”',
          choices: ['go to', 'don’t go to'],
          answer: 'don’t go to',
        },
      ],
    },
    {
      title: 'In order',
      type: 'build',
      instructions: 'Tap what happens in the story, in the right order.',
      puzzles: [
        {
          prompt: 'What happens first? And then?',
          answer: ['The children are at the safari park.', 'Grace wants to see the penguins.', 'They ask the way.', 'They go to the blue zone.'],
        },
      ],
    },
    {
      title: 'Care for a cat',
      type: 'quiz',
      instructions: 'How can you care for a cat? Choose the right word.',
      questions: [
        {
          prompt: '🐱 We can give the cat … to drink.', choices: ['water', 'food', 'a bed'], answer: 'water',
        },
        {
          prompt: '🐱 We can give the cat … to eat.', choices: ['a bed', 'water', 'food'], answer: 'food',
        },
        {
          prompt: '🐱 We can give the cat … to sleep on.', choices: ['food', 'a bed', 'water'], answer: 'a bed',
        },
      ],
    },
    {
      title: 'Phrases from the story',
      type: 'match',
      instructions: 'Tap a phrase in English, then the same phrase in Spanish.',
      pairs: [
        { id: 'see', en: 'I want to see the penguins.', es: 'Quiero ver los pingüinos.' },
        { id: 'cold', en: 'It’s cold there.', es: 'Allí hace frío.' },
        { id: 'where', en: 'Where’s the blue zone, please?', es: '¿Dónde está la zona azul, por favor?' },
        { id: 'attention', en: 'Pay attention.', es: 'Presta atención.' },
        { id: 'great', en: 'Summer is great!', es: '¡El verano es genial!' },
        { id: 'care', en: 'It’s important to care for animals.', es: 'Es importante cuidar a los animales.' },
      ],
    },
  ],
};

export default aSafariAdventure;
