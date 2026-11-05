// Lengua, tema 1: los pareados («Ciempiés», de Beatriz Osés). Dos palabras riman si terminan igual.
const pareados = {
  slug: 'pareados',
  title: 'Los pareados',
  heading: 'Palabras que riman',
  type: 'match',
  instructions: 'Dos palabras riman si terminan igual. Toca una palabra y después la que rima con ella.',
  columns: ['Palabra', 'Rima con'],
  pairs: [
    { id: 'botas', en: 'botas', es: 'rojas' },
    { id: 'correr', en: 'correr', es: 'caer' },
    { id: 'pasar', en: 'pasar', es: 'esperar' },
    { id: 'saltar', en: 'saltar', es: 'rosal' },
    { id: 'volteretas', en: 'volteretas', es: 'galletas' },
  ],
  more: [
    {
      title: '¿Riman?',
      type: 'quiz',
      instructions: 'Lee las dos palabras en voz alta. ¿Terminan igual?',
      questions: [
        { prompt: '¿Qué palabra rima con «ladrar»?', choices: ['sonar', 'perro', 'ladra'], answer: 'sonar' },
        { prompt: '¿Qué palabra rima con «correr»?', choices: ['esconder', 'corro', 'saltar'], answer: 'esconder' },
        { prompt: '¿Qué palabra rima con «galletas»?', choices: ['volteretas', 'galleta', 'caramelos'], answer: 'volteretas' },
        { prompt: '¿Qué palabra rima con «lluvia»?', choices: ['rubia', 'agua', 'llueve'], answer: 'rubia' },
        { prompt: 'Dos versos que riman forman un…', choices: ['pareado', 'cuento', 'título'], answer: 'pareado' },
      ],
    },
  ],
};

export default pareados;
