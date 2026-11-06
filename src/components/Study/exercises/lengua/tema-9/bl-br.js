// Lengua, tema 9: escribimos bl y br. Niebla, biblioteca, Braviana, libros; los meses del año.
const BL = { id: 'bl', title: 'bl', colour: '#f5a8a8' };
const BR = { id: 'br', title: 'br', colour: '#8ec5f2' };

const blBr = {
  slug: 'bl-br',
  title: 'bl, br',
  heading: '¿bl o br?',
  type: 'colour',
  instructions: 'Escribimos bl y br: niebla, biblioteca, Braviana, libros. Colorea de rojo si tiene bl y de azul si tiene br.',
  crayons: [BL, BR],
  words: [
    { id: 'niebla', word: 'niebla', crayon: 'bl' },
    { id: 'biblioteca', word: 'biblioteca', crayon: 'bl' },
    { id: 'braviana', word: 'Braviana', crayon: 'br' },
    { id: 'libros', word: 'libros', crayon: 'br' },
    { id: 'abras', word: 'abras', crayon: 'br' },
    { id: 'habla', word: 'habla', crayon: 'bl' },
    { id: 'breves', word: 'breves', crayon: 'br' },
    { id: 'tablon', word: 'tablón', crayon: 'bl' },
    { id: 'amable', word: 'amable', crayon: 'bl' },
    { id: 'cable', word: 'cable', crayon: 'bl' },
    { id: 'brillo', word: 'brillo', crayon: 'br' },
  ],
  more: [
    {
      title: 'Los meses del año',
      type: 'letters',
      write: true,
      instructions: 'Muchos meses del año llevan br. Escribe las letras que faltan.',
      words: [
        { clue: 'Va después de enero.', word: 'febrero', shown: 'fe__ero' },
        { clue: 'Va después de marzo.', word: 'abril', shown: 'a__il' },
        { clue: 'Va después de septiembre.', word: 'octubre', shown: 'octu__e' },
        { clue: 'Va después de octubre.', word: 'noviembre', shown: 'novie___e' },
        { clue: 'El último mes del año.', word: 'diciembre', shown: 'dicie___e' },
        { clue: 'Empieza el curso.', word: 'septiembre', shown: 'septie___e' },
      ],
    },
    {
      title: 'Blas y sus libros',
      type: 'quiz',
      instructions: 'Lee en tu libro el texto de Blas. ¿Qué tiene cada palabra, bl o br?',
      questions: [
        { prompt: 'Blas', choices: ['bl', 'br'], answer: 'bl' },
        { prompt: 'libros', choices: ['bl', 'br'], answer: 'br' },
        { prompt: 'terribles', choices: ['bl', 'br'], answer: 'bl' },
        { prompt: 'brumas', choices: ['bl', 'br'], answer: 'br' },
        { prompt: 'Abracadabra', choices: ['bl', 'br'], answer: 'br' },
        { prompt: 'abrazar', choices: ['bl', 'br'], answer: 'br' },
        { prompt: 'hablar', choices: ['bl', 'br'], answer: 'bl' },
      ],
    },
  ],
};

export default blBr;
