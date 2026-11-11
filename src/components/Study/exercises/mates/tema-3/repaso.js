import { shapes } from '../scenes';

// Mates, tema 3: el repaso del final del tema, «¿Qué he aprendido?».
const repaso = {
  slug: 'repaso',
  title: 'Repaso',
  heading: '1. Averigua qué números son',
  type: 'numbers',
  write: true,
  instructions: 'Junta las centenas, las decenas y las unidades y escribe el número.',
  questions: [
    { prompt: '200 + 30 + 8 = ?', answer: 238 },
    { prompt: '5 C + 4 D + 1 U = ?', answer: 541 },
    { prompt: '6 C + 3 U = ?', answer: 603 },
    { prompt: '7 C + 2 U = ?', answer: 702 },
  ],
  more: [
    {
      title: '2. Coloca y calcula',
      type: 'tower',
      instructions: 'Coloca cada cifra en su columna y calcula empezando por las unidades.',
      questions: [{ op: '+', a: 534, b: 109 }, { op: '+', a: 282, b: 251 }, { op: '-', a: 371, b: 160 }],
    },
    {
      title: '3. Medidas, líneas y polígonos',
      type: 'quiz',
      instructions: 'Piensa en lo que has aprendido en el tema.',
      questions: [
        {
          prompt: 'Una cuerda mide 3 barras rojas. ¿Cuántos cubos mide?', choices: ['3 cubos', '13 cubos', '30 cubos'], answer: '30 cubos',
        },
        {
          prompt: '¿Esta línea poligonal es abierta o cerrada?', scene: shapes('poligonal'), choices: ['Abierta', 'Cerrada'], answer: 'Abierta',
        },
        {
          prompt: '¿Cómo se llama un polígono de 5 lados?', choices: ['Hexágono', 'Pentágono', 'Rombo'], answer: 'Pentágono',
        },
        {
          prompt: '¿Cuántos ángulos y vértices tiene un pentágono?', choices: ['5 ángulos y 5 vértices', '4 ángulos y 5 vértices', '5 ángulos y 4 vértices'], answer: '5 ángulos y 5 vértices',
        },
        {
          prompt: '¿Cuál de estos es un número de tres cifras con 9 centenas?', choices: ['199', '919', '99'], answer: '919',
        },
      ],
    },
    {
      title: '4. Un problema',
      type: 'numbers',
      write: true,
      instructions: 'Lee y calcula.',
      questions: [
        {
          story: 'En el colegio de Gonzalo hay 145 alumnos en Infantil y 298 en Primaria. ¿Cuántos alumnos hay en total?',
          data: [[145, 'alumnos en Infantil'], [298, 'alumnos en Primaria']],
          prompt: '? alumnos',
          answer: 443,
        },
        {
          story: 'En el jardín mágico había 368 flores y se han secado 125. ¿Cuántas flores quedan?',
          data: [[368, 'flores había en el jardín'], [125, 'flores se han secado']],
          prompt: 'Quedan ? flores',
          answer: 243,
        },
      ],
    },
  ],
};

export default repaso;
