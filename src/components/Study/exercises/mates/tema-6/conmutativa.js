// Mates, tema 6: la propiedad conmutativa de la suma: no importa en qué orden se suma, el
// resultado es el mismo (los cromos de Mica y Topi, y los rayos de Marta y Carlos).
const both = (a, b) => ({ prompt: `${a} + ${b} = ?   ${b} + ${a} = ?`, answer: [a + b, a + b] });

const conmutativa = {
  slug: 'conmutativa',
  title: 'La propiedad conmutativa',
  heading: 'Cambia el orden',
  type: 'numbers',
  write: true,
  instructions: 'Resuelve las dos sumas. ¿Qué observas? Pulsa ✓ después de cada número.',
  questions: [both(5, 8), both(42, 35), both(34, 53), both(125, 243), both(4, 32)],
  more: [
    {
      title: 'Une las parejas',
      type: 'match',
      instructions: 'Une cada suma con la que tiene los mismos sumandos cambiados de orden.',
      columns: ['Suma', 'Cambiada de orden'],
      pairs: [
        { id: 'a', en: '28 + 109', es: '109 + 28' },
        { id: 'b', en: '73 + 14', es: '14 + 73' },
        { id: 'c', en: '113 + 56', es: '56 + 113' },
        { id: 'd', en: '37 + 41', es: '41 + 37' },
      ],
    },
    {
      title: 'Piensa',
      type: 'quiz',
      instructions: 'Recuerda: el orden de los sumandos no cambia el resultado.',
      questions: [
        {
          prompt: '¿Cuál es el intruso?',
          say: false,
          choices: ['5 + 2', '4 + 3', '3 + 4'],
          answer: '5 + 2',
        },
        {
          prompt: 'Marta cuenta 3 rayos por la mañana y 2 por la tarde. Carlos cuenta 2 por la mañana y 3 por la tarde. ¿Quién ha contado más rayos?',
          choices: ['Carlos', 'Los dos han contado los mismos', 'Marta'],
          answer: 'Los dos han contado los mismos',
        },
        {
          prompt: 'Para sumar 4 + 32, Lena empieza por el 32. ¿Por qué?',
          choices: ['Porque da otro resultado', 'Es más fácil contar desde el número grande'],
          answer: 'Es más fácil contar desde el número grande',
        },
        {
          prompt: 'Si sabes que 34 + 53 = 87, ¿cuánto es 53 + 34?',
          say: false,
          choices: ['78', '97', '87'],
          answer: '87',
        },
        {
          prompt: '¿Es necesario hacer las dos sumas, 125 + 243 y 243 + 125?',
          say: false,
          choices: ['Sí, dan resultados distintos', 'No, dan el mismo resultado'],
          answer: 'No, dan el mismo resultado',
        },
      ],
    },
  ],
};

export default conmutativa;
