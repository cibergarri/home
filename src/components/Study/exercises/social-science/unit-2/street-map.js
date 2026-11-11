import StreetMap from '../../../drawings/StreetMap';

// Social Science, unit 2, page 32 (Geo lab): read a street map. A street map is a drawing of an
// area, from above; it shows the streets, buildings and open spaces. The boxes sit on Doctors
// Street and Peace Avenue, so they don't cover the places. `dot` and `box` are in 1000 × 640.
const streetMap = {
  slug: 'street-map',
  title: 'Read a street map',
  instructions: 'A street map is a drawing of an area, from above. Find each place and drag its name to its box.',
  width: 1000,
  height: 640,
  Drawing: StreetMap,
  items: [
    {
      id: 'hospital',
      word: 'Hospital',
      definition: 'Where doctors and nurses look after people who are ill.',
      dot: [630, 340],
      box: [630, 460],
    },
    {
      id: 'museum',
      word: 'Museum',
      definition: 'A building where you can see old and interesting things.',
      dot: [900, 345],
      box: [900, 220],
    },
    {
      id: 'school',
      word: 'School',
      definition: 'Where children go to learn.',
      dot: [600, 560],
      box: [350, 460],
    },
    {
      id: 'park',
      word: 'Park',
      definition: 'A green place with grass and trees, to play and walk.',
      dot: [90, 300],
      box: [90, 460],
    },
    {
      id: 'supermarket',
      word: 'Supermarket',
      definition: 'A big shop where you buy food and other things.',
      dot: [630, 112],
      box: [630, 220],
    },
    {
      id: 'square',
      word: 'Square',
      definition: 'An open space in a town, with paving, benches and sometimes a fountain.',
      dot: [350, 340],
      box: [350, 220],
    },
  ],
  more: [
    {
      title: 'Find it on the map',
      type: 'quiz',
      instructions: 'Look at the street map and answer.',
      questions: [
        { prompt: 'What is a street map?', choices: ['A drawing of an area, from above', 'A photo of a house', 'A list of streets'], answer: 'A drawing of an area, from above' },
        { prompt: 'What does a street map show?', choices: ['Streets, buildings and open spaces', 'Only the rivers', 'Only the people'], answer: 'Streets, buildings and open spaces' },
        { prompt: 'Which street is next to the park?', choices: ['Green Street', 'Book Street'], answer: 'Green Street' },
        { prompt: 'Which place has a fountain and benches?', choices: ['The square', 'The hospital', 'The supermarket'], answer: 'The square' },
        { prompt: 'Where do people go when they are ill?', choices: ['To the hospital', 'To the museum', 'To the library'], answer: 'To the hospital' },
        { prompt: 'Where can you see old and interesting things?', choices: ['In the museum', 'In the supermarket', 'In the park'], answer: 'In the museum' },
        { prompt: 'What is a street map useful for?', choices: ['Finding streets and buildings', 'Cooking', 'Playing football'], answer: 'Finding streets and buildings' },
      ],
    },
  ],
};

export default streetMap;
