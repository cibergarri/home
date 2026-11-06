import { ruler, shapes } from '../scenes';

// Mates, tema 8: unidades de longitud. El metro (m) para medir longitudes, y el centímetro (cm) si
// miden menos de un metro. Un cubito azul mide 1 cm y en un metro caben 100: 1 m = 100 cm.
const measure = (thing, length) => ({ prompt: `${thing} mide ? cm`, scene: ruler(length), answer: length });

const longitud = {
  slug: 'longitud',
  title: 'Unidades de longitud',
  heading: '¿Centímetros o metros?',
  type: 'sort',
  instructions: 'Las cosas pequeñas se miden en centímetros (cm). Las grandes, de más de un metro, en metros (m).',
  columns: [{ id: 'cm', title: 'Se mide en cm' }, { id: 'm', title: 'Se mide en m' }],
  cards: [
    { id: 'lapiz', text: '✏️ un lápiz', columns: ['cm'] },
    { id: 'goma', text: 'una goma', columns: ['cm'] },
    { id: 'libro', text: '📕 un libro', columns: ['cm'] },
    { id: 'tijeras', text: '✂️ unas tijeras', columns: ['cm'] },
    { id: 'pasillo', text: 'el pasillo del cole', columns: ['m'] },
    { id: 'piscina', text: '🏊 una piscina', columns: ['m'] },
    { id: 'patio', text: 'el patio', columns: ['m'] },
    { id: 'autobus', text: '🚌 un autobús', columns: ['m'] },
  ],
  more: [
    {
      title: 'Mide con la regla',
      type: 'numbers',
      write: true,
      instructions: 'Mira dónde termina la tira en la regla. Empieza en el 0.',
      questions: [
        measure('El lápiz', 7), measure('La cinta', 10), measure('La goma', 4), measure('El rotulador', 12), measure('La tiza', 9),
      ],
    },
    {
      title: 'Cubitos, centímetros y metros',
      type: 'numbers',
      write: true,
      instructions: 'Un cubito azul mide 1 cm. En un metro caben 100 cubitos.',
      questions: [
        { prompt: '1 m = ? cm', answer: 100 },
        { story: 'Una pulsera mide 18 cubitos azules.', prompt: 'Mide ? cm', answer: 18 },
        { story: 'Un cable mide 1 m.', prompt: 'Mide ? cubitos azules', answer: 100 },
        { story: 'Una tiza mide 10 cm.', prompt: 'Mide ? cubitos azules', answer: 10 },
        {
          story: 'Una línea poligonal tiene tramos de 3 cm, 2 cm, 4 cm, 1 cm y 5 cm. ¿Cuánto mide en total?',
          scene: shapes('poligonal'),
          prompt: '3 + 2 + 4 + 1 + 5 = ? cm',
          answer: 15,
        },
      ],
    },
    {
      title: 'Piensa y elige',
      type: 'quiz',
      instructions: 'Imagina lo largo que es un metro: más o menos, de una mano a la otra con los brazos abiertos.',
      questions: [
        { prompt: 'Lena mide 150 cm. ¿Mide más o menos de 1 metro?', choices: ['Más de 1 metro', 'Menos de 1 metro'], answer: 'Más de 1 metro' },
        { prompt: '¿Cuánto mide, más o menos, la puerta de tu clase de ancho?', choices: ['1 metro', '1 centímetro', '100 metros'], answer: '1 metro' },
        { prompt: '¿Qué mide más?', choices: ['1 metro', '90 centímetros'], answer: '1 metro' },
        { prompt: 'Teo mide la mesa con la mano: mide 10 palmos. ¿Es una medida exacta?', choices: ['No, cada mano es distinta', 'Sí, siempre sale igual'], answer: 'No, cada mano es distinta' },
      ],
    },
  ],
};

export default longitud;
