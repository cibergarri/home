// Lengua, tema 7: repaso. Clases de oraciones, frases hechas, mp, mb y nv.
const repaso = {
  slug: 'repaso',
  title: 'Repaso',
  heading: '¿Qué clase de oración?',
  type: 'quiz',
  instructions: 'Repasa todo lo que has aprendido en este tema.',
  questions: [
    { prompt: '¿Cuándo llega el ogro Tok?', choices: ['Enunciativa', 'Interrogativa', 'Exclamativa'], answer: 'Interrogativa' },
    { prompt: '¡Qué miedo da la niebla!', choices: ['Enunciativa', 'Interrogativa', 'Exclamativa'], answer: 'Exclamativa' },
    { prompt: 'Los molinillos giran alrededor de la escuela.', choices: ['Enunciativa', 'Interrogativa', 'Exclamativa'], answer: 'Enunciativa' },
    { prompt: 'Malún no ha ganado.', choices: ['Afirmativa', 'Negativa'], answer: 'Negativa' },
    { prompt: '¿Qué oración expresa alegría?', choices: ['¡Hemos ganado el partido!', '¿Hemos ganado el partido?', 'No hemos ganado el partido.'], answer: '¡Hemos ganado el partido!' },
  ],
  more: [
    {
      title: 'Palabras escondidas',
      type: 'build',
      instructions: 'Ordena las sílabas y forma cada palabra.',
      puzzles: [
        { prompt: 'Te protege del sol en la playa:', answer: ['som', 'bri', 'lla'], separator: '' },
        { prompt: 'Cuando en un partido los dos equipos quedan igual:', answer: ['em', 'pa', 'te'], separator: '' },
        { prompt: 'Vivir junto con otros:', answer: ['con', 'vi', 'vir'], separator: '' },
        { prompt: 'Masa rellena que se hace al horno:', answer: ['em', 'pa', 'na', 'da'], separator: '' },
      ],
    },
    {
      title: 'm o n',
      type: 'letters',
      write: true,
      instructions: 'Antes de p y b, m. Antes de v, n. Escribe la letra que falta.',
      words: [
        { clue: 'El último mes del año.', word: 'diciembre', shown: 'dicie_bre' },
        { clue: 'La estación del frío.', word: 'invierno', shown: 'i_vierno' },
        { clue: 'Una seta que se come.', word: 'champiñón', shown: 'cha_piñón' },
        { clue: 'El día en que cumples años.', word: 'cumpleaños', shown: 'cu_pleaños' },
        { clue: 'Se lleva en la cabeza.', word: 'sombrero', shown: 'so_brero' },
        { clue: 'Lo mandas por correo.', word: 'envío', shown: 'e_vío' },
      ],
    },
    {
      title: 'Frases hechas',
      type: 'quiz',
      instructions: '¿Qué significa cada frase hecha?',
      questions: [
        { prompt: 'Ver las estrellas', choices: ['Hacerse mucho daño', 'Mirar el cielo de noche'], answer: 'Hacerse mucho daño' },
        { prompt: 'Estar hasta las narices', choices: ['Estar harto', 'Tener la nariz grande'], answer: 'Estar harto' },
        { prompt: 'Meter la pata', choices: ['Equivocarse', 'Pisar un charco'], answer: 'Equivocarse' },
        { prompt: 'Echar una mano', choices: ['Ayudar', 'Tirar un guante'], answer: 'Ayudar' },
        { prompt: 'Hablar por los codos', choices: ['Hablar mucho', 'Hablar con los brazos'], answer: 'Hablar mucho' },
      ],
    },
  ],
};

export default repaso;
