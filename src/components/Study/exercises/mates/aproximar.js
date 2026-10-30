import { numberLine } from './scenes';

// Mates, tema 1: aproximar números a la decena más cercana. Como en el libro, el 5 va a la decena
// de arriba (55 se aproxima a 60).
const nearest = n => Math.round(n / 10) * 10;

const round = (n) => {
  const down = Math.floor(n / 10) * 10;
  return {
    story: `¿A qué decena se aproxima el ${n}?`,
    prompt: `${n} → ?`,
    hint: `El ${n} está entre el ${down} y el ${down + 10}.`,
    scene: numberLine(down, down + 10, n),
    answer: nearest(n),
  };
};

const aproximar = {
  slug: 'aproximar',
  title: 'Aproximar a las decenas',
  heading: 'La decena más cercana',
  type: 'numbers',
  instructions: 'Mira en la recta dónde está el número y escribe la decena más cercana.',
  questions: [
    round(18),
    round(24),
    round(37),
    round(49),
    round(83),
    round(76),
    round(46),
    round(53),
    round(59),
    round(55),
  ],
  more: [
    {
      title: '¿Tendrán para todos?',
      type: 'quiz',
      instructions: 'Piensa si llega o no llega.',
      questions: [
        {
          prompt: 'En una carrera participan 33 personas. Han comprado 30 medallas. ¿Tendrán para todos?',
          choices: ['Sí', 'No'],
          answer: 'No',
        },
      ],
    },
  ],
};

export default aproximar;
