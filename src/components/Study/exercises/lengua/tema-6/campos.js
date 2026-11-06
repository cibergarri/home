// Lengua, tema 6: los campos semánticos. Margarita, clavel y rosa son del campo semántico de las
// flores.
const TIEMPO = { id: 'tiempo', title: 'Del tiempo', colour: '#8ec5f2' };
const NO_TIEMPO = { id: 'no', title: 'No es del tiempo', colour: '#d9d4c7' };
const ROPA = { id: 'ropa', title: 'Ropa', colour: '#f5a8c8' };
const NO_ROPA = { id: 'no', title: 'No es ropa', colour: '#d9d4c7' };

const campos = {
  slug: 'campos',
  title: 'Los campos semánticos',
  heading: 'La mochila de Teo',
  type: 'colour',
  instructions: 'Las palabras que tienen relación entre ellas forman un campo semántico. Teo va a casa de Mica: colorea lo que es del campo de la ropa.',
  crayons: [ROPA, NO_ROPA],
  words: [
    { id: 'jersey', word: 'jersey', crayon: 'ropa' },
    { id: 'libros', word: 'libros', crayon: 'no' },
    { id: 'ropa-interior', word: 'ropa interior', crayon: 'ropa' },
    { id: 'pijama', word: 'pijama', crayon: 'ropa' },
    { id: 'cepillo', word: 'cepillo de dientes', crayon: 'no' },
    { id: 'pantalones', word: 'pantalones', crayon: 'ropa' },
    { id: 'camisetas', word: 'camisetas', crayon: 'ropa' },
    { id: 'brujula', word: 'brújula', crayon: 'no' },
  ],
  more: [
    {
      title: '¿Cuál es el intruso?',
      type: 'quiz',
      instructions: 'Busca la palabra que no es del mismo campo semántico.',
      questions: [
        { prompt: 'septiembre, enero, agosto, julio…', choices: ['abril', 'noche', 'enero', 'julio'], answer: 'noche' },
        { prompt: 'armario, mesa, silla, sofá…', choices: ['sillón', 'mesa', 'furgoneta', 'sofá'], answer: 'furgoneta' },
        { prompt: 'tristeza, miedo, alegría, ira…', choices: ['sorpresa', 'toalla', 'miedo', 'ira'], answer: 'toalla' },
        { prompt: 'margarita, clavel, rosa…', choices: ['tulipán', 'margarita', 'tenedor', 'clavel'], answer: 'tenedor' },
        { prompt: 'melocotón, mandarina, plátano…', choices: ['pera', 'violeta', 'mandarina', 'plátano'], answer: 'violeta' },
      ],
    },
    {
      title: 'Las palabras del tiempo',
      type: 'colour',
      instructions: 'Sol, nubes, lluvia y viento son del campo semántico del tiempo. Colorea las demás palabras del tiempo.',
      crayons: [TIEMPO, NO_TIEMPO],
      words: [
        { id: 'teclado', word: 'teclado', crayon: 'no' },
        { id: 'calor', word: 'calor', crayon: 'tiempo' },
        { id: 'lapices', word: 'lápices', crayon: 'no' },
        { id: 'frio', word: 'frío', crayon: 'tiempo' },
        { id: 'truenos', word: 'truenos', crayon: 'tiempo' },
        { id: 'espinacas', word: 'espinacas', crayon: 'no' },
        { id: 'tormenta', word: 'tormenta', crayon: 'tiempo' },
        { id: 'nieve', word: 'nieve', crayon: 'tiempo' },
        { id: 'tomate', word: 'tomate', crayon: 'no' },
        { id: 'granizo', word: 'granizo', crayon: 'tiempo' },
        { id: 'ardilla', word: 'ardilla', crayon: 'no' },
        { id: 'niebla', word: 'niebla', crayon: 'tiempo' },
        { id: 'chaparron', word: 'chaparrón', crayon: 'tiempo' },
        { id: 'arcoiris', word: 'arcoíris', crayon: 'tiempo' },
      ],
    },
    {
      title: 'Cada palabra en su campo',
      type: 'sort',
      instructions: 'Lleva cada palabra a su campo semántico.',
      columns: [
        { id: 'frutas', title: 'Frutas' },
        { id: 'colores', title: 'Colores' },
        { id: 'muebles', title: 'Muebles' },
      ],
      cards: [
        { id: 'melocoton', text: 'melocotón', columns: ['frutas'] },
        { id: 'mandarina', text: 'mandarina', columns: ['frutas'] },
        { id: 'fresa', text: 'fresa', columns: ['frutas'] },
        { id: 'amarillo', text: 'amarillo', columns: ['colores'] },
        { id: 'violeta', text: 'violeta', columns: ['colores'] },
        { id: 'azul', text: 'azul', columns: ['colores'] },
        { id: 'armario', text: 'armario', columns: ['muebles'] },
        { id: 'silla', text: 'silla', columns: ['muebles'] },
        { id: 'sofa', text: 'sofá', columns: ['muebles'] },
      ],
    },
  ],
};

export default campos;
