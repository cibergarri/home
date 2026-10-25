import FlatLandscape from '../drawings/FlatLandscape';

// Social Science, unit 1: the features of a flat landscape, natural or made by people.
// `dot` is the spot on the drawing each box points at and `box` the centre of the box, both in
// the drawing's 1000 × 640 units.
const flatLandscape = {
  slug: 'flat-landscape',
  title: 'Flat landscape',
  instructions: 'Drag each word to its box on the picture. Tap the speaker to hear it.',
  width: 1000,
  height: 640,
  Drawing: FlatLandscape,
  groups: [
    { id: 'physical', title: 'Physical features (natural)', name: 'physical feature' },
    { id: 'human', title: 'Human features', name: 'human feature' },
  ],
  items: [
    {
      id: 'hill',
      group: 'physical',
      word: 'Hill',
      definition: 'A piece of land that is higher than the land around it, but lower than a mountain.',
      dot: [640, 270],
      box: [690, 150],
    },
    {
      id: 'plateau',
      group: 'physical',
      word: 'Plateau',
      definition: 'A large area of high, flat land.',
      dot: [200, 180],
      box: [200, 90],
    },
    {
      id: 'plain',
      group: 'physical',
      word: 'Plain',
      definition: 'A large area of low, flat land.',
      dot: [620, 495],
      box: [650, 420],
    },
    {
      id: 'city',
      group: 'human',
      word: 'City',
      definition: 'A very big place where lots of people live and work, with tall buildings and busy streets.',
      dot: [920, 230],
      box: [900, 88],
    },
    {
      id: 'town',
      group: 'human',
      word: 'Town',
      definition: 'A place with many houses, shops and other buildings. It is bigger than a village but smaller than a city.',
      dot: [490, 362],
      box: [470, 255],
    },
    {
      id: 'farmland',
      group: 'human',
      word: 'Farmland',
      definition: 'Land used for growing crops or keeping animals.',
      dot: [170, 482],
      box: [150, 600],
    },
    {
      id: 'motorway',
      group: 'human',
      word: 'Motorway',
      definition: 'A wide, fast road with several lanes, for cars and lorries going long distances.',
      dot: [700, 560],
      box: [895, 565],
    },
  ],
};

export default flatLandscape;
