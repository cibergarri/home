// Mates, tema 2: sumar números de 2 y 3 cifras, con bloques y en torre.
const add = (a, b) => ({ op: '+', a, b });

const sumar = {
  slug: 'sumar',
  title: 'Sumar números de 2 y 3 cifras',
  heading: 'Suma con bloques',
  type: 'blocks',
  instructions: 'Dibuja la suma con placas de centenas, barras de decenas y cubos de unidades. Junta unidades con unidades y decenas con decenas. Después escribe el resultado.',
  questions: [add(122, 16), add(136, 41), add(152, 34), add(117, 31), add(125, 31)],
  more: [
    {
      title: 'Suma en torre',
      type: 'tower',
      instructions: 'Coloca cada cifra en su columna: centenas, decenas y unidades. Empieza a sumar por las unidades.',
      questions: [add(122, 16), add(146, 21), add(172, 16), add(43, 125), add(134, 41), add(185, 13), add(56, 123), add(125, 31)],
    },
    {
      title: 'Problemas',
      type: 'numbers',
      write: true,
      instructions: 'Lee el problema, calcula y escribe el resultado.',
      questions: [
        {
          story: 'Coco ha conseguido 122 puntos en una prueba y 16 en otra. ¿Cuántos puntos ha conseguido en total?',
          prompt: '? puntos',
          answer: 138,
        },
        {
          story: 'Rex ha entrenado 126 días. Guardián ha entrenado 71 días más que Rex. ¿Cuántos días lleva entrenando Guardián?',
          prompt: '? días',
          answer: 197,
        },
      ],
    },
  ],
};

export default sumar;
