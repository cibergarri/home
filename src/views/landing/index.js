import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { setLoadingAction } from '../../actions/config';

import {
  Main, Link, Body, MainContainer,
  TextTitle, Paragraph, Span,
  StyledWorldIcon, StyledNodeJsIcon, StyledConstructionIcon, StyledDotNetIcon, StyledReactIcon,
} from './style';

import CustomHeader from '../../components/CustomHeader/';
import CustomFooter from '../../components/CustomFooter/';

function Landing(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadingAction(false));
  }, [dispatch]);
  return (
    <Main>
      <CustomHeader/>
      <Body>
        <MainContainer>
          <TextTitle>Hello <StyledWorldIcon />, welcome to my site!</TextTitle>
          <Paragraph>I am a Web developer who is passionate about his job and embraces learning not only in his everyday job but as a way of life.</Paragraph>
          <Paragraph>Having more expertise in the backend development -specially with <StyledNodeJsIcon />- but also targeting frontend technologies -as <StyledReactIcon />-</Paragraph>
          <Paragraph>In one of my -not so far away- past lifes I also worked with <StyledDotNetIcon title='.Net'/> technologies -like MVC, WebAPI-</Paragraph>
          <Paragraph>Some of the companies I have worked for are <Span color="#f98004">Thomson Reuters</Span>, <Span color="#1f399a">Cognizant</Span> and <Span color="#fa3334">Bag On Board</Span>.</Paragraph>
          <Paragraph>During my workin years on those companies I have been part of international teams.</Paragraph>
          <Paragraph>Feel free to check my social networks -on the top- to find out more info or to contact me.</Paragraph>
          <br/>
          <Paragraph>Amongst any other interests I am a big fan of Star Wars, Board Games, TV Series, Movies, History and travelling</Paragraph>  
          <br/><br/><br/><br/>
          <Paragraph>You can find the code of this website in my open repositories in Github.</Paragraph>
          <Paragraph>Please, remember this site will be always under <StyledConstructionIcon /></Paragraph>
          <br/><br/><br/><br/>
          <Link href='https://cibergarri.github.io/playground'>Playground</Link>
        </MainContainer>
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
