import { bar } from '../scenes';

// Mates, tema 2: problemas con barras. La barra ayuda a ver qué se junta (sumar) o qué se compara
// (restar).
const barras = {
  slug: 'barras',
  title: 'Problemas con barras',
  heading: 'Mira la barra y calcula',
  type: 'numbers',
  instructions: 'La barra representa el problema. ¿Qué parte falta? Calcula y escribe el resultado.',
  questions: [
    {
      story: 'Abel necesita huevos para dos tortillas. La tortilla grande necesita 25 huevos y la pequeña 8. ¿Cuántos huevos necesita en total?',
      scene: bar({ total: '?', parts: [{ name: 'Tortilla grande', value: 25 }, { name: 'Pequeña', value: 8 }] }),
      prompt: '? huevos',
      answer: 33,
    },
    {
      story: 'En una granja-escuela han preparado 55 zumos de naranja y 28 zumos de piña. ¿Cuántos zumos hay en total?',
      scene: bar({ total: '?', parts: [{ name: 'Naranja', value: 55 }, { name: 'Piña', value: 28 }] }),
      prompt: '? zumos',
      answer: 83,
    },
    {
      story: 'Ana ha ahorrado 65 € y Juan 42 €. ¿Cuánto dinero más tiene Ana que Juan?',
      scene: bar({ compare: true, difference: '?', parts: [{ name: 'Ana', value: 65 }, { name: 'Juan', value: 42 }] }),
      prompt: 'Ana tiene ? € más',
      answer: 23,
    },
    {
      story: 'Claudia tiene 14 € y Aitor 25 €. ¿Cuánto dinero tienen en total?',
      scene: bar({ total: '?', parts: [{ name: 'Claudia', value: 14 }, { name: 'Aitor', value: 25 }] }),
      prompt: '? €',
      answer: 39,
    },
    {
      story: 'Claudia y Aitor tienen 39 € entre los dos y el tren cuesta 32 €. ¿Cuánto les sobra?',
      scene: bar({ total: 39, parts: [{ name: 'Tren', value: 32 }, { name: 'Sobra', value: '?', size: 7 }] }),
      prompt: 'Les sobran ? €',
      answer: 7,
    },
  ],
  more: [
    {
      title: '¿Hay suficientes?',
      type: 'quiz',
      instructions: 'Compara lo que hay con lo que hace falta.',
      questions: [
        {
          prompt: 'Abel necesita 33 huevos y las gallinas han puesto 36. ¿Tiene suficientes?',
          choices: ['Sí, tiene suficientes', 'No tiene suficientes'],
          answer: 'Sí, tiene suficientes',
        },
        {
          prompt: '36  …  33',
          say: false,
          choices: ['< es menor que', '> es mayor que', '= es igual a'],
          answer: '> es mayor que',
        },
        {
          prompt: 'Hay 83 zumos y van a la granja 80 niños. ¿Habrá zumos para todos?',
          choices: ['Sí', 'No'],
          answer: 'Sí',
        },
        {
          prompt: 'Claudia y Aitor tienen 39 €. ¿Pueden comprar juntos el tren de 32 €?',
          choices: ['Sí', 'No'],
          answer: 'Sí',
        },
      ],
    },
  ],
};

export default barras;
