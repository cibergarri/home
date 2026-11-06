// English, unit 6: the unit review (Lesson 8 and the Activity Book review page).
const unitReview = {
  slug: 'unit-review',
  title: 'Unit 6 review',
  heading: 'A. Order the letters',
  type: 'build',
  instructions: 'Tap the letters in the right order to make the place.',
  puzzles: [
    { prompt: '🏖️ c h a b e', answer: ['b', 'e', 'a', 'c', 'h'], separator: '' },
    { prompt: '🎡 r i f a n u f', answer: ['f', 'u', 'n', 'f', 'a', 'i', 'r'], separator: '' },
    { prompt: '⛰️ s t i n m o u n a', answer: ['m', 'o', 'u', 'n', 't', 'a', 'i', 'n', 's'], separator: '' },
    { prompt: '🏘️ g a v i l e l', answer: ['v', 'i', 'l', 'l', 'a', 'g', 'e'], separator: '' },
    { prompt: '🐠 a r a m u i q u', answer: ['a', 'q', 'u', 'a', 'r', 'i', 'u', 'm'], separator: '' },
    { prompt: '🦁 a r i f s a … park', answer: ['s', 'a', 'f', 'a', 'r', 'i'], separator: '' },
    { prompt: '🛹 t e a k s … park', answer: ['s', 'k', 'a', 't', 'e'], separator: '' },
    { prompt: '💦 r a w e t … park', answer: ['w', 'a', 't', 'e', 'r'], separator: '' },
  ],
  more: [
    {
      title: 'B. Look and choose',
      type: 'quiz',
      instructions: 'Look at the pictures and choose the right sentence.',
      questions: [
        {
          prompt: '🏖️ 🚆',
          say: false,
          choices: ['I go to the beach by train.', 'I go to the beach by boat.', 'I don’t go to the beach.'],
          answer: 'I go to the beach by train.',
        },
        {
          prompt: '⛰️ 🚗',
          say: false,
          choices: ['I go to the mountains by bus.', 'I go to the mountains by car.', 'I go to the village by car.'],
          answer: 'I go to the mountains by car.',
        },
        {
          prompt: '🐠 🚌',
          say: false,
          choices: ['I go to the aquarium by bus.', 'I go to the aquarium on foot.', 'I go to the safari park by bus.'],
          answer: 'I go to the aquarium by bus.',
        },
        {
          prompt: '🦁 ⛵',
          say: false,
          choices: ['I go to the safari park by train.', 'I go to the skate park by boat.', 'I go to the safari park by boat.'],
          answer: 'I go to the safari park by boat.',
        },
        {
          prompt: '🛹 🚶',
          say: false,
          choices: ['I go to the skate park on foot.', 'I go to the water park on foot.', 'I go to the skate park by car.'],
          answer: 'I go to the skate park on foot.',
        },
      ],
    },
    {
      title: 'C. Choose the right one',
      type: 'quiz',
      instructions: 'Choose the right answer.',
      questions: [
        {
          prompt: '«No voy a la feria en verano.»',
          say: false,
          choices: ['I go to the funfair in summer.', 'I don’t go to the funfair in summer.', 'Do you go to the funfair in summer?'],
          answer: 'I don’t go to the funfair in summer.',
        },
        {
          prompt: '«¿Vas al pueblo en coche?»',
          say: false,
          choices: ['Do you go to the village by car?', 'I go to the village by car.', 'Do you go to the village by bus?'],
          answer: 'Do you go to the village by car?',
        },
        {
          prompt: '«Sí.» (Do you go…?)', say: false, choices: ['Yes, I do.', 'Yes, please.', 'Yes, I can.'], answer: 'Yes, I do.',
        },
        {
          prompt: '«No.» (Do you go…?)', say: false, choices: ['No, thank you.', 'No, I don’t.', 'No, I can’t.'], answer: 'No, I don’t.',
        },
        {
          prompt: '«Gira a la derecha»', say: false, choices: ['Turn left.', 'Turn right.', 'Go straight on.'], answer: 'Turn right.',
        },
        {
          prompt: '«Andando»', say: false, choices: ['by car', 'on foot', 'by bike'], answer: 'on foot',
        },
      ],
    },
  ],
};

export default unitReview;
