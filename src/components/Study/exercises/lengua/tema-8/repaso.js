// Lengua, tema 8: repaso. Las lenguas de España, r fuerte y r suave, y palabras derivadas.
const FUERTE = { id: 'fuerte', title: 'r fuerte', colour: '#f5a8a8' };
const SUAVE = { id: 'suave', title: 'r suave', colour: '#8ec5f2' };

const repaso = {
  slug: 'repaso',
  title: 'Repaso',
  heading: 'Las lenguas de España',
  type: 'quiz',
  instructions: 'Repasa todo lo que has aprendido en este tema.',
  questions: [
    { prompt: '¿Cuál de estas lenguas es oficial en algún lugar de España?', choices: ['el gallego', 'el francés', 'el inglés'], answer: 'el gallego' },
    { prompt: '¿Cuál de estas lenguas NO es oficial en España?', choices: ['el alemán', 'el euskera', 'el catalán'], answer: 'el alemán' },
    { prompt: '¿Dónde se habla el valenciano?', choices: ['En la Comunidad Valenciana', 'En Galicia', 'En el País Vasco'], answer: 'En la Comunidad Valenciana' },
    { prompt: '¿Qué lengua se habla en toda España?', choices: ['El castellano', 'El gallego', 'El euskera'], answer: 'El castellano' },
  ],
  more: [
    {
      title: 'r fuerte o r suave',
      type: 'colour',
      instructions: 'Lee en voz alta y colorea según cómo suena la r.',
      crayons: [FUERTE, SUAVE],
      words: [
        { id: 'sonrisa', word: 'sonrisa', crayon: 'fuerte' },
        { id: 'tesoro', word: 'tesoro', crayon: 'suave' },
        { id: 'naranja', word: 'naranja', crayon: 'suave' },
        { id: 'arena', word: 'arena', crayon: 'suave' },
        { id: 'perro', word: 'perro', crayon: 'fuerte' },
        { id: 'raton', word: 'ratón', crayon: 'fuerte' },
        { id: 'enrique', word: 'Enrique', crayon: 'fuerte' },
        { id: 'loro', word: 'loro', crayon: 'suave' },
      ],
    },
    {
      title: 'Profesiones con -ista',
      type: 'letters',
      write: true,
      instructions: 'Flauta → flautista. Forma las profesiones terminadas en -ista.',
      words: [
        { clue: 'Conduce un taxi.', word: 'taxista', shown: 'taxi___' },
        { clue: 'Juega al tenis.', word: 'tenista', shown: 'tenis__' },
        { clue: 'Hace arte.', word: 'artista', shown: 'art____' },
        { clue: 'Toca el piano.', word: 'pianista', shown: 'pian____' },
        { clue: 'Toca la flauta.', word: 'flautista', shown: 'flaut____' },
      ],
    },
    {
      title: 'Palabras derivadas',
      type: 'quiz',
      instructions: '¿Qué palabra derivada viene de cada una?',
      questions: [
        { prompt: 'pan', choices: ['panadería', 'pantalón', 'pandilla'], answer: 'panadería' },
        { prompt: 'jardín', choices: ['jardinero', 'jarra', 'jarabe'], answer: 'jardinero' },
        { prompt: 'llave', choices: ['llavero', 'lluvia', 'llano'], answer: 'llavero' },
        { prompt: 'lavar', choices: ['lavadora', 'lava', 'lavanda'], answer: 'lavadora' },
        { prompt: 'flauta', choices: ['flautista', 'flan', 'flecha'], answer: 'flautista' },
      ],
    },
  ],
};

export default repaso;
