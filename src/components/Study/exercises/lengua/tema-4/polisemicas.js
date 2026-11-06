// Lengua, tema 4: las palabras polisémicas, que tienen más de un significado (hoja, carta, banco,
// planta, mono, sierra…).
const polisemicas = {
  slug: 'polisemicas',
  title: 'Las palabras polisémicas',
  heading: '¿Qué significa aquí?',
  type: 'quiz',
  instructions: 'Hay hojas de los árboles y hojas de papel. Hoja tiene dos significados: es una palabra polisémica. Elige qué significa en cada frase.',
  questions: [
    { prompt: 'Por favor, respetad las plantas.', choices: ['Ser vivo que crece en la tierra', 'Parte de abajo del pie'], answer: 'Ser vivo que crece en la tierra' },
    { prompt: 'Me duele la planta del pie.', choices: ['Parte de abajo del pie', 'Ser vivo que crece en la tierra'], answer: 'Parte de abajo del pie' },
    { prompt: 'Es obligatorio usar mono de trabajo.', choices: ['Prenda de vestir', 'Animal que vive en los árboles'], answer: 'Prenda de vestir' },
    { prompt: 'El mono salta de rama en rama.', choices: ['Animal que vive en los árboles', 'Prenda de vestir'], answer: 'Animal que vive en los árboles' },
    { prompt: 'Me siento en el banco del parque.', choices: ['Asiento para varias personas', 'Lugar donde se guarda el dinero'], answer: 'Asiento para varias personas' },
    { prompt: 'Papá va al banco a sacar dinero.', choices: ['Lugar donde se guarda el dinero', 'Asiento para varias personas'], answer: 'Lugar donde se guarda el dinero' },
    { prompt: 'Escribo una carta a mi abuela.', choices: ['Papel con un mensaje', 'Naipe para jugar'], answer: 'Papel con un mensaje' },
    { prompt: 'Saca una carta de la baraja.', choices: ['Naipe para jugar', 'Papel con un mensaje'], answer: 'Naipe para jugar' },
  ],
  more: [
    {
      title: 'Más palabras con dos significados',
      type: 'quiz',
      instructions: 'Lee la frase y piensa qué significa la palabra.',
      questions: [
        { prompt: 'Corta la madera con la sierra.', choices: ['Herramienta para cortar', 'Grupo de montañas'], answer: 'Herramienta para cortar' },
        { prompt: 'Vamos de excursión a la sierra.', choices: ['Grupo de montañas', 'Herramienta para cortar'], answer: 'Grupo de montañas' },
        { prompt: 'Se oye la sirena de la ambulancia.', choices: ['Aparato que hace un ruido fuerte para avisar', 'Mujer con cola de pez'], answer: 'Aparato que hace un ruido fuerte para avisar' },
        { prompt: 'En el cuento, la sirena nada en el mar.', choices: ['Mujer con cola de pez', 'Aparato que hace un ruido fuerte para avisar'], answer: 'Mujer con cola de pez' },
        { prompt: 'Mueve el ratón del ordenador.', choices: ['Aparato para manejar el ordenador', 'Animal pequeño con cola larga'], answer: 'Aparato para manejar el ordenador' },
        { prompt: 'Por la noche brilla una estrella en el cielo.', choices: ['Astro que brilla en el cielo', 'Animal del mar con cinco brazos'], answer: 'Astro que brilla en el cielo' },
        { prompt: 'En la playa encontré una estrella de mar.', choices: ['Animal del mar con cinco brazos', 'Astro que brilla en el cielo'], answer: 'Animal del mar con cinco brazos' },
      ],
    },
    {
      title: '¿Qué palabra es?',
      type: 'quiz',
      instructions: 'Adivina la palabra polisémica que tiene estos dos significados.',
      questions: [
        { prompt: 'Crece en los árboles y también es un papel para escribir.', choices: ['hoja', 'flor', 'libro'], answer: 'hoja' },
        { prompt: 'Es la boca de un pájaro y también la punta de una montaña.', choices: ['pico', 'ala', 'cima'], answer: 'pico' },
        { prompt: 'Es un juguete para jugar y también la parte del brazo que se une con la mano.', choices: ['muñeca', 'codo', 'pelota'], answer: 'muñeca' },
        { prompt: 'Es un juguete que vuela con el viento y también un astro con cola.', choices: ['cometa', 'globo', 'estrella'], answer: 'cometa' },
        { prompt: 'Es un ser vivo verde y también un piso de un edificio.', choices: ['planta', 'árbol', 'escalera'], answer: 'planta' },
      ],
    },
  ],
};

export default polisemicas;
