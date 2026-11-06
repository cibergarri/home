// Mates, tema 7: las actividades del cuaderno "Con las manos en las mates": restar desagrupando
// dos veces, cambiando 1 decena por 10 unidades y después 1 centena por 10 decenas (342 - 164 y
// 331 - 134), con bloques y en torre, y haciendo la prueba.
const take = (a, b) => ({ op: '-', a, b });
const add = (a, b) => ({ op: '+', a, b });

const BOTH = 'Las dos cosas';
const TEN = '1 decena por 10 unidades';
const HUNDRED = '1 centena por 10 decenas';
const NOTHING = 'Nada';
const CHOICES = [TEN, HUNDRED, BOTH, NOTHING];

const change = (a, b, answer) => ({ prompt: `${a} - ${b}`, say: `${a} menos ${b}`, choices: CHOICES, answer });

const conLasManos = {
  slug: 'con-las-manos',
  title: 'Con las manos en las mates',
  heading: 'Prepara el 342',
  type: 'numbers',
  write: true,
  instructions: 'Vas a quitarle 164 a 342. Haz los cambios como con tus bloques. Pulsa ✓ después de cada número.',
  questions: [
    { story: 'No puedes quitar 4 unidades. Cambia 1 decena por 10 unidades.', prompt: '342 = 3 C + 3 D + ? U', answer: 12 },
    { story: 'Ahora no puedes quitar 6 decenas. Cambia 1 centena por 10 decenas.', prompt: '342 = 2 C + ? D + 12 U', answer: 13 },
    { story: 'Ya puedes quitar 1 C, 6 D y 4 U. ¿Cuánto queda?', prompt: '342 - 164 = ?', answer: 178 },
    { story: 'Comprueba: suma lo que te queda y lo que quitaste.', prompt: '178 + 164 = ?', answer: 342 },
    { story: 'Ahora le quitas 134 a 331. Cambia 1 decena por 10 unidades.', prompt: '331 = 3 C + 2 D + ? U', answer: 11 },
    { story: 'Cambia 1 centena por 10 decenas.', prompt: '331 = 2 C + ? D + 11 U', answer: 12 },
    { story: 'Ya puedes restar.', prompt: '331 - 134 = ?', answer: 197 },
  ],
  more: [
    {
      title: '¿Qué tienes que cambiar?',
      type: 'quiz',
      instructions: 'Mira primero las unidades y después las decenas.',
      questions: [
        change(342, 164, BOTH),
        change(435, 368, BOTH),
        change(456, 237, TEN),
        change(562, 391, HUNDRED),
        change(789, 456, NOTHING),
        change(723, 675, BOTH),
      ],
    },
    {
      title: 'Resta en torre',
      type: 'tower',
      instructions: 'Si no puedes quitar las unidades, cambia 1 decena por 10 unidades. Si después no puedes quitar las decenas, cambia 1 centena por 10 decenas.',
      questions: [take(331, 134), take(435, 368), take(523, 136), take(321, 229), take(723, 675), take(433, 368), take(940, 876)],
    },
    {
      title: 'Haz la prueba',
      type: 'blocks',
      instructions: 'Suma con tus bloques el resultado y lo que quitaste. Te tiene que salir el número de arriba de la resta.',
      questions: [add(67, 368), add(387, 136), add(92, 229), add(48, 675)],
    },
  ],
};

export default conLasManos;
