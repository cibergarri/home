import { blocks } from '../scenes';

// Mates, tema 4: restar desagrupando, preparando la resta. Si a las unidades de arriba no se les
// pueden quitar las de abajo, se cambia 1 decena por 10 unidades: 12 - 7, 1 D y 2 U son 12 U.
const take = (a, b) => ({ op: '-', a, b });

// Con bloques: el minuendo en barras y cubos, y cuántas unidades hay al cambiar 1 decena.
const swap = (a, b) => ({
  story: `Calcula ${a} - ${b}. No puedes quitar ${b % 10} cubos de ${a % 10}: cambia 1 barra por 10 cubos.`,
  prompt: `Al cambiar hay ? barras y ? cubos.   ${a} - ${b} = ?`,
  scene: blocks(Math.floor(a / 10), a % 10),
  answer: [Math.floor(a / 10) - 1, (a % 10) + 10, a - b],
});

const desagrupar = {
  slug: 'desagrupar',
  title: 'Restar desagrupando',
  heading: 'Cambia 1 decena por 10 unidades',
  type: 'numbers',
  write: true,
  instructions: 'El pastel multicolor se hornea 12 horas y ya han pasado 7. A 2 unidades no les puedes quitar 7: cambia 1 decena por 10 unidades. Pulsa ✓ después de cada número.',
  questions: [swap(12, 7), swap(15, 8), swap(21, 7), swap(13, 5), swap(24, 6)],
  more: [
    {
      title: 'Resta en torre cambiando',
      type: 'tower',
      instructions: 'Si la cifra de arriba es menor, cambia 1 decena por 10 unidades: tacha la decena y escribe una menos.',
      questions: [take(35, 6), take(27, 9), take(31, 6), take(33, 8), take(45, 7), take(52, 17), take(64, 28)],
    },
    {
      title: '¿Hay que cambiar?',
      type: 'quiz',
      instructions: 'Solo hay que cambiar si las unidades de arriba son menores que las de abajo.',
      questions: [
        {
          prompt: '33 - 7: ¿hay que cambiar 1 decena por 10 unidades?', say: '33 menos 7: ¿hay que cambiar una decena por diez unidades?', choices: ['Sí', 'No'], answer: 'Sí',
        },
        {
          prompt: '38 - 2: ¿hay que cambiar 1 decena por 10 unidades?', say: '38 menos 2: ¿hay que cambiar una decena por diez unidades?', choices: ['Sí', 'No'], answer: 'No',
        },
        {
          prompt: '47 - 6: ¿hay que cambiar 1 decena por 10 unidades?', say: '47 menos 6: ¿hay que cambiar una decena por diez unidades?', choices: ['Sí', 'No'], answer: 'No',
        },
        {
          prompt: '45 - 7: ¿hay que cambiar 1 decena por 10 unidades?', say: '45 menos 7: ¿hay que cambiar una decena por diez unidades?', choices: ['Sí', 'No'], answer: 'Sí',
        },
        {
          prompt: '¿Por qué no hace falta cambiar en 38 - 2?',
          choices: ['Porque a 8 unidades sí le puedo quitar 2', 'Porque 38 es un número par'],
          answer: 'Porque a 8 unidades sí le puedo quitar 2',
        },
      ],
    },
    {
      title: 'Con números de 3 cifras',
      type: 'tower',
      instructions: 'Igual que antes: si no puedes restar las unidades, cambia 1 decena por 10 unidades. Si no puedes restar las decenas, cambia 1 centena por 10 decenas.',
      questions: [take(352, 128), take(471, 235), take(543, 261), take(625, 184), take(261, 151)],
    },
    {
      title: 'Problemas',
      type: 'numbers',
      write: true,
      instructions: 'Lee el problema, calcula y escribe el resultado.',
      questions: [
        {
          story: 'Lena tenía 13 arándanos. Usó 8 en su pastel multicolor. ¿Cuántos arándanos tiene ahora?',
          prompt: 'Tiene ? arándanos',
          answer: 5,
        },
        {
          story: 'El pastel multicolor necesita hornearse 12 horas. Ya han pasado 7. ¿Cuántas horas faltan?',
          prompt: 'Faltan ? horas',
          answer: 5,
        },
        {
          story: 'En la clase de Teo hay 32 lápices de colores. Se llevan 15 a otra clase. ¿Cuántos lápices quedan?',
          prompt: 'Quedan ? lápices',
          answer: 17,
        },
      ],
    },
  ],
};

export default desagrupar;
