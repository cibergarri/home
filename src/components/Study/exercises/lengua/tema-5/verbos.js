// Lengua, tema 5: pasado, presente y futuro. Los verbos dicen qué hizo alguien antes, qué hace
// ahora y qué hará después.
const PASADO = { id: 'pasado', title: 'Pasado (antes)', colour: '#f7c96f' };
const PRESENTE = { id: 'presente', title: 'Presente (ahora)', colour: '#a6db8a' };
const FUTURO = { id: 'futuro', title: 'Futuro (después)', colour: '#8ec5f2' };

const verbos = {
  slug: 'verbos',
  title: 'Pasado, presente y futuro',
  heading: '¿Cuándo pasa?',
  type: 'colour',
  instructions: 'Los verbos dicen acciones. En pasado: dijo. En presente: necesitamos. En futuro: llegaremos. Colorea cada verbo.',
  crayons: [PASADO, PRESENTE, FUTURO],
  words: [
    { id: 'dijo', word: 'dijo', crayon: 'pasado' },
    { id: 'necesitamos', word: 'necesitamos', crayon: 'presente' },
    { id: 'llegaremos', word: 'llegaremos', crayon: 'futuro' },
    { id: 'vimos', word: 'vimos', crayon: 'pasado' },
    { id: 'atravesaron', word: 'atravesaron', crayon: 'pasado' },
    { id: 'gusta', word: 'gusta', crayon: 'presente' },
    { id: 'creo', word: 'creo', crayon: 'presente' },
    { id: 'apuntaremos', word: 'apuntaremos', crayon: 'futuro' },
    { id: 'volaron', word: 'volaron', crayon: 'pasado' },
    { id: 'cantaré', word: 'cantaré', crayon: 'futuro' },
    { id: 'juega', word: 'juega', crayon: 'presente' },
    { id: 'iremos', word: 'iremos', crayon: 'futuro' },
  ],
  more: [
    {
      title: 'El verbo correcto',
      type: 'quiz',
      instructions: 'Fíjate en las palabras que dicen cuándo pasa: ayer, hoy, mañana…',
      questions: [
        { prompt: 'La semana pasada … mucho.', choices: ['llovió', 'lloverá'], answer: 'llovió' },
        { prompt: 'Hoy por fin … sol.', choices: ['hace', 'hacía'], answer: 'hace' },
        { prompt: 'Mañana … al tenis con Alba.', choices: ['jugaba', 'jugaré'], answer: 'jugaré' },
        { prompt: 'Hace tres días … a Roberto.', choices: ['vimos', 'vemos'], answer: 'vimos' },
        { prompt: 'Ahora Lena … en su escoba.', choices: ['vuela', 'volará'], answer: 'vuela' },
        { prompt: 'El mes que viene … a los abuelos.', choices: ['visitaremos', 'visitamos'], answer: 'visitaremos' },
        { prompt: 'Ayer Topi … muchas galletas.', choices: ['comerá', 'comió'], answer: 'comió' },
      ],
    },
    {
      title: 'Palabras que dicen cuándo',
      type: 'sort',
      instructions: 'Los verbos pueden ir con palabras que indican tiempo. Lleva cada una a su columna.',
      columns: [
        { id: 'pasado', title: 'Pasado' },
        { id: 'presente', title: 'Presente' },
        { id: 'futuro', title: 'Futuro' },
      ],
      cards: [
        { id: 'ayer', text: 'ayer', columns: ['pasado'] },
        { id: 'mes-pasado', text: 'el mes pasado', columns: ['pasado'] },
        { id: 'antes', text: 'antes', columns: ['pasado'] },
        { id: 'hoy', text: 'hoy', columns: ['presente'] },
        { id: 'ahora', text: 'ahora', columns: ['presente'] },
        { id: 'manana', text: 'mañana', columns: ['futuro'] },
        { id: 'despues', text: 'después', columns: ['futuro'] },
        { id: 'ano-que-viene', text: 'el año que viene', columns: ['futuro'] },
      ],
    },
    {
      title: 'La agenda de Luis',
      type: 'quiz',
      instructions: 'El lunes, Luis juega al baloncesto. El martes, va a la biblioteca. El miércoles, visita a sus abuelos. Imagina que hoy es martes.',
      questions: [
        { prompt: '¿Qué hizo ayer Luis?', choices: ['Jugó al baloncesto', 'Juega al baloncesto', 'Jugará al baloncesto'], answer: 'Jugó al baloncesto' },
        { prompt: '¿Qué hace hoy Luis?', choices: ['Fue a la biblioteca', 'Va a la biblioteca', 'Irá a la biblioteca'], answer: 'Va a la biblioteca' },
        { prompt: '¿Qué hará mañana Luis?', choices: ['Visitó a sus abuelos', 'Visita a sus abuelos', 'Visitará a sus abuelos'], answer: 'Visitará a sus abuelos' },
      ],
    },
  ],
};

export default verbos;
