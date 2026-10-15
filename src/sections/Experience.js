'use client';

import { useTranslation } from 'react-i18next';

import {
  Section, SectionTitle, Lede, Rows, Row, RowHead, RowMeta, RowBody,
} from '@/styles';

export default function Experience() {
  const { t } = useTranslation();
  const jobs = t('experience', { returnObjects: true });
  return (
    <Section id="experience">
      <SectionTitle>{t('experienceHeading')}</SectionTitle>
      <Lede>{t('experienceNote')}</Lede>
      <Rows>
        {Array.isArray(jobs) && jobs.map(job => (
          <Row key={job.company}>
            <RowHead>
              {job.company}
              <RowMeta>{[job.period, job.place].filter(Boolean).join(', ')}</RowMeta>
            </RowHead>
            <RowBody>
              {[].concat(job.summary).map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            </RowBody>
          </Row>
        ))}
      </Rows>
    </Section>
  );
}
