import { numberLine } from './scenes';

// Mates, tema 1: el repaso del final del tema, "¿Qué he aprendido?".
const repaso = {
  slug: 'repaso',
  title: 'Repaso',
  heading: '1. Une',
  type: 'match',
  instructions: 'Toca un número y después cómo se descompone.',
  columns: ['Número', 'Decenas'],
  pairs: [
    { id: '48', en: '48', es: '10 + 10 + 10 + 10 + 8' },
    { id: '38', en: '38', es: '10 + 10 + 10 + 8' },
    { id: '27', en: '27', es: '10 + 10 + 7' },
    { id: '53', en: '53', es: '10 + 10 + 10 + 10 + 10 + 3' },
  ],
  more: [
    {
      title: '2 y 3. Compara y busca en la recta',
      type: 'quiz',
      instructions: 'Elige la respuesta correcta.',
      questions: [
        {
          prompt: '64  …  64', say: false, choices: ['< es menor que', '> es mayor que', '= es igual a'], answer: '= es igual a',
        },
        {
          prompt: '15  …  51', say: false, choices: ['< es menor que', '> es mayor que', '= es igual a'], answer: '< es menor que',
        },
        {
          prompt: '90  …  89', say: false, choices: ['< es menor que', '> es mayor que', '= es igual a'], answer: '> es mayor que',
        },
        {
          prompt: '¿Qué número es «cuarenta y siete»?', scene: numberLine(40, 70, 47, true), choices: ['74', '47', '57'], answer: '47',
        },
        {
          prompt: '¿Qué número es «cincuenta y cinco»?', scene: numberLine(40, 70, 55, true), choices: ['55', '50', '65'], answer: '55',
        },
        {
          prompt: '¿Qué número es «sesenta y seis»?', scene: numberLine(40, 70, 66, true), choices: ['60', '56', '66'], answer: '66',
        },
      ],
    },
    {
      title: '4 y 5. Calcula',
      type: 'numbers',
      instructions: 'Fíjate bien en el signo. Escribe el resultado y pulsa ✓.',
      questions: [
        { prompt: '45 + 23 = ?', answer: 68 },
        { prompt: '28 + 16 = ?', answer: 44 },
        { prompt: '59 - 37 = ?', answer: 22 },
        {
          story: 'Lena hace magia con 19 naranjas. En una nube desaparecen 14. ¿Cuántas naranjas quedan?',
          prompt: '? naranjas',
          answer: 5,
        },
      ],
    },
  ],
};

export default repaso;
