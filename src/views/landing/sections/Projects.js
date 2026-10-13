import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Section, SectionTitle, Lede, Rows, Row, RowHead, RowBody, Link,
} from '../../../styles';
import {
  DetailList, DetailLabel, DetailValue, LinkList, AwardList,
} from './style';

function Projects() {
  const { t } = useTranslation('landing');
  const projects = t('projects', { returnObjects: true });
  return (
    <Section id="projects">
      <SectionTitle>{t('projectsHeading')}</SectionTitle>
      <Lede>{t('projectsNote')}</Lede>
      <Rows>
        {Array.isArray(projects) && projects.map(project => (
          <Row key={project.name}>
            <RowHead>{project.name}</RowHead>
            <RowBody>
              {project.description}
              <DetailList>
                {project.awards.length > 0 && (
                  <>
                    <DetailLabel>{t('awardsLabel')}</DetailLabel>
                    <DetailValue>
                      <AwardList>
                        {project.awards.map(award => <li key={award}>{award}</li>)}
                      </AwardList>
                    </DetailValue>
                  </>
                )}
                <DetailLabel>{t('linksLabel')}</DetailLabel>
                <DetailValue>
                  <LinkList>
                    {project.links.map(link => (
                      <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
                    ))}
                  </LinkList>
                </DetailValue>
              </DetailList>
            </RowBody>
          </Row>
        ))}
      </Rows>
    </Section>
  );
}

export default Projects;
