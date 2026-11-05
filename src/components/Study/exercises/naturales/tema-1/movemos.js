import { Skeleton } from '../../../drawings/Body';

// Naturales, tema 1: ¿cómo nos movemos? Los huesos, los músculos y las articulaciones.
// `dot` is the spot on the drawing each box points at and `box` the centre of the box, both in
// the drawing's 1000 × 640 units.
const movemos = {
  slug: 'movemos',
  title: '¿Cómo nos movemos?',
  heading: 'Huesos y articulaciones',
  instructions: 'Lleva cada palabra a su caja en el esqueleto. Toca el altavoz para oírla.',
  width: 1000,
  height: 640,
  boxWidth: 230, // for "Columna vertebral"
  Drawing: Skeleton,
  groups: [
    { id: 'huesos', title: 'Huesos', name: 'hueso' },
    { id: 'articulaciones', title: 'Articulaciones', name: 'articulación' },
  ],
  items: [
    {
      id: 'craneo', group: 'huesos', word: 'Cráneo', definition: 'El hueso de la cabeza.', dot: [530, 60], box: [800, 60],
    },
    {
      id: 'costillas', group: 'huesos', word: 'Costillas', definition: 'Los huesos del pecho.', dot: [545, 228], box: [800, 175],
    },
    {
      id: 'columna', group: 'huesos', word: 'Columna vertebral', definition: 'Los huesos de la espalda, uno encima de otro.', dot: [500, 300], box: [800, 290],
    },
    {
      id: 'femur', group: 'huesos', word: 'Fémur', definition: 'El hueso del muslo, el más largo.', dot: [534, 440], box: [800, 420],
    },
    {
      id: 'tibia', group: 'huesos', word: 'Tibia', definition: 'Un hueso de la pierna, debajo de la rodilla.', dot: [540, 560], box: [800, 560],
    },
    {
      id: 'hombro', group: 'articulaciones', word: 'Hombro', definition: 'Une el brazo con el cuerpo.', dot: [437, 178], box: [200, 120],
    },
    {
      id: 'codo', group: 'articulaciones', word: 'Codo', definition: 'Dobla el brazo por la mitad.', dot: [410, 284], box: [200, 240],
    },
    {
      id: 'muneca', group: 'articulaciones', word: 'Muñeca', definition: 'Une la mano con el brazo.', dot: [398, 384], box: [200, 360],
    },
    {
      id: 'rodilla', group: 'articulaciones', word: 'Rodilla', definition: 'Dobla la pierna por la mitad.', dot: [463, 496], box: [200, 470],
    },
    {
      id: 'tobillo', group: 'articulaciones', word: 'Tobillo', definition: 'Une el pie con la pierna.', dot: [460, 600], box: [200, 585],
    },
  ],
  more: [
    {
      title: 'Huesos, músculos y articulaciones',
      type: 'sort',
      instructions: 'Lleva cada parte del cuerpo a su columna.',
      columns: [
        { id: 'huesos', title: 'Huesos', subtitle: 'Duros y rígidos' },
        { id: 'musculos', title: 'Músculos', subtitle: 'Blandos y elásticos' },
        { id: 'articulaciones', title: 'Articulaciones', subtitle: 'Unen los huesos' },
      ],
      cards: [
        { id: 'craneo', text: 'Cráneo', columns: ['huesos'] },
        { id: 'costillas', text: 'Costillas', columns: ['huesos'] },
        { id: 'femur', text: 'Fémur', columns: ['huesos'] },
        { id: 'biceps', text: 'Bíceps', columns: ['musculos'] },
        { id: 'pectoral', text: 'Pectoral', columns: ['musculos'] },
        { id: 'abdominales', text: 'Abdominales', columns: ['musculos'] },
        { id: 'gluteo', text: 'Glúteo', columns: ['musculos'] },
        { id: 'gemelos', text: 'Gemelos', columns: ['musculos'] },
        { id: 'codo', text: 'Codo', columns: ['articulaciones'] },
        { id: 'rodilla', text: 'Rodilla', columns: ['articulaciones'] },
        { id: 'hombro', text: 'Hombro', columns: ['articulaciones'] },
      ],
    },
    {
      title: '¿Huesos o músculos?',
      type: 'quiz',
      instructions: 'Los huesos y los músculos trabajan juntos para movernos.',
      questions: [
        { prompt: '¿Qué está en el interior del cuerpo y es duro y rígido?', choices: ['Los huesos', 'Los músculos'], answer: 'Los huesos' },
        { prompt: '¿Qué está bajo la piel y es blando y elástico?', choices: ['Los huesos', 'Los músculos'], answer: 'Los músculos' },
        { prompt: '¿Qué es el esqueleto?', choices: ['El conjunto de todos los huesos', 'Un músculo muy grande', 'Una articulación'], answer: 'El conjunto de todos los huesos' },
        { prompt: 'Gracias a las articulaciones podemos…', choices: ['doblar partes del cuerpo', 'respirar', 'ver'], answer: 'doblar partes del cuerpo' },
        { prompt: '¿Qué objeto es elástico como los músculos?', choices: ['Una goma elástica', 'Un clavo'], answer: 'Una goma elástica' },
        { prompt: '¿Y cuál de estos se estira y se encoge sin romperse?', choices: ['Una piedra', 'Un muelle'], answer: 'Un muelle' },
        { prompt: '¿Qué pasaría si los huesos fuesen blandos?', choices: ['No podríamos estar de pie', 'Seríamos más altos'], answer: 'No podríamos estar de pie' },
        { prompt: 'Para tener huesos y músculos sanos, es importante…', choices: ['hacer ejercicio', 'estar siempre sentado'], answer: 'hacer ejercicio' },
      ],
    },
    {
      title: '¿Qué están usando?',
      type: 'quiz',
      instructions: 'Piensa en el músculo y la articulación que usan estas personas.',
      questions: [
        { prompt: '⚽ Un niño chuta el balón. ¿Qué articulación dobla?', choices: ['La rodilla', 'El codo'], answer: 'La rodilla' },
        { prompt: '⚽ Para chutar, ¿qué músculo de la pierna usa?', choices: ['Los gemelos', 'El pectoral'], answer: 'Los gemelos' },
        { prompt: '🛼 Unas niñas patinan. ¿Qué músculo usan?', choices: ['El glúteo', 'El bíceps'], answer: 'El glúteo' },
        { prompt: '🏊 Una niña nada. ¿Qué articulación mueve para dar la brazada?', choices: ['El hombro', 'El tobillo'], answer: 'El hombro' },
        { prompt: '🏊 Al nadar, ¿qué músculo del brazo usa?', choices: ['El bíceps', 'Los gemelos'], answer: 'El bíceps' },
      ],
    },
  ],
};

export default movemos;
