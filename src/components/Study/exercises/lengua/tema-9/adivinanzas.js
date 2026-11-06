// Lengua, tema 9: las adivinanzas («Adivina, adivinanza» y «¿Quién soy?», de Mar Benegas) y las
// palabras que riman.
const adivinanzas = {
  slug: 'adivinanzas',
  title: 'Las adivinanzas',
  heading: 'Adivina, adivinanza',
  type: 'quiz',
  instructions: 'Lee las adivinanzas en tu libro. ¿Cuál es la solución?',
  questions: [
    { prompt: 'Tiene hojas sin ser árbol y te habla sin tener voz.', choices: ['El libro', 'La planta', 'La radio'], answer: 'El libro' },
    { prompt: 'Es bonito por delante, algo feo por detrás, y cambia porque imita a los demás.', choices: ['El espejo', 'La ventana', 'El cuadro'], answer: 'El espejo' },
    { prompt: 'Tiene agujas y no sabe coser. Tiene números y no sabe leer.', choices: ['El reloj', 'El costurero', 'La calculadora'], answer: 'El reloj' },
    { prompt: 'Pájaro sin plumas, de tripa gigante, con muchos asientos atrás y adelante.', choices: ['El avión', 'El autobús', 'La gallina'], answer: 'El avión' },
    { prompt: 'Tiene cola y no es lagarto. Sus dientes blancos y negros hacen sonar la canción.', choices: ['El piano', 'El cocodrilo', 'La guitarra'], answer: 'El piano' },
    { prompt: 'Es redondo, pero no es un balón. Si lo tocas con los palos hace pom-pom.', choices: ['El tambor', 'La guitarra', 'El balón'], answer: 'El tambor' },
  ],
  more: [
    {
      title: 'Palabras que riman',
      type: 'match',
      instructions: 'Riman las palabras que acaban igual. Une cada palabra de las adivinanzas con la que rima.',
      columns: ['Palabra', 'Rima con'],
      pairs: [
        { id: 'detras', en: 'detrás', es: 'demás' },
        { id: 'coser', en: 'coser', es: 'leer' },
        { id: 'gigante', en: 'gigante', es: 'adelante' },
        { id: 'tiburon', en: 'tiburón', es: 'canción' },
      ],
    },
    {
      title: 'Piensa',
      type: 'quiz',
      instructions: 'Piensa en las adivinanzas.',
      questions: [
        { prompt: '¿Cómo «habla» el libro de la adivinanza?', choices: ['Con las palabras que tiene escritas', 'Haciendo gestos', 'Con su voz'], answer: 'Con las palabras que tiene escritas' },
        { prompt: '¿Es el espejo siempre bonito por delante?', choices: ['Depende de lo que tenga delante', 'Sí, siempre', 'No, nunca'], answer: 'Depende de lo que tenga delante' },
        { prompt: '«Me transformo» quiere decir…', choices: ['cambio', 'me escondo', 'me rompo'], answer: 'cambio' },
        { prompt: 'Las agujas del reloj sirven para…', choices: ['marcar la hora', 'coser', 'pinchar'], answer: 'marcar la hora' },
      ],
    },
  ],
};

export default adivinanzas;
