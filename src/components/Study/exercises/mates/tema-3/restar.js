// Mates, tema 3: restar números de 3 cifras sin llevar, tachando bloques y en torre, problemas y
// restas mal resueltas para corregir.
const take = (a, b) => ({ op: '-', a, b });

const restar = {
  slug: 'restar',
  title: 'Restar números de 3 cifras',
  heading: 'Tacha los bloques',
  type: 'blocks',
  instructions: 'Había 235 rosas y se han secado 123. Representa el minuendo, tacha lo que quitas y cuenta lo que queda.',
  questions: [take(235, 123), take(245, 41), take(357, 142), take(468, 235), take(579, 306)],
  more: [
    {
      title: 'Resta en torre',
      type: 'tower',
      instructions: 'Coloca el minuendo arriba y el sustraendo abajo, cada cifra en su columna. Resta las unidades, luego las decenas y después las centenas.',
      questions: [take(686, 62), take(895, 220), take(957, 503), take(219, 103), take(356, 142), take(748, 325)],
    },
    {
      title: 'Problemas',
      type: 'numbers',
      write: true,
      instructions: 'Lee el problema, calcula y escribe el resultado.',
      questions: [
        {
          story: 'En un huerto escolar han plantado 219 semillas y ya han germinado 103. ¿Cuántas semillas quedan por germinar?',
          prompt: 'Quedan ? semillas',
          answer: 116,
        },
        {
          story: 'En el tren Violeta caben 356 pasajeros y en el tren Rosa caben 142. ¿Cuántos pasajeros más caben en el tren Violeta?',
          prompt: 'Caben ? pasajeros más',
          answer: 214,
        },
        {
          story: 'Había 235 rosas en el jardín y se han secado 123. ¿Cuántas rosas quedan?',
          prompt: 'Quedan ? rosas',
          answer: 112,
        },
      ],
    },
    {
      title: 'Corrige las restas',
      type: 'quiz',
      instructions: 'Estas restas no están bien resueltas. Busca el resultado correcto.',
      questions: [
        {
          prompt: '875 - 102 no es 977. ¿Cuánto es?', choices: ['763', '977', '773'], answer: '773',
        },
        {
          prompt: '¿Qué error se cometió en 875 - 102 = 977?', choices: ['Se restaron mal las unidades', 'Se sumó en vez de restar'], answer: 'Se sumó en vez de restar',
        },
        {
          prompt: '846 - 606 no es 206. ¿Cuánto es?', choices: ['200', '240', '246'], answer: '240',
        },
        {
          prompt: 'En una resta, ¿qué número va arriba?', choices: ['El minuendo', 'El sustraendo'], answer: 'El minuendo',
        },
      ],
    },
  ],
};

export default restar;
