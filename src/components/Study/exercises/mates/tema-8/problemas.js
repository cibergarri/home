import { bar } from '../scenes';

// Mates, tema 8: problemas con sumandos repetidos. Cajas de sandías, grupos de figuras y sacos de
// 7 kg, con barras y con la multiplicación.
const problemas = {
  slug: 'problemas',
  title: 'Problemas con sumandos repetidos',
  heading: 'Las cajas de sandías',
  type: 'quiz',
  instructions: 'En el cole han preparado 5 cajas con 3 sandías en cada caja para una merienda. Teo escribe 5 × 3. 🍉',
  questions: [
    { prompt: 'En 5 × 3, ¿a qué se refiere el 5?', say: 'En 5 por 3, ¿a qué se refiere el 5?', choices: ['A las cajas', 'A las sandías de cada caja'], answer: 'A las cajas' },
    { prompt: 'En 5 × 3, ¿a qué se refiere el 3?', say: 'En 5 por 3, ¿a qué se refiere el 3?', choices: ['A las cajas', 'A las sandías de cada caja'], answer: 'A las sandías de cada caja' },
    { prompt: '¿Cómo puedes calcular cuántas sandías hay?', choices: ['3 + 3 + 3 + 3 + 3', '5 + 3', '5 - 3'], answer: '3 + 3 + 3 + 3 + 3' },
    { prompt: '¿Cuántas sandías hay en total?', choices: ['8', '15', '53'], answer: '15' },
  ],
  more: [
    {
      title: 'Resuelve con barras',
      type: 'numbers',
      write: true,
      instructions: 'Cada trozo de la barra es igual. Suma los trozos o multiplica.',
      questions: [
        {
          story: 'Arabela divide a sus alumnos en 3 grupos y da 10 figuras a cada grupo. ¿Cuántas figuras reparte?',
          scene: bar({ total: '?', parts: [{ name: 'Grupo 1', value: 10 }, { name: 'Grupo 2', value: 10 }, { name: 'Grupo 3', value: 10 }] }),
          prompt: '3 × 10 = ?',
          answer: 30,
        },
        {
          story: 'Hay 3 sacos de patatas de 7 kg cada uno. ¿Cuántos kilos pesan entre todos?',
          scene: bar({ total: '?', parts: [{ name: 'Saco 1', value: '7 kg', size: 7 }, { name: 'Saco 2', value: '7 kg', size: 7 }, { name: 'Saco 3', value: '7 kg', size: 7 }] }),
          prompt: '3 × 7 = ? kg',
          answer: 21,
        },
        {
          story: 'Topi compra 4 paquetes de 2 yogures. ¿Cuántos yogures tiene?',
          scene: bar({ total: '?', parts: [{ name: '1.º', value: 2 }, { name: '2.º', value: 2 }, { name: '3.º', value: 2 }, { name: '4.º', value: 2 }] }),
          prompt: '4 × 2 = ?',
          answer: 8,
        },
        {
          story: 'Lena pone 5 lápices en cada uno de sus 2 estuches. ¿Cuántos lápices tiene?',
          scene: bar({ total: '?', parts: [{ name: 'Estuche 1', value: 5 }, { name: 'Estuche 2', value: 5 }] }),
          prompt: '2 × 5 = ?',
          answer: 10,
        },
        {
          story: 'Mica compra 3 cajas con 6 huevos cada una. ¿Cuántos huevos compra?',
          prompt: '3 × 6 = ?',
          answer: 18,
        },
      ],
    },
  ],
};

export default problemas;
