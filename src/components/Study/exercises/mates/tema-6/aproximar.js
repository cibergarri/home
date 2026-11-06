import { numberLine } from '../scenes';

// Mates, tema 6: aproximar números de 3 cifras a la centena más cercana, en la recta numérica (los
// 385 metros de Teo hasta el reino de los Pantanos son unos 400).
const between = (n) => {
  const low = Math.floor(n / 100) * 100;
  return {
    prompt: `${n} está entre ? y ?. Aproximado a la centena es ?`,
    scene: numberLine(low, low + 100, n),
    answer: [low, low + 100, n % 100 < 50 ? low : low + 100],
  };
};

const nearest = (n) => {
  const low = Math.floor(n / 100) * 100;
  const answer = String(n % 100 < 50 ? low : low + 100);
  return {
    prompt: `¿Qué centena está más cerca del ${n}?`,
    scene: numberLine(low, low + 100, n),
    choices: [String(low), String(low + 100)],
    answer,
  };
};

const aproximar = {
  slug: 'aproximar',
  title: 'Aproximar a la centena',
  heading: '¿Entre qué centenas está?',
  type: 'numbers',
  write: true,
  instructions: 'Busca el número en la recta. Mira entre qué dos centenas está y a cuál está más cerca. Pulsa ✓ después de cada número.',
  questions: [between(385), between(126), between(242), between(363), between(486), between(260)],
  more: [
    {
      title: 'La centena más cercana',
      type: 'quiz',
      instructions: 'Mira el punto rojo. ¿Está más cerca de la centena de la izquierda o de la derecha?',
      questions: [nearest(230), nearest(270), nearest(820), nearest(880), nearest(640), nearest(690)],
    },
    {
      title: 'Escribe en cifras',
      type: 'numbers',
      write: true,
      instructions: 'Escribe el número con cifras.',
      questions: [
        { story: 'trescientos cincuenta y nueve', prompt: '?', answer: 359 },
        { story: 'trescientos cuarenta y nueve', prompt: '?', answer: 349 },
        { story: 'trescientos sesenta y nueve', prompt: '?', answer: 369 },
        { story: 'Teo tiene que recorrer 385 metros. ¿Unos cuántos metros tiene que andar, si aproximas a la centena?', prompt: 'Unos ? metros', answer: 400 },
      ],
    },
    {
      title: '¿Cuál se aproxima a 300?',
      type: 'quiz',
      instructions: 'Piensa en la recta. Si las decenas son 5 o más, se aproxima a la centena siguiente.',
      questions: [
        { prompt: '¿Qué número, aproximado a la centena, es 300?', say: false, choices: ['359', '349', '369'], answer: '349' },
        { prompt: '¿Qué número, aproximado a la centena, es 500?', say: false, choices: ['438', '462', '551'], answer: '462' },
        { prompt: '¿Qué número, aproximado a la centena, es 100?', say: false, choices: ['126', '175', '208'], answer: '126' },
      ],
    },
  ],
};

export default aproximar;
