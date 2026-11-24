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
};

export default streetMap;
