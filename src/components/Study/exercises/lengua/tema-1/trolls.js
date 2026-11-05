// Lengua, tema 1: el cuento «Trolls de visita», la yincana de Monteoscuro.
const TRUE = ['Verdadero', 'Falso'];

const trolls = {
  slug: 'trolls',
  title: 'Trolls de visita',
  heading: 'Comprendo el cuento',
  type: 'quiz',
  instructions: 'Lee primero el cuento en tu libro. Después, contesta.',
  questions: [
    { prompt: '¿Quiénes son Tala y Bolo?', choices: ['Los hermanos mayores de Mica', 'Los padres de Teo', 'Dos brujos'], answer: 'Los hermanos mayores de Mica' },
    { prompt: '¿Adónde van Tala y Bolo?', choices: ['Al Valle', 'A los pantanos', 'Al mar'], answer: 'Al Valle' },
    { prompt: '¿Quién propone hacer una yincana?', choices: ['Arabela', 'Bolo', 'Topi'], answer: 'Arabela' },
    { prompt: '¿Qué prueba NO aparece en la yincana?', choices: ['Trepar al Tukuruku', 'Carrera de pies atados', 'Salto de trampolín', 'Levantar leña'], answer: 'Salto de trampolín' },
    { prompt: '¿De qué trata el cuento?', choices: ['De la visita de los hermanos de Mica a la escuela', 'Del viaje de Teo para ver a los hermanos de Mica', 'De cómo Mica gana todas las pruebas'], answer: 'De la visita de los hermanos de Mica a la escuela' },
    { prompt: '¿Por qué siente vergüenza Topi?', choices: ['Porque se sienta encima de un huevo', 'Porque pierde la carrera', 'Porque no sabe trepar'], answer: 'Porque se sienta encima de un huevo' },
    { prompt: '¿Qué piensa Arabela de sus alumnos?', choices: ['Que cada uno es especial y único', 'Que Bolo es el mejor', 'Que no saben jugar'], answer: 'Que cada uno es especial y único' },
  ],
  more: [
    {
      title: '¿Verdadero o falso?',
      type: 'quiz',
      instructions: 'Lee cada oración y piensa si pasa así en el cuento.',
      questions: [
        { prompt: 'Tala es la que mejor trepa el Tukuruku.', choices: TRUE, answer: 'Falso' },
        { prompt: 'Arabela levanta un montón de leña sin esfuerzo.', choices: TRUE, answer: 'Falso' },
        { prompt: 'Bolo lanza su martillo con mucha fuerza.', choices: TRUE, answer: 'Verdadero' },
        { prompt: 'Teo gana la carrera de pies atados con Topi.', choices: TRUE, answer: 'Falso' },
        { prompt: 'Mica trepa fácilmente hasta las ramas altas.', choices: TRUE, answer: 'Verdadero' },
      ],
    },
    {
      title: 'Palabras del cuento',
      type: 'quiz',
      instructions: '¿Qué significan estas palabras?',
      questions: [
        { prompt: 'Una yincana es…', choices: ['un juego con pruebas de habilidad', 'una comida de trolls', 'un árbol'], answer: 'un juego con pruebas de habilidad' },
        { prompt: 'Al final caen rendidos: están…', choices: ['muy cansados', 'muy contentos', 'dormidos'], answer: 'muy cansados' },
        { prompt: 'Un claro es…', choices: ['un espacio vacío dentro del bosque', 'un río', 'una casa'], answer: 'un espacio vacío dentro del bosque' },
        { prompt: '¿Qué signo te dice que habla un personaje?', choices: ['La raya (—)', 'El punto (.)', 'La interrogación (?)'], answer: 'La raya (—)' },
      ],
    },
  ],
};

export default trolls;
