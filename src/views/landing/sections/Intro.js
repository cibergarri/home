import React from 'react';
import { useTranslation } from 'react-i18next';

import { Section, Prose } from '../../../styles';
import { IntroHeading } from './style';

function Intro() {
  const { t } = useTranslation('landing');
  return (
    <Section id="about">
      <IntroHeading>{t('introHeading')}</IntroHeading>
      <Prose>{t('introParagraph1')}</Prose>
      <Prose>{t('introParagraph2')}</Prose>
    </Section>
  );
}

export default Intro;
