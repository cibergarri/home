// Mates, tema 1: comparar números con <, > e =, y ordenarlos de menor a mayor.
const SIGNS = ['< es menor que', '> es mayor que', '= es igual a'];

const compare = (a, b) => {
  let answer = SIGNS[2];
  if (a < b) [answer] = SIGNS;
  else if (a > b) answer = SIGNS[1];
  return {
    prompt: `${a}  …  ${b}`, say: false, choices: SIGNS, answer,
  };
};

const comparar = {
  slug: 'comparar',
  title: 'Comparar y ordenar',
  heading: 'Compara',
  type: 'quiz',
  instructions: 'Elige el signo que va entre los dos números.',
  questions: [compare(23, 34), compare(45, 34), compare(41, 29), compare(25, 52), compare(64, 64), compare(15, 51), compare(90, 89)],
  more: [
    {
      title: 'Ordena de menor a mayor',
      type: 'build',
      instructions: 'Toca los números del más pequeño al más grande.',
      puzzles: [
        { prompt: 'Tres amigos saltan hasta el 32, el 25 y el 38.', answer: ['25', '32', '38'], separator: ' < ' },
        { prompt: 'Ordena estos números.', answer: ['29', '34', '41', '45'], separator: ' < ' },
        { prompt: 'Ordena estos números.', answer: ['15', '51', '64', '89', '90'], separator: ' < ' },
      ],
    },
  ],
};

export default comparar;
