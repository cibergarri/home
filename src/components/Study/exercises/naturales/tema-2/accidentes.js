import {
  ToysAway, Socket, CookerAlone, CookerWithAdult, ZebraCrossing, BetweenCars, BikeWithHelmet,
  BikeWithoutHelmet, HelmetPicture, KneePads, Goggles, LifeJacket, ShinPads,
} from '../../../drawings/Accidents';

// Naturales, tema 2: prevenimos accidentes, en casa y fuera de casa, con dibujos de lo que es seguro
// y lo que es peligroso, y las protecciones para hacer deporte.
const scene = Drawing => ({ width: 320, height: 200, Drawing });
const SAFE = ['✅ Seguro', '❌ Peligroso'];

const accidentes = {
  slug: 'accidentes',
  title: 'Prevenimos accidentes',
  heading: 'En casa',
  type: 'sort',
  instructions: 'Actuando con cuidado, muchos accidentes se pueden evitar. En casa, ¿qué debes hacer y qué no?',
  columns: [
    { id: 'si', title: '✅ Lo hago', subtitle: 'Así evito accidentes' },
    { id: 'no', title: '❌ No lo hago', subtitle: 'Es peligroso' },
  ],
  cards: [
    { id: 'juguetes', text: 'Recoger los juguetes del suelo', columns: ['si'] },
    { id: 'cuchillos', text: 'Tener cuidado con los cuchillos', columns: ['si'] },
    { id: 'ayuda', text: 'Pedir ayuda a un adulto para cocinar', columns: ['si'] },
    { id: 'enchufes', text: 'Tocar los enchufes', columns: ['no'] },
    { id: 'fuego', text: 'Calentar la comida en el fuego sin ayuda', columns: ['no'] },
    { id: 'descalzo', text: 'Andar descalzo con el suelo mojado', columns: ['no'] },
    { id: 'escalera', text: 'Correr y jugar en la escalera', columns: ['no'] },
  ],
  more: [
    {
      title: 'En casa: ¿seguro o peligroso?',
      type: 'quiz',
      instructions: 'Mira cada dibujo. ¿Lo que hace es seguro o peligroso?',
      keepOrder: true,
      questions: [
        { prompt: 'Recoge los juguetes del suelo.', scene: scene(ToysAway), choices: SAFE, answer: '✅ Seguro' },
        { prompt: 'Mete el dedo en el enchufe.', scene: scene(Socket), choices: SAFE, answer: '❌ Peligroso' },
        { prompt: 'Coge la sartén del fuego él solo.', scene: scene(CookerAlone), choices: SAFE, answer: '❌ Peligroso' },
        { prompt: 'Cocina con la ayuda de un adulto.', scene: scene(CookerWithAdult), choices: SAFE, answer: '✅ Seguro' },
      ],
    },
    {
      title: 'Fuera de casa',
      type: 'sort',
      instructions: 'Fuera de casa, ¿qué debes hacer y qué no?',
      columns: [
        { id: 'si', title: '✅ Lo hago', subtitle: 'Así evito accidentes' },
        { id: 'no', title: '❌ No lo hago', subtitle: 'Es peligroso' },
      ],
      cards: [
        { id: 'acera', text: 'Caminar por la acera', columns: ['si'] },
        { id: 'paso', text: 'Cruzar por el paso de peatones', columns: ['si'] },
        { id: 'cinturon', text: 'Ponerme el cinturón en el coche', columns: ['si'] },
        { id: 'casco', text: 'Usar casco en la bicicleta', columns: ['si'] },
        { id: 'entre-coches', text: 'Cruzar la calle entre los coches', columns: ['no'] },
        { id: 'pelota', text: 'Jugar a la pelota junto a la carretera', columns: ['no'] },
        { id: 'sin-casco', text: 'Montar en bici sin casco', columns: ['no'] },
      ],
    },
    {
      title: 'Fuera de casa: ¿seguro o peligroso?',
      type: 'quiz',
      instructions: 'Mira cada dibujo. ¿Lo que hace es seguro o peligroso?',
      keepOrder: true,
      questions: [
        { prompt: 'Cruza por el paso de peatones, con el muñeco verde.', scene: scene(ZebraCrossing), choices: SAFE, answer: '✅ Seguro' },
        { prompt: 'Sale corriendo a la calle entre los coches.', scene: scene(BetweenCars), choices: SAFE, answer: '❌ Peligroso' },
        { prompt: 'Monta en bici con el casco puesto.', scene: scene(BikeWithHelmet), choices: SAFE, answer: '✅ Seguro' },
        { prompt: 'Monta en bici sin casco.', scene: scene(BikeWithoutHelmet), choices: SAFE, answer: '❌ Peligroso' },
      ],
    },
    {
      title: '¿Qué riesgo tiene?',
      type: 'match',
      instructions: 'Toca un objeto y después el riesgo que tiene.',
      columns: ['Objeto', 'Riesgo'],
      pairs: [
        { id: 'cuchillo', en: '🔪 Un cuchillo', es: 'Te puedes cortar.' },
        { id: 'sarten', en: '🍳 Una sartén en el fuego', es: 'Te puedes quemar.' },
        { id: 'enchufe', en: '🔌 Un enchufe', es: 'Te puede dar calambre.' },
        { id: 'suelo', en: '💧 El suelo mojado', es: 'Te puedes resbalar y caer.' },
      ],
    },
    {
      title: 'Nos protegemos',
      type: 'quiz',
      instructions: 'Elige lo que protege tu cuerpo.',
      questions: [
        { prompt: '¿Qué te pones en la cabeza para ir en bici?', choices: ['Un casco', 'Una gorra'], answer: 'Un casco' },
        { prompt: '¿Qué protege tus rodillas cuando patinas?', choices: ['Las rodilleras', 'Los calcetines'], answer: 'Las rodilleras' },
        { prompt: '¿Qué te pones siempre en el coche?', choices: ['El cinturón de seguridad', 'El abrigo'], answer: 'El cinturón de seguridad' },
        { prompt: '¿Por dónde cruzas la calle?', choices: ['Por el paso de peatones', 'Por donde quiero'], answer: 'Por el paso de peatones' },
        { prompt: '¿Por qué recogemos los juguetes del suelo?', choices: ['Para que nadie tropiece', 'Para que se rompan'], answer: 'Para que nadie tropiece' },
      ],
    },
    {
      title: 'Protecciones para hacer deporte',
      type: 'join',
      instructions: 'Cuando hacemos deporte, nos protegemos. Toca el nombre de cada protección y únelo a su dibujo.',
      left: [
        { id: 'casco', text: 'Casco' },
        { id: 'rodilleras', text: 'Rodilleras' },
        { id: 'gafas', text: 'Gafas de natación' },
        { id: 'chaleco', text: 'Chaleco salvavidas' },
        { id: 'espinilleras', text: 'Espinilleras' },
      ],
      right: [
        {
          id: 'rodilleras-dibujo', to: 'rodilleras', text: 'Unas rodilleras, para patinar.', Drawing: KneePads,
        },
        {
          id: 'espinilleras-dibujo', to: 'espinilleras', text: 'Unas espinilleras, para jugar al fútbol.', Drawing: ShinPads,
        },
        {
          id: 'casco-dibujo', to: 'casco', text: 'Un casco, para montar en bici o en patinete.', Drawing: HelmetPicture,
        },
        {
          id: 'chaleco-dibujo', to: 'chaleco', text: 'Un chaleco salvavidas, para ir en barca.', Drawing: LifeJacket,
        },
        {
          id: 'gafas-dibujo', to: 'gafas', text: 'Unas gafas de natación, para nadar.', Drawing: Goggles,
        },
      ],
    },
  ],
};

export default accidentes;
