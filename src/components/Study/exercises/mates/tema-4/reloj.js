import { clock } from '../scenes';

// Mates, tema 4: leer la hora en el reloj de agujas. La aguja corta marca las horas y la larga los
// minutos: en punto, y cuarto, y media y menos cuarto. En una hora hay cuatro cuartos de hora.
const HOURS = ['una', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce'];

// How the time on a clock with hands is said: «las 8 y media», «la 1 y cuarto», «las 2 menos cuarto».
const said = (hours, minutes) => {
  const hour = minutes === 45 ? (hours % 12) + 1 : hours;
  const article = hour === 1 ? 'La' : 'Las';
  const word = HOURS[hour - 1];
  return {
    0: `${article} ${word} en punto`,
    15: `${article} ${word} y cuarto`,
    30: `${article} ${word} y media`,
    45: `${article} ${word} menos cuarto`,
  }[minutes];
};

// A question about a clock, its choices the right time and the times it could be mixed up with,
// in the order they come in the day.
const read = (prompt, hours, minutes, others) => ({
  prompt,
  scene: clock(hours, minutes),
  choices: [[hours, minutes], ...others].sort(([h1, m1], [h2, m2]) => h1 * 60 + m1 - (h2 * 60 + m2))
    .map(([h, m]) => said(h, m)),
  answer: said(hours, minutes),
});

const reloj = {
  slug: 'reloj',
  title: 'El reloj de agujas',
  heading: '¿Qué hora es?',
  type: 'quiz',
  instructions: 'Primero mira la aguja corta, la de las horas. Después la larga, la de los minutos: arriba es en punto, a la derecha y cuarto, abajo y media, y a la izquierda menos cuarto.',
  questions: [
    read('¿A qué hora empieza la clase de Teo?', 9, 0, [[3, 0], [9, 30]]),
    read('¿A qué hora llega Lena al recreo?', 11, 15, [[11, 45], [10, 15]]),
    read('¿A qué hora come Mica?', 2, 30, [[2, 0], [3, 30]]),
    read('¿A qué hora sale Topi a volar?', 5, 45, [[5, 15], [4, 45]]),
    read('¿A qué hora merienda Arabela?', 6, 0, [[12, 30], [6, 30]]),
    read('¿A qué hora se cepilla los dientes Teo?', 8, 30, [[8, 0], [9, 30]]),
    read('¿A qué hora empieza la película?', 4, 15, [[4, 45], [3, 15]]),
    read('¿A qué hora se acuesta Lena?', 9, 45, [[9, 15], [8, 45]]),
  ],
  more: [
    {
      title: '¿Dónde está la aguja larga?',
      type: 'quiz',
      instructions: 'El reloj se divide en cuatro partes iguales: cuatro cuartos de hora.',
      questions: [
        {
          prompt: 'En punto, la aguja larga señala el…', choices: ['12', '3', '6', '9'], answer: '12',
        },
        {
          prompt: 'Y cuarto, la aguja larga señala el…', choices: ['12', '3', '6', '9'], answer: '3',
        },
        {
          prompt: 'Y media, la aguja larga señala el…', choices: ['12', '3', '6', '9'], answer: '6',
        },
        {
          prompt: 'Menos cuarto, la aguja larga señala el…', choices: ['12', '3', '6', '9'], answer: '9',
        },
        {
          prompt: '¿Cuántos cuartos de hora hay en una hora?', choices: ['2', '4', '12'], answer: '4',
        },
        {
          prompt: '¿Qué aguja marca las horas?', choices: ['La corta', 'La larga'], answer: 'La corta',
        },
      ],
    },
    {
      title: '¿Quién madruga más?',
      type: 'quiz',
      instructions: 'Lucía se levanta a las 7 y media, Iker a las 8 y cuarto, y Sergio a las 8 menos cuarto.',
      questions: [
        {
          prompt: '¿A qué hora se levanta Lucía?', scene: clock(7, 30), choices: [said(6, 30), said(7, 0), said(7, 30)], answer: said(7, 30),
        },
        {
          prompt: '¿A qué hora se levanta Sergio?', scene: clock(7, 45), choices: [said(7, 15), said(7, 45), said(8, 45)], answer: said(7, 45),
        },
        {
          prompt: '¿Quién se levanta antes?', choices: ['Lucía', 'Iker', 'Sergio'], answer: 'Lucía',
        },
        {
          prompt: '¿Quién se levanta el último?', choices: ['Lucía', 'Iker', 'Sergio'], answer: 'Iker',
        },
        {
          prompt: 'Este reloj marca las 5 y 45 minutos. Teo dice «son las seis menos cuarto» y Lena «son las siete menos cuarto». ¿Quién tiene razón?',
          scene: clock(5, 45),
          choices: ['Teo', 'Lena'],
          answer: 'Teo',
        },
      ],
    },
  ],
};

export default reloj;
