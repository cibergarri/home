import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { setThemeAction } from '../../../actions/config';
import { THEMES, LANGUAGES } from '../../../constants/config';

import {
  ControlsContainer,
  IconButton,
  StyledSunIcon,
  StyledMoonIcon,
  LanguageGroup,
  LanguageButton,
} from './style';

function Controls() {
  const { i18n, t } = useTranslation('landing');
  const theme = useSelector(state => state.config.theme);
  const dispatch = useDispatch();
  const isNight = theme === THEMES.NIGHT;
  const currentLanguage = (i18n.language || '').slice(0, 2);

  const toggleTheme = () => {
    dispatch(setThemeAction(isNight ? THEMES.NORMAL : THEMES.NIGHT));
  };

  return (
    <ControlsContainer>
      <LanguageGroup role="group" aria-label={t('language')}>
        {LANGUAGES.map(lang => (
          <LanguageButton
            key={lang}
            type="button"
            selected={currentLanguage === lang}
            aria-pressed={currentLanguage === lang}
            onClick={() => i18n.changeLanguage(lang)}
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

export default Controls;
