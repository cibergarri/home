// Mates, tema 2: restar números de 3 cifras, tachando bloques y en torre, y buscar errores.
const take = (a, b) => ({ op: '-', a, b });

const restar = {
  slug: 'restar',
  title: 'Restar números de 3 cifras',
  heading: 'Tacha los bloques',
  type: 'blocks',
  instructions: 'Tacha las centenas, decenas y unidades que quitas. Después escribe cuántas quedan.',
  questions: [take(138, 25), take(184, 63), take(154, 21), take(145, 22), take(134, 31)],
  more: [
    {
      title: 'Resta en torre',
      type: 'tower',
      instructions: 'Coloca el minuendo arriba y el sustraendo abajo. Resta las unidades, luego las decenas y después las centenas.',
      questions: [take(138, 25), take(179, 32), take(187, 56), take(154, 34), take(184, 53), take(198, 48)],
    },
    {
      title: 'Busca el error',
      type: 'quiz',
      instructions: 'Comprueba las restas con tus bloques o en torre.',
      questions: [
        {
          prompt: '¿Qué resta está mal resuelta?',
          say: false,
          choices: ['139 - 24 = 115', '165 - 45 = 121', '187 - 52 = 135'],
          answer: '165 - 45 = 121',
        },
        {
          prompt: 'Entonces, ¿cuánto es 165 - 45?',
          say: false,
          choices: ['120', '121', '110'],
          answer: '120',
        },
        {
          prompt: 'En una resta, ¿qué representa el sustraendo?',
          choices: ['Lo que quieres quitar', 'Lo que quieres añadir'],
          answer: 'Lo que quieres quitar',
        },
      ],
    },
    {
      title: 'Problemas',
      type: 'numbers',
      instructions: 'Lee el problema, calcula y escribe el resultado.',
      questions: [
        {
          story: 'Coco tiene 138 puntos. Nala tiene 25 puntos menos que Coco. ¿Cuántos puntos tiene Nala?',
          prompt: '? puntos',
          answer: 113,
        },
      ],
    },
  ],
};

export default restar;
