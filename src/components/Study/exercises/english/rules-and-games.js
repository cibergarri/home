import {
  ListenToOthers, PutYourHandUp, PlayNicely, WashYourHands, LineUp, DontShout,
  HideAndSeek, MonsterTag, Catch, Hopscotch,
} from '../../drawings/RulesAndGames';

// English, unit 1: school rules and playground games, each matched with a picture of it (the
// Spanish is kept as the picture's label).
const rulesAndGames = {
  slug: 'rules-and-games',
  title: 'School rules and games',
  heading: 'School rules',
  type: 'match',
  instructions: 'Tap a rule, then the picture that shows it.',
  pairs: [
    { id: 'listen', en: 'Listen to others.', es: 'Escucha a los demás.', Picture: ListenToOthers },
    { id: 'hand-up', en: 'Put your hand up.', es: 'Levanta la mano.', Picture: PutYourHandUp },
    { id: 'play', en: 'Play nicely.', es: 'Juega respetando a los demás.', Picture: PlayNicely },
    { id: 'wash', en: 'Wash your hands.', es: 'Lávate las manos.', Picture: WashYourHands },
    { id: 'line-up', en: 'Line up.', es: 'Ponte en fila.', Picture: LineUp },
    { id: 'shout', en: 'Don’t shout in the library.', es: 'No grites en la biblioteca.', Picture: DontShout },
  ],
  more: [
    {
      title: 'Games',
      type: 'match',
      instructions: 'Tap a game, then the picture that shows it.',
      pairs: [
        { id: 'hide-and-seek', en: 'hide-and-seek', es: 'el escondite', Picture: HideAndSeek },
        { id: 'monster-tag', en: 'monster tag', es: 'juego de pillar haciendo de monstruo', Picture: MonsterTag },
        { id: 'catch', en: 'catch', es: 'lanzarse y atrapar una pelota', Picture: Catch },
        { id: 'hopscotch', en: 'hopscotch', es: 'la rayuela', Picture: Hopscotch },
      ],
    },
    {
      title: 'What do you play?',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'Juego a la rayuela en mi patio.', answer: ['I', 'play', 'hopscotch', 'in', 'my', 'playground.'] },
        { prompt: 'Juego al escondite en mi patio.', answer: ['I', 'play', 'hide-and-seek', 'in', 'my', 'playground.'] },
      ],
    },
  ],
};

export default rulesAndGames;
