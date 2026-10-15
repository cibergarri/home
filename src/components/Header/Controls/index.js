'use client';

import { useTranslation } from 'react-i18next';

import { useTheme, THEMES } from '@/theme/ThemeProvider';
import { LANGUAGES, rememberLanguage } from '@/i18n';

import {
  ControlsContainer,
  IconButton,
  StyledSunIcon,
  StyledMoonIcon,
  LanguageSwitch,
  LanguageOption,
} from './style';

export default function Controls() {
  const { i18n, t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const isNight = theme === THEMES.NIGHT;
  const currentLanguage = (i18n.resolvedLanguage || i18n.language || '').slice(0, 2);
  // One tap anywhere on the switch moves to the other language.
  const nextLanguage = LANGUAGES[(LANGUAGES.indexOf(currentLanguage) + 1) % LANGUAGES.length];

  const switchLanguage = () => {
    rememberLanguage(nextLanguage);
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <ControlsContainer>
      <LanguageSwitch
        type="button"
        onClick={switchLanguage}
        aria-label={t('switchLanguage', { language: t(`language_${nextLanguage}`) })}
      >
        {LANGUAGES.map(lang => (
          <LanguageOption key={lang} $selected={currentLanguage === lang} aria-hidden="true">
            {lang.toUpperCase()}
          </LanguageOption>
        ))}
      </LanguageSwitch>
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
