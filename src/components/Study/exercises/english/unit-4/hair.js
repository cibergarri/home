import {
  Beard, Moustache, CurlyHair, StraightHair, LongHair, ShortHair, DarkHair, FairHair,
} from '../../../drawings/Faces';

// English, unit 4: hair and faces (beard, moustache, curly, straight, long, short, dark, fair),
// matched with Spanish, spelt with missing letters, and unscrambled.
const hair = {
  slug: 'hair',
  title: 'Hair and faces',
  heading: 'Match the pictures',
  type: 'match',
  instructions: 'Tap a word, then its picture.',
  columns: ['Word', 'Picture'],
  pairs: [
    { id: 'beard', en: 'beard', es: 'barba', Picture: Beard },
    { id: 'moustache', en: 'moustache', es: 'bigote', Picture: Moustache },
    { id: 'curly', en: 'curly hair', es: 'pelo rizado', Picture: CurlyHair },
    { id: 'straight', en: 'straight hair', es: 'pelo liso', Picture: StraightHair },
    { id: 'long', en: 'long hair', es: 'pelo largo', Picture: LongHair },
    { id: 'short', en: 'short hair', es: 'pelo corto', Picture: ShortHair },
    { id: 'dark', en: 'dark hair', es: 'pelo oscuro', Picture: DarkHair },
    { id: 'fair', en: 'fair hair', es: 'pelo rubio', Picture: FairHair },
  ],
  more: [
    {
      title: 'Match the words',
      type: 'match',
      instructions: 'Tap a word in English, then the same in Spanish.',
      pairs: [
        { id: 'beard', en: 'beard', es: 'barba' },
        { id: 'moustache', en: 'moustache', es: 'bigote' },
        { id: 'curly', en: 'curly hair', es: 'pelo rizado' },
        { id: 'straight', en: 'straight hair', es: 'pelo liso' },
        { id: 'long', en: 'long hair', es: 'pelo largo' },
        { id: 'short', en: 'short hair', es: 'pelo corto' },
        { id: 'dark', en: 'dark hair', es: 'pelo oscuro' },
        { id: 'fair', en: 'fair hair', es: 'pelo rubio' },
      ],
    },
    {
      title: 'Missing letters',
      type: 'letters',
      write: true,
      instructions: 'Write the letters that are missing, one at a time, and tap ✓. Tap 🔊 to hear the word.',
      words: [
        { clue: '🧔 barba', word: 'beard', shown: 'b_ar_' },
        { clue: 'bigote', word: 'moustache', shown: 'm_ust_che' },
        { clue: '👩‍🦱 rizado', word: 'curly', shown: 'c_rl_' },
        { clue: 'liso', word: 'straight', shown: 'str_ig_t' },
        { clue: 'largo', word: 'long', shown: 'l_n_' },
        { clue: 'corto', word: 'short', shown: 'sh_r_' },
        { clue: 'oscuro', word: 'dark', shown: 'd_r_' },
        { clue: '👱 rubio', word: 'fair', shown: 'f_i_' },
      ],
    },
    {
      title: 'Order the letters',
      type: 'build',
      instructions: 'Tap the letters in the right order to make the word.',
      puzzles: [
        { prompt: 'rifa', hint: 'rubio', answer: ['f', 'a', 'i', 'r'], separator: '' },
        { prompt: 'yucrl', hint: 'rizado', answer: ['c', 'u', 'r', 'l', 'y'], separator: '' },
        { prompt: 'goln', hint: 'largo', answer: ['l', 'o', 'n', 'g'], separator: '' },
        { prompt: 'krad', hint: 'oscuro', answer: ['d', 'a', 'r', 'k'], separator: '' },
        { prompt: 'trosh', hint: 'corto', answer: ['s', 'h', 'o', 'r', 't'], separator: '' },
        { prompt: 'radeb', hint: 'barba', answer: ['b', 'e', 'a', 'r', 'd'], separator: '' },
        { prompt: 'chemusota', hint: 'bigote', answer: ['m', 'o', 'u', 's', 't', 'a', 'c', 'h', 'e'], separator: '' },
      ],
    },
  ],
};

export default hair;
