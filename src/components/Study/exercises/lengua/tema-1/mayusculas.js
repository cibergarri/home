// Lengua, tema 1: las mayúsculas y el punto. Mayúscula al empezar, después de un punto y en los
// nombres propios; punto al terminar.
const PROPIO = { id: 'propio', title: 'Nombre propio (mayúscula)', colour: '#f5a8c8' };
const COMUN = { id: 'comun', title: 'Nombre común', colour: '#8ec5f2' };

const mayusculas = {
  slug: 'mayusculas',
  title: 'Las mayúsculas y el punto',
  heading: 'Topi se ha hecho un lío',
  type: 'build',
  instructions: 'Ordena las palabras. ¡Fíjate en la mayúscula del principio y en el punto del final!',
  puzzles: [
    { prompt: '¿Qué quiere decir Topi?', answer: ['Los', 'trolls', 'son', 'verdes.'] },
    { prompt: '¿Y ahora?', answer: ['El', 'valle', 'está', 'muy', 'lejos.'] },
    { prompt: 'Las normas de Arabela:', answer: ['Cuidamos', 'y', 'recogemos', 'el', 'material.'] },
  ],
  more: [
    {
      title: '¿Está bien escrita?',
      type: 'quiz',
      instructions: 'Al empezar a escribir y después de un punto va mayúscula. Al terminar, un punto.',
      questions: [
        { prompt: '¿Cuál está bien escrita?', choices: ['Estos son mis hermanos Tala y Bolo.', 'estos son mis hermanos tala y bolo', 'Estos son mis hermanos tala y bolo.'], answer: 'Estos son mis hermanos Tala y Bolo.' },
        { prompt: '¿Y ahora, cuál está bien escrita?', choices: ['la familia de Susana vive en toledo.', 'La familia de Susana vive en Toledo.', 'La familia de susana vive en Toledo'], answer: 'La familia de Susana vive en Toledo.' },
        { prompt: '¿Cuál tiene bien las mayúsculas y el punto?', choices: ['El abuelo Eduardo lleva tortilla.', 'el abuelo eduardo lleva tortilla.', 'El abuelo eduardo lleva tortilla'], answer: 'El abuelo Eduardo lleva tortilla.' },
        { prompt: '¿Qué se pone al terminar de escribir?', choices: ['Un punto', 'Una mayúscula', 'Una coma'], answer: 'Un punto' },
      ],
    },
    {
      title: 'Nombres propios',
      type: 'colour',
      instructions: 'Los nombres propios nombran a una persona, un lugar, un animal o una cosa, y se escriben con mayúscula.',
      crayons: [PROPIO, COMUN],
      words: [
        { id: 'tala', word: 'Tala', crayon: 'propio' },
        { id: 'monteoscuro', word: 'Monteoscuro', crayon: 'propio' },
        { id: 'toledo', word: 'Toledo', crayon: 'propio' },
        { id: 'coco', word: 'Coco', crayon: 'propio' },
        { id: 'perrito', word: 'perrito', crayon: 'comun' },
        { id: 'ciudad', word: 'ciudad', crayon: 'comun' },
        { id: 'abuela', word: 'abuela', crayon: 'comun' },
        { id: 'arabela', word: 'Arabela', crayon: 'propio' },
        { id: 'rio', word: 'río', crayon: 'comun' },
      ],
    },
  ],
};

export default mayusculas;
