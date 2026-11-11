// Mates, tema 7: la propiedad asociativa de la suma. En una suma de tres sumandos se suman primero
// dos, y luego el que falta: el resultado es el mismo. Si hay parejas que suman 10, ¡más fácil!
const asociativa = {
  slug: 'asociativa',
  title: 'La propiedad asociativa',
  heading: 'Suma de dos formas',
  type: 'numbers',
  write: true,
  instructions: 'Suma primero dos números y después el que falta. Pulsa ✓ después de cada número. ¿Sale lo mismo?',
  questions: [
    { prompt: '6 + 12 + 8 = ? + 8 = ?', answer: [18, 26] },
    { prompt: '6 + 12 + 8 = 6 + ? = ?', answer: [20, 26] },
    { prompt: '5 + 6 + 3 = ? + 3 = ?', answer: [11, 14] },
    { prompt: '5 + 6 + 3 = 5 + ? = ?', answer: [9, 14] },
    { prompt: '5 + 6 + 3 = ? + 6 = ?', answer: [8, 14] },
    { prompt: '9 + 2 + 7 = ? + 7 = ?', answer: [11, 18] },
    { prompt: '9 + 2 + 7 = ? + 2 = ?', answer: [16, 18] },
    { prompt: '9 + 2 + 7 = 9 + ? = ?', answer: [9, 18] },
  ],
  more: [
    {
      title: 'Busca parejas que suman 10',
      type: 'numbers',
      write: true,
      instructions: 'Junta primero los números cuyas unidades suman 10. Después suma el otro.',
      questions: [
        { prompt: '7 + 8 + 3 = ? + 8 = ?', answer: [10, 18] },
        { prompt: '15 + 6 + 5 = ? + 6 = ?', answer: [20, 26] },
        { prompt: '125 + 5 + 34 = ? + 34 = ?', answer: [130, 164] },
        { prompt: '205 + 22 + 38 = 205 + ? = ?', answer: [60, 265] },
        { prompt: '42 + 384 + 26 = 42 + ? = ?', answer: [410, 452] },
        { prompt: '4 + 17 + 6 = ? + 17 = ?', answer: [10, 27] },
      ],
    },
    {
      title: 'Suma cuatro números',
      type: 'numbers',
      write: true,
      instructions: 'Asócialos de 2 en 2 y luego suma los dos resultados.',
      questions: [
        { prompt: '10 + 7 + 5 + 3 = ? + ? = ?', answer: [17, 8, 25] },
        { prompt: '18 + 14 + 2 + 6 = ? + ? = ?', answer: [32, 8, 40] },
        { prompt: '6 + 4 + 8 + 2 = ? + ? = ?', answer: [10, 10, 20] },
        { prompt: '25 + 5 + 13 + 7 = ? + ? = ?', answer: [30, 20, 50] },
      ],
    },
    {
      title: 'Los instrumentos de Música',
      type: 'numbers',
      write: true,
      instructions: 'Lee y calcula. Puedes sumar en el orden que te resulte más fácil.',
      questions: [
        {
          story: 'Lena y Mica preparan la clase de Música. Tienen 6 triángulos, 12 panderetas y 8 maracas. ¿Cuántos instrumentos tienen?',
          data: [[6, 'triángulos'], [12, 'panderetas'], [8, 'maracas']],
          prompt: '? instrumentos',
          answer: 26,
        },
        {
          story: 'En el armario hay 3 flautas, 9 tambores y 7 xilófonos. ¿Cuántos instrumentos hay?',
          data: [[3, 'flautas'], [9, 'tambores'], [7, 'xilófonos']],
          prompt: '? instrumentos',
          answer: 19,
        },
      ],
    },
    {
      title: '¿Qué has aprendido?',
      type: 'quiz',
      instructions: 'Piensa en la propiedad asociativa.',
      questions: [
        {
          prompt: 'Sumo 6 + 12 + 8 de dos formas distintas. ¿Qué pasa con el resultado?',
          choices: ['Sale el mismo', 'Sale distinto'],
          answer: 'Sale el mismo',
        },
        {
          prompt: '¿Cómo se llama esta propiedad de la suma?',
          choices: ['Propiedad asociativa', 'Propiedad del doble', 'Propiedad de la resta'],
          answer: 'Propiedad asociativa',
        },
        {
          prompt: 'En 8 + 5 + 2, ¿qué pareja suma 10?',
          say: false,
          choices: ['8 + 5', '8 + 2', '5 + 2'],
          answer: '8 + 2',
        },
      ],
    },
  ],
};

export default asociativa;
