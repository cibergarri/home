import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { List } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

import { setThemeAction } from '../../../actions/config';
import { THEMES } from '../../../constants/config';

import {
  CustomSwitch,
  RightMenuTitleListItem,
  NightModeContainer,
  NightModeListItem,
  LanguageButton,
  LanguageButtonContainer,
  LanguageButtonListItem,
  StyledMoonIcon,
  StyledSunIcon,
  StyledESFlagIcon,
  StyledUKFlagIcon,
  StyledSwipeableDrawer,
  StyledMoreVertIcon,
  StyledIconButton,
  StyledRightMenuContainer,
} from './style';

function RightButtonsContainer() {
  const { i18n } = useTranslation(['landing']);
  const theme = useSelector(state => state.config.theme);
  const dispatch = useDispatch();

  const [state, setState] = React.useState({
    drawer: false,
  });

  const toggleTheme = (event) => {
    const newTheme = event.target.checked ? THEMES.NIGHT : THEMES.NORMAL;
    dispatch(setThemeAction(newTheme));
  };
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, drawer: open });
  };
  const nightModeWidget = () => (
    <>
      <StyledSunIcon />
      <CustomSwitch checked={theme === THEMES.NIGHT} onChange={toggleTheme} />
      <StyledMoonIcon />
    </>
  );
  const languageWidget = () => (
    <>
      <LanguageButton>
        <StyledESFlagIcon onClick={() => changeLanguage('es')} />
      </LanguageButton>
      <LanguageButton>
        <StyledUKFlagIcon onClick={() => changeLanguage('en')} />
      </LanguageButton>
    </>
  );
  return (
    <>
      <NightModeContainer>{nightModeWidget()}</NightModeContainer>
      <LanguageButtonContainer>{languageWidget()}</LanguageButtonContainer>
      <>
        <StyledIconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={toggleDrawer(true)}>
          <StyledMoreVertIcon />
        </StyledIconButton>
        <StyledSwipeableDrawer
          PaperProps={{
            component: StyledRightMenuContainer,
          }}
          anchor="right"
          open={state.drawer}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <List>
            <RightMenuTitleListItem>Menu</RightMenuTitleListItem>
            <Divider />
            <LanguageButtonListItem>{languageWidget()}</LanguageButtonListItem>
            <Divider />
            <NightModeListItem>{nightModeWidget()}</NightModeListItem>
            <Divider />
          </List>
        </StyledSwipeableDrawer>
      </>
    </>
  );
}

export default RightButtonsContainer;
