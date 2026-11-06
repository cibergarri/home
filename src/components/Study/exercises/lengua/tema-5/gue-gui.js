// Lengua, tema 5: ga, go, gu, gue, gui, güe, güi. Con gue y gui la u no suena; si suena, se
// escribe ü (con diéresis): cigüeña, pingüino.
const LETTERS = ['gue', 'gui', 'güe', 'güi'];

// A word with `_` where the letters go, and those letters.
const fill = (shown, answer, say) => ({ prompt: shown.replace('_', ' _ '), say, choices: LETTERS, answer });

const SUENA = { id: 'suena', title: 'Suena la u (ü)', colour: '#f5a8c8' };
const NO_SUENA = { id: 'no-suena', title: 'No suena la u', colour: '#d9d4c7' };

const gueGui = {
  slug: 'gue-gui',
  title: 'ga, go, gu, gue, gui, güe, güi',
  heading: '¿Qué letras faltan?',
  type: 'quiz',
  instructions: 'Escribimos gue y gui: guepardo, águila. Si la u suena, le ponemos dos puntos, la diéresis: cigüeña, pingüino.',
  questions: [
    fill('_pardo', 'gue', 'guepardo'),
    fill('á_la', 'gui', 'águila'),
    fill('ci_ña', 'güe', 'cigüeña'),
    fill('pin_no', 'güi', 'pingüino'),
    fill('_santes', 'gui', 'guisantes'),
    fill('para_ro', 'güe', 'paragüero'),
    fill('pira_stas', 'güi', 'piragüistas'),
    fill('dro_ría', 'gue', 'droguería'),
    fill('ver_nza', 'güe', 'vergüenza'),
    fill('Mi_l', 'gue', 'Miguel'),
    fill('_tarra', 'gui', 'guitarra'),
  ],
  more: [
    {
      title: '¿Suena la u?',
      type: 'colour',
      instructions: 'Lee cada palabra en voz alta. ¿Suena la u después de la g?',
      crayons: [SUENA, NO_SUENA],
      words: [
        { id: 'albergue', word: 'albergue', crayon: 'no-suena' },
        { id: 'verguenza', word: 'vergüenza', crayon: 'suena' },
        { id: 'aguita', word: 'agüita', crayon: 'suena' },
        { id: 'lengueta', word: 'lengüeta', crayon: 'suena' },
        { id: 'guisantes', word: 'guisantes', crayon: 'no-suena' },
        { id: 'antiguedades', word: 'antigüedades', crayon: 'suena' },
        { id: 'guepardo', word: 'guepardo', crayon: 'no-suena' },
        { id: 'piraguismo', word: 'piragüismo', crayon: 'suena' },
        { id: 'guinol', word: 'guiñol', crayon: 'no-suena' },
        { id: 'hoguera', word: 'hoguera', crayon: 'no-suena' },
      ],
    },
    {
      title: 'Animales con g',
      type: 'letters',
      write: true,
      instructions: 'Escribe las letras que faltan. Recuerda: ga, go, gu, pero gue, gui.',
      words: [
        { clue: 'Canta «quiquiriquí».', word: 'gallo', shown: '_allo' },
        { clue: 'Un mono muy grande y fuerte.', word: 'gorila', shown: 'g_rila' },
        { clue: 'Salta y lleva a su cría en una bolsa.', word: 'canguro', shown: 'can_uro' },
        { clue: 'El animal más rápido de la tierra.', word: 'guepardo', shown: 'g_epardo' },
        { clue: 'Un ave que vuela muy alto.', word: 'águila', shown: 'á_uila' },
        { clue: 'Un instrumento con seis cuerdas.', word: 'guitarra', shown: 'g_itarra' },
        { clue: 'Un animal pequeño y alargado que vive bajo la tierra.', word: 'gusano', shown: '_usano' },
      ],
    },
    {
      title: 'La diéresis',
      type: 'quiz',
      instructions: 'Piensa en las palabras con güe y güi.',
      questions: [
        { prompt: 'Los dos puntos sobre la ü se llaman…', choices: ['diéresis', 'tilde', 'punto y seguido'], answer: 'diéresis' },
        { prompt: '¿Qué palabra está bien escrita?', choices: ['pingüino', 'pinguino'], answer: 'pingüino' },
        { prompt: '¿Y esta?', choices: ['guitarrista', 'güitarrista'], answer: 'guitarrista' },
        { prompt: '¿Cuál se escribe con diéresis?', choices: ['cigüeña', 'guiso', 'guerra'], answer: 'cigüeña' },
        { prompt: '¿En qué cartel suena la u?', choices: ['Tienda de antigüedades', 'Club El Guepardo', 'Teatro de guiñol'], answer: 'Tienda de antigüedades' },
        { prompt: '¿Dónde se guardan los paraguas?', choices: ['en el paragüero', 'en el paraguero'], answer: 'en el paragüero' },
      ],
    },
  ],
};

export default gueGui;
