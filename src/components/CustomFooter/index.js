import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { setThemeAction } from '../../actions/setThemeAction';
import { THEMES } from '../../constants/config';


import { 
  Footer, Copyright, StyledCopyLeftIcon, StyledHeartIcon, StyledJSIcon,
} from './style';

function CustomFooter() {
  const theme = useSelector(state => state.config.theme);
  // const dispatch = useDispatch();

  // const toggleTheme = (event) => {
  //   const theme = event.target.checked ? THEMES.NIGHT : THEMES.NORMAL;
  //   dispatch(setThemeAction(theme));
  // }

  return (
    <>
      <Footer>
        <Copyright><StyledCopyLeftIcon/>
        {1900 + new Date().getYear()} Made with <StyledHeartIcon /> and <StyledJSIcon /> by Javier Garrido
        </Copyright>
      </Footer>
      </>
  );
}

export default CustomFooter;