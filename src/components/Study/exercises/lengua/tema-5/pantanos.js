// Lengua, tema 5: el cuento «Una visita al hogar de los brujos». Lena lleva a sus amigos al Reino
// de los Pantanos.
const SI = { id: 'si', title: 'Vive en los pantanos', colour: '#a6db8a' };
const NO = { id: 'no', title: 'No vive allí', colour: '#d9d4c7' };

const pantanos = {
  slug: 'pantanos',
  title: 'Una visita al hogar de los brujos',
  heading: 'Comprendo el cuento',
  type: 'quiz',
  instructions: 'Lee primero el cuento en tu libro. Después, contesta.',
  questions: [
    { prompt: '¿Por qué le preocupa a Teo el Reino de los Pantanos?', choices: ['Cree que allí solo hay murciélagos, castillos tenebrosos y cocodrilos', 'Cree que hace mucho calor', 'Cree que está muy lejos'], answer: 'Cree que allí solo hay murciélagos, castillos tenebrosos y cocodrilos' },
    { prompt: '¿Qué malvado brujo vive en el Reino de los Pantanos?', choices: ['Malún', 'Pomu', 'Terom'], answer: 'Malún' },
    { prompt: '¿Por qué se ofende Lena?', choices: ['Porque Teo piensa mal de su hogar', 'Porque Teo no le presta su varita', 'Porque Topi se come su bocadillo'], answer: 'Porque Teo piensa mal de su hogar' },
    { prompt: '¿Por qué no llevan la brújula de los Cuatro Reinos?', choices: ['Si Malún la robara, sería un desastre', 'Porque está rota', 'Porque Lena no sabe usarla'], answer: 'Si Malún la robara, sería un desastre' },
    { prompt: '¿Cómo viajan hasta los pantanos?', choices: ['En escobas', 'En tren', 'Andando'], answer: 'En escobas' },
    { prompt: '¿Quiénes acompañan a Lena?', choices: ['Teo, Mica y Topi', 'Malún y Braviana', 'Arabela y Teo'], answer: 'Teo, Mica y Topi' },
    { prompt: '¿Qué hacen para cruzar la niebla de Malún?', choices: ['Cogen aire y aguantan la respiración', 'Cierran los ojos y cantan', 'Encienden una linterna'], answer: 'Cogen aire y aguantan la respiración' },
    { prompt: '¿Qué protege una parte del reino?', choices: ['Una burbuja gigante y transparente', 'Un muro de piedra', 'Un dragón'], answer: 'Una burbuja gigante y transparente' },
    { prompt: '¿Quién ha hecho la burbuja?', choices: ['Muchos brujos, trabajando juntos', 'Braviana, ella sola', 'Malún'], answer: 'Muchos brujos, trabajando juntos' },
    { prompt: '¿Qué pasa cuando Teo murmura el hechizo al final?', choices: ['Las palabras de los pantanos se iluminan', 'Desaparece la burbuja', 'Llega Malún'], answer: 'Las palabras de los pantanos se iluminan' },
  ],
  more: [
    {
      title: 'La familia de Lena y el día en los pantanos',
      type: 'quiz',
      instructions: 'Piensa en lo que pasa en casa de Lena y en el paseo por los pantanos.',
      questions: [
        { prompt: '¿Quiénes forman la familia de Lena?', choices: ['Su padre, su madre y su hermano pequeño', 'Su abuela y su tía', 'Tala y Bolo'], answer: 'Su padre, su madre y su hermano pequeño' },
        { prompt: '¿Cómo es la casa de Lena?', choices: ['De madera, con varios tejados picudos', 'De piedra, con musgo en el tejado', 'Un castillo tenebroso'], answer: 'De madera, con varios tejados picudos' },
        { prompt: '¿Qué hay en la cesta que preparan los padres?', choices: ['Bocadillos y zumos', 'Castañas asadas', 'Fruta y leche'], answer: 'Bocadillos y zumos' },
        { prompt: '¿Cuál es el lugar favorito de Lena?', choices: ['Un árbol enorme con ramas que sirven de columpio', 'La biblioteca de la escuela', 'Una cueva oscura'], answer: 'Un árbol enorme con ramas que sirven de columpio' },
        { prompt: '¿Dan un paseo en barca?', choices: ['Sí', 'No'], answer: 'Sí' },
        { prompt: '¿Trepan al árbol Tukuruku?', choices: ['Sí', 'No'], answer: 'No' },
        { prompt: '¿Echan una carrera con Tala y Bolo?', choices: ['Sí', 'No'], answer: 'No' },
        { prompt: '¿Hablan con unos brujos?', choices: ['Sí', 'No'], answer: 'Sí' },
        { prompt: 'La espiral de Topi se pone del color de la hierba. ¿Cómo está Topi?', choices: ['Contento', 'Asustado'], answer: 'Contento' },
      ],
    },
    {
      title: 'Los animales de los pantanos',
      type: 'colour',
      instructions: 'Gracias a los brujos, en las aguas limpias de los pantanos viven muchos animales. Colorea los que viven allí.',
      crayons: [SI, NO],
      words: [
        { id: 'nutrias', word: 'nutrias gigantes', crayon: 'si' },
        { id: 'camellos', word: 'camellos', crayon: 'no' },
        { id: 'tortugas', word: 'tortugas acuáticas', crayon: 'si' },
        { id: 'jaguares', word: 'jaguares', crayon: 'si' },
        { id: 'pinguinos', word: 'pingüinos', crayon: 'no' },
        { id: 'tucanes', word: 'tucanes', crayon: 'si' },
        { id: 'caimanes', word: 'caimanes', crayon: 'si' },
        { id: 'osos-polares', word: 'osos polares', crayon: 'no' },
      ],
    },
    {
      title: 'Palabras del cuento',
      type: 'match',
      instructions: 'Toca una palabra del cuento y después lo que significa.',
      columns: ['Palabra', 'Significa'],
      pairs: [
        { id: 'regadientes', en: 'a regañadientes', es: 'sin ganas' },
        { id: 'cabeza', en: 'ir en cabeza', es: 'ir la primera' },
        { id: 'cristalinas', en: 'aguas cristalinas', es: 'aguas claras, transparentes' },
        { id: 'picudos', en: 'tejados picudos', es: 'tejados terminados en pico' },
        { id: 'porche', en: 'el porche', es: 'la entrada de una casa' },
      ],
    },
    {
      title: '¿Podría pasar de verdad?',
      type: 'quiz',
      instructions: 'Piensa si esto podría pasar en la vida real o solo en un cuento.',
      questions: [
        { prompt: 'Unos niños vuelan en escoba.', choices: ['En la vida real', 'Solo en un cuento'], answer: 'Solo en un cuento' },
        { prompt: 'Una familia prepara bocadillos para una excursión.', choices: ['En la vida real', 'Solo en un cuento'], answer: 'En la vida real' },
        { prompt: 'Una burbuja mágica protege un bosque.', choices: ['En la vida real', 'Solo en un cuento'], answer: 'Solo en un cuento' },
        { prompt: 'Unos amigos se columpian en las ramas de un árbol.', choices: ['En la vida real', 'Solo en un cuento'], answer: 'En la vida real' },
        { prompt: 'Las palabras de un papel se iluminan solas.', choices: ['En la vida real', 'Solo en un cuento'], answer: 'Solo en un cuento' },
      ],
    },
  ],
};

export default pantanos;
