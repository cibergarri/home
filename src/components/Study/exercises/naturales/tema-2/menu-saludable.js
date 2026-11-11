// Naturales, tema 2: nuestro reto, un menú saludable. Los consejos para hacerlo y el menú que ha
// preparado una niña, para ver qué cambiaríamos.
const menuSaludable = {
  slug: 'menu-saludable',
  title: 'Un menú saludable',
  heading: 'El menú de la niña',
  type: 'sort',
  instructions: 'Mira el menú que ha preparado esta niña. ¿Qué alimentos son sanos y cuáles son menos sanos?',
  columns: [
    { id: 'sano', title: '✅ Sano' },
    { id: 'menos', title: '❌ Menos sano', subtitle: 'Mejor de vez en cuando' },
  ],
  cards: [
    { id: 'leche', text: 'Desayuno: un vaso de leche', columns: ['sano'] },
    { id: 'tostada', text: 'Desayuno: tostada integral con aceite de oliva', columns: ['sano'] },
    { id: 'sandwich', text: 'Media mañana: sándwich de queso y jamón cocido', columns: ['sano'] },
    { id: 'hamburguesa', text: 'Comida: hamburguesa con patatas fritas', columns: ['menos'] },
    { id: 'pera', text: 'Comida: una pera', columns: ['sano'] },
    { id: 'yogur', text: 'Merienda: un yogur natural', columns: ['sano'] },
    { id: 'sopa', text: 'Cena: sopa de pescado', columns: ['sano'] },
    { id: 'tortilla', text: 'Cena: tortilla de calabacín', columns: ['sano'] },
    { id: 'flan', text: 'Cena: un flan', columns: ['menos'] },
  ],
  more: [
    {
      title: 'Consejos para un menú sano',
      type: 'quiz',
      instructions: 'Elige el buen consejo.',
      questions: [
        { prompt: '¿Qué conviene tomar más?', choices: ['Más pescado que carne', 'Más carne que pescado'], answer: 'Más pescado que carne' },
        { prompt: '¿Cada cuánto hay que comer verdura?', choices: ['A diario', 'Nunca'], answer: 'A diario' },
        { prompt: '¿Qué alimentos hay que evitar?', choices: ['Los que tienen mucho azúcar', 'Las frutas'], answer: 'Los que tienen mucho azúcar' },
        { prompt: '¿Qué pan es más sano?', choices: ['El integral', 'Los bollos'], answer: 'El integral' },
        { prompt: '¿Cuántas piezas de fruta tiene el menú de la niña?', choices: ['Una', 'Tres', 'Cinco'], answer: 'Una' },
        { prompt: '¿Es suficiente una pieza de fruta al día?', choices: ['No, hay que tomar más', 'Sí, es mucha fruta'], answer: 'No, hay que tomar más' },
        { prompt: '¿Por qué cambiarías la hamburguesa con patatas fritas?', choices: ['Por pescado con ensalada', 'Por una pizza'], answer: 'Por pescado con ensalada' },
      ],
    },
  ],
};

export default menuSaludable;
