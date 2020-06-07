/* eslint-disable max-len */
import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Link, TextTitle, ProjectTitle, SectionTitle, Paragraph, ProjectsContainer, ListItem, Hr,
} from './style';


function Summary() {
  const { t } = useTranslation('landing');
  return (
    <ProjectsContainer>
      <TextTitle>{t('projects')}</TextTitle>
      <ProjectTitle>{t('coconut')}</ProjectTitle>
      <Paragraph>{t('coconut-desc')}</Paragraph>
      <SectionTitle>{t('awards')}</SectionTitle>
      <Paragraph>
        {t('coconut-awards')}
      </Paragraph>
      <SectionTitle>{t('links')}</SectionTitle>
      <Paragraph>
        <ListItem><Link href="https://morcilla-conf-hackathon.herokuapp.com/">{t('coconut-link-1')}</Link></ListItem>
        <ListItem><Link href="https://github.com/cibergarri/morcilla-Back">{t('coconut-link-2')}</Link></ListItem>
        <ListItem><Link href="https://youtu.be/kJYeJhajZJg?t=1805">{t('coconut-link-3')}</Link></ListItem>
        <ListItem><Link href="https://twitter.com/morcillaconf?lang=es">{t('coconut-link-4')}</Link></ListItem>
      </Paragraph>
      <Hr />
      <ProjectTitle>{t('interfaz-en-pantalla')}</ProjectTitle>
      <Paragraph>
        {t('interfaz-en-pantalla-desc')}
      </Paragraph>
      <SectionTitle>{t('awards')}</SectionTitle>
      <Paragraph>
        <ListItem>{t('interfaz-en-pantalla-awards-1')}</ListItem>
        <ListItem>{t('interfaz-en-pantalla-awards-2')}</ListItem>
        <ListItem>{t('interfaz-en-pantalla-awards-3')}</ListItem>
      </Paragraph>
      <SectionTitle>{t('links')}</SectionTitle>
      <Paragraph>
        <ListItem>
          <Link href="http://www.educa.jcyl.es/crol/es/buscar?formName=simpleSearchForm&formName=simpleSearchForm&lookForType=0&searchWeb=crol&sortIndex=0&simpleSearchPattern=DINper">{t('interfaz-en-pantalla-link-1')}</Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.ubu.es/sites/default/files/portal_page/files/cartel_interfaz_en_pantalla_vf_3.pdf">{t('interfaz-en-pantalla-link-2')}</Link>
        </ListItem>
        <ListItem>
          <Link href="http://www.spia.es/iep/">{t('interfaz-en-pantalla-link-3')}</Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.youtube.com/user/InterfazEnPantalla">{t('interfaz-en-pantalla-link-4')}</Link>
        </ListItem>
      </Paragraph>
      <Hr />
      <ProjectTitle>{t('estrenos-bot')}</ProjectTitle>
      <Paragraph>{t('estrenos-bot-desc')}</Paragraph>
      <SectionTitle>{t('links')}</SectionTitle>
      <Paragraph>
        <ListItem><Link href="https://web.telegram.org/#/im?p=@EstrenosBot">{t('estrenos-bot-link-1')}</Link></ListItem>
        <ListItem><Link href="https://github.com/cibergarri/estrenosBot">{t('estrenos-bot-link-2')}</Link></ListItem>
      </Paragraph>
    </ProjectsContainer>
  );
}


// const mapDispatchToProps = dispatch => ({
//   setThemeAction: (theme) => dispatch(setThemeAction(theme))
// });

// const mapStateToProps = state => ({
//   ...state.config,
// });

export default Summary;
