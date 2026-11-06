// Mates, tema 5: problemas de litros, pasando litros y medios litros a cuartos de litro: el agua de
// la secadora de Elisa, la leche del campamento y el agua de lluvia del patio.
const problemasDeLitros = {
  slug: 'problemas-de-litros',
  title: 'Problemas de litros',
  heading: 'El agua de Elisa',
  type: 'numbers',
  write: true,
  instructions: 'Elisa tiene un depósito con 4 litros de agua para regar. Pásalo todo a cuartos de litro: 1 litro son 4 cuartos, y medio litro son 2 cuartos.',
  questions: [
    { story: 'Para el balcón usa 2 litros.', prompt: '2 litros = ? cuartos de litro', answer: 8 },
    { story: 'Para el despacho usa 1 cuarto de litro.', prompt: '? cuarto de litro', answer: 1 },
    { story: 'Para el salón usa 3 medios litros.', prompt: '3 medios litros = ? cuartos de litro', answer: 6 },
    { story: 'Para las plantas de la cocina usa 1 cuarto de litro.', prompt: '? cuarto de litro', answer: 1 },
    { story: '¿Cuántos cuartos de litro ha usado en total?', prompt: '8 + 1 + 6 + 1 = ?', answer: 16 },
    { story: '¿Cuántos litros son 16 cuartos de litro?', prompt: '16 cuartos de litro = ? litros', answer: 4 },
  ],
  more: [
    {
      title: '¿Le queda agua?',
      type: 'quiz',
      instructions: 'Piensa en el problema de Elisa.',
      questions: [
        { prompt: 'Elisa tenía 4 litros y ha usado 4 litros. ¿Le queda agua en el depósito?', choices: ['No', 'Sí'], answer: 'No' },
        { prompt: '¿Cómo cuentas los cuartos de litro que hay en 5 litros?', choices: ['Contando de 5 en 5', 'Contando de 4 en 4'], answer: 'Contando de 4 en 4' },
        { prompt: '¿Qué suma da los cuartos de litro que hay en 5 litros?', choices: ['4 + 4 + 4 + 4 + 4', '5 + 5 + 5 + 5'], answer: '4 + 4 + 4 + 4 + 4' },
      ],
    },
    {
      title: 'La leche del campamento',
      type: 'numbers',
      write: true,
      instructions: 'En un campamento hay 24 niños. A cada uno le dan un vaso de leche de un cuarto de litro. Tienen 5 botellas de 1 litro.',
      questions: [
        { story: '¿Cuántos vasos se llenan con 1 litro?', prompt: '1 litro = ? vasos', answer: 4 },
        { story: '¿Cuántos vasos se llenan con las 5 botellas?', prompt: '5 litros = ? vasos', answer: 20 },
        { story: 'Hay 24 niños. ¿Cuántos vasos faltan?', prompt: '24 - 20 = ?', answer: 4 },
        { story: '¿Cuántas botellas de 1 litro faltan para llenar esos vasos?', prompt: 'Falta ? botella.', answer: 1 },
      ],
    },
    {
      title: 'El agua de lluvia',
      type: 'numbers',
      write: true,
      instructions: 'Junta los medios litros de dos en dos para formar litros.',
      questions: [
        { story: 'En el patio han colocado 26 latas de medio litro y se han llenado todas con la lluvia. ¿Cuántos litros han recogido?', prompt: 'Han recogido ? litros.', answer: 13 },
        { story: 'Si hubiera 10 latas de medio litro llenas, ¿cuántos litros serían?', prompt: '? litros', answer: 5 },
        { story: 'Y si hubiera 8 vasos de un cuarto de litro llenos, ¿cuántos litros serían?', prompt: '? litros', answer: 2 },
      ],
    },
  ],
};

export default problemasDeLitros;
