import River, { UPPER, MIDDLE, LOWER } from '../drawings/River';

// Social Science, unit 1: how rivers change landscapes. First the river is followed from its source
// to its mouth, a course at a time; then its parts are labelled; then facts are sorted by course.
const rivers = {
  slug: 'rivers',
  title: 'How do rivers change landscapes?',
  type: 'story',
  instructions: 'Follow the river from the mountains to the sea. Tap Next to go on.',
  width: 1000,
  height: 640,
  Drawing: River,
  start: [640, 60],
  steps: [
    {
      title: 'A river',
      text: 'A river is a large, moving body of fresh water. It flows through many different landscapes. The route of a river is its course.',
    },
    {
      title: 'Upper course',
      where: '⛰️ In the mountains',
      text: 'Rivers start in the mountains, at their source. Here they are narrow and carry little water. They flow fast.',
      focus: 'upper',
      path: UPPER,
      speed: 90,
      tags: [{ text: 'Source', at: [730, 62] }],
    },
    {
      title: 'Middle course',
      where: '🌾 On the plains',
      text: 'On the plains, rivers are wide and flow slowly. They collect water from tributaries, small rivers that flow into larger rivers.',
      focus: 'middle',
      path: MIDDLE,
      speed: 75,
      tags: [{ text: 'Tributary', at: [880, 250] }],
    },
    {
      title: 'Lower course',
      where: '🏖️ At the coast',
      text: 'At the coast, rivers are wide and flow very slowly. Rivers end at the sea, at their mouth.',
      focus: 'lower',
      path: LOWER,
      speed: 30,
      tags: [{ text: 'Mouth', at: [760, 612] }],
    },
  ],
  more: [
    {
      title: 'Parts of a river',
      instructions: 'Drag each word to its box on the river. Tap the speaker to hear it.',
      width: 1000,
      height: 640,
      boxWidth: 210, // for "Middle course"
      Drawing: River,
      items: [
        {
          id: 'source',
          word: 'Source',
          definition: 'The place where a river starts, high in the mountains.',
          dot: [640, 62],
          box: [830, 40],
        },
        {
          id: 'upper-course',
          word: 'Upper course',
          definition: 'The first part of a river, in the mountains. It is narrow and fast.',
          dot: [646, 120],
          box: [400, 125],
        },
        {
          id: 'middle-course',
          word: 'Middle course',
          definition: 'The part of a river on the plains. It is wide and slow.',
          dot: [470, 280],
          box: [230, 250],
        },
        {
          id: 'tributary',
          word: 'Tributary',
          definition: 'A small river that flows into a larger river.',
          dot: [860, 296],
          box: [880, 210],
        },
        {
          id: 'lower-course',
          word: 'Lower course',
          definition: 'The last part of a river, at the coast. It is wide and very slow.',
          dot: [508, 480],
          box: [290, 475],
        },
        {
          id: 'mouth',
          word: 'Mouth',
          definition: 'The place where a river ends and flows into the sea.',
          dot: [622, 600],
          box: [840, 605],
        },
      ],
    },
    {
      title: 'Which course is it?',
      type: 'sort',
      instructions: 'Drag each card to the course of the river it tells you about.',
      columns: [
        { id: 'upper', title: 'Upper course', subtitle: 'Mountains' },
        { id: 'middle', title: 'Middle course', subtitle: 'Plains' },
        { id: 'lower', title: 'Lower course', subtitle: 'Coast' },
      ],
      cards: [
        { id: 'starts', text: 'Starts in the mountains', columns: ['upper'] },
        { id: 'narrow', text: 'Narrow', columns: ['upper'] },
        { id: 'little-water', text: 'Carries little water', columns: ['upper'] },
        { id: 'fast', text: 'Flows fast', columns: ['upper'] },
        { id: 'plains', text: 'Crosses the plains', columns: ['middle'] },
        { id: 'slowly', text: 'Flows slowly', columns: ['middle'] },
        { id: 'tributaries', text: 'Collects water from tributaries', columns: ['middle'] },
        { id: 'wide', text: 'Wide', columns: ['middle', 'lower'] },
        { id: 'coast', text: 'Reaches the coast', columns: ['lower'] },
        { id: 'very-slowly', text: 'Flows very slowly', columns: ['lower'] },
        { id: 'sea', text: 'Ends at the sea', columns: ['lower'] },
      ],
    },
  ],
};

export default rivers;
