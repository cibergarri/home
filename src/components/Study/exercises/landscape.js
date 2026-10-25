import Landscape from '../drawings/Landscape';

// Social Science, unit 1: the features of a landscape, natural or made by people.
// `dot` is the spot on the drawing each box points at and `box` the centre of the box, both in
// the drawing's 1000 × 640 units.
const landscape = {
  slug: 'landscape',
  title: 'Landscape',
  instructions: 'Drag each word to its box on the picture. Tap the speaker to hear it.',
  width: 1000,
  height: 640,
  Drawing: Landscape,
  groups: [
    { id: 'physical', title: 'Physical features (natural)', name: 'physical feature' },
    { id: 'human', title: 'Human features', name: 'human feature' },
  ],
  items: [
    {
      id: 'mountain',
      group: 'physical',
      word: 'Mountain',
      definition: 'A very high piece of land with steep sides.',
      dot: [340, 150],
      box: [340, 42],
    },
    {
      id: 'lake',
      group: 'physical',
      word: 'Lake',
      definition: 'A large area of water with land all around it.',
      dot: [215, 332],
      box: [100, 400],
    },
    {
      id: 'river',
      group: 'physical',
      word: 'River',
      definition: 'Water that flows across the land to the sea, a lake or another river.',
      dot: [532, 556],
      box: [390, 560],
    },
    {
      id: 'tree',
      group: 'physical',
      word: 'Tree',
      definition: 'A tall plant with a wooden trunk, branches and leaves.',
      dot: [870, 480],
      box: [700, 600],
    },
    {
      id: 'houses',
      group: 'human',
      word: 'Houses',
      definition: 'Buildings where people live.',
      dot: [115, 505],
      box: [160, 600],
    },
    {
      id: 'bridge',
      group: 'human',
      word: 'Bridge',
      definition: 'Something built over a river or a road so that people can cross it.',
      dot: [440, 398],
      box: [590, 455],
    },
    {
      id: 'village',
      group: 'human',
      word: 'Village',
      definition: 'A small group of houses and other buildings in the countryside.',
      dot: [800, 270],
      box: [800, 190],
    },
  ],
};

export default landscape;
