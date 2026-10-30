// Mates, tema 1: sumar decenas completas y sumar números de dos cifras: de cabeza, dibujando
// decenas y unidades, y en torre.
const sum = (a, b) => ({ prompt: `${a} + ${b} = ?`, answer: a + b });
const add = (a, b) => ({ op: '+', a, b });

const sumar = {
  slug: 'sumar',
  title: 'Sumar',
  heading: 'Sumar decenas completas',
  type: 'numbers',
  write: true, // the answer written by hand
  instructions: 'Calcula mentalmente: suma las decenas y deja las unidades. Escribe el resultado a mano y pulsa ✓.',
  questions: [sum(14, 30), sum(20, 50), sum(80, 10), sum(50, 40), sum(30, 47), sum(15, 70), sum(28, 60), sum(45, 20), sum(23, 40), sum(38, 50)],
  more: [
    {
      title: 'Sumar números de dos cifras',
      type: 'numbers',
      instructions: 'Puedes usar tus bloques o la suma en torre: si las unidades pasan de 10, cambia 10 U por 1 D.',
      questions: [sum(26, 16), sum(31, 39), sum(14, 19), sum(36, 27), sum(43, 28), sum(52, 34), sum(62, 18), sum(46, 17), sum(45, 23), sum(28, 16)],
    },
    {
      title: 'Sumar dibujando decenas y unidades',
      type: 'blocks',
      instructions: 'Dibuja la suma con barras de decenas y cubos de unidades. Si juntas 10 unidades o más, cámbialas por una decena. Después escribe el resultado.',
      questions: [add(24, 10), add(21, 11), add(35, 22), add(26, 16), add(15, 28), add(38, 14), add(29, 16), add(27, 15), add(36, 46), add(43, 28)],
    },
    {
      title: 'Sumar en torre',
      type: 'tower',
      instructions: 'Coloca la suma en torre: primero las unidades y después las decenas. Si las unidades pasan de 9, te llevas 1.',
      questions: [add(52, 34), add(36, 40), add(80, 2), add(45, 23), add(26, 16), add(62, 18), add(46, 17), add(28, 16), add(26, 14), add(63, 7)],
    },
  ],
};

export default sumar;
