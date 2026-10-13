'use client';

import { useTranslation } from 'react-i18next';

import { Section, SectionTitle, Prose } from '@/styles';
import { SOCIAL_LINKS } from '@/components/Header';
import { ContactLinks, ContactLink } from './style';

const SITE_SOURCE = 'https://github.com/cibergarri/home';
const PLAYGROUND = 'https://cibergarri.github.io/playground';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <Section id="contact">
      <SectionTitle>{t('contactHeading')}</SectionTitle>
      <Prose>{t('contactText')}</Prose>
      <ContactLinks>
        <ContactLink href={SOCIAL_LINKS.linkedin}>{t('contactLinkedin')}</ContactLink>
        <ContactLink href={SOCIAL_LINKS.github}>{t('contactGithub')}</ContactLink>
        <ContactLink href={SOCIAL_LINKS.twitter}>{t('contactTwitter')}</ContactLink>
        <ContactLink href={PLAYGROUND}>{t('contactPlayground')}</ContactLink>
        <ContactLink href={SITE_SOURCE}>{t('contactSource')}</ContactLink>
      </ContactLinks>
    </Section>
  );
}
