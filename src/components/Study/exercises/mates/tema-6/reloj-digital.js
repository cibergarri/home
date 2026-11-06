import { clock, digital } from '../scenes';

// Mates, tema 6: el reloj digital. Se leen primero las horas y después los minutos: 11:15 son las
// once y cuarto, 11:30 las once y media y 11:45 las doce menos cuarto (el reloj nuevo de Teo).
const READINGS = ['en punto', 'y cuarto', 'y media', 'menos cuarto'];
const NAMES = ['doce', 'una', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce'];

const said = (hours, minutes) => {
  const next = minutes === 45 ? hours + 1 : hours;
  const name = NAMES[next % 12];
  return `${name === 'una' ? 'La' : 'Las'} ${name} ${READINGS[minutes / 15]}`;
};

// A digital clock and three ways to read it: its own and two others close by.
// The right one goes first, second or third, by the time, so it is not always in the same place.
const read = (hours, minutes, ...others) => {
  const choices = others.map(([h, m]) => said(h, m));
  choices.splice((hours + minutes / 15) % 3, 0, said(hours, minutes));
  return {
    prompt: '¿Qué hora marca el reloj digital?', scene: digital(hours, minutes), choices, answer: said(hours, minutes),
  };
};

const write = (hours, minutes) => ({ prompt: '? : ?', scene: clock(hours, minutes), answer: [hours, minutes] });

const relojDigital = {
  slug: 'reloj-digital',
  title: 'El reloj digital',
  heading: 'Lee el reloj digital',
  type: 'quiz',
  instructions: 'En el reloj digital, el número de la izquierda son las horas y el de la derecha, los minutos. 15 minutos es un cuarto, 30 es media y 45 es menos cuarto de la hora siguiente.',
  questions: [
    read(11, 15, [11, 30], [11, 45]),
    read(11, 30, [11, 15], [11, 0]),
    read(11, 45, [11, 15], [12, 15]),
    read(11, 0, [11, 30], [12, 0]),
    read(6, 15, [6, 30], [6, 45]),
    read(1, 45, [1, 15], [2, 15]),
    read(6, 30, [6, 15], [7, 30]),
    read(3, 0, [3, 30], [2, 0]),
  ],
  more: [
    {
      title: 'La misma hora',
      type: 'match',
      instructions: 'Une cada reloj digital con cómo se lee.',
      columns: ['Reloj digital', 'Se lee'],
      pairs: [
        { id: 'h1100', en: '11:00', es: 'Las once en punto' },
        { id: 'h1115', en: '11:15', es: 'Las once y cuarto' },
        { id: 'h1130', en: '11:30', es: 'Las once y media' },
        { id: 'h1145', en: '11:45', es: 'Las doce menos cuarto' },
        { id: 'h0615', en: '6:15', es: 'Las seis y cuarto' },
        { id: 'h0145', en: '1:45', es: 'Las dos menos cuarto' },
      ],
    },
    {
      title: 'Del reloj de agujas al digital',
      type: 'numbers',
      write: true,
      instructions: 'Mira las agujas y escribe la hora como en un reloj digital: primero las horas y después los minutos. Pulsa ✓ después de cada número.',
      questions: [write(6, 15), write(1, 45), write(6, 30), write(9, 15), write(4, 45), write(10, 30)],
    },
    {
      title: '¿Verdadero o falso?',
      type: 'quiz',
      instructions: 'Piensa en el reloj. Puedes comprobarlo moviendo las agujas.',
      questions: [
        { prompt: 'Un cuarto de hora son 15 minutos.', choices: ['Verdadero', 'Falso'], answer: 'Verdadero' },
        { prompt: 'Dos cuartos de hora son una hora.', choices: ['Verdadero', 'Falso'], answer: 'Falso' },
        { prompt: 'Una hora son dos medias horas.', choices: ['Verdadero', 'Falso'], answer: 'Verdadero' },
        { prompt: 'Una hora son cuatro cuartos de hora.', choices: ['Verdadero', 'Falso'], answer: 'Verdadero' },
        { prompt: 'Media hora son 30 minutos.', choices: ['Verdadero', 'Falso'], answer: 'Verdadero' },
      ],
    },
  ],
};

export default relojDigital;
