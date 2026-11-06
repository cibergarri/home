import {
  Dress, Jacket, Jeans, Skirt, Sweater, Trainers, TShirt, Trousers,
} from '../../../drawings/Clothes';

// English, unit 3: clothes, matched with pictures and with Spanish, spelt with missing letters, and unscrambled.
const clothes = {
  slug: 'clothes',
  title: 'Clothes',
  heading: 'Find the clothes',
  type: 'match',
  instructions: 'Tap a word, then its picture.',
  columns: ['Word', 'Picture'],
  pairs: [
    { id: 'dress', en: 'dress', es: 'vestido', Picture: Dress },
    { id: 'jacket', en: 'jacket', es: 'chaqueta', Picture: Jacket },
    { id: 'jeans', en: 'jeans', es: 'vaqueros', Picture: Jeans },
    { id: 'skirt', en: 'skirt', es: 'falda', Picture: Skirt },
    { id: 'sweater', en: 'sweater', es: 'jersey', Picture: Sweater },
    { id: 'trainers', en: 'trainers', es: 'zapatillas de deporte', Picture: Trainers },
    { id: 't-shirt', en: 'T-shirt', es: 'camiseta', Picture: TShirt },
    { id: 'trousers', en: 'trousers', es: 'pantalones', Picture: Trousers },
  ],
  more: [
    {
      title: 'Match the clothes',
      type: 'match',
      instructions: 'Tap a word in English, then the same word in Spanish.',
      pairs: [
        { id: 'dress', en: 'dress', es: 'vestido' },
        { id: 'jacket', en: 'jacket', es: 'chaqueta' },
        { id: 'jeans', en: 'jeans', es: 'vaqueros' },
        { id: 'skirt', en: 'skirt', es: 'falda' },
        { id: 'sweater', en: 'sweater', es: 'jersey' },
        { id: 'trainers', en: 'trainers', es: 'zapatillas de deporte' },
        { id: 't-shirt', en: 'T-shirt', es: 'camiseta' },
        { id: 'trousers', en: 'trousers', es: 'pantalones' },
      ],
    },
    {
      title: 'Missing letters',
      type: 'letters',
      write: true,
      instructions: 'Write the letters that are missing, one at a time, and tap ✓. Tap 🔊 to hear the word.',
      words: [
        { clue: '👗 un vestido', word: 'dress', shown: 'dr_s_' },
        { clue: '🧥 una chaqueta', word: 'jacket', shown: 'j_ck_t' },
        { clue: '👖 unos vaqueros', word: 'jeans', shown: 'j_an_' },
        { clue: 'una falda', word: 'skirt', shown: 'sk_r_' },
        { clue: 'un jersey', word: 'sweater', shown: 'sw_at_r' },
        { clue: '👟 unas zapatillas de deporte', word: 'trainers', shown: 'tr_in_rs' },
        { clue: '👕 una camiseta', word: 'T-shirt', shown: 'T-sh_r_' },
        { clue: 'unos pantalones', word: 'trousers', shown: 'tr_us_rs' },
      ],
    },
    {
      title: 'Order the letters',
      type: 'build',
      instructions: 'Tap the letters in the right order to make the word.',
      puzzles: [
        { prompt: 'najes', hint: 'unos vaqueros', answer: ['j', 'e', 'a', 'n', 's'], separator: '' },
        { prompt: 'krist', hint: 'una falda', answer: ['s', 'k', 'i', 'r', 't'], separator: '' },
        { prompt: 'sreds', hint: 'un vestido', answer: ['d', 'r', 'e', 's', 's'], separator: '' },
        { prompt: 'jetkac', hint: 'una chaqueta', answer: ['j', 'a', 'c', 'k', 'e', 't'], separator: '' },
        { prompt: 'seratew', hint: 'un jersey', answer: ['s', 'w', 'e', 'a', 't', 'e', 'r'], separator: '' },
        { prompt: 'snerrita', hint: 'unas zapatillas de deporte', answer: ['t', 'r', 'a', 'i', 'n', 'e', 'r', 's'], separator: '' },
      ],
    },
  ],
};

export default clothes;
