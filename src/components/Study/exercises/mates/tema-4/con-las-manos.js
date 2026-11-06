import { blocks, clock } from '../scenes';

// Mates, tema 4: el cuaderno «Con las manos en las mates», páginas 20 a 25: restar desagrupando
// con los bloques (si no puedes quitar las unidades, cambia 1 decena por 10 unidades), la resta en
// torre con su prueba, y el reloj: en punto, y cuarto, y media y menos cuarto.
const tensOf = n => Math.floor(n / 10);
const take = (a, b) => ({ op: '-', a, b });

// Páginas 20 y 21: el número en bloques, cambiado para poder quitar las unidades.
const swap = (a, b) => ({
  story: `Calcula ${a} - ${b}. ¿Puedes quitar ${b} unidades a ${a}? Cambia 1 decena por 10 unidades.`,
  prompt: `Al cambiar: ? D y ? U.   ${a} - ${b} = ?`,
  scene: blocks(tensOf(a), a % 10),
  answer: [tensOf(a) - 1, (a % 10) + 10, a - b],
});

// Página 23: la resta y su prueba, sumar lo que queda y lo que se quitó.
const check = (a, b) => ({
  prompt: `${a} - ${b} = ?   Prueba: ? + ${b} = ?`,
  answer: [a - b, a - b, a],
});

const HOURS = ['una', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce'];

// How the time on a clock with hands is said: «Las diez y cuarto», «Las once menos cuarto».
const said = (hours, minutes) => {
  const hour = minutes === 45 ? (hours % 12) + 1 : hours;
  const article = hour === 1 ? 'La' : 'Las';
  const word = HOURS[hour - 1];
  return {
    0: `${article} ${word} en punto`,
    15: `${article} ${word} y cuarto`,
    30: `${article} ${word} y media`,
    45: `${article} ${word} menos cuarto`,
  }[minutes];
};

const read = (prompt, hours, minutes, others) => ({
  prompt,
  scene: clock(hours, minutes),
  choices: [[hours, minutes], ...others].sort(([h1, m1], [h2, m2]) => h1 * 60 + m1 - (h2 * 60 + m2))
    .map(([h, m]) => said(h, m)),
  answer: said(hours, minutes),
});

const HANDS = ['Al 12', 'Al 3', 'Al 6', 'Al 9'];

const conLasManos = {
  slug: 'con-las-manos',
  title: 'Con las manos en las mates',
  heading: 'Cambia 1 decena por 10 unidades',
  type: 'numbers',
  write: true,
  instructions: 'Si no puedes quitar las unidades, transforma 1 barra roja en 10 cubos azules. Ahora sí puedes. Pulsa ✓ después de cada número.',
  questions: [
    {
      story: 'Una barra roja es 1 decena. ¿Puedes quitarle 3 unidades? Transfórmala en 10 cubos.',
      prompt: '1 D = ? U.   10 - 3 = ?',
      scene: blocks(1, 0),
      answer: [10, 7],
    },
    swap(23, 7), swap(42, 5), swap(37, 9), swap(31, 6), swap(43, 7),
  ],
  more: [
    {
      title: 'Resta en torre',
      type: 'tower',
      instructions: 'Coloca la resta. Si arriba hay menos unidades que abajo, convierte 1 decena en 10 unidades y resta.',
      questions: [take(32, 6), take(35, 7), take(68, 9), take(52, 4), take(73, 5), take(91, 2), take(36, 8)],
    },
    {
      title: 'Haz la prueba',
      type: 'numbers',
      write: true,
      instructions: 'Resta. Después suma lo que te queda y lo que quitaste: tiene que darte el primer número. Pulsa ✓ después de cada número.',
      questions: [check(52, 4), check(73, 5), check(91, 2), check(36, 8), check(64, 17)],
    },
    {
      title: 'El reloj',
      type: 'quiz',
      instructions: 'La aguja corta señala las horas y la larga los minutos: arriba es en punto, a la derecha y cuarto, abajo y media, y a la izquierda menos cuarto.',
      questions: [
        read('¿Qué hora es en este reloj?', 10, 0, [[10, 30], [12, 0]]),
        read('¿Y en este?', 10, 15, [[10, 45], [3, 0]]),
        read('¿Qué hora marca ahora?', 10, 30, [[6, 0], [10, 0]]),
        read('¿Y ahora?', 10, 45, [[9, 45], [10, 15]]),
        read('¿Qué hora es aquí?', 7, 30, [[6, 30], [7, 0]]),
        read('¿Y aquí?', 7, 15, [[3, 0], [7, 45]]),
        read('¿Qué hora marca este reloj?', 3, 45, [[3, 15], [2, 45]]),
      ],
    },
    {
      title: 'Las agujas',
      type: 'quiz',
      instructions: 'Imagina que mueves las agujas de tu reloj. La aguja corta avanza poco a poco de un número al siguiente.',
      questions: [
        {
          prompt: 'Son las 4 y media. ¿A dónde señala la aguja de las horas?',
          scene: clock(4, 30),
          choices: ['Al 4', 'Entre el 4 y el 5', 'Al 5'],
          answer: 'Entre el 4 y el 5',
        },
        {
          prompt: 'Son las 5 menos cuarto. ¿Dónde está la aguja de las horas?',
          scene: clock(4, 45),
          choices: ['Más cerca del 4 que del 5', 'Más cerca del 5 que del 4', 'Justo en el 5'],
          answer: 'Más cerca del 5 que del 4',
        },
        { prompt: 'Para marcar las 6 y media, ¿a dónde pones la aguja larga?', choices: HANDS, answer: 'Al 6' },
        { prompt: 'Para marcar las 2 y cuarto, ¿a dónde pones la aguja larga?', choices: HANDS, answer: 'Al 3' },
        { prompt: 'Para marcar las 4 menos cuarto, ¿a dónde pones la aguja larga?', choices: HANDS, answer: 'Al 9' },
        {
          prompt: 'Y para las 4 menos cuarto, ¿dónde pones la aguja corta?',
          choices: ['Entre el 3 y el 4', 'Entre el 4 y el 5', 'Justo en el 4'],
          answer: 'Entre el 3 y el 4',
        },
        {
          prompt: 'Ana sale del colegio a las 5 menos cuarto y tarda un cuarto de hora en llegar a casa. ¿A qué hora llega?',
          scene: clock(4, 45),
          choices: [said(4, 30), said(5, 0), said(5, 15)],
          answer: said(5, 0),
        },
      ],
    },
  ],
};

export default conLasManos;
