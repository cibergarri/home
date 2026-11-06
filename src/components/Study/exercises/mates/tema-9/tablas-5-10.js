import { numberLine } from '../scenes';

// Mates, tema 9: las tablas del 5 y del 10, saltando en la recta de 5 en 5 y de 10 en 10.
const five = n => ({ prompt: `${n} × 5 = ?`, scene: numberLine(0, 50, 0), answer: n * 5 });
const ten = n => ({ prompt: `${n} × 10 = ?`, answer: n * 10 });

const tablas = {
  slug: 'tablas-5-10',
  title: 'Las tablas del 5 y del 10',
  heading: 'La tabla del 5',
  type: 'numbers',
  write: true,
  instructions: 'Lena salta de 5 en 5: 3 saltos son 3 × 5 = 5 + 5 + 5 = 15.',
  questions: [five(1), five(2), five(3), five(4), five(5), five(6), five(7), five(8), five(9), five(10)],
  more: [
    {
      title: 'La tabla del 10',
      type: 'numbers',
      write: true,
      instructions: 'Salta de 10 en 10: 10 saltos te llevan del 0 al 100.',
      questions: [ten(3), ten(4), ten(5), ten(6), ten(7), ten(8), ten(9), ten(10)],
    },
    {
      title: 'Transforma en multiplicación',
      type: 'numbers',
      write: true,
      instructions: 'Cuenta cuántas veces se repite el número. Pulsa ✓ después de cada número.',
      questions: [
        { prompt: '10 + 10 + 10 + 10 + 10 + 10 + 10 = ? × 10 = ?', answer: [7, 70] },
        { prompt: '10 + 10 + 10 + 10 + 10 + 10 + 10 + 10 + 10 = ? × 10 = ?', answer: [9, 90] },
        { prompt: '5 + 5 + 5 + 5 + 5 + 5 = ? × 5 = ?', answer: [6, 30] },
        { story: '12 veces 5', prompt: '12 × 5 = ?', answer: 60 },
        { story: '13 veces 10', prompt: '13 × 10 = ?', answer: 130 },
      ],
    },
    {
      title: 'Completa las series',
      type: 'numbers',
      write: true,
      instructions: 'Cuenta de 2 en 2, de 5 en 5 y de 10 en 10.',
      questions: [
        { prompt: '0, 2, 4, ?, ?, ?, 12', answer: [6, 8, 10] },
        { prompt: '0, 5, 10, ?, ?, ?, 30', answer: [15, 20, 25] },
        { prompt: '0, 10, 20, ?, ?, ?, 60', answer: [30, 40, 50] },
        { prompt: '50, 55, 60, ?, ?, 75', answer: [65, 70] },
      ],
    },
  ],
};

export default tablas;
