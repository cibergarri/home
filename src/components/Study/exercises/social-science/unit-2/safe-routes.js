// Social Science, unit 2, page 33 (Language makers): safe routes. Where cars, bikes and pedestrians
// go: the rules of the page, with the words dragged into their gaps, and then as questions.
const safeRoutes = {
  slug: 'safe-routes',
  title: 'Safe routes',
  heading: 'Complete the rules',
  type: 'gaps',
  related: { exercise: 'diagrams', part: 'Road safety rules', label: 'Look at the road safety rules' },
  instructions: 'As on page 33: drag each word to its gap, or tap it and then tap the gap.',
  sentences: [
    'Cars drive on the [road].',
    'Bikes ride on the [cycle lane].',
    'Pedestrians walk on the [pavement].',
  ],
  more: [
    {
      title: 'Who goes where?',
      type: 'quiz',
      instructions: 'Complete the rules about road safety.',
      keepOrder: true,
      questions: [
        { prompt: 'Cars drive on the …', choices: ['road', 'cycle lane', 'pavement'], answer: 'road' },
        { prompt: 'Bikes ride on the …', choices: ['road', 'cycle lane', 'pavement'], answer: 'cycle lane' },
        { prompt: 'Pedestrians walk on the …', choices: ['road', 'cycle lane', 'pavement'], answer: 'pavement' },
        { prompt: 'Before you cross: stop and …', choices: ['look', 'run', 'jump'], answer: 'look' },
      ],
    },
  ],
};

export default safeRoutes;
