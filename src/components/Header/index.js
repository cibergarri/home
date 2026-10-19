'use client';

import {
  lazy, Suspense, useCallback, useRef, useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import useScript from '@/hooks/use-script';
import { useTheme } from '@/theme/ThemeProvider';
import Controls from './Controls';
import SocialDock from './SocialDock';
import { SOCIAL_LINKS, SOCIAL_PROFILES } from './social';
import {
  HeaderBar,
  Toolbar,
  Title,
  Blank,
  SVG,
  LinksContainer,
  SocialLink,
  Hero,
  HeroTitle,
  HeroSubtitle,
  Hate,
  Heart,
  TypeWriterContainer,
} from './style';

export { SOCIAL_LINKS };

// The easter egg is only downloaded once somebody finds it.
const BugGame = lazy(() => import('./BugGame'));

// Five quick taps on the heart, each within this long of the previous one, open the game.
const TAPS_TO_PLAY = 5;
const TAP_GAP_MS = 1500;

function useSecretTaps(onFound) {
  const taps = useRef({ count: 0, last: 0 });
  return () => {
    const now = Date.now();
    const state = taps.current;
    state.count = now - state.last < TAP_GAP_MS ? state.count + 1 : 1;
    state.last = now;
    if (state.count >= TAPS_TO_PLAY) {
      state.count = 0;
      onFound();
    }
  };
}

export default function Header() {
  const { theme } = useTheme();
  useScript('/scripts/bg-animation.js', theme);
  const { t } = useTranslation();
  const [playing, setPlaying] = useState(false);
  const closeGame = useCallback(() => setPlaying(false), []);
  const onHeartTap = useSecretTaps(() => setPlaying(true));
  return (
    <>
      <HeaderBar>
        <Toolbar>
          <Title href="/">{t('title')}</Title>
          <Blank />
          <LinksContainer aria-label={t('socialLinks')}>
            {SOCIAL_PROFILES.map(({ key, label, href, path }) => (
              <SocialLink key={key} href={href} aria-label={label}>
                <SVG viewBox="0 0 24 24" aria-hidden="true">
                  <path d={path} />
                </SVG>
              </SocialLink>
            ))}
          </LinksContainer>
          <Blank />
          <Controls />
        </Toolbar>
      </HeaderBar>
      <SocialDock />
      {playing && (
        <Suspense fallback={null}>
          <BugGame onClose={closeGame} />
        </Suspense>
      )}
      <Hero id="background-image">
        <HeroTitle>
          {t('heroTitlePrefix')}
          <TypeWriterContainer>
            <Hate>&lt;hate \&gt;</Hate>
            <Heart onClick={onHeartTap}>&lt;heart \&gt;</Heart>
          </TypeWriterContainer>
          <br />
          {t('heroTitleSuffix')}
        </HeroTitle>
        <HeroSubtitle>{t('heroSubtitle')}</HeroSubtitle>
      </Hero>
    </>
  );
}
