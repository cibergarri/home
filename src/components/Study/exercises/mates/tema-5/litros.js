// Mates, tema 5: medir la capacidad con el litro, el medio litro y el cuarto de litro. 1 litro son
// 2 medios litros o 4 cuartos de litro (las jarras de las recetas, los vasos de agua y la leche).
const litros = {
  slug: 'litros',
  title: 'El litro, el medio y el cuarto',
  heading: '¿Cuántos caben en un litro?',
  type: 'numbers',
  write: true,
  instructions: 'La capacidad se mide en litros (L). 1 litro son 2 medios litros. 1 litro son 4 cuartos de litro.',
  questions: [
    { prompt: '1 litro = ? medios litros', answer: 2 },
    { prompt: '1 litro = ? cuartos de litro', answer: 4 },
    { prompt: '1 medio litro = ? cuartos de litro', answer: 2 },
    { prompt: '4 cuartos de litro = ? litro', answer: 1 },
    { prompt: '2 litros = ? medios litros', answer: 4 },
    { prompt: '2 litros = ? cuartos de litro', answer: 8 },
    { prompt: '3 litros = ? medios litros', answer: 6 },
  ],
  more: [
    {
      title: 'Une y piensa',
      type: 'quiz',
      instructions: 'Piensa en jarras de 1 litro, de medio litro y de cuarto de litro. 🥛',
      questions: [
        { prompt: 'Si bebes 2 cuartos de litro, ¿cuánto bebes?', choices: ['Un litro', 'Dos litros', 'Medio litro'], answer: 'Medio litro' },
        { prompt: '¿Cuánto son 3 cuartos de litro y otro cuarto más?', choices: ['Tres litros', 'Un litro', 'Medio litro'], answer: 'Un litro' },
        { prompt: 'Es bueno beber al menos un litro y medio de agua al día. ¿Cuántos vasos de un cuarto de litro son?', choices: ['6 vasos', '4 vasos', '3 vasos'], answer: '6 vasos' },
        { prompt: '¿Qué tiene más agua?', choices: ['Una jarra de medio litro', 'Un vaso de un cuarto de litro', 'Una jarra de 1 litro'], answer: 'Una jarra de 1 litro' },
        { prompt: 'Teo necesita un litro para su receta, Lena medio litro y Mica un cuarto de litro. ¿Quién necesita menos agua?', choices: ['Teo', 'Mica', 'Lena'], answer: 'Mica' },
        { prompt: '¿Con qué medimos la leche de una botella?', choices: ['Con litros', 'Con kilos', 'Con euros'], answer: 'Con litros' },
      ],
    },
    {
      title: '¿Cuántos litros de leche hay?',
      type: 'numbers',
      write: true,
      instructions: 'Agrupa para formar litros: 2 medios litros hacen 1 litro y 4 cuartos de litro hacen 1 litro.',
      questions: [
        { story: 'Hay 2 botellas de 1 litro y 2 botellas de medio litro.', prompt: 'Hay ? litros.', answer: 3 },
        { story: 'Hay 4 botellas de medio litro.', prompt: 'Hay ? litros.', answer: 2 },
        { story: 'Hay 1 botella de 1 litro y 4 cartones de un cuarto de litro.', prompt: 'Hay ? litros.', answer: 2 },
        { story: 'Hay 1 botella de 1 litro, 2 de medio litro y 4 cartones de un cuarto de litro.', prompt: 'Hay ? litros.', answer: 3 },
        { story: 'Hay 2 botellas de medio litro y 8 cartones de un cuarto de litro.', prompt: 'Hay ? litros.', answer: 3 },
      ],
    },
  ],
};

export default litros;
