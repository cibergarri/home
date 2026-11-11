import { numberLine } from '../scenes';

// Mates, tema 4: representar números de 3 cifras en la recta y compararlos. En la recta, el número
// que está a la izquierda es el menor. Con tarjetas se comparan primero las centenas, luego las
// decenas y después las unidades.
const point = (from, to, mark) => ({
  story: '¿Qué número marca el punto rojo?', prompt: '?', scene: numberLine(from, to, mark, true), answer: mark,
});

const compare = (a, b) => ({ compare: [a, b] });

const recta = {
  slug: 'recta',
  title: 'Números en la recta',
  heading: '¿Qué número es?',
  type: 'numbers',
  write: true,
  instructions: 'Teo y Lena marcan en la recta los días que llevan de cole. Cuenta las rayas desde la decena.',
  questions: [
    point(110, 120, 117),
    point(110, 130, 124),
    point(100, 120, 102),
    point(270, 280, 276),
    point(320, 340, 336),
    point(440, 480, 463),
  ],
  more: [
    {
      title: 'Los números que faltan',
      type: 'numbers',
      write: true,
      instructions: 'Escribe los números que faltan en la recta, uno a uno.',
      questions: [
        { prompt: '270, 271, ?, 273, ?, ?, 276', answer: [272, 274, 275] },
        { prompt: '410, 420, ?, 440, ?, 460', answer: [430, 450] },
        { prompt: '330, 340, ?, ?, 370', answer: [350, 360] },
        { prompt: '3 C + 4 D + 7 U = ?', answer: 347 },
        { prompt: '300 + 30 + 6 = ?', answer: 336 },
      ],
    },
    {
      title: 'Compara',
      type: 'quiz',
      instructions: 'Mira primero las centenas. Si son iguales, mira las decenas, y después las unidades. < es menor que, > es mayor que, = es igual a.',
      questions: [
        compare(180, 312), compare(348, 348), compare(217, 221), compare(473, 437), compare(374, 307), compare(515, 511),
        compare(117, 113), compare(235, 242),
      ],
    },
    {
      title: 'En la recta, ¿a la izquierda o a la derecha?',
      type: 'quiz',
      instructions: 'En la recta, los números van de menor a mayor.',
      questions: [
        {
          prompt: 'Lena llegó al 113 y Mica al 117. ¿Quién llegó más lejos?', scene: numberLine(110, 120, 117), choices: ['Lena', 'Mica'], answer: 'Mica',
        },
        {
          prompt: 'En la recta, ¿dónde está el 113 respecto al 117?', choices: ['A la izquierda', 'A la derecha'], answer: 'A la izquierda',
        },
        {
          prompt: '¿Qué número se puede marcar en la recta del 440 al 480?', choices: ['489', '451', '430'], answer: '451',
        },
        {
          prompt: 'Celeste dice que 96 es mayor que 115 porque 9 es mayor que 1. ¿Tiene razón?',
          choices: ['Sí', 'No, 115 es mayor porque tiene centenas'],
          answer: 'No, 115 es mayor porque tiene centenas',
        },
      ],
    },
    {
      title: 'Ordena',
      type: 'build',
      instructions: 'Toca los números de menor a mayor.',
      puzzles: [
        { prompt: 'Ordena estos números de menor a mayor.', answer: ['176', '219', '303', '335'], separator: ' < ' },
        { prompt: 'Empieza por el más pequeño.', answer: ['125', '298', '367', '511'], separator: ' < ' },
        { prompt: 'Cuidado, tienen las mismas cifras.', answer: ['437', '473', '734', '743'], separator: ' < ' },
      ],
    },
  ],
};

export default recta;
