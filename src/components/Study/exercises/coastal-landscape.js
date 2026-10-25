import CoastalLandscape from '../drawings/CoastalLandscape';

// Social Science, unit 1: the parts of a coastal landscape.
// `dot` is the spot on the drawing each box points at and `box` the centre of the box, both in
// the drawing's 1000 × 640 units.
const coastalLandscape = {
  slug: 'coastal-landscape',
  title: 'Coastal landscape',
  instructions: 'Drag each word to its box on the picture. Tap the speaker to hear it.',
  width: 1000,
  height: 640,
  Drawing: CoastalLandscape,
  items: [
    {
      id: 'cape',
      word: 'Cape',
      definition: 'A pointed piece of land that sticks out into the sea.',
      dot: [888, 252],
      box: [890, 345],
    },
    {
      id: 'beach',
      word: 'Beach',
      definition: 'A flat strip of sand or small stones next to the sea.',
      dot: [271, 322],
      box: [115, 330],
    },
    {
      id: 'bay',
      word: 'Bay',
      definition: 'A part of the sea that goes into the land. It is smaller than a gulf.',
      dot: [795, 150],
      box: [800, 50],
    },
    {
      id: 'gulf',
      word: 'Gulf',
      definition: 'A big part of the sea that goes into the land. It is bigger than a bay.',
      dot: [445, 112],
      box: [445, 178],
    },
    {
      id: 'peninsula',
      word: 'Peninsula',
      definition: 'A large piece of land surrounded by water on three sides.',
      dot: [665, 345],
      box: [665, 505],
    },
    {
      id: 'island',
      word: 'Island',
      definition: 'A piece of land completely surrounded by water.',
      dot: [855, 540],
      box: [855, 598],
    },
    {
      id: 'archipelago',
      word: 'Archipelago',
      definition: 'A group of islands close together.',
      dot: [422, 335],
      box: [410, 490],
    },
  ],
};

export default coastalLandscape;
