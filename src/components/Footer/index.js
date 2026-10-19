'use client';

import { useTranslation } from 'react-i18next';

import {
  FooterBar, FooterInner, Copyright, StyledCopyLeftIcon, StyledHeartIcon, StyledJSIcon, StyledClaudeIcon, Glued,
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
          <Glued>
            <StyledHeartIcon aria-label={t('footerLove')} />
            ,
          </Glued>
          <StyledJSIcon aria-label="JavaScript" />
          {t('footerAnd')}
          <StyledClaudeIcon aria-label="Claude" />
          {t('footerBy')}
        </Copyright>
      </FooterInner>
    </FooterBar>
  );
}
