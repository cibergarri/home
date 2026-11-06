import { chart, shapes } from '../scenes';

// Mates, tema 9: el repaso del final del tema, "¿Qué he aprendido?".
const TV = chart([
  ['lunes', 20], ['martes', 0], ['miércoles', 15], ['jueves', 0], ['viernes', 30], ['sábado', 45], ['domingo', 40],
], 5);

const repaso = {
  slug: 'repaso',
  title: 'Repaso',
  heading: '1. Aproxima',
  type: 'numbers',
  write: true,
  instructions: 'Aproxima el 247 a la decena y a la centena más próximas.',
  questions: [
    { prompt: '247 a la decena: ?', answer: 250 },
    { prompt: '247 a la centena: ?', answer: 200 },
  ],
  more: [
    {
      title: '2. El mural',
      type: 'tower',
      instructions: 'El mural mide 750 cm y ya han dibujado 453 cm. ¿Cuántos centímetros les faltan? Resta en torre.',
      questions: [{ op: '-', a: 750, b: 453 }],
    },
    {
      title: '3. Transforma en multiplicación',
      type: 'numbers',
      write: true,
      instructions: 'Cuenta cuántas veces se repite el número. Pulsa ✓ después de cada número.',
      questions: [
        { prompt: '2 + 2 + 2 + 2 + 2 + 2 + 2 = ? × 2 = ?', answer: [7, 14] },
        { prompt: '5 + 5 + 5 + 5 + 5 + 5 = ? × 5 = ?', answer: [6, 30] },
        { prompt: '10 + 10 + 10 + 10 = ? × 10 = ?', answer: [4, 40] },
      ],
    },
    {
      title: '4. La mañana de Patricia',
      type: 'numbers',
      write: true,
      instructions: 'Patricia se despierta a las 7:30 y se ducha.',
      questions: [
        { story: 'Desayuna 30 minutos después de despertarse. ¿A qué hora desayuna?', prompt: 'A las ? en punto', answer: 8 },
        { story: 'Sale para el cole 15 minutos después de desayunar. ¿A qué hora sale?', prompt: 'A las 8 y ? minutos', answer: 15 },
      ],
    },
    {
      title: '5. ¿Es simétrica?',
      type: 'quiz',
      instructions: 'Imagina que doblas por la línea de puntos.',
      questions: [
        { prompt: '¿La mariposa es simétrica?', scene: shapes({ kind: 'mariposa', axis: true }), choices: ['Sí', 'No'], answer: 'Sí' },
        { prompt: '¿La nube es simétrica por esta línea?', scene: shapes({ kind: 'nube', axis: true }), choices: ['Sí', 'No'], answer: 'No' },
      ],
    },
    {
      title: '6. La tele de Marina',
      type: 'quiz',
      instructions: 'El gráfico muestra los minutos que Marina ha visto la tele cada día. El eje cuenta de 5 en 5.',
      questions: [
        { prompt: '¿Cuántos minutos vio la tele el día que más vio?', scene: TV, choices: ['40', '45', '50'], answer: '45' },
        { prompt: '¿Qué días no vio la tele?', scene: TV, choices: ['El martes y el jueves', 'El lunes y el viernes', 'El sábado y el domingo'], answer: 'El martes y el jueves' },
        { prompt: '¿Cuántos minutos vio el viernes?', scene: TV, choices: ['25', '30', '35'], answer: '30' },
      ],
    },
  ],
};

export default repaso;
