import { bar as barWithNumbers } from '../scenes';

// The bars without numbers inside: the numbers are in the story.
const bar = props => barWithNumbers({ ...props, values: false });

// Mates, tema 4: «¡Topi, tengo un problema!», problemas con barras. El globo terráqueo de Teo y
// Lena, el dinero de Lucas, Adri y Mateo, y el atlas de Sergio.
const barras = {
  slug: 'barras',
  title: 'Problemas con barras',
  heading: 'El globo terráqueo',
  type: 'numbers',
  write: true,
  instructions: 'Teo quiere comprar un globo terráqueo que cuesta 30 €. Teo tiene ahorrados 20 € y Lena 15 €. Mira la barra y calcula.',
  questions: [
    {
      story: 'El globo cuesta 30 € y Teo tiene 20 €. ¿Cuánto le falta a Teo para comprarlo él solo?',
      data: [[30, '€ cuesta el globo'], [20, '€ tiene Teo']],
      scene: bar({ total: 30, parts: [{ name: 'Teo', value: 20 }, { name: 'Falta', value: '?', size: 10 }] }),
      prompt: 'Le faltan ? €',
      answer: 10,
    },
    {
      story: 'Teo tiene 20 € y Lena 15 €. ¿Cuánto dinero tienen entre los dos?',
      data: [[20, '€ tiene Teo'], [15, '€ tiene Lena']],
      scene: bar({ total: '?', parts: [{ name: 'Teo', value: 20 }, { name: 'Lena', value: 15 }] }),
      prompt: 'Tienen ? €',
      answer: 35,
    },
    {
      story: 'Teo y Lena tienen 35 € y el globo cuesta 30 €. ¿Cuánto les sobrará?',
      data: [[35, '€ tienen Teo y Lena'], [30, '€ cuesta el globo']],
      scene: bar({ total: 35, parts: [{ name: 'Globo', value: 30 }, { name: 'Sobra', value: '?', size: 5 }] }),
      prompt: 'Les sobrarán ? €',
      answer: 5,
    },
    {
      story: 'Lena tiene 15 € y Teo 20 €. ¿Cuánto dinero tiene Teo más que Lena?',
      data: [[15, '€ tiene Lena'], [20, '€ tiene Teo']],
      scene: bar({ compare: true, difference: '?', parts: [{ name: 'Teo', value: 20 }, { name: 'Lena', value: 15 }] }),
      prompt: 'Teo tiene ? € más',
      answer: 5,
    },
  ],
  more: [
    {
      title: 'Lucas, Adri y Mateo',
      type: 'numbers',
      write: true,
      instructions: 'Lucas tiene 40 €. Adri tiene 10 € menos que Lucas. Mateo tiene 30 € más que Adri.',
      questions: [
        {
          story: 'Adri tiene 10 € menos que Lucas, que tiene 40 €. ¿Cuánto tiene Adri?',
          data: [[40, '€ tiene Lucas'], [10, '€ menos tiene Adri']],
          scene: bar({ compare: true, difference: 10, parts: [{ name: 'Lucas', value: 40 }, { name: 'Adri', value: '?', size: 30 }] }),
          prompt: 'Adri tiene ? €',
          answer: 30,
        },
        {
          story: 'Mateo tiene 30 € más que Adri. ¿Cuánto tiene Mateo?',
          prompt: 'Mateo tiene ? €',
          answer: 60,
        },
        {
          story: '¿Cuántos euros tiene Mateo más que Lucas?',
          scene: bar({ compare: true, difference: '?', parts: [{ name: 'Mateo', value: 60 }, { name: 'Lucas', value: 40 }] }),
          prompt: '? € más',
          answer: 20,
        },
      ],
    },
    {
      title: '¿Quién tiene más?',
      type: 'quiz',
      instructions: 'Piensa en las barras de Lucas, Adri y Mateo.',
      questions: [
        {
          prompt: '¿Cómo sabes quién tiene más dinero?', choices: ['Elijo la barra más corta', 'Elijo la barra más larga'], answer: 'Elijo la barra más larga',
        },
        {
          prompt: '¿Quién tiene más dinero de los tres?', choices: ['Lucas', 'Adri', 'Mateo'], answer: 'Mateo',
        },
        {
          prompt: '¿Quién tiene menos dinero de los tres?', choices: ['Lucas', 'Adri', 'Mateo'], answer: 'Adri',
        },
        {
          prompt: 'La barra de Lena (15 €), ¿es más larga o más corta que la de Teo (20 €)?', choices: ['Más larga', 'Más corta'], answer: 'Más corta',
        },
      ],
    },
    {
      title: 'El atlas de Sergio',
      type: 'numbers',
      write: true,
      instructions: 'Un atlas es un libro de mapas. El atlas «Viaja por el universo» cuesta 30 €. Sergio tenía 20 €, ahorró algo más y sus abuelos le dieron 2 €. ¡Ahora tiene justo 30 €!',
      questions: [
        {
          story: 'Sergio tenía 20 € y sus abuelos le dieron 2 €. ¿Cuánto tiene sin contar lo que ha ahorrado?',
          prompt: '20 + 2 = ?',
          answer: 22,
        },
        {
          story: 'Con lo que ha ahorrado, tiene 30 €. ¿Cuánto ha ahorrado Sergio?',
          scene: bar({ total: 30, parts: [{ name: 'Tenía', value: 20 }, { name: 'Abuelos', value: 2, size: 3 }, { name: 'Ahorra', value: '?', size: 8 }] }),
          prompt: 'Ha ahorrado ? €',
          answer: 8,
        },
      ],
    },
  ],
};

export default barras;
