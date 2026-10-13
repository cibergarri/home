import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Footer, FooterInner, Copyright, StyledCopyLeftIcon, StyledHeartIcon, StyledJSIcon,
} from './style';

function CustomFooter() {
  const { t } = useTranslation('landing');
  return (
    <Footer>
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
    </Footer>
  );
}

export default CustomFooter;
