// Lengua, tema 6: el cuento «La competición de Rueda-rocas». Teo y sus amigos visitan el pueblo de
// Mica, en el Reino de las Montañas.
const HAY = { id: 'hay', title: 'Hay en lo alto', colour: '#a6db8a' };
const NO_HAY = { id: 'no', title: 'No hay', colour: '#d9d4c7' };

const ruedaRocas = {
  slug: 'rueda-rocas',
  title: 'La competición de Rueda-rocas',
  heading: 'Comprendo el cuento',
  type: 'quiz',
  instructions: 'Lee primero el cuento en tu libro. Después, contesta.',
  questions: [
    { prompt: '¿Por qué corre Mica alrededor de la escuela?', choices: ['Entrena para el Rueda-rocas', 'Busca a Topi', 'Llega tarde a clase'], answer: 'Entrena para el Rueda-rocas' },
    { prompt: '¿Dónde se celebra el Rueda-rocas?', choices: ['En el Reino de las Montañas', 'En el Reino de los Pantanos', 'En la escuela'], answer: 'En el Reino de las Montañas' },
    { prompt: '¿En qué consiste la prueba?', choices: ['En empujar grandes rocas montaña abajo', 'En subir a un árbol', 'En nadar en el río'], answer: 'En empujar grandes rocas montaña abajo' },
    { prompt: 'Un troll llega el primero, pero aplasta a alguien con su roca. ¿Ha ganado?', choices: ['Sí', 'No'], answer: 'No' },
    { prompt: '¿Por qué va Teo a la fiesta de los trolls?', choices: ['Debe conocer el Reino de las Montañas para amarlo', 'Quiere ganar la carrera', 'Se lo manda Malún'], answer: 'Debe conocer el Reino de las Montañas para amarlo' },
    { prompt: '¿Cómo llegan al pueblo de Mica?', choices: ['Los lleva la brújula', 'En escoba', 'En barca'], answer: 'Los lleva la brújula' },
    { prompt: '¿Cómo se llaman los hermanos de Mica?', choices: ['Tala y Bolo', 'Lior y Lena', 'Pomu y Terom'], answer: 'Tala y Bolo' },
    { prompt: '¿Qué se pone Mica para protegerse?', choices: ['Casco, rodilleras y coderas', 'Un abrigo y una bufanda', 'Nada'], answer: 'Casco, rodilleras y coderas' },
    { prompt: '¿Qué tiempo hace durante la carrera?', choices: ['Llueve con fuerza y hay truenos', 'Hace mucho sol', 'Nieva'], answer: 'Llueve con fuerza y hay truenos' },
    { prompt: '¿Qué usa Mica como trineo?', choices: ['Un trozo de corteza de árbol', 'Su roca', 'Una escoba'], answer: 'Un trozo de corteza de árbol' },
    { prompt: '¿En qué lugar queda Mica?', choices: ['En segundo lugar', 'En primer lugar', 'En sexto lugar'], answer: 'En segundo lugar' },
  ],
  more: [
    {
      title: '¿Qué hay en lo alto de la montaña?',
      type: 'colour',
      instructions: 'Colorea lo que hay en lo alto de la montaña el día de la carrera.',
      crayons: [HAY, NO_HAY],
      words: [
        { id: 'castanas', word: 'puestos de castañas', crayon: 'hay' },
        { id: 'circo', word: 'un circo de trapecistas', crayon: 'no' },
        { id: 'banda', word: 'una banda de música', crayon: 'hay' },
        { id: 'tiendas', word: 'tiendas de campaña', crayon: 'no' },
        { id: 'manzanas', word: 'manzanas asadas', crayon: 'hay' },
        { id: 'rocas', word: 'rocas enormes y redondeadas', crayon: 'hay' },
        { id: 'piscina', word: 'una piscina', crayon: 'no' },
      ],
    },
    {
      title: '¿En qué orden sucede?',
      type: 'build',
      instructions: 'Ordena lo que pasa en el cuento.',
      puzzles: [
        {
          prompt: '¿Qué pasa primero, después y al final?',
          answer: ['Mica entrena alrededor de la escuela.', 'La brújula los lleva al pueblo de Mica.', 'Mica queda en segundo lugar.'],
        },
      ],
    },
    {
      title: 'El pueblo de los trolls',
      type: 'quiz',
      instructions: 'Piensa en cómo es el pueblo de Mica.',
      questions: [
        { prompt: '¿De qué son las casas de los trolls?', choices: ['De piedra', 'De madera', 'De cristal'], answer: 'De piedra' },
        { prompt: '¿Qué cubre sus tejados?', choices: ['Musgo verde y esponjoso', 'Nieve', 'Tejas rojas'], answer: 'Musgo verde y esponjoso' },
        { prompt: '¿Dónde está el pueblo?', choices: ['En una de las montañas más altas, entre árboles y rocas', 'Junto al mar', 'Dentro de una burbuja'], answer: 'En una de las montañas más altas, entre árboles y rocas' },
        { prompt: '¿Qué siente Teo al final por las montañas?', choices: ['Amor y admiración', 'Miedo', 'Aburrimiento'], answer: 'Amor y admiración' },
      ],
    },
    {
      title: 'Palabras del cuento',
      type: 'match',
      instructions: 'Toca una palabra del cuento y después lo que significa.',
      columns: ['Palabra', 'Significa'],
      pairs: [
        { id: 'entrenar', en: 'entrenar', es: 'prepararse para una competición' },
        { id: 'celebracion', en: 'celebración', es: 'fiesta' },
        { id: 'ladera', en: 'ladera', es: 'lado inclinado de una montaña' },
        { id: 'resuenan', en: 'resuenan', es: 'suenan muy fuerte' },
        { id: 'picos', en: 'picos', es: 'la parte más alta de las montañas' },
      ],
    },
  ],
};

export default ruedaRocas;
