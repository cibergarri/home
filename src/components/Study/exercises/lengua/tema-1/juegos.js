// Lengua, tema 1: ¡diviértete con Topi! Números escondidos en palabras y sílabas desordenadas.
const juegos = {
  slug: 'juegos',
  title: '¡Diviértete con Topi!',
  heading: 'Sílabas desordenadas',
  type: 'build',
  instructions: '¡Vaya lío! Ordena las sílabas y forma el nombre de cada animal.',
  puzzles: [
    { prompt: 'Un animal del desierto con una joroba:', answer: ['dro', 'me', 'da', 'rio'], separator: '' },
    { prompt: 'Un animal del desierto con dos jorobas:', answer: ['ca', 'me', 'llo'], separator: '' },
    { prompt: 'Un animal muy grande con trompa:', answer: ['e', 'le', 'fan', 'te'], separator: '' },
    { prompt: 'Un animal con caparazón:', answer: ['tor', 'tu', 'ga'], separator: '' },
    { prompt: 'Un animal que salta y croa:', answer: ['ra', 'na'], separator: '' },
  ],
  more: [
    {
      title: '¿Números y letras?',
      type: 'quiz',
      instructions: 'Cambia cada número por su nombre en letras y descubre la palabra.',
      questions: [
        { prompt: 'rino0nte', say: 'rino, cero, nte', choices: ['rinoceronte', 'rinonte', 'rinounonte'], answer: 'rinoceronte' },
        { prompt: 'bal2a', say: 'bal, dos, a', choices: ['baldosa', 'balena', 'baltresa'], answer: 'baldosa' },
        { prompt: 'desay1', say: 'desay, uno', choices: ['desayuno', 'desaydos', 'desayer'], answer: 'desayuno' },
        { prompt: 'a3vido', say: 'a, tres, vido', choices: ['atrevido', 'adosvido', 'avido'], answer: 'atrevido' },
      ],
    },
    {
      title: 'Forma oraciones',
      type: 'build',
      instructions: 'Ordena las palabras para formar oraciones. ¡Mayúscula al principio y punto al final!',
      puzzles: [
        { prompt: '¿Qué come la granjera?', answer: ['La', 'granjera', 'come', 'cerezas.'] },
        { prompt: '¿Qué compra el peluquero?', answer: ['El', 'peluquero', 'compra', 'flores.'] },
        { prompt: '¿Qué regala el profesor?', answer: ['El', 'profesor', 'regala', 'juguetes.'] },
      ],
    },
  ],
};

export default juegos;
