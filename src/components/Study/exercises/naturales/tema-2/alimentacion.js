// Naturales, tema 2: nos alimentamos bien. Los grupos de alimentos, y los tres menús del libro
// para comparar.
const alimentacion = {
  slug: 'alimentacion',
  title: 'Nos alimentamos bien',
  heading: 'Los grupos de alimentos',
  type: 'sort',
  instructions: 'Es importante tomar alimentos variados, de todos los grupos. Lleva cada alimento a su grupo.',
  columns: [
    { id: 'crecer', title: '💪 Nos ayudan a crecer', subtitle: 'Leche, huevos, carne, pescado…' },
    { id: 'energia', title: '⚡ Nos dan energía', subtitle: 'Pan, pasta, arroz…' },
    { id: 'vitaminas', title: '🥦 Vitaminas y fibra', subtitle: 'Frutas y verduras' },
  ],
  cards: [
    { id: 'leche', text: 'Leche', columns: ['crecer'] },
    { id: 'huevos', text: 'Huevos', columns: ['crecer'] },
    { id: 'pescado', text: 'Pescado', columns: ['crecer'] },
    { id: 'carne', text: 'Carne', columns: ['crecer'] },
    { id: 'yogur', text: 'Yogur', columns: ['crecer'] },
    { id: 'pan', text: 'Pan', columns: ['energia'] },
    { id: 'pasta', text: 'Espaguetis', columns: ['energia'] },
    { id: 'arroz', text: 'Arroz', columns: ['energia'] },
    { id: 'patatas', text: 'Patatas', columns: ['energia'] },
    { id: 'aceite', text: 'Aceite de oliva', columns: ['energia'] },
    { id: 'manzana', text: 'Manzana', columns: ['vitaminas'] },
    { id: 'naranja', text: 'Naranja', columns: ['vitaminas'] },
    { id: 'espinacas', text: 'Espinacas', columns: ['vitaminas'] },
    { id: 'zanahoria', text: 'Zanahoria', columns: ['vitaminas'] },
    { id: 'coliflor', text: 'Coliflor', columns: ['vitaminas'] },
  ],
  more: [
    {
      title: 'Comer bien',
      type: 'quiz',
      instructions: 'Lee y elige.',
      questions: [
        { prompt: '¿Cuántas comidas hay que hacer al día?', choices: ['Cinco', 'Dos', 'Ocho'], answer: 'Cinco' },
        { prompt: '¿Cómo tiene que ser el desayuno?', choices: ['Completo', 'Solo un vaso de agua'], answer: 'Completo' },
        { prompt: 'Es conveniente comer alimentos…', choices: ['frescos', 'con mucho azúcar'], answer: 'frescos' },
        { prompt: '¿Qué hay que beber suficiente?', choices: ['Agua', 'Refrescos'], answer: 'Agua' },
        { prompt: 'Las frutas y las verduras nos dan…', choices: ['vitaminas y fibra', 'mucha energía'], answer: 'vitaminas y fibra' },
      ],
    },
    {
      title: 'Compara los menús',
      type: 'quiz',
      instructions: 'MENÚ 1: espaguetis con nata, tortilla de patatas, yogur natural con fruta, agua y pan. MENÚ 2: lentejas con chorizo, filete empanado con patatas, bizcocho, refresco y pan. MENÚ 3: crema de coliflor y patata, salmón con espinacas, macedonia de frutas, agua y pan integral.',
      keepOrder: true,
      questions: [
        { prompt: '¿Qué menú no tiene frutas ni verduras?', choices: ['Menú 1', 'Menú 2', 'Menú 3'], answer: 'Menú 2' },
        { prompt: '¿Cuál es el menú menos variado?', choices: ['Menú 1', 'Menú 2', 'Menú 3'], answer: 'Menú 2' },
        { prompt: '¿Qué menú lleva pescado y verdura?', choices: ['Menú 1', 'Menú 2', 'Menú 3'], answer: 'Menú 3' },
        { prompt: '¿Qué menú es más sano?', choices: ['Menú 1', 'Menú 2', 'Menú 3'], answer: 'Menú 3' },
        { prompt: '¿Qué bebida es menos sana?', choices: ['El refresco', 'El agua'], answer: 'El refresco' },
      ],
    },
  ],
};

export default alimentacion;
