// Mates, tema 5: el repaso del final del tema, "¿Qué he aprendido?".
const repaso = {
  slug: 'repaso',
  title: 'Repaso',
  heading: '1. Anterior y posterior',
  type: 'numbers',
  write: true,
  instructions: 'Escribe el número que se pide.',
  questions: [
    { story: 'El anterior a 565.', prompt: '?', answer: 564 },
    { story: 'El anterior a 200.', prompt: '?', answer: 199 },
    { story: 'El posterior a 610.', prompt: '?', answer: 611 },
    { story: 'El posterior a 399.', prompt: '?', answer: 400 },
  ],
  more: [
    {
      title: '2. La carrera',
      type: 'quiz',
      instructions: 'Piensa en las posiciones.',
      questions: [
        { prompt: 'Ángel va decimosexto en una carrera. Si adelanta dos puestos, ¿en qué posición irá?', choices: ['Decimonoveno', 'Decimocuarto', 'Decimosegundo'], answer: 'Decimocuarto' },
        { prompt: '¿Qué suma crees que tiene el resultado mayor?', say: false, choices: ['268 + 364', '256 + 159'], answer: '268 + 364' },
      ],
    },
    {
      title: '3. Suma y resta en torre',
      type: 'tower',
      instructions: 'Suma reagrupando y resta desagrupando cuando haga falta.',
      questions: [
        { op: '+', a: 268, b: 364 },
        { op: '+', a: 256, b: 159 },
        { op: '-', a: 55, b: 27, story: 'Mica tenía 55 pipas y se ha comido 27. ¿Cuántas le quedan?' },
        { op: '-', a: 62, b: 16, story: 'Topi tenía 62 pipas y se ha comido 16. ¿Cuántas le quedan?' },
      ],
    },
    {
      title: '4. Problemas',
      type: 'numbers',
      write: true,
      instructions: 'Lee y calcula.',
      questions: [
        { story: 'A Mica le quedan 28 pipas y a Topi 46. ¿Cuántas pipas más le quedan a Topi?', data: [[28, 'pipas le quedan a Mica'], [46, 'pipas le quedan a Topi']], prompt: '? pipas más', answer: 18 },
        { story: 'En una piscina había 345 litros de agua. Si añaden 172 litros más, ¿cuántos litros hay ahora?', data: [[345, 'litros había en la piscina'], [172, 'litros añaden']], prompt: 'Hay ? L.', answer: 517 },
        { story: 'Javier hace una macedonia con 2 cuartos de kilo de manzanas, medio kilo de plátanos y 1 kilo de naranjas. ¿Cuántos kilos de fruta ha usado?', data: false, prompt: 'Ha usado ? kilos.', answer: 2 },
        { story: '¿Cuántos medios litros hay en 3 litros?', prompt: '? medios litros', answer: 6 },
        { prompt: '54 + 9 = ?   54 - 9 = ?', answer: [63, 45] },
      ],
    },
  ],
};

export default repaso;
