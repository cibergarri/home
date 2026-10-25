import { HundredChart, HUNDRED_CELL } from '../../drawings/Maths';

// Mates, tema 1: moverse por la tabla Cien. A la derecha se suma 1, a la izquierda se resta 1,
// hacia abajo se suma 10 y hacia arriba se resta 10. Las casillas son (columna, fila), y el número
// de cada una es fila × 10 + columna.
const at = n => [n % 10, Math.floor(n / 10)];

const tablaCien = {
  slug: 'tabla-cien',
  title: 'La tabla Cien',
  type: 'directions',
  intro: 'Si te mueves una casilla a la derecha, sumas 1. A la izquierda, restas 1. Hacia abajo, sumas 10. Hacia arriba, restas 10.',
  Drawing: HundredChart,
  cell: HUNDRED_CELL,
  width: 640,
  height: 640,
  marker: 'ring',
  compass: false,
  routes: [
    {
      start: at(43),
      task: 'Candela tenía 43 puntos. Mueve a Candela por la tabla para saber su puntuación.',
      done: '🎉 ¡Candela ha obtenido 15 puntos! 43 + 6 = 49, 49 - 30 = 19, 19 - 4 = 15.',
      steps: [
        { direction: 'east', squares: 6 },
        { direction: 'north', squares: 3 },
        { direction: 'west', squares: 4 },
      ],
    },
    {
      start: at(12),
      task: 'Empiezas en el 12. ¿Dónde terminas?',
      done: '🎉 ¡Has llegado al 37! 12 + 30 = 42, 42 + 5 = 47, 47 - 10 = 37.',
      steps: [
        { direction: 'south', squares: 3 },
        { direction: 'east', squares: 5 },
        { direction: 'north', squares: 1 },
      ],
    },
    {
      start: at(88),
      task: 'Empiezas en el 88. ¿Dónde terminas?',
      done: '🎉 ¡Has llegado al 26! 88 - 4 = 84, 84 - 60 = 24, 24 + 2 = 26.',
      steps: [
        { direction: 'west', squares: 4 },
        { direction: 'north', squares: 6 },
        { direction: 'east', squares: 2 },
      ],
    },
  ],
};

export default tablaCien;
