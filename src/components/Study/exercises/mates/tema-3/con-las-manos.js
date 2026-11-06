import { blocks, shapes } from '../scenes';

// Mates, tema 3: el cuaderno «Con las manos en las mates», páginas 14 a 19: sumar y restar números
// de 3 cifras con los bloques, haciendo cambios al sumar, restar en dos pasos, y las piezas del
// tangram. Los números de 3 cifras de las páginas 12 y 13 ya están en «Números de 3 cifras», en el
// tema 2.
const add = (a, b) => ({ op: '+', a, b });
const take = (a, b) => ({ op: '-', a, b });
const digits = n => [Math.floor(n / 100), Math.floor(n / 10) % 10, n % 10];

// Página 15: juntar los bloques de una suma, y después cambiar 10 cubos por 1 barra (o 10 barras
// por 1 placa).
const regroup = (a, b) => {
  const [h1, t1, u1] = digits(a);
  const [h2, t2, u2] = digits(b);
  const [h, t, u] = digits(a + b);
  return {
    story: `Suma ${a} + ${b} con tus bloques. Primero junta las piezas iguales; después haz los cambios.`,
    prompt: 'Al juntar: ? C, ? D y ? U.   Al cambiar: ? C, ? D y ? U.',
    answer: [h1 + h2, t1 + t2, u1 + u2, h, t, u],
  };
};

// Página 17: restar en dos pasos, primero las centenas y después lo demás.
const inTwoSteps = (a, b) => {
  const hundreds = Math.floor(b / 100) * 100;
  return {
    story: `Resta ${a} - ${b} en dos pasos: primero quita ${hundreds} y después ${b - hundreds}.`,
    prompt: `${a} - ${hundreds} = ?   ? - ${b - hundreds} = ?`,
    answer: [a - hundreds, a - hundreds, a - b],
  };
};

const TANGRAM = shapes('triangulo', 'triangulo', 'triangulo', 'triangulo', 'triangulo', 'cuadrado');

const conLasManos = {
  slug: 'con-las-manos',
  title: 'Con las manos en las mates',
  heading: 'Suma con tus bloques',
  type: 'blocks',
  instructions: 'Representa el primer número y añádele el segundo: las placas con las placas, las barras con las barras y los cubos con los cubos.',
  questions: [add(326, 201), add(215, 321), add(54, 513), add(502, 123), add(424, 170)],
  more: [
    {
      title: '¿Puedes hacer cambios?',
      type: 'numbers',
      write: true,
      instructions: 'Si tienes 10 cubos o más, cambia 10 cubos por 1 barra. Si tienes 10 barras o más, cambia 10 barras por 1 placa. Pulsa ✓ después de cada número.',
      questions: [regroup(325, 36), regroup(242, 175), regroup(145, 236), regroup(131, 287), regroup(218, 154)],
    },
    {
      title: 'Resta con tus bloques',
      type: 'blocks',
      instructions: 'Representa el primer número y tacha lo que quitas: las placas, las barras y los cubos.',
      questions: [
        take(325, 213), take(458, 134), take(536, 324), take(447, 107), take(536, 315), take(489, 88),
        take(706, 606), take(492, 351),
      ],
    },
    {
      title: 'Resta en dos pasos',
      type: 'numbers',
      write: true,
      instructions: 'Primero quita las centenas. Después, a lo que te ha quedado, quítale las decenas y las unidades. Pulsa ✓ después de cada número.',
      questions: [inTwoSteps(436, 124), inTwoSteps(568, 235), inTwoSteps(759, 317), inTwoSteps(684, 452), inTwoSteps(397, 186)],
    },
    {
      title: 'Las piezas del tangram',
      type: 'quiz',
      instructions: 'El tangram es un puzle chino de 7 piezas: 2 triángulos grandes, 1 mediano, 2 pequeños, 1 cuadrado y 1 romboide.',
      questions: [
        { prompt: '¿Cuántos triángulos tiene el tangram?', scene: TANGRAM, choices: ['3', '5', '7'], answer: '5' },
        {
          prompt: '¿Cuántas piezas tienen 4 lados y 4 vértices?', choices: ['1', '2', '5'], answer: '2',
        },
        {
          prompt: 'De las piezas de 4 lados, ¿cuántas son cuadrados?', scene: shapes('cuadrado'), choices: ['1', '2', 'Ninguna'], answer: '1',
        },
        {
          prompt: '¿Qué dos piezas forman un cuadrado como el del tangram?',
          choices: ['Los 2 triángulos pequeños', 'Los 2 triángulos grandes', 'El cuadrado y el romboide'],
          answer: 'Los 2 triángulos pequeños',
        },
        {
          prompt: '¿Qué dos piezas forman un triángulo como el mediano?',
          choices: ['Los 2 triángulos pequeños', 'El cuadrado y un triángulo grande', 'El romboide y el cuadrado'],
          answer: 'Los 2 triángulos pequeños',
        },
        {
          prompt: 'Dos triángulos pequeños forman el mediano. ¿Cuántos triángulos pequeños hacen falta para formar uno grande?',
          choices: ['2', '3', '4'],
          answer: '4',
        },
        {
          prompt: '¿Cuántas piezas usas en total si construyes una figura con todo el tangram?', choices: ['5', '7', '10'], answer: '7',
        },
      ],
    },
  ],
};

export default conLasManos;
