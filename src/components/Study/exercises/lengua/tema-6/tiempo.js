// Lengua, tema 6: la información del tiempo (el mapa del Reino de las Montañas) y escuchar con
// atención cuando alguien cuenta qué tiempo hace.
const BIEN = { id: 'bien', title: 'Escucha con atención', colour: '#a6db8a' };
const MAL = { id: 'mal', title: 'No escucha', colour: '#f5a8a8' };

const tiempo = {
  slug: 'tiempo',
  title: 'La información del tiempo',
  heading: 'El mapa del tiempo',
  type: 'quiz',
  instructions: 'Mira en tu libro el mapa del tiempo del Reino de las Montañas y lee la información.',
  questions: [
    { prompt: '¿Sobre qué informa el mapa?', choices: ['Sobre el tiempo que va a hacer', 'Sobre los caminos', 'Sobre los animales'], answer: 'Sobre el tiempo que va a hacer' },
    { prompt: '¿Qué día es?', choices: ['Martes, 2 de abril', 'Lunes, 1 de mayo', 'Domingo, 5 de enero'], answer: 'Martes, 2 de abril' },
    { prompt: '¿Qué tiempo hará en la zona alta?', choices: ['Lluvia', 'Sol', 'Nieve'], answer: 'Lluvia' },
    { prompt: '¿Qué se espera en la zona media?', choices: ['Fuertes vientos', 'Mucho calor', 'Granizo'], answer: 'Fuertes vientos' },
    { prompt: '¿Cómo estará el cielo en la zona baja?', choices: ['Cubierto de nubes', 'Despejado', 'Con arcoíris'], answer: 'Cubierto de nubes' },
  ],
  more: [
    {
      title: 'Los símbolos del tiempo',
      type: 'match',
      instructions: 'Toca un símbolo y después el tiempo que indica.',
      columns: ['Símbolo', 'Tiempo'],
      pairs: [
        { id: 'nieve', en: '❄️', es: 'nieve' },
        { id: 'tormenta', en: '⛈️', es: 'tormenta' },
        { id: 'lluvia', en: '🌧️', es: 'lluvia' },
        { id: 'sol', en: '☀️', es: 'sol' },
        { id: 'viento', en: '💨', es: 'viento' },
        { id: 'nubes', en: '☁️', es: 'nubes' },
      ],
    },
    {
      title: '¿Qué tiempo necesitas?',
      type: 'quiz',
      instructions: 'Piensa qué tiempo tiene que hacer para cada actividad.',
      questions: [
        { prompt: 'Para esquiar necesitas…', choices: ['nieve', 'sol y calor', 'lluvia'], answer: 'nieve' },
        { prompt: 'Para volar una cometa necesitas…', choices: ['viento', 'nieve', 'niebla'], answer: 'viento' },
        { prompt: 'Para bañarte en el mar necesitas…', choices: ['sol y calor', 'granizo', 'tormenta'], answer: 'sol y calor' },
        { prompt: 'Para pisar charcos necesitas…', choices: ['lluvia', 'sol', 'viento'], answer: 'lluvia' },
      ],
    },
    {
      title: 'Palabras para contar el tiempo',
      type: 'match',
      instructions: 'Toca una frase y después la palabra que dice lo mismo.',
      columns: ['Un día…', 'Es un día…'],
      pairs: [
        { id: 'lluvioso', en: 'con lluvia', es: 'lluvioso' },
        { id: 'nublado', en: 'con nubes', es: 'nublado' },
        { id: 'tormentoso', en: 'con tormenta', es: 'tormentoso' },
        { id: 'caluroso', en: 'con calor', es: 'caluroso' },
        { id: 'nevado', en: 'con nieve', es: 'nevado' },
        { id: 'ventoso', en: 'con viento', es: 'ventoso' },
      ],
    },
    {
      title: '¿Quién escucha?',
      type: 'colour',
      instructions: 'Cuando alguien habla, le gusta que le prestemos atención. Colorea.',
      crayons: [BIEN, MAL],
      words: [
        { id: 'cara', word: 'mirar a la cara', crayon: 'bien' },
        { id: 'turno', word: 'esperar mi turno', crayon: 'bien' },
        { id: 'recto', word: 'sentarme recto', crayon: 'bien' },
        { id: 'interrumpir', word: 'interrumpir', crayon: 'mal' },
        { id: 'mirar-lado', word: 'mirar a otro lado', crayon: 'mal' },
        { id: 'mis-cosas', word: 'pensar en mis cosas', crayon: 'mal' },
        { id: 'repetir', word: 'repetir lo que me han contado', crayon: 'bien' },
      ],
    },
  ],
};

export default tiempo;
