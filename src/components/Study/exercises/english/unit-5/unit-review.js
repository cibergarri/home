// English, unit 5: the unit review (Lesson 8 and the Activity Book review page).
const unitReview = {
  slug: 'unit-review',
  title: 'Unit 5 review',
  heading: 'A. Order the letters',
  type: 'build',
  instructions: 'Tap the letters in the right order to make the word.',
  puzzles: [
    { prompt: '🌳🧗 climb a … (e r t e)', answer: ['t', 'r', 'e', 'e'], separator: '' },
    { prompt: '🧘 do … (a y o g)', answer: ['y', 'o', 'g', 'a'], separator: '' },
    { prompt: '🚶 go for a … (l a w k)', answer: ['w', 'a', 'l', 'k'], separator: '' },
    { prompt: '⛵ sail a … (t o b a)', answer: ['b', 'o', 'a', 't'], separator: '' },
    { prompt: '🏊 swim in the … (k e a l)', answer: ['l', 'a', 'k', 'e'], separator: '' },
    { prompt: '📖💥 read a … (c i m o c)', answer: ['c', 'o', 'm', 'i', 'c'], separator: '' },
  ],
  more: [
    {
      title: 'B. Choose the right one',
      type: 'quiz',
      instructions: 'Choose the right answer.',
      questions: [
        {
          prompt: '«Quiero jugar al voleibol.»',
          say: false,
          choices: ['I want to play volleyball.', 'I don’t want to play volleyball.', 'Do you want to play volleyball?'],
          answer: 'I want to play volleyball.',
        },
        {
          prompt: '«No quiero hacer una maqueta.»',
          say: false,
          choices: ['I want to make a model.', 'I don’t want to make a model.', 'Do you want to make a model?'],
          answer: 'I don’t want to make a model.',
        },
        {
          prompt: '«¿Quieres jugar a un juego de mesa?»',
          say: false,
          choices: ['I want to play a board game.', 'Do you want to play a board game?', 'I don’t want to play a board game.'],
          answer: 'Do you want to play a board game?',
        },
        {
          prompt: '«Sí, por favor.»', say: false, choices: ['Yes, please.', 'No, thank you.', 'Yes, I can.'], answer: 'Yes, please.',
        },
        {
          prompt: '«No, gracias.»', say: false, choices: ['Yes, please.', 'No, thank you.', 'It’s my turn.'], answer: 'No, thank you.',
        },
        {
          prompt: '«Tocar la guitarra»', say: false, choices: ['play the guitar', 'read a comic', 'sing songs'], answer: 'play the guitar',
        },
        {
          prompt: '«Hueso»', say: false, choices: ['muscle', 'bone', 'joint'], answer: 'bone',
        },
      ],
    },
    {
      title: 'C. Answer for you',
      type: 'quiz',
      instructions: 'Read the question and choose the right answer.',
      questions: [
        {
          prompt: 'Do you want to play the guitar? 😀',
          say: 'Do you want to play the guitar?',
          choices: ['Yes, please.', 'No, thank you.'],
          answer: 'Yes, please.',
        },
        {
          prompt: 'Do you want to sail a boat? 🙁',
          say: 'Do you want to sail a boat?',
          choices: ['Yes, please.', 'No, thank you.'],
          answer: 'No, thank you.',
        },
        {
          prompt: 'Whose turn is it? 👉 Grace',
          say: 'Whose turn is it?',
          choices: ['It’s your turn, Grace.', 'It’s my turn, Grace.', 'Yes, please, Grace.'],
          answer: 'It’s your turn, Grace.',
        },
        {
          prompt: 'What can you do at camp?',
          choices: ['I can swim in the lake.', 'I can go to school.', 'I can wash the car.'],
          answer: 'I can swim in the lake.',
        },
      ],
    },
    {
      title: 'D. Put the words in order',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'want / I / yoga / do / to', answer: ['I', 'want', 'to', 'do', 'yoga.'] },
        { prompt: 'want / don’t / I / basketball / to / play', answer: ['I', 'don’t', 'want', 'to', 'play', 'basketball.'] },
        { prompt: 'you / Do / to / read / want / a / comic', answer: ['Do', 'you', 'want', 'to', 'read', 'a', 'comic?'] },
      ],
    },
  ],
};

export default unitReview;
