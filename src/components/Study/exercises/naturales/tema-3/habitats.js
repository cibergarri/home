// Naturales, tema 3: ¿dónde viven los animales? Los hábitats acuáticos y terrestres, cómo está
// adaptado cada animal al suyo, y quién se come a quién en el bosque.
const habitats = {
  slug: 'habitats',
  title: '¿Dónde viven los animales?',
  heading: 'Clasifica por su hábitat',
  type: 'sort',
  instructions: 'Como en la página 51: los animales viven donde pueden alimentarse, encontrar refugio y reproducirse. Lleva cada animal a su hábitat.',
  columns: [
    { id: 'desierto', title: '🏜️ Desierto' },
    { id: 'bosque', title: '🌳 Bosque' },
    { id: 'rio', title: '🏞️ Río' },
  ],
  cards: [
    { id: 'avestruz', text: 'Avestruz', columns: ['desierto'] },
    { id: 'camello', text: '🐫 Camello', columns: ['desierto'] },
    { id: 'escorpion', text: '🦂 Escorpión', columns: ['desierto'] },
    { id: 'jabali', text: '🐗 Jabalí', columns: ['bosque'] },
    { id: 'ardilla', text: '🐿️ Ardilla', columns: ['bosque'] },
    { id: 'erizo', text: '🦔 Erizo', columns: ['bosque'] },
    { id: 'cangrejo', text: 'Cangrejo de río', columns: ['rio'] },
    { id: 'barbo', text: 'Barbo', columns: ['rio'] },
    { id: 'rana', text: '🐸 Rana', columns: ['rio'] },
  ],
  more: [
    {
      title: '¿Acuático o terrestre?',
      type: 'sort',
      instructions: 'Los hábitats pueden ser acuáticos o terrestres. Lleva cada uno a su sitio.',
      columns: [
        { id: 'acuatico', title: '💧 Acuáticos' },
        { id: 'terrestre', title: '⛰️ Terrestres' },
      ],
      cards: [
        { id: 'mares', text: 'Mares y océanos', columns: ['acuatico'] },
        { id: 'rios', text: 'Ríos, lagos y charcas', columns: ['acuatico'] },
        { id: 'praderas', text: 'Praderas', columns: ['terrestre'] },
        { id: 'desiertos', text: 'Desiertos', columns: ['terrestre'] },
        { id: 'polos', text: 'Polos', columns: ['terrestre'] },
        { id: 'bosques', text: 'Bosques', columns: ['terrestre'] },
        { id: 'montanas', text: 'Montañas', columns: ['terrestre'] },
        { id: 'selvas', text: 'Selvas', columns: ['terrestre'] },
      ],
    },
    {
      title: 'Adaptados a su hábitat',
      type: 'match',
      instructions: 'Los animales están adaptados a vivir en su hábitat. Toca un animal y después lo que le ayuda.',
      columns: ['Animal', '¿Qué le ayuda?'],
      pairs: [
        { id: 'peces', en: '🐟 Los peces', es: 'Tienen branquias para respirar en el agua.' },
        { id: 'cocodrilo', en: '🐊 El cocodrilo', es: 'Su fuerte cola le sirve para nadar.' },
        { id: 'rana', en: '🐸 La rana', es: 'Necesita mantener su piel húmeda.' },
        { id: 'conejo', en: '🐇 El conejo', es: 'Sus grandes orejas le advierten del peligro.' },
        { id: 'escorpion', en: '🦂 El escorpión', es: 'Soporta bien el fuerte calor y la falta de lluvia.' },
        { id: 'oso', en: '🐻‍❄️ El oso polar', es: 'Una capa de pelo muy gruesa le protege del frío.' },
        { id: 'erizo', en: '🦔 El erizo', es: 'Sus púas le protegen del ataque de otros animales.' },
        { id: 'cabra', en: '🐐 La cabra montés', es: 'Trepa por las paredes rocosas.' },
        { id: 'palo', en: '🌿 El insecto palo', es: 'Se camufla muy bien entre las plantas.' },
      ],
    },
    {
      title: '¿Qué come?',
      type: 'quiz',
      instructions: 'Como en la página 51: en el bosque, el escarabajo come plantas, el ratón come plantas y escarabajos, y el búho come ratones. ¿Qué es cada uno?',
      questions: [
        { prompt: 'Un animal que solo come plantas es…', choices: ['herbívoro', 'carnívoro', 'omnívoro'], answer: 'herbívoro' },
        { prompt: 'Un animal que come otros animales es…', choices: ['carnívoro', 'herbívoro', 'omnívoro'], answer: 'carnívoro' },
        { prompt: 'Un animal que come plantas y animales es…', choices: ['omnívoro', 'herbívoro', 'carnívoro'], answer: 'omnívoro' },
        { prompt: 'El escarabajo come plantas. Es…', choices: ['herbívoro (H)', 'carnívoro (C)', 'omnívoro (O)'], answer: 'herbívoro (H)' },
        { prompt: 'El ratón come plantas y escarabajos. Es…', choices: ['omnívoro (O)', 'herbívoro (H)', 'carnívoro (C)'], answer: 'omnívoro (O)' },
        { prompt: 'El búho come ratones. Es…', choices: ['carnívoro (C)', 'herbívoro (H)', 'omnívoro (O)'], answer: 'carnívoro (C)' },
        { prompt: '¿Un oso polar podría vivir en el desierto?', choices: ['No, está adaptado al frío', 'Sí, sin problema'], answer: 'No, está adaptado al frío' },
      ],
    },
  ],
};

export default habitats;
