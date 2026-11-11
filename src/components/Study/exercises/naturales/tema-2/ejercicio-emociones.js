// Naturales, tema 2: practicamos ejercicio (el taller STEAM) y ¡qué emoción! (el rincón de la
// oratoria): las emociones y qué hacer cuando nos enfadamos.
const ejercicioEmociones = {
  slug: 'ejercicio-emociones',
  title: 'Ejercicio y emociones',
  heading: 'Practicamos ejercicio',
  type: 'quiz',
  instructions: 'Para estar en forma y cuidar nuestro cuerpo, debemos hacer ejercicio a menudo.',
  questions: [
    { prompt: '¿Cuándo debemos estirar?', choices: ['Antes y después de hacer deporte', 'Nunca'], answer: 'Antes y después de hacer deporte' },
    { prompt: '¿Para qué estiramos?', choices: ['Para relajar los músculos y evitar lesiones', 'Para cansarnos más'], answer: 'Para relajar los músculos y evitar lesiones' },
    { prompt: '¿Qué fortalece el ejercicio?', choices: ['Los músculos y los huesos', 'Los dientes'], answer: 'Los músculos y los huesos' },
    { prompt: '¿Cada cuánto conviene hacer ejercicio?', choices: ['A menudo, varias veces a la semana', 'Una vez al año'], answer: 'A menudo, varias veces a la semana' },
  ],
  more: [
    {
      title: '¡Qué emoción!',
      type: 'match',
      instructions: 'Toca una emoción y después cuándo la sentimos.',
      columns: ['Emoción', '¿Cuándo?'],
      pairs: [
        { id: 'alegria', en: '😄 Alegría', es: 'Cuando juego con mis amigos.' },
        { id: 'tristeza', en: '😢 Tristeza', es: 'Cuando pierdo mi juguete favorito.' },
        { id: 'enfado', en: '😠 Enfado', es: 'Cuando alguien me quita algo sin pedirlo.' },
        { id: 'miedo', en: '😨 Miedo', es: 'Cuando hay una tormenta muy fuerte.' },
        { id: 'sorpresa', en: '😲 Sorpresa', es: 'Cuando me dan un regalo que no esperaba.' },
        { id: 'asco', en: '🤢 Asco', es: 'Cuando huelo algo podrido.' },
      ],
    },
    {
      title: 'Cuando nos enfadamos',
      type: 'sort',
      instructions: '¿Qué es adecuado cuando nos enfadamos con alguien?',
      columns: [
        { id: 'bien', title: '👍 Adecuado' },
        { id: 'mal', title: '👎 No es adecuado' },
      ],
      cards: [
        { id: 'pensar', text: 'Pensar en cómo nos sentimos y qué nos molesta', columns: ['bien'] },
        { id: 'calmarnos', text: 'Calmarnos y hablar sobre lo que ha pasado', columns: ['bien'] },
        { id: 'disculparnos', text: 'Disculparnos y buscar una solución', columns: ['bien'] },
        { id: 'gritar', text: 'Gritar y pelearnos', columns: ['mal'] },
        { id: 'romper', text: 'Romper las cosas del otro', columns: ['mal'] },
      ],
    },
  ],
};

export default ejercicioEmociones;
