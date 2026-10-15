'use client';

import { useTranslation } from 'react-i18next';

import useScript from '@/hooks/use-script';
import { useTheme } from '@/theme/ThemeProvider';
import Controls from './Controls';
import SocialDrawer from './Drawer';
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

export default function Header() {
  const { theme } = useTheme();
  useScript('/scripts/bg-animation.js', theme);
  const { t } = useTranslation();
  return (
    <>
      <HeaderBar>
        <Toolbar>
          <Title href="/">{t('title')}</Title>
          <Blank />
          <LinksContainer aria-label="Social links">
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
      <SocialDrawer />
      <Hero id="background-image">
        <HeroTitle>
          {t('heroTitlePrefix')}
          <TypeWriterContainer>
            <Hate>&lt;hate \&gt;</Hate>
            <Heart>&lt;heart \&gt;</Heart>
          </TypeWriterContainer>
          <br />
          {t('heroTitleSuffix')}
        </HeroTitle>
        <HeroSubtitle>{t('heroSubtitle')}</HeroSubtitle>
      </Hero>
    </>
  );
}
