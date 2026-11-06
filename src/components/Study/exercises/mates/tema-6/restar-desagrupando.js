// Mates, tema 6: restar desagrupando números de 3 cifras: si a las decenas de arriba no se les
// pueden quitar las de abajo, se cambia 1 centena por 10 decenas (los litros de lluvia de las
// noticias de Lena y Topi).
const take = (a, b) => ({ op: '-', a, b });

const restarDesagrupando = {
  slug: 'restar-desagrupando',
  title: 'Restar desagrupando',
  heading: 'Los litros de lluvia',
  type: 'tower',
  instructions: 'Si a las decenas de arriba no les puedes quitar las de abajo, cambia 1 centena por 10 decenas. Si pasa con las unidades, cambia 1 decena por 10 unidades.',
  questions: [
    { op: '-', a: 245, b: 172, story: 'Ayer recogieron 172 litros de lluvia y hoy 245. ¿Cuántos litros más han recogido hoy?' },
    take(364, 128), take(438, 263), take(293, 67), take(227, 143),
  ],
  more: [
    {
      title: 'Prepara las restas',
      type: 'tower',
      instructions: 'Mira primero las unidades y después las decenas. Prepara la resta si hace falta.',
      questions: [take(747, 162), take(268, 197), take(579, 89), take(498, 259), take(672, 390), take(715, 634)],
    },
    {
      title: '¿Qué hay que cambiar?',
      type: 'quiz',
      instructions: 'Mira las cifras de arriba y las de abajo antes de restar.',
      questions: [
        { prompt: '245 - 172', say: '245 menos 172', choices: ['1 centena por 10 decenas', '1 decena por 10 unidades', 'Nada'], answer: '1 centena por 10 decenas' },
        { prompt: '364 - 128', say: '364 menos 128', choices: ['1 centena por 10 decenas', '1 decena por 10 unidades', 'Nada'], answer: '1 decena por 10 unidades' },
        { prompt: '587 - 254', say: '587 menos 254', choices: ['1 centena por 10 decenas', '1 decena por 10 unidades', 'Nada'], answer: 'Nada' },
        { prompt: '672 - 390', say: '672 menos 390', choices: ['1 centena por 10 decenas', '1 decena por 10 unidades', 'Nada'], answer: '1 centena por 10 decenas' },
      ],
    },
    {
      title: 'Haz la prueba',
      type: 'numbers',
      write: true,
      instructions: 'Para comprobar una resta, suma el resultado y el sustraendo. Te tiene que salir el minuendo.',
      questions: [
        { story: '245 - 172 = 73. Comprueba.', prompt: '73 + 172 = ?', answer: 245 },
        { story: '747 - 162 = 585. Comprueba.', prompt: '585 + 162 = ?', answer: 747 },
        { story: '498 - 259 = 239. Comprueba.', prompt: '239 + 259 = ?', answer: 498 },
        { story: 'En un huerto había 138 lechugas. Por la noche granizó y se perdieron 29. ¿Cuántas lechugas quedan?', prompt: 'Quedan ? lechugas.', answer: 109 },
      ],
    },
  ],
};

export default restarDesagrupando;
