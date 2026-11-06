// Lengua, tema 5: la entrevista. Teo le hace preguntas a Lior, un joven brujo del Reino de los
// Pantanos, para conocer mejor su hogar.
const entrevista = {
  slug: 'entrevista',
  title: 'La entrevista',
  heading: 'Teo entrevista a Lior',
  type: 'quiz',
  instructions: 'Lee en tu libro la entrevista de Teo. En una entrevista se hacen preguntas a una persona para conocer mejor algo de su vida.',
  questions: [
    { prompt: '¿Quién hace las preguntas?', choices: ['Teo', 'Lior', 'Lena'], answer: 'Teo' },
    { prompt: '¿Quién es Lior?', choices: ['Un joven brujo del Reino de los Pantanos', 'Un troll de las montañas', 'El profesor de Teo'], answer: 'Un joven brujo del Reino de los Pantanos' },
    { prompt: '¿Qué es lo que más le gusta a Lior de su reino?', choices: ['El cielo azul y el aire limpio', 'Los castillos tenebrosos', 'La niebla'], answer: 'El cielo azul y el aire limpio' },
    { prompt: '¿Todo su reino es igual?', choices: ['No, en algunas partes hay niebla y los árboles están enfermos', 'Sí, todo está limpio'], answer: 'No, en algunas partes hay niebla y los árboles están enfermos' },
    { prompt: '¿Por qué la niebla no llega a su casa?', choices: ['Los brujos los protegen con su magia, y ellos ayudan', 'Porque hace mucho viento', 'Porque Malún no quiere'], answer: 'Los brujos los protegen con su magia, y ellos ayudan' },
    { prompt: '¿Qué idea nos deja Lior?', choices: ['Proteger el reino es un trabajo de todos', 'La niebla es divertida', 'Solo los brujos pueden ayudar'], answer: 'Proteger el reino es un trabajo de todos' },
    { prompt: '¿Para qué sirve una entrevista?', choices: ['Para conocer mejor a una persona', 'Para contar un cuento', 'Para hacer una receta'], answer: 'Para conocer mejor a una persona' },
  ],
  more: [
    {
      title: 'Cada pregunta con su respuesta',
      type: 'match',
      instructions: 'Teo quiere saber por qué el aire está limpio. Toca una pregunta y después la respuesta de Lior.',
      columns: ['Pregunta', 'Respuesta'],
      pairs: [
        { id: 'por-que', en: '¿Por qué el aire está limpio?', es: 'Porque los habitantes saben cuidar el aire.' },
        { id: 'como', en: '¿Cómo consiguen que esté limpio?', es: 'Plantando árboles.' },
        { id: 'que', en: '¿Qué hacen los árboles?', es: 'Absorben la suciedad del aire.' },
        { id: 'gusta', en: '¿Qué te gusta más de tu reino?', es: 'El cielo azul y el aire limpio.' },
      ],
    },
    {
      title: '¿Qué, por qué o cómo?',
      type: 'quiz',
      instructions: 'Elige la palabra con la que empieza cada pregunta.',
      questions: [
        { prompt: '¿… te sentiste al ganar el premio?', choices: ['Qué', 'Por qué', 'Cómo'], answer: 'Cómo' },
        { prompt: '¿… te dieron el premio? Porque plantamos árboles.', choices: ['Qué', 'Por qué', 'Cómo'], answer: 'Por qué' },
        { prompt: '¿… has aprendido gracias al premio?', choices: ['Qué', 'Por qué', 'Cómo'], answer: 'Qué' },
        { prompt: '¿… lo celebrasteis? Con una fiesta.', choices: ['Qué', 'Por qué', 'Cómo'], answer: 'Cómo' },
        { prompt: '¿… te gusta más del colegio?', choices: ['Qué', 'Por qué', 'Cómo'], answer: 'Qué' },
      ],
    },
    {
      title: 'Hacemos una entrevista',
      type: 'quiz',
      instructions: 'Piensa cómo se hace bien una entrevista con un compañero.',
      questions: [
        { prompt: '¿Qué hace el entrevistador?', choices: ['Hace las preguntas y escribe las respuestas', 'Contesta las preguntas', 'Se va a jugar'], answer: 'Hace las preguntas y escribe las respuestas' },
        { prompt: '¿Qué preparas antes de empezar?', choices: ['Al menos tres preguntas', 'Un bocadillo', 'Un dibujo'], answer: 'Al menos tres preguntas' },
        { prompt: 'Para que te entiendan bien, tienes que…', choices: ['pronunciar con cuidado', 'hablar muy deprisa', 'taparte la boca'], answer: 'pronunciar con cuidado' },
        { prompt: 'Cuando termina la entrevista…', choices: ['cambiáis los papeles', 'se acaba el juego para siempre'], answer: 'cambiáis los papeles' },
      ],
    },
  ],
};

export default entrevista;
