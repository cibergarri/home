import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '@/locales/en.json';
import es from '@/locales/es.json';

export const LANGUAGES = ['en', 'es'];
export const DEFAULT_LANGUAGE = 'en';
export const LANGUAGE_COOKIE = 'my_language';

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: LANGUAGES,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

const supported = (lang) => {
  const short = (lang || '').slice(0, 2).toLowerCase();
  return LANGUAGES.includes(short) ? short : null;
};

const readCookie = (name) => {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
};

// The preferred language: an explicit choice (cookie) wins over the browser setting.
export const detectLanguage = () => supported(readCookie(LANGUAGE_COOKIE))
  || (navigator.languages || [navigator.language]).map(supported).find(Boolean)
  || DEFAULT_LANGUAGE;

export const rememberLanguage = (lang) => {
  const oneYear = 60 * 60 * 24 * 365;
  document.cookie = `${LANGUAGE_COOKIE}=${lang}; path=/; max-age=${oneYear}; SameSite=Lax`;
};

export default i18n;
