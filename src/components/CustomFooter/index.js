import React from 'react';

import { 
  Footer, Copyright, StyledCopyLeftIcon, StyledHeartIcon, StyledJSIcon,
} from './style';

function CustomFooter() {
  return (
    <>
      <Footer>
        <Copyright><StyledCopyLeftIcon/>
        {1900 + new Date().getYear()} Made with <StyledHeartIcon /> and <StyledJSIcon /> by Javier Garrido
        </Copyright>
      </Footer>
      </>
  );
}

export default CustomFooter;