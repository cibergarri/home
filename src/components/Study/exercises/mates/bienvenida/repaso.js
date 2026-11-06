import { shapes } from '../scenes';

// Mates, bienvenida: el repaso de 1.º con las figuras de Teo. Los nombres de las figuras, cuántas
// hay de cada tipo en su robot, y qué pieza es más alta o más baja.
const name = (kind, answer, prompt) => ({
  prompt, scene: shapes(kind), choices: ['Cuadrado', 'Triángulo', 'Círculo', 'Rectángulo'], answer,
});

const ROBOT = shapes('cuadrado', 'rectangulo', 'triangulo', 'circulo', 'circulo', 'triangulo', 'cuadrado', 'circulo');

const repaso = {
  slug: 'repaso',
  title: 'Repaso de 1.º',
  heading: 'Las figuras',
  type: 'quiz',
  instructions: '¿Cómo se llama cada figura?',
  questions: [
    name('triangulo', 'Triángulo', '¿Qué figura tiene 3 lados?'),
    name('rectangulo', 'Rectángulo', '¿Qué figura tiene 4 lados, dos largos y dos cortos?'),
    name('cuadrado', 'Cuadrado', '¿Qué figura es esta, con 4 lados iguales?'),
    name('circulo', 'Círculo', '¿Qué figura es redonda?'),
  ],
  more: [
    {
      title: 'El robot de Teo',
      type: 'numbers',
      write: true,
      instructions: 'Teo ha formado un robot con estas figuras. Cuenta cuántas ha usado de cada tipo.',
      questions: [
        { story: '¿Cuántos cuadrados hay?', prompt: '? cuadrados', scene: ROBOT, answer: 2 },
        { story: '¿Cuántos triángulos hay?', prompt: '? triángulos', scene: ROBOT, answer: 2 },
        { story: '¿Cuántos círculos hay?', prompt: '? círculos', scene: ROBOT, answer: 3 },
        { story: '¿Cuántos rectángulos hay?', prompt: '? rectángulos', scene: ROBOT, answer: 1 },
        { story: '¿Cuántas figuras hay en total?', prompt: '? figuras', scene: ROBOT, answer: 8 },
      ],
    },
    {
      title: 'Más alta, más baja',
      type: 'quiz',
      instructions: 'Teo tiene tres piezas para construir: la naranja mide 6 cubos, la verde 9 cubos y la amarilla 4 cubos.',
      questions: [
        {
          prompt: '¿De qué color es la pieza más alta?', choices: ['Naranja', 'Verde', 'Amarilla'], answer: 'Verde',
        },
        {
          prompt: '¿De qué color es la pieza más baja?', choices: ['Naranja', 'Verde', 'Amarilla'], answer: 'Amarilla',
        },
        {
          prompt: '¿Qué pieza es más alta que la amarilla, pero más baja que la verde?',
          choices: ['Naranja', 'Verde', 'Amarilla'],
          answer: 'Naranja',
        },
        {
          prompt: 'Si pone las tres piezas una encima de otra, ¿cuántos cubos mide la torre?',
          choices: ['15 cubos', '19 cubos', '13 cubos'],
          answer: '19 cubos',
        },
        {
          prompt: 'En una caja grande caben más piezas que en una caja pequeña. ¿Verdad o mentira?',
          choices: ['Verdad', 'Mentira'],
          answer: 'Verdad',
        },
      ],
    },
  ],
};

export default repaso;
