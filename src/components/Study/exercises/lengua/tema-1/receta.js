// Lengua, tema 1: la receta para ser feliz. Título, ingredientes y pasos; palabras que ayudan a
// estar bien.
const SIRVE = { id: 'sirve', title: 'Sirve para ser feliz', colour: '#a6db8a' };
const NO_SIRVE = { id: 'no', title: 'No sirve', colour: '#f5a8a8' };

const receta = {
  slug: 'receta',
  title: 'La receta para ser feliz',
  heading: 'Lee la receta',
  type: 'quiz',
  instructions: 'Lee en tu libro la «Receta para ser feliz»: 4 cucharadas de abrazos, un paquete de bailes alocados, unas gotas de risa y un tazón de fresas.',
  questions: [
    { prompt: 'Si sigues los pasos, ¿preparas un plato de comida?', choices: ['Sí', 'No, es una receta para ser feliz'], answer: 'No, es una receta para ser feliz' },
    { prompt: '¿Cuántos pasos tiene la receta?', choices: ['Dos', 'Tres', 'Cuatro'], answer: 'Tres' },
    { prompt: '¿Cómo sabes cuántos pasos tiene?', choices: ['Porque están numerados', 'Porque tiene un título'], answer: 'Porque están numerados' },
    { prompt: '¿Qué parte de la receta dice lo que necesitas?', choices: ['La lista de ingredientes', 'El título', 'Los pasos'], answer: 'La lista de ingredientes' },
    { prompt: '¿Con qué se decora el plato al final?', choices: ['Con trocitos de fresas', 'Con abrazos', 'Con chocolate'], answer: 'Con trocitos de fresas' },
  ],
  more: [
    {
      title: '¿Sirve para la receta?',
      type: 'colour',
      instructions: 'Colorea las palabras que sirven para hacer la receta de ser feliz, y las que no.',
      crayons: [SIRVE, NO_SIRVE],
      words: [
        { id: 'comprension', word: 'comprensión', crayon: 'sirve' },
        { id: 'enfado', word: 'enfado', crayon: 'no' },
        { id: 'tranquilidad', word: 'tranquilidad', crayon: 'sirve' },
        { id: 'disgusto', word: 'disgusto', crayon: 'no' },
        { id: 'calma', word: 'calma', crayon: 'sirve' },
        { id: 'sonrisas', word: 'sonrisas', crayon: 'sirve' },
        { id: 'palabras-amables', word: 'palabras amables', crayon: 'sirve' },
      ],
    },
    {
      title: 'Los pasos en orden',
      type: 'build',
      instructions: 'Ordena los pasos de la receta.',
      puzzles: [
        {
          prompt: '¿Cómo se prepara?',
          hint: 'Primero, luego y para terminar.',
          answer: ['Primero, calienta los abrazos.', 'Luego, añade los bailes y la risa.', 'Para terminar, decora con fresas.'],
        },
      ],
    },
  ],
};

export default receta;
