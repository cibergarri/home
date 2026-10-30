import { blocks } from '../scenes';

// Mates, tema 2: números hasta 199, en centenas, decenas y unidades, en bloques, en letras y en
// series.
const blockQuestion = (hundreds, tens, ones, choices) => ({
  prompt: '¿Qué número es?',
  hint: 'La placa verde es una centena (100), cada barra roja una decena (10) y cada cubo azul una unidad (1).',
  scene: blocks(tens, ones, hundreds),
  choices: choices.map(String),
  answer: String(hundreds * 100 + tens * 10 + ones),
});

const hasta199 = {
  slug: 'hasta-199',
  title: 'Números hasta 199',
  heading: 'Descompón',
  type: 'numbers',
  instructions: 'Escribe cuántas centenas, decenas y unidades tiene. Pulsa ✓ después de cada número.',
  questions: [
    { prompt: '152 = 100 + ? + ?', answer: [50, 2] },
    { prompt: '174 = 100 + ? + ?', answer: [70, 4] },
    { prompt: '163 = 1 C + ? D + ? U', answer: [6, 3] },
    { prompt: '187 = 100 + ? + ?', answer: [80, 7] },
    { prompt: '115 = 100 + ? + ?', answer: [10, 5] },
    { prompt: '158 = 1 C + ? D + ? U', answer: [5, 8] },
    { prompt: '191 = 100 + ? + ?', answer: [90, 1] },
    { prompt: '109 = 1 C + ? D + ? U', answer: [0, 9] },
    { prompt: '100 + 60 + 7 = ?', answer: 167 },
    { prompt: '1 C + 2 D + 5 U = ?', answer: 125 },
    { prompt: '100 + 30 + 9 = ?', answer: 139 },
    { prompt: '145 = 1 C + ? D + ? U', answer: [4, 5] },
    { prompt: '145 = 100 + ? + ?', answer: [40, 5] },
    { prompt: '136 = 1 C + ? D + ? U', answer: [3, 6] },
    { prompt: '136 = 100 + ? + ?', answer: [30, 6] },
    { prompt: '128 = 100 + ? + ?', answer: [20, 8] },
    { prompt: '119 = 1 C + ? D + ? U', answer: [1, 9] },
    { prompt: '160 = 1 C + ? D + ? U', answer: [6, 0] },
  ],
  more: [
    {
      title: 'Cuenta los bloques',
      type: 'quiz',
      instructions: 'Cuenta las centenas, las decenas y las unidades y elige el número.',
      questions: [
        blockQuestion(1, 4, 5, [154, 145, 45]),
        blockQuestion(1, 3, 6, [136, 163, 36]),
        blockQuestion(1, 2, 2, [22, 212, 122]),
        blockQuestion(1, 0, 8, [108, 180, 18]),
        blockQuestion(1, 5, 0, [105, 150, 15]),
        blockQuestion(1, 9, 9, [199, 99, 919]),
      ],
    },
    {
      title: 'Números en letras',
      type: 'match',
      instructions: 'Toca un número y después cómo se escribe.',
      columns: ['Número', 'En letras'],
      pairs: [
        { id: '136', en: '136', es: 'ciento treinta y seis' },
        { id: '145', en: '145', es: 'ciento cuarenta y cinco' },
        { id: '123', en: '123', es: 'ciento veintitrés' },
        { id: '116', en: '116', es: 'ciento dieciséis' },
        { id: '110', en: '110', es: 'ciento diez' },
        { id: '128', en: '128', es: 'ciento veintiocho' },
        { id: '160', en: '160', es: 'ciento sesenta' },
        { id: '100', en: '100', es: 'cien' },
      ],
    },
    {
      title: 'Completa la serie',
      type: 'numbers',
      instructions: 'Escribe los números que faltan, uno a uno.',
      questions: [
        { prompt: '140, 141, ?, 143, ?, ?, 146, ?, ?, 149', answer: [142, 144, 145, 147, 148] },
        { prompt: '100, 110, ?, 130, ?, 150, ?', answer: [120, 140, 160] },
        { prompt: '199, 198, ?, ?, 195, ?', answer: [197, 196, 194] },
        { prompt: '150, 160, ?, ?, 190', answer: [170, 180] },
      ],
    },
    {
      title: 'Fíjate en las cifras',
      type: 'quiz',
      instructions: 'Piensa en las centenas, las decenas y las unidades de cada número.',
      questions: [
        {
          prompt: '¿Qué número tiene un 9 en las decenas?', choices: ['129', '192', '109'], answer: '192',
        },
        {
          prompt: '¿Qué número tiene 3 unidades?', choices: ['130', '113', '131'], answer: '113',
        },
        {
          prompt: '¿Qué número tiene 2 decenas más que el 132?', choices: ['134', '152', '332'], answer: '152',
        },
        {
          prompt: '¿Qué número tiene 4 unidades más que el 175?', choices: ['179', '215', '575'], answer: '179',
        },
        {
          prompt: 'De 140 a 149, ¿qué número tiene 6 unidades?', choices: ['164', '106', '146'], answer: '146',
        },
      ],
    },
  ],
};

export default hasta199;
