import { Digestion } from '../../../drawings/Body';

// Naturales, tema 1: ¿cómo nos alimentamos? La digestión, los nutrientes y el camino de los
// alimentos.
const alimentamos = {
  slug: 'alimentamos',
  title: '¿Cómo nos alimentamos?',
  heading: 'El camino de los alimentos',
  instructions: 'Lleva cada palabra a su caja. La digestión transforma los alimentos en nutrientes.',
  width: 1000,
  height: 640,
  Drawing: Digestion,
  items: [
    {
      id: 'boca', word: 'Boca', definition: 'Tomamos los alimentos y los masticamos con los dientes.', dot: [500, 124], box: [760, 100],
    },
    {
      id: 'esofago', word: 'Esófago', definition: 'Un tubo por el que bajan los alimentos.', dot: [500, 190], box: [240, 190],
    },
    {
      id: 'estomago', word: 'Estómago', definition: 'Aquí los alimentos se deshacen.', dot: [548, 270], box: [770, 250],
    },
    {
      id: 'intestinos', word: 'Intestinos', definition: 'Absorben las sustancias que necesitamos.', dot: [452, 342], box: [230, 340],
    },
    {
      id: 'ano', word: 'Ano', definition: 'Por aquí se expulsan los restos que no se aprovechan.', dot: [500, 394], box: [760, 430],
    },
  ],
  more: [
    {
      title: 'Ordena el camino',
      type: 'build',
      instructions: 'Toca las partes en el orden que siguen los alimentos durante la digestión.',
      puzzles: [
        {
          prompt: '¿Por dónde pasan los alimentos?',
          hint: 'Empieza por la boca.',
          answer: ['Boca', 'Esófago', 'Estómago', 'Intestinos', 'Ano'],
          separator: ', ',
        },
      ],
    },
    {
      title: 'Los alimentos y los nutrientes',
      type: 'quiz',
      instructions: 'La alimentación forma parte de la función de nutrición.',
      questions: [
        { prompt: 'La alimentación forma parte de la función de…', choices: ['nutrición', 'relación', 'reproducción'], answer: 'nutrición' },
        { prompt: 'La digestión transforma los alimentos en unas sustancias más sencillas llamadas…', choices: ['nutrientes', 'músculos', 'huesos'], answer: 'nutrientes' },
        { prompt: 'Los nutrientes nos dan materia, que nos ayuda a…', choices: ['crecer', 'dormir'], answer: 'crecer' },
        { prompt: 'Y también nos dan energía para…', choices: ['realizar nuestras actividades', 'cambiar el color de los ojos'], answer: 'realizar nuestras actividades' },
        { prompt: '¿Con qué masticamos los alimentos?', choices: ['Con los dientes', 'Con el esófago'], answer: 'Con los dientes' },
        { prompt: '¿Dónde se deshacen los alimentos?', choices: ['En el estómago', 'En la boca', 'En los pulmones'], answer: 'En el estómago' },
      ],
    },
  ],
};

export default alimentamos;
