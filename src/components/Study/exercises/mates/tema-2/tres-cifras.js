import { blocks } from '../scenes';

// Mates, tema 2: números de 3 cifras, más allá del 199 (cuaderno, páginas 12 y 13): centenas,
// decenas y unidades en bloques, cuántas placas hacen falta y el valor de cada cifra.
const build = (hundreds, tens, ones) => ({
  story: '¿Qué número es?',
  prompt: '? C + ? D + ? U = ?',
  scene: blocks(tens, ones, hundreds),
  answer: [hundreds, tens, ones, hundreds * 100 + tens * 10 + ones],
});

// Página 13: tres placas, y unas unidades o unas decenas.
const threeHundred = (tens, ones) => ({
  prompt: '3 C + ? D + ? U = 300 + ? + ? = ?',
  scene: blocks(tens, ones, 3),
  answer: [tens, ones, tens * 10, ones, 300 + tens * 10 + ones],
});

const tresCifras = {
  slug: 'tres-cifras',
  title: 'Números de 3 cifras',
  heading: 'Construye números de 3 cifras',
  type: 'numbers',
  write: true,
  instructions: 'Cuenta las placas (centenas), las barras (decenas) y los cubos (unidades). Pulsa ✓ después de cada número.',
  questions: [build(3, 2, 5), build(5, 1, 7), build(2, 4, 0), build(4, 0, 6), build(6, 3, 1)],
  more: [
    {
      title: 'Fíjate en estos números',
      type: 'numbers',
      write: true,
      instructions: 'Los dos tienen 3 centenas. ¿En qué se diferencian?',
      questions: [threeHundred(0, 5), threeHundred(5, 0), threeHundred(0, 8), threeHundred(8, 0)],
    },
    {
      title: '¿Cuántos bloques necesito?',
      type: 'numbers',
      write: true,
      instructions: 'Usa el menor número de bloques: 1 placa verde son 10 barras rojas, o 100 cubos azules.',
      questions: [
        { story: '¿Cuántas placas verdes necesito para representar 200?', prompt: '? placas', answer: 2 },
        { story: '¿Y cuántas barras rojas necesito para representar 200?', prompt: '? barras', answer: 20 },
        { prompt: '200 U = ? D = ? C', answer: [20, 2] },
        { story: '¿Cuántas placas verdes necesito para representar 600?', prompt: '? placas', answer: 6 },
        { prompt: '600 U = ? D = ? C', answer: [60, 6] },
        { prompt: '400 U = ? D = ? C', answer: [40, 4] },
      ],
    },
    {
      title: '¿Qué valor tiene la cifra?',
      type: 'quiz',
      instructions: 'Una cifra vale más cuanto más a la izquierda está: centenas, decenas, unidades.',
      questions: [
        { prompt: 'En el 204, ¿cuánto vale el 4?', choices: ['4', '40', '400'], answer: '4' },
        { prompt: 'En el 240, ¿cuánto vale el 4?', choices: ['4', '40', '400'], answer: '40' },
        { prompt: 'En el 420, ¿cuánto vale el 4?', choices: ['4', '40', '400'], answer: '400' },
        { prompt: '¿Cuál es mayor?', choices: ['305', '350'], answer: '350' },
        { prompt: '¿Cuál es mayor?', choices: ['508', '580'], answer: '580' },
        { prompt: '¿Cómo se lee el 325?', choices: ['trescientos veinticinco', 'treinta y dos cinco', 'trescientos cincuenta y dos'], answer: 'trescientos veinticinco' },
      ],
    },
  ],
};

export default tresCifras;
