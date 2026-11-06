import { blocks, numberLine } from '../scenes';

// Mates, tema 3: números hasta 999. Contar de 100 en 100, centenas, decenas y unidades, cómo se
// leen, la recta del 270 al 310 y los números que se forman con el 1, el 9 y el 4.
const point = (from, to, mark) => ({
  story: '¿Qué número marca el punto rojo?', prompt: '?', scene: numberLine(from, to, mark, true), answer: mark,
});

const hasta999 = {
  slug: 'hasta-999',
  title: 'Números hasta 999',
  heading: 'Cuenta de 100 en 100',
  type: 'numbers',
  write: true,
  instructions: 'En el jardín mágico hay muchas flores. Cuenta de 100 en 100 y escribe los números que faltan.',
  questions: [
    { prompt: '100, 200, 300, ?, ?, 600, ?, ?, 900', answer: [400, 500, 700, 800] },
    { prompt: '900, 800, ?, 600, ?, ?, 300', answer: [700, 500, 400] },
    { prompt: '150, 250, ?, 450, ?', answer: [350, 550] },
    { story: 'En el jardín mágico hay 189 flores. ¿Cuántas habría con una más? ¿Y con una menos?', prompt: 'Una más: ?   Una menos: ?', answer: [190, 188] },
  ],
  more: [
    {
      title: 'Centenas, decenas y unidades',
      type: 'numbers',
      write: true,
      instructions: 'Descompón cada número. Pulsa ✓ después de cada número.',
      questions: [
        { prompt: '736 = ? C + ? D + ? U', answer: [7, 3, 6] },
        { prompt: '527 = ? C + ? D + ? U', answer: [5, 2, 7] },
        { prompt: '912 = ? C + ? D + ? U', answer: [9, 1, 2] },
        { prompt: '598 = 500 + ? + ?', answer: [90, 8] },
        { prompt: '483 = 400 + ? + ?', answer: [80, 3] },
        { prompt: '604 = ? C + ? D + ? U', answer: [6, 0, 4] },
        { prompt: '189 = 100 + ? + ?', answer: [80, 9] },
        { story: '¿Qué número es?', prompt: '?', scene: blocks(4, 2, 3), answer: 342 },
        { story: '¿Qué número es?', prompt: '?', scene: blocks(0, 5, 6), answer: 605 },
      ],
    },
    {
      title: '¿Cómo se lee?',
      type: 'match',
      instructions: 'Toca un número y después cómo se lee.',
      columns: ['Número', 'Se lee'],
      pairs: [
        { id: '736', en: '736', es: 'setecientos treinta y seis' },
        { id: '527', en: '527', es: 'quinientos veintisiete' },
        { id: '912', en: '912', es: 'novecientos doce' },
        { id: '598', en: '598', es: 'quinientos noventa y ocho' },
        { id: '483', en: '483', es: 'cuatrocientos ochenta y tres' },
        { id: '604', en: '604', es: 'seiscientos cuatro' },
        { id: '900', en: '900', es: 'novecientos' },
        { id: '365', en: '365', es: 'trescientos sesenta y cinco' },
      ],
    },
    {
      title: 'En la recta',
      type: 'numbers',
      write: true,
      instructions: 'Las rayas largas son las decenas. Cuenta las rayas cortas desde la decena de antes.',
      questions: [point(270, 290, 273), point(270, 290, 289), point(290, 310, 295), point(290, 310, 307), point(270, 290, 281)],
    },
    {
      title: 'Con el 1, el 9 y el 4',
      type: 'quiz',
      instructions: 'Con las tarjetas 1, 9 y 4 se pueden formar seis números: 149, 194, 419, 491, 914 y 941.',
      questions: [
        { prompt: '¿Cuál es el número mayor?', choices: ['914', '941', '491'], answer: '941' },
        { prompt: '¿Cuál es el número menor?', choices: ['149', '194', '419'], answer: '149' },
        { prompt: '¿Qué número tiene 9 centenas, 1 decena y 4 unidades?', choices: ['941', '914', '194'], answer: '914' },
        { prompt: '¿Cuál de estos no se puede formar con el 1, el 9 y el 4?', choices: ['419', '491', '499'], answer: '499' },
        { prompt: '273 … 289', say: false, choices: ['< es menor que', '> es mayor que', '= es igual a'], answer: '< es menor que' },
        { prompt: '604 … 598', say: false, choices: ['< es menor que', '> es mayor que', '= es igual a'], answer: '> es mayor que' },
      ],
    },
  ],
};

export default hasta999;
