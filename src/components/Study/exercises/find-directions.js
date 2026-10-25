import DirectionsMap from '../drawings/DirectionsMap';

// Social Science, unit 1: find directions with the cardinal points. Squares are (column, row) on
// the map's 8 × 8 grid; the start is just below the bottom right square. The first route is the
// workbook's; playing again gives the others.
const findDirections = {
  slug: 'find-directions',
  title: 'Find directions',
  type: 'directions',
  intro: 'The cardinal points are north (N), south (S), east (E) and west (W). The four cardinal points help us find directions. We use them to locate places.',
  Drawing: DirectionsMap,
  start: [7, 8],
  routes: [
    {
      goal: 'the village',
      steps: [
        { direction: 'north', squares: 6 },
        { direction: 'west', squares: 4 },
        { direction: 'south', squares: 2 },
        { direction: 'west', squares: 3 },
        { direction: 'north', squares: 3 },
      ],
    },
    {
      goal: 'the lake',
      steps: [
        { direction: 'north', squares: 6 },
        { direction: 'west', squares: 5 },
      ],
    },
    {
      goal: 'the sea',
      steps: [
        { direction: 'north', squares: 4 },
        { direction: 'west', squares: 2 },
        { direction: 'north', squares: 3 },
      ],
    },
  ],
};

export default findDirections;
