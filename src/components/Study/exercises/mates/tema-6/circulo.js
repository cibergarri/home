import { shapes } from '../scenes';

// Mates, tema 6: círculo y circunferencia. La circunferencia es una línea curva cerrada, con todos
// sus puntos a la misma distancia del centro; el círculo es la circunferencia y su interior (el
// disco y el aro, y la rueda de la bicicleta de Lena).
const circulo = {
  slug: 'circulo',
  title: 'Círculo y circunferencia',
  heading: '¿Círculo o circunferencia?',
  type: 'quiz',
  instructions: 'La circunferencia es solo la línea curva del borde. El círculo es la circunferencia y todo lo de dentro.',
  questions: [
    { prompt: '¿Qué figura es?', scene: shapes('circunferencia'), choices: ['Una circunferencia', 'Un círculo'], answer: 'Una circunferencia' },
    { prompt: '¿Qué figura es?', scene: shapes('circulo'), choices: ['Una circunferencia', 'Un círculo'], answer: 'Un círculo' },
    { prompt: '¿Cuál de estas figuras es un círculo?', scene: shapes('circunferencia', 'circulo', 'hexagono'), choices: ['La primera', 'La segunda', 'La tercera'], answer: 'La segunda' },
    { prompt: '¿Cuál de estas figuras es una circunferencia?', scene: shapes('circulo', 'octogono', 'circunferencia'), choices: ['La primera', 'La segunda', 'La tercera'], answer: 'La tercera' },
    { prompt: 'La circunferencia es…', choices: ['Una línea recta', 'Una línea poligonal', 'Una línea curva cerrada'], answer: 'Una línea curva cerrada' },
    { prompt: 'La circunferencia es el borde del…', choices: ['triángulo', 'círculo', 'cuadrado'], answer: 'círculo' },
  ],
  more: [
    {
      title: 'Une cada objeto con su forma',
      type: 'sort',
      instructions: 'Si solo tiene el borde redondo y está vacío por dentro, es una circunferencia. Si está lleno, es un círculo.',
      columns: [{ id: 'circunferencia', title: 'Circunferencia' }, { id: 'circulo', title: 'Círculo' }],
      cards: [
        { id: 'aro', text: 'Un aro', columns: ['circunferencia'] },
        { id: 'anillo', text: '💍 Un anillo', columns: ['circunferencia'] },
        { id: 'pulsera', text: 'Una pulsera', columns: ['circunferencia'] },
        { id: 'plato', text: 'El borde de un plato', columns: ['circunferencia'] },
        { id: 'moneda', text: '🪙 Una moneda', columns: ['circulo'] },
        { id: 'galleta', text: '🍪 Una galleta', columns: ['circulo'] },
        { id: 'pizza', text: '🍕 Una pizza', columns: ['circulo'] },
        { id: 'disco', text: 'Un disco para lanzar', columns: ['circulo'] },
      ],
    },
    {
      title: 'Centro y radio',
      type: 'quiz',
      instructions: 'El centro está justo en el medio. Un radio es una línea recta que va del centro a la circunferencia.',
      questions: [
        { prompt: 'Todos los puntos de la circunferencia están…', choices: ['a distancias distintas del centro', 'a la misma distancia del centro'], answer: 'a la misma distancia del centro' },
        { prompt: '¿Cuántos centros tiene la rueda de la bicicleta de Lena?', choices: ['2', 'Muchos', '1'], answer: '1' },
        { prompt: '¿Podría la rueda tener más radios?', choices: ['No, solo puede tener uno', 'Sí, todos los que quepan'], answer: 'Sí, todos los que quepan' },
        { prompt: '¿Qué es un radio?', choices: ['Una línea del centro a la circunferencia', 'El borde de la rueda', 'El punto del medio'], answer: 'Una línea del centro a la circunferencia' },
        { prompt: 'Si aplastas una bola de plastilina, ¿qué forma consigues?', choices: ['Una circunferencia', 'Un cuadrado', 'Un círculo'], answer: 'Un círculo' },
        { prompt: '¿Qué cosa del colegio se parece a una circunferencia?', choices: ['Una mesa cuadrada', 'El borde de un reloj de pared', 'La pizarra'], answer: 'El borde de un reloj de pared' },
      ],
    },
  ],
};

export default circulo;
