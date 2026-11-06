// Lengua, tema 3: ca, co, cu, que, qui. Delante de a, o, u se escribe c; delante de e, i, qu.
const SYLLABLES = ['ca', 'co', 'cu', 'que', 'qui'];
const CA = { id: 'ca', title: 'ca, co, cu', colour: '#f7c96f' };
const QUE = { id: 'que', title: 'que, qui', colour: '#8ec5f2' };

// A word with `_` where the syllable goes, read aloud whole.
const fill = (shown, answer, say) => ({ prompt: shown.replace('_', ' _ '), say, choices: SYLLABLES, answer });

const caQue = {
  slug: 'ca-que',
  title: 'ca, co, cu, que, qui',
  heading: '¿Qué sílaba falta?',
  type: 'quiz',
  instructions: 'Escribimos ca, co, cu con c: castañas, melocotón, cuchara. Y que, qui con qu: queso, rosquillas. Elige la sílaba que falta.',
  questions: [
    fill('_stañas', 'ca', 'castañas'),
    fill('melo_tón', 'co', 'melocotón'),
    fill('_chara', 'cu', 'cuchara'),
    fill('_so', 'que', 'queso'),
    fill('ros_llas', 'qui', 'rosquillas'),
    fill('_lumpio', 'co', 'columpio'),
    fill('par_', 'que', 'parque'),
    fill('_stillo', 'ca', 'castillo'),
    fill('ra_ta', 'que', 'raqueta'),
    fill('es_ela', 'cu', 'escuela'),
    fill('e_po', 'qui', 'equipo'),
  ],
  more: [
    {
      title: 'Colorea las palabras',
      type: 'colour',
      instructions: 'Quique y sus compañeros preparan un cartel sobre el cuidado de la naturaleza. Colorea cada palabra según lleve ca, co, cu o que, qui.',
      crayons: [CA, QUE],
      words: [
        { id: 'quique', word: 'Quique', crayon: 'que' },
        { id: 'quedado', word: 'quedado', crayon: 'que' },
        { id: 'companeros', word: 'compañeros', crayon: 'ca' },
        { id: 'equipo', word: 'equipo', crayon: 'que' },
        { id: 'tienen-que', word: 'que', crayon: 'que' },
        { id: 'cartel', word: 'cartel', crayon: 'ca' },
        { id: 'cuidado', word: 'cuidado', crayon: 'ca' },
        { id: 'contaminacion', word: 'contaminación', crayon: 'ca' },
        { id: 'quien', word: 'quién', crayon: 'que' },
        { id: 'conoceras', word: 'conocerás', crayon: 'ca' },
      ],
    },
    {
      title: '¿C o qu?',
      type: 'letters',
      write: true,
      instructions: 'Escribe las letras que faltan: c delante de a, o, u; qu delante de e, i.',
      words: [
        { clue: 'Un edificio con torres donde viven reyes.', word: 'castillo', shown: '_astillo' },
        { clue: 'Sirve para jugar al tenis.', word: 'raqueta', shown: 'ra__eta' },
        { clue: 'Se hace con leche y les gusta a los ratones.', word: 'queso', shown: '__eso' },
        { clue: 'Sirve para tomar la sopa.', word: 'cuchara', shown: '_uchara' },
        { clue: 'Allí te subes para balancearte en el parque.', word: 'columpio', shown: '_olumpio' },
        { clue: 'Un lugar con árboles, bancos y columpios.', word: 'parque', shown: 'par__e' },
        { clue: 'Un animal con orejas largas que salta.', word: 'conejo', shown: '_onejo' },
        { clue: 'Un insecto pequeño que pica.', word: 'mosquito', shown: 'mos__ito' },
      ],
    },
    {
      title: 'Forma una oración',
      type: 'build',
      instructions: 'Ordena las palabras. ¡Mayúscula al principio y punto al final!',
      puzzles: [
        { prompt: 'Con Carlos, columpio y parque:', answer: ['Carlos', 'sube', 'al', 'columpio', 'del', 'parque.'] },
        { prompt: 'Con Quique y queso:', answer: ['Quique', 'come', 'queso', 'con', 'pan.'] },
        { prompt: 'Con Mica y bosque:', answer: ['Mica', 'quiere', 'conocer', 'el', 'bosque.'] },
      ],
    },
  ],
};

export default caQue;
