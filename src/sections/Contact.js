'use client';

import { useTranslation } from 'react-i18next';

import { Section, SectionTitle, Prose } from '@/styles';
import { SOCIAL_LINKS } from '@/components/Header';
import { PLAYGROUND, SITE_SOURCE } from '@/content/links';
import { ContactLinks, ContactLink } from './style';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <Section id="contact">
      <SectionTitle>{t('contactHeading')}</SectionTitle>
      <Prose>
        {t('contactText')}
        <br />
        {t('contactTextMore')}
      </Prose>
      <ContactLinks>
        <ContactLink href={SOCIAL_LINKS.linkedin}>{t('contactLinkedin')}</ContactLink>
        <ContactLink href={SOCIAL_LINKS.x}>{t('contactX')}</ContactLink>
        <ContactLink href={SOCIAL_LINKS.github}>{t('contactGithub')}</ContactLink>
        <ContactLink href={PLAYGROUND}>{t('contactPlayground')}</ContactLink>
        <ContactLink href={SITE_SOURCE}>{t('contactSource')}</ContactLink>
      </ContactLinks>
    </Section>
  );
}
