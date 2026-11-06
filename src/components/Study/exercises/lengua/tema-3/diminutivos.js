// Lengua, tema 3: diminutivos (-ito, -ita, -illo, -illa: más pequeño) y aumentativos (-azo, -aza,
// -ón, -ona: más grande).
const DIMINUTIVO = { id: 'dim', title: 'Diminutivo (más pequeño)', colour: '#a6db8a' };
const AUMENTATIVO = { id: 'aum', title: 'Aumentativo (más grande)', colour: '#f5a8c8' };

const diminutivos = {
  slug: 'diminutivos',
  title: 'Diminutivos y aumentativos',
  heading: '¿Pequeño o grande?',
  type: 'colour',
  instructions: 'Arbolillo y zapatito indican algo más pequeño: son diminutivos. Arbolazo y zapatón indican algo más grande: son aumentativos.',
  crayons: [DIMINUTIVO, AUMENTATIVO],
  words: [
    { id: 'perrazo', word: 'perrazo', crayon: 'aum' },
    { id: 'munequito', word: 'muñequito', crayon: 'dim' },
    { id: 'cartelon', word: 'cartelón', crayon: 'aum' },
    { id: 'tomatito', word: 'tomatito', crayon: 'dim' },
    { id: 'sartenaza', word: 'sartenaza', crayon: 'aum' },
    { id: 'cuadernillo', word: 'cuadernillo', crayon: 'dim' },
    { id: 'ojazo', word: 'ojazo', crayon: 'aum' },
    { id: 'burrito', word: 'burrito', crayon: 'dim' },
    { id: 'casona', word: 'casona', crayon: 'aum' },
    { id: 'bolson', word: 'bolsón', crayon: 'aum' },
    { id: 'plantita', word: 'plantita', crayon: 'dim' },
    { id: 'animalillos', word: 'animalillos', crayon: 'dim' },
  ],
  more: [
    {
      title: 'Respeta el parque natural',
      type: 'quiz',
      instructions: 'Forma los diminutivos añadiendo -ito, -ita, -illo o -illa.',
      questions: [
        { prompt: 'El diminutivo de seta es…', choices: ['setita', 'setona', 'setas'], answer: 'setita' },
        { prompt: 'El diminutivo de pájaro es…', choices: ['pajarito', 'pajarazo', 'pájaros'], answer: 'pajarito' },
        { prompt: 'El diminutivo de arbusto es…', choices: ['arbustito', 'arbustazo', 'arbustos'], answer: 'arbustito' },
        { prompt: 'El diminutivo de flor es…', choices: ['florecita', 'florón', 'flores'], answer: 'florecita' },
        { prompt: 'El diminutivo de casa es…', choices: ['casita', 'casona', 'casas'], answer: 'casita' },
        { prompt: 'El diminutivo de cama es…', choices: ['camita', 'camaza', 'camas'], answer: 'camita' },
      ],
    },
    {
      title: 'Los aumentativos',
      type: 'quiz',
      instructions: 'Para reconocer los aumentativos, fíjate en las terminaciones -azo, -aza, -ón y -ona.',
      questions: [
        { prompt: 'El aumentativo de zapato es…', choices: ['zapatón', 'zapatito', 'zapatos'], answer: 'zapatón' },
        { prompt: 'El aumentativo de árbol es…', choices: ['arbolazo', 'arbolillo', 'árboles'], answer: 'arbolazo' },
        { prompt: 'El aumentativo de perro es…', choices: ['perrazo', 'perrito', 'perros'], answer: 'perrazo' },
        { prompt: 'El aumentativo de mujer es…', choices: ['mujerona', 'mujercita', 'mujeres'], answer: 'mujerona' },
        { prompt: 'El aumentativo de coche es…', choices: ['cochazo', 'cochecito', 'coches'], answer: 'cochazo' },
        { prompt: 'El aumentativo de cabeza es…', choices: ['cabezón', 'cabecita', 'cabezas'], answer: 'cabezón' },
      ],
    },
    {
      title: 'La casa en miniatura',
      type: 'letters',
      write: true,
      instructions: 'En la casa en miniatura todo es pequeñito. Escribe el diminutivo de cada objeto.',
      words: [
        { clue: 'Una mesa muy pequeña.', word: 'mesita', shown: 'mes___' },
        { clue: 'Una silla muy pequeña.', word: 'sillita', shown: 'sill___' },
        { clue: 'Un vaso muy pequeño.', word: 'vasito', shown: 'vas___' },
        { clue: 'Una cama muy pequeña.', word: 'camita', shown: 'cam___' },
        { clue: 'Un plato muy pequeño.', word: 'platito', shown: 'plat___' },
        { clue: 'Un libro muy pequeño.', word: 'librito', shown: 'libr___' },
      ],
    },
  ],
};

export default diminutivos;
