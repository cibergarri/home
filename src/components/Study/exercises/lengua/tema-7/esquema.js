// Lengua, tema 7: el esquema, a partir del texto «¡Demasiado ruido!» sobre la contaminación
// sonora: qué es, qué la produce y qué problemas provoca.
const esquema = {
  slug: 'esquema',
  title: 'El esquema',
  heading: '¡Demasiado ruido!',
  type: 'quiz',
  instructions: 'Hacer un esquema es organizar la información principal de un texto. Lee en tu libro «¡Demasiado ruido!» y contesta.',
  questions: [
    { prompt: '¿Cuál es el tema del texto?', choices: ['La contaminación sonora', 'Los animales', 'Los problemas de las personas'], answer: 'La contaminación sonora' },
    { prompt: '¿Qué es la contaminación sonora?', choices: ['Un tipo de contaminación por ruido', 'Basura en el mar', 'Humo de las fábricas'], answer: 'Un tipo de contaminación por ruido' },
    { prompt: '¿Cuándo hay contaminación sonora?', choices: ['Cuando hay mucho ruido y es demasiado alto', 'Cuando hay silencio', 'Cuando llueve'], answer: 'Cuando hay mucho ruido y es demasiado alto' },
    { prompt: 'Si soportan mucho ruido, ¿qué les pasa a las personas?', choices: ['Les cuesta descansar y están más nerviosas', 'Duermen mejor', 'Están más tranquilas'], answer: 'Les cuesta descansar y están más nerviosas' },
    { prompt: '¿Qué les puede pasar a los animales?', choices: ['Se asustan, huyen y les cuesta alimentarse', 'Cantan más', 'Crecen más deprisa'], answer: 'Se asustan, huyen y les cuesta alimentarse' },
    { prompt: '¿Cómo es un esquema, comparado con el texto?', choices: ['Más breve', 'Más largo', 'Igual de largo'], answer: 'Más breve' },
  ],
  more: [
    {
      title: 'Completa el esquema',
      type: 'sort',
      instructions: 'Lleva cada idea a su caja del esquema.',
      columns: [
        { id: 'produce', title: '¿Qué lo produce?' },
        { id: 'problemas', title: '¿Qué problemas provoca?' },
        { id: 'controlar', title: '¿Cómo lo podemos controlar?' },
      ],
      cards: [
        { id: 'coches', text: 'coches, aviones y barcos', columns: ['produce'] },
        { id: 'obras', text: 'las obras', columns: ['produce'] },
        { id: 'musica', text: 'la música muy alta', columns: ['produce'] },
        { id: 'animales-sonidos', text: 'el sonido de los animales', columns: ['produce'] },
        { id: 'personas', text: 'molestias a las personas', columns: ['problemas'] },
        { id: 'animales', text: 'molestias a los animales', columns: ['problemas'] },
        { id: 'bajito', text: 'hablar bajito', columns: ['controlar'] },
        { id: 'sillas', text: 'no arrastrar las sillas', columns: ['controlar'] },
        { id: 'volumen', text: 'bajar el volumen de la música', columns: ['controlar'] },
      ],
    },
    {
      title: 'Mi amigo silencioso',
      type: 'quiz',
      instructions: 'Tu amigo silencioso solo está a gusto si el ambiente es tranquilo. ¿Qué le gusta?',
      questions: [
        { prompt: 'Entramos en clase gritando.', choices: ['Le gusta', 'No le gusta'], answer: 'No le gusta' },
        { prompt: 'Hablamos bajito al trabajar en equipo.', choices: ['Le gusta', 'No le gusta'], answer: 'Le gusta' },
        { prompt: 'Recogemos el material en silencio.', choices: ['Le gusta', 'No le gusta'], answer: 'Le gusta' },
        { prompt: 'Arrastramos las sillas al moverlas.', choices: ['Le gusta', 'No le gusta'], answer: 'No le gusta' },
        { prompt: 'Damos portazos.', choices: ['Le gusta', 'No le gusta'], answer: 'No le gusta' },
      ],
    },
  ],
};

export default esquema;
