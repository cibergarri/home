'use client';

import { useTranslation } from 'react-i18next';

import { SOCIAL_PROFILES } from '../social';
import { Dock, DockLink, DockIcon } from './style';

// Social links for narrow phones: a slim tab on the right edge, always in view.
export default function SocialDock() {
  const { t } = useTranslation();
  return (
    <Dock aria-label={t('findMe')}>
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
