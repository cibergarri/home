import { bar as barWithNumbers } from '../scenes';

// The bars without numbers inside: the numbers are in the story.
const bar = props => barWithNumbers({ ...props, values: false });

// Bars to choose from: one split in two parts (`[name, size]`) under what they make together, or
// two bars one under the other, to compare.
const together = (total, ...parts) => bar({ total, parts: parts.map(([name, size]) => ({ name, value: size, size })) });
const apart = (...parts) => bar({ compare: true, difference: '', parts: parts.map(([name, size]) => ({ name, value: size, size })) });

// Mates, tema 2: problemas con barras. La barra ayuda a ver qué se junta (sumar) o qué se compara
// (restar).
const barras = {
  slug: 'barras',
  title: 'Problemas con barras',
  heading: 'Mira la barra y calcula',
  type: 'numbers',
  write: true,
  instructions: 'Lee el problema, busca la barra que lo representa y resuélvelo paso a paso.',
  questions: [
    {
      story: 'Abel necesita huevos para dos tortillas. La tortilla grande necesita 25 huevos y la pequeña 8. Las gallinas han puesto 36 huevos. ¿Tiene suficientes huevos para las dos tortillas?',
      ask: '¿Qué barra representa los huevos que necesita Abel?',
      pick: [
        together('Huevos que necesita', ['Tortilla grande', 8], ['Tortilla pequeña', 25]),
        together('Huevos que necesita', ['Tortilla grande', 1], ['Tortilla pequeña', 1]),
        together('Huevos que necesita', ['Tortilla grande', 25], ['Tortilla pequeña', 8]),
      ],
      answer: 2,
      then: [
        {
          story: '¿Qué operación hay que hacer para saber cuántos huevos necesita Abel en total?',
          choices: ['Una suma', 'Una resta'],
          answer: 'Una suma',
        },
        {
          data: [[25, 'huevos para la tortilla grande'], [8, 'huevos para la tortilla pequeña']],
          prompt: '? huevos',
          answer: 33,
        },
        {
          story: '¿Es 33 la solución del problema? Vuelve a leer la pregunta.',
          choices: ['No: pregunta si tiene suficientes huevos', 'Sí: pregunta cuántos huevos necesita'],
          answer: 'No: pregunta si tiene suficientes huevos',
        },
        {
          story: 'Compara los huevos que hay con los que necesita.',
          compare: [36, 33],
        },
        {
          story: '¿Tiene Abel suficientes huevos para las dos tortillas?',
          choices: ['Sí, tiene suficientes', 'No tiene suficientes'],
          answer: 'Sí, tiene suficientes',
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
      story: 'En una granja-escuela han preparado zumos para la merienda: 55 zumos de naranja y 28 zumos de piña. Si van a la granja 80 niños, ¿habrá suficientes zumos para todos?',
      ask: '¿Cuál de estas barras representa esta situación?',
      pick: [
        together('Total de zumos', ['Naranja', 1], ['Piña', 1]),
        together('Total de zumos', ['Naranja', 55], ['Piña', 28]),
        together('Total de zumos', ['Naranja', 28], ['Piña', 55]),
      ],
      answer: 1,
      then: [
        {
          story: '¿Cómo puedes averiguar el total de zumos que han preparado?',
          choices: ['Contando', 'Sumando', 'Restando'],
          answer: 'Sumando',
        },
        {
          data: [[55, 'zumos de naranja'], [28, 'zumos de piña']],
          prompt: '? zumos',
          answer: 83,
        },
        {
          story: 'Compara los niños con los zumos.',
          compare: [80, 83],
        },
        {
          story: '¿Hay suficientes zumos?',
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
      story: 'Ana y Juan están ahorrando para ir a la granja. Ana tiene 65 € y Juan tiene 42 €. ¿Quién ha ahorrado más dinero? ¿Cuánto más?',
      ask: '¿Qué barras representan el dinero que tiene cada niño?',
      pick: [
        apart(['Ana', 42], ['Juan', 65]),
        apart(['Ana', 65], ['Juan', 42]),
      ],
      answer: 1,
      then: [
        {
          story: 'Fíjate en las barras. ¿Quién tiene más dinero?',
          choices: ['Ana', 'Juan'],
          answer: 'Ana',
        },
        {
          story: '¿Cuánto dinero más tiene Ana que Juan?',
          data: [[65, '€ ha ahorrado Ana'], [42, '€ ha ahorrado Juan']],
          scene: bar({ compare: true, difference: '?', parts: [{ name: 'Ana', value: 65 }, { name: 'Juan', value: 42 }] }),
          prompt: 'Ana tiene ? € más',
          answer: 23,
        },
      ],
    },
    {
      story: 'Claudia tiene 14 € y Aitor, 25 €. Quieren comprar juntos un tren que cuesta 32 €.',
      ask: '¿Qué barra representa lo que tiene cada niño?',
      pick: [
        together('Lo que tienen', ['Claudia', 14], ['Aitor', 25]),
        together('Lo que tienen', ['Claudia', 25], ['Aitor', 14]),
      ],
      answer: 0,
      then: [
        {
          story: '¿Cuánto dinero tienen en total?',
          data: [[14, '€ tiene Claudia'], [25, '€ tiene Aitor']],
          prompt: '? €',
          answer: 39,
        },
        {
          story: '¿Pueden comprar juntos el tren de 32 €?',
          choices: ['Sí', 'No'],
          answer: 'Sí',
        },
        {
          story: '¿Cuánto dinero les sobrará?',
          data: [[39, '€ tienen entre los dos'], [32, '€ cuesta el tren']],
          scene: bar({ total: 39, parts: [{ name: 'Tren', value: 32 }, { name: 'Sobra', value: '?', size: 7 }] }),
          prompt: 'Les sobrarán ? €',
          answer: 7,
        },
      ],
    },
  ],
};

export default barras;
