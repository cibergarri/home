'use client';

import { useTranslation } from 'react-i18next';

import { useTheme, THEMES } from '@/theme/ThemeProvider';
import { LANGUAGES, rememberLanguage } from '@/i18n';

import {
  ControlsContainer,
  IconButton,
  StyledSunIcon,
  StyledMoonIcon,
  LanguageGroup,
  LanguageButton,
} from './style';

export default function Controls() {
  const { i18n, t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const isNight = theme === THEMES.NIGHT;
  const currentLanguage = (i18n.resolvedLanguage || i18n.language || '').slice(0, 2);

  const changeLanguage = (lang) => {
    rememberLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <ControlsContainer>
      <LanguageGroup role="group" aria-label={t('language')}>
        {LANGUAGES.map(lang => (
          <LanguageButton
            key={lang}
            type="button"
            $selected={currentLanguage === lang}
            aria-pressed={currentLanguage === lang}
            onClick={() => changeLanguage(lang)}
          >
            {lang.toUpperCase()}
          </LanguageButton>
        ))}
      </LanguageGroup>
      <IconButton
        type="button"
        onClick={toggleTheme}
        aria-label={t('toggleTheme', { theme: isNight ? t('themeLight') : t('themeDark') })}
      >
        {isNight ? <StyledSunIcon /> : <StyledMoonIcon />}
      </IconButton>
    </ControlsContainer>
  );
}
