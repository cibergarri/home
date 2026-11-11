import { bar as barWithNumbers } from '../scenes';

// The bars without numbers inside: the numbers are in the story.
const bar = props => barWithNumbers({ ...props, values: false });

// Bars to choose from: one split in parts (`[name, size]`) under what they make together, or bars
// one under another, to compare.
const together = (total, ...parts) => bar({ total, parts: parts.map(([name, size]) => ({ name, value: size, size })) });
const apart = (...parts) => bar({ compare: true, scale: 80, parts: parts.map(([name, size]) => ({ name, value: size, size })) });

// Mates, tema 4: «¡Topi, tengo un problema!», problemas con barras (libro, páginas 116 a 119). El
// globo terráqueo de Teo y Lena, el dinero de Lucas, Adri y Mateo, y el atlas de Sergio. Cada
// problema empieza, como en el libro, por las barras.
const barras = {
  slug: 'barras',
  title: 'Problemas con barras',
  heading: 'Mira las barras y resuelve',
  type: 'numbers',
  write: true,
  instructions: 'Lee el problema, fíjate en las barras y resuélvelo paso a paso.',
  questions: [
    {
      story: 'Teo quiere comprar un globo terráqueo que cuesta 30 €. Tiene ahorrados 20 €. Lena tiene ahorrados 15 €. ¿Pueden comprar el globo terráqueo? ¿Cómo?',
      ask: 'La barra de arriba es lo que vale el globo y la de abajo, lo que tiene Teo. ¿Tiene Teo suficiente dinero?',
      scene: apart(['Globo', 30], ['Teo', 20]),
      choices: ['No: su barra es más corta que la del globo', 'Sí: su barra es más larga que la del globo'],
      answer: 'No: su barra es más corta que la del globo',
      then: [
        {
          story: '¿Cuánto le falta a Teo para comprar el globo él solo?',
          data: [[30, '€ cuesta el globo'], [20, '€ tiene Teo']],
          scene: bar({ total: 30, parts: [{ name: 'Teo', value: 20 }, { name: 'Falta', value: '?', size: 10 }] }),
          prompt: 'Le faltan ? €',
          answer: 10,
        },
        {
          story: 'Si dibujas la barra de los ahorros de Lena debajo de la de Teo, ¿será más larga o más corta?',
          scene: apart(['Globo', 30], ['Teo', 20], ['Lena', 15]),
          choices: ['Más corta: Lena tiene menos que Teo', 'Más larga: Lena tiene más que Teo'],
          answer: 'Más corta: Lena tiene menos que Teo',
        },
        {
          story: 'Observa las barras. ¿Teo y Lena tienen suficiente dinero entre los dos?',
          scene: together('Teo y Lena', ['Teo', 20], ['Lena', 15]),
          choices: ['Sí: sus barras juntas son más largas que la del globo', 'No: sus barras juntas son más cortas que la del globo'],
          answer: 'Sí: sus barras juntas son más largas que la del globo',
        },
        {
          story: '¿Cuánto dinero tienen en total Teo y Lena?',
          data: [[20, '€ tiene Teo'], [15, '€ tiene Lena']],
          prompt: 'En total tienen ? €',
          answer: 35,
        },
        {
          story: '¿Pueden comprar entre los dos el globo terráqueo?',
          choices: ['Sí', 'No'],
          answer: 'Sí',
        },
        {
          story: '¿Cuánto les sobrará?',
          data: [[35, '€ tienen entre los dos'], [30, '€ cuesta el globo']],
          scene: bar({ total: 35, parts: [{ name: 'Globo', value: 30 }, { name: 'Sobra', value: '?', size: 5 }] }),
          prompt: 'Les sobrarán ? €',
          answer: 5,
        },
      ],
    },
    {
      story: 'Lucas tiene 40 €. Adri tiene 10 € menos que Lucas. Mateo tiene 30 € más que Adri. ¿Quién tiene más dinero de los tres? ¿Cuánto más?',
      ask: '¿Qué barras representan el dinero de cada uno?',
      pick: [
        apart(['Lucas', 40], ['Adri', 50], ['Mateo', 80]),
        apart(['Lucas', 40], ['Adri', 30], ['Mateo', 60]),
        apart(['Lucas', 40], ['Adri', 30], ['Mateo', 20]),
      ],
      answer: 1,
      then: [
        {
          story: '¿Cuánto dinero tiene Adri?',
          data: [[40, '€ tiene Lucas'], [10, '€ menos tiene Adri']],
          prompt: 'Adri tiene ? €',
          answer: 30,
        },
        {
          story: '¿Cuánto dinero tiene Mateo?',
          data: [[30, '€ tiene Adri'], [30, '€ más tiene Mateo']],
          prompt: 'Mateo tiene ? €',
          answer: 60,
        },
        {
          story: '¿Cómo sabes quién tiene más dinero?',
          choices: ['Elijo la barra más larga', 'Elijo la barra más corta'],
          answer: 'Elijo la barra más larga',
        },
        {
          story: '¿Quién tiene más dinero de los tres?',
          choices: ['Lucas', 'Adri', 'Mateo'],
          answer: 'Mateo',
        },
        {
          story: '¿Cuántos euros más que Lucas tiene Mateo?',
          data: [[60, '€ tiene Mateo'], [40, '€ tiene Lucas']],
          prompt: 'Mateo tiene ? € más que Lucas',
          answer: 20,
        },
        {
          story: '¿Y cuántos euros más que Adri?',
          data: [[60, '€ tiene Mateo'], [30, '€ tiene Adri']],
          prompt: 'Mateo tiene ? € más que Adri',
          answer: 30,
        },
      ],
    },
    {
      story: 'El atlas «Viaja por el universo» cuesta 30 €. Sergio tiene 20 € y no le llega. Ha conseguido ahorrar algo más de dinero y, además, sus abuelos le han dado 2 €. ¡Ahora ya tiene suficiente! ¿Cuánto ha ahorrado Sergio?',
      ask: '¿Qué barra representa la historia?',
      pick: [
        together('Cuesta el atlas', ['Tenía', 8], ['Ahorra', 20], ['Abuelos', 2]),
        together('Cuesta el atlas', ['Tenía', 20], ['Ahorra', 8], ['Abuelos', 2]),
        together('Cuesta el atlas', ['Tenía', 20], ['Ahorra', 2], ['Abuelos', 8]),
      ],
      answer: 1,
      then: [
        {
          story: '¿Cuánto tiene Sergio sin contar lo que ha ahorrado?',
          data: [[20, '€ tenía Sergio'], [2, '€ le dan los abuelos']],
          prompt: '? €',
          answer: 22,
        },
        {
          story: 'Con lo que ha ahorrado tiene justo los 30 € del atlas. ¿Cuánto ha ahorrado?',
          data: [[30, '€ cuesta el atlas'], [22, '€ tiene con lo de los abuelos']],
          scene: bar({ total: 30, parts: [{ name: 'Tenía y abuelos', value: 22 }, { name: 'Ahorra', value: '?', size: 8 }] }),
          prompt: 'Sergio ha ahorrado ? €',
          answer: 8,
        },
      ],
    },
  ],
};

export default barras;
