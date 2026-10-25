import { table } from './scenes';

// Mates, tema 1: tablas de doble entrada, las del libro.
const ACTIVIDADES = table(['Topi', 'Lena', 'Mica', 'Teo'], [
  ['Leer', '✓', '', '', ''],
  ['Hacer volteretas', '✓', '', '', ''],
  ['Jugar con amigos', '✓', '✓', '✓', '✓'],
  ['Remar', '', '', '✓', ''],
  ['Hacer carreras', '', '✓', '', ''],
  ['Patinar', '', '', '', '✓'],
]);

const DEPORTES = table(['Lunes', 'Martes', 'Miérc.', 'Jueves', 'Viernes'], [
  ['Voleibol', '14', '0', '12', '0', '15'],
  ['Baloncesto', '6', '10', '8', '17', '12'],
  ['Tenis', '4', '6', '0', '6', '0'],
]);

const CINES = table(['Sábado', 'Domingo'], [
  ['A las 4', 'El guardalotodo', 'Los cuatro reinos'],
  ['A las 6', '', 'La brújula'],
  ['A las 8', 'El desafío de Malún', ''],
]);

const tablas = {
  slug: 'tablas',
  title: 'Tablas de doble entrada',
  heading: 'Lee la tabla',
  type: 'quiz',
  instructions: 'Busca la fila y la columna que te hacen falta y elige la respuesta.',
  questions: [
    {
      prompt: 'A Topi le gusta jugar con sus amigos y leer. ¿Qué otra actividad le hace sentirse bien?',
      scene: ACTIVIDADES,
      choices: ['Remar', 'Hacer volteretas', 'Patinar'],
      answer: 'Hacer volteretas',
    },
    {
      prompt: '¿Quién disfruta haciendo carreras?',
      scene: ACTIVIDADES,
      choices: ['Mica', 'Teo', 'Lena'],
      answer: 'Lena',
    },
    {
      prompt: '¿Qué actividades hace Mica para sentirse bien?',
      scene: ACTIVIDADES,
      choices: ['Leer y patinar', 'Remar y jugar con sus amigos', 'Hacer carreras'],
      answer: 'Remar y jugar con sus amigos',
    },
    {
      prompt: 'Teo se siente bien cuando patina. ¿Con qué otra actividad disfruta?',
      scene: ACTIVIDADES,
      choices: ['Jugar con sus amigos', 'Remar', 'Leer'],
      answer: 'Jugar con sus amigos',
    },
    {
      prompt: '¿Qué día de la semana practican más niños voleibol?',
      scene: DEPORTES,
      choices: ['El lunes', 'El miércoles', 'El viernes'],
      answer: 'El viernes',
    },
    {
      prompt: '¿Cuántos niños juegan al baloncesto el jueves?',
      scene: DEPORTES,
      choices: ['12', '17', '6'],
      answer: '17',
    },
    {
      prompt: '¿Qué día practican deporte menos niños?',
      hint: 'Suma los niños de cada día.',
      scene: DEPORTES,
      choices: ['El lunes', 'El martes', 'El jueves'],
      answer: 'El martes',
    },
    {
      prompt: '¿Se puede saber cuántos niños van a fútbol los viernes?',
      scene: DEPORTES,
      choices: ['Sí, 15', 'No, el fútbol no está en la tabla'],
      answer: 'No, el fútbol no está en la tabla',
    },
    {
      prompt: '¿A qué hora empieza "La brújula" el domingo?',
      scene: CINES,
      choices: ['A las 4', 'A las 6', 'A las 8'],
      answer: 'A las 6',
    },
    {
      prompt: '¿Qué película ponen el sábado a las 8?',
      scene: CINES,
      choices: ['El guardalotodo', 'Los cuatro reinos', 'El desafío de Malún'],
      answer: 'El desafío de Malún',
    },
    {
      prompt: '¿Cuándo puedes ver "Los cuatro reinos"?',
      scene: CINES,
      choices: ['El domingo a las 4', 'El sábado a las 4', 'El domingo a las 6'],
      answer: 'El domingo a las 4',
    },
  ],
};

export default tablas;
