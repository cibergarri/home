import {
  ClimbATree, GoForAWalk, DoYoga, PlayBasketball, PlayTableTennis, PlayVolleyball, SailABoat, SwimInTheLake,
} from '../../../drawings/Camp';

// English, unit 5: the camp activities, matched with their pictures and their Spanish, and spelt
// with some letters missing.
const campActivities = {
  slug: 'camp-activities',
  title: 'Camp activities',
  heading: 'Match the activities',
  type: 'match',
  instructions: 'Tap a word, then its picture.',
  columns: ['Word', 'Picture'],
  pairs: [
    { id: 'climb', en: 'climb a tree', es: 'trepar a un árbol', Picture: ClimbATree },
    { id: 'walk', en: 'go for a walk', es: 'dar un paseo', Picture: GoForAWalk },
    { id: 'yoga', en: 'do yoga', es: 'hacer yoga', Picture: DoYoga },
    { id: 'basketball', en: 'play basketball', es: 'jugar al baloncesto', Picture: PlayBasketball },
    { id: 'table-tennis', en: 'play table tennis', es: 'jugar al ping-pong', Picture: PlayTableTennis },
    { id: 'volleyball', en: 'play volleyball', es: 'jugar al voleibol', Picture: PlayVolleyball },
    { id: 'sail', en: 'sail a boat', es: 'navegar en barco', Picture: SailABoat },
    { id: 'swim', en: 'swim in the lake', es: 'nadar en el lago', Picture: SwimInTheLake },
  ],
  more: [
    {
      title: 'In Spanish',
      type: 'match',
      instructions: 'Tap an activity in English, then the same activity in Spanish.',
      pairs: [
        { id: 'climb', en: 'climb a tree', es: 'trepar a un árbol' },
        { id: 'walk', en: 'go for a walk', es: 'dar un paseo' },
        { id: 'yoga', en: 'do yoga', es: 'hacer yoga' },
        { id: 'basketball', en: 'play basketball', es: 'jugar al baloncesto' },
        { id: 'table-tennis', en: 'play table tennis', es: 'jugar al ping-pong' },
        { id: 'volleyball', en: 'play volleyball', es: 'jugar al voleibol' },
        { id: 'sail', en: 'sail a boat', es: 'navegar en barco' },
        { id: 'swim', en: 'swim in the lake', es: 'nadar en el lago' },
      ],
    },
    {
      title: 'What is it?',
      type: 'quiz',
      instructions: 'Look at the picture and choose the activity.',
      questions: [
        { prompt: '🧘', say: false, choices: ['do yoga', 'go for a walk', 'sail a boat'], answer: 'do yoga' },
        { prompt: '⛵', say: false, choices: ['swim in the lake', 'sail a boat', 'climb a tree'], answer: 'sail a boat' },
        { prompt: '🏀', say: false, choices: ['play volleyball', 'play table tennis', 'play basketball'], answer: 'play basketball' },
        { prompt: '🏓', say: false, choices: ['play table tennis', 'play basketball', 'do yoga'], answer: 'play table tennis' },
        { prompt: '🏐', say: false, choices: ['play basketball', 'play volleyball', 'go for a walk'], answer: 'play volleyball' },
        { prompt: '🌳🧗', say: false, choices: ['go for a walk', 'sail a boat', 'climb a tree'], answer: 'climb a tree' },
        { prompt: '🏊', say: false, choices: ['swim in the lake', 'do yoga', 'play volleyball'], answer: 'swim in the lake' },
        { prompt: '🚶🌲', say: false, choices: ['climb a tree', 'go for a walk', 'swim in the lake'], answer: 'go for a walk' },
      ],
    },
    {
      title: 'Missing letters',
      type: 'letters',
      write: true,
      instructions: 'Write the letters that are missing, one at a time, and tap ✓. Tap 🔊 to hear the words.',
      words: [
        { clue: '🌳🧗', word: 'climb a tree', shown: 'cl_mb a tr_e' },
        { clue: '🚶', word: 'go for a walk', shown: 'go f_r a w_lk' },
        { clue: '🧘', word: 'do yoga', shown: 'do y_g_' },
        { clue: '🏀', word: 'basketball', shown: 'b_sk_tball' },
        { clue: '🏓', word: 'table tennis', shown: 't_ble t_nnis' },
        { clue: '🏐', word: 'volleyball', shown: 'v_ll_yball' },
        { clue: '⛵', word: 'sail a boat', shown: 's_il a b_at' },
        { clue: '🏊', word: 'swim in the lake', shown: 'sw_m in the l_ke' },
      ],
    },
  ],
};

export default campActivities;
