import { bar } from '../scenes';

// Mates, tema 7: problemas de dinero con barras. Lena, Teo, Mica, David y Marta compran material
// para donarlo: una carpeta cuesta 2 €, unas tijeras 1 €, un rotulador 1 € y un lápiz 50 céntimos.
const PRICES = '📁 carpeta: 2 €   ✂️ tijeras: 1 €   🖍️ rotulador: 1 €   ✏️ lápiz: 50 céntimos';

const barrasDinero = {
  slug: 'barras-dinero',
  title: 'Problemas de dinero con barras',
  heading: 'Lena y Teo donan material',
  type: 'numbers',
  write: true,
  instructions: `Los precios: ${PRICES}. Mira las barras y calcula.`,
  questions: [
    {
      story: '¿Cuántas tijeras cuestan tanto como una carpeta?',
      scene: bar({ total: 'Carpeta: 2 €', parts: [{ name: 'Tijeras 1', value: '1 €', size: 1 }, { name: 'Tijeras 2', value: '1 €', size: 1 }] }),
      prompt: '? tijeras',
      answer: 2,
    },
    {
      story: '¿Cuántos lápices cuestan tanto como unas tijeras?',
      scene: bar({ total: 'Tijeras: 1 €', parts: [{ name: 'Lápiz 1', value: '50 cent', size: 1 }, { name: 'Lápiz 2', value: '50 cent', size: 1 }] }),
      prompt: '? lápices',
      answer: 2,
    },
    {
      story: 'Lena dona 1 carpeta, 4 tijeras y 2 lápices. ¿Cuánto gasta?',
      data: [[1, 'carpeta'], [4, 'tijeras'], [2, 'lápices']],
      scene: bar({ total: '?', parts: [{ name: '1 carpeta', value: '2 €', size: 2 }, { name: '4 tijeras', value: '4 €', size: 4 }, { name: '2 lápices', value: '1 €', size: 1 }] }),
      prompt: '? €',
      answer: 7,
    },
    {
      story: 'Teo dona 2 carpetas, unas tijeras y 4 lápices. ¿Cuánto gasta?',
      data: [[2, 'carpetas'], [4, 'lápices']],
      scene: bar({ total: '?', parts: [{ name: '2 carpetas', value: '4 €', size: 4 }, { name: 'Tijeras', value: '1 €', size: 1 }, { name: '4 lápices', value: '2 €', size: 2 }] }),
      prompt: '? €',
      answer: 7,
    },
    {
      story: 'Lena ha gastado 7 € y Teo 7 €. ¿Cuánto dinero han gastado entre los dos?',
      data: [[7, '€ ha gastado Lena'], [7, '€ ha gastado Teo']],
      scene: bar({ total: '?', parts: [{ name: 'Lena', value: 7 }, { name: 'Teo', value: 7 }] }),
      prompt: '? €',
      answer: 14,
    },
  ],
  more: [
    {
      title: 'Los 3 € de Mica',
      type: 'numbers',
      write: true,
      instructions: 'Mica tiene 3 € para comprar tijeras (1 €) y lápices (50 céntimos). Quiere gastarlo todo.',
      questions: [
        { story: 'Si Mica solo compra tijeras, ¿cuántas puede comprar?', prompt: '? tijeras', answer: 3 },
        { story: 'Si Mica solo compra lápices, ¿cuántos puede comprar?', prompt: '? lápices', answer: 6 },
        {
          story: 'Mica compra 2 tijeras. ¿Cuántos lápices compra con lo que le sobra?',
          scene: bar({ total: '3 €', parts: [{ name: '2 tijeras', value: '2 €', size: 2 }, { name: 'Lápices', value: '?', size: 1 }] }),
          prompt: '? lápices',
          answer: 2,
        },
        {
          story: 'Mica compra unas tijeras. ¿Cuántos lápices compra con lo que le sobra?',
          scene: bar({ total: '3 €', parts: [{ name: 'Tijeras', value: '1 €', size: 1 }, { name: 'Lápices', value: '?', size: 2 }] }),
          prompt: '? lápices',
          answer: 4,
        },
      ],
    },
    {
      title: '¿Quién ha gastado más?',
      type: 'numbers',
      write: true,
      instructions: `Los precios: ${PRICES}. Calcula lo que gasta cada uno y compara.`,
      questions: [
        { story: 'David dona 3 tijeras, 2 rotuladores y 2 lápices. ¿Cuánto gasta?', data: [[3, 'tijeras'], [2, 'rotuladores'], [2, 'lápices']], prompt: '? €', answer: 6 },
        { story: 'Marta dona 2 carpetas y 3 rotuladores. ¿Cuánto gasta?', data: [[2, 'carpetas'], [3, 'rotuladores']], prompt: '? €', answer: 7 },
        {
          story: '¿Cuánto más ha gastado Marta que David?',
          scene: bar({ compare: true, difference: '?', parts: [{ name: 'Marta', value: 7 }, { name: 'David', value: 6 }] }),
          prompt: 'Marta ha gastado ? € más',
          answer: 1,
        },
      ],
    },
    {
      title: 'Piensa',
      type: 'quiz',
      instructions: 'Mira los precios otra vez.',
      questions: [
        { prompt: 'Una carpeta cuesta 2 € y un lápiz 50 céntimos. ¿Qué es más caro?', choices: ['La carpeta', 'El lápiz'], answer: 'La carpeta' },
        { prompt: '¿Cuántos céntimos cuestan 2 lápices?', choices: ['50 céntimos', '100 céntimos, o sea, 1 €', '200 céntimos'], answer: '100 céntimos, o sea, 1 €' },
        { prompt: 'Mica tiene 3 €. ¿Puede comprar 2 carpetas?', choices: ['Sí', 'No'], answer: 'No' },
      ],
    },
  ],
};

export default barrasDinero;
