import { HundredChartFrom100, HUNDRED_CELL } from '../../../drawings/Maths';

// Mates, tema 2: moverse por la tabla del 100 al 199. A la derecha se suma 1, a la izquierda se
// resta 1, hacia abajo se suma 10 y hacia arriba se resta 10.
const at = n => [(n - 100) % 10, Math.floor((n - 100) / 10)];

const tabla = {
  slug: 'tabla-100-199',
  title: 'La tabla del 100 al 199',
  type: 'directions',
  intro: 'Si te mueves una casilla a la derecha, sumas 1. A la izquierda, restas 1. Hacia abajo, sumas 10. Hacia arriba, restas 10.',
  Drawing: HundredChartFrom100,
  cell: HUNDRED_CELL,
  width: 640,
  height: 640,
  marker: 'ring',
  compass: false,
  routes: [
    {
      start: at(154),
      task: 'Empiezas en el 154. ¿A qué número llegas siguiendo el camino?',
      done: '🎉 ¡Has llegado al 135! 154 + 4 = 158, 158 - 20 = 138, 138 - 3 = 135.',
      steps: [
        { direction: 'east', squares: 4 },
        { direction: 'north', squares: 2 },
        { direction: 'west', squares: 3 },
      ],
    },
    {
      start: at(121),
      task: 'Empiezas en el 121. ¿Dónde terminas?',
      done: '🎉 ¡Has llegado al 136! 121 + 30 = 151, 151 + 5 = 156, 156 - 20 = 136.',
      steps: [
        { direction: 'south', squares: 3 },
        { direction: 'east', squares: 5 },
        { direction: 'north', squares: 2 },
      ],
    },
    {
      start: at(187),
      task: 'Empiezas en el 187. ¿Dónde terminas?',
      done: '🎉 ¡Has llegado al 125! 187 - 4 = 183, 183 - 60 = 123, 123 + 2 = 125.',
      steps: [
        { direction: 'west', squares: 4 },
        { direction: 'north', squares: 6 },
        { direction: 'east', squares: 2 },
      ],
    },
  ],
};

export default tabla;
