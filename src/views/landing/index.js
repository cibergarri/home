import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { setThemeAction } from '../../actions/setThemeAction';
import { THEMES } from '../../constants/config';

import {
  Main, Header, Link, Body, CustomButton, CustomSwitch,
} from './style';

function Landing(props) {
  const theme = useSelector(state => state.config.theme);
  const dispatch = useDispatch();

  const toggleTheme = (event) => {
    const theme = event.target.checked ? THEMES.NIGHT : THEMES.NORMAL;
    dispatch(setThemeAction(theme));
  }

  return (
    <Main>
      <Header>
        <CustomSwitch checked={ theme === THEMES.NIGHT } onChange={toggleTheme}/>
        <Link href='https://cibergarri.github.io/playground'>Playground</Link>
      </Header>
      <Body>
        {/* <CustomButton>Hello World</CustomButton> */}
      </Body>
    </Main>
  );
}


// const mapDispatchToProps = dispatch => ({
//   setThemeAction: (theme) => dispatch(setThemeAction(theme))
// });

// const mapStateToProps = state => ({
//   ...state.config,
// });

export default Landing;
