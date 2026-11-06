// Lengua, tema 4: el repaso del final del tema, «¿Qué he aprendido?».
const ZA = { id: 'za', title: 'za, zo, zu', colour: '#f7c96f' };
const CE = { id: 'ce', title: 'ce, ci', colour: '#a6db8a' };
const PRONOMBRE = { id: 'pronombre', title: 'Pronombre personal', colour: '#f5a8c8' };
const OTRA = { id: 'otra', title: 'Otra palabra', colour: '#d9d4c7' };

const repaso = {
  slug: 'repaso',
  title: 'Repaso',
  heading: '1. La final de baloncesto',
  type: 'colour',
  instructions: 'Estos son algunos nombres de los jugadores. Colorea cada uno según lleve za, zo, zu o ce, ci.',
  crayons: [ZA, CE],
  words: [
    { id: 'lorenzo', word: 'Lorenzo', crayon: 'za' },
    { id: 'cecilia', word: 'Cecilia', crayon: 'ce' },
    { id: 'gonzalo', word: 'Gonzalo', crayon: 'za' },
    { id: 'zurita', word: 'Zurita', crayon: 'za' },
    { id: 'celia', word: 'Celia', crayon: 'ce' },
    { id: 'pozo', word: 'Pozo', crayon: 'za' },
    { id: 'vicente', word: 'Vicente', crayon: 'ce' },
    { id: 'plaza', word: 'Plaza', crayon: 'za' },
    { id: 'cervantes', word: 'Cervantes', crayon: 'ce' },
    { id: 'acebo', word: 'Acebo', crayon: 'ce' },
  ],
  more: [
    {
      title: '2. Escribe bien',
      type: 'letters',
      write: true,
      instructions: 'Escribe la letra que falta: z o c.',
      words: [
        { clue: 'Una bebida de fruta.', word: 'zumo', shown: '_umo' },
        { clue: 'Se usa para llevar la compra.', word: 'cesta', shown: '_esta' },
        { clue: 'Una fruta de color morado o amarillo.', word: 'ciruela', shown: '_iruela' },
        { clue: 'Allí bebes la leche del desayuno.', word: 'taza', shown: 'ta_a' },
        { clue: 'El número que va antes del uno.', word: 'cero', shown: '_ero' },
      ],
    },
    {
      title: '3. Las palabras polisémicas',
      type: 'quiz',
      instructions: 'Recuerda: una palabra polisémica tiene varios significados.',
      questions: [
        { prompt: '¿Qué palabra es un juguete y también una parte del brazo?', choices: ['muñeca', 'tienda', 'yema'], answer: 'muñeca' },
        { prompt: '¿Qué palabra es la boca de un pájaro y también la cima de una montaña?', choices: ['pico', 'yema', 'tienda'], answer: 'pico' },
        { prompt: 'Mi muñeca tiene el pelo rizado. Aquí, muñeca es…', choices: ['un juguete', 'una parte del brazo'], answer: 'un juguete' },
        { prompt: 'Llevo el reloj en la muñeca. Aquí, muñeca es…', choices: ['una parte del brazo', 'un juguete'], answer: 'una parte del brazo' },
      ],
    },
    {
      title: '4. La nube de palabras',
      type: 'colour',
      instructions: 'Busca el pronombre personal escondido en la nube.',
      crayons: [PRONOMBRE, OTRA],
      words: [
        { id: 'ellos', word: 'ellos', crayon: 'pronombre' },
        { id: 'camellos', word: 'camellos', crayon: 'otra' },
        { id: 'sellos', word: 'sellos', crayon: 'otra' },
        { id: 'maravilla', word: 'maravilla', crayon: 'otra' },
        { id: 'sillon', word: 'sillón', crayon: 'otra' },
        { id: 'llenos', word: 'llenos', crayon: 'otra' },
        { id: 'ballena', word: 'ballena', crayon: 'otra' },
      ],
    },
    {
      title: '5. Repasa el tema',
      type: 'quiz',
      instructions: 'Recuerda el cuento, la noticia y el mito.',
      questions: [
        { prompt: '¿Qué esfera del reloj universal cambia las estaciones?', choices: ['La de las flores, nubes, hojas y nieve', 'La de los números', 'La del sol y la luna'], answer: 'La de las flores, nubes, hojas y nieve' },
        { prompt: '¿Qué pronombre completa la frase? … vivimos en el planeta Tierra.', choices: ['Nosotros', 'Ellos', 'Tú'], answer: 'Nosotros' },
        { prompt: '¿A qué preguntas responde una noticia?', choices: ['¿Quién?, ¿qué?, ¿cuándo? y ¿dónde?', 'Solo ¿por qué?', 'Ninguna'], answer: '¿Quién?, ¿qué?, ¿cuándo? y ¿dónde?' },
        { prompt: '¿Cómo se llama el título de una noticia?', choices: ['Titular', 'Pie de foto', 'Estrofa'], answer: 'Titular' },
        { prompt: '¿Quién se queda con el mar en el mito?', choices: ['Poseidón', 'Zeus', 'Hades'], answer: 'Poseidón' },
        { prompt: '¿Qué palabra está bien escrita?', choices: ['cereza', 'zereza', 'cereca'], answer: 'cereza' },
      ],
    },
  ],
};

export default repaso;
