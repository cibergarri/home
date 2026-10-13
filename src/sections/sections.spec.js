import { screen } from '@testing-library/react';

import en from '@/locales/en.json';
import es from '@/locales/es.json';
import { renderWithProviders, i18n } from '@/test-utils';
import Experience from './Experience';
import Projects from './Projects';
import Background from './Background';
import Skills from './Skills';

describe('landing sections', () => {
  beforeEach(() => i18n.changeLanguage('en'));

  it('lists every job from the content file, most recent first', () => {
    renderWithProviders(<Experience />);
    const companies = en.experience.map(job => job.company);
    const rendered = companies.map(name => screen.getByText(name));
    rendered.forEach((node, index) => {
      if (index > 0) {
        expect(rendered[index - 1].compareDocumentPosition(node))
          .toBe(Node.DOCUMENT_POSITION_FOLLOWING);
      }
    });
    en.experience.forEach(job => expect(screen.getByText(job.summary)).toBeInTheDocument());
  });

  it('hides the period when it is empty', () => {
    renderWithProviders(<Experience />);
    expect(screen.getByText('Currently, Fully remote')).toBeInTheDocument();
    expect(screen.queryByText(/^, Spain$/)).not.toBeInTheDocument();
    expect(screen.getAllByText('Spain')).toHaveLength(2);
  });

  it('renders every project with its links and skips empty award lists', () => {
    renderWithProviders(<Projects />);
    const hrefs = screen.getAllByRole('link').map(a => a.getAttribute('href'));
    en.projects.forEach(project => {
      expect(screen.getByText(project.name)).toBeInTheDocument();
      project.links.forEach(link => expect(hrefs).toContain(link.href));
    });
    const withAwards = en.projects.filter(p => p.awards.length > 0).length;
    expect(screen.getAllByText(en.awardsLabel)).toHaveLength(withAwards);
  });

  it('renders education, workshops, languages and hobbies', () => {
    renderWithProviders(<Background />);
    expect(screen.getByText('Universidad de Burgos')).toBeInTheDocument();
    expect(screen.getByText('Workshops')).toBeInTheDocument();
    expect(screen.getByText('PeopleStorming')).toBeInTheDocument();
    expect(screen.getByText('Spanish')).toBeInTheDocument();
    expect(screen.getByText(en.offWork)).toBeInTheDocument();
  });

  it('renders the skills in Spanish too', () => {
    i18n.changeLanguage('es');
    renderWithProviders(<Skills />);
    expect(screen.getAllByRole('listitem')).toHaveLength(es.skills.length);
    expect(screen.getByText('Diseño de sistemas')).toBeInTheDocument();
  });
});
