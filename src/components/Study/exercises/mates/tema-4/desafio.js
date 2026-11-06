import { table } from '../scenes';

// Mates, tema 4: el desafío de Malún, un día en el sistema solar. Cada pista da cuántas horas dura
// un día en otro planeta, a partir de la Tierra (24 horas): Neptuno 16, Marte 25, Urano 17,
// Júpiter 10 y Saturno 11.
const PLANETS = table(['Horas'], [['Tierra', '24'], ['Neptuno', '16'], ['Marte', '25'], ['Urano', '17'], ['Júpiter', '10'], ['Saturno', '11']]);

const desafio = {
  slug: 'desafio',
  title: 'El desafío de Malún: un día en el sistema solar',
  heading: 'Resuelve las pistas',
  type: 'numbers',
  write: true,
  instructions: 'En cada planeta, un día dura un número de horas diferente. En la Tierra, un día dura 24 horas. Resuelve las pistas en orden.',
  questions: [
    { story: 'Pista 1: los días en Neptuno duran 8 horas menos que en la Tierra.', prompt: 'Neptuno: 24 - 8 = ? horas', answer: 16 },
    { story: 'Pista 2: los días en Marte duran 9 horas más que en Neptuno.', prompt: 'Marte: 16 + 9 = ? horas', answer: 25 },
    { story: 'Pista 3: los días en Urano duran 8 horas menos que en Marte.', prompt: 'Urano: 25 - 8 = ? horas', answer: 17 },
    { story: 'Pista 4: los días en Júpiter duran 15 horas menos que en Marte.', prompt: 'Júpiter: 25 - 15 = ? horas', answer: 10 },
    { story: 'Pista 5: los días en Saturno duran 1 hora más que en Júpiter.', prompt: 'Saturno: 10 + 1 = ? horas', answer: 11 },
  ],
  more: [
    {
      title: '¿Dónde duran menos los días?',
      type: 'quiz',
      instructions: 'Mira la tabla con las horas que dura un día en cada planeta.',
      questions: [
        {
          prompt: '¿En qué planeta duran menos los días?',
          scene: PLANETS,
          choices: ['Marte', 'Júpiter', 'Neptuno'],
          answer: 'Júpiter',
        },
        {
          prompt: '¿En qué planeta duran más los días?',
          scene: PLANETS,
          choices: ['Tierra', 'Saturno', 'Marte'],
          answer: 'Marte',
        },
        {
          prompt: 'Un día es lo que tarda la Tierra en dar una vuelta sobre sí misma. Si girase más rápido, el día duraría…',
          choices: ['Más horas', 'Menos horas'],
          answer: 'Menos horas',
        },
        {
          prompt: 'Y si la Tierra girase más despacio, el día duraría…',
          choices: ['Más horas', 'Menos horas'],
          answer: 'Más horas',
        },
      ],
    },
  ],
};

export default desafio;
