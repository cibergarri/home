import { chart } from '../scenes';

// Mates, tema 9: gráficos de barras de 2 en 2, de 5 en 5 y de 10 en 10. Fíjate en el eje vertical:
// no siempre crece de 1 en 1.
const VOTES = chart([['Girasoles', 8], ['Meninas', 6], ['Noche', 10], ['Grito', 4]], 2);
const MOSAIC = chart([['Rojo', 25], ['Azul', 15], ['Verde', 30], ['Amarillo', 10]], 5);
const RESTAURANT = chart([
  ['lunes', 30], ['martes', 0], ['miércoles', 40], ['jueves', 50], ['viernes', 60], ['sábado', 50], ['domingo', 40],
], 10);

const graficos = {
  slug: 'graficos',
  title: 'Gráficos de barras',
  heading: 'El cuadro favorito',
  type: 'numbers',
  write: true,
  instructions: 'Los alumnos de 2.º han votado su cuadro favorito. El eje cuenta de 2 en 2.',
  questions: [
    { story: '¿Cuántos alumnos han votado Los girasoles?', scene: VOTES, prompt: '? alumnos', answer: 8 },
    { story: '¿Cuántos han votado Las meninas?', scene: VOTES, prompt: '? alumnos', answer: 6 },
    { story: '¿Cuántos han votado La noche estrellada?', scene: VOTES, prompt: '? alumnos', answer: 10 },
    { story: '¿Cuántos han votado El grito?', scene: VOTES, prompt: '? alumnos', answer: 4 },
    { story: '¿Cuántos alumnos han votado en total?', scene: VOTES, prompt: '8 + 6 + 10 + 4 = ?', answer: 28 },
  ],
  more: [
    {
      title: 'Las piezas del mosaico',
      type: 'quiz',
      instructions: 'El gráfico muestra cuántas piezas de cada color tiene un mosaico. El eje cuenta de 5 en 5.',
      questions: [
        { prompt: '¿Qué color se ha usado más?', scene: MOSAIC, choices: ['Rojo', 'Azul', 'Verde', 'Amarillo'], answer: 'Verde' },
        { prompt: '¿Cuántas piezas verdes hay?', scene: MOSAIC, choices: ['25', '30', '35'], answer: '30' },
        { prompt: '¿Qué color se ha usado menos?', scene: MOSAIC, choices: ['Rojo', 'Azul', 'Verde', 'Amarillo'], answer: 'Amarillo' },
        { prompt: '¿Cuántas piezas amarillas hay?', scene: MOSAIC, choices: ['5', '10', '15'], answer: '10' },
        { prompt: '¿Cuántas piezas rojas hay?', scene: MOSAIC, choices: ['20', '25', '30'], answer: '25' },
      ],
    },
    {
      title: 'El restaurante',
      type: 'quiz',
      instructions: 'Este gráfico muestra cuántas personas comen en un restaurante cada día. El eje cuenta de 10 en 10.',
      questions: [
        { prompt: '¿Cuántas personas comen el miércoles?', scene: RESTAURANT, choices: ['30', '40', '50'], answer: '40' },
        { prompt: '¿Qué día cierra el restaurante?', scene: RESTAURANT, choices: ['lunes', 'martes', 'domingo'], answer: 'martes' },
        { prompt: '¿Qué día van más personas?', scene: RESTAURANT, choices: ['jueves', 'viernes', 'sábado'], answer: 'viernes' },
        { prompt: '¿Cuántas personas comen el jueves?', scene: RESTAURANT, choices: ['40', '50', '60'], answer: '50' },
        { prompt: '¿Qué otro día comen tantas personas como el miércoles?', scene: RESTAURANT, choices: ['El domingo', 'El lunes', 'El viernes'], answer: 'El domingo' },
      ],
    },
  ],
};

export default graficos;
