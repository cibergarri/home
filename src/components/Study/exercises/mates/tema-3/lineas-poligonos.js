import { shapes } from '../scenes';

// Mates, tema 3: líneas rectas, curvas y poligonales, abiertas y cerradas, y los polígonos con sus
// lados, vértices y ángulos.
const LINES = ['Recta', 'Curva', 'Poligonal'];

const SIDES = {
  triangulo: 3, cuadrado: 4, rectangulo: 4, pentagono: 5, hexagono: 6, octogono: 8,
};

const sides = (kind, name) => ({
  story: `Esto es un ${name}. ¿Cuántos lados y vértices tiene?`,
  prompt: '? lados y ? vértices',
  scene: shapes(kind),
  answer: [SIDES[kind], SIDES[kind]],
});

const lineasPoligonos = {
  slug: 'lineas-poligonos',
  title: 'Líneas y polígonos',
  heading: '¿Qué línea es?',
  type: 'quiz',
  instructions: 'Una línea recta no se tuerce. Una línea curva se dobla suavemente. Una línea poligonal está hecha de trozos rectos.',
  questions: [
    { prompt: '¿Cómo es esta línea, sin curvas ni esquinas?', scene: shapes('recta'), choices: LINES, answer: 'Recta' },
    { prompt: '¿Cómo es esta línea que se dobla suavemente?', scene: shapes('curva'), choices: LINES, answer: 'Curva' },
    { prompt: '¿Cómo es esta línea hecha de trozos rectos?', scene: shapes('poligonal'), choices: LINES, answer: 'Poligonal' },
    {
      prompt: 'La circunferencia, ¿es una línea abierta o cerrada?', scene: shapes('circunferencia'), choices: ['Abierta', 'Cerrada'], answer: 'Cerrada',
    },
    {
      prompt: 'Esta línea poligonal, ¿es abierta o cerrada?', scene: shapes('poligonal'), choices: ['Abierta', 'Cerrada'], answer: 'Abierta',
    },
    {
      prompt: 'El borde de un triángulo, ¿qué línea es?', scene: shapes('triangulo'), choices: ['Poligonal cerrada', 'Poligonal abierta', 'Curva cerrada'], answer: 'Poligonal cerrada',
    },
    {
      prompt: '¿Se puede colorear el interior de una línea abierta?', choices: ['Sí', 'No, porque no tiene interior'], answer: 'No, porque no tiene interior',
    },
  ],
  more: [
    {
      title: '¿Es un polígono?',
      type: 'sort',
      instructions: 'Un polígono es una figura plana formada por una línea poligonal cerrada y su interior. Lleva cada figura a su sitio.',
      columns: [
        { id: 'si', title: 'Es un polígono' },
        { id: 'no', title: 'No es un polígono' },
      ],
      cards: [
        { id: 'triangulo', text: 'Triángulo', columns: ['si'] },
        { id: 'cuadrado', text: 'Cuadrado', columns: ['si'] },
        { id: 'rombo', text: 'Rombo', columns: ['si'] },
        { id: 'pentagono', text: 'Pentágono', columns: ['si'] },
        { id: 'rectangulo', text: 'Rectángulo', columns: ['si'] },
        { id: 'circulo', text: 'Círculo', columns: ['no'] },
        { id: 'curva', text: 'Línea curva', columns: ['no'] },
        { id: 'abierta', text: 'Línea poligonal abierta', columns: ['no'] },
      ],
    },
    {
      title: 'Lados y vértices',
      type: 'numbers',
      write: true,
      instructions: 'Los polígonos tienen lados, vértices y ángulos. Tienen tantos vértices como lados. Pulsa ✓ después de cada número.',
      questions: [
        sides('triangulo', 'triángulo'),
        sides('cuadrado', 'cuadrado'),
        sides('pentagono', 'pentágono'),
        sides('rectangulo', 'rectángulo'),
        sides('hexagono', 'hexágono'),
        sides('octogono', 'octógono'),
      ],
    },
    {
      title: 'El rombo y el cuadrado',
      type: 'quiz',
      instructions: 'El rombo y el cuadrado tienen 4 lados iguales. Los ángulos del cuadrado son todos iguales; los del rombo, no.',
      questions: [
        { prompt: '¿Cuántos lados tiene un rombo?', choices: ['3', '4', '5'], answer: '4' },
        { prompt: '¿Son iguales los cuatro lados del cuadrado?', choices: ['Sí', 'No'], answer: 'Sí' },
        { prompt: '¿Son iguales los cuatro ángulos del rombo?', choices: ['Sí', 'No'], answer: 'No' },
        { prompt: '¿En qué se parecen el rombo y el cuadrado?', choices: ['Tienen 4 lados iguales', 'Tienen 3 vértices'], answer: 'Tienen 4 lados iguales' },
        { prompt: '¿Cuántos ángulos tiene un triángulo?', choices: ['2', '3', '4'], answer: '3' },
      ],
    },
  ],
};

export default lineasPoligonos;
