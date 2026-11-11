import { numberLine } from '../scenes';

// Mates, tema 4: cálculo mental, sumar y restar en la recta. Desde el primer número se salta
// primero la decena y después las unidades: 28 + 15 = 28 + 10 + 5 = 43, 45 - 18 = 45 - 10 - 8 = 27.
const add = (a, b, from, to) => ({
  prompt: `${a} + ${b} = ${a} + ${b - (b % 10)} + ${b % 10} = ?`, scene: numberLine(from, to, a), answer: a + b,
});

const take = (a, b, from, to) => ({
  prompt: `${a} - ${b} = ${a} - ${b - (b % 10)} - ${b % 10} = ?`, scene: numberLine(from, to, a), answer: a - b,
});

const rectaCalculo = {
  slug: 'recta-calculo',
  title: 'Sumar y restar en la recta',
  heading: 'Salta hacia delante',
  type: 'numbers',
  write: true,
  instructions: 'Para sumar, desde el punto rojo salta primero las decenas y después las unidades.',
  questions: [
    add(28, 15, 20, 50),
    { prompt: '28 + 15 = 28 + 5 + 10 = ?', scene: numberLine(20, 50, 28), answer: 43 },
    add(36, 17, 30, 60),
    add(38, 14, 30, 60),
    add(35, 16, 30, 60),
  ],
  more: [
    {
      title: 'Salta hacia atrás',
      type: 'numbers',
      write: true,
      instructions: 'Para restar, desde el minuendo salta hacia atrás primero las decenas y después las unidades.',
      questions: [
        take(45, 18, 20, 50),
        take(47, 12, 30, 50),
        { prompt: '47 - 12 = 47 - 2 - 10 = ?', scene: numberLine(30, 50, 47), answer: 35 },
        take(49, 22, 20, 50),
        take(36, 14, 20, 40),
        take(46, 21, 20, 50),
      ],
    },
    {
      title: 'Problemas',
      type: 'numbers',
      write: true,
      instructions: 'Lee el problema, calcula y escribe el resultado.',
      questions: [
        {
          story: 'El puzle de Saturno tiene 35 piezas. El puzle de la Tierra tiene 12 piezas más. ¿Cuántas piezas tiene el puzle de la Tierra?',
          data: [[35, 'piezas tiene el puzle de Saturno'], [12, 'piezas más tiene el de la Tierra']],
          prompt: 'Tiene ? piezas',
          answer: 47,
        },
        {
          story: 'Un día tiene 24 horas. Si ya han pasado 19 horas, ¿cuántas horas faltan para terminar el día?',
          data: [[24, 'horas tiene un día'], [19, 'horas ya han pasado']],
          prompt: 'Faltan ? horas',
          answer: 5,
        },
        {
          story: 'Arabela ha leído 26 páginas de un libro sobre planetas y hoy lee 15 más. ¿Cuántas páginas ha leído?',
          data: [[26, 'páginas ya ha leído'], [15, 'páginas lee hoy']],
          prompt: '? páginas',
          answer: 41,
        },
      ],
    },
  ],
};

export default rectaCalculo;
