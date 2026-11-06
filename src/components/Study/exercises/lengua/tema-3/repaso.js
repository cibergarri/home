// Lengua, tema 3: el repaso del final del tema, «¿Qué he aprendido?».
const CA = { id: 'ca', title: 'Con ca, co, cu', colour: '#f7c96f' };
const QUE = { id: 'que', title: 'Con que, qui', colour: '#8ec5f2' };

const repaso = {
  slug: 'repaso',
  title: 'Repaso',
  heading: '1. ca, co, cu, que, qui',
  type: 'colour',
  instructions: 'El colegio invita a un curso de pintura. Clasifica las palabras del cartel.',
  crayons: [CA, QUE],
  words: [
    { id: 'colegio', word: 'colegio', crayon: 'ca' },
    { id: 'arlequin', word: 'Arlequín', crayon: 'que' },
    { id: 'educacion', word: 'Educación', crayon: 'ca' },
    { id: 'curso', word: 'Curso', crayon: 'ca' },
    { id: 'raquel', word: 'Raquel', crayon: 'que' },
    { id: 'quinones', word: 'Quiñones', crayon: 'que' },
    { id: 'con', word: 'con', crayon: 'ca' },
  ],
  more: [
    {
      title: '2. Los cromos de animales',
      type: 'letters',
      write: true,
      instructions: 'Escribe las letras que faltan en el nombre de cada animal.',
      words: [
        { clue: 'Tiene un caparazón en forma de espiral y va muy despacio.', word: 'caracol', shown: '_ara_ol' },
        { clue: 'Vive en el río y tiene una boca enorme con muchos dientes.', word: 'cocodrilo', shown: '_o_odrilo' },
        { clue: 'Tiene una larga melena y relincha.', word: 'caballo', shown: '_aballo' },
        { clue: 'Un insecto pequeño que pica.', word: 'mosquito', shown: 'mos__ito' },
        { clue: 'Tiene unas orejas largas y salta.', word: 'conejo', shown: '_onejo' },
      ],
    },
    {
      title: '3. Diminutivos y aumentativos',
      type: 'quiz',
      instructions: 'Recuerda: -ito, -illo hacen las cosas pequeñas; -azo, -ón, las hacen grandes.',
      questions: [
        { prompt: '¿Cuál es el diminutivo de libro?', choices: ['librito', 'librazo', 'libros'], answer: 'librito' },
        { prompt: '¿Cuál es el aumentativo de gato?', choices: ['gatazo', 'gatito', 'gatos'], answer: 'gatazo' },
        { prompt: '¿Qué palabra es un aumentativo?', choices: ['cartelón', 'cuadernillo', 'tomatito'], answer: 'cartelón' },
        { prompt: '¿Qué palabra es un diminutivo?', choices: ['zapatito', 'zapatón', 'zapato'], answer: 'zapatito' },
      ],
    },
    {
      title: '4. La nota de Laura',
      type: 'sort',
      instructions: 'Laura le enseña su clase a su padre. ¿Está cerca, a media distancia o lejos?',
      columns: [
        { id: 'cerca', title: 'Cerca' },
        { id: 'media', title: 'Distancia media' },
        { id: 'lejos', title: 'Lejos' },
      ],
      cards: [
        { id: 'esta-clase', text: 'esta clase', columns: ['cerca'] },
        { id: 'esa-mesa', text: 'esa mesa', columns: ['media'] },
        { id: 'aquel-pupitre', text: 'aquel pupitre del fondo', columns: ['lejos'] },
        { id: 'estas-plantas', text: 'estas plantas', columns: ['cerca'] },
        { id: 'esa-regadera', text: 'esa regadera', columns: ['media'] },
        { id: 'esos-adornos', text: 'esos adornos', columns: ['media'] },
      ],
    },
    {
      title: '5. Repasa el tema',
      type: 'quiz',
      instructions: 'Recuerda el cuento, el cartel y la poesía.',
      questions: [
        { prompt: '¿Cuándo es el Festival de las Frutillas?', choices: ['En primavera', 'En invierno', 'En otoño'], answer: 'En primavera' },
        { prompt: '¿Qué parte del cartel nos dice cómo podemos ayudar?', choices: ['La idea para colaborar', 'El título', 'La imagen'], answer: 'La idea para colaborar' },
        { prompt: '¿Qué palabra es un demostrativo?', choices: ['aquellas', 'frutillas', 'praderas'], answer: 'aquellas' },
        { prompt: 'Un grupo de versos se llama…', choices: ['estrofa', 'cartel', 'título'], answer: 'estrofa' },
        { prompt: '¿Qué palabra está bien escrita?', choices: ['quiero', 'qiero', 'ciero'], answer: 'quiero' },
      ],
    },
  ],
};

export default repaso;
