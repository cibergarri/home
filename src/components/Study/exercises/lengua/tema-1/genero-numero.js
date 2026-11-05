// Lengua, tema 1: género y número del nombre. Masculino (el, los) y femenino (la, las); singular
// (uno) y plural (varios).
const MASCULINO = { id: 'masculino', title: 'Masculino (el, los)', colour: '#8ec5f2' };
const FEMENINO = { id: 'femenino', title: 'Femenino (la, las)', colour: '#f5a8c8' };
const SINGULAR = { id: 'singular', title: 'Singular (uno)', colour: '#f7c96f' };
const PLURAL = { id: 'plural', title: 'Plural (varios)', colour: '#a6db8a' };

const generoNumero = {
  slug: 'genero-numero',
  title: 'Género y número del nombre',
  heading: '¿Masculino o femenino?',
  type: 'colour',
  instructions: 'Los nombres que llevan delante el o los son masculinos; los que llevan la o las, femeninos. Coge un color y toca cada nombre.',
  crayons: [MASCULINO, FEMENINO],
  words: [
    { id: 'bosque', word: 'bosque', crayon: 'masculino' },
    { id: 'cara', word: 'cara', crayon: 'femenino' },
    { id: 'hermanos', word: 'hermanos', crayon: 'masculino' },
    { id: 'orejas', word: 'orejas', crayon: 'femenino' },
    { id: 'biblioteca', word: 'biblioteca', crayon: 'femenino' },
    { id: 'gimnasio', word: 'gimnasio', crayon: 'masculino' },
    { id: 'comedor', word: 'comedor', crayon: 'masculino' },
    { id: 'salida', word: 'salida', crayon: 'femenino' },
  ],
  more: [
    {
      title: '¿Singular o plural?',
      type: 'colour',
      instructions: 'Los nombres que nombran a uno solo están en singular; los que nombran a varios, en plural.',
      crayons: [SINGULAR, PLURAL],
      words: [
        { id: 'montanas', word: 'montañas', crayon: 'plural' },
        { id: 'laguna', word: 'laguna', crayon: 'singular' },
        { id: 'arboles', word: 'árboles', crayon: 'plural' },
        { id: 'prado', word: 'prado', crayon: 'singular' },
        { id: 'aseos', word: 'aseos', crayon: 'plural' },
        { id: 'laboratorios', word: 'laboratorios', crayon: 'plural' },
        { id: 'oreja', word: 'oreja', crayon: 'singular' },
        { id: 'fresas', word: 'fresas', crayon: 'plural' },
      ],
    },
    {
      title: 'De uno a varios',
      type: 'quiz',
      instructions: '¿Cómo se dice en plural?',
      questions: [
        { prompt: 'la laguna → …', choices: ['las lagunas', 'los lagunas', 'la lagunas'], answer: 'las lagunas' },
        { prompt: 'el prado → …', choices: ['los prados', 'las prados', 'el prados'], answer: 'los prados' },
        { prompt: 'el árbol → …', choices: ['los árbols', 'los árboles', 'las árboles'], answer: 'los árboles' },
        { prompt: 'la montaña → …', choices: ['las montañas', 'los montañas'], answer: 'las montañas' },
        { prompt: 'la flor → …', choices: ['las flors', 'las flores'], answer: 'las flores' },
      ],
    },
    {
      title: 'Las frutas del frutero',
      type: 'sort',
      instructions: 'Lleva cada fruta a su columna.',
      columns: [
        { id: 'el', title: 'el', subtitle: 'Masculino singular' },
        { id: 'la', title: 'la', subtitle: 'Femenino singular' },
        { id: 'los', title: 'los', subtitle: 'Masculino plural' },
        { id: 'las', title: 'las', subtitle: 'Femenino plural' },
      ],
      cards: [
        { id: 'platano', text: 'plátano', columns: ['el'] },
        { id: 'melon', text: 'melón', columns: ['el'] },
        { id: 'manzana', text: 'manzana', columns: ['la'] },
        { id: 'pera', text: 'pera', columns: ['la'] },
        { id: 'melocotones', text: 'melocotones', columns: ['los'] },
        { id: 'limones', text: 'limones', columns: ['los'] },
        { id: 'fresas', text: 'fresas', columns: ['las'] },
        { id: 'cerezas', text: 'cerezas', columns: ['las'] },
      ],
    },
  ],
};

export default generoNumero;
