import { blocks, table } from '../scenes';

// Mates, bienvenida: ¡empezamos 2.º! Repaso de 1.º: los meses y los días de la semana en el
// calendario de Teo, series de 1 en 1 y de 10 en 10, y hacer grupos de 10.
const SEPTIEMBRE = table(['L', 'M', 'X', 'J', 'V', 'S', 'D'], [
  ['Semana 1', '', '1', '2', '3', '4', '5', '6'],
  ['Semana 2', '7', '8', '9', '10', '11', '12', '13'],
  ['Semana 3', '14', '15', '16', '17', '18', '19', '20'],
]);

// Sacapuntas en grupos de 10: `tens` grupos y `ones` sueltos.
const groups = (tens, ones) => ({
  story: `Teo tiene ${tens * 10 + ones} sacapuntas. Hace grupos de 10.`,
  prompt: 'Hay ? grupos de 10 y ? sacapuntas sueltos.',
  scene: blocks(tens, ones),
  answer: [tens, ones],
});

const empezamos = {
  slug: 'empezamos',
  title: '¡Empezamos 2.º!',
  heading: 'Los meses del año',
  type: 'quiz',
  instructions: 'Teo marca en su calendario el día que empieza 2.º de Primaria. Un año tiene 12 meses.',
  questions: [
    {
      prompt: '¿Qué mes va después de junio?', choices: ['Mayo', 'Julio', 'Agosto'], answer: 'Julio',
    },
    {
      prompt: '¿Qué mes va antes de septiembre?', choices: ['Agosto', 'Octubre', 'Julio'], answer: 'Agosto',
    },
    {
      prompt: '¿Cuál es el primer mes del año?', choices: ['Diciembre', 'Marzo', 'Enero'], answer: 'Enero',
    },
    {
      prompt: '¿Cuál es el último mes del año?', choices: ['Diciembre', 'Noviembre', 'Enero'], answer: 'Diciembre',
    },
    {
      prompt: '¿Qué mes va entre marzo y mayo?', choices: ['Febrero', 'Abril', 'Junio'], answer: 'Abril',
    },
    {
      prompt: '¿Qué mes va después de octubre?', choices: ['Septiembre', 'Diciembre', 'Noviembre'], answer: 'Noviembre',
    },
  ],
  more: [
    {
      title: 'El calendario de Teo',
      type: 'quiz',
      instructions: 'Mira el calendario de septiembre. La X es el miércoles. Teo empieza 2.º el lunes 7.',
      questions: [
        {
          prompt: '¿Qué día de la semana es el 7 de septiembre?',
          scene: SEPTIEMBRE,
          choices: ['Lunes', 'Martes', 'Domingo'],
          answer: 'Lunes',
        },
        {
          prompt: '¿Qué día de la semana es el 11 de septiembre?',
          scene: SEPTIEMBRE,
          choices: ['Jueves', 'Viernes', 'Sábado'],
          answer: 'Viernes',
        },
        {
          prompt: 'Teo empieza el cole el lunes 7. ¿Cuántos días faltan para el viernes?',
          scene: SEPTIEMBRE,
          choices: ['3 días', '4 días', '5 días'],
          answer: '4 días',
        },
        {
          prompt: '¿Qué día va después del jueves?',
          choices: ['Miércoles', 'Viernes', 'Sábado'],
          answer: 'Viernes',
        },
        {
          prompt: '¿Cuántos días tiene una semana?',
          choices: ['5', '7', '10'],
          answer: '7',
        },
      ],
    },
    {
      title: 'Completa las series',
      type: 'numbers',
      write: true,
      instructions: 'Escribe los números que faltan, uno a uno.',
      questions: [
        { prompt: '0, 1, 2, 3, ?, ?, 6, ?, 8, ?', answer: [4, 5, 7, 9] },
        { prompt: '0, 10, 20, 30, ?, ?, 60, ?', answer: [40, 50, 70] },
        { prompt: '45, 46, ?, ?, 49, ?', answer: [47, 48, 50] },
        { prompt: '90, 80, 70, ?, ?, 40', answer: [60, 50] },
      ],
    },
    {
      title: 'Haz grupos de 10',
      type: 'numbers',
      write: true,
      instructions: 'Cada barra roja es un grupo de 10. Cada cubo azul es uno suelto. Pulsa ✓ después de cada número.',
      questions: [groups(2, 3), groups(3, 5), groups(4, 0), groups(1, 8), groups(5, 2)],
    },
  ],
};

export default empezamos;
