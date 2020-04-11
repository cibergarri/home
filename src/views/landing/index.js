import React from 'react';
import { connect } from 'react-redux';

import { setThemeAction } from '../../actions/setThemeAction';
import { THEMES } from '../../constants/config';

import {
  Main, Header, Link, Body, CustomButton, CustomSwitch,
} from './style';

function Landing(props) {
  const toggleTheme = (event) => {
    const theme = event.target.checked ? THEMES.NIGHT : THEMES.NORMAL;
    props.setThemeAction(theme);
  }

  return (
    <Main>
      <Header>
        <CustomSwitch checked={ props.theme === THEMES.NIGHT } onChange={toggleTheme}/>
        <Link href='https://cibergarri.github.io/playground'>Playground</Link>
      </Header>
      <Body>
        <CustomButton>Hello World</CustomButton>
      </Body>
    </Main>
  );
}

const mapDispatchToProps = dispatch => ({
  setThemeAction: (theme) => dispatch(setThemeAction(theme))
});

const mapStateToProps = state => ({
  ...state.config,
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
