// Mates, tema 3: sumar números de 3 cifras, con bloques (cambiando 10 barras por 1 placa, o 10
// cubos por 1 barra) y en torre, llevándose.
const add = (a, b) => ({ op: '+', a, b });

const sumar = {
  slug: 'sumar',
  title: 'Sumar números de 3 cifras',
  heading: 'Suma con bloques',
  type: 'blocks',
  instructions: 'En el jardín han plantado 235 rosas y 172 lirios. Junta los bloques iguales. Si tienes 10 cubos, cámbialos por 1 barra; si tienes 10 barras, cámbialas por 1 placa.',
  questions: [add(235, 172), add(245, 9), add(307, 128), add(340, 79), add(365, 25), add(480, 41)],
  more: [
    {
      title: 'Suma en torre',
      type: 'tower',
      instructions: 'Coloca cada cifra en su columna. Empieza por las unidades. Si pasas de 9, te llevas 1 a la columna siguiente.',
      questions: [add(204, 38), add(597, 230), add(684, 252), add(510, 290), add(236, 145), add(432, 309)],
    },
    {
      title: '¿Qué suma es mayor?',
      type: 'quiz',
      instructions: 'Fíjate primero en las centenas.',
      questions: [
        {
          prompt: '¿Qué suma tendrá un resultado mayor?',
          choices: ['236 + 145', '432 + 309'],
          answer: '432 + 309',
        },
        {
          prompt: '¿Por qué lo sabes?',
          choices: ['Porque 4 centenas y 3 centenas son más que 2 centenas y 1 centena', 'Porque 145 es mayor que 309'],
          answer: 'Porque 4 centenas y 3 centenas son más que 2 centenas y 1 centena',
        },
        {
          prompt: '¿Cuánto es 236 + 145?', say: false, choices: ['381', '371', '391'], answer: '381',
        },
        {
          prompt: '¿Cuánto es 432 + 309?', say: false, choices: ['731', '741', '742'], answer: '741',
        },
      ],
    },
    {
      title: 'Problemas',
      type: 'numbers',
      write: true,
      instructions: 'Lee el problema, calcula y escribe el resultado.',
      questions: [
        {
          story: 'En una floristería han vendido este mes 225 flores de pascua. Son 82 menos que el año pasado. ¿Cuántas se vendieron el año pasado?',
          prompt: '? flores de pascua',
          answer: 307,
        },
        {
          story: 'En el jardín hay 235 rosas y 172 lirios. ¿Cuántas flores hay en total?',
          prompt: '? flores',
          answer: 407,
        },
        {
          story: 'Lena ha regado 148 plantas por la mañana y 136 por la tarde. ¿Cuántas plantas ha regado?',
          prompt: '? plantas',
          answer: 284,
        },
      ],
    },
  ],
};

export default sumar;
