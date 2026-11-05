// Lengua, bienvenida: el cuento «Teo regresa a Monteoscuro», qué pasa y en qué orden.
const teoRegresa = {
  slug: 'teo-regresa',
  title: 'Teo regresa a Monteoscuro',
  heading: 'Comprendo el cuento',
  type: 'quiz',
  instructions: 'Lee primero el cuento en tu libro. Después, contesta.',
  questions: [
    { prompt: '¿Quién es el único que puede utilizar la varita mágica?', choices: ['Teo', 'Lena', 'Malún'], answer: 'Teo' },
    { prompt: '¿Quién es Braviana, la madre de Teo?', choices: ['Un hada', 'Una bruja', 'Una troll'], answer: 'Un hada' },
    { prompt: '¿Cómo llega Teo de su casa a Monteoscuro?', choices: ['Con la brújula de los Cuatro Reinos', 'En una escoba', 'Andando por el bosque'], answer: 'Con la brújula de los Cuatro Reinos' },
    { prompt: '¿Quién le da a Teo un abrazo tan grande que lo tira al suelo?', choices: ['Mica', 'Topi', 'Su padre'], answer: 'Mica' },
    { prompt: '¿Quién ha puesto en peligro Monteoscuro?', choices: ['El brujo Malún', 'Topi', 'El hada Braviana'], answer: 'El brujo Malún' },
    { prompt: '¿Qué les pasa a los árboles cuando los toca la niebla?', choices: ['Se vuelven grises', 'Se llenan de flores', 'Crecen más'], answer: 'Se vuelven grises' },
    { prompt: '¿Dónde está escondida la varita?', choices: ['En un cajón secreto del armario guardalotodo', 'En lo alto del Tukuruku', 'En el Reino de los Pantanos'], answer: 'En un cajón secreto del armario guardalotodo' },
    { prompt: '¿Cómo se siente Topi al ver a Teo?', choices: ['Feliz', 'Triste'], answer: 'Feliz' },
  ],
  more: [
    {
      title: '¿Qué significa?',
      type: 'quiz',
      instructions: 'Busca la palabra en el cuento si no te acuerdas.',
      questions: [
        { prompt: '¿Qué palabra del cuento significa «mucho ruido»?', choices: ['invencibles', 'alboroto', 'impaciente'], answer: 'alboroto' },
        { prompt: 'Teo está impaciente. Eso quiere decir que está…', choices: ['intranquilo', 'dormido', 'enfadado'], answer: 'intranquilo' },
        { prompt: 'Un remolino es…', choices: ['aire que gira muy rápido', 'un árbol muy alto', 'un hechizo'], answer: 'aire que gira muy rápido' },
        { prompt: 'Topi hace un tirabuzón: hace una…', choices: ['pirueta', 'comida', 'carrera'], answer: 'pirueta' },
        { prompt: 'Malún quiere adueñarse de Monteoscuro: quiere…', choices: ['quedarse algo que no es suyo', 'cuidar el bosque', 'irse de viaje'], answer: 'quedarse algo que no es suyo' },
      ],
    },
    {
      title: 'Ordena las escenas',
      type: 'build',
      instructions: 'Toca las escenas en el orden en que suceden en el cuento.',
      puzzles: [
        {
          prompt: '¿Qué pasa primero, y qué después?',
          hint: 'Empieza en casa de Teo.',
          answer: ['Teo se despide de sus padres.', 'Un remolino lo lleva a Monteoscuro.', 'Mica le da un gran abrazo.', 'Desde el Tukuruku ven la niebla.'],
        },
      ],
    },
  ],
};

export default teoRegresa;
