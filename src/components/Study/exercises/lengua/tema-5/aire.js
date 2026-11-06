// Lengua, tema 5: juego con las palabras y el desafío de Malún. El aire, los pulmones y cómo
// cuidamos el aire de nuestra localidad.
const AYUDA = { id: 'ayuda', title: 'Ayuda a cuidar el aire', colour: '#a6db8a' };
const NO_AYUDA = { id: 'no', title: 'Ensucia el aire', colour: '#d9d4c7' };

const aire = {
  slug: 'aire',
  title: 'Cuidamos el aire',
  heading: '¿Qué palabra falta?',
  type: 'quiz',
  instructions: 'El aire es muy importante para vivir. Completa cada oración.',
  questions: [
    { prompt: 'El aire tiene … que necesitan nuestros pulmones.', choices: ['oxígeno', 'chocolate', 'agua'], answer: 'oxígeno' },
    { prompt: 'El oxígeno lo necesitan nuestros …', choices: ['pulmones', 'zapatos', 'dientes'], answer: 'pulmones' },
    { prompt: 'Las plantas limpian el … y nos dan oxígeno.', choices: ['aire', 'suelo', 'coche'], answer: 'aire' },
    { prompt: 'Por eso no debemos … el aire.', choices: ['contaminar', 'respirar', 'cuidar'], answer: 'contaminar' },
  ],
  more: [
    {
      title: '¿Ayuda a cuidar el aire?',
      type: 'colour',
      instructions: 'Nuestra manera de movernos puede ayudar a cuidar el aire. Colorea.',
      crayons: [AYUDA, NO_AYUDA],
      words: [
        { id: 'bici', word: 'ir en bici', crayon: 'ayuda' },
        { id: 'andando', word: 'ir andando', crayon: 'ayuda' },
        { id: 'autobus', word: 'ir en autobús', crayon: 'ayuda' },
        { id: 'patinete', word: 'ir en patinete', crayon: 'ayuda' },
        { id: 'coche-cerca', word: 'ir en coche a la esquina', crayon: 'no' },
        { id: 'arboles', word: 'plantar árboles', crayon: 'ayuda' },
        { id: 'basura', word: 'quemar basura', crayon: 'no' },
        { id: 'motor', word: 'dejar el coche encendido', crayon: 'no' },
      ],
    },
    {
      title: '¿Respiramos aire limpio?',
      type: 'quiz',
      instructions: 'Investiga tu localidad. ¿Qué cosas ayudan a que el aire esté limpio?',
      questions: [
        { prompt: '¿Qué limpia el aire de una ciudad?', choices: ['Los parques con plantas', 'Los atascos', 'El humo'], answer: 'Los parques con plantas' },
        { prompt: 'En las calles donde no pueden pasar los coches…', choices: ['el aire está más limpio', 'el aire está más sucio'], answer: 'el aire está más limpio' },
        { prompt: 'Si mucha gente va en autobús o en metro…', choices: ['hay menos coches y menos humo', 'hay más humo'], answer: 'hay menos coches y menos humo' },
        { prompt: 'Un carril bici sirve para…', choices: ['ir de un lado a otro en bici', 'aparcar los coches'], answer: 'ir de un lado a otro en bici' },
        { prompt: '¿Qué ponemos en los edificios para que el aire sea más limpio?', choices: ['Plantas', 'Chimeneas', 'Farolas'], answer: 'Plantas' },
      ],
    },
  ],
};

export default aire;
