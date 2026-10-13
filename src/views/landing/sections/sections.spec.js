import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import themes from '../../../styles/themes';
import en from '../../../../public/locales/en/landing.json';
import es from '../../../../public/locales/es/landing.json';
import Experience from './Experience';
import Projects from './Projects';
import Background from './Background';
import Skills from './Skills';

let mockLocale = en;

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: { language: 'en' },
    t: (key) => mockLocale[key],
  }),
}));

const render = (Component) => mount(
  <ThemeProvider theme={themes.normal}>
    <Component />
  </ThemeProvider>,
);

describe('landing sections', () => {
  beforeEach(() => { mockLocale = en; });

  it('lists every job from the content file', () => {
    const wrapper = render(Experience);
    en.experience.forEach(job => {
      expect(wrapper.text()).toContain(job.company);
      expect(wrapper.text()).toContain(job.summary);
    });
  });

  it('hides the period when it is empty', () => {
    const wrapper = render(Experience);
    expect(wrapper.text()).toContain('Currently, Fully remote');
    expect(wrapper.text()).not.toContain(', Spain');
    expect(wrapper.text()).toContain('Spain');
  });

  it('renders every project with its links and skips empty award lists', () => {
    const wrapper = render(Projects);
    const links = wrapper.find('a').map(a => a.prop('href'));
    en.projects.forEach(project => {
      expect(wrapper.text()).toContain(project.name);
      project.links.forEach(link => expect(links).toContain(link.href));
    });
    const awardLabels = wrapper.find('dt').filterWhere(dt => dt.text() === en.awardsLabel);
    expect(awardLabels).toHaveLength(en.projects.filter(p => p.awards.length > 0).length);
  });

  it('renders education, languages and hobbies', () => {
    const wrapper = render(Background);
    expect(wrapper.text()).toContain('Universidad de Burgos');
    expect(wrapper.text()).toContain('Spanish');
    expect(wrapper.text()).toContain(en.offWork);
  });

  it('renders the skills in Spanish too', () => {
    mockLocale = es;
    const wrapper = render(Skills);
    expect(wrapper.find('li')).toHaveLength(es.skills.length);
    expect(wrapper.text()).toContain('Diseño de sistemas');
  });

  it('keeps the same content keys in both languages', () => {
    expect(Object.keys(es).sort()).toEqual(Object.keys(en).sort());
    expect(es.experience.map(j => j.company)).toEqual(en.experience.map(j => j.company));
    expect(es.projects.map(p => p.links.map(l => l.href)))
      .toEqual(en.projects.map(p => p.links.map(l => l.href)));
  });
});
