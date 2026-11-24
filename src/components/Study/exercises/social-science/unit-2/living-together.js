// Social Science, unit 2, pages 26–27: rules for living together. Our neighbours are the people
// who live near us; we respect each other and follow rules in the neighbourhood. First the rules of
// page 26 with their Spanish.
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
    {
      title: 'Our neighbours',
      type: 'quiz',
      instructions: 'Our neighbours are the people who live near us. Read and choose.',
      questions: [
        { prompt: 'Who are our neighbours?', choices: ['The people who live near us', 'The people who live in another country'], answer: 'The people who live near us' },
        { prompt: 'How can you help your neighbours?', choices: ['Say hello and be kind', 'Make a lot of noise'], answer: 'Say hello and be kind' },
        { prompt: 'What do good neighbours do?', choices: ['They respect each other', 'They disturb other people'], answer: 'They respect each other' },
        { prompt: 'In the neighbourhood, good neighbours follow the…', choices: ['rules', 'cars', 'birds'], answer: 'rules' },
      ],
    },
  ],
};

export default livingTogether;
