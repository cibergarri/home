import { columns } from '../scenes';

// Mates, tema 2: restar números de 3 cifras, tachando bloques y en torre, buscar errores, y ver si
// una resta está bien colocada en columnas (el cuaderno: «Rodea las restas que están mal
// colocadas»).
const take = (a, b) => ({ op: '-', a, b });

// A subtraction to check: written right, or with the smaller number on top (`swapped`), or with
// the bottom number in the wrong columns (`shift`).
const placed = (a, b, { swapped = false, shift = 0 } = {}) => ({
  prompt: `¿Está bien colocada la resta ${a} - ${b}?`,
  say: `¿Está bien colocada la resta ${a} menos ${b}?`,
  scene: swapped ? columns(b, '-', a) : columns(a, '-', b, shift),
  choices: ['Sí, está bien', 'No, está mal colocada'],
  answer: swapped || shift ? 'No, está mal colocada' : 'Sí, está bien',
});

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
      questions: [take(138, 25), take(179, 32), take(187, 56), take(154, 34), take(184, 53), take(198, 48), take(139, 14), take(128, 26), take(156, 13), take(116, 14)],
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
      title: '¿Está bien colocada?',
      type: 'quiz',
      keepOrder: true,
      instructions: 'Fíjate en las cifras: el número mayor va arriba, y las unidades debajo de las unidades, las decenas debajo de las decenas.',
      questions: [
        placed(114, 10),
        placed(114, 10, { swapped: true }),
        placed(127, 14, { swapped: true }),
        placed(127, 14),
        placed(138, 20, { swapped: true }),
        placed(138, 20),
        placed(119, 9),
        placed(119, 9, { swapped: true }),
        placed(156, 13, { shift: 1 }),
        placed(145, 2, { shift: 2 }),
        placed(176, 35),
        placed(169, 7, { shift: 1 }),
      ].map((question, i) => ({ ...question, prompt: `${i + 1}. ${question.prompt}` })),
    },
    {
      title: 'Problemas',
      type: 'numbers',
      write: true,
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
