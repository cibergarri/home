// Lengua, tema 3: los demostrativos. Este, ese y aquel dicen si algo está cerca, a media distancia
// o lejos de quien habla, y concuerdan con el nombre.
const demostrativos = {
  slug: 'demostrativos',
  title: 'Los demostrativos',
  heading: '¿Cerca, en medio o lejos?',
  type: 'sort',
  instructions: 'Estas plantas están cerca, esas plantas a media distancia y aquellas plantas lejos. Lleva cada demostrativo a su sitio.',
  columns: [
    { id: 'cerca', title: 'Cerca' },
    { id: 'media', title: 'Distancia media' },
    { id: 'lejos', title: 'Lejos' },
  ],
  cards: [
    { id: 'este', text: 'este', columns: ['cerca'] },
    { id: 'esta', text: 'esta', columns: ['cerca'] },
    { id: 'estos', text: 'estos', columns: ['cerca'] },
    { id: 'estas', text: 'estas', columns: ['cerca'] },
    { id: 'ese', text: 'ese', columns: ['media'] },
    { id: 'esa', text: 'esa', columns: ['media'] },
    { id: 'esos', text: 'esos', columns: ['media'] },
    { id: 'esas', text: 'esas', columns: ['media'] },
    { id: 'aquel', text: 'aquel', columns: ['lejos'] },
    { id: 'aquella', text: 'aquella', columns: ['lejos'] },
    { id: 'aquellos', text: 'aquellos', columns: ['lejos'] },
    { id: 'aquellas', text: 'aquellas', columns: ['lejos'] },
  ],
  more: [
    {
      title: 'Cada demostrativo con su nombre',
      type: 'match',
      instructions: 'Los demostrativos concuerdan con los nombres: este papel, esta mesa, estos libros, estas sillas.',
      columns: ['Demostrativo', 'Nombre'],
      pairs: [
        { id: 'esta', en: 'esta', es: 'pegatina' },
        { id: 'esos', en: 'esos', es: 'botones' },
        { id: 'aquellas', en: 'aquellas', es: 'mandarinas' },
        { id: 'aquel', en: 'aquel', es: 'castillo' },
      ],
    },
    {
      title: '¿Qué demostrativo va?',
      type: 'quiz',
      instructions: 'Fíjate en la distancia que hay entre la persona que habla y el objeto.',
      questions: [
        { prompt: 'Mira … cigüeña que vuela a lo lejos.', choices: ['aquella', 'esta'], answer: 'aquella' },
        { prompt: '… libro que tengo en la mano es genial.', choices: ['Este', 'Ese'], answer: 'Este' },
        { prompt: '¿De quién es … bufanda de ahí en medio?', choices: ['esa', 'esta'], answer: 'esa' },
        { prompt: 'Toma … cromos que tengo aquí.', choices: ['estos', 'aquellos'], answer: 'estos' },
        { prompt: 'No sé qué hacer con … papel que tengo.', choices: ['este', 'aquel'], answer: 'este' },
        { prompt: 'Yo lo tiro en … papelera de allí, al fondo.', choices: ['aquella', 'esta'], answer: 'aquella' },
        { prompt: '¿Ves … montañas tan lejanas?', choices: ['aquellas', 'estas'], answer: 'aquellas' },
      ],
    },
    {
      title: 'Concuerdan con el nombre',
      type: 'quiz',
      instructions: 'Elige el demostrativo que va bien con el nombre.',
      questions: [
        { prompt: '… dragones son hermanos.', choices: ['Esos', 'Esa', 'Ese'], answer: 'Esos' },
        { prompt: '¿De quién es … huella?', choices: ['esta', 'estos', 'este'], answer: 'esta' },
        { prompt: '… castillo es una ruina.', choices: ['Este', 'Esta', 'Estas'], answer: 'Este' },
        { prompt: '¿Dónde viven … hadas?', choices: ['esas', 'ese', 'esa'], answer: 'esas' },
        { prompt: '… años fueron maravillosos.', choices: ['Aquellos', 'Aquella', 'Aquel'], answer: 'Aquellos' },
      ],
    },
  ],
};

export default demostrativos;
