import School from '../../drawings/School';

// English, unit 1: places at school. `dot` is the spot on the drawing each box points at and `box`
// the centre of the box, in the drawing's 1000 × 640 units.
const placesAtSchool = {
  slug: 'places-at-school',
  title: 'Places at school',
  heading: 'Where is it?',
  instructions: 'Drag each place to its box on the school. Tap the speaker to hear it.',
  width: 1000,
  height: 640,
  boxWidth: 175,
  Drawing: School,
  items: [
    {
      id: 'library', word: 'library', definition: 'La biblioteca.', dot: [300, 260], box: [350, 172],
    },
    {
      id: 'classroom', word: 'classroom', definition: 'El aula, la clase.', dot: [595, 250], box: [590, 172],
    },
    {
      id: 'computer-room', word: 'computer room', definition: 'El aula de informática.', dot: [790, 255], box: [820, 172],
    },
    {
      id: 'dining-room', word: 'dining room', definition: 'El comedor.', dot: [340, 468], box: [340, 380],
    },
    {
      id: 'corridor', word: 'corridor', definition: 'El pasillo.', dot: [510, 440], box: [490, 600],
    },
    {
      id: 'toilet', word: 'toilet', definition: 'El baño, el aseo.', dot: [605, 495], box: [680, 600],
    },
    {
      id: 'gym', word: 'gym', definition: 'El gimnasio.', dot: [760, 518], box: [800, 385],
    },
    {
      id: 'playground', word: 'playground', definition: 'El patio.', dot: [100, 470], box: [110, 300],
    },
  ],
  more: [
    {
      title: 'Match the places',
      type: 'match',
      instructions: 'Tap a place in English, then the same place in Spanish.',
      pairs: [
        { id: 'gym', en: 'gym', es: 'gimnasio' },
        { id: 'dining-room', en: 'dining room', es: 'comedor' },
        { id: 'classroom', en: 'classroom', es: 'aula, clase' },
        { id: 'toilet', en: 'toilet', es: 'baño, aseo' },
        { id: 'library', en: 'library', es: 'biblioteca' },
        { id: 'computer-room', en: 'computer room', es: 'aula de informática' },
        { id: 'corridor', en: 'corridor', es: 'pasillo' },
        { id: 'playground', en: 'playground', es: 'patio' },
      ],
    },
  ],
};

export default placesAtSchool;
