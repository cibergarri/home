import { DoYoga, SwimInTheLake, ReadAComic } from '../../../drawings/Camp';
import {
  Beach, Mountains, Funfair, ByTrain, OnFoot,
} from '../../../drawings/Summer';

// English, Review 3 (units 5 and 6): the story "The old map" and the Review race.
const review = {
  slug: 'review',
  title: 'Review 3',
  heading: 'The old map',
  type: 'quiz',
  instructions: 'Remember the story “The old map” and choose the right answer.',
  questions: [
    {
      prompt: 'Where are the children?',
      choices: ['At camp.', 'At school.', 'At the aquarium.'],
      answer: 'At camp.',
    },
    {
      prompt: '“I don’t like this camp. I want to visit a …”',
      choices: ['castle.', 'beach.', 'village.'],
      answer: 'castle.',
    },
    {
      prompt: 'What do the children look for?',
      choices: ['The treasure.', 'The penguins.', 'The zorb ball.'],
      answer: 'The treasure.',
    },
    {
      prompt: '“Where’s the treasure?”',
      choices: ['It’s here. Look!', 'Yes, I do.', 'By car.'],
      answer: 'It’s here. Look!',
    },
    {
      prompt: '“There’s a monster in the …!”',
      choices: ['lake', 'tree', 'tent'],
      answer: 'lake',
    },
    {
      prompt: '“Do you want to go home now?”',
      choices: ['No, thank you. I love this camp!', 'Yes, I do.', 'It’s your turn.'],
      answer: 'No, thank you. I love this camp!',
    },
    {
      prompt: 'Is “The old map” a real story or a fantasy story?',
      choices: ['A real story.', 'A fantasy story.'],
      answer: 'A fantasy story.',
    },
  ],
  more: [
    {
      title: 'Review race: units 5 and 6',
      type: 'quiz',
      instructions: 'Look at the pictures and choose the right sentence.',
      questions: [
        {
          prompt: '😀 ⛵',
          say: false,
          choices: ['I want to sail a boat.', 'I don’t want to sail a boat.', 'I go to the beach by boat.'],
          answer: 'I want to sail a boat.',
        },
        {
          prompt: '🙁 🏐',
          say: false,
          choices: ['I want to play volleyball.', 'I don’t want to play volleyball.', 'I don’t want to play basketball.'],
          answer: 'I don’t want to play volleyball.',
        },
        {
          prompt: '✅ 🎡',
          say: false,
          choices: ['I go to the funfair in summer.', 'I don’t go to the funfair in summer.', 'I go to the water park in summer.'],
          answer: 'I go to the funfair in summer.',
        },
        {
          prompt: '❌ 🏘️',
          say: false,
          choices: ['I go to the village in summer.', 'I don’t go to the village in summer.', 'I don’t want to go to the village.'],
          answer: 'I don’t go to the village in summer.',
        },
        {
          prompt: 'Do you want to read a comic? 😀',
          say: 'Do you want to read a comic?',
          choices: ['Yes, please.', 'Yes, I do.', 'No, thank you.'],
          answer: 'Yes, please.',
        },
        {
          prompt: 'Do you go to the beach in summer? ✅',
          say: 'Do you go to the beach in summer?',
          choices: ['Yes, I do.', 'Yes, please.', 'No, I don’t.'],
          answer: 'Yes, I do.',
        },
        {
          prompt: 'Do you go to the mountains by train? ❌',
          say: 'Do you go to the mountains by train?',
          choices: ['No, thank you.', 'No, I don’t.', 'Yes, I do.'],
          answer: 'No, I don’t.',
        },
        {
          prompt: 'Do you want to climb a tree? 🙁',
          say: 'Do you want to climb a tree?',
          choices: ['No, I don’t.', 'Yes, please.', 'No, thank you.'],
          answer: 'No, thank you.',
        },
      ],
    },
    {
      title: 'Pictures: units 5 and 6',
      type: 'match',
      instructions: 'Tap a word, then its picture.',
      columns: ['Word', 'Picture'],
      pairs: [
        { id: 'yoga', en: 'do yoga', es: 'hacer yoga', Picture: DoYoga },
        { id: 'swim', en: 'swim in the lake', es: 'nadar en el lago', Picture: SwimInTheLake },
        { id: 'comic', en: 'read a comic', es: 'leer un cómic', Picture: ReadAComic },
        { id: 'beach', en: 'beach', es: 'playa', Picture: Beach },
        { id: 'mountains', en: 'mountains', es: 'montañas', Picture: Mountains },
        { id: 'funfair', en: 'funfair', es: 'feria', Picture: Funfair },
        { id: 'train', en: 'by train', es: 'en tren', Picture: ByTrain },
        { id: 'foot', en: 'on foot', es: 'a pie, andando', Picture: OnFoot },
      ],
    },
    {
      title: 'Match: units 5 and 6',
      type: 'match',
      instructions: 'Tap a word in English, then the same in Spanish.',
      pairs: [
        { id: 'yoga', en: 'do yoga', es: 'hacer yoga' },
        { id: 'swim', en: 'swim in the lake', es: 'nadar en el lago' },
        { id: 'comic', en: 'read a comic', es: 'leer un cómic' },
        { id: 'beach', en: 'beach', es: 'playa' },
        { id: 'mountains', en: 'mountains', es: 'montañas' },
        { id: 'funfair', en: 'funfair', es: 'feria' },
        { id: 'train', en: 'by train', es: 'en tren' },
        { id: 'foot', en: 'on foot', es: 'a pie, andando' },
      ],
    },
    {
      title: 'Put the words in order',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'sail / I / a / to / want / boat', answer: ['I', 'want', 'to', 'sail', 'a', 'boat.'] },
        { prompt: 'you / Do / to / want / go / home', answer: ['Do', 'you', 'want', 'to', 'go', 'home?'] },
        { prompt: 'go / I / the / to / beach / summer / in', answer: ['I', 'go', 'to', 'the', 'beach', 'in', 'summer.'] },
        { prompt: 'Do / go / you / to / the / village / car / by', answer: ['Do', 'you', 'go', 'to', 'the', 'village', 'by', 'car?'] },
        { prompt: 'treasure / the / for / look / Let’s', answer: ['Let’s', 'look', 'for', 'the', 'treasure!'] },
      ],
    },
  ],
};

export default review;
