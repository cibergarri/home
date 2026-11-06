// Lengua, tema 4: los pronombres personales (yo, tú, él, ella, nosotros, vosotros, ellos…), en
// singular y en plural, y su concordancia con el verbo.
const pronombres = {
  slug: 'pronombres',
  title: 'Los pronombres personales',
  heading: '¿Singular o plural?',
  type: 'sort',
  instructions: 'Las palabras yo, tú y ella nombran personas: son pronombres personales. Lleva cada uno a su columna.',
  columns: [
    { id: 'singular', title: 'Singular (uno)' },
    { id: 'plural', title: 'Plural (varios)' },
  ],
  cards: [
    { id: 'yo', text: 'yo', columns: ['singular'] },
    { id: 'tu', text: 'tú', columns: ['singular'] },
    { id: 'el', text: 'él', columns: ['singular'] },
    { id: 'ella', text: 'ella', columns: ['singular'] },
    { id: 'nosotros', text: 'nosotros', columns: ['plural'] },
    { id: 'nosotras', text: 'nosotras', columns: ['plural'] },
    { id: 'vosotros', text: 'vosotros', columns: ['plural'] },
    { id: 'vosotras', text: 'vosotras', columns: ['plural'] },
    { id: 'ellos', text: 'ellos', columns: ['plural'] },
    { id: 'ellas', text: 'ellas', columns: ['plural'] },
  ],
  more: [
    {
      title: '¡Encuentra el intruso!',
      type: 'quiz',
      instructions: 'Busca el pronombre que no es como los demás.',
      questions: [
        { prompt: '¿Cuál no está en plural?', choices: ['ella', 'vosotras', 'nosotras', 'ellas'], answer: 'ella' },
        { prompt: '¿Cuál no está en singular?', choices: ['yo', 'tú', 'nosotros', 'él'], answer: 'nosotros' },
        { prompt: '¿Cuál no es un pronombre personal?', choices: ['ellos', 'camellos', 'vosotros'], answer: 'camellos' },
        { prompt: '¿Qué pronombre usas para hablar de ti y de tus amigas?', choices: ['nosotras', 'ellas', 'vosotras'], answer: 'nosotras' },
        { prompt: '¿Qué pronombre usas para hablar de tu abuelo?', choices: ['él', 'ella', 'yo'], answer: 'él' },
      ],
    },
    {
      title: '¿Yo o tú?',
      type: 'quiz',
      instructions: 'Completa el título de cada libro con yo o tú. Fíjate en el verbo: yo soy, tú eres.',
      questions: [
        { prompt: '¡… no he sido!', choices: ['Yo', 'Tú'], answer: 'Yo' },
        { prompt: '… eres mi héroe.', choices: ['Yo', 'Tú'], answer: 'Tú' },
        { prompt: '¡… soy el mayor!', choices: ['Yo', 'Tú'], answer: 'Yo' },
        { prompt: '… no soy Batman.', choices: ['Yo', 'Tú'], answer: 'Yo' },
        { prompt: '¿… también puedes apuntarte?', choices: ['Yo', 'Tú'], answer: 'Tú' },
      ],
    },
    {
      title: 'El pronombre y el verbo',
      type: 'quiz',
      instructions: 'Los pronombres concuerdan con el verbo: yo canto, tú cantas.',
      questions: [
        { prompt: 'Nosotros…', choices: ['cantamos', 'canta', 'cantáis'], answer: 'cantamos' },
        { prompt: 'Tú…', choices: ['saltas', 'salto', 'saltan'], answer: 'saltas' },
        { prompt: 'Ellas…', choices: ['corren', 'corre', 'corremos'], answer: 'corren' },
        { prompt: 'Vosotras…', choices: ['jugáis', 'juega', 'juegan'], answer: 'jugáis' },
        { prompt: 'Yo…', choices: ['vivo', 'vives', 'viven'], answer: 'vivo' },
        { prompt: 'Él…', choices: ['come', 'como', 'comen'], answer: 'come' },
      ],
    },
    {
      title: 'Cambia el nombre por un pronombre',
      type: 'quiz',
      instructions: 'Cambia quién hace la acción por un pronombre personal.',
      questions: [
        { prompt: 'Mica encuentra un reloj. → … encuentra un reloj.', choices: ['Ella', 'Él', 'Ellos'], answer: 'Ella' },
        { prompt: 'Teo da cuerda al reloj. → … da cuerda al reloj.', choices: ['Él', 'Ella', 'Nosotros'], answer: 'Él' },
        { prompt: 'Lena y Mica salen a ver la nieve. → … salen a ver la nieve.', choices: ['Ellas', 'Ella', 'Vosotras'], answer: 'Ellas' },
        { prompt: 'Mis abuelos viven en el pueblo. → … viven en el pueblo.', choices: ['Ellos', 'Él', 'Nosotros'], answer: 'Ellos' },
      ],
    },
  ],
};

export default pronombres;
