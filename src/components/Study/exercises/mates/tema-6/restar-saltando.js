import { numberLine } from '../scenes';

// Mates, tema 6: cálculo mental, restar saltando hacia delante en la recta: del número pequeño al
// grande, de 10 en 10 y luego lo que falte (como hacen Mica y Lena).
const restarSaltando = {
  slug: 'restar-saltando',
  title: 'Restar saltando',
  heading: 'Salta de 10 en 10',
  type: 'numbers',
  write: true,
  instructions: 'Empieza en el número pequeño y salta de 10 en 10 hasta llegar al grande. Cuenta cuánto has saltado.',
  questions: [
    { prompt: '47 - 17 = 10 + 10 + 10 = ?', scene: numberLine(10, 50, 17), answer: 30 },
    { prompt: '82 - 52 = ?', scene: numberLine(50, 90, 52), answer: 30 },
    { prompt: '45 - 35 = ?', scene: numberLine(30, 50, 35), answer: 10 },
    { prompt: '89 - 69 = ?', scene: numberLine(60, 90, 69), answer: 20 },
    { prompt: '46 - 26 = ?', scene: numberLine(20, 50, 26), answer: 20 },
    { prompt: '49 - 19 = ?', scene: numberLine(10, 50, 19), answer: 30 },
  ],
  more: [
    {
      title: 'Salta y termina',
      type: 'numbers',
      write: true,
      instructions: 'Salta de 10 en 10 mientras puedas. Después, da un salto pequeño hasta llegar.',
      questions: [
        { prompt: '45 - 13 = 10 + 10 + 10 + 2 = ?', scene: numberLine(10, 50, 13), answer: 32 },
        { prompt: '81 - 58 = 10 + 10 + 3 = ?', scene: numberLine(50, 90, 58), answer: 23 },
        { prompt: '88 - 53 = ?', scene: numberLine(50, 90, 53), answer: 35 },
        { prompt: '63 - 36 = ?', scene: numberLine(30, 70, 36), answer: 27 },
        { prompt: '79 - 51 = ?', scene: numberLine(50, 80, 51), answer: 28 },
        { prompt: '65 - 47 = ?', scene: numberLine(40, 70, 47), answer: 18 },
        { prompt: '68 - 39 = ?', scene: numberLine(30, 70, 39), answer: 29 },
      ],
    },
    {
      title: 'Saltos grandes',
      type: 'numbers',
      write: true,
      instructions: 'Con números grandes, salta de 100 en 100. ¡Es más rápido!',
      questions: [
        { prompt: '830 - 630 = 100 + 100 = ?', answer: 200 },
        { prompt: '750 - 450 = ?', answer: 300 },
        { story: 'En un día de verano en Sevilla hay 37 ºC por el día y 24 ºC por la noche. ¿Cuántos grados más hay por el día?', prompt: 'Hay ? grados más.', answer: 13 },
      ],
    },
  ],
};

export default restarSaltando;
