// Mates, tema 7: restar desagrupando números de 3 cifras. Si a las unidades no se les puede quitar,
// se cambia 1 D por 10 U; si a las decenas no, se cambia 1 C por 10 D.
const take = (a, b) => ({ op: '-', a, b });

const restar = {
  slug: 'restar',
  title: 'Restar desagrupando',
  heading: 'Resta en torre',
  type: 'tower',
  instructions: 'Empieza por las unidades. Si arriba hay menos, cambia 1 decena por 10 unidades, o 1 centena por 10 decenas.',
  questions: [take(310, 125), take(312, 146), take(815, 149), take(354, 75), take(245, 168), take(532, 278)],
  more: [
    {
      title: 'Problemas',
      type: 'numbers',
      write: true,
      instructions: 'Lee el problema, haz la resta y escribe el resultado.',
      questions: [
        {
          story: 'Teo tiene 310 bolitas y le da 125 a un amigo para su dibujo. ¿Cuántas bolitas le quedan?',
          data: [[310, 'bolitas tiene Teo'], [125, 'bolitas le da a un amigo']],
          prompt: '? bolitas',
          answer: 185,
        },
        {
          story: 'En un edificio de oficinas había 250 luces encendidas. De repente se apagaron 75. ¿Cuántas luces siguieron encendidas?',
          data: [[250, 'luces encendidas'], [75, 'luces se apagaron']],
          prompt: '? luces',
          answer: 175,
        },
        {
          story: 'En el concierto había 426 sillas. Se ocuparon 158. ¿Cuántas sillas quedaron vacías?',
          data: [[426, 'sillas había en el concierto'], [158, 'sillas se ocuparon']],
          prompt: '? sillas',
          answer: 268,
        },
      ],
    },
    {
      title: 'Busca el error',
      type: 'quiz',
      instructions: 'Comprueba cada resta: suma el resultado y el sustraendo, y tiene que salir el minuendo.',
      questions: [
        {
          prompt: '¿Qué resta está mal resuelta?',
          say: false,
          choices: ['310 - 125 = 185', '354 - 75 = 289', '245 - 168 = 77'],
          answer: '354 - 75 = 289',
        },
        {
          prompt: 'Entonces, ¿cuánto es 354 - 75?',
          say: false,
          choices: ['279', '289', '321'],
          answer: '279',
        },
        {
          prompt: '¿Cómo compruebas que 310 - 125 = 185 está bien?',
          say: false,
          choices: ['185 + 125 = 310', '310 + 125 = 435', '185 - 125 = 60'],
          answer: '185 + 125 = 310',
        },
        {
          prompt: 'En 312 - 146, a 2 unidades no le puedes quitar 6. ¿Qué haces?',
          choices: ['Cambio 1 decena por 10 unidades', 'Resto 2 - 6 = 4', 'Cambio 1 unidad por 10 decenas'],
          answer: 'Cambio 1 decena por 10 unidades',
        },
      ],
    },
  ],
};

export default restar;
