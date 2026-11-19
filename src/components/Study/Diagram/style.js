'use client';

import styled from 'styled-components';

// A page of a squared school notebook, for a drawing to look at. On a phone the drawing keeps a
// readable size and scrolls sideways inside the page.
export const Sheet = styled.figure`
  margin: 0;
  overflow-x: auto;
  border: 2px solid #dbe6f2;
  border-radius: 12px;
  background-color: #fdfdfb;
  background-image:
    linear-gradient(#dbe6f2 1px, transparent 1px),
    linear-gradient(90deg, #dbe6f2 1px, transparent 1px);
  background-size: 20px 20px;

  svg {
    display: block;
    width: 100%;
    min-width: 760px;
    height: auto;
  }
`;

export const Note = styled.figcaption`
  padding: 0 16px 12px;
  color: #6b7487;
  font-size: 16px;
`;
