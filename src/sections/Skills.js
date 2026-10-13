'use client';

import { useTranslation } from 'react-i18next';

import { Section, SectionTitle } from '@/styles';
import { SkillList, Skill } from './style';

export default function Skills() {
  const { t } = useTranslation();
  const skills = t('skills', { returnObjects: true });
  return (
    <Section id="skills">
      <SectionTitle>{t('skillsHeading')}</SectionTitle>
      <SkillList>
        {Array.isArray(skills) && skills.map(skill => <Skill key={skill}>{skill}</Skill>)}
      </SkillList>
    </Section>
  );
}
