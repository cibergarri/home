// Lengua, tema 8: las lenguas de España. El castellano en toda España, y el catalán, el valenciano,
// el gallego y el euskera, que son oficiales en algunos lugares.
const lenguas = {
  slug: 'lenguas',
  title: 'Las lenguas de España',
  heading: '¿Dónde se habla?',
  type: 'match',
  instructions: 'El español o castellano se habla en toda España. En algunos lugares hay otra lengua oficial. Toca cada lengua y después dónde se habla.',
  columns: ['Lengua', 'Dónde se habla'],
  pairs: [
    { id: 'castellano', en: 'El castellano', es: 'en toda España' },
    { id: 'catalan', en: 'El catalán', es: 'en Cataluña y en Illes Balears' },
    { id: 'valenciano', en: 'El valenciano', es: 'en la Comunidad Valenciana' },
    { id: 'gallego', en: 'El gallego', es: 'en Galicia' },
    { id: 'euskera', en: 'El euskera', es: 'en el País Vasco y Navarra' },
  ],
  more: [
    {
      title: '¿Es oficial en España?',
      type: 'sort',
      instructions: '¿Qué lenguas son oficiales en algunos lugares de España, junto con el castellano?',
      columns: [
        { id: 'si', title: 'Oficial en España' },
        { id: 'no', title: 'De otros países' },
      ],
      cards: [
        { id: 'euskera', text: 'euskera', columns: ['si'] },
        { id: 'gallego', text: 'gallego', columns: ['si'] },
        { id: 'valenciano', text: 'valenciano', columns: ['si'] },
        { id: 'catalan', text: 'catalán', columns: ['si'] },
        { id: 'portugues', text: 'portugués', columns: ['no'] },
        { id: 'aleman', text: 'alemán', columns: ['no'] },
        { id: 'ingles', text: 'inglés', columns: ['no'] },
        { id: 'frances', text: 'francés', columns: ['no'] },
        { id: 'italiano', text: 'italiano', columns: ['no'] },
      ],
    },
    {
      title: 'Hola y adiós',
      type: 'quiz',
      instructions: '¿Cómo saludamos y nos despedimos en las lenguas de España?',
      questions: [
        { prompt: 'En gallego, «hola» se dice…', choices: ['ola', 'kaixo', 'adéu'], answer: 'ola' },
        { prompt: 'En euskera, «hola» se dice…', choices: ['kaixo', 'agur', 'adeus'], answer: 'kaixo' },
        { prompt: 'En euskera, «adiós» se dice…', choices: ['agur', 'kaixo', 'ola'], answer: 'agur' },
        { prompt: 'En catalán y en valenciano, «adiós» se dice…', choices: ['adéu', 'agur', 'ola'], answer: 'adéu' },
        { prompt: 'En gallego, «adiós» se dice…', choices: ['adeus', 'adéu', 'kaixo'], answer: 'adeus' },
        { prompt: 'Mica dice «Em dic Mica». ¿En qué lengua habla?', choices: ['En catalán', 'En gallego', 'En euskera'], answer: 'En catalán' },
        { prompt: 'Arabela dice «O meu nome é Arabela». ¿En qué lengua habla?', choices: ['En gallego', 'En catalán', 'En euskera'], answer: 'En gallego' },
        { prompt: 'Lena dice «Nire izena Lena da». ¿En qué lengua habla?', choices: ['En euskera', 'En gallego', 'En catalán'], answer: 'En euskera' },
      ],
    },
    {
      title: 'Lo que he aprendido',
      type: 'quiz',
      instructions: 'Contesta.',
      questions: [
        { prompt: '¿Qué dos nombres tiene la lengua oficial de toda España?', choices: ['Español o castellano', 'Catalán o valenciano', 'Gallego o euskera'], answer: 'Español o castellano' },
        { prompt: 'Al euskera también se le llama…', choices: ['vasco', 'gallego', 'navarro'], answer: 'vasco' },
        { prompt: '¿Cuál de estas lenguas se habla en otros países del mundo, como China?', choices: ['El chino', 'El gallego', 'El valenciano'], answer: 'El chino' },
      ],
    },
  ],
};

export default lenguas;
