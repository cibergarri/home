'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SOCIAL_PROFILES } from '../social';
import {
  EdgeTab,
  TabIcon,
  CloseButton,
  Backdrop,
  Panel,
  PanelHeader,
  PanelTitle,
  DrawerList,
  DrawerLink,
  DrawerIcon,
} from './style';

// Social links for narrow phones: a tab on the right edge opens a side drawer.
export default function SocialDrawer() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const menuButton = useRef(null);
  const closeButton = useRef(null);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return undefined;
    const tab = menuButton.current;
    closeButton.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKeyDown);
    // Rotating to landscape can cross the breakpoint where the bar shows the icons again.
    const wide = window.matchMedia?.('(min-width: 480px)');
    wide?.addEventListener('change', close);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden'; // the page must not scroll behind the drawer
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      wide?.removeEventListener('change', close);
      document.body.style.overflow = previousOverflow;
      tab?.focus();
    };
  }, [open]);

  return (
    <>
      <EdgeTab
        ref={menuButton}
        type="button"
        aria-label={t('openMenu')}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(true)}
      >
        <TabIcon viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 12.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </TabIcon>
      </EdgeTab>
      {open && (
        <>
          <Backdrop onClick={close} aria-hidden="true" />
          <Panel id={panelId} role="dialog" aria-modal="true" aria-label={t('findMe')}>
            <PanelHeader>
              <PanelTitle>{t('findMe')}</PanelTitle>
              <CloseButton ref={closeButton} type="button" aria-label={t('closeMenu')} onClick={close}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M5.7 4.3 12 10.6l6.3-6.3 1.4 1.4L13.4 12l6.3 6.3-1.4 1.4L12 13.4l-6.3 6.3-1.4-1.4L10.6 12 4.3 5.7z" />
                </svg>
              </CloseButton>
            </PanelHeader>
            <DrawerList>
              {SOCIAL_PROFILES.map(({ key, label, href, path }) => (
                <li key={key}>
                  <DrawerLink href={href} onClick={close}>
                    <DrawerIcon viewBox="0 0 24 24" aria-hidden="true">
                      <path d={path} />
                    </DrawerIcon>
                    {label}
                  </DrawerLink>
                </li>
              ))}
            </DrawerList>
          </Panel>
        </>
      )}
    </>
  );
}
