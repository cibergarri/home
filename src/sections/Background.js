'use client';

import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Section, SectionTitle, Rows, Row, RowHead, RowBody,
} from '@/styles';
import { DetailList, DetailLabel, DetailValue } from './style';

function Pairs({ items }) {
  return (
    <DetailList $flush>
      {items.map(item => (
        <Fragment key={`${item.name} ${item.detail}`}>
          <DetailLabel>{item.name}</DetailLabel>
          <DetailValue>{item.detail}</DetailValue>
        </Fragment>
      ))}
    </DetailList>
  );
}

export default function Background() {
  const { t } = useTranslation();
  const education = t('education', { returnObjects: true });
  const workshops = t('workshops', { returnObjects: true });
  const languages = t('languages', { returnObjects: true });
  return (
    <Section id="background">
      <SectionTitle>{t('backgroundHeading')}</SectionTitle>
      <Rows>
        <Row>
          <RowHead>{t('educationLabel')}</RowHead>
          <RowBody>{Array.isArray(education) && <Pairs items={education} />}</RowBody>
        </Row>
        <Row>
          <RowHead>{t('workshopsLabel')}</RowHead>
          <RowBody>{Array.isArray(workshops) && <Pairs items={workshops} />}</RowBody>
        </Row>
        <Row>
          <RowHead>{t('languagesLabel')}</RowHead>
          <RowBody>{Array.isArray(languages) && <Pairs items={languages} />}</RowBody>
        </Row>
        <Row>
          <RowHead>{t('offWorkLabel')}</RowHead>
          <RowBody>{t('offWork')}</RowBody>
        </Row>
      </Rows>
    </Section>
  );
}
