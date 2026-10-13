'use client';

import { useTranslation } from 'react-i18next';

import { Section, Prose } from '@/styles';
import { IntroHeading } from './style';

export default function Intro() {
  const { t } = useTranslation();
  return (
    <Section id="about">
      <IntroHeading>{t('introHeading')}</IntroHeading>
      <Prose>{t('introParagraph1')}</Prose>
      <Prose>{t('introParagraph2')}</Prose>
    </Section>
  );
}
