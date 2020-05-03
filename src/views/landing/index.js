/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setLoadingAction } from '../../actions/config';

import {
  Main, Link, Body, MainContainer,
  TextTitle, Paragraph, Span,
  StyledWorldIcon, StyledNodeJsIcon, StyledConstructionIcon, StyledDotNetIcon, StyledReactIcon,
} from './style';

import CustomHeader from '../../components/CustomHeader';
import CustomFooter from '../../components/CustomFooter';

function Landing() {
  const { t } = useTranslation('landing');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadingAction(false));
  }, [dispatch]);
  return (
    <Main>
      <CustomHeader />
      <Body>
        <MainContainer>
          <TextTitle>
            {t('hello')}
            {' '}
            <StyledWorldIcon />
            ,
            {' '}
            {t('welcome')}
          </TextTitle>
          <Paragraph>{t('introduction')}</Paragraph>
          <Paragraph>
            {t('techs-1')}
            {' '}
            <StyledNodeJsIcon />
            {t('techs-2')}
            {' '}
            <StyledReactIcon />
            -
          </Paragraph>
          <Paragraph>
            {t('experience-1')}
            {' '}
            <StyledDotNetIcon title=".Net" />
            {' '}
            {t('experience-2')}
          </Paragraph>
          <Paragraph>{t('jobs-1')}</Paragraph>
          <Paragraph>
            {t('jobs-2')}
            {' '}
            <Span color="#f98004">Thomson Reuters</Span>
            {' '}
            {t('jobs-3')}
            {' '}
            <Span color="#1f399a">Cognizant</Span>
            -
          </Paragraph>
          <Paragraph>
            {t('jobs-4')}
            {' '}
            <Span color="#fa3334">Bag On Board</Span>
            .
          </Paragraph>
          <Paragraph>{t('international-teams')}</Paragraph>
          <Paragraph>{t('social-networks')}</Paragraph>
          <br />
          <Paragraph>{t('hobbies')}</Paragraph>
          <br />
          <br />
          <br />
          <br />
          <Paragraph>{t('github')}</Paragraph>
          <Paragraph>
            {t('construction')}
            {' '}
            <StyledConstructionIcon />
          </Paragraph>
          <br />
          <br />
          <br />
          <br />
          <Link href="https://cibergarri.github.io/playground">Playground</Link>
        </MainContainer>
      </Body>
      <CustomFooter />
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
