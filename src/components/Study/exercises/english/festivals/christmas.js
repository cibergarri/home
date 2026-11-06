import {
  Letter, PostBox, Cracker, MincePie, Reindeer, FatherChristmas, NorthPole,
} from '../../../drawings/Festivals';

// English, festivals: Christmas, and a letter: Dear Father Christmas, Can I have a (kite), please?
const christmas = {
  slug: 'christmas',
  title: 'Christmas',
  heading: 'Match the pictures',
  type: 'match',
  instructions: 'Tap a word, then its picture.',
  columns: ['Word', 'Picture'],
  pairs: [
    { id: 'letter', en: 'letter', es: 'carta', Picture: Letter },
    { id: 'post-box', en: 'post box', es: 'buzón', Picture: PostBox },
    { id: 'cracker', en: 'cracker', es: 'petardo sorpresa', Picture: Cracker },
    { id: 'mince-pie', en: 'mince pie', es: 'pastelito de frutas', Picture: MincePie },
    { id: 'reindeer', en: 'reindeer', es: 'reno', Picture: Reindeer },
    { id: 'father-christmas', en: 'Father Christmas', es: 'Papá Noel', Picture: FatherChristmas },
    { id: 'north-pole', en: 'North Pole', es: 'Polo Norte', Picture: NorthPole },
  ],
  more: [
    {
      title: 'Match the Christmas words',
      type: 'match',
      instructions: 'Tap a word in English, then the same in Spanish.',
      pairs: [
        { id: 'letter', en: '✉️ letter', es: 'carta' },
        { id: 'post-box', en: '📮 post box', es: 'buzón' },
        { id: 'cracker', en: '🎉 cracker', es: 'petardo sorpresa' },
        { id: 'mince-pie', en: '🥧 mince pie', es: 'pastelito de frutas' },
        { id: 'reindeer', en: '🦌 reindeer', es: 'reno' },
        { id: 'father-christmas', en: '🎅 Father Christmas', es: 'Papá Noel' },
        { id: 'north-pole', en: '❄️ North Pole', es: 'Polo Norte' },
      ],
    },
    {
      title: 'What’s this?',
      type: 'quiz',
      instructions: 'Read and choose the right answer.',
      questions: [
        {
          prompt: '🦌 What’s this?',
          choices: ['It’s a reindeer.', 'It’s a cracker.', 'It’s a letter.'],
          answer: 'It’s a reindeer.',
        },
        {
          prompt: '📮 Where do you put your letter?',
          choices: ['In the fridge.', 'In the post box.', 'In the mince pie.'],
          answer: 'In the post box.',
        },
        {
          prompt: '🎅 Where does Father Christmas live?',
          choices: ['At the North Pole.', 'In a caravan.', 'In the garden.'],
          answer: 'At the North Pole.',
        },
        {
          prompt: '🥧 What can you eat?',
          choices: ['A post box.', 'A mince pie.', 'A letter.'],
          answer: 'A mince pie.',
        },
        {
          prompt: '🎉 You pull it with a friend and it goes BANG! What is it?',
          choices: ['A reindeer.', 'A cracker.', 'A post box.'],
          answer: 'A cracker.',
        },
        {
          prompt: '✉️ How does a letter start?',
          choices: ['Dear Father Christmas,', 'Goodbye, Father Christmas.', 'Who’s that?'],
          answer: 'Dear Father Christmas,',
        },
      ],
    },
    {
      title: 'My letter',
      type: 'build',
      instructions: 'Tap the words in the right order to write your letter.',
      puzzles: [
        { prompt: 'Querido Papá Noel:', answer: ['Dear', 'Father', 'Christmas,'] },
        { prompt: '¿Me traes una cometa, por favor?', answer: ['Can', 'I', 'have', 'a', 'kite,', 'please?'] },
        {
          prompt: '¿Me traes una cometa y unas zapatillas, por favor?',
          answer: ['Can', 'I', 'have', 'a', 'kite', 'and', 'trainers,', 'please?'],
        },
        { prompt: 'Muchas gracias.', answer: ['Thank', 'you', 'very', 'much.'] },
        { prompt: 'Con cariño, Julia.', answer: ['Love,', 'Julia.'] },
      ],
    },
    {
      title: 'Missing letters',
      type: 'letters',
      write: true,
      instructions: 'Write the letters that are missing, one at a time, and tap ✓. Tap 🔊 to hear the word.',
      words: [
        { clue: '✉️', word: 'letter', shown: 'l_tt_r' },
        { clue: '🦌', word: 'reindeer', shown: 'r_ind_er' },
        { clue: '🎉', word: 'cracker', shown: 'cr_ck_r' },
        { clue: '🪁', word: 'kite', shown: 'k_t_' },
      ],
    },
  ],
};

export default christmas;
