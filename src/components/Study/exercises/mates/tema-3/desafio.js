import { shapes } from '../scenes';

// Mates, tema 3: el desafío de Malún, una nueva flor. Una flor de Monteoscuro hecha con polígonos:
// contar las figuras de cada tipo y sus lados, y pensar en sus cuidados.
const FLOR = shapes('hexagono', 'triangulo', 'triangulo', 'triangulo', 'cuadrado', 'pentagono', 'triangulo');

const count = (story, prompt, answer) => ({
  story, prompt, scene: FLOR, answer,
});

const desafio = {
  slug: 'desafio',
  title: 'El desafío de Malún: una nueva flor',
  heading: 'Las piezas de la flor',
  type: 'numbers',
  write: true,
  instructions: 'Malún ha construido una flor de Monteoscuro con estos polígonos. Cuenta y completa.',
  questions: [
    count('¿Cuántos triángulos ha usado?', '? triángulos', 4),
    count('¿Cuántos cuadrados ha usado?', '? cuadrados', 1),
    count('¿Cuántos pentágonos ha usado?', '? pentágonos', 1),
    count('¿Cuántos hexágonos ha usado?', '? hexágonos', 1),
    count('¿Cuántas figuras ha usado en total?', '? figuras', 7),
    count('Los triángulos son los pétalos. ¿Cuántos lados tienen los 4 triángulos juntos?', '3 + 3 + 3 + 3 = ?', 12),
  ],
  more: [
    {
      title: 'Los cuidados de la flor',
      type: 'quiz',
      instructions: 'Las plantas son seres vivos y necesitan cuidados.',
      questions: [
        {
          prompt: '¿Qué necesita una flor para vivir?', choices: ['Solo oscuridad', 'Nada', 'Agua, luz y tierra'], answer: 'Agua, luz y tierra',
        },
        {
          prompt: '¿Qué objeto nos ayuda a cuidar las plantas?', choices: ['Una pelota', 'Una regadera', 'Un lápiz'], answer: 'Una regadera',
        },
        {
          prompt: '¿Cuál de estas figuras es un polígono?', choices: ['El pentágono', 'El círculo'], answer: 'El pentágono',
        },
        {
          prompt: '¿Cuántos vértices tiene el hexágono del centro?', choices: ['5', '6', '8'], answer: '6',
        },
      ],
    },
  ],
};

export default desafio;
