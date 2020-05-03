import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';

i18n
  // Load translation using xhr from /public/locales (https://github.com/i18next/i18next-xhr-backend)
  .use(Backend)
  // Detect user language.
  .use(LanguageDetector)
  // connect with React
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // debug: true,
    detection: { // language detector options:
      order: ['cookie', 'navigator'],
      caches: ['cookie'],
      lookupCookie: 'my_language',
    },
    fallbackLng: 'en',
    whitelist: ['en', 'es'],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      loadPath: '/home/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
