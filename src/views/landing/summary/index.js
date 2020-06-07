/* eslint-disable max-len */
import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Link, TextTitle, Paragraph, Span,
  StyledWorldIcon, StyledNodeJsIcon, StyledConstructionIcon, StyledDotNetIcon, StyledReactIcon,
} from './style';
import {
  MainContainer,
} from '../../../styles';

function Summary() {
  const { t } = useTranslation('landing');
  return (
    <MainContainer>
      <TextTitle>
        {t('hello')}
        {' '}
        <StyledWorldIcon />
        ,
        {' '}
        {t('welcome')}
      </TextTitle>
      <Paragraph>
        {t('introduction')}
        {' '}
        {t('techs-1')}
        {' '}
        <StyledNodeJsIcon />
        {t('techs-2')}
        {' '}
        <StyledReactIcon />
        -
        {' '}
        {t('techs-3')}
        {' '}
        <StyledDotNetIcon title=".Net" />
        {' '}
        {t('techs-4')}
      </Paragraph>
      <Paragraph>
        {t('jobs-1')}
        {t('jobs-2')}
        {' '}
        <Span color="#f98004">Thomson Reuters</Span>
        {' '}
        {t('jobs-3')}
        {' '}
        <Span color="#1f399a">Cognizant</Span>
        -
        {' '}
        {t('jobs-4')}
        {' '}
        <Span color="#fa3334">Bag On Board</Span>
        {'. '}
        {t('international-teams')}
      </Paragraph>
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
  );
}


// const mapDispatchToProps = dispatch => ({
//   setThemeAction: (theme) => dispatch(setThemeAction(theme))
// });

// const mapStateToProps = state => ({
//   ...state.config,
// });

export default Summary;
