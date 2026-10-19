import en from '@/locales/en.json';
import es from '@/locales/es.json';
import { SOCIAL_LINKS } from '@/components/Header/social';
import {
  FULL_PROFILE_PATHS, buildLlmsFull, buildLlmsTxt, buildPersonJsonLd,
} from './llms';

describe('content for LLMs', () => {
  it('opens llms.txt with the name, a summary and links to both full profiles', () => {
    const text = buildLlmsTxt('en');
    expect(text.startsWith('# Javier Garrido\n\n> ')).toBe(true);
    expect(text).toContain(`https://javiergarrido.dev${FULL_PROFILE_PATHS.en}`);
    expect(text).toContain(`https://javiergarrido.dev${FULL_PROFILE_PATHS.es}`);
    Object.values(SOCIAL_LINKS).forEach(href => expect(text).toContain(href));
  });

  it.each([['en', en], ['es', es]])('puts every job, project and link in the %s full profile', (lang, locale) => {
    const text = buildLlmsFull(lang);
    locale.experience.forEach((job) => {
      expect(text).toContain(`### ${job.company}`);
      expect(text).toContain(job.period);
    });
    locale.skills.forEach(skill => expect(text).toContain(`- ${skill}`));
    locale.projects.forEach((project) => {
      expect(text).toContain(`### ${project.name}`);
      project.links.forEach(link => expect(text).toContain(`(${link.href})`));
    });
    expect(text).toContain(`## ${locale.llms.experience}`);
  });

  it('keeps each workshop on one line', () => {
    const neal = buildLlmsFull('en').split('\n').find(line => line.includes('Neal Ford'));
    expect(neal).toBe('- DDD Europe 2022: Software Architecture: The Hard Parts by Neal Ford');
  });

  it('describes the person with schema.org data', () => {
    const person = buildPersonJsonLd();
    expect(person['@type']).toBe('Person');
    expect(person.worksFor.name).toBe(en.experience[0].company);
    expect(person.sameAs).toContain(SOCIAL_LINKS.linkedin);
    expect(JSON.stringify(person)).not.toMatch(/<\/script/i);
  });
});
