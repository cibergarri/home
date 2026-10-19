'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { Button, Glyph, Caret } from './style';

// The way into the terminal version of the site: a little screen floating in the corner.
export default function TerminalLink() {
  const { t } = useTranslation();
  return (
    <Button as={Link} href="/terminal" aria-label={t('terminal.open')} title={t('terminal.open')}>
      <Glyph aria-hidden="true">
        &gt;
        <Caret>_</Caret>
      </Glyph>
    </Button>
  );
}
