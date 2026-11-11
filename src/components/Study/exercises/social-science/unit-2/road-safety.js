import Street, { PedestrianLight, LIGHT } from '../../../drawings/Street';

// Social Science, unit 2, pages 28–29: road safety. To avoid road accidents, we obey the road safety
// rules and respect road signs. First the street is labelled (the workbook's "observe and write the
// numbers"), then when to cross, then the rules. `dot` and `box` are in the drawing's 1000 × 640.
const light = go => ({ Drawing: PedestrianLight, ...LIGHT, props: { go } });

const roadSafety = {
  slug: 'road-safety',
  title: 'Road safety',
  instructions: 'Drag each word to its box on the street. Tap the speaker to hear it.',
  width: 1000,
  height: 640,
  Drawing: Street,
  items: [
    {
      id: 'pedestrian-crossing',
      word: 'Pedestrian crossing',
      definition: 'White stripes on the road where people cross.',
      dot: [630, 240],
      box: [630, 60],
    },
    {
      id: 'pavement',
      word: 'Pavement',
      definition: 'The path at the side of the street where people walk.',
      dot: [860, 268],
      box: [880, 160],
    },
    {
      id: 'road',
      word: 'Road',
      definition: 'Where cars, buses and lorries drive.',
      dot: [150, 410],
      box: [180, 560],
    },
    {
      id: 'road-sign',
      word: 'Road sign',
      definition: 'A sign that tells drivers and people what to do.',
      dot: [520, 146],
      box: [330, 60],
    },
    {
      id: 'traffic-lights',
      word: 'Traffic lights',
      definition: 'Red, amber and green lights that tell traffic when to stop and go.',
      dot: [735, 420],
      box: [880, 560],
    },
    {
      id: 'cycle-lane',
      word: 'Cycle lane',
      definition: 'A part of the road only for bikes.',
      dot: [300, 316],
      box: [250, 230],
    },
  ],
  more: [
    {
      title: 'Can you cross?',
      type: 'quiz',
      instructions: 'When can you cross the pedestrian crossing? Look at the little man.',
      keepOrder: true,
      questions: [
        { prompt: 'The little man is green.', scene: light(true), choices: ['Cross', 'Don’t cross'], answer: 'Cross' },
        { prompt: 'The little man is red.', scene: light(false), choices: ['Cross', 'Don’t cross'], answer: 'Don’t cross' },
        { prompt: 'Can you cross now?', scene: light(false), choices: ['Cross', 'Don’t cross'], answer: 'Don’t cross' },
        { prompt: 'Can you cross now?', scene: light(true), choices: ['Cross', 'Don’t cross'], answer: 'Cross' },
      ],
    },
    {
      title: 'Road safety rules',
      type: 'quiz',
      instructions: 'Choose the safe thing to do.',
      questions: [
        { prompt: 'Where do you walk?', choices: ['On the pavement', 'In the road'], answer: 'On the pavement' },
        { prompt: 'Where do you cross the road?', choices: ['At the pedestrian crossing', 'Between the cars'], answer: 'At the pedestrian crossing' },
        { prompt: 'What do you wear when you ride a bike or a scooter?', choices: ['A helmet', 'A hat'], answer: 'A helmet' },
        { prompt: 'What do you always wear in the car?', choices: ['A seatbelt', 'A scarf'], answer: 'A seatbelt' },
        { prompt: 'How do you get out of the car?', choices: ['On the safer side, by the pavement', 'On the side of the road'], answer: 'On the safer side, by the pavement' },
        { prompt: 'What do you always respect?', choices: ['The traffic lights and road signs', 'Only the cars'], answer: 'The traffic lights and road signs' },
        { prompt: 'Why do we follow road safety rules?', choices: ['To avoid road accidents', 'To get there first'], answer: 'To avoid road accidents' },
      ],
    },
  ],
};

export default roadSafety;
