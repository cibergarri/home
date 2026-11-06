// Mates, tema 5: sumar números de 3 cifras reagrupando: 10 unidades se cambian por 1 decena y 10
// decenas por 1 centena, con bloques y en torre (los cubitos de hielo y las chinchetas).
const add = (a, b) => ({ op: '+', a, b });

const sumarReagrupando = {
  slug: 'sumar-reagrupando',
  title: 'Sumar reagrupando',
  heading: 'Suma con bloques',
  type: 'blocks',
  instructions: 'Junta los bloques iguales. Si tienes 10 cubos, cámbialos por 1 barra. Si tienes 10 barras, cámbialas por 1 placa.',
  questions: [add(154, 157), add(128, 135), add(246, 117), add(175, 148), add(139, 262)],
  more: [
    {
      title: 'Suma en torre',
      type: 'tower',
      instructions: 'Empieza por las unidades. Si te salen 10 o más, coloca la decena que te llevas encima de las decenas. Haz lo mismo con las decenas.',
      questions: [add(154, 157), add(153, 289), add(365, 279), add(146, 126), add(258, 167), add(437, 385)],
    },
    {
      title: 'Las chinchetas',
      type: 'tower',
      instructions: 'Calcula el total de chinchetas sumando en torre.',
      questions: [
        { op: '+', a: 156, b: 178, story: 'En una caja hay 156 chinchetas y en otra 178. ¿Cuántas hay en total?' },
        { op: '+', a: 163, b: 189, story: 'En una caja hay 163 chinchetas y en otra 189. ¿Cuántas hay en total?' },
        { op: '+', a: 154, b: 157, story: 'Aquí hay 154 cubitos de hielo y ahí hay 157. ¿Cuántos hay en total?' },
      ],
    },
    {
      title: 'Completa los sumandos',
      type: 'numbers',
      write: true,
      instructions: 'Busca la cifra que falta para que la suma sea correcta. Puedes probar en tu pizarra.',
      questions: [
        { prompt: '179 + ?45 = 424', answer: 2 },
        { prompt: '167 + 1?9 = 326', answer: 5 },
        { prompt: '258 + 1?4 = 432', answer: 7 },
        { prompt: '?36 + 145 = 381', answer: 2 },
      ],
    },
  ],
};

export default sumarReagrupando;
