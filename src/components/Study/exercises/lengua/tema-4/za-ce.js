// Lengua, tema 4: za, zo, zu, ce, ci. Delante de a, o, u se escribe z; delante de e, i, c.
const SYLLABLES = ['za', 'zo', 'zu', 'ce', 'ci'];
const ZA = { id: 'za', title: 'za, zo, zu', colour: '#f7c96f' };
const CE = { id: 'ce', title: 'ce, ci', colour: '#a6db8a' };

// A word with `_` where the syllable goes, read aloud whole.
const fill = (shown, answer, say) => ({ prompt: shown.replace('_', ' _ '), say, choices: SYLLABLES, answer });

const zaCe = {
  slug: 'za-ce',
  title: 'za, zo, zu, ce, ci',
  heading: '¿Qué sílaba falta?',
  type: 'quiz',
  instructions: 'Escribimos za, zo, zu con z: zapatilla, lazo, zumo. Y ce, ci con c: cesta, bicicleta. Elige la sílaba que falta.',
  questions: [
    fill('_patilla', 'za', 'zapatilla'),
    fill('la_', 'zo', 'lazo'),
    fill('_mo', 'zu', 'zumo'),
    fill('_sta', 'ce', 'cesta'),
    fill('bi_cleta', 'ci', 'bicicleta'),
    fill('_ro', 'ce', 'cero'),
    fill('_nturón', 'ci', 'cinturón'),
    fill('ta_', 'za', 'taza'),
    fill('po_', 'zo', 'pozo'),
    fill('_rdo', 'zu', 'zurdo'),
    fill('dul_', 'ce', 'dulce'),
  ],
  more: [
    {
      title: 'Colorea las palabras',
      type: 'colour',
      instructions: 'Lee en voz alta. Colorea cada palabra según lleve za, zo, zu o ce, ci.',
      crayons: [ZA, CE],
      words: [
        { id: 'cabeza', word: 'cabeza', crayon: 'za' },
        { id: 'aceite', word: 'aceite', crayon: 'ce' },
        { id: 'cocina', word: 'cocina', crayon: 'ce' },
        { id: 'cazuela', word: 'cazuela', crayon: 'za' },
        { id: 'ceras', word: 'ceras', crayon: 'ce' },
        { id: 'trozo', word: 'trozo', crayon: 'za' },
        { id: 'valencia', word: 'Valencia', crayon: 'ce' },
        { id: 'empezar', word: 'empezar', crayon: 'za' },
        { id: 'zamora', word: 'Zamora', crayon: 'za' },
        { id: 'ciruelas', word: 'ciruelas', crayon: 'ce' },
        { id: 'acelgas', word: 'acelgas', crayon: 'ce' },
        { id: 'taza', word: 'taza', crayon: 'za' },
      ],
    },
    {
      title: 'Sílabas desordenadas',
      type: 'build',
      instructions: '¿Qué palabras se esconden? Ordena las sílabas.',
      puzzles: [
        { prompt: 'Una fruta roja y pequeña:', answer: ['ce', 're', 'za'], separator: '' },
        { prompt: 'Sirve para lavarte los dientes:', answer: ['ce', 'pi', 'llo'], separator: '' },
        { prompt: 'Es naranja y grande, y sale en Halloween:', answer: ['ca', 'la', 'ba', 'za'], separator: '' },
        { prompt: 'Un ave que vuela de noche:', answer: ['le', 'chu', 'za'], separator: '' },
        { prompt: 'La ropa que te pones en los pies:', answer: ['cal', 'ce', 'ti', 'nes'], separator: '' },
      ],
    },
    {
      title: '¿Z o c?',
      type: 'letters',
      write: true,
      instructions: 'Escribe la letra que falta: z delante de a, o, u; c delante de e, i.',
      words: [
        { clue: 'Una fruta roja o verde.', word: 'manzana', shown: 'man_ana' },
        { clue: 'Una hortaliza que te hace llorar al cortarla.', word: 'cebolla', shown: '_ebolla' },
        { clue: 'Allí ves películas en una pantalla grande.', word: 'cine', shown: '_ine' },
        { clue: 'El color del cielo.', word: 'azul', shown: 'a_ul' },
        { clue: 'Allí se prepara la comida.', word: 'cocina', shown: 'co_ina' },
        { clue: 'Te lo pones en los pies para andar.', word: 'zapato', shown: '_apato' },
        { clue: 'El número que va antes del uno.', word: 'cero', shown: '_ero' },
        { clue: 'Un animal con cola larga y pelo rojizo.', word: 'zorro', shown: '_orro' },
      ],
    },
  ],
};

export default zaCe;
