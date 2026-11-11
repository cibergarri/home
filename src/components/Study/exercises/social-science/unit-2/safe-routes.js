// Social Science, unit 2, page 33 (Language makers): safe routes. Kelly's route to school by bike,
// read and answered, then where cars, bikes and pedestrians go. The story is told in the
// instructions so it stays on screen while she answers.
const safeRoutes = {
  slug: 'safe-routes',
  title: 'Safe routes',
  heading: 'Kelly’s route to school',
  type: 'quiz',
  instructions: 'Read about Kelly. Kelly lives with her aunt in a big city. Every day, her aunt takes Kelly to school. They go to school by bike. First, they put on their helmets and go to the cycle lane. They turn right into a wide street. Then, they stop and wait for the traffic lights to turn green to cross the road. Finally, they arrive at school.',
  questions: [
    { prompt: 'Where does Kelly live?', choices: ['In a big city', 'In a small village'], answer: 'In a big city' },
    { prompt: 'Who takes Kelly to school?', choices: ['Her aunt', 'Her grandad', 'Her brother'], answer: 'Her aunt' },
    { prompt: 'How do they go to school?', choices: ['By bike', 'By car', 'On foot'], answer: 'By bike' },
    { prompt: 'What do they put on first?', choices: ['Their helmets', 'Their coats', 'Their seatbelts'], answer: 'Their helmets' },
    { prompt: 'Where do they ride?', choices: ['In the cycle lane', 'On the pavement'], answer: 'In the cycle lane' },
    { prompt: 'When do they cross the road?', choices: ['When the traffic lights turn green', 'When the traffic lights are red'], answer: 'When the traffic lights turn green' },
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
