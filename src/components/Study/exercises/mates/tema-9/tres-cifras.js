import { blocks, numberLine } from '../scenes';

// Mates, tema 9: números de 3 cifras. Descomponer, el anterior y el posterior de 10 en 10,
// ordenar con > y <, aproximar a la decena y a la centena, y leer los números.
const split = n => ({
  prompt: `${n} = ? C + ? D + ? U`,
  scene: blocks(Math.floor(n / 10) % 10, n % 10, Math.floor(n / 100)),
  answer: [Math.floor(n / 100), Math.floor(n / 10) % 10, n % 10],
});

const tens = n => ({ prompt: `${n} - 10 = ?   ${n} + 10 = ?`, answer: [n - 10, n + 10] });

const tresCifras = {
  slug: 'tres-cifras',
  title: 'Números de 3 cifras',
  heading: 'Descompón',
  type: 'numbers',
  write: true,
  instructions: 'Cuenta las centenas, las decenas y las unidades. Pulsa ✓ después de cada número.',
  questions: [split(476), split(359), split(608), split(247), split(730)],
  more: [
    {
      title: 'Anterior y posterior de 10 en 10',
      type: 'numbers',
      write: true,
      instructions: 'Resta 10 para el anterior y suma 10 para el posterior: solo cambian las decenas.',
      questions: [tens(476), tens(359), tens(812), tens(245), tens(631)],
    },
    {
      title: 'Ordena y compara',
      type: 'quiz',
      instructions: 'Compara primero las centenas, después las decenas y al final las unidades.',
      questions: [
        { prompt: 'Ordena de mayor a menor: 987, 879 y 978', say: false, choices: ['987 > 978 > 879', '978 > 987 > 879', '879 > 978 > 987'], answer: '987 > 978 > 879' },
        { prompt: '978  …  879', say: false, choices: ['>', '<', '='], answer: '>' },
        { prompt: '712  …  721', say: false, choices: ['>', '<', '='], answer: '<' },
        { prompt: '¿Qué número es el mayor?', choices: ['379', '712', '397'], answer: '712' },
        { prompt: '¿Qué número es par?', choices: ['379', '712', '247'], answer: '712' },
      ],
    },
    {
      title: '¿A cuántos metros vive Bea?',
      type: 'numbers',
      write: true,
      instructions: 'Luis vive a 676 metros de Bea. Aproxima esa distancia.',
      questions: [
        { story: 'Aproxima 676 a la decena.', prompt: '? metros', scene: numberLine(660, 690, 676), answer: 680 },
        { story: 'Ahora aproxima 676 a la centena.', prompt: '? metros', answer: 700 },
        { story: 'Aproxima 247 a la decena.', prompt: '?', answer: 250 },
        { story: 'Aproxima 247 a la centena.', prompt: '?', answer: 200 },
      ],
    },
    {
      title: 'Cuenta de 5 en 5',
      type: 'numbers',
      write: true,
      instructions: 'Continúa la serie de años hasta llegar al 90.',
      questions: [{ prompt: '65, 70, ?, ?, ?, 90', answer: [75, 80, 85] }],
    },
    {
      title: 'Números en letras',
      type: 'match',
      instructions: 'Toca un número y después cómo se escribe.',
      columns: ['Número', 'En letras'],
      pairs: [
        { id: '987', en: '987', es: 'novecientos ochenta y siete' },
        { id: '879', en: '879', es: 'ochocientos setenta y nueve' },
        { id: '978', en: '978', es: 'novecientos setenta y ocho' },
        { id: '676', en: '676', es: 'seiscientos setenta y seis' },
        { id: '379', en: '379', es: 'trescientos setenta y nueve' },
        { id: '712', en: '712', es: 'setecientos doce' },
        { id: '503', en: '503', es: 'quinientos tres' },
      ],
    },
  ],
};

export default tresCifras;
