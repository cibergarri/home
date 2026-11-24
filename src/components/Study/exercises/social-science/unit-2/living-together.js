import Neighbourhood, { BEHAVIOURS } from '../../../drawings/Neighbourhood';

// Social Science, unit 2, pages 26–27: rules for living together. Our neighbours are the people
// who live near us; we respect each other and follow rules in the neighbourhood. First the rules of
// page 26 with their Spanish, then the good and bad behaviours of page 27 in a street.
const livingTogether = {
  slug: 'living-together',
  title: 'Rules for living together',
  heading: 'Rules in the neighbourhood',
  type: 'match',
  related: { exercise: 'diagrams', part: 'Rules for living together', label: 'Look at the rules for living together' },
  instructions: 'The people who live near us are our neighbours. We respect each other. Tap a rule, then the same rule in Spanish.',
  explain: false, // the flags would give the Spanish away
  columns: ['Rule', 'In Spanish'],
  pairs: [
    { id: 'bins', en: 'Use the bins and keep the streets clean.', es: 'Usa las papeleras y mantén limpias las calles.' },
    { id: 'separate', en: 'Separate your rubbish into different containers.', es: 'Separa la basura en distintos contenedores.' },
    { id: 'dog', en: 'Walk your dog on a lead. Clean up after them.', es: 'Pasea a tu perro con correa y recoge lo que ensucie.' },
    { id: 'disturb', en: 'Don’t disturb other people.', es: 'No molestes a los demás.' },
    { id: 'facilities', en: 'Look after the facilities we share.', es: 'Cuida las instalaciones que compartimos.' },
    { id: 'help', en: 'Help our neighbours.', es: 'Ayuda a tus vecinos.' },
  ],
  more: [
    {
      title: 'Good or bad behaviour?',
      type: 'spot',
      instructions: 'As on page 27: find the good and the bad behaviours in the street.',
      hint: 'Tap a person in the picture.',
      width: 1200,
      height: 640,
      Drawing: Neighbourhood,
      answers: [
        { id: 'good', label: '⭕ Good behaviour', mark: 'circle' },
        { id: 'bad', label: '❌ Bad behaviour', mark: 'cross' },
      ],
      spots: BEHAVIOURS.map(({ good, ...spot }) => ({ ...spot, answer: good ? 'good' : 'bad' })),
    },
    {
      title: 'Choose the rule',
      type: 'quiz',
      instructions: 'Which one is the good rule?',
      // Every answer in Spanish, the good and the bad alike, so the flags give nothing away.
      translations: {
        'Don’t drop litter on the street.': 'No tires basura a la calle.',
        'Drop litter on the street.': 'Tira basura a la calle.',
        'Offer your seat to people who need it.': 'Cede tu asiento a quien lo necesita.',
        'Don’t offer your seat to people who need it.': 'No cedas tu asiento a quien lo necesita.',
        'Don’t paint on the walls.': 'No pintes en las paredes.',
        'Paint on the walls.': 'Pinta en las paredes.',
        'Walk your dog on a lead.': 'Pasea a tu perro con correa.',
        'Let your dog run anywhere.': 'Deja que tu perro corra por cualquier sitio.',
        'Separate your rubbish into different containers.': 'Separa la basura en distintos contenedores.',
        'Put all your rubbish on the pavement.': 'Deja toda la basura en la acera.',
      },
      questions: [
        { prompt: 'Litter on the street', choices: ['Don’t drop litter on the street.', 'Drop litter on the street.'], answer: 'Don’t drop litter on the street.' },
        { prompt: 'Your seat on the bus', choices: ['Offer your seat to people who need it.', 'Don’t offer your seat to people who need it.'], answer: 'Offer your seat to people who need it.' },
        { prompt: 'The walls', choices: ['Don’t paint on the walls.', 'Paint on the walls.'], answer: 'Don’t paint on the walls.' },
        { prompt: 'Your dog', choices: ['Walk your dog on a lead.', 'Let your dog run anywhere.'], answer: 'Walk your dog on a lead.' },
        { prompt: 'Rubbish', choices: ['Separate your rubbish into different containers.', 'Put all your rubbish on the pavement.'], answer: 'Separate your rubbish into different containers.' },
      ],
    },
  ],
};

export default livingTogether;
