// Lengua, tema 4: la noticia («¿Existe el Planeta Nueve?»): titular, imagen, pie de foto y el
// cuerpo, que dice qué ha pasado, a quién, cuándo y dónde. Y contar una noticia con buen volumen.
const noticia = {
  slug: 'noticia',
  title: 'La noticia',
  heading: '¿Existe el Planeta Nueve?',
  type: 'quiz',
  instructions: 'Lee la noticia en tu libro. Una noticia responde a estas preguntas: ¿quién?, ¿qué?, ¿cuándo? y ¿dónde?',
  questions: [
    { prompt: '¿Quiénes han anunciado un descubrimiento?', choices: ['Los astrónomos', 'Los cocineros', 'Los bomberos'], answer: 'Los astrónomos' },
    { prompt: '¿Qué creen que han descubierto?', choices: ['Un planeta más', 'Una estrella nueva', 'Un cohete'], answer: 'Un planeta más' },
    { prompt: '¿Cómo lo han llamado?', choices: ['Planeta Nueve', 'Planeta Rojo', 'Planeta Teo'], answer: 'Planeta Nueve' },
    { prompt: '¿Cuándo lo han comunicado?', choices: ['En abril', 'En Navidad', 'En verano'], answer: 'En abril' },
    { prompt: '¿Dónde creen que está el Planeta Nueve?', choices: ['Más lejos de Neptuno', 'Al lado de la Luna', 'Dentro de la Tierra'], answer: 'Más lejos de Neptuno' },
    { prompt: '¿Han podido ver ya el Planeta Nueve?', choices: ['No', 'Sí'], answer: 'No' },
    { prompt: '¿Con qué sabrán si están equivocados o no?', choices: ['Con el telescopio de un observatorio', 'Con una brújula', 'Con un reloj universal'], answer: 'Con el telescopio de un observatorio' },
  ],
  more: [
    {
      title: 'Las partes de la noticia',
      type: 'match',
      instructions: 'Toca cada parte de la noticia y después lo que es.',
      columns: ['Parte', 'Qué es'],
      pairs: [
        { id: 'titular', en: 'Titular', es: 'El título de la noticia, en letras grandes' },
        { id: 'imagen', en: 'Imagen', es: 'La foto o el dibujo' },
        { id: 'pie', en: 'Pie de foto', es: 'Lo que está escrito debajo de la foto' },
        { id: 'cuerpo', en: 'El texto', es: 'Qué ha sucedido, a quién, cuándo y dónde' },
      ],
    },
    {
      title: '¿Quién, qué, cuándo o dónde?',
      type: 'quiz',
      instructions: 'Mica, Teo y Lena vieron ayer en el patio un arcoíris doble. ¿A qué pregunta responde cada parte?',
      questions: [
        { prompt: 'Mica, Teo y Lena', choices: ['¿Quién?', '¿Qué?', '¿Cuándo?', '¿Dónde?'], answer: '¿Quién?' },
        { prompt: 'vieron un arcoíris doble', choices: ['¿Quién?', '¿Qué?', '¿Cuándo?', '¿Dónde?'], answer: '¿Qué?' },
        { prompt: 'ayer', choices: ['¿Quién?', '¿Qué?', '¿Cuándo?', '¿Dónde?'], answer: '¿Cuándo?' },
        { prompt: 'en el patio', choices: ['¿Quién?', '¿Qué?', '¿Cuándo?', '¿Dónde?'], answer: '¿Dónde?' },
        { prompt: '¿Qué titular va bien con esta noticia?', choices: ['Un arcoíris doble sorprende en el colegio', 'Receta de tortilla', 'Hoy no pasa nada'], answer: 'Un arcoíris doble sorprende en el colegio' },
      ],
    },
    {
      title: 'Cuento una noticia',
      type: 'quiz',
      instructions: 'Controla el volumen de tu voz para que todos te oigan. No hables ni muy bajo ni gritando.',
      questions: [
        { prompt: 'La noticia de la radio habla de la Luna. ¿Qué titular le va bien?', choices: ['Llega la superluna', 'La Luna y la noche', 'Los científicos informan'], answer: 'Llega la superluna' },
        { prompt: '¿Cómo hablas para contar la noticia a tus compañeros?', choices: ['Alto, pero sin gritar', 'Muy bajito', 'Gritando'], answer: 'Alto, pero sin gritar' },
        { prompt: '¿Qué pasa si hablas muy bajito?', choices: ['No te oyen bien', 'Te oyen mejor'], answer: 'No te oyen bien' },
        { prompt: '¿Qué pasa si hablas gritando?', choices: ['Molesta y cuesta entenderte', 'Te entienden mejor'], answer: 'Molesta y cuesta entenderte' },
        { prompt: 'Para organizar tu noticia, ¿qué tienes que contar?', choices: ['Qué pasó, dónde, a quién y cuándo', 'Solo tu nombre', 'Un chiste'], answer: 'Qué pasó, dónde, a quién y cuándo' },
      ],
    },
  ],
};

export default noticia;
