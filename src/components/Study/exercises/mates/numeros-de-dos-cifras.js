import { blocks } from './scenes';

// Mates, tema 1: números de dos cifras, en bloques, en decenas y unidades y en letras.
const blockQuestion = (tens, ones) => ({
  story: '¿Qué número es?',
  prompt: '?',
  hint: 'Cada barra roja es una decena (10). Cada cubo azul es una unidad (1).',
  scene: blocks(tens, ones),
  answer: tens * 10 + ones,
});

const numerosDeDosCifras = {
  slug: 'numeros-de-dos-cifras',
  title: 'Números de dos cifras',
  heading: 'Cuenta los bloques',
  type: 'numbers',
  instructions: 'Cuenta las decenas y las unidades y escribe el número.',
  questions: [
    blockQuestion(2, 4),
    blockQuestion(3, 4),
    blockQuestion(1, 1),
    blockQuestion(1, 5),
    blockQuestion(5, 7),
    blockQuestion(4, 0),
  ],
  more: [
    {
      title: 'Decenas y unidades',
      type: 'match',
      instructions: 'Toca un número y después sus decenas y unidades.',
      columns: ['Número', 'D y U'],
      pairs: [
        { id: '34', en: '34', es: '3 D y 4 U' },
        { id: '97', en: '97', es: '9 D y 7 U' },
        { id: '57', en: '57', es: '5 D y 7 U' },
        { id: '24', en: '24', es: '2 D y 4 U' },
        { id: '48', en: '48', es: '4 D y 8 U' },
        { id: '38', en: '38', es: '3 D y 8 U' },
      ],
    },
    {
      title: 'Números en letras',
      type: 'match',
      instructions: 'Toca un número y después cómo se escribe.',
      columns: ['Número', 'En letras'],
      pairs: [
        { id: '34', en: '34', es: 'treinta y cuatro' },
        { id: '57', en: '57', es: 'cincuenta y siete' },
        { id: '97', en: '97', es: 'noventa y siete' },
        { id: '24', en: '24', es: 'veinticuatro' },
        { id: '47', en: '47', es: 'cuarenta y siete' },
        { id: '66', en: '66', es: 'sesenta y seis' },
        { id: '55', en: '55', es: 'cincuenta y cinco' },
      ],
    },
  ],
};

export default numerosDeDosCifras;
