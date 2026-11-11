import { blocks, shapes } from '../scenes';

// Mates, tema 8: el doble y la mitad. Para calcular el doble se multiplica por 2: el doble de 3 es
// 3 + 3 = 6. La mitad es cada una de las dos partes iguales: la mitad de 8 es 4.
const double = n => ({ prompt: `Doble de ${n}:   2 × ${n} = ${n} + ${n} = ?`, answer: 2 * n });

const half = n => ({ prompt: `La mitad de ${n} es ?`, scene: blocks(Math.floor(n / 10), n % 10), answer: n / 2 });

const dobleMitad = {
  slug: 'doble-mitad',
  title: 'El doble y la mitad',
  heading: 'El doble',
  type: 'numbers',
  write: true,
  instructions: 'Teo y Lena juegan a los dobles: el doble de 3 es 3 + 3 = 6. Para calcular el doble, multiplica por 2.',
  questions: [double(7), double(5), double(10), double(15), double(25), double(50), double(100), double(123)],
  more: [
    {
      title: 'Dobles de cabeza',
      type: 'numbers',
      write: true,
      instructions: 'Calcula mentalmente el doble.',
      questions: [
        { prompt: 'El doble de 6 es ?', answer: 12 },
        { prompt: 'El doble de 12 es ?', answer: 24 },
        { prompt: 'El doble de 24 es ?', answer: 48 },
        { prompt: 'El doble de 35 es ?', answer: 70 },
        { prompt: 'El doble de 45 es ?', answer: 90 },
        { prompt: 'El doble de 150 es ?', answer: 300 },
        {
          story: 'Olga ha tardado una semana en pintar un cuadro. Pablo ha tardado el doble. ¿Cuántos días ha tardado Pablo?',
          prompt: '? días',
          answer: 14,
        },
      ],
    },
    {
      title: 'La mitad',
      type: 'numbers',
      write: true,
      instructions: 'Reparte los bloques en dos partes iguales. ¿Cuántos hay en cada parte?',
      questions: [half(8), half(10), half(16), half(24), half(6), half(20)],
    },
    {
      title: '¿Se puede partir por la mitad?',
      type: 'quiz',
      instructions: 'Los números impares no se pueden partir en dos partes iguales de bloques enteros.',
      questions: [
        { prompt: '¿Puedes partir una torre de 9 cubitos en dos partes iguales?', choices: ['Sí', 'No'], answer: 'No' },
        { prompt: '¿Puedes calcular la mitad de 25 con tus bloques?', choices: ['Sí', 'No'], answer: 'No' },
        { prompt: '¿Puedes calcular la mitad de 16 con tus bloques?', choices: ['Sí', 'No'], answer: 'Sí' },
        { prompt: '¿Qué número no tiene mitad con bloques enteros?', choices: ['24', '41', '10'], answer: '41' },
        {
          prompt: '¿La línea divide el corazón en dos mitades iguales?',
          scene: shapes({ kind: 'corazon', axis: true }),
          choices: ['Sí', 'No'],
          answer: 'Sí',
        },
        {
          prompt: '¿Y esta nube, está dividida por la mitad?',
          scene: shapes({ kind: 'nube', axis: true }),
          choices: ['Sí', 'No'],
          answer: 'No',
        },
      ],
    },
    {
      title: 'Las naranjas',
      type: 'numbers',
      write: true,
      instructions: '2 mitades hacen una naranja entera. 🍊',
      questions: [
        { story: 'Isabel hace zumo con 6 mitades de naranja. ¿Cuántas naranjas enteras son?', prompt: '? naranjas', answer: 3 },
        { story: 'Javier usa 2 naranjas enteras e Isabel 3. ¿Cuántas naranjas más usa Isabel?', data: [[2, 'naranjas usa Javier'], [3, 'naranjas usa Isabel']], prompt: '? naranja más', answer: 1 },
      ],
    },
  ],
};

export default dobleMitad;
