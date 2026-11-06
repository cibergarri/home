import { clock, digital } from '../scenes';

// Mates, tema 6: las actividades del cuaderno "Con las manos en las mates": restar desagrupando
// números de 3 cifras con bloques (cambiar 1 centena por 10 decenas), hacer la prueba sumando, y
// las horas en punto, y cuarto, y media y menos cuarto en el reloj (Luis va al cine).
const take = (a, b) => ({ op: '-', a, b });
const add = (a, b) => ({ op: '+', a, b });

const NAMES = ['doce', 'una', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce'];
const READINGS = ['en punto', 'y cuarto', 'y media', 'menos cuarto'];

const said = (hours, minutes) => {
  const name = NAMES[(minutes === 45 ? hours + 1 : hours) % 12];
  return `${name === 'una' ? 'La' : 'Las'} ${name} ${READINGS[minutes / 15]}`;
};

// The clock, and its reading among two others; the right one moves place with the time.
const time = (prompt, scene, [hours, minutes], ...others) => {
  const choices = others.map(([h, m]) => said(h, m));
  choices.splice((hours + minutes / 15) % 3, 0, said(hours, minutes));
  return {
    prompt, scene, choices, answer: said(hours, minutes),
  };
};

const write = (hours, minutes) => ({ prompt: '? : ?', scene: clock(hours, minutes), answer: [hours, minutes] });

const conLasManos = {
  slug: 'con-las-manos',
  title: 'Con las manos en las mates',
  heading: 'Resta con tus bloques',
  type: 'tower',
  instructions: 'Si a las decenas de arriba no les puedes quitar las de abajo, cambia 1 centena por 10 decenas. Si pasa con las unidades, cambia 1 decena por 10 unidades.',
  questions: [
    { op: '-', a: 326, b: 152, story: 'A 326 quítale 1 centena, 5 decenas y 2 unidades. ¿Qué queda?' },
    take(456, 237), take(338, 165), take(562, 324), take(465, 173), take(527, 143), take(400, 320),
  ],
  more: [
    {
      title: 'Prepara el número',
      type: 'numbers',
      write: true,
      instructions: 'Cambia 1 centena por 10 decenas, como con tus bloques. Pulsa ✓ después de cada número.',
      questions: [
        { story: '326 son 3 C, 2 D y 6 U. Cambia 1 centena por 10 decenas.', prompt: '326 = ? C + ? D + ? U', answer: [2, 12, 6] },
        { story: '465 son 4 C, 6 D y 5 U. Cambia 1 centena por 10 decenas.', prompt: '465 = ? C + ? D + ? U', answer: [3, 16, 5] },
        { story: '338 son 3 C, 3 D y 8 U. Cambia 1 centena por 10 decenas.', prompt: '338 = ? C + ? D + ? U', answer: [2, 13, 8] },
        { story: '527 son 5 C, 2 D y 7 U. Cambia 1 centena por 10 decenas.', prompt: '527 = ? C + ? D + ? U', answer: [4, 12, 7] },
        { story: 'Ahora a 326 ya le puedes quitar 152.', prompt: '326 - 152 = ?', answer: 174 },
        { story: 'Y a 465 ya le puedes quitar 173.', prompt: '465 - 173 = ?', answer: 292 },
      ],
    },
    {
      title: 'Haz la prueba',
      type: 'blocks',
      instructions: 'Al resultado de la resta súmale lo que le quitaste. Haz los cambios necesarios. ¿Te vuelve a salir el número del principio?',
      questions: [add(174, 152), add(292, 173), add(384, 143), add(80, 320)],
    },
    {
      title: '¿Qué hora es?',
      type: 'quiz',
      instructions: 'La aguja larga marca los minutos. En el 12 es en punto, en el 3 y cuarto, en el 6 y media y en el 9 menos cuarto.',
      questions: [
        time('La aguja larga está en el 12. ¿Qué hora es?', clock(7, 0), [7, 0], [7, 30], [12, 0]),
        time('Ahora la aguja larga está en el 3. ¿Qué hora es?', clock(7, 15), [7, 15], [7, 45], [3, 0]),
        time('La aguja larga ha bajado hasta el 6. ¿Qué hora es?', clock(7, 30), [7, 30], [6, 30], [7, 15]),
        time('Y si la aguja larga está en el 9, ¿qué hora es?', clock(7, 45), [7, 45], [7, 15], [6, 45]),
        time('¿Qué hora marca este reloj?', clock(2, 45), [2, 45], [2, 15], [9, 0]),
        time('¿Y este otro?', clock(5, 15), [5, 15], [3, 0], [5, 45]),
        time('¿Qué hora marca el reloj digital?', digital(10, 30), [10, 30], [10, 0], [9, 30]),
        time('¿Y este reloj digital?', digital(9, 45), [9, 45], [9, 15], [10, 45]),
        time('¿Qué hora es en este reloj digital?', digital(12, 0), [12, 0], [12, 30], [11, 0]),
      ],
    },
    {
      title: 'Luis va al cine',
      type: 'numbers',
      write: true,
      instructions: 'Escribe la hora como en un reloj digital: primero las horas y después los minutos. Pulsa ✓ después de cada número.',
      questions: [
        write(11, 45), write(4, 15), write(3, 45), write(5, 30),
        { story: 'Luis y sus padres entran al cine a las 4 y 45. La película dura 2 horas. ¿A qué hora salen?', prompt: '? : ?', scene: digital(4, 45), answer: [6, 45] },
        { story: 'Salen a las 6 y 45 y tardan un cuarto de hora en llegar a casa. ¿A qué hora llegan?', prompt: '? : ?', scene: clock(6, 45), answer: [7, 0] },
      ],
    },
  ],
};

export default conLasManos;
