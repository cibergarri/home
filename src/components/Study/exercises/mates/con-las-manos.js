import { blocks } from './scenes';

// Mates, tema 1: el cuaderno «Con las manos en las mates», páginas 2 a 7. Lo que Julia hace con
// sus bloques, en la tableta: la decena, los números de 2 cifras con el menor número de bloques,
// sumar por partes y con bloques, restar tachando bloques, y añadir y quitar.
const tensOf = n => Math.floor(n / 10);

// Página 2: cuántos cubos faltan para completar una decena.
const toTen = ones => ({
  story: `Hay ${ones} cubos azules. ¿Cuántos faltan para completar una decena?`,
  prompt: `${ones} + ? = 10`,
  scene: blocks(0, ones),
  answer: 10 - ones,
});

// Página 3: un número con el menor número de bloques, en decenas y unidades.
const fewest = n => ({
  story: `Representa ${n} con el menor número de bloques.`,
  prompt: `${n} = ? D + ? U`,
  scene: blocks(tensOf(n), n % 10),
  answer: [tensOf(n), n % 10],
});

// Página 3: cubos sueltos, en grupos de 10.
const group = n => ({
  story: `Tienes ${n} cubos azules sueltos. Haz grupos de 10: cada grupo es una barra roja.`,
  prompt: `${n} cubos = ? D + ? U`,
  answer: [tensOf(n), n % 10],
});

// Páginas 4 y 5: sumar por partes, las decenas con las decenas y las unidades con las unidades.
const byParts = (a, b) => ({
  story: `Suma ${a} + ${b}: junta las decenas y junta las unidades.`,
  prompt: `${a} + ${b} = ? + ? = ?`,
  answer: [(tensOf(a) + tensOf(b)) * 10, (a % 10) + (b % 10), a + b],
});

const add = (a, b) => ({ op: '+', a, b });

// Página 6: el número en bloques, lo que se tacha y lo que queda.
const crossOut = (a, b) => ({
  story: `Está representado el número ${a}. Tacho ${tensOf(b)} D y ${b % 10} U.`,
  prompt: `Quedan ? D y ? U.   ${a} - ${b} = ?`,
  scene: blocks(tensOf(a), a % 10),
  answer: [tensOf(a - b), (a - b) % 10, a - b],
});

const conLasManos = {
  slug: 'con-las-manos',
  title: 'Con las manos en las mates',
  heading: 'La decena',
  type: 'numbers',
  write: true,
  instructions: 'Una barra roja es tan larga como 10 cubos azules: 10 unidades son 1 decena, 10 U = 1 D.',
  questions: [
    { story: '¿Cuántos cubos azules juntos son tan largos como 1 barra roja?', prompt: '? cubos', answer: 10 },
    { prompt: '10 U = ? D', answer: 1 },
    toTen(5), toTen(4), toTen(6), toTen(3), toTen(8), toTen(2), toTen(9),
  ],
  more: [
    {
      title: 'Números de 2 cifras',
      type: 'numbers',
      write: true,
      instructions: 'Cada barra roja es una decena y cada cubo azul una unidad. Pulsa ✓ después de cada número.',
      questions: [
        { prompt: '34 = 10 + 10 + 10 + ?', scene: blocks(3, 4), answer: 4 },
        fewest(29), fewest(12), fewest(47),
        group(24), group(31), group(18),
      ],
    },
    {
      title: 'Suma por partes',
      type: 'numbers',
      write: true,
      instructions: 'Como en 25 + 43 = 60 + 8 = 68: primero las decenas, después las unidades y al final júntalo todo. Pulsa ✓ después de cada número.',
      questions: [byParts(51, 14), byParts(32, 23), byParts(17, 25), byParts(39, 46), byParts(26, 38)],
    },
    {
      title: 'Suma con tus bloques',
      type: 'blocks',
      instructions: 'Dibuja la suma con barras y cubos. Si juntas 10 cubos, cámbialos por 1 barra.',
      questions: [add(32, 27), add(45, 11), add(15, 26), add(18, 35), add(33, 59), add(64, 27)],
    },
    {
      title: 'Tacha y resta',
      type: 'numbers',
      write: true,
      instructions: 'Mira los bloques, piensa en los que tachas y cuenta los que quedan. Pulsa ✓ después de cada número.',
      questions: [
        crossOut(57, 34), crossOut(46, 25), crossOut(38, 16), crossOut(69, 22),
        { story: 'Representa 85, quita 43 y añade 21. ¿A qué número llegas?', prompt: '85 - 43 + 21 = ?', answer: 63 },
        { story: 'Representa 12, añade 27 y quita 33. ¿A qué número llegas?', prompt: '12 + 27 - 33 = ?', answer: 6 },
        { story: 'Representa 50, quita 20 y añade 14. ¿A qué número llegas?', prompt: '50 - 20 + 14 = ?', answer: 44 },
      ],
    },
  ],
};

export default conLasManos;
