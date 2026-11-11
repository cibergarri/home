import { bar, blocks } from '../scenes';

// Mates, tema 3: «¡Topi, tengo un problema!», problemas con números de 3 cifras. Los árboles que
// tapa el dedo de Topi, los árboles de las dos zonas y los olivos de la finca, con barras.
const problemas = {
  slug: 'problemas',
  title: 'Problemas con números de 3 cifras',
  heading: 'Los árboles del bosque',
  type: 'numbers',
  write: true,
  instructions: 'Lee el problema, piensa si tienes que sumar o restar, calcula y escribe el resultado.',
  questions: [
    {
      story: 'En el bosque se han plantado 305 árboles. En la foto de Topi se ven 203, porque puso el dedo delante. ¿Cuántos árboles ha tapado Topi?',
      data: [[305, 'árboles plantados'], [203, 'árboles se ven en la foto']],
      scene: blocks(0, 3, 2),
      prompt: 'Topi ha tapado ? árboles',
      answer: 102,
    },
    {
      story: 'Teo y Lena han plantado 305 árboles en la zona 1. Mica y Topi han plantado 152 en la zona 2. ¿Cuántos árboles se han plantado en total?',
      data: [[305, 'árboles en la zona 1'], [152, 'árboles en la zona 2']],
      scene: bar({ total: '?', parts: [{ name: 'Zona 1', value: 305 }, { name: 'Zona 2', value: 152 }] }),
      prompt: 'Se han plantado ? árboles',
      answer: 457,
    },
    {
      story: 'En una finca hay 700 olivos. Ya se ha recogido la aceituna de 500. ¿Cuántos olivos faltan por recoger?',
      data: [[700, 'olivos en la finca'], [500, 'olivos ya recogidos']],
      scene: bar({ total: 700, parts: [{ name: 'Recogidos', value: 500 }, { name: 'Faltan', value: '?', size: 200 }] }),
      prompt: 'Faltan ? olivos',
      answer: 200,
    },
    {
      story: 'Hay 500 olivos con la aceituna recogida y 200 sin recoger. ¿Cuántos olivos más hay con la aceituna recogida?',
      data: [[500, 'olivos con la aceituna recogida'], [200, 'olivos sin recoger']],
      scene: bar({ compare: true, difference: '?', parts: [{ name: 'Recogidos', value: 500 }, { name: 'Sin recoger', value: 200 }] }),
      prompt: 'Hay ? olivos más',
      answer: 300,
    },
    {
      story: 'En el colegio de Gonzalo hay 145 alumnos en Infantil y 298 en Primaria. ¿Cuántos alumnos más hay en Primaria?',
      data: [[145, 'alumnos en Infantil'], [298, 'alumnos en Primaria']],
      scene: bar({ compare: true, difference: '?', parts: [{ name: 'Primaria', value: 298 }, { name: 'Infantil', value: 145 }] }),
      prompt: 'Hay ? alumnos más',
      answer: 153,
    },
  ],
  more: [
    {
      title: 'Piensa antes de calcular',
      type: 'quiz',
      instructions: 'Teo y Lena han plantado 305 árboles en la zona 1, y Mica y Topi 152 en la zona 2.',
      questions: [
        {
          prompt: '¿Dónde hay más árboles?', choices: ['En la zona 1', 'En la zona 2'], answer: 'En la zona 1',
        },
        {
          prompt: 'Para saber el total de árboles, ¿qué haces?', choices: ['Sumo las dos zonas', 'Resto las dos zonas'], answer: 'Sumo las dos zonas',
        },
        {
          prompt: '¿Qué operación calcula el total de árboles?', say: false, choices: ['350 + 152', '305 + 202', '305 + 152'], answer: '305 + 152',
        },
        {
          prompt: 'Topi tapa unos árboles con el dedo. Para saber cuántos, ¿qué haces?',
          choices: ['Sumo los que se ven y el total', 'Resto al total los que se ven'],
          answer: 'Resto al total los que se ven',
        },
        {
          prompt: 'En la recta del 0 al 400, ¿dónde está más o menos el 305?',
          choices: ['Cerca del 0', 'Por la mitad', 'Más cerca del 400'],
          answer: 'Más cerca del 400',
        },
      ],
    },
  ],
};

export default problemas;
