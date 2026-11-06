import {
  Mum, Dad, Brother, Sister, Grandma, Grandpa, Family,
} from '../../../drawings/Family';

// English, welcome: the family words, and I’ve got a (sister).
const family = {
  slug: 'family',
  title: 'My family',
  heading: 'Who is it?',
  type: 'match',
  instructions: 'Tap a word, then its picture.',
  columns: ['Word', 'Picture'],
  pairs: [
    { id: 'mum', en: 'mum', es: 'mamá', Picture: Mum },
    { id: 'dad', en: 'dad', es: 'papá', Picture: Dad },
    { id: 'brother', en: 'brother', es: 'hermano', Picture: Brother },
    { id: 'sister', en: 'sister', es: 'hermana', Picture: Sister },
    { id: 'grandma', en: 'grandma', es: 'abuela', Picture: Grandma },
    { id: 'grandpa', en: 'grandpa', es: 'abuelo', Picture: Grandpa },
    { id: 'family', en: 'family', es: 'familia', Picture: Family },
  ],
  more: [
    {
      title: 'Match the family',
      type: 'match',
      instructions: 'Tap a word in English, then the same word in Spanish.',
      pairs: [
        { id: 'mum', en: 'mum', es: 'mamá' },
        { id: 'dad', en: 'dad', es: 'papá' },
        { id: 'brother', en: 'brother', es: 'hermano' },
        { id: 'sister', en: 'sister', es: 'hermana' },
        { id: 'cousin', en: 'cousin', es: 'primo, prima' },
        { id: 'grandma', en: 'grandma', es: 'abuela' },
        { id: 'grandpa', en: 'grandpa', es: 'abuelo' },
        { id: 'family', en: 'family', es: 'familia' },
      ],
    },
    {
      title: 'Missing letters',
      type: 'letters',
      write: true,
      instructions: 'Write the letters that are missing, one at a time, and tap ✓. Tap 🔊 to hear the word.',
      words: [
        { clue: 'mamá', word: 'mum', shown: 'm_m' },
        { clue: 'papá', word: 'dad', shown: 'd_d' },
        { clue: 'hermano', word: 'brother', shown: 'br_th_r' },
        { clue: 'hermana', word: 'sister', shown: 's_st_r' },
        { clue: 'primo, prima', word: 'cousin', shown: 'c_us_n' },
        { clue: 'abuela', word: 'grandma', shown: 'gr_ndm_' },
        { clue: 'abuelo', word: 'grandpa', shown: 'gra_dp_' },
        { clue: 'familia', word: 'family', shown: 'f_mil_' },
      ],
    },
    {
      title: 'I’ve got a sister',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'Tengo una hermana.', answer: ['I’ve', 'got', 'a', 'sister.'] },
        { prompt: 'Tengo un primo.', answer: ['I’ve', 'got', 'a', 'cousin.'] },
        { prompt: 'Tengo un hermano mayor.', answer: ['I’ve', 'got', 'a', 'big', 'brother.'] },
        { prompt: 'Tengo una hermana pequeña.', answer: ['I’ve', 'got', 'a', 'little', 'sister.'] },
        { prompt: 'Esta es mi familia.', answer: ['This', 'is', 'my', 'family.'] },
      ],
    },
  ],
};

export default family;
