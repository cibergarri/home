import {
  MakeAModel, PlayABoardGame, PlayTheGuitar, ReadAComic,
} from '../../../drawings/Camp';

// English, unit 5: free-time activities, matched with their pictures, and "Do you want to…? Yes, please. / No, thank you."
const doYouWantTo = {
  slug: 'do-you-want-to',
  title: 'Do you want to…?',
  heading: 'Match the activities',
  type: 'match',
  instructions: 'Tap a word, then its picture.',
  columns: ['Word', 'Picture'],
  pairs: [
    { id: 'model', en: 'make a model', es: 'hacer una maqueta', Picture: MakeAModel },
    { id: 'board-game', en: 'play a board game', es: 'jugar a un juego de mesa', Picture: PlayABoardGame },
    { id: 'guitar', en: 'play the guitar', es: 'tocar la guitarra', Picture: PlayTheGuitar },
    { id: 'comic', en: 'read a comic', es: 'leer un cómic', Picture: ReadAComic },
  ],
  more: [
    {
      title: 'In Spanish',
      type: 'match',
      instructions: 'Tap an activity in English, then the same activity in Spanish.',
      pairs: [
        { id: 'model', en: 'make a model', es: 'hacer una maqueta' },
        { id: 'board-game', en: 'play a board game', es: 'jugar a un juego de mesa' },
        { id: 'guitar', en: 'play the guitar', es: 'tocar la guitarra' },
        { id: 'comic', en: 'read a comic', es: 'leer un cómic' },
      ],
    },
    {
      title: 'Missing letters',
      type: 'letters',
      write: true,
      instructions: 'Write the letters that are missing, one at a time, and tap ✓. Tap 🔊 to hear the words.',
      words: [
        { clue: '✂️🏠', word: 'make a model', shown: 'm_ke a mod_l' },
        { clue: '🎲', word: 'play a board game', shown: 'play a b_ard g_me' },
        { clue: '🎸', word: 'play the guitar', shown: 'play the g_it_r' },
        { clue: '📖💥', word: 'read a comic', shown: 'r_ad a c_mic' },
      ],
    },
    {
      title: 'Yes, please or no, thank you?',
      type: 'quiz',
      instructions: 'Look at the face and choose the answer. 😀 is yes, 🙁 is no.',
      questions: [
        {
          prompt: 'Do you want to read a comic? 😀',
          say: 'Do you want to read a comic?',
          choices: ['Yes, please.', 'No, thank you.'],
          answer: 'Yes, please.',
        },
        {
          prompt: 'Do you want to play the guitar? 🙁',
          say: 'Do you want to play the guitar?',
          choices: ['Yes, please.', 'No, thank you.'],
          answer: 'No, thank you.',
        },
        {
          prompt: 'Do you want to make a model? 🙁',
          say: 'Do you want to make a model?',
          choices: ['Yes, please.', 'No, thank you.'],
          answer: 'No, thank you.',
        },
        {
          prompt: 'Do you want to play a board game? 😀',
          say: 'Do you want to play a board game?',
          choices: ['Yes, please.', 'No, thank you.'],
          answer: 'Yes, please.',
        },
        {
          prompt: '🎸 What’s the question?',
          say: false,
          choices: ['Do you want to play the guitar?', 'Do you want to read a comic?', 'Do you want to make a model?'],
          answer: 'Do you want to play the guitar?',
        },
        {
          prompt: '🎲 What’s the question?',
          say: false,
          choices: ['Do you want to make a model?', 'Do you want to play a board game?', 'Do you want to play basketball?'],
          answer: 'Do you want to play a board game?',
        },
      ],
    },
    {
      title: 'Ask and answer',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: '¿Quieres leer un cómic?', answer: ['Do', 'you', 'want', 'to', 'read', 'a', 'comic?'] },
        { prompt: 'No, gracias. Quiero tocar la guitarra.', answer: ['No,', 'thank', 'you.', 'I', 'want', 'to', 'play', 'the', 'guitar.'] },
        { prompt: '¿Quieres hacer una maqueta?', answer: ['Do', 'you', 'want', 'to', 'make', 'a', 'model?'] },
        { prompt: 'Sí, por favor.', answer: ['Yes,', 'please.'] },
        { prompt: '¿Quieres nadar en el lago?', answer: ['Do', 'you', 'want', 'to', 'swim', 'in', 'the', 'lake?'] },
      ],
    },
  ],
};

export default doYouWantTo;
