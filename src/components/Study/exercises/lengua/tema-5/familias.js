// Lengua, tema 5: las familias de palabras. Libro, librería y libreta tienen una parte común.
const familias = {
  slug: 'familias',
  title: 'Las familias de palabras',
  heading: 'Clasifica por familias',
  type: 'sort',
  instructions: 'Libro, librería y libreta tienen una parte común: son de la misma familia. Lleva cada palabra a su familia.',
  columns: [
    { id: 'flor', title: 'flor' },
    { id: 'camino', title: 'camino' },
    { id: 'mar', title: 'mar' },
  ],
  cards: [
    { id: 'florero', text: 'florero', columns: ['flor'] },
    { id: 'floristeria', text: 'floristería', columns: ['flor'] },
    { id: 'florecer', text: 'florecer', columns: ['flor'] },
    { id: 'caminante', text: 'caminante', columns: ['camino'] },
    { id: 'caminar', text: 'caminar', columns: ['camino'] },
    { id: 'caminito', text: 'caminito', columns: ['camino'] },
    { id: 'marinero', text: 'marinero', columns: ['mar'] },
    { id: 'maritimo', text: 'marítimo', columns: ['mar'] },
    { id: 'marea', text: 'marea', columns: ['mar'] },
  ],
  more: [
    {
      title: '¿Qué palabra sobra?',
      type: 'quiz',
      instructions: 'En cada familia se ha colado un intruso. ¡Encuéntralo!',
      questions: [
        { prompt: 'pescadería, pescado, pescadero…', choices: ['pescadería', 'pescado', 'pescadero', 'persiana'], answer: 'persiana' },
        { prompt: 'deporte, deportista, deportivo…', choices: ['deporte', 'deportista', 'desierto', 'deportivo'], answer: 'desierto' },
        { prompt: 'cristal, cristalino, cristalera…', choices: ['ventana', 'cristal', 'cristalino', 'cristalera'], answer: 'ventana' },
        { prompt: 'fruta, frutería, frutero…', choices: ['frutero', 'fruta', 'naranja', 'frutería'], answer: 'naranja' },
        { prompt: 'juguete, juguetería, juguetón…', choices: ['juguetón', 'pelota', 'juguete', 'juguetería'], answer: 'pelota' },
      ],
    },
    {
      title: '¿De qué palabra vienen?',
      type: 'match',
      instructions: 'La palabra lechero viene de leche. Toca una familia y después la palabra de la que viene.',
      columns: ['Familia', 'Viene de'],
      pairs: [
        { id: 'papel', en: 'papelería, papelera, empapelar', es: 'papel' },
        { id: 'pan', en: 'panadera, panadería, empanada', es: 'pan' },
        { id: 'zapato', en: 'zapatilla, zapatero, zapatería', es: 'zapato' },
        { id: 'nube', en: 'nubarrón, nublado, nuboso', es: 'nube' },
        { id: 'libro', en: 'librería, libreta, librero', es: 'libro' },
        { id: 'leche', en: 'lechero, lechería, lechera', es: 'leche' },
      ],
    },
  ],
};

export default familias;
