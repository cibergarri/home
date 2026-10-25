// Mates, tema 1: restar números de dos cifras, las partes de la resta y la relación entre la suma y
// la resta.
const minus = (a, b) => ({ prompt: `${a} - ${b} = ?`, answer: a - b });
const take = (a, b) => ({ op: '-', a, b });

const restar = {
  slug: 'restar',
  title: 'Restar',
  heading: 'Restar números de dos cifras',
  type: 'numbers',
  instructions: 'Quita primero las unidades y después las decenas. Escribe el resultado y pulsa ✓.',
  questions: [minus(34, 12), minus(45, 12), minus(56, 35), minus(64, 54), minus(78, 72), minus(49, 16), minus(55, 35), minus(37, 25), minus(57, 36), minus(71, 41), minus(89, 81), minus(59, 37)],
  more: [
    {
      title: 'Tacha los bloques',
      type: 'blocks',
      instructions: 'Tacha las decenas y las unidades que quitas. Después escribe cuántas quedan.',
      questions: [take(34, 12), take(45, 21), take(57, 23), take(49, 28), take(36, 13), take(58, 34), take(49, 32), take(45, 10), take(38, 27), take(68, 67)],
    },
    {
      title: 'Restar en torre',
      type: 'tower',
      instructions: 'Coloca la resta en torre: primero las unidades y después las decenas.',
      questions: [take(37, 25), take(57, 36), take(71, 41), take(89, 81), take(59, 37), take(88, 44), take(26, 13), take(46, 3), take(13, 3)],
    },
    {
      title: 'Las partes de la resta',
      type: 'quiz',
      instructions: 'En la resta 34 - 12 = 22, 34 son las páginas del libro, 12 las que ya ha leído Topi y 22 las que le quedan.',
      questions: [
        {
          prompt: 'En 34 - 12 = 22, ¿cuál es el minuendo?', say: false, choices: ['34', '12', '22'], answer: '34', hint: 'Es lo que tengo.',
        },
        {
          prompt: 'En 34 - 12 = 22, ¿cuál es el sustraendo?', say: false, choices: ['34', '12', '22'], answer: '12', hint: 'Es lo que quito.',
        },
        {
          prompt: 'En 34 - 12 = 22, ¿cuál es la diferencia?', say: false, choices: ['34', '12', '22'], answer: '22', hint: 'Es lo que queda.',
        },
        {
          prompt: 'En 26 + 16 = 42, ¿cómo se llaman 26 y 16?', say: false, choices: ['Sumandos', 'Suma o total', 'Diferencia'], answer: 'Sumandos',
        },
        {
          prompt: 'En 26 + 16 = 42, ¿cómo se llama el 42?', say: false, choices: ['Sumando', 'Suma o total', 'Sustraendo'], answer: 'Suma o total',
        },
      ],
    },
    {
      title: 'Relación entre suma y resta',
      type: 'numbers',
      instructions: 'Si 4 + 8 = 12, entonces 12 - 4 = 8 y 12 - 8 = 4. Completa el número que falta.',
      questions: [
        { prompt: '14 + ? = 20', answer: 6 },
        { prompt: '20 - 14 = ?', answer: 6 },
        { prompt: '12 + ? = 16', answer: 4 },
        { prompt: '16 - ? = 12', answer: 4 },
        { prompt: '40 + ? = 55', answer: 15 },
        { prompt: '55 - ? = 40', answer: 15 },
        { prompt: '33 + ? = 50', answer: 17 },
        { prompt: '50 - ? = 33', answer: 17 },
        { prompt: '28 + 10 = ?', answer: 38 },
        { prompt: '38 - 28 = ?', answer: 10 },
      ],
    },
  ],
};

export default restar;
