import VillagesAndCitiesMap from '../../../drawings/VillagesAndCitiesMap';
import LocalCouncilMap from '../../../drawings/LocalCouncilMap';

// Social Science, unit 2: mind maps to look at, to go over the unit, in the order of the book:
// villages, towns and cities (pages 24–25), then the local council (pages 30–31).
const diagrams = {
  slug: 'diagrams',
  title: 'Diagrams',
  heading: 'Villages, towns and cities',
  type: 'diagram',
  instructions: 'Look at the mind map. How is a village different from a town or a city?',
  width: 1200,
  height: 880,
  Drawing: VillagesAndCitiesMap,
  description: 'A mind map. Where do we live? A village is small and quiet: few inhabitants, low buildings, '
    + 'narrow and short streets, not much traffic and few houses. A town or city is large and busy: many '
    + 'inhabitants, tall buildings, long and wide streets, a lot of traffic, and many houses in different neighbourhoods.',
  note: 'Grey words are in Spanish.',
  more: [
    {
      title: 'The local council',
      type: 'diagram',
      instructions: 'Look at the mind map. Follow the arrows and read about the local council.',
      width: 1200,
      height: 870,
      Drawing: LocalCouncilMap,
      description: 'A mind map. The local council governs the municipality. It is the mayor and the councillors. '
        + 'It works in the town hall. The people vote for it every four years. It organises the local services: '
        + 'libraries, museums, parks and gardens, police and traffic, public transport, rubbish collection and cultural events.',
      note: 'Grey words are in Spanish.',
    },
  ],
};

export default diagrams;
