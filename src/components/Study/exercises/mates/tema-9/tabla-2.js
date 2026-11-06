import { numberLine } from '../scenes';

// Mates, tema 9: la tabla del 2, saltando de 2 en 2 en la recta, y el cálculo mental de sumar
// buscando dobles: 6 + 7 = 6 + 6 + 1 = 13.
const row = n => ({ prompt: `${n} × 2 = ?`, scene: numberLine(0, 20, 0), answer: n * 2 });

const turn = count => ({ prompt: `${Array(count).fill(2).join(' + ')} = ? × 2 = ?`, answer: [count, count * 2] });

const tabla2 = {
  slug: 'tabla-2',
  title: 'La tabla del 2',
  heading: 'Salta de 2 en 2',
  type: 'numbers',
  write: true,
  instructions: 'Mica salta en la recta de 2 en 2: 3 saltos son 3 veces 2, 3 × 2 = 2 + 2 + 2 = 6.',
  questions: [row(1), row(2), row(3), row(5), row(4), row(6), row(8), row(7), row(9), row(10)],
  more: [
    {
      title: 'Transforma en multiplicación',
      type: 'numbers',
      write: true,
      instructions: 'Cuenta cuántos doses hay. Pulsa ✓ después de cada número.',
      questions: [turn(4), turn(10), turn(11), turn(16)],
    },
    {
      title: 'Más allá del 10',
      type: 'numbers',
      write: true,
      instructions: 'Escribe en forma de multiplicación y calcula.',
      questions: [
        { story: '12 veces 2', prompt: '12 × 2 = ?', answer: 24 },
        { story: '13 veces 2', prompt: '13 × 2 = ?', answer: 26 },
        { story: '14 veces 2', prompt: '14 × 2 = ?', answer: 28 },
        { story: '15 veces 2', prompt: '15 × 2 = ?', answer: 30 },
        { story: 'Hay 7 manzanas. 🍎 Multiplica por 2 para calcular el doble.', prompt: '7 × 2 = ?', answer: 14 },
        { prompt: '20, 22, ?, ?, ?, ?, ?, ?, ?, ?, 40', answer: [24, 26, 28, 30, 32, 34, 36, 38] },
      ],
    },
    {
      title: 'Sumar buscando dobles',
      type: 'numbers',
      write: true,
      instructions: 'Teo suma el doble y después lo que falta: 6 + 7 = 6 + 6 + 1 = 12 + 1 = 13.',
      questions: [
        { prompt: '4 + 4 = ?', answer: 8 },
        { prompt: '8 + 8 = ?', answer: 16 },
        { prompt: '15 + 15 = ?', answer: 30 },
        { prompt: '25 + 25 = ?', answer: 50 },
        { prompt: '7 + 8 = 7 + 7 + 1 = ?', answer: 15 },
        { prompt: '7 + 9 = 7 + 7 + 2 = ?', answer: 16 },
        { prompt: '12 + 13 = 12 + 12 + 1 = ?', answer: 25 },
        { prompt: '120 + 121 = 120 + 120 + 1 = ?', answer: 241 },
        { prompt: '250 + 252 = 250 + 250 + 2 = ?', answer: 502 },
        {
          story: 'En una vitrina hay 9 plumas para escribir. En otra hay el doble. El encargado trae 2 plumas más. ¿Cuántas plumas hay en total?',
          prompt: '9 + 18 + 2 = ?',
          answer: 29,
        },
      ],
    },
  ],
};

export default tabla2;
