import { blocks } from '../scenes';

// Mates, tema 8: números pares e impares. Los pares terminan en 0, 2, 4, 6, 8 y se pueden repartir
// en parejas; los impares terminan en 1, 3, 5, 7, 9 y siempre sobra uno.
const pairs = n => ({
  story: `Hay ${n} bloques. Haz parejas.`,
  prompt: 'Salen ? parejas y sobran ?',
  scene: blocks(0, n),
  answer: [Math.floor(n / 2), n % 2],
});

const NUMBERS = [2, 19, 150, 123, 69, 48, 321, 554, 13, 9, 42, 17, 24, 11, 36, 27];

const paresImpares = {
  slug: 'pares-impares',
  title: 'Números pares e impares',
  heading: '¿Puedes hacer parejas?',
  type: 'numbers',
  write: true,
  instructions: 'Junta los bloques de dos en dos. Si no sobra ninguno, el número es par. Si sobra uno, es impar. Pulsa ✓ después de cada número.',
  questions: [pairs(6), pairs(7), pairs(8), pairs(5), pairs(9), pairs(4)],
  more: [
    {
      title: 'Pares e impares',
      type: 'sort',
      instructions: 'Fíjate en la última cifra. Los pares terminan en 0, 2, 4, 6, 8. Los impares, en 1, 3, 5, 7, 9.',
      columns: [{ id: 'par', title: 'Par' }, { id: 'impar', title: 'Impar' }],
      cards: NUMBERS.map(n => ({ id: `n${n}`, text: String(n), columns: [n % 2 ? 'impar' : 'par'] })),
    },
    {
      title: 'Sumar o restar 1',
      type: 'quiz',
      instructions: 'Después de un número par viene uno impar, y después de uno impar, uno par.',
      questions: [
        { prompt: '395 es impar. Si le sumo 1, el resultado es…', choices: ['par', 'impar'], answer: 'par' },
        { prompt: '198 es par. Si le sumo 1, el resultado es…', choices: ['par', 'impar'], answer: 'impar' },
        { prompt: '900 es par. Si le resto 1, el resultado es…', choices: ['par', 'impar'], answer: 'impar' },
        { prompt: '701 es impar. Si le resto 1, el resultado es…', choices: ['par', 'impar'], answer: 'par' },
        { prompt: '¿En qué terminan los números pares?', choices: ['0, 2, 4, 6, 8', '1, 3, 5, 7, 9'], answer: '0, 2, 4, 6, 8' },
        { prompt: 'Los niños se sientan por parejas y Arabela se queda sola. Contando a Arabela, ¿son un número par o impar?', choices: ['par', 'impar'], answer: 'impar' },
      ],
    },
    {
      title: '¿Qué número es?',
      type: 'numbers',
      write: true,
      instructions: 'Sigue las pistas y escribe el número.',
      questions: [
        {
          story: 'Las centenas son un número impar mayor que 7. Las unidades, el mayor número par de una cifra. Las decenas, el menor número impar de una cifra.',
          prompt: '? C + ? D + ? U = ?',
          answer: [9, 1, 8, 918],
        },
        {
          story: 'Las centenas son el menor número par mayor que 0. Las decenas, el mayor número impar de una cifra. Las unidades, un 0.',
          prompt: '? C + ? D + ? U = ?',
          answer: [2, 9, 0, 290],
        },
      ],
    },
    {
      title: 'Continúa la serie',
      type: 'numbers',
      write: true,
      instructions: 'Salta de 2 en 2. ¿Son todos pares o todos impares?',
      questions: [
        { prompt: '391, 393, 395, ?, ?, ?', answer: [397, 399, 401] },
        { prompt: '240, 242, 244, ?, ?, ?', answer: [246, 248, 250] },
        { prompt: '15, 17, 19, ?, ?, ?', answer: [21, 23, 25] },
      ],
    },
  ],
};

export default paresImpares;
