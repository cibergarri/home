import { numberLine } from '../scenes';

// Mates, tema 7: cálculo mental, restar saltando en la recta. Para 37 - 28 se salta del 28 a la
// decena siguiente, el 30 (+ 2), y del 30 al 37 (+ 7): 37 - 28 = 2 + 7 = 9.
const jump = (a, b) => {
  const next = Math.ceil(b / 10) * 10;
  return {
    prompt: `${a} - ${b} = ? + ? = ?`,
    scene: numberLine(Math.floor(b / 10) * 10, Math.floor(b / 10) * 10 + 20, b),
    answer: [next - b, a - next, a - b],
  };
};

const restarSaltando = {
  slug: 'restar-saltando',
  title: 'Restar saltando',
  heading: 'Salta en la recta',
  type: 'numbers',
  write: true,
  instructions: 'Salta del número pequeño a la decena siguiente, y de ahí al número grande. Suma los saltos. Pulsa ✓ después de cada número.',
  questions: [jump(37, 28), jump(44, 36), jump(86, 78), jump(132, 127), jump(56, 49), jump(95, 89), jump(126, 117), jump(84, 76)],
  more: [
    {
      title: 'De cabeza',
      type: 'numbers',
      write: true,
      instructions: 'Resuelve mentalmente: cuenta cuánto falta del número pequeño al grande.',
      questions: [
        { prompt: '82 - 75 = ?', answer: 7 },
        { prompt: '77 - 68 = ?', answer: 9 },
        { prompt: '254 - 246 = ?', answer: 8 },
        { prompt: '93 - 85 = ?', answer: 8 },
        { prompt: '47 - 38 = ?', answer: 9 },
        { prompt: '315 - 309 = ?', answer: 6 },
        { prompt: '133 - 128 = ?', answer: 5 },
        {
          story: 'En un colegio hay 46 alumnos en 2.º. 32 comen en el comedor y el resto, en casa. ¿Cuántos comen en casa?',
          prompt: '? alumnos',
          answer: 14,
        },
      ],
    },
  ],
};

export default restarSaltando;
