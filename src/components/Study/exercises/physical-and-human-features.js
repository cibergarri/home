// Social Science, unit 1: physical and human features. As in the workbook's "check your progress",
// the features of each type of landscape are coloured in with its crayon: first the physical
// features, then the human ones.
const MOUNTAIN = { id: 'mountain', title: 'Mountain landscapes', colour: '#8ec5f2' };
const FLAT = { id: 'flat', title: 'Flat landscapes', colour: '#a6db8a' };
const COASTAL = { id: 'coastal', title: 'Coastal landscapes', colour: '#f7dc6f' };

const physicalAndHumanFeatures = {
  slug: 'physical-and-human-features',
  title: 'Physical and Human Features',
  heading: 'Physical features',
  type: 'colour',
  instructions: 'Colour the physical features of each type of landscape. Pick up a crayon, then tap its words.',
  crayons: [MOUNTAIN, FLAT, COASTAL],
  words: [
    { id: 'valley', word: 'Valley', crayon: 'mountain' },
    { id: 'beach', word: 'Beach', crayon: 'coastal' },
    { id: 'mountain', word: 'Mountain', crayon: 'mountain' },
    { id: 'plateau', word: 'Plateau', crayon: 'flat' },
    { id: 'cape', word: 'Cape', crayon: 'coastal' },
    { id: 'island', word: 'Island', crayon: 'coastal' },
    { id: 'mountain-range', word: 'Mountain range', crayon: 'mountain' },
    { id: 'hill', word: 'Hill', crayon: 'flat' },
    { id: 'cliff', word: 'Cliff', crayon: 'coastal' },
    { id: 'plain', word: 'Plain', crayon: 'flat' },
  ],
  more: [
    {
      title: 'Human features',
      type: 'colour',
      instructions: 'Now colour the human features of each type of landscape.',
      crayons: [MOUNTAIN, FLAT],
      words: [
        { id: 'city', word: 'City', crayon: 'flat' },
        { id: 'tunnel', word: 'Tunnel', crayon: 'mountain' },
        { id: 'farmland', word: 'Farmland', crayon: 'flat' },
        { id: 'small-village', word: 'Small village', crayon: 'mountain' },
        { id: 'motorway', word: 'Motorway', crayon: 'flat' },
        { id: 'narrow-road', word: 'Narrow road', crayon: 'mountain' },
        { id: 'town', word: 'Town', crayon: 'flat' },
        { id: 'bridge', word: 'Bridge', crayon: 'mountain' },
      ],
    },
  ],
};

export default physicalAndHumanFeatures;
