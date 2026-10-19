'use client';

import { useTranslation } from 'react-i18next';

import {
  SectionTitle, Lede, Rows, Row, RowHead, RowMeta, RowBody,
} from '@/styles';
import { UnhyphenatedSection } from './style';

export default function Experience() {
  const { t } = useTranslation();
  const jobs = t('experience', { returnObjects: true });
  return (
    <UnhyphenatedSection id="experience">
      <SectionTitle>{t('experienceHeading')}</SectionTitle>
      <Lede>{t('experienceNote')}</Lede>
      <Rows>
        {Array.isArray(jobs) && jobs.map(job => (
          <Row key={job.company}>
            <RowHead>
              {job.company}
              {job.period && <RowMeta>{job.period}</RowMeta>}
              {job.place && <RowMeta $tight>{job.place}</RowMeta>}
            </RowHead>
            <RowBody>
              {[].concat(job.summary).map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            </RowBody>
          </Row>
        ))}
      </Rows>
    </UnhyphenatedSection>
  );
}
