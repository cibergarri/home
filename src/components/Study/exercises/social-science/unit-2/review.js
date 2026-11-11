// Social Science, unit 2, pages 34–37: check your progress, and the Review 1 and 2 board game
// (questions about landscapes from unit 1 and the neighbourhood from unit 2).
const review = {
  slug: 'review',
  title: 'Check your progress',
  heading: 'True or false?',
  type: 'quiz',
  instructions: 'Read each sentence. Is it true or false?',
  keepOrder: true,
  questions: [
    { prompt: 'Cities have few inhabitants.', choices: ['True', 'False'], answer: 'False' },
    { prompt: 'We can cross the road at the pedestrian crossing.', choices: ['True', 'False'], answer: 'True' },
    { prompt: 'The local council organises the local services.', choices: ['True', 'False'], answer: 'True' },
    { prompt: 'Good neighbours disturb other people.', choices: ['True', 'False'], answer: 'False' },
    { prompt: 'In a village, there is a lot of traffic.', choices: ['True', 'False'], answer: 'False' },
    { prompt: 'The mayor is the head of the local council.', choices: ['True', 'False'], answer: 'True' },
    { prompt: 'Cars drive on the pavement.', choices: ['True', 'False'], answer: 'False' },
  ],
  more: [
    {
      title: 'Which are local services?',
      type: 'quiz',
      instructions: 'Choose the local service.',
      questions: [
        { prompt: 'Which one is a local service?', choices: ['Library', 'Kitchen'], answer: 'Library' },
        { prompt: 'Which one is a local service?', choices: ['Parks and gardens', 'My bedroom'], answer: 'Parks and gardens' },
        { prompt: 'Which one is a local service?', choices: ['Police', 'My toys'], answer: 'Police' },
      ],
    },
    {
      title: 'Review 1 and 2: play time!',
      type: 'quiz',
      instructions: 'The questions of the board game. Answer them all to reach the finish!',
      questions: [
        { prompt: 'How can we be good neighbours?', choices: ['We respect each other and follow the rules', 'We make a lot of noise'], answer: 'We respect each other and follow the rules' },
        { prompt: 'Who is the head of the local council?', choices: ['The mayor', 'The teacher', 'The doctor'], answer: 'The mayor' },
        { prompt: 'Where do we cross the road?', choices: ['At the pedestrian crossing', 'Anywhere'], answer: 'At the pedestrian crossing' },
        { prompt: 'A bridge is a … feature.', choices: ['human', 'physical'], answer: 'human' },
        { prompt: 'Do cars go on roads or on the pavement?', choices: ['On roads', 'On the pavement'], answer: 'On roads' },
        { prompt: 'When do we use a helmet?', choices: ['When we ride a bike or a scooter', 'When we sleep'], answer: 'When we ride a bike or a scooter' },
        { prompt: 'Is a place with tall buildings and a lot of traffic a city or a village?', choices: ['A city', 'A village'], answer: 'A city' },
        { prompt: 'Where does a river start?', choices: ['In the mountains, at its source', 'At the sea'], answer: 'In the mountains, at its source' },
        { prompt: 'What is a tributary?', choices: ['A small river that flows into a larger river', 'A very high mountain'], answer: 'A small river that flows into a larger river' },
        { prompt: 'Land with water all around it is…', choices: ['an island', 'a peninsula'], answer: 'an island' },
        { prompt: 'Name a physical feature.', choices: ['A mountain', 'A motorway', 'A town'], answer: 'A mountain' },
        { prompt: 'The man is red. Can we cross the road now?', choices: ['No', 'Yes'], answer: 'No' },
      ],
    },
  ],
};

export default review;
