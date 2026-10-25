// English, unit 1: the days of the week.
const daysOfTheWeek = {
  slug: 'days-of-the-week',
  title: 'Days of the week',
  heading: 'Match the days',
  type: 'match',
  instructions: 'Tap a day in English, then the same day in Spanish.',
  pairs: [
    { id: 'monday', en: 'Monday', es: 'Lunes' },
    { id: 'tuesday', en: 'Tuesday', es: 'Martes' },
    { id: 'wednesday', en: 'Wednesday', es: 'Miércoles' },
    { id: 'thursday', en: 'Thursday', es: 'Jueves' },
    { id: 'friday', en: 'Friday', es: 'Viernes' },
    { id: 'saturday', en: 'Saturday', es: 'Sábado' },
    { id: 'sunday', en: 'Sunday', es: 'Domingo' },
  ],
  more: [
    {
      title: 'In order',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        {
          prompt: 'Put the days of the week in order.',
          hint: 'Start with Monday.',
          answer: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          separator: ', ',
        },
        {
          prompt: 'What day is it today?',
          hint: 'Es lunes.',
          answer: ['It’s', 'Monday.'],
        },
        {
          prompt: 'What’s your favourite day?',
          hint: 'Mi día favorito es el sábado.',
          answer: ['My', 'favourite', 'day', 'is', 'Saturday.'],
        },
      ],
    },
  ],
};

export default daysOfTheWeek;
