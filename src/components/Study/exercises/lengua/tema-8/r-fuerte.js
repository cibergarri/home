// Lengua, tema 8: r fuerte y r suave. La r fuerte es r al principio y después de l, n o s, y rr
// entre vocales; la r suave es r entre vocales.
const FUERTE = { id: 'fuerte', title: 'r fuerte', colour: '#f5a8a8' };
const SUAVE = { id: 'suave', title: 'r suave', colour: '#8ec5f2' };

const rFuerte = {
  slug: 'r-fuerte',
  title: 'r fuerte, r suave',
  heading: '¿Suena fuerte o suave?',
  type: 'colour',
  instructions: 'Lee cada palabra en voz alta. La r suena fuerte en reino, alrededor y corren. Suena suave en orilla.',
  crayons: [FUERTE, SUAVE],
  words: [
    { id: 'reino', word: 'reino', crayon: 'fuerte' },
    { id: 'orilla', word: 'orilla', crayon: 'suave' },
    { id: 'corren', word: 'corren', crayon: 'fuerte' },
    { id: 'rampa', word: 'rampa', crayon: 'fuerte' },
    { id: 'escaleras', word: 'escaleras', crayon: 'suave' },
    { id: 'sonrisa', word: 'sonrisa', crayon: 'fuerte' },
    { id: 'tesoro', word: 'tesoro', crayon: 'suave' },
    { id: 'naranja', word: 'naranja', crayon: 'suave' },
    { id: 'alrededor', word: 'alrededor', crayon: 'fuerte' },
    { id: 'pera', word: 'pera', crayon: 'suave' },
    { id: 'torre', word: 'torre', crayon: 'fuerte' },
    { id: 'arena', word: 'arena', crayon: 'suave' },
  ],
  more: [
    {
      title: '¿r o rr?',
      type: 'letters',
      write: true,
      instructions: 'Entre vocales, la r fuerte se escribe rr. Al principio de palabra y después de l, n o s, se escribe r. Escribe las letras que faltan.',
      words: [
        { clue: 'Lo que te dan en tu cumpleaños.', word: 'regalo', shown: '_egalo' },
        { clue: 'La pones cuando estás contenta.', word: 'sonrisa', shown: 'son_isa' },
        { clue: 'El primer mes del año.', word: 'enero', shown: 'ene_o' },
        { clue: 'Animal parecido al caballo, con orejas largas.', word: 'burro', shown: 'bu__o' },
        { clue: 'Un nombre de niño que empieza por En.', word: 'Enrique', shown: 'En_ique' },
        { clue: 'Guarda la comida fría.', word: 'nevera', shown: 'neve_a' },
        { clue: 'Un sonido muy fuerte.', word: 'ruido', shown: '_uido' },
        { clue: 'Por donde caminas junto a la calle.', word: 'acera', shown: 'ace_a' },
        { clue: 'Tierra mojada.', word: 'barro', shown: 'ba__o' },
        { clue: 'Se lee cada mañana para saber las noticias.', word: 'periódico', shown: 'pe_iódico' },
      ],
    },
    {
      title: 'Enriqueta, la periodista',
      type: 'quiz',
      instructions: 'Lee en tu libro el texto de Enriqueta. ¿Cómo suena la r en estas palabras?',
      questions: [
        { prompt: 'Enriqueta', choices: ['r fuerte', 'r suave'], answer: 'r fuerte' },
        { prompt: 'periodista', choices: ['r fuerte', 'r suave'], answer: 'r suave' },
        { prompt: 'carrera', choices: ['r fuerte y r suave', 'solo r suave'], answer: 'r fuerte y r suave' },
        { prompt: 'redactora', choices: ['r fuerte y r suave', 'solo r fuerte'], answer: 'r fuerte y r suave' },
        { prompt: 'revista', choices: ['r fuerte', 'r suave'], answer: 'r fuerte' },
        { prompt: 'Rumanía', choices: ['r fuerte', 'r suave'], answer: 'r fuerte' },
        { prompt: 'literatura', choices: ['r fuerte', 'r suave'], answer: 'r suave' },
      ],
    },
  ],
};

export default rFuerte;
