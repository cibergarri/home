import React from 'react';
import { useTranslation } from 'react-i18next';

import { Section, SectionTitle, Prose } from '../../../styles';
import { ContactLinks, ContactLink } from './style';
import { SOCIAL_LINKS } from '../../../components/CustomHeader';

const SITE_SOURCE = 'https://github.com/cibergarri/home';
const PLAYGROUND = 'https://cibergarri.github.io/playground';

function Contact() {
  const { t } = useTranslation('landing');
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

export default Contact;
