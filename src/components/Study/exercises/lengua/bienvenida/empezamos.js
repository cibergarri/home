// Lengua, bienvenida: ¡empezamos! Las letras que faltan (g, gü, qu, c, z), el, la, los, las,
// sílabas y palabras, contrarios y lo mismo, familias de palabras y oraciones desordenadas.
const LETTERS = ['g', 'gü', 'qu', 'c', 'z'];

// A word with `gap` where the letters go (shown as _), and those letters.
const fill = (shown, answer, say) => ({ prompt: shown.replace('_', ' _ '), say, choices: LETTERS, answer });

const empezamos = {
  slug: 'empezamos',
  title: '¡Empezamos!',
  heading: '¿Qué letras faltan?',
  type: 'quiz',
  instructions: 'Al gigante Picogrande se le ha quedado pequeña la chaqueta… Elige las letras que faltan en cada palabra.',
  questions: [
    fill('gi_ante', 'g', 'gigante'),
    fill('_edado', 'qu', 'quedado'),
    fill('pe_eña', 'qu', 'pequeña'),
    fill('cha_eta', 'qu', 'chaqueta'),
    fill('ver_enza', 'gü', 'vergüenza'),
    fill('_omprar', 'c', 'comprar'),
    fill('abri_o', 'g', 'abrigo'),
    fill('re_ibido', 'c', 'recibido'),
    fill('pa_ete', 'qu', 'paquete'),
    fill('ca_adora', 'z', 'cazadora'),
    fill('a_ul', 'z', 'azul'),
  ],
  more: [
    {
      title: 'El, la, los, las',
      type: 'sort',
      instructions: 'Lleva cada nombre a la palabra que va delante.',
      columns: [
        { id: 'el', title: 'el' },
        { id: 'la', title: 'la' },
        { id: 'los', title: 'los' },
        { id: 'las', title: 'las' },
      ],
      cards: [
        { id: 'desayuno', text: 'desayuno', columns: ['el'] },
        { id: 'viaje', text: 'viaje', columns: ['el'] },
        { id: 'prado', text: 'prado', columns: ['el'] },
        { id: 'clase', text: 'clase', columns: ['la'] },
        { id: 'profesora', text: 'profesora', columns: ['la'] },
        { id: 'varita', text: 'varita', columns: ['la'] },
        { id: 'libros', text: 'libros', columns: ['los'] },
        { id: 'animales', text: 'animales', columns: ['los'] },
        { id: 'reinos', text: 'reinos', columns: ['los'] },
        { id: 'sillas', text: 'sillas', columns: ['las'] },
        { id: 'plumas', text: 'plumas', columns: ['las'] },
        { id: 'amapolas', text: 'amapolas', columns: ['las'] },
      ],
    },
    {
      title: 'Sílabas y palabras',
      type: 'numbers',
      write: true,
      instructions: 'Cuenta las sílabas dando una palmada en cada una. Después, cuenta las palabras. Pulsa ✓ después de cada número.',
      questions: [
        { story: 'La cometa lleva cintas amarillas.', prompt: '? sílabas y ? palabras', answer: [12, 5] },
        { story: 'Óscar busca las gafas de Ana.', prompt: '? sílabas y ? palabras', answer: [10, 6] },
        { story: 'Teo tiene una varita.', prompt: '? sílabas y ? palabras', answer: [9, 4] },
        { story: 'Mica es una troll.', prompt: '? sílabas y ? palabras', answer: [6, 4] },
      ],
    },
    {
      title: 'El crucigrama',
      type: 'letters',
      write: true,
      instructions: 'Escribe las letras que faltan, una a una, y pulsa ✓.',
      words: [
        { clue: 'Lo contrario de bajar.', word: 'subir', shown: 's_b_r' },
        { clue: 'Lo contrario de grande.', word: 'pequeño', shown: 'pe_u_ño' },
        { clue: 'Lo mismo que escuela.', word: 'colegio', shown: 'co_e_io' },
        { clue: 'Lo mismo que maestro.', word: 'profesor', shown: 'pro_es_r' },
        { clue: 'Lo contrario de moderno.', word: 'antiguo', shown: 'an_i_uo' },
      ],
    },
    {
      title: 'Palabras de la misma familia',
      type: 'quiz',
      instructions: 'Una palabra se ha colado en cada familia. ¿Cuál es la intrusa?',
      questions: [
        { prompt: 'fruta, frutería, frutera… ¿y cuál no es de la familia?', choices: ['frutero', 'fresa', 'afrutado'], answer: 'fresa' },
        { prompt: 'rosa, rosaleda, rosal… ¿y cuál no es de la familia?', choices: ['rodar', 'rosita', 'rosales'], answer: 'rodar' },
        { prompt: 'pelo, peluquería, peluquero… ¿y cuál es la intrusa?', choices: ['pelusa', 'peluca', 'pelito'], answer: 'pelusa' },
        { prompt: 'Un árbol muy grande es un…', choices: ['arbolazo', 'arbolito'], answer: 'arbolazo' },
        { prompt: 'Un perro pequeño es un…', choices: ['perrazo', 'perrito'], answer: 'perrito' },
      ],
    },
    {
      title: 'Las oraciones de las nubes',
      type: 'build',
      instructions: 'Ordena las palabras y forma la oración. Pista: empieza por el, la, los o las y su nombre.',
      puzzles: [
        { prompt: '¿Qué oración se esconde en la nube?', answer: ['El', 'gato', 'duerme', 'en', 'la', 'butaca.'] },
        { prompt: '¿Y en esta otra nube?', answer: ['Las', 'estanterías', 'están', 'descolocadas.'] },
      ],
    },
    {
      title: 'Saludos del mundo',
      type: 'match',
      instructions: 'Teo quiere saber cómo se dice «hola» en otros lugares. Toca un lugar y después su saludo.',
      columns: ['Lugar', 'Hola'],
      pairs: [
        { id: 'italia', en: 'Italia', es: 'Ciao' },
        { id: 'reino-unido', en: 'Reino Unido', es: 'Hello' },
        { id: 'china', en: 'China', es: 'Ni hao' },
        { id: 'francia', en: 'Francia', es: 'Bonjour' },
        { id: 'alemania', en: 'Alemania', es: 'Hallo' },
        { id: 'japon', en: 'Japón', es: 'Konnichiwa' },
        { id: 'portugal', en: 'Portugal', es: 'Olá' },
        { id: 'euskera', en: 'En euskera', es: 'Kaixo' },
      ],
    },
  ],
};

export default empezamos;
