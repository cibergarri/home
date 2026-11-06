// Mates, tema 5: las actividades del cuaderno "Con las manos en las mates": sumar con bloques
// haciendo cambios, restar desagrupando con bloques y en torre, y el medidor de agua hecho con una
// botella y un vaso de cuarto de litro.
const add = (a, b) => ({ op: '+', a, b });
const take = (a, b) => ({ op: '-', a, b });

const conLasManos = {
  slug: 'con-las-manos',
  title: 'Con las manos en las mates',
  heading: 'Suma con tus bloques',
  type: 'blocks',
  instructions: 'Junta los bloques. Si tienes 10 cubitos, cámbialos por 1 barra. Si tienes 10 barras, cámbialas por 1 placa.',
  questions: [add(127, 33), add(536, 182), add(645, 136), add(645, 173), add(345, 55), add(145, 278), add(137, 267)],
  more: [
    {
      title: '¿Qué cambios haces?',
      type: 'quiz',
      instructions: 'Piensa en tus bloques antes de sumar. ¿Qué tienes que cambiar?',
      questions: [
        {
          prompt: '127 + 33',
          say: '127 más 33',
          choices: ['10 unidades por 1 decena', '10 decenas por 1 centena', 'Nada'],
          answer: '10 unidades por 1 decena',
        },
        {
          prompt: '536 + 182',
          say: '536 más 182',
          choices: ['10 unidades por 1 decena', '10 decenas por 1 centena', 'Nada'],
          answer: '10 decenas por 1 centena',
        },
        {
          prompt: '241 + 315',
          say: '241 más 315',
          choices: ['10 unidades por 1 decena', '10 decenas por 1 centena', 'Nada'],
          answer: 'Nada',
        },
        {
          prompt: 'A 345 le añades 55 con el menor número de piezas. ¿Qué piezas añades?',
          choices: ['5 barras y 5 cubitos', '55 cubitos', '5 placas y 5 barras'],
          answer: '5 barras y 5 cubitos',
        },
        {
          prompt: '345 + 55 = 400. ¿Cómo se lee el resultado?',
          choices: ['Cuatrocientos', 'Cuarenta', 'Cuatro mil'],
          answer: 'Cuatrocientos',
        },
      ],
    },
    {
      title: 'Prepara y resta',
      type: 'tower',
      instructions: 'Si a las unidades de arriba no les puedes quitar las de abajo, cambia 1 decena por 10 unidades. Después, resta.',
      questions: [
        { op: '-', a: 33, b: 16, story: '¿Puedes quitar 16 a 33? Cambia 1 decena de 33 por 10 unidades.' },
        take(73, 28), take(31, 6), take(43, 7), take(51, 23), take(40, 38), take(76, 49),
      ],
    },
    {
      title: 'El medidor de agua',
      type: 'quiz',
      instructions: 'Con una botella y un vaso de cuarto de litro haces un medidor: cada vaso que echas es un cuarto de litro. 🥛',
      questions: [
        { prompt: 'Echas 1 vaso en la botella. ¿Cuánta agua hay?', choices: ['Un cuarto de litro', 'Medio litro', 'Un litro'], answer: 'Un cuarto de litro' },
        { prompt: 'Echas otro vaso. Ya hay 2 vasos. ¿Cuánta agua hay?', choices: ['Un cuarto de litro', 'Medio litro', 'Un litro'], answer: 'Medio litro' },
        { prompt: '¿Cuántos vasos de cuarto de litro son medio litro?', choices: ['2 vasos', '4 vasos', '3 vasos'], answer: '2 vasos' },
        { prompt: '¿Cuántos vasos de cuarto de litro llenan 1 litro?', choices: ['2 vasos', '4 vasos', '10 vasos'], answer: '4 vasos' },
        { prompt: '¿Cuánto son 2 medios litros?', choices: ['Un litro', 'Un cuarto de litro', 'Dos litros'], answer: 'Un litro' },
        { prompt: '¿Cuántas marcas tiene el medidor cuando está lleno el litro?', choices: ['4 marcas', '2 marcas', '1 marca'], answer: '4 marcas' },
      ],
    },
    {
      title: 'Tres vasos de agua',
      type: 'sort',
      instructions: 'Echas 3 vasos de cuarto de litro en el medidor. ¿Qué frases son ciertas?',
      columns: [{ id: 'si', title: 'Es cierto' }, { id: 'no', title: 'No es cierto' }],
      cards: [
        { id: 'tres-cuartos', text: 'Son tres cuartos de litro.', columns: ['si'] },
        { id: 'mas-cuarto', text: 'Es más de un cuarto de litro.', columns: ['si'] },
        { id: 'medio', text: 'Es medio litro.', columns: ['no'] },
        { id: 'mas-medio', text: 'Es más de medio litro.', columns: ['si'] },
        { id: 'menos-litro', text: 'Es menos de un litro.', columns: ['si'] },
        { id: 'litro', text: 'Es un litro.', columns: ['no'] },
        { id: 'mas-litro', text: 'Es más de un litro.', columns: ['no'] },
      ],
    },
  ],
};

export default conLasManos;
