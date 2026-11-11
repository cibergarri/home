// How a sum is read aloud: the signs as words, so the voice does not spell them out.
const SIGNS = {
  en: { '+': 'plus', '-': 'minus', '−': 'minus', '=': 'equals', '→': 'rounds to' },
  es: { '+': 'más', '-': 'menos', '−': 'menos', '=': 'es igual a', '→': 'se aproxima a' },
};
export const sayable = (sum, lang) => sum.replace(/[+\-−=→]/g, sign => ` ${SIGNS[lang][sign]} `);
