// Mates, tema 2: cálculo mental, sumar completando dieces. Se juntan las decenas y las unidades que
// forman otra decena: 24 + 16 = 20 + 10 + 4 + 6 = 30 + 10 = 40.
const tens = (a, b) => {
  const decenas = Math.floor(a / 10) * 10 + Math.floor(b / 10) * 10;
  return { prompt: `${a} + ${b} = ? + 10 = ?`, answer: [decenas, a + b] };
};

const dieces = {
  slug: 'dieces',
  title: 'Sumar completando dieces',
  heading: 'Junta las decenas',
  type: 'numbers',
  write: true,
  instructions: 'Primero suma las decenas. Las unidades juntas forman otra decena: súmala al final.',
  questions: [tens(24, 16), tens(35, 15), tens(28, 22), tens(45, 25), tens(16, 54), tens(28, 42), tens(57, 13)],
  more: [
    {
      title: 'De cabeza',
      type: 'numbers',
      write: true,
      instructions: 'Calcula mentalmente.',
      questions: [
        { prompt: '34 + 26 = ?', answer: 60 },
        { prompt: '38 + 12 = ?', answer: 50 },
        { prompt: '47 + 33 = ?', answer: 80 },
        { prompt: '25 + 35 = ?', answer: 60 },
        { prompt: '41 + 29 = ?', answer: 70 },
        {
          story: 'Por ayudar en varias misiones, Gea tiene 23 premios y Trueno tiene 17. ¿Cuántos premios tienen entre los dos?',
          prompt: '? premios',
          answer: 40,
        },
        {
          story: 'Gea tiene 23 premios y Trueno tiene 17. ¿Cuántos premios tiene Gea más que Trueno?',
          prompt: '? premios',
          answer: 6,
        },
      ],
    },
  ],
};

export default dieces;
