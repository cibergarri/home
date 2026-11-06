// Lengua, tema 7: escribimos mp, mb y nv. Antes de p y de b se escribe m; antes de v, n.
const MB = { id: 'mb', title: 'mb' };
const MP = { id: 'mp', title: 'mp' };
const NV = { id: 'nv', title: 'nv' };

const mpMbNv = {
  slug: 'mp-mb-nv',
  title: 'mp, mb, nv',
  heading: '¿m o n?',
  type: 'letters',
  write: true,
  instructions: 'Antes de p y de b se escribe m: cumpleaños, sombrero. Antes de v se escribe n: invierno. Escribe la letra que falta.',
  words: [
    { clue: 'Para protegerte del sol en la playa.', word: 'sombrilla', shown: 'so_brilla' },
    { clue: 'Tarjeta para llamar a alguien a tu fiesta.', word: 'invitación', shown: 'i_vitación' },
    { clue: 'Lleva a los enfermos al hospital.', word: 'ambulancia', shown: 'a_bulancia' },
    { clue: 'Dulces de chocolate.', word: 'bombones', shown: 'bo_bones' },
    { clue: 'Con él te lavas el pelo.', word: 'champú', shown: 'cha_pú' },
    { clue: 'Un alfiler que no se pierde.', word: 'imperdible', shown: 'i_perdible' },
    { clue: 'La estación más fría del año.', word: 'invierno', shown: 'i_vierno' },
    { clue: 'Instrumento que suena con dos palillos.', word: 'tambor', shown: 'ta_bor' },
  ],
  more: [
    {
      title: '¿mb, mp o nv?',
      type: 'sort',
      instructions: 'Lee cada palabra y llévala a su grupo.',
      columns: [MB, MP, NV],
      cards: [
        { id: 'alfombra', text: 'alfombra', columns: ['mb'] },
        { id: 'lombriz', text: 'lombriz', columns: ['mb'] },
        { id: 'hombro', text: 'hombro', columns: ['mb'] },
        { id: 'trombon', text: 'trombón', columns: ['mb'] },
        { id: 'trompeta', text: 'trompeta', columns: ['mp'] },
        { id: 'campanilla', text: 'campanilla', columns: ['mp'] },
        { id: 'compra', text: 'compra', columns: ['mp'] },
        { id: 'envases', text: 'envases', columns: ['nv'] },
        { id: 'invento', text: 'invento', columns: ['nv'] },
        { id: 'envolver', text: 'envolver', columns: ['nv'] },
        { id: 'envio', text: 'envío', columns: ['nv'] },
      ],
    },
    {
      title: 'La excursión de Humberto',
      type: 'quiz',
      instructions: 'El profesor Humberto y sus compañeros han ido al campo. ¿Cómo se escribe cada palabra?',
      questions: [
        { prompt: 'Han ido en …', choices: ['tranvía', 'tramvía'], answer: 'tranvía' },
        { prompt: 'Han ido al …', choices: ['campo', 'canpo'], answer: 'campo' },
        { prompt: 'Han ayudado a un …', choices: ['campesino', 'canpesino'], answer: 'campesino' },
        { prompt: 'El campesino es muy …', choices: ['simpático', 'sinpático'], answer: 'simpático' },
        { prompt: 'Han ayudado a … semillas.', choices: ['sembrar', 'senbrar'], answer: 'sembrar' },
        { prompt: 'Han comido bajo la … de un árbol.', choices: ['sombra', 'sonbra'], answer: 'sombra' },
        { prompt: 'El profesor se llama …', choices: ['Humberto', 'Hunberto'], answer: 'Humberto' },
      ],
    },
  ],
};

export default mpMbNv;
