import { blocks, numberLine } from '../scenes';

// Mates, tema 5: el número anterior (el que va justo antes) y el posterior (el que va justo
// después), con bloques, en la recta y en una tabla, como las taquillas de Teo, Lena y Mica.
const around = (n, scene) => ({ prompt: `? va antes del ${n}   ? va después del ${n}`, scene, answer: [n - 1, n + 1] });

const anteriorPosterior = {
  slug: 'anterior-posterior',
  title: 'Número anterior y posterior',
  heading: 'Las taquillas',
  type: 'numbers',
  write: true,
  instructions: 'El número anterior es el que va justo antes. El posterior es el que va justo después. Pulsa ✓ después de cada número.',
  questions: [
    {
      story: 'La taquilla de Teo es la 129. La de Lena es la anterior y la de Mica es la posterior. ¿Qué números tienen?',
      prompt: 'Lena: ?   Mica: ?',
      scene: blocks(2, 9, 1),
      answer: [128, 130],
    },
    around(126, blocks(2, 6, 1)),
    around(214, blocks(1, 4, 2)),
    around(190, blocks(9, 0, 1)),
    around(249, blocks(4, 9, 2)),
  ],
  more: [
    {
      title: 'En la recta',
      type: 'numbers',
      write: true,
      instructions: 'Busca el número en la recta. Su anterior está a la izquierda y su posterior, a la derecha.',
      questions: [
        { story: '¿Qué número es el anterior a 345?', prompt: '?', scene: numberLine(340, 350, 345), answer: 344 },
        { story: '¿Qué número es el anterior a 341?', prompt: '?', scene: numberLine(340, 350, 341), answer: 340 },
        { story: '¿Qué número es el posterior a 349?', prompt: '?', scene: numberLine(340, 350, 349), answer: 350 },
        { story: '¿Qué número es el posterior a 343?', prompt: '?', scene: numberLine(340, 350, 343), answer: 344 },
      ],
    },
    {
      title: 'Completa la tabla',
      type: 'numbers',
      write: true,
      instructions: 'Escribe el anterior, el número y el posterior. Pulsa ✓ después de cada número.',
      questions: [
        { prompt: '125, 126, ?', answer: 127 },
        { prompt: '?, 570, ?', answer: [569, 571] },
        { prompt: '?, ?, 810', answer: [808, 809] },
        { prompt: '?, 609, ?', answer: [608, 610] },
        { prompt: '?, 500, ?', answer: [499, 501] },
        { prompt: '?, 400, ?', answer: [399, 401] },
      ],
    },
    {
      title: 'Adivina el número',
      type: 'numbers',
      write: true,
      instructions: 'Lee la pista y piensa. Primero calcula el número de la pista.',
      questions: [
        { story: 'Es el anterior a 200 + 50.', prompt: '?', answer: 249 },
        { story: 'Es el posterior a 5 C y 6 D.', prompt: '?', answer: 561 },
        { story: 'Mi número posterior es el 273. ¿Cuál es mi número?', prompt: '?', answer: 272 },
        { story: 'Mi número posterior es el 273. ¿Cuál es mi número anterior?', prompt: '?', answer: 271 },
        { story: 'Es el anterior a 3 C.', prompt: '?', answer: 299 },
      ],
    },
  ],
};

export default anteriorPosterior;
