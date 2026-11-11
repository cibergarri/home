import { clock } from '../scenes';

// Mates, tema 4: el repaso del final del tema, «¿Qué he aprendido?».
const LESS = '< es menor que';
const MORE = '> es mayor que';

const repaso = {
  slug: 'repaso',
  title: 'Repaso',
  heading: '1. Los números que faltan',
  type: 'numbers',
  write: true,
  instructions: 'Escribe los números que faltan en las rectas, uno a uno.',
  questions: [
    { prompt: '580, 581, ?, 583, ?, ?, ?, ?, ?, 589', answer: [582, 584, 585, 586, 587, 588] },
    { prompt: '301, 302, ?, ?, ?, ?, 307', answer: [303, 304, 305, 306] },
  ],
  more: [
    {
      title: '2. Compara',
      type: 'quiz',
      instructions: 'Usa < o >.',
      questions: [
        { prompt: '473  …  437', say: false, choices: [LESS, MORE], answer: MORE },
        { prompt: '180  …  312', say: false, choices: [LESS, MORE], answer: LESS },
        { prompt: '217  …  221', say: false, choices: [LESS, MORE], answer: LESS },
      ],
    },
    {
      title: '3. Resta en torre',
      type: 'tower',
      instructions: 'Coloca en torre y resuelve. Después haz la prueba: sustraendo + diferencia = minuendo.',
      questions: [{ op: '-', a: 261, b: 151 }, { op: '-', a: 43, b: 25 }, { op: '-', a: 342, b: 117 }],
    },
    {
      title: '4. Calcula de cabeza',
      type: 'numbers',
      write: true,
      instructions: 'Calcula mentalmente.',
      questions: [
        { prompt: '15 + 9 = ?', answer: 24 },
        { prompt: '32 + 9 = ?', answer: 41 },
        { prompt: '26 - 9 = ?', answer: 17 },
        { prompt: '43 - 25 = ?', answer: 18 },
      ],
    },
    {
      title: '5. ¿Qué hora es?',
      type: 'quiz',
      instructions: 'Mira las dos agujas del reloj.',
      questions: [
        {
          prompt: '¿Qué hora marca este reloj?', scene: clock(4, 30), choices: ['Las cuatro y cuarto', 'Las cuatro y media', 'Las seis y media'], answer: 'Las cuatro y media',
        },
        {
          prompt: '¿Y este otro reloj?', scene: clock(11, 15), choices: ['Las once y cuarto', 'Las tres y cuarto', 'Las once menos cuarto'], answer: 'Las once y cuarto',
        },
        {
          prompt: '¿Qué hora es ahora?', scene: clock(7, 45), choices: ['Las siete menos cuarto', 'Las siete y cuarto', 'Las ocho menos cuarto'], answer: 'Las ocho menos cuarto',
        },
      ],
    },
    {
      title: '6. El día del «Vuelo libre»',
      type: 'numbers',
      write: true,
      instructions: 'Lee y calcula.',
      questions: [
        {
          story: 'Topi y sus amigos celebran el día del «Vuelo libre» el 28 de octubre. Si hoy es 19 de octubre, ¿cuántos días faltan?',
          data: [[28, 'de octubre es el «Vuelo libre»'], [19, 'de octubre es hoy']],
          prompt: 'Faltan ? días',
          answer: 9,
        },
      ],
    },
  ],
};

export default repaso;
