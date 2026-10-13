import en from './en.json';
import es from './es.json';

describe('locale files', () => {
  it('keep the same keys in both languages', () => {
    expect(Object.keys(es).sort()).toEqual(Object.keys(en).sort());
  });

  it('describe the same jobs and projects in both languages', () => {
    expect(es.experience.map(j => j.company)).toEqual(en.experience.map(j => j.company));
    expect(es.projects.map(p => p.links.map(l => l.href)))
      .toEqual(en.projects.map(p => p.links.map(l => l.href)));
    expect(es.skills).toHaveLength(en.skills.length);
  });
});
