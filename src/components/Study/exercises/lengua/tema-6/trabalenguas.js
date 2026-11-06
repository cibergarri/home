// Lengua, tema 6: los trabalenguas («¡Qué lío de tiempo!», de UNICEF) y los refranes del tiempo.
const MESES = { id: 'meses', title: 'Trata de meses', colour: '#f7c96f' };
const ESTACIONES = { id: 'estaciones', title: 'Trata de estaciones', colour: '#a6db8a' };

const trabalenguas = {
  slug: 'trabalenguas',
  title: 'Trabalenguas y refranes',
  heading: '¡Qué lío de tiempo!',
  type: 'quiz',
  instructions: 'Lee en voz alta los trabalenguas de tu libro, primero despacio y luego muy deprisa.',
  questions: [
    { prompt: '¿De qué tratan los dos trabalenguas?', choices: ['Del tiempo', 'Del otoño', 'De la lluvia'], answer: 'Del tiempo' },
    { prompt: 'En el trabalenguas de la nieve nueva, ¿qué dos letras se repiten más?', choices: ['n y v', 'd y t', 's y t'], answer: 'n y v' },
    { prompt: 'La Tierra está acalorada: está…', choices: ['con mucho calor', 'con mucho frío', 'muy mojada'], answer: 'con mucho calor' },
    { prompt: 'Desacalorar la Tierra es…', choices: ['quitarle calor', 'quitarle frío', 'abrigarla'], answer: 'quitarle calor' },
    { prompt: 'Para desacalorar la Tierra podemos plantar…', choices: ['árboles', 'humos', 'coches'], answer: 'árboles' },
    { prompt: 'Y también podemos reducir los…', choices: ['humos', 'árboles', 'parques'], answer: 'humos' },
  ],
  more: [
    {
      title: '¿Meses o estaciones?',
      type: 'colour',
      instructions: 'Lee los refranes de tu libro. ¿De qué trata cada uno?',
      crayons: [MESES, ESTACIONES],
      words: [
        { id: 'primavera', word: 'No hay primavera sin flores, ni verano sin calores…', crayon: 'estaciones' },
        { id: 'enero', word: 'En enero, bufanda, abrigo y sombrero.', crayon: 'meses' },
        { id: 'marzo', word: 'Marzo ventoso y abril lluvioso hacen a mayo florido y hermoso.', crayon: 'meses' },
      ],
    },
    {
      title: 'Los refranes',
      type: 'quiz',
      instructions: 'Piensa en lo que dicen los refranes.',
      questions: [
        { prompt: 'En enero nos ponemos bufanda, abrigo y sombrero porque hace…', choices: ['frío', 'calor'], answer: 'frío' },
        { prompt: 'Marzo ventoso quiere decir marzo…', choices: ['con viento', 'con nieve', 'con sol'], answer: 'con viento' },
        { prompt: 'Si marzo trae viento y abril trae lluvia, ¿cómo será mayo?', choices: ['Florido y hermoso', 'Frío y triste', 'Seco'], answer: 'Florido y hermoso' },
        { prompt: 'Los racimos son…', choices: ['conjuntos de uvas', 'flores de primavera', 'copos de nieve'], answer: 'conjuntos de uvas' },
        { prompt: '¿En qué estación hay racimos de uvas?', choices: ['En otoño', 'En invierno'], answer: 'En otoño' },
        { prompt: '¿Qué es típico del mes de agosto?', choices: ['el bañador', 'la bufanda', 'la nieve'], answer: 'el bañador' },
      ],
    },
    {
      title: 'Ordena el refrán',
      type: 'build',
      instructions: 'Toca las palabras en orden para formar el refrán.',
      puzzles: [
        { prompt: 'El refrán de enero', answer: ['En', 'enero,', 'bufanda,', 'abrigo', 'y', 'sombrero.'] },
        { prompt: 'El refrán de marzo', answer: ['Marzo', 'ventoso', 'y', 'abril', 'lluvioso', 'hacen', 'a', 'mayo', 'florido', 'y', 'hermoso.'] },
      ],
    },
  ],
};

export default trabalenguas;
