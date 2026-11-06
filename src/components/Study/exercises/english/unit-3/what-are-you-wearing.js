import {
  Dress, Jeans, Jacket, TShirt, Trainers,
} from '../../../drawings/Clothes';

const picture = Drawing => ({ Drawing, width: 160, height: 110 });

// English, unit 3: What are you wearing? I’m wearing (a dress), with colours too.
const whatAreYouWearing = {
  slug: 'what-are-you-wearing',
  title: 'What are you wearing?',
  heading: 'Look and answer',
  type: 'quiz',
  instructions: 'Look at the picture and choose the right answer. Say “a” for one thing: a dress, a jacket. Don’t say “a” for jeans, trousers or trainers.',
  questions: [
    {
      prompt: 'What are you wearing?',
      scene: picture(Dress),
      choices: ['I’m wearing a dress.', 'I’m wearing a skirt.', 'I’m wearing jeans.'],
      answer: 'I’m wearing a dress.',
    },
    {
      prompt: 'What are you wearing, Toby?',
      scene: picture(Jeans),
      choices: ['I’m wearing trousers.', 'I’m wearing jeans.', 'I’m wearing a jeans.'],
      answer: 'I’m wearing jeans.',
    },
    {
      prompt: 'What are you wearing, Daisy?',
      scene: picture(Jacket),
      choices: ['I’m wearing a sweater.', 'I’m wearing a dress.', 'I’m wearing a jacket.'],
      answer: 'I’m wearing a jacket.',
    },
    {
      prompt: 'What are you wearing, Sam?',
      scene: picture(TShirt),
      choices: ['I’m wearing a T-shirt.', 'I’m wearing a skirt.', 'I’m wearing T-shirt.'],
      answer: 'I’m wearing a T-shirt.',
    },
    {
      prompt: 'What are you wearing on your feet?',
      scene: picture(Trainers),
      choices: ['I’m wearing a trainers.', 'I’m wearing trainers.', 'I’m wearing a hat.'],
      answer: 'I’m wearing trainers.',
    },
    {
      prompt: '👕 + 👖 What are you wearing today?',
      say: 'What are you wearing today?',
      choices: ['I’m wearing a T-shirt and jeans.', 'I’m wearing a dress and trainers.', 'I’m wearing a jacket and a skirt.'],
      answer: 'I’m wearing a T-shirt and jeans.',
    },
    {
      prompt: '🟡 A yellow sweater. Which is it?',
      say: 'Which is it?',
      choices: ['a yellow sweater', 'a sweater yellow', 'a yellow skirt'],
      answer: 'a yellow sweater',
    },
    {
      prompt: '«Llevo puesto un vestido naranja.»',
      say: false,
      choices: ['I’m wearing an orange dress.', 'I’m wearing a dress orange.', 'I’m wearing an orange skirt.'],
      answer: 'I’m wearing an orange dress.',
    },
  ],
  more: [
    {
      title: 'Make the sentence',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: '¿Qué llevas puesto?', answer: ['What', 'are', 'you', 'wearing?'] },
        { prompt: 'Llevo puesto un vestido.', answer: ['I’m', 'wearing', 'a', 'dress.'] },
        { prompt: 'Llevo puestos un jersey, pantalones y zapatillas.', answer: ['I’m', 'wearing', 'a', 'sweater,', 'trousers', 'and', 'trainers.'] },
        { prompt: 'Llevo puesta una falda morada.', answer: ['I’m', 'wearing', 'a', 'purple', 'skirt.'] },
        { prompt: 'Llevo puestos unos pantalones verdes.', answer: ['I’m', 'wearing', 'green', 'trousers.'] },
        { prompt: 'Llevo puesta una chaqueta rosa.', answer: ['I’m', 'wearing', 'a', 'pink', 'jacket.'] },
      ],
    },
  ],
};

export default whatAreYouWearing;
