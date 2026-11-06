// Lengua, tema 3: el cartel (título, imagen, mensaje llamativo e idea para colaborar) y la campaña
// publicitaria para cuidar de los seres vivos.
const AYUDA = { id: 'ayuda', title: 'Ayuda al planeta', colour: '#a6db8a' };
const DANA = { id: 'dana', title: 'Hace daño al planeta', colour: '#f5a8a8' };

const cartel = {
  slug: 'cartel',
  title: 'El cartel',
  heading: 'Las partes del cartel',
  type: 'match',
  instructions: 'Mira en tu libro el cartel «Campaña por una playa limpia». Toca cada parte y después lo que pone en ella.',
  columns: ['Parte del cartel', 'En el cartel del cachalote'],
  pairs: [
    { id: 'titulo', en: 'Título', es: 'Campaña por una playa limpia' },
    { id: 'imagen', en: 'Imagen', es: 'Un dibujo del cachalote' },
    { id: 'mensaje', en: 'Mensaje llamativo', es: 'Ayúdanos a cuidar su hogar' },
    { id: 'idea', en: 'Idea para colaborar', es: 'Recoge los plásticos de la playa' },
  ],
  more: [
    {
      title: 'Comprendo el cartel',
      type: 'quiz',
      instructions: 'Un cartel nos avisa de un problema y nos dice cómo podemos ayudar.',
      questions: [
        { prompt: '¿Dónde vive el cachalote?', choices: ['En el mar', 'En el bosque', 'En el río'], answer: 'En el mar' },
        { prompt: '¿Por qué ayuda esta campaña al cachalote?', choices: ['Porque así no llegan plásticos a su hogar', 'Porque le dan comida', 'Porque lo llevan a un zoo'], answer: 'Porque así no llegan plásticos a su hogar' },
        { prompt: '¿Hay que recoger los plásticos aunque no los hayas tirado tú?', choices: ['Sí', 'No'], answer: 'Sí' },
        { prompt: 'Cortar árboles para fabricar papel pone en peligro…', choices: ['los bosques', 'el mar', 'las nubes'], answer: 'los bosques' },
        { prompt: '¿Qué podemos hacer para cuidar los bosques?', choices: ['Reciclar el papel', 'Tirar más papel', 'Cortar más árboles'], answer: 'Reciclar el papel' },
        { prompt: '¿Qué animal vive en los bosques que se cortan?', choices: ['El tigre', 'El cachalote', 'El pingüino'], answer: 'El tigre' },
        { prompt: '¿Qué es el aro gigante?', choices: ['La flor más grande del mundo', 'Un juguete', 'Un árbol pequeño'], answer: 'La flor más grande del mundo' },
      ],
    },
    {
      title: 'Mis palabras mágicas',
      type: 'colour',
      instructions: 'Para tu campaña puedes usar estas palabras. Colorea las que ayudan a cuidar el planeta y las que le hacen daño.',
      crayons: [AYUDA, DANA],
      words: [
        { id: 'reciclar', word: 'reciclar', crayon: 'ayuda' },
        { id: 'contaminar', word: 'contaminar', crayon: 'dana' },
        { id: 'limpiar', word: 'limpiar', crayon: 'ayuda' },
        { id: 'ensuciar', word: 'ensuciar', crayon: 'dana' },
        { id: 'respetar', word: 'respetar', crayon: 'ayuda' },
        { id: 'colaborar', word: 'colaborar', crayon: 'ayuda' },
        { id: 'tirar-basura', word: 'tirar basura', crayon: 'dana' },
        { id: 'cuidar', word: 'cuidar', crayon: 'ayuda' },
      ],
    },
    {
      title: 'Mi campaña publicitaria',
      type: 'quiz',
      instructions: 'Vas a presentar tu campaña a tus compañeros. ¿Cómo lo harás mejor?',
      questions: [
        { prompt: '¿Cómo te gustaría que te contaran algo importante?', choices: ['Con una voz alegre y emocionante', 'Con una voz aburrida'], answer: 'Con una voz alegre y emocionante' },
        { prompt: '¿Cuándo suena tu voz más amable?', choices: ['Cuando hablas sonriendo', 'Cuando hablas enfadado'], answer: 'Cuando hablas sonriendo' },
        { prompt: '¿Qué cuentas primero en tu campaña?', choices: ['Qué le ocurre al animal o a la planta', 'Adiós y gracias'], answer: 'Qué le ocurre al animal o a la planta' },
        { prompt: '¿Y después?', choices: ['Cómo podemos ayudar', 'Qué has desayunado'], answer: 'Cómo podemos ayudar' },
      ],
    },
  ],
};

export default cartel;
