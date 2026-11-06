import { shapes } from '../scenes';

// Mates, tema 7: los cuerpos geométricos: prisma (el cubo es un prisma), pirámide, cilindro, cono y
// esfera. Sus nombres, en qué se diferencian y qué objetos tienen su forma.
const SOLIDS = ['cubo', 'prisma', 'pirámide', 'cilindro', 'cono', 'esfera'];

const cuerpos = {
  slug: 'cuerpos',
  title: 'Cuerpos geométricos',
  heading: '¿Cómo se llama?',
  type: 'quiz',
  instructions: 'Mira el cuerpo geométrico y elige su nombre.',
  questions: [
    { prompt: '¿Cómo se llama este cuerpo geométrico?', scene: shapes('piramide'), choices: SOLIDS, answer: 'pirámide' },
    { prompt: '¿Y este, que rueda?', scene: shapes('cilindro'), choices: SOLIDS, answer: 'cilindro' },
    { prompt: 'Todas sus caras son cuadrados iguales. ¿Qué es?', scene: shapes('cubo'), choices: SOLIDS, answer: 'cubo' },
    { prompt: 'Es redondo como una pelota. ¿Cómo se llama?', scene: shapes('esfera'), choices: SOLIDS, answer: 'esfera' },
    { prompt: 'Tiene una base redonda y una punta. ¿Qué es?', scene: shapes('cono'), choices: SOLIDS, answer: 'cono' },
    { prompt: 'Parece una caja. ¿Cómo se llama?', scene: shapes('prisma'), choices: SOLIDS, answer: 'prisma' },
  ],
  more: [
    {
      title: '¿Qué forma tiene?',
      type: 'quiz',
      instructions: 'Piensa en la forma de cada objeto.',
      questions: [
        { prompt: '¿Qué forma tiene un balón? ⚽', choices: SOLIDS, answer: 'esfera' },
        { prompt: '¿Qué forma tiene una lata? 🥫', choices: SOLIDS, answer: 'cilindro' },
        { prompt: '¿Qué forma tiene un dado? 🎲', choices: SOLIDS, answer: 'cubo' },
        { prompt: '¿Qué forma tiene el cucurucho de un helado? 🍦', choices: SOLIDS, answer: 'cono' },
        { prompt: '¿Qué forma tiene una caja de zapatos? 📦', choices: SOLIDS, answer: 'prisma' },
        { prompt: '¿Qué forma tienen las pirámides de Egipto?', choices: SOLIDS, answer: 'pirámide' },
        { prompt: '¿Qué forma tiene una vela? 🕯️', choices: SOLIDS, answer: 'cilindro' },
        { prompt: '¿Qué forma tiene una naranja? 🍊', choices: SOLIDS, answer: 'esfera' },
      ],
    },
    {
      title: '¿Rueda o no rueda?',
      type: 'sort',
      instructions: 'Arrastra cada cuerpo: ¿tiene alguna parte curva y puede rodar, o todas sus caras son planas?',
      columns: [
        { id: 'curvo', title: 'Tiene partes curvas: rueda' },
        { id: 'plano', title: 'Todas sus caras son planas' },
      ],
      cards: [
        { id: 'esfera', text: 'esfera', columns: ['curvo'] },
        { id: 'cilindro', text: 'cilindro', columns: ['curvo'] },
        { id: 'cono', text: 'cono', columns: ['curvo'] },
        { id: 'cubo', text: 'cubo', columns: ['plano'] },
        { id: 'prisma', text: 'prisma', columns: ['plano'] },
        { id: 'piramide', text: 'pirámide', columns: ['plano'] },
      ],
    },
    {
      title: '¿En qué se diferencian?',
      type: 'quiz',
      instructions: 'Compara los dos cuerpos geométricos.',
      questions: [
        {
          prompt: 'Un prisma y una pirámide. ¿Cuál termina en punta?',
          scene: shapes('prisma', 'piramide'),
          choices: ['El prisma', 'La pirámide'],
          answer: 'La pirámide',
        },
        {
          prompt: 'Un prisma y un cilindro. ¿Cuál puede rodar?',
          scene: shapes('prisma', 'cilindro'),
          choices: ['El prisma', 'El cilindro'],
          answer: 'El cilindro',
        },
        {
          prompt: 'Un cono y un cilindro. ¿Cuál tiene dos bases redondas?',
          scene: shapes('cono', 'cilindro'),
          choices: ['El cono', 'El cilindro'],
          answer: 'El cilindro',
        },
        {
          prompt: '¿Es el cubo un prisma?',
          scene: shapes('cubo'),
          choices: ['Sí, es un prisma con todas las caras cuadradas', 'No, es una pirámide'],
          answer: 'Sí, es un prisma con todas las caras cuadradas',
        },
      ],
    },
  ],
};

export default cuerpos;
