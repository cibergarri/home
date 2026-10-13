import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import {
  Section, SectionTitle, Rows, Row, RowHead, RowBody,
} from '../../../styles';
import { DetailList, DetailLabel, DetailValue } from './style';

function Pairs({ items }) {
  return (
    <DetailList style={{ marginTop: 0 }}>
      {items.map(item => (
        <React.Fragment key={item.name}>
          <DetailLabel>{item.name}</DetailLabel>
          <DetailValue>{item.detail}</DetailValue>
        </React.Fragment>
      ))}
    </DetailList>
  );
}

Pairs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
  })).isRequired,
};

function Background() {
  const { t } = useTranslation('landing');
  const education = t('education', { returnObjects: true });
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

export default Background;
