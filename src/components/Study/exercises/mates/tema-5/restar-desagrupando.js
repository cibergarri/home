// Mates, tema 5: restar desagrupando números de 2 cifras: si a las unidades de arriba no se les
// pueden quitar las de abajo, se cambia 1 decena por 10 unidades (las plantas de Teo y las
// regaderas).
const take = (a, b) => ({ op: '-', a, b });

const restarDesagrupando = {
  slug: 'restar-desagrupando',
  title: 'Restar desagrupando',
  heading: 'Prepara la resta',
  type: 'tower',
  instructions: 'Si a las unidades de arriba no les puedes quitar las de abajo, cambia 1 decena por 10 unidades. Después, resta.',
  questions: [
    { op: '-', a: 34, b: 18, story: 'Teo tiene que regar 34 plantas y ya ha regado 18. ¿Cuántas le faltan?' },
    take(35, 19), take(43, 25), take(26, 18), take(31, 7), take(54, 8),
  ],
  more: [
    {
      title: '¿Hay que prepararla?',
      type: 'quiz',
      instructions: 'Mira las unidades. Si la de arriba es más pequeña, hay que preparar la resta.',
      questions: [
        { prompt: '25 - 17', say: '25 menos 17', choices: ['Hay que prepararla', 'No hay que prepararla'], answer: 'Hay que prepararla' },
        { prompt: '67 - 12', say: '67 menos 12', choices: ['Hay que prepararla', 'No hay que prepararla'], answer: 'No hay que prepararla' },
        { prompt: '41 - 16', say: '41 menos 16', choices: ['Hay que prepararla', 'No hay que prepararla'], answer: 'Hay que prepararla' },
        { prompt: '89 - 54', say: '89 menos 54', choices: ['Hay que prepararla', 'No hay que prepararla'], answer: 'No hay que prepararla' },
        { prompt: '¿Qué resta da menos de 2 D?', say: '¿Qué resta da menos de 2 decenas?', choices: ['31 - 7', '54 - 8', '26 - 18'], answer: '26 - 18' },
        { prompt: '¿Qué número pondrías para que haya que preparar la resta 72 - ?', say: false, choices: ['72 - 50', '72 - 38', '72 - 31'], answer: '72 - 38' },
      ],
    },
    {
      title: 'Resta en torre',
      type: 'tower',
      instructions: 'Fíjate bien si tienes que preparar la resta antes de empezar.',
      questions: [take(25, 17), take(41, 16), take(73, 5), take(67, 12), take(94, 56), take(72, 38), take(53, 27)],
    },
    {
      title: 'Problemas y prueba',
      type: 'numbers',
      write: true,
      instructions: 'Resuelve. Después, haz la prueba: suma el resultado y lo que quitaste. Te tiene que salir el número de arriba.',
      questions: [
        { story: 'En una tienda había 54 regaderas. Hoy han vendido 17. ¿Cuántas regaderas quedan?', prompt: 'Quedan ? regaderas.', answer: 37 },
        { story: 'Haz la prueba de la resta 54 - 17 = 37.', prompt: '37 + 17 = ?', answer: 54 },
        { story: 'Teo tenía que regar 34 plantas y ha regado 18. ¿Cuántas le faltan?', prompt: 'Le faltan ? plantas.', answer: 16 },
        { story: 'Haz la prueba de la resta 34 - 18 = 16.', prompt: '16 + 18 = ?', answer: 34 },
        { story: 'Lena tenía 43 cromos y ha regalado 25. ¿Cuántos cromos le quedan?', prompt: 'Le quedan ? cromos.', answer: 18 },
      ],
    },
  ],
};

export default restarDesagrupando;
