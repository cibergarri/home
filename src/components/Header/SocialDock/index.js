'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SOCIAL_PROFILES } from '../social';
import { Dock, DockLink, DockIcon } from './style';

// How long the page has to stay still before the dock comes back to full strength.
const SETTLE_MS = 600;

// Social links for narrow phones: a slim tab on the right edge, always in view. It dims while
// the page scrolls, so it does not pull the eye away from the text being read.
export default function SocialDock() {
  const { t } = useTranslation();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    let timer;
    const onScroll = () => {
      setScrolling(true);
      clearTimeout(timer);
      timer = setTimeout(() => setScrolling(false), SETTLE_MS);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <Dock aria-label={t('findMe')} $dimmed={scrolling}>
      {SOCIAL_PROFILES.map(({ key, label, href, path }) => (
        <DockLink key={key} href={href} aria-label={label}>
          <DockIcon viewBox="0 0 24 24" aria-hidden="true">
            <path d={path} />
          </DockIcon>
        </DockLink>
      ))}
    </Dock>
  );
}
