import React from 'react';
import { connect } from 'react-redux';

import { setThemeAction } from '../../actions/setThemeAction';

import {
  Main, Header, Link, Body, CustomButton, CustomSwitch,
} from './style';

function Landing(props) {
  const toggleTheme = (event) => {
    const theme = event.target.checked ? 'night' : 'day';
    props.setThemeAction(theme);
  }

  return (
    <Main>
      <Header>
        <CustomSwitch value="night" onChange={toggleTheme}/>
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
  ...state
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
