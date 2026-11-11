// Naturales, tema 2: prevenimos accidentes, en casa y fuera de casa.
const accidentes = {
  slug: 'accidentes',
  title: 'Prevenimos accidentes',
  heading: '¿Qué debes hacer?',
  type: 'sort',
  instructions: 'Actuando con cuidado, muchos accidentes se pueden evitar. ¿Qué debes hacer y qué no?',
  columns: [
    { id: 'si', title: '✅ Lo hago', subtitle: 'Así evito accidentes' },
    { id: 'no', title: '❌ No lo hago', subtitle: 'Es peligroso' },
  ],
  cards: [
    { id: 'juguetes', text: 'Recoger los juguetes del suelo', columns: ['si'] },
    { id: 'cuchillos', text: 'Tener cuidado con los cuchillos', columns: ['si'] },
    { id: 'acera', text: 'Caminar por la acera', columns: ['si'] },
    { id: 'paso', text: 'Cruzar por el paso de peatones', columns: ['si'] },
    { id: 'cinturon', text: 'Ponerme el cinturón en el coche', columns: ['si'] },
    { id: 'casco', text: 'Usar casco en la bicicleta', columns: ['si'] },
    { id: 'enchufes', text: 'Tocar los enchufes', columns: ['no'] },
    { id: 'fuego', text: 'Calentar la comida en el fuego sin ayuda', columns: ['no'] },
    { id: 'descalzo', text: 'Andar descalzo con el suelo mojado', columns: ['no'] },
    { id: 'escalera', text: 'Correr y jugar en la escalera', columns: ['no'] },
  ],
  more: [
    {
      title: '¿Qué riesgo tiene?',
      type: 'match',
      instructions: 'Toca un objeto y después el riesgo que tiene.',
      columns: ['Objeto', 'Riesgo'],
      pairs: [
        { id: 'cuchillo', en: '🔪 Un cuchillo', es: 'Te puedes cortar.' },
        { id: 'sarten', en: '🍳 Una sartén en el fuego', es: 'Te puedes quemar.' },
        { id: 'enchufe', en: '🔌 Un enchufe', es: 'Te puede dar calambre.' },
        { id: 'suelo', en: '💧 El suelo mojado', es: 'Te puedes resbalar y caer.' },
      ],
    },
    {
      title: 'Nos protegemos',
      type: 'quiz',
      instructions: 'Elige lo que protege tu cuerpo.',
      questions: [
        { prompt: '¿Qué te pones en la cabeza para ir en bici?', choices: ['Un casco', 'Una gorra'], answer: 'Un casco' },
        { prompt: '¿Qué protege tus rodillas cuando patinas?', choices: ['Las rodilleras', 'Los calcetines'], answer: 'Las rodilleras' },
        { prompt: '¿Qué te pones siempre en el coche?', choices: ['El cinturón de seguridad', 'El abrigo'], answer: 'El cinturón de seguridad' },
        { prompt: '¿Por dónde cruzas la calle?', choices: ['Por el paso de peatones', 'Por donde quiero'], answer: 'Por el paso de peatones' },
        { prompt: '¿Por qué recogemos los juguetes del suelo?', choices: ['Para que nadie tropiece', 'Para que se rompan'], answer: 'Para que nadie tropiece' },
      ],
    },
  ],
};

export default accidentes;
