import { blocks } from '../scenes';

// Mates, tema 2: el cien, la centena. 1 C = 10 D = 100 U, y cuánto falta para una centena.
const missing = tens => ({
  prompt: `Hay ${tens} decenas. ¿Cuántas decenas faltan para tener 1 centena?`,
  scene: blocks(tens, 0),
  choices: [String(10 - tens), String(10 - tens + 1), '10'],
  answer: String(10 - tens),
});

const centena = {
  slug: 'centena',
  title: 'El cien. La centena',
  heading: '¿Cuántas decenas faltan?',
  type: 'quiz',
  instructions: '1 centena son 10 decenas, o 100 unidades: 1 C = 10 D = 100 U.',
  questions: [missing(9), missing(7), missing(3), missing(2), missing(5)],
  more: [
    {
      title: 'Completa para formar centenas',
      type: 'numbers',
      instructions: 'Escribe lo que falta para llegar a 100. Pulsa ✓ después de cada número.',
      questions: [
        { prompt: '4 D y ? D son 1 C.   40 + ? = 100', answer: [6, 60] },
        { prompt: '3 D y ? D son 1 C.   30 + ? = 100', answer: [7, 70] },
        { prompt: '8 D y ? D son 1 C.   80 + ? = 100', answer: [2, 20] },
        { prompt: '7 D y ? D son 1 C.   70 + ? = 100', answer: [3, 30] },
        { prompt: '70 U y ? U son 1 C.   70 + ? = 100', answer: [30, 30] },
        { prompt: '50 U y ? U son 1 C.   50 + ? = 100', answer: [50, 50] },
        { prompt: '20 U y ? U son 1 C.   20 + ? = 100', answer: [80, 80] },
        { prompt: '40 U y ? U son 1 C.   40 + ? = 100', answer: [60, 60] },
      ],
    },
    {
      title: 'Cazar dieces y cienes',
      type: 'numbers',
      instructions: 'Si dos números suman 10, sus decenas suman 100.',
      questions: [
        { prompt: '1 + 9 = ?   10 + 90 = ?', answer: [10, 100] },
        { prompt: '6 + 4 = ?   60 + 40 = ?', answer: [10, 100] },
        { prompt: '3 + ? = 10   30 + ? = 100', answer: [7, 70] },
        { prompt: '2 + ? = 10   20 + ? = 100', answer: [8, 80] },
      ],
    },
  ],
};

export default centena;
