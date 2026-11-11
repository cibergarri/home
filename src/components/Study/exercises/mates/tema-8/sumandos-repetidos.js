import { numberLine } from '../scenes';

// Mates, tema 8: sumas de sumandos repetidos. Si una cantidad se repite varias veces, se suma esa
// cantidad las veces que se indica: 3 veces 2 es 2 + 2 + 2 = 6. También saltando en la recta.
const times = (count, n) => ({
  prompt: `${count} veces ${n}:   ${Array(count).fill(n).join(' + ')} = ?`,
  answer: count * n,
});

const jumps = (count, n) => ({
  story: `Salta ${count} veces de ${n} en ${n} desde el 0. ¿A qué número llegas?`,
  prompt: `${Array(count).fill(n).join(' + ')} = ?`,
  scene: numberLine(0, 30, 0),
  answer: count * n,
});

const sumandosRepetidos = {
  slug: 'sumandos-repetidos',
  title: 'Sumas de sumandos repetidos',
  heading: 'Suma las veces que se repite',
  type: 'numbers',
  write: true,
  instructions: 'Topi compra 3 paquetes de 2 yogures: 3 veces 2 es 2 + 2 + 2 = 6 yogures. Calcula.',
  questions: [times(3, 2), times(3, 5), times(5, 3), times(4, 2), times(2, 6), times(4, 10)],
  more: [
    {
      title: 'Salta en la recta',
      type: 'numbers',
      write: true,
      instructions: 'Haz los saltos en la recta para calcular.',
      questions: [jumps(3, 3), jumps(4, 5), jumps(3, 10), jumps(5, 2), jumps(6, 3), jumps(4, 7)],
    },
    {
      title: 'Problemas',
      type: 'numbers',
      write: true,
      instructions: 'Lee el problema. ¿Qué cantidad se repite? ¿Cuántas veces?',
      questions: [
        { story: 'Mica compra 3 paquetes de 6 huevos. 🥚 ¿Cuántos huevos compra en total?', data: [[3, 'paquetes'], [6, 'huevos en cada paquete']], prompt: '? huevos', answer: 18 },
        { story: 'Lena tiene 4 bolsas con 5 canicas cada una. ¿Cuántas canicas tiene?', data: [[4, 'bolsas'], [5, 'canicas en cada bolsa']], prompt: '? canicas', answer: 20 },
        { story: 'Teo pone 2 flores en cada uno de sus 5 jarrones. 🌷 ¿Cuántas flores pone?', data: [[2, 'flores en cada jarrón'], [5, 'jarrones']], prompt: '? flores', answer: 10 },
      ],
    },
  ],
};

export default sumandosRepetidos;
