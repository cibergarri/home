// English, welcome: greetings, What’s your name? and How old are you? I’m (seven).
const greetings = {
  slug: 'greetings',
  title: 'Hello!',
  heading: 'Match the greetings',
  type: 'match',
  instructions: 'Tap a greeting in English, then the same in Spanish.',
  pairs: [
    { id: 'hello', en: 'Hello!', es: '¡Hola!' },
    { id: 'goodbye', en: 'Goodbye!', es: '¡Adiós!' },
    { id: 'morning', en: 'Good morning!', es: '¡Buenos días!' },
    { id: 'afternoon', en: 'Good afternoon!', es: '¡Buenas tardes!' },
    { id: 'night', en: 'Good night!', es: '¡Buenas noches!' },
    { id: 'please', en: 'Please.', es: 'Por favor.' },
    { id: 'thank-you', en: 'Thank you.', es: 'Gracias.' },
  ],
  more: [
    {
      title: 'Answer me',
      type: 'quiz',
      instructions: 'Read and choose the right answer.',
      questions: [
        {
          prompt: '👋 Hello! What’s your name?',
          choices: ['Hello, I’m Julia.', 'I’m seven.', 'Goodbye!'],
          answer: 'Hello, I’m Julia.',
        },
        {
          prompt: '🎂 How old are you? (7)',
          say: 'How old are you?',
          choices: ['I’m Julia.', 'I’m seven.', 'I’m eight.'],
          answer: 'I’m seven.',
        },
        {
          prompt: '🎂 How old is Daisy? (8)',
          say: 'How old is Daisy?',
          choices: ['She’s eight.', 'He’s eight.', 'She’s six.'],
          answer: 'She’s eight.',
        },
        {
          prompt: '🎂 How old is Toby? (9)',
          say: 'How old is Toby?',
          choices: ['She’s nine.', 'He’s nine.', 'He’s five.'],
          answer: 'He’s nine.',
        },
        {
          prompt: '☀️ It’s morning. What do you say?',
          choices: ['Good night!', 'Good morning!', 'Goodbye!'],
          answer: 'Good morning!',
        },
        {
          prompt: '🌙 It’s time for bed. What do you say?',
          choices: ['Good night!', 'Hello!', 'Good afternoon!'],
          answer: 'Good night!',
        },
        {
          prompt: '🎁 Here’s a present for you!',
          choices: ['Please.', 'Thank you!', 'Good morning!'],
          answer: 'Thank you!',
        },
        {
          prompt: '🚪 You go home. What do you say?',
          choices: ['Hello!', 'Thank you.', 'Goodbye!'],
          answer: 'Goodbye!',
        },
      ],
    },
    {
      title: 'Ask and answer',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: '¿Cómo te llamas?', answer: ['What’s', 'your', 'name?'] },
        { prompt: 'Hola, soy Julia.', answer: ['Hello,', 'I’m', 'Julia.'] },
        { prompt: '¿Cuántos años tienes?', answer: ['How', 'old', 'are', 'you?'] },
        { prompt: 'Tengo siete años.', answer: ['I’m', 'seven.'] },
        { prompt: '¿Cuántos años tiene Toby?', answer: ['How', 'old', 'is', 'Toby?'] },
      ],
    },
  ],
};

export default greetings;
