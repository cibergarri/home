import { blocks } from '../scenes';

// Mates, tema 2: el cuaderno «Con las manos en las mates», páginas 8 y 9: la centena con los
// bloques (10 cubos son 1 barra, 10 barras son 1 placa) y los números de más de 100 con el menor
// número de piezas. Lo demás de estas páginas ya está en «Números hasta 199» (página 9) y en
// «Monedas y billetes» (páginas 10 y 11).
const add = (a, b) => ({ op: '+', a, b });

// Página 9: un número de 3 cifras en bloques, en centenas, decenas y unidades.
const breakDown = n => {
  const [h, t, u] = [Math.floor(n / 100), Math.floor(n / 10) % 10, n % 10];
  return {
    story: '¿Qué número es? Descomponlo.',
    prompt: `${n} = ? C + ? D + ? U = ? + ? + ?`,
    scene: blocks(t, u, h),
    answer: [h, t, u, h * 100, t * 10, u],
  };
};

const conLasManos = {
  slug: 'con-las-manos',
  title: 'Con las manos en las mates',
  heading: 'La centena',
  type: 'quiz',
  instructions: 'Piensa en tus bloques: el cubo azul es 1 unidad, la barra roja 1 decena y la placa verde 1 centena.',
  questions: [
    {
      prompt: 'Pones 10 cubos azules en fila. ¿Por qué pieza los puedes cambiar?',
      scene: blocks(0, 10),
      choices: ['Por 1 barra roja', 'Por 1 placa verde', 'No se pueden cambiar'],
      answer: 'Por 1 barra roja',
    },
    {
      prompt: 'Juntas 10 barras rojas formando un cuadrado. ¿Por qué pieza las puedes cambiar?',
      scene: blocks(10, 0),
      choices: ['Por 1 barra roja', 'Por 1 placa verde', 'No se pueden cambiar'],
      answer: 'Por 1 placa verde',
    },
    {
      prompt: '¿Cuántos cubos azules caben en una placa verde?',
      choices: ['10', '100', '1000'],
      answer: '100',
    },
    {
      prompt: 'Si a 9 unidades le añado 1 unidad, tengo una…',
      choices: ['decena', 'centena'],
      answer: 'decena',
    },
    {
      prompt: 'Si a 99 unidades le añado 1 unidad, tengo una…',
      choices: ['decena', 'centena'],
      answer: 'centena',
    },
    {
      prompt: 'Si a 9 decenas le añado 1 decena, tengo una…',
      choices: ['decena', 'centena'],
      answer: 'centena',
    },
    {
      prompt: '¿Qué es lo mismo que 1 centena?',
      choices: ['10 unidades', '10 decenas', '100 decenas'],
      answer: '10 decenas',
    },
  ],
  more: [
    {
      title: 'Representa con bloques',
      type: 'blocks',
      instructions: 'Junta 1 placa verde con las barras y los cubos, y dibuja el número con el menor número de piezas.',
      questions: [add(100, 32), add(100, 63), add(100, 45), add(100, 28), add(100, 70)],
    },
    {
      title: 'Descompón el número',
      type: 'numbers',
      write: true,
      instructions: 'Cuenta las placas, las barras y los cubos. Pulsa ✓ después de cada número.',
      questions: [breakDown(132), breakDown(163), breakDown(124), breakDown(157), breakDown(181)],
    },
    {
      title: '¿Cómo se lee?',
      type: 'quiz',
      instructions: 'Primero dices las centenas, después las decenas y al final las unidades.',
      questions: [
        { prompt: '¿Cómo se lee 132?', choices: ['ciento treinta y dos', 'ciento veintitrés', 'trece dos'], answer: 'ciento treinta y dos' },
        { prompt: '¿Cómo se lee 163?', choices: ['ciento treinta y seis', 'ciento sesenta y tres', 'dieciséis tres'], answer: 'ciento sesenta y tres' },
        { prompt: '¿Cómo se lee 117?', choices: ['ciento diecisiete', 'ciento setenta y uno', 'once siete'], answer: 'ciento diecisiete' },
        { prompt: '¿Cómo se lee 150?', choices: ['ciento quince', 'ciento cincuenta', 'cincuenta y uno'], answer: 'ciento cincuenta' },
        { prompt: '¿Cómo se lee 122?', choices: ['ciento veintidós', 'ciento doce', 'ciento veinte'], answer: 'ciento veintidós' },
      ],
    },
  ],
};

export default conLasManos;
