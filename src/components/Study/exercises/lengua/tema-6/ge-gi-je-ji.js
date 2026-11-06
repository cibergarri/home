// Lengua, tema 6: ge, gi, je, ji. Algunas palabras se escriben con ge, gi (gelatina, girasol) y
// otras con je, ji (tijeras). Las que terminan en -aje van siempre con j: garaje.
const LETTERS = ['ge', 'gi', 'je', 'ji'];

// A word with `_` where the letters go, and those letters.
const fill = (shown, answer, say) => ({ prompt: shown.replace('_', ' _ '), say, choices: LETTERS, answer });

const G = { id: 'g', title: 'ge, gi', colour: '#8ec5f2' };
const J = { id: 'j', title: 'je, ji', colour: '#f7c96f' };

const geGiJeJi = {
  slug: 'ge-gi-je-ji',
  title: 'ge, gi, je, ji',
  heading: '¿Con g o con j?',
  type: 'colour',
  instructions: 'Ge y je suenan igual, y gi y ji también. Por eso hay que aprender cómo se escribe cada palabra. Colorea.',
  crayons: [G, J],
  words: [
    { id: 'gelatina', word: 'gelatina', crayon: 'g' },
    { id: 'girasol', word: 'girasol', crayon: 'g' },
    { id: 'tijeras', word: 'tijeras', crayon: 'j' },
    { id: 'geranio', word: 'geranio', crayon: 'g' },
    { id: 'jersey', word: 'jersey', crayon: 'j' },
    { id: 'virginia', word: 'Virginia', crayon: 'g' },
    { id: 'cajita', word: 'cajita', crayon: 'j' },
    { id: 'mejilla', word: 'mejilla', crayon: 'j' },
    { id: 'generoso', word: 'generoso', crayon: 'g' },
    { id: 'gimnasta', word: 'gimnasta', crayon: 'g' },
    { id: 'jeronimo', word: 'Jerónimo', crayon: 'j' },
    { id: 'jirafa', word: 'jirafa', crayon: 'j' },
  ],
  more: [
    {
      title: '¿Qué letras faltan?',
      type: 'quiz',
      instructions: 'Elige las letras que faltan en cada palabra.',
      questions: [
        fill('_rafa', 'ji', 'jirafa'),
        fill('ma_a', 'gi', 'magia'),
        fill('a_drez', 'je', 'ajedrez'),
        fill('pere_l', 'ji', 'perejil'),
        fill('_gante', 'gi', 'gigante'),
        fill('_nio', 'ge', 'genio'),
        fill('agu_ro', 'je', 'agujero'),
        fill('cru_do', 'ji', 'crujido'),
        fill('cole_o', 'gi', 'colegio'),
        fill('_nial', 'ge', 'genial'),
      ],
    },
    {
      title: 'Las palabras en -aje',
      type: 'letters',
      write: true,
      instructions: 'Las palabras que terminan en -aje se escriben siempre con j. Escribe la letra que falta.',
      words: [
        { clue: 'Donde se guarda el coche.', word: 'garaje', shown: 'gara_e' },
        { clue: 'Ir de vacaciones a un sitio lejano.', word: 'viaje', shown: 'via_e' },
        { clue: 'Lo que ves desde lo alto de una montaña.', word: 'paisaje', shown: 'paisa_e' },
        { clue: 'Las maletas que llevas de viaje.', word: 'equipaje', shown: 'equipa_e' },
        { clue: 'Lo que escribes para decirle algo a alguien.', word: 'mensaje', shown: 'mensa_e' },
        { clue: 'Ropa elegante de chaqueta y pantalón.', word: 'traje', shown: 'tra_e' },
      ],
    },
    {
      title: 'Germán y su imaginación',
      type: 'build',
      instructions: 'Ordena las palabras. Fíjate en cómo se escriben ge, gi, je, ji.',
      puzzles: [
        { prompt: '¿Qué oye Germán en el garaje?', answer: ['Germán', 'oye', 'un', 'crujido', 'en', 'el', 'garaje.'] },
        { prompt: '¿Qué ve en el colegio?', answer: ['Un', 'genio', 'sale', 'por', 'un', 'agujero.'] },
        { prompt: '¿Qué come Jerónimo?', answer: ['Jerónimo', 'come', 'gelatina', 'en', 'el', 'colegio.'] },
      ],
    },
  ],
};

export default geGiJeJi;
