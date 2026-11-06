// Lengua, tema 8: el cuento «El festival de la magia». Teo y sus amigos viajan al Reino del Valle y
// ven el espectáculo del mago de Arlen.
const festival = {
  slug: 'festival',
  title: 'El festival de la magia',
  heading: 'Comprendo el cuento',
  type: 'quiz',
  instructions: 'Lee primero el cuento en tu libro. Después, contesta.',
  questions: [
    { prompt: '¿Con qué objeto viajan los amigos al Reino del Valle?', choices: ['Con la brújula', 'Con la varita', 'Con una escoba'], answer: 'Con la brújula' },
    { prompt: '¿Qué tiene que aprender Teo en el Reino del Valle?', choices: ['A amar ese reino', 'A volar', 'A hacer molinillos'], answer: 'A amar ese reino' },
    { prompt: '¿Dónde aterrizan?', choices: ['Sobre un montón de paja en una granja', 'En el lago', 'En el tejado del palacio'], answer: 'Sobre un montón de paja en una granja' },
    { prompt: '¿Cómo se llama la capital del reino?', choices: ['Arlen', 'Monteoscuro', 'Tukuruku'], answer: 'Arlen' },
    { prompt: '¿Cómo son los tejados de la ciudad?', choices: ['De plata', 'De oro', 'De paja'], answer: 'De plata' },
    { prompt: '¿Quiénes son Lucas y Kiu?', choices: ['Dos hermanos de la granja', 'Dos magos', 'Dos trolls'], answer: 'Dos hermanos de la granja' },
    { prompt: '¿Qué hace Topi cuando Kiu intenta cogerlo como un juguete?', choices: ['Da unos pasos atrás y hace una reverencia', 'Sale volando', 'Se enfada'], answer: 'Da unos pasos atrás y hace una reverencia' },
    { prompt: '¿Cuál es el emblema del reino?', choices: ['Una flor de pétalos plateados', 'Un dragón azul', 'Una ballena'], answer: 'Una flor de pétalos plateados' },
    { prompt: '¿De qué está hecha la ballena que sale del lago?', choices: ['De agua', 'De nubes', 'De fuego'], answer: 'De agua' },
    { prompt: '¿Qué figura NO hace el mago con el agua del lago?', choices: ['Un caballo', 'Un dragón', 'Un gigante', 'Unos pájaros'], answer: 'Un caballo' },
  ],
  more: [
    {
      title: 'En orden',
      type: 'build',
      instructions: 'Ordena las ideas principales del cuento, tal como pasan.',
      puzzles: [
        {
          prompt: '¿Qué pasa en el cuento?',
          answer: [
            'Los amigos usan la brújula para viajar al Reino del Valle.',
            'Lucas y Kiu los llevan a Arlen a ver el espectáculo de magia.',
            'El mago crea animales y figuras con el agua del lago.',
            'Teo comienza a amar el Reino del Valle.',
          ],
        },
      ],
    },
    {
      title: 'Palabras del cuento',
      type: 'quiz',
      instructions: '¿Qué significan estas palabras?',
      questions: [
        { prompt: 'La orilla es…', choices: ['el borde del lago', 'el fondo del lago', 'un barco'], answer: 'el borde del lago' },
        { prompt: 'Hacer una reverencia es…', choices: ['agacharse para mostrar respeto', 'dar un salto', 'decir adiós con la mano'], answer: 'agacharse para mostrar respeto' },
        { prompt: 'La capa del mago es azul celeste: es de color…', choices: ['azul cielo', 'azul muy oscuro', 'verde'], answer: 'azul cielo' },
        { prompt: 'La ballena vuelve a zambullirse: vuelve a…', choices: ['meterse en el agua', 'volar', 'dormirse'], answer: 'meterse en el agua' },
        { prompt: 'Los amigos se quedan boquiabiertos: están…', choices: ['muy sorprendidos', 'muy aburridos', 'dormidos'], answer: 'muy sorprendidos' },
      ],
    },
    {
      title: 'Lo que sienten',
      type: 'quiz',
      instructions: 'Piensa en lo que sienten los personajes.',
      questions: [
        { prompt: '¿Cuándo se vuelve azul la espiral de Topi?', choices: ['Cuando piensa en la niebla que amenaza el bosque', 'Cuando ve la ballena', 'Cuando conoce a Kiu'], answer: 'Cuando piensa en la niebla que amenaza el bosque' },
        { prompt: 'El color azul de la espiral de Topi es…', choices: ['tristeza', 'alegría', 'enfado'], answer: 'tristeza' },
        { prompt: '¿Crees que Lucas y Kiu cuidan a los amigos?', choices: ['Sí, los invitan a ir con ellos a Arlen', 'No, los echan de la granja'], answer: 'Sí, los invitan a ir con ellos a Arlen' },
        { prompt: 'Si ves a un amigo triste, ¿qué puedes hacer?', choices: ['Preguntarle qué le pasa', 'Reírte de él', 'Irte a jugar sin él'], answer: 'Preguntarle qué le pasa' },
      ],
    },
  ],
};

export default festival;
