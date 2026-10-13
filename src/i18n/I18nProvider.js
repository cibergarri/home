'use client';

import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n, { detectLanguage } from '.';

export function I18nProvider({ children }) {
  // Pages are prerendered in English; the visitor's language is applied after mount.
  useEffect(() => {
    const lang = detectLanguage();
    if (lang !== i18n.language) i18n.changeLanguage(lang);
  }, []);

  useEffect(() => {
    const syncHtmlLang = (lang) => { document.documentElement.lang = lang; };
    syncHtmlLang(i18n.language);
    i18n.on('languageChanged', syncHtmlLang);
    return () => i18n.off('languageChanged', syncHtmlLang);
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
