// English, unit 4: the story "A new star": questions about it, its phrases, and its value, being
// brave.
const aNewStar = {
  slug: 'a-new-star',
  title: 'Story: A new star',
  heading: 'About the story',
  type: 'quiz',
  instructions: 'Think about the story and choose the right answer.',
  questions: [
    {
      prompt: 'Who is the special actor today?',
      choices: ['Toby.', 'Sam.', 'The scarecrow.'],
      answer: 'Toby.',
    },
    {
      prompt: 'What hair has Toby got?',
      choices: ['Curly hair.', 'Straight hair.', 'Long, fair hair.'],
      answer: 'Straight hair.',
    },
    {
      prompt: 'Has Toby got fair hair?',
      choices: ['Yes, he has.', 'No, he hasn’t.'],
      answer: 'No, he hasn’t.',
    },
    {
      prompt: 'Who’s a pirate in the play?',
      choices: ['Toby.', 'Daisy.', 'The wind.'],
      answer: 'Toby.',
    },
    {
      prompt: 'Toby says: “I’m brave. Yes, I can do that!” How is he?',
      say: 'Toby says: I’m brave. Yes, I can do that! How is he?',
      choices: ['He’s brave.', 'He’s scared.', 'He’s sad.'],
      answer: 'He’s brave.',
    },
    {
      prompt: '«Don’t be scared» means…',
      say: false,
      choices: ['No tengas miedo.', 'Ten cuidado.', '¡Muy bien!'],
      answer: 'No tengas miedo.',
    },
    {
      prompt: 'What does the story teach us?',
      choices: ['It’s good to be brave.', 'It’s good to have a beard.', 'It’s good to be scared.'],
      answer: 'It’s good to be brave.',
    },
  ],
  more: [
    {
      title: 'Phrases from the story',
      type: 'match',
      instructions: 'Tap a phrase in English, then the same phrase in Spanish.',
      pairs: [
        { id: 'cant', en: 'I can’t do that.', es: 'No puedo hacerlo.' },
        { id: 'scared', en: 'Don’t be scared.', es: 'No tengas miedo.' },
        { id: 'where', en: 'Where’s Toby?', es: '¿Dónde está Toby?' },
        { id: 'careful', en: 'Be careful, Sam!', es: '¡Ten cuidado, Sam!' },
        { id: 'well-done', en: 'Well done, Toby!', es: '¡Muy bien, Toby!' },
        { id: 'brave', en: 'I’m brave. Yes, I can do that!', es: 'Soy valiente. ¡Sí, puedo hacerlo!' },
      ],
    },
    {
      title: 'Make the sentence',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'Toby no tiene el pelo rizado.', answer: ['Toby', 'hasn’t', 'got', 'curly', 'hair.'] },
        { prompt: 'Él tiene el pelo liso.', answer: ['He’s', 'got', 'straight', 'hair.'] },
        { prompt: '¿Puedes ser un pirata en nuestra obra?', answer: ['Can', 'you', 'be', 'a', 'pirate', 'in', 'our', 'play?'] },
        { prompt: 'Es bueno ser valiente.', answer: ['It’s', 'good', 'to', 'be', 'brave.'] },
      ],
    },
  ],
};

export default aNewStar;
