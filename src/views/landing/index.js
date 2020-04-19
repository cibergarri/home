import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { setLoadingAction } from '../../actions/config';

import {
  Main, Link, Body,
} from './style';

import CustomHeader from '../../components/CustomHeader/';
import CustomFooter from '../../components/CustomFooter/';

function Landing(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadingAction(false));
  }, []);
  return (
    <Main>
      <CustomHeader/>
      <Body>
        This is a work in progress
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Link href='https://cibergarri.github.io/playground'>Playground</Link>
        {/* <CustomButton>Hello World</CustomButton> */}
      </Body>
      <CustomFooter/>
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
