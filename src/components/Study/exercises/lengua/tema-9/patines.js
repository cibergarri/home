// Lengua, tema 9: la descripción de objetos (los patines de Teo: qué es, cómo es y para qué sirve)
// y hablar a la velocidad adecuada para presentar un invento mágico.
const patines = {
  slug: 'patines',
  title: 'Describo un objeto',
  heading: 'Los patines de Teo',
  type: 'quiz',
  instructions: 'Lee en tu libro cómo describe Teo sus patines. Para describir un objeto decimos qué es, cómo es y para qué sirve.',
  questions: [
    { prompt: '¿Qué son?', choices: ['Unos patines de ruedas', 'Unas botas de agua', 'Un monopatín'], answer: 'Unos patines de ruedas' },
    { prompt: '¿De qué talla son?', choices: ['De la 33', 'De la 23', 'De la 38'], answer: 'De la 33' },
    { prompt: '¿Qué tienen de mágico?', choices: ['Se hacen más grandes si te crece el pie', 'Vuelan', 'Cambian de color'], answer: 'Se hacen más grandes si te crece el pie' },
    { prompt: '¿Cuántas ruedas tiene cada patín?', choices: ['Cuatro, en línea', 'Dos', 'Tres'], answer: 'Cuatro, en línea' },
    { prompt: '¿Dónde está el freno?', choices: ['En la parte de atrás', 'En la parte de delante', 'En la bota'], answer: 'En la parte de atrás' },
    { prompt: '¿De qué color son?', choices: ['Rojos con detalles en gris', 'Azules con detalles en blanco', 'Negros'], answer: 'Rojos con detalles en gris' },
    { prompt: '¿Para qué sirven?', choices: ['Para hacer ejercicio y divertirse', 'Para nadar', 'Para dormir'], answer: 'Para hacer ejercicio y divertirse' },
  ],
  more: [
    {
      title: '¿Qué es, cómo es, para qué sirve?',
      type: 'sort',
      instructions: 'Describe la cuchara enfriadora. Lleva cada frase a su pregunta.',
      columns: [
        { id: 'que', title: '¿Qué es?' },
        { id: 'como', title: '¿Cómo es?' },
        { id: 'sirve', title: '¿Para qué sirve?' },
      ],
      cards: [
        { id: 'cuchara', text: 'Es una cuchara mágica.', columns: ['que'] },
        { id: 'mediana', text: 'Es mediana.', columns: ['como'] },
        { id: 'plata', text: 'Está hecha de plata.', columns: ['como'] },
        { id: 'mango', text: 'Tiene un mango con estrellas azules.', columns: ['como'] },
        { id: 'enfria', text: 'Enfría la sopa.', columns: ['sirve'] },
        { id: 'quemarse', text: 'Se usa para no quemarse.', columns: ['sirve'] },
      ],
    },
    {
      title: 'Ni muy deprisa ni muy despacio',
      type: 'quiz',
      instructions: 'Teo habla con su madre de los electrodomésticos de casa. Al principio se equivoca.',
      questions: [
        { prompt: '¿Por qué se equivoca Teo al hablar?', choices: ['Porque habla muy deprisa', 'Porque habla muy despacio', 'Porque no sabe los nombres'], answer: 'Porque habla muy deprisa' },
        { prompt: 'Si lees muy despacio, el público…', choices: ['se puede aburrir', 'te entiende mejor que nunca', 'se ríe'], answer: 'se puede aburrir' },
        { prompt: 'Si lees muy deprisa, el público…', choices: ['puede no entenderte', 'se duerme', 'aplaude más'], answer: 'puede no entenderte' },
        { prompt: '¿Qué puedes hacer antes de leer en voz alta?', choices: ['Leer dos veces lo que has escrito', 'Correr un poco', 'Cerrar los ojos'], answer: 'Leer dos veces lo que has escrito' },
      ],
    },
  ],
};

export default patines;
