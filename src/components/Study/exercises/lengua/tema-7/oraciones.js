// Lengua, tema 7: las clases de oraciones. Enunciativas (afirmativas o negativas), interrogativas
// y exclamativas.
const ENUNCIATIVA = { id: 'enunciativa', title: 'Enunciativa (cuenta algo)', colour: '#a6db8a' };
const INTERROGATIVA = { id: 'interrogativa', title: 'Interrogativa (¿pregunta?)', colour: '#8ec5f2' };
const EXCLAMATIVA = { id: 'exclamativa', title: 'Exclamativa (¡emoción!)', colour: '#f7c96f' };

const oraciones = {
  slug: 'oraciones',
  title: 'Las clases de oraciones',
  heading: '¿Qué clase de oración es?',
  type: 'colour',
  instructions: 'Las enunciativas afirman o niegan algo. Las interrogativas preguntan: ¿…? Las exclamativas expresan alegría, sorpresa, enfado, miedo o dolor: ¡…!',
  crayons: [ENUNCIATIVA, INTERROGATIVA, EXCLAMATIVA],
  words: [
    { id: 'papelera', word: '¡Utiliza la papelera!', crayon: 'exclamativa' },
    { id: 'material', word: '¿Has recogido el material?', crayon: 'interrogativa' },
    { id: 'plantas', word: 'Los lunes regamos las plantas.', crayon: 'enunciativa' },
    { id: 'avanza', word: 'La niebla avanza muy rápido.', crayon: 'enunciativa' },
    { id: 'avanza-pregunta', word: '¿La niebla avanza muy rápido?', crayon: 'interrogativa' },
    { id: 'avanza-grito', word: '¡La niebla avanza muy rápido!', crayon: 'exclamativa' },
    { id: 'columpios', word: '¡Qué columpios tan bonitos!', crayon: 'exclamativa' },
    { id: 'topi', word: '¿Dónde vive Topi?', crayon: 'interrogativa' },
    { id: 'gritamos', word: 'No gritamos al entrar en clase.', crayon: 'enunciativa' },
  ],
  more: [
    {
      title: '¿Afirmativa o negativa?',
      type: 'quiz',
      instructions: 'Las oraciones enunciativas pueden afirmar algo (afirmativas) o negarlo (negativas). Las negativas llevan «no».',
      questions: [
        { prompt: 'La niebla no avanza muy rápido.', choices: ['Afirmativa', 'Negativa'], answer: 'Negativa' },
        { prompt: 'Arabela tiene un plan.', choices: ['Afirmativa', 'Negativa'], answer: 'Afirmativa' },
        { prompt: 'No arrastramos las sillas al moverlas.', choices: ['Afirmativa', 'Negativa'], answer: 'Negativa' },
        { prompt: 'Teo hace molinillos de papel.', choices: ['Afirmativa', 'Negativa'], answer: 'Afirmativa' },
        { prompt: 'Topi no tiene miedo.', choices: ['Afirmativa', 'Negativa'], answer: 'Negativa' },
        { prompt: 'Hablamos bajito al trabajar en equipo.', choices: ['Afirmativa', 'Negativa'], answer: 'Afirmativa' },
      ],
    },
    {
      title: 'Los signos',
      type: 'quiz',
      instructions: 'Fíjate en los signos de interrogación (¿?) y de exclamación (¡!). Elige la oración bien escrita.',
      questions: [
        { prompt: 'Quieres preguntar a Topi dónde vive.', choices: ['¿Dónde vives, Topi?', '¡Dónde vives, Topi!', 'Dónde vives, Topi.'], answer: '¿Dónde vives, Topi?' },
        { prompt: 'Ves unos columpios nuevos y te pones muy contenta.', choices: ['¡Qué columpios tan chulos!', '¿Qué columpios tan chulos?', 'Qué columpios tan chulos.'], answer: '¡Qué columpios tan chulos!' },
        { prompt: 'Cuentas lo que hace Arabela.', choices: ['Arabela reparte el trabajo.', '¿Arabela reparte el trabajo?', '¡Arabela reparte el trabajo?'], answer: 'Arabela reparte el trabajo.' },
        { prompt: 'Te das un golpe en el pie.', choices: ['¡Ay, qué daño!', '¿Ay, qué daño?', 'Ay, qué daño.'], answer: '¡Ay, qué daño!' },
        { prompt: '¿Qué oración sirve para preguntar?', choices: ['¿Recogemos el material?', 'Recogemos el material.', '¡Recogemos el material!'], answer: '¿Recogemos el material?' },
      ],
    },
    {
      title: 'Forma oraciones',
      type: 'build',
      instructions: 'Ordena las palabras. ¡No te olvides de los signos!',
      puzzles: [
        { prompt: 'Una pregunta para Topi:', answer: ['¿Te', 'gusta', 'volar?'] },
        { prompt: 'Una exclamación de sorpresa:', answer: ['¡Qué', 'molinillo', 'tan', 'grande!'] },
        { prompt: 'Una oración enunciativa negativa:', answer: ['Topi', 'no', 'quiere', 'ruido.'] },
        { prompt: 'Una oración enunciativa afirmativa:', answer: ['Arabela', 'construye', 'ventiladores.'] },
      ],
    },
  ],
};

export default oraciones;
