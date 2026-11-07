// Naturales, tema 1: ¿cómo funciona nuestro cuerpo? Las tres funciones vitales, en un esquema y en
// tarjetas, los cinco sentidos y sus órganos, y el taller del tacto con la caja mágica.
const funciones = {
  slug: 'funciones',
  title: '¿Cómo funciona nuestro cuerpo?',
  heading: 'Las funciones vitales',
  type: 'match',
  instructions: 'Las personas, como todos los seres vivos, realizamos tres funciones vitales. Toca una función y después la frase que dice lo que es.',
  root: 'Funciones vitales',
  columns: ['Función', '¿Qué es?'],
  pairs: [
    { id: 'nutricion', en: 'Nutrición', es: 'Tomamos alimentos y aire para crecer y tener energía.' },
    { id: 'relacion', en: 'Relación', es: 'Notamos lo que pasa a nuestro alrededor con los sentidos y nos movemos.' },
    { id: 'reproduccion', en: 'Reproducción', es: 'Los seres vivos tienen hijos que se parecen a ellos.' },
  ],
  more: [
    {
      title: '¿Qué función es?',
      type: 'sort',
      instructions: 'Lleva cada tarjeta a su función vital.',
      columns: [
        { id: 'relacion', title: 'Relación', subtitle: 'Sentidos y movimiento' },
        { id: 'nutricion', title: 'Nutrición', subtitle: 'Aire y alimentos' },
        { id: 'reproduccion', title: 'Reproducción', subtitle: 'Hijos e hijas' },
      ],
      cards: [
        { id: 'respirar', text: 'Respiramos aire', columns: ['nutricion'] },
        { id: 'desayuno', text: 'Tomamos el desayuno', columns: ['nutricion'] },
        { id: 'energia', text: 'Los alimentos nos dan energía', columns: ['nutricion'] },
        { id: 'sentidos', text: 'Vemos, oímos y olemos', columns: ['relacion'] },
        { id: 'recreo', text: 'Jugamos en el recreo', columns: ['relacion'] },
        { id: 'portera', text: 'La portera para el balón', columns: ['relacion'] },
        { id: 'hijos', text: 'Los adultos pueden tener hijos', columns: ['reproduccion'] },
        { id: 'bebes', text: 'Nacen bebés', columns: ['reproduccion'] },
      ],
    },
    {
      title: 'Los cinco sentidos',
      type: 'match',
      instructions: 'Toca un sentido y después el órgano que lo usa.',
      columns: ['Sentido', 'Órgano'],
      pairs: [
        { id: 'vista', en: 'Vista', es: 'Ojos' },
        { id: 'oido', en: 'Oído', es: 'Orejas' },
        { id: 'olfato', en: 'Olfato', es: 'Nariz' },
        { id: 'gusto', en: 'Gusto', es: 'Lengua' },
        { id: 'tacto', en: 'Tacto', es: 'Piel' },
      ],
    },
    {
      title: 'Raúl y el tomate',
      type: 'quiz',
      instructions: 'El abuelo y Raúl están en el huerto. ¿Qué parte del cuerpo le sirve a Raúl para saber qué ocurre?',
      questions: [
        { prompt: 'El abuelo le muestra a Raúl un tomate y él ve que está maduro.', choices: ['Ojos', 'Lengua'], answer: 'Ojos' },
        { prompt: 'Raúl coge el tomate y le parece que es muy suave.', choices: ['Lengua', 'Manos'], answer: 'Manos' },
        { prompt: 'Raúl huele el tomate y el olor le resulta agradable.', choices: ['Ojos', 'Nariz'], answer: 'Nariz' },
        { prompt: 'Raúl prueba el tomate: ¡qué rico!', choices: ['Lengua', 'Orejas'], answer: 'Lengua' },
        { prompt: 'El abuelo le llama: «¡Raúl, a comer!». Raúl le oye con las…', choices: ['Orejas', 'Manos'], answer: 'Orejas' },
      ],
    },
    {
      title: 'Experimentos con el tacto',
      type: 'quiz',
      instructions: 'En una caja mágica hay una naranja, una piedra, un lápiz, una concha y un vaso. Metes la mano sin mirar.',
      questions: [
        { prompt: '¿Qué sentido usas para reconocer los objetos de la caja?', choices: ['La vista', 'El tacto', 'El oído'], answer: 'El tacto' },
        { prompt: '¿Cuándo es más fácil reconocerlos?', choices: ['Con un calcetín en la mano', 'Sin calcetín'], answer: 'Sin calcetín' },
        { prompt: '¿Qué objeto de la caja es blando y redondo?', choices: ['La piedra', 'La naranja', 'El lápiz'], answer: 'La naranja' },
        { prompt: '¿Qué objeto es duro y rugoso?', choices: ['La piedra', 'El vaso', 'La naranja'], answer: 'La piedra' },
      ],
    },
  ],
};

export default funciones;
