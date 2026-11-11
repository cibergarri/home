// Mates, tema 9: sumar y restar números de 3 cifras. Sumas de tres sumandos, el minuendo que falta,
// la prueba de la resta y problemas del museo.
const add = (a, b) => ({ op: '+', a, b });
const take = (a, b) => ({ op: '-', a, b });

const sumarRestar = {
  slug: 'sumar-restar',
  title: 'Sumar y restar',
  heading: 'Resta en torre',
  type: 'tower',
  instructions: 'Coloca el minuendo arriba. Si arriba hay menos, desagrupa: 1 decena son 10 unidades y 1 centena son 10 decenas.',
  questions: [take(762, 183), take(973, 614), take(750, 453), take(646, 452), take(718, 459)],
  more: [
    {
      title: 'Suma en torre',
      type: 'tower',
      instructions: 'Para sumar 325 + 146 + 65, suma primero 325 + 146, y al resultado súmale 65.',
      questions: [add(325, 146), add(471, 65), add(423, 475), add(149, 476)],
    },
    {
      title: '¿Qué número falta?',
      type: 'numbers',
      write: true,
      instructions: 'Para saber un sumando que falta, resta: total menos el otro sumando.',
      questions: [
        { prompt: '? + 87 = 999', answer: 912 },
        { prompt: '? + 54 = 825', answer: 771 },
        { prompt: '? + 29 = 423', answer: 394 },
        { prompt: '149 + ? = 625', answer: 476 },
        { story: 'En una resta, el sustraendo es 423 y la diferencia 475. El minuendo es la suma de los dos.', prompt: '423 + 475 = ?', answer: 898 },
      ],
    },
    {
      title: 'Haz la prueba',
      type: 'quiz',
      instructions: 'Para comprobar una resta, suma la diferencia y el sustraendo: tiene que salir el minuendo.',
      questions: [
        { prompt: '646 - 452 = 294. ¿Está bien?', say: false, choices: ['Está bien', 'Está mal: es 194'], answer: 'Está mal: es 194' },
        { prompt: '407 - 78 = 329. ¿Está bien?', say: false, choices: ['Está bien', 'Está mal: es 339'], answer: 'Está bien' },
        { prompt: '718 - 459 = 369. ¿Está bien?', say: false, choices: ['Está bien', 'Está mal: es 259'], answer: 'Está mal: es 259' },
        { prompt: '¿Qué suma comprueba que 407 - 78 = 329?', say: false, choices: ['329 + 78 = 407', '407 + 78 = 485', '329 + 407 = 736'], answer: '329 + 78 = 407' },
      ],
    },
    {
      title: 'Problemas del museo',
      type: 'numbers',
      write: true,
      instructions: 'Lee el problema, calcula y escribe el resultado.',
      questions: [
        {
          story: 'En un museo había 762 cuadros. Prestó 183 a otra ciudad. ¿Cuántos cuadros quedan en el museo?',
          data: [[762, 'cuadros había en el museo'], [183, 'cuadros prestados']],
          prompt: '? cuadros',
          answer: 579,
        },
        {
          story: 'Chema necesita 973 piezas para un mosaico. Ya ha usado 614. ¿Cuántas piezas le faltan?',
          data: [[973, 'piezas necesita Chema'], [614, 'piezas ya ha usado']],
          prompt: '? piezas',
          answer: 359,
        },
        {
          story: 'Ana tiene 45 €, Bea 29 € y Carmen 31 €. ¿Cuánto dinero tienen entre las tres?',
          prompt: '45 + 29 + 31 = ?',
          answer: 105,
        },
      ],
    },
    {
      title: 'Piensa',
      type: 'quiz',
      instructions: 'Usa los resultados de los problemas.',
      questions: [
        { prompt: 'Chema ha usado 614 de 973 piezas. ¿Ha hecho ya más de la mitad del mosaico?', choices: ['Sí', 'No'], answer: 'Sí' },
        { prompt: 'Ana, Bea y Carmen tienen 105 € entre las tres. ¿Tienen 100 €?', choices: ['Sí, y les sobran 5 €', 'No, les faltan 5 €'], answer: 'Sí, y les sobran 5 €' },
      ],
    },
  ],
};

export default sumarRestar;
