import MountainLandscape from '../drawings/MountainLandscape';
import MountainParts from '../drawings/MountainParts';

// Social Science, unit 1: the features of a mountain landscape, natural or made by people, and
// below them the parts of a mountain.
// `dot` is the spot on the drawing each box points at and `box` the centre of the box, both in
// the drawing's 1000 × 640 units.
const mountainLandscapes = {
  slug: 'mountain-landscapes',
  title: 'Mountain landscapes',
  instructions: 'Drag each word to its box on the picture. Tap the speaker to hear it.',
  width: 1000,
  height: 640,
  boxWidth: 220, // for "Mountain range"
  Drawing: MountainLandscape,
  groups: [
    { id: 'physical', title: 'Physical features (natural)', name: 'physical feature' },
    { id: 'human', title: 'Human features', name: 'human feature' },
  ],
  items: [
    {
      id: 'mountain-range',
      group: 'physical',
      word: 'Mountain range',
      definition: 'A long line of mountains joined together.',
      dot: [520, 160],
      box: [520, 42],
    },
    {
      id: 'valley',
      group: 'physical',
      word: 'Valley',
      definition: 'The low land between mountains or hills, often with a river along it.',
      dot: [610, 455],
      box: [640, 380],
    },
    {
      id: 'river',
      group: 'physical',
      word: 'River',
      definition: 'Water that flows across the land to the sea, a lake or another river.',
      dot: [515, 605],
      box: [640, 605],
    },
    {
      id: 'small-village',
      group: 'human',
      word: 'Small village',
      definition: 'A few houses and other buildings together in the countryside.',
      dot: [398, 455],
      box: [165, 395],
    },
    {
      id: 'narrow-road',
      group: 'human',
      word: 'Narrow road',
      definition: 'A thin road, often with many bends to climb up a mountain.',
      dot: [792, 525],
      box: [878, 595],
    },
    {
      id: 'tunnel',
      group: 'human',
      word: 'Tunnel',
      definition: 'A passage dug through a mountain so that a road or a railway can go through it.',
      dot: [860, 318],
      box: [860, 222],
    },
    {
      id: 'bridge',
      group: 'human',
      word: 'Bridge',
      definition: 'Something built over a river or a road so that people can cross it.',
      dot: [506, 497],
      box: [380, 585],
    },
  ],
  more: [
    {
      title: 'Parts of a mountain',
      instructions: 'Now put the parts of a mountain in their boxes.',
      width: 1000,
      height: 640,
      Drawing: MountainParts,
      items: [
        {
          id: 'peak',
          word: 'Peak',
          definition: 'The highest point at the top of a mountain.',
          dot: [300, 112],
          box: [130, 95],
        },
        {
          id: 'slope',
          word: 'Slope',
          definition: 'The side of a mountain, between the peak and the foot.',
          dot: [242, 300],
          box: [95, 320],
        },
        {
          id: 'foot',
          word: 'Foot',
          definition: 'The lowest part of a mountain, where it meets the flat land.',
          dot: [70, 560],
          box: [190, 605],
        },
        {
          id: 'valley',
          word: 'Valley',
          definition: 'The low land between mountains or hills, often with a river along it.',
          dot: [500, 512],
          box: [510, 280],
        },
      ],
    },
  ],
};

export default mountainLandscapes;
