'use client';

import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Section, SectionTitle } from '@/styles';
import { SkillList, Skill } from './style';

// How long a bubble stays lit after the finger lifts, so a quick tap still shows the effect.
const TAP_LINGER_MS = 400;

// On touch screens there is no hover: like the digits the finger leaves on the hero, a finger
// sliding over the bubbles lights each one it passes. The listeners are passive, so the same
// finger keeps scrolling the page.
function useTouchTrail() {
  const list = useRef(null);
  useEffect(() => {
    const element = list.current;
    if (!element) return undefined;
    let current = null;
    let timer;
    const light = (bubble) => {
      if (bubble === current) return;
      current?.removeAttribute('data-touched');
      current = bubble;
      current?.setAttribute('data-touched', '');
    };
    const onMove = (event) => {
      clearTimeout(timer);
      const { clientX, clientY } = event.touches[0];
      const under = document.elementFromPoint?.(clientX, clientY)?.closest('li');
      light(under && element.contains(under) ? under : null);
    };
    const onEnd = () => {
      clearTimeout(timer);
      timer = setTimeout(() => light(null), TAP_LINGER_MS);
    };
    element.addEventListener('touchstart', onMove, { passive: true });
    element.addEventListener('touchmove', onMove, { passive: true });
    element.addEventListener('touchend', onEnd, { passive: true });
    element.addEventListener('touchcancel', onEnd, { passive: true });
    return () => {
      clearTimeout(timer);
      element.removeEventListener('touchstart', onMove);
      element.removeEventListener('touchmove', onMove);
      element.removeEventListener('touchend', onEnd);
      element.removeEventListener('touchcancel', onEnd);
    };
  }, []);
  return list;
}

export default function Skills() {
  const { t } = useTranslation();
  const skills = t('skills', { returnObjects: true });
  const list = useTouchTrail();
  return (
    <Section id="skills">
      <SectionTitle>{t('skillsHeading')}</SectionTitle>
      <SkillList ref={list}>
        {Array.isArray(skills) && skills.map(skill => <Skill key={skill}>{skill}</Skill>)}
      </SkillList>
    </Section>
  );
}
