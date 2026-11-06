// Mates, tema 8: iniciación a la multiplicación. 3 semanas son 3 veces 7 días: 7 + 7 + 7 = 21, y se
// escribe 3 × 7 = 21. La palabra veces se cambia por el signo ×.
const write = (count, n) => ({
  prompt: `${count} veces ${n}:   ${count} × ${n} = ${Array(count).fill(n).join(' + ')} = ?`,
  answer: count * n,
});

const turn = (count, n) => ({ prompt: `${Array(count).fill(n).join(' + ')} = ? × ? = ?`, answer: [count, n, count * n] });

const multiplicacion = {
  slug: 'multiplicacion',
  title: 'Iniciación a la multiplicación',
  heading: 'Veces es ×',
  type: 'numbers',
  write: true,
  instructions: '3 veces 7 es 7 + 7 + 7 = 21. Se escribe 3 × 7 = 21, y se lee "3 por 7". Esta operación es la multiplicación.',
  questions: [write(3, 7), write(3, 8), write(5, 6), write(4, 8), write(6, 3), write(2, 9)],
  more: [
    {
      title: 'Escribe la multiplicación',
      type: 'numbers',
      write: true,
      instructions: 'Cuenta cuántas veces se repite el número y escribe la multiplicación. Pulsa ✓ después de cada número.',
      questions: [turn(3, 4), turn(5, 2), turn(2, 10), turn(4, 3), turn(6, 5)],
    },
    {
      title: 'Horas y días',
      type: 'numbers',
      write: true,
      instructions: '1 día son 24 horas.',
      questions: [
        { story: '¿Cuántas horas son 2 días?', prompt: '2 × 24 = 24 + 24 = ?', answer: 48 },
        { story: '¿Cuántos días son 2 semanas?', prompt: '2 × 7 = 7 + 7 = ?', answer: 14 },
        { story: 'Van a tardar 3 semanas en podar los jardines. ¿Cuántos días son?', prompt: '3 × 7 = ?', answer: 21 },
      ],
    },
    {
      title: '5 × 2 y 2 × 5',
      type: 'numbers',
      write: true,
      instructions: 'Cuenta de 2 en 2 y de 5 en 5.',
      questions: [
        { prompt: '5 × 2 = 2 + 2 + 2 + 2 + 2 = ?', answer: 10 },
        { prompt: '2 × 5 = 5 + 5 = ?', answer: 10 },
        { prompt: '3 × 4 = 4 + 4 + 4 = ?', answer: 12 },
        { prompt: '4 × 3 = 3 + 3 + 3 + 3 = ?', answer: 12 },
      ],
    },
    {
      title: '¿Qué has aprendido?',
      type: 'quiz',
      instructions: 'Piensa en lo que significa la multiplicación.',
      questions: [
        { prompt: '¿Cómo se escribe "4 veces 6"?', say: false, choices: ['4 × 6', '4 + 6', '46'], answer: '4 × 6' },
        { prompt: '¿Qué suma es igual que 3 × 5?', say: false, choices: ['5 + 5 + 5', '3 + 5', '3 + 3 + 3'], answer: '5 + 5 + 5' },
        { prompt: '5 × 2 y 2 × 5, ¿dan lo mismo?', say: false, choices: ['Sí, los dos dan 10', 'No'], answer: 'Sí, los dos dan 10' },
      ],
    },
  ],
};

export default multiplicacion;
