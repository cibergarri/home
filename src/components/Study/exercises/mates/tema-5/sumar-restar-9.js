import { numberLine } from '../scenes';

// Mates, tema 5: cálculo mental, sumar y restar 9. Para sumar 9 se suma 10 y se resta 1; para
// restar 9 se resta 10 y se suma 1 (como hace Lena en la recta).
const sumarRestar9 = {
  slug: 'sumar-restar-9',
  title: 'Sumar y restar 9',
  heading: 'Suma 9',
  type: 'numbers',
  write: true,
  instructions: '9 es casi 10. Para sumar 9, suma 10 y después resta 1.',
  questions: [
    { prompt: '26 + 9 = 26 + 10 - 1 = ?', scene: numberLine(20, 40, 26), answer: 35 },
    { prompt: '32 + 9 = ?', scene: numberLine(30, 50, 32), answer: 41 },
    { prompt: '38 + 9 = ?', scene: numberLine(30, 50, 38), answer: 47 },
    { prompt: '35 + 9 = ?', answer: 44 },
    { prompt: '47 + 9 = ?', answer: 56 },
    { prompt: '23 + 9 = ?', answer: 32 },
    { prompt: '72 + 9 = ?', answer: 81 },
    { prompt: '46 + 9 = ?', answer: 55 },
    { prompt: '58 + 9 = ?', answer: 67 },
  ],
  more: [
    {
      title: 'Resta 9',
      type: 'numbers',
      write: true,
      instructions: 'Para restar 9, resta 10 y después suma 1.',
      questions: [
        { prompt: '26 - 9 = 26 - 10 + 1 = ?', scene: numberLine(10, 30, 26), answer: 17 },
        { prompt: '36 - 9 = ?', scene: numberLine(20, 40, 36), answer: 27 },
        { prompt: '48 - 9 = ?', scene: numberLine(30, 50, 48), answer: 39 },
        { prompt: '45 - 9 = ?', answer: 36 },
        { prompt: '25 - 9 = ?', answer: 16 },
        { prompt: '44 - 9 = ?', answer: 35 },
        { prompt: '37 - 9 = ?', answer: 28 },
        { prompt: '63 - 9 = ?', answer: 54 },
      ],
    },
    {
      title: 'Problemas',
      type: 'numbers',
      write: true,
      instructions: 'Lee el problema y calcula de cabeza.',
      questions: [
        { story: 'En la clase de 2.º hay 16 chubasqueros amarillos y 9 naranjas. ¿Cuántos chubasqueros hay en total?', prompt: '16 + 9 = ?', answer: 25 },
        { story: 'En la clase hay 24 paraguas. 9 son pequeños y el resto son grandes. ¿Cuántos paraguas grandes hay?', prompt: '24 - 9 = ?', answer: 15 },
        { story: 'De los 15 paraguas grandes, 9 están mojados. ¿Cuántos están secos?', prompt: '15 - 9 = ?', answer: 6 },
        { story: 'Mica tiene 39 gotas en un tarro y caen 9 más. ¿Cuántas gotas tiene ahora?', prompt: '39 + 9 = ?', answer: 48 },
      ],
    },
  ],
};

export default sumarRestar9;
