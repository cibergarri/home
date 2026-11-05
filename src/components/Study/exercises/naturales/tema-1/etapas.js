// Naturales, tema 1: ¿nuestro cuerpo cambia? Las etapas de la vida, los dientes y lo que cambia
// al crecer.
const CAMBIA = { id: 'cambia', title: 'Cambia', colour: '#a6db8a' };
const IGUAL = { id: 'igual', title: 'No cambia', colour: '#f7c96f' };

const etapas = {
  slug: 'etapas',
  title: '¿Nuestro cuerpo cambia?',
  heading: 'Las etapas de la vida',
  type: 'build',
  instructions: 'A lo largo de la vida pasamos por distintas etapas. Toca las etapas en orden.',
  puzzles: [
    {
      prompt: 'Ordena las etapas de la vida, de la primera a la última.',
      hint: 'Desde que nacemos, el cuerpo crece. En la edad adulta dejamos de crecer.',
      answer: ['Infancia', 'Adolescencia', 'Edad adulta', 'Ancianidad'],
      separator: ', ',
    },
  ],
  more: [
    {
      title: '¿En qué etapa está?',
      type: 'quiz',
      instructions: 'Piensa en la edad de cada persona.',
      questions: [
        { prompt: 'Tú tienes 7 años. ¿En qué etapa de la vida estás?', choices: ['Infancia', 'Adolescencia', 'Edad adulta', 'Ancianidad'], answer: 'Infancia' },
        { prompt: 'Una chica de 14 años está en la…', choices: ['Infancia', 'Adolescencia', 'Edad adulta', 'Ancianidad'], answer: 'Adolescencia' },
        { prompt: 'Tu profe tiene 34 años. Está en la…', choices: ['Infancia', 'Adolescencia', 'Edad adulta', 'Ancianidad'], answer: 'Edad adulta' },
        { prompt: 'Un abuelo de 80 años está en la…', choices: ['Infancia', 'Adolescencia', 'Edad adulta', 'Ancianidad'], answer: 'Ancianidad' },
        { prompt: '¿En qué etapa dejamos de crecer?', choices: ['Infancia', 'Adolescencia', 'Edad adulta'], answer: 'Edad adulta' },
      ],
    },
    {
      title: 'Los dientes',
      type: 'quiz',
      instructions: 'Contesta sobre los dientes.',
      questions: [
        { prompt: '¿Las personas tenemos dientes cuando nacemos?', choices: ['Sí', 'No'], answer: 'No' },
        { prompt: '¿Cómo se llaman los primeros dientes?', choices: ['De leche', 'Definitivos'], answer: 'De leche' },
        { prompt: 'Cuando se cae un diente de leche, ¿cómo se llama el que sale en su lugar?', choices: ['De leche', 'Definitivo'], answer: 'Definitivo' },
      ],
    },
    {
      title: '¿Qué cambia cuando crecemos?',
      type: 'colour',
      instructions: 'Coge un color y toca las características del cuerpo: ¿cambian al crecer o no?',
      crayons: [CAMBIA, IGUAL],
      words: [
        { id: 'altura', word: 'La altura', crayon: 'cambia' },
        { id: 'pie', word: 'El número de pie', crayon: 'cambia' },
        { id: 'ojos', word: 'El color de los ojos', crayon: 'igual' },
        { id: 'voz', word: 'La voz', crayon: 'cambia' },
        { id: 'dientes', word: 'Los dientes', crayon: 'cambia' },
        { id: 'peso', word: 'El peso', crayon: 'cambia' },
      ],
    },
  ],
};

export default etapas;
