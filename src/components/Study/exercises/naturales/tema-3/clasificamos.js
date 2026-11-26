// Naturales, tema 3: ¿por qué clasificamos animales? Los vertebrados tienen un esqueleto formado
// por huesos y los invertebrados no; los cinco grupos de vertebrados y cómo es su cuerpo.
const clasificamos = {
  slug: 'clasificamos',
  title: '¿Por qué clasificamos animales?',
  heading: '¿Vertebrado o invertebrado?',
  type: 'sort',
  instructions: 'Los vertebrados tienen un esqueleto formado por huesos; los invertebrados no tienen huesos en el interior de su cuerpo. Lleva cada animal a su grupo.',
  columns: [
    { id: 'vertebrados', title: '🦴 Vertebrados', subtitle: 'Tienen huesos' },
    { id: 'invertebrados', title: '🐌 Invertebrados', subtitle: 'No tienen huesos' },
  ],
  cards: [
    { id: 'lobo', text: '🐺 Lobo', columns: ['vertebrados'] },
    { id: 'conejo', text: '🐇 Conejo', columns: ['vertebrados'] },
    { id: 'gaviota', text: '🕊️ Gaviota', columns: ['vertebrados'] },
    { id: 'pez-payaso', text: '🐠 Pez payaso', columns: ['vertebrados'] },
    { id: 'paloma', text: '🐦 Paloma', columns: ['vertebrados'] },
    { id: 'libelula', text: '🪰 Libélula', columns: ['invertebrados'] },
    { id: 'estrella', text: '⭐ Estrella de mar', columns: ['invertebrados'] },
    { id: 'hormiga', text: '🐜 Hormiga', columns: ['invertebrados'] },
    { id: 'arana', text: '🕷️ Araña', columns: ['invertebrados'] },
    { id: 'caracol', text: '🐌 Caracol', columns: ['invertebrados'] },
    { id: 'mejillon', text: '🦪 Mejillón', columns: ['invertebrados'] },
  ],
  more: [
    {
      title: '¿A qué grupo pertenece?',
      type: 'join',
      instructions: 'Como en la página 43: ¿a qué grupo de vertebrados pertenece cada animal? Toca un animal y únelo a su grupo.',
      left: [
        { id: 'mamiferos', text: 'Mamíferos' },
        { id: 'aves', text: 'Aves' },
        { id: 'peces', text: 'Peces' },
        { id: 'reptiles', text: 'Reptiles' },
        { id: 'anfibios', text: 'Anfibios' },
      ],
      right: [
        { id: 'leopardo', text: '🐆 Leopardo', to: 'mamiferos' },
        { id: 'ciguenuela', text: '🐦 Cigüeñuela', to: 'aves' },
        { id: 'pez', text: '🐟 Pez', to: 'peces' },
        { id: 'lagarto', text: '🦎 Lagarto', to: 'reptiles' },
        { id: 'sapo', text: '🐸 Sapo', to: 'anfibios' },
      ],
    },
    {
      title: '¿Cómo son los vertebrados?',
      type: 'quiz',
      instructions: 'Lee y elige la respuesta correcta.',
      questions: [
        { prompt: 'Agrupamos los animales según…', choices: ['las características que tienen en común', 'su nombre', 'su tamaño'], answer: 'las características que tienen en común' },
        { prompt: 'Los vertebrados tienen…', choices: ['un esqueleto formado por huesos', 'el cuerpo sin huesos'], answer: 'un esqueleto formado por huesos' },
        { prompt: 'El cuerpo de los vertebrados tiene…', choices: ['cabeza, tronco y, casi siempre, cola', 'solo cabeza y patas'], answer: 'cabeza, tronco y, casi siempre, cola' },
        { prompt: 'Las extremidades de los vertebrados pueden ser…', choices: ['patas, aletas o alas', 'tentáculos o conchas'], answer: 'patas, aletas o alas' },
        { prompt: '¿Cuántos grupos de vertebrados hay?', choices: ['Cinco', 'Dos', 'Diez'], answer: 'Cinco' },
        { prompt: 'La libélula y la estrella de mar son…', choices: ['invertebrados', 'vertebrados'], answer: 'invertebrados' },
        { prompt: '¿Qué tienen en común una libélula y una paloma?', choices: ['Las dos tienen alas', 'Las dos tienen huesos'], answer: 'Las dos tienen alas' },
        { prompt: '¿En qué se diferencian una libélula y una paloma?', choices: ['La paloma tiene huesos y la libélula no', 'La libélula tiene plumas'], answer: 'La paloma tiene huesos y la libélula no' },
      ],
    },
  ],
};

export default clasificamos;
