'use client';

import { useTranslation } from 'react-i18next';

import {
  FooterBar, FooterInner, Copyright, StyledCopyLeftIcon, StyledHeartIcon, StyledJSIcon,
} from './style';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <FooterBar>
      <FooterInner>
        <Copyright>
          <StyledCopyLeftIcon aria-label="Copyleft" />
          {new Date().getFullYear()}
        </Copyright>
        <Copyright>
          {t('footerMadeWith')}
          <StyledHeartIcon aria-label="love" />
          {t('footerAnd')}
          <StyledJSIcon aria-label="JavaScript" />
          {t('footerBy')}
        </Copyright>
      </FooterInner>
    </FooterBar>
  );
}
