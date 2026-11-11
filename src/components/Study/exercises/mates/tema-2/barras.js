import { bar as barWithNumbers } from '../scenes';

// The bars without numbers inside: the numbers are in the story.
const bar = props => barWithNumbers({ ...props, values: false });

// Bars to choose from: one split in two parts (`[name, size]`) under what they make together, or
// two bars one under the other, to compare.
const together = (total, ...parts) => bar({ total, parts: parts.map(([name, size]) => ({ name, value: size, size })) });
const apart = (...parts) => bar({ compare: true, difference: '', scale: 65, parts: parts.map(([name, size]) => ({ name, value: size, size })) });

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
  more: [
    {
      title: 'Más problemas con barras',
      type: 'numbers',
      write: true,
      instructions: 'Problemas nuevos, como los del libro: busca la barra, piensa qué cuenta hay que hacer y resuélvelos.',
      questions: [
        {
          story: 'En la biblioteca de Monteoscuro hay 46 libros de cuentos y 37 libros de animales. Mañana vienen 90 niños y cada uno quiere llevarse un libro. ¿Hay libros para todos?',
          ask: '¿Qué barra representa los libros de la biblioteca?',
          pick: [
            together('Libros que hay', ['Cuentos', 37], ['Animales', 46]),
            together('Libros que hay', ['Cuentos', 46], ['Animales', 37]),
            together('Libros que hay', ['Cuentos', 1], ['Animales', 1]),
          ],
          answer: 1,
          then: [
            {
              story: '¿Cómo puedes saber cuántos libros hay en total?',
              choices: ['Sumando', 'Restando', 'Contando'],
              answer: 'Sumando',
            },
            {
              data: [[46, 'libros de cuentos'], [37, 'libros de animales']],
              prompt: '? libros',
              answer: 83,
            },
            {
              story: 'Compara los libros que hay con los niños que vienen.',
              compare: [83, 90],
            },
            {
              story: '¿Hay libros para todos los niños?',
              choices: ['Sí', 'No'],
              answer: 'No',
            },
            {
              story: '¿Cuántos libros faltan?',
              data: [[90, 'niños vienen'], [83, 'libros hay']],
              scene: bar({ total: 90, parts: [{ name: 'Libros', value: 83 }, { name: 'Faltan', value: '?', size: 7 }] }),
              prompt: 'Faltan ? libros',
              answer: 7,
            },
          ],
        },
        {
          story: 'Mica ha recogido 58 setas en el bosque y Topi ha recogido 34. ¿Quién ha recogido más setas? ¿Cuántas más?',
          ask: '¿Qué barras representan las setas de cada uno?',
          pick: [
            apart(['Mica', 58], ['Topi', 34]),
            apart(['Mica', 34], ['Topi', 58]),
          ],
          answer: 0,
          then: [
            {
              story: 'Fíjate en las barras. ¿Quién ha recogido más setas?',
              choices: ['Mica', 'Topi'],
              answer: 'Mica',
            },
            {
              story: '¿Qué cuenta hay que hacer para saber cuántas setas más ha recogido?',
              choices: ['Una resta', 'Una suma'],
              answer: 'Una resta',
            },
            {
              story: '¿Cuántas setas más ha recogido Mica?',
              data: [[58, 'setas ha recogido Mica'], [34, 'setas ha recogido Topi']],
              scene: bar({ compare: true, difference: '?', parts: [{ name: 'Mica', value: 58 }, { name: 'Topi', value: 34 }] }),
              prompt: 'Mica ha recogido ? setas más',
              answer: 24,
            },
          ],
        },
        {
          story: 'En el autobús de la excursión caben 55 personas. Ya han subido 38. ¿Cuántas personas más pueden subir?',
          ask: '¿Qué barra representa el autobús?',
          pick: [
            together('Caben en el autobús', ['Han subido', 17], ['Pueden subir', 38]),
            together('Caben en el autobús', ['Han subido', 38], ['Pueden subir', 17]),
          ],
          answer: 1,
          then: [
            {
              story: 'Sabes el total y una parte. ¿Qué cuenta hay que hacer para saber la otra parte?',
              choices: ['Una resta', 'Una suma'],
              answer: 'Una resta',
            },
            {
              data: [[55, 'personas caben'], [38, 'personas han subido']],
              prompt: 'Pueden subir ? personas',
              answer: 17,
            },
          ],
        },
        {
          story: 'Lena tiene 45 € y Teo tiene 38 €. Quieren comprar juntos una tienda de campaña que cuesta 75 €. ¿Les llega? ¿Les sobra algo?',
          ask: '¿Qué barra representa el dinero de los dos?',
          pick: [
            together('Lo que tienen', ['Lena', 38], ['Teo', 45]),
            together('Lo que tienen', ['Lena', 1], ['Teo', 1]),
            together('Lo que tienen', ['Lena', 45], ['Teo', 38]),
          ],
          answer: 2,
          then: [
            {
              story: '¿Cuánto dinero tienen entre los dos?',
              data: [[45, '€ tiene Lena'], [38, '€ tiene Teo']],
              prompt: '? €',
              answer: 83,
            },
            {
              story: 'Compara lo que tienen con lo que cuesta la tienda.',
              compare: [83, 75],
            },
            {
              story: '¿Pueden comprar la tienda de campaña?',
              choices: ['Sí', 'No'],
              answer: 'Sí',
            },
            {
              story: '¿Cuánto dinero les sobrará?',
              data: [[83, '€ tienen entre los dos'], [75, '€ cuesta la tienda']],
              scene: bar({ total: 83, parts: [{ name: 'Tienda', value: 75 }, { name: 'Sobra', value: '?', size: 8 }] }),
              prompt: 'Les sobrarán ? €',
              answer: 8,
            },
          ],
        },
        {
          story: 'Abel ha hecho magdalenas para la fiesta: 24 por la mañana, 18 a mediodía y 9 por la tarde. ¿Cuántas magdalenas ha hecho en total?',
          ask: '¿Qué barra representa las magdalenas?',
          pick: [
            together('Magdalenas', ['Mañana', 24], ['Mediodía', 18], ['Tarde', 9]),
            together('Magdalenas', ['Mañana', 9], ['Mediodía', 18], ['Tarde', 24]),
            together('Magdalenas', ['Mañana', 24], ['Mediodía', 9], ['Tarde', 18]),
          ],
          answer: 0,
          then: [
            {
              story: '¿Qué cuenta hay que hacer?',
              choices: ['Sumar las tres partes', 'Restar las tres partes'],
              answer: 'Sumar las tres partes',
            },
            {
              data: [[24, 'magdalenas por la mañana'], [18, 'magdalenas a mediodía'], [9, 'magdalenas por la tarde']],
              prompt: '? magdalenas',
              answer: 51,
            },
          ],
        },
        {
          story: 'Gea tiene 27 cromos. Trueno tiene 15 cromos más que Gea. ¿Cuántos cromos tiene Trueno?',
          ask: '¿Qué barras representan los cromos de cada uno?',
          pick: [
            apart(['Gea', 27], ['Trueno', 12]),
            apart(['Gea', 27], ['Trueno', 42]),
          ],
          answer: 1,
          then: [
            {
              story: 'Trueno tiene más cromos que Gea. ¿Qué cuenta hay que hacer?',
              choices: ['Una suma', 'Una resta'],
              answer: 'Una suma',
            },
            {
              data: [[27, 'cromos tiene Gea'], [15, 'cromos más tiene Trueno']],
              scene: bar({ compare: true, difference: 15, parts: [{ name: 'Gea', value: 27 }, { name: 'Trueno', value: '?', size: 42 }] }),
              prompt: 'Trueno tiene ? cromos',
              answer: 42,
            },
          ],
        },
      ],
    },
  ],
};

export default barras;
