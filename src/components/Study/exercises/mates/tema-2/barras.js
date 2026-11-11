import { bar as barWithNumbers } from '../scenes';

// The bars without numbers inside: the numbers are in the story.
const bar = props => barWithNumbers({ ...props, values: false });

// Mates, tema 2: problemas con barras. La barra ayuda a ver qué se junta (sumar) o qué se compara
// (restar).
const barras = {
  slug: 'barras',
  title: 'Problemas con barras',
  heading: 'Mira la barra y calcula',
  type: 'numbers',
  write: true,
  instructions: 'La barra representa el problema. ¿Qué parte falta? Calcula y escribe el resultado.',
  questions: [
    {
      story: 'Abel necesita huevos para dos tortillas. La tortilla grande necesita 25 huevos y la pequeña 8. ¿Cuántos huevos necesita en total?',
      data: [[25, 'huevos para la tortilla grande'], [8, 'huevos para la tortilla pequeña']],
      scene: bar({ total: '?', parts: [{ name: 'Tortilla grande', value: 25 }, { name: 'Pequeña', value: 8 }] }),
      prompt: '? huevos',
      answer: 33,
      then: [
        {
          story: 'Las gallinas han puesto 36 huevos. ¿Tiene Abel suficientes para las dos tortillas?',
          choices: ['Sí, tiene suficientes', 'No tiene suficientes'],
          answer: 'Sí, tiene suficientes',
        },
        {
          story: 'Compara los huevos que hay con los que necesita: ¿qué signo va en el hueco?',
          compare: [36, 33],
        },
        {
          story: '¿Cuántos huevos le sobrarán?',
          data: [[36, 'huevos han puesto las gallinas'], [33, 'huevos necesita Abel']],
          prompt: 'Le sobrarán ? huevos',
          answer: 3,
        },
      ],
    },
    {
      story: 'En una granja-escuela han preparado 55 zumos de naranja y 28 zumos de piña. ¿Cuántos zumos hay en total?',
      data: [[55, 'zumos de naranja'], [28, 'zumos de piña']],
      scene: bar({ total: '?', parts: [{ name: 'Naranja', value: 55 }, { name: 'Piña', value: 28 }] }),
      prompt: '? zumos',
      answer: 83,
      then: [
        {
          story: 'A la granja van 80 niños y cada uno se toma un zumo. ¿Habrá zumos para todos?',
          choices: ['Sí', 'No'],
          answer: 'Sí',
        },
        {
          story: '¿Cuántos zumos sobrarán?',
          data: [[83, 'zumos hay'], [80, 'niños van a la granja']],
          prompt: 'Sobrarán ? zumos',
          answer: 3,
        },
      ],
    },
    {
      story: 'Ana ha ahorrado 65 € y Juan 42 €. ¿Cuánto dinero más tiene Ana que Juan?',
      data: [[65, '€ ha ahorrado Ana'], [42, '€ ha ahorrado Juan']],
      scene: bar({ compare: true, difference: '?', parts: [{ name: 'Ana', value: 65 }, { name: 'Juan', value: 42 }] }),
      prompt: 'Ana tiene ? € más',
      answer: 23,
    },
    {
      story: 'Claudia tiene 14 € y Aitor 25 €. ¿Cuánto dinero tienen en total?',
      data: [[14, '€ tiene Claudia'], [25, '€ tiene Aitor']],
      scene: bar({ total: '?', parts: [{ name: 'Claudia', value: 14 }, { name: 'Aitor', value: 25 }] }),
      prompt: '? €',
      answer: 39,
      then: [
        {
          story: 'Quieren comprar juntos un tren que cuesta 32 €. ¿Pueden comprarlo?',
          choices: ['Sí', 'No'],
          answer: 'Sí',
        },
        {
          story: '¿Cuánto les sobra?',
          data: [[39, '€ tienen entre los dos'], [32, '€ cuesta el tren']],
          scene: bar({ total: 39, parts: [{ name: 'Tren', value: 32 }, { name: 'Sobra', value: '?', size: 7 }] }),
          prompt: 'Les sobran ? €',
          answer: 7,
        },
      ],
    },
  ],
};

export default barras;
