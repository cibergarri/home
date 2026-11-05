import { Breathing } from '../../../drawings/Body';

// Naturales, tema 1: necesitamos respirar. El camino del aire y cómo respirar para calmarnos.
const respirar = {
  slug: 'respirar',
  title: 'Necesitamos respirar',
  heading: 'El camino del aire',
  instructions: 'Lleva cada palabra a su caja. En el aire hay oxígeno, un gas que necesitamos para vivir.',
  width: 1000,
  height: 640,
  Drawing: Breathing,
  items: [
    {
      id: 'nariz', word: 'Nariz', definition: 'Por aquí entra el aire cuando respiramos.', dot: [500, 104], box: [760, 70],
    },
    {
      id: 'boca', word: 'Boca', definition: 'El aire también puede entrar por la boca.', dot: [488, 128], box: [240, 130],
    },
    {
      id: 'traquea', word: 'Tráquea', definition: 'Un tubo por el que el aire baja a los pulmones.', dot: [500, 180], box: [760, 190],
    },
    {
      id: 'pulmones', word: 'Pulmones', definition: 'Se llenan de aire y absorben el oxígeno.', dot: [455, 290], box: [240, 300],
    },
  ],
  more: [
    {
      title: '¿Por dónde va el aire?',
      type: 'build',
      instructions: 'Toma aire y siente cómo entra en tu cuerpo. Toca las palabras en orden.',
      puzzles: [
        {
          prompt: 'El aire entra por la…, pasa por la… y llega a los…',
          answer: ['nariz,', 'tráquea,', 'pulmones.'],
        },
        {
          prompt: '¿Cómo se respira profundamente para calmarse?',
          hint: 'Primero inspiración, después espiración.',
          answer: ['Tomo aire por la nariz,', 'lo mantengo unos segundos', 'y lo expulso por la boca.'],
        },
      ],
    },
    {
      title: '¿Nuestra respiración es siempre igual?',
      type: 'quiz',
      instructions: 'Compruébalo: respira leyendo y después corriendo.',
      questions: [
        { prompt: 'Cuando leemos o dibujamos, nuestra respiración es…', choices: ['tranquila', 'acelerada'], answer: 'tranquila' },
        { prompt: 'Cuando corremos o bailamos, nuestra respiración es…', choices: ['tranquila', 'acelerada'], answer: 'acelerada' },
        { prompt: '¿Qué gas del aire necesitamos para vivir?', choices: ['El oxígeno', 'El humo'], answer: 'El oxígeno' },
        { prompt: '¿Qué órganos absorben el oxígeno?', choices: ['Los pulmones', 'El estómago'], answer: 'Los pulmones' },
        { prompt: 'Si estás nervioso o nerviosa, ¿qué te ayuda a calmarte?', choices: ['Respirar profundamente', 'Correr muy deprisa'], answer: 'Respirar profundamente' },
        { prompt: 'Tomar aire por la nariz hasta llenar los pulmones se llama…', choices: ['inspiración', 'espiración'], answer: 'inspiración' },
        { prompt: 'Expulsar el aire poco a poco por la boca se llama…', choices: ['inspiración', 'espiración'], answer: 'espiración' },
      ],
    },
  ],
};

export default respirar;
