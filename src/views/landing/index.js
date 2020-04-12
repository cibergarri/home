import React from 'react';

import {
  Main, Link, Body,
} from './style';

import CustomHeader from '../../components/CustomHeader/';

function Landing(props) {
  

  return (
    <Main>
      <CustomHeader/>
      <Body>
        This is a work in progress
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Link href='https://cibergarri.github.io/playground'>Playground</Link>
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
