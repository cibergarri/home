import { clock, digital, numberLine, shapes } from '../scenes';

// Mates, tema 6: el repaso del final del tema, "¿Qué he aprendido?".
const quarterToTwelve = (scene, answer) => ({ prompt: '¿Marca las doce menos cuarto?', scene, choices: ['Sí', 'No'], answer });

const repaso = {
  slug: 'repaso',
  title: 'Repaso',
  heading: '1. Aproxima a la centena',
  type: 'numbers',
  write: true,
  instructions: 'Mira la recta y completa. Pulsa ✓ después de cada número.',
  questions: [
    { prompt: '260 está entre ? y ?. Aproximado a la centena es ?', scene: numberLine(200, 300, 260), answer: [200, 300, 300] },
    { prompt: '420 está entre ? y ?. Aproximado a la centena es ?', scene: numberLine(400, 500, 420), answer: [400, 500, 400] },
  ],
  more: [
    {
      title: '2. Une cada suma con su resultado',
      type: 'match',
      instructions: 'Calcula las sumas de la izquierda. ¿Necesitas calcular las que tienen los sumandos al revés?',
      columns: ['Suma', 'Resultado'],
      pairs: [
        { id: 'a', en: '42 + 23', es: '65' },
        { id: 'b', en: '58 + 122', es: '180' },
        { id: 'c', en: '363 + 34', es: '397' },
        { id: 'd', en: '218 + 4', es: '222' },
      ],
    },
    {
      title: '3. Las figuras y la propiedad',
      type: 'quiz',
      instructions: 'Piensa en lo que has aprendido en este tema.',
      questions: [
        { prompt: 'Si 42 + 23 = 65, ¿cuánto es 23 + 42?', say: false, choices: ['56', '65', '75'], answer: '65' },
        { prompt: '¿Qué propiedad has usado?', choices: ['La propiedad conmutativa', 'La resta'], answer: 'La propiedad conmutativa' },
        { prompt: '¿Cómo se llama esta figura?', scene: shapes('circunferencia'), choices: ['Círculo', 'Circunferencia'], answer: 'Circunferencia' },
        { prompt: '¿Cómo se llama esta figura?', scene: shapes('circulo'), choices: ['Círculo', 'Circunferencia'], answer: 'Círculo' },
      ],
    },
    {
      title: '4. Resta en torre',
      type: 'tower',
      instructions: 'Prepara la resta si hace falta.',
      questions: [
        { op: '-', a: 89, b: 55 },
        { op: '-', a: 571, b: 90 },
        { op: '-', a: 927, b: 334 },
        { op: '-', a: 138, b: 29, story: 'En un huerto había 138 lechugas. Por la noche granizó y se perdieron 29. ¿Cuántas lechugas quedan?' },
      ],
    },
    {
      title: '5. Las doce menos cuarto',
      type: 'quiz',
      instructions: 'Mira cada reloj. Las doce menos cuarto en el reloj digital es 11:45.',
      questions: [
        quarterToTwelve(digital(11, 45), 'Sí'),
        quarterToTwelve(clock(12, 15), 'No'),
        quarterToTwelve(clock(11, 45), 'Sí'),
        quarterToTwelve(digital(12, 45), 'No'),
      ],
    },
  ],
};

export default repaso;
