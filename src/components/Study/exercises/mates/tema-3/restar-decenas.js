// Mates, tema 3: cálculo mental, restar decenas completas. Se descompone el minuendo en decenas y
// unidades y se quitan las decenas: 66 - 30 = 60 + 6 - 30 = 36.
const tens = (a, b) => {
  const decenas = Math.floor(a / 10) * 10;
  return { prompt: `${a} - ${b} = ${decenas} + ${a % 10} - ${b} = ?`, answer: a - b };
};

// Una resta de cabeza, y si está bien o mal.
const check = (a, b, said) => ({
  prompt: `${a} - ${b} = ${said}`,
  say: `${a} menos ${b} igual a ${said}`,
  choices: ['Está bien', 'Está mal'],
  answer: a - b === said ? 'Está bien' : 'Está mal',
});

const restarDecenas = {
  slug: 'restar-decenas',
  title: 'Restar decenas de cabeza',
  heading: 'Quita las decenas',
  type: 'numbers',
  write: true,
  instructions: 'Descompón el minuendo en decenas y unidades. Quita las decenas y deja las unidades igual.',
  questions: [tens(66, 30), tens(49, 30), tens(52, 20), tens(78, 40), tens(85, 50)],
  more: [
    {
      title: 'De cabeza',
      type: 'numbers',
      write: true,
      instructions: 'Calcula mentalmente.',
      questions: [
        { prompt: '86 - 30 = ?', answer: 56 },
        { prompt: '41 - 20 = ?', answer: 21 },
        { prompt: '32 - 10 = ?', answer: 22 },
        { prompt: '53 - 40 = ?', answer: 13 },
        { prompt: '76 - 20 = ?', answer: 56 },
        { prompt: '94 - 60 = ?', answer: 34 },
        {
          story: 'En un vivero hay 48 potos. Esta mañana han vendido 30. ¿Cuántos potos quedan?',
          prompt: 'Quedan ? potos',
          answer: 18,
        },
      ],
    },
    {
      title: '¿Está bien o está mal?',
      type: 'quiz',
      instructions: 'Calcula mentalmente y comprueba cada resta.',
      questions: [check(43, 10, 23), check(67, 20, 47), check(57, 50, 7), check(89, 40, 40), check(65, 50, 15), check(92, 30, 72)],
    },
    {
      title: 'La tecla rota',
      type: 'quiz',
      instructions: 'En la calculadora de Mica, la tecla 2 está rota.',
      questions: [
        {
          prompt: '¿Cómo puede calcular 39 - 20 sin usar la tecla 2?',
          choices: ['39 - 10 - 10', '39 + 10 + 10', '39 - 10'],
          answer: '39 - 10 - 10',
        },
        {
          prompt: '¿Cuánto es 39 - 20?', say: false, choices: ['19', '29', '9'], answer: '19',
        },
        {
          prompt: '¿Y cómo puede calcular 58 - 20?',
          choices: ['58 - 10', '58 - 10 - 10', '58 - 30'],
          answer: '58 - 10 - 10',
        },
      ],
    },
  ],
};

export default restarDecenas;
