// The site's content for machines: Markdown for LLMs (https://llmstxt.org) and schema.org data
// for search engines. Built from the same locale files as the pages, so they never drift apart.

import en from '@/locales/en.json';
import es from '@/locales/es.json';
import { SOCIAL_LINKS } from '@/components/Header/social';
import { PLAYGROUND, SITE_SOURCE, SITE_URL } from './links';

const LOCALES = { en, es };
const NAME = 'Javier Garrido';

// Where each language's full profile is published (see src/app).
export const FULL_PROFILE_PATHS = { en: '/llms-full.txt', es: '/llms-full.es.txt' };

const singleLine = text => text.replace(/\s*\n\s*/g, ' ');
const lines = (...parts) => parts.flat().filter(part => part !== null && part !== undefined).join('\n');

const contactLinks = c => [
  [c.contactLinkedin, SOCIAL_LINKS.linkedin],
  [c.contactGithub, SOCIAL_LINKS.github],
  [c.contactX, SOCIAL_LINKS.x],
  [c.contactPlayground, PLAYGROUND],
  [c.contactSource, SITE_SOURCE],
];

// /llms.txt: who this is, in a few lines, and where to read more.
export function buildLlmsTxt(lang = 'en') {
  const c = LOCALES[lang];
  const other = lang === 'en' ? 'es' : 'en';
  return lines(
    `# ${NAME}`,
    '',
    `> ${c.terminal.tagline}`,
    '',
    c.introParagraph1,
    '',
    c.introParagraph2,
    '',
    `## ${c.llms.about}`,
    '',
    `- [${c.llms.fullProfile}](${SITE_URL}${FULL_PROFILE_PATHS[lang]}): ${c.llms.fullProfileNote}`,
    `- [${c.llms.otherLanguage}](${SITE_URL}${FULL_PROFILE_PATHS[other]})`,
    `- [${c.llms.website}](${SITE_URL}/)`,
    `- [${c.llms.terminal}](${SITE_URL}/terminal)`,
    '',
    `## ${c.llms.contact}`,
    '',
    contactLinks(c).map(([label, href]) => `- [${label}](${href})`),
    '',
  );
}

// /llms-full.txt: everything on the site as plain Markdown.
export function buildLlmsFull(lang = 'en') {
  const c = LOCALES[lang];
  const pairs = items => items.map(item => `- ${item.name}: ${singleLine(item.detail)}`);
  return lines(
    `# ${NAME}`,
    '',
    `> ${c.terminal.tagline}`,
    '',
    `## ${c.llms.about}`,
    '',
    c.introParagraph1,
    '',
    c.introParagraph2,
    '',
    `## ${c.llms.experience}`,
    '',
    c.experience.map(job => lines(
      `### ${job.company}`,
      '',
      [job.period, job.place].filter(Boolean).join(' · '),
      '',
      [].concat(job.summary).join('\n\n'),
      '',
    )),
    `## ${c.llms.skills}`,
    '',
    c.skills.map(skill => `- ${skill}`),
    '',
    `## ${c.llms.projects}`,
    '',
    c.projects.map(project => lines(
      `### ${project.name}`,
      '',
      project.description,
      '',
      project.awards.map(award => `- ${c.llms.award}: ${award}`),
      project.links.map(link => `- [${link.label}](${link.href})`),
      '',
    )),
    `## ${c.llms.background}`,
    '',
    `### ${c.llms.education}`,
    '',
    pairs(c.education),
    '',
    `### ${c.llms.workshops}`,
    '',
    pairs(c.workshops),
    '',
    `### ${c.llms.languages}`,
    '',
    pairs(c.languages),
    '',
    `### ${c.llms.offWork}`,
    '',
    c.offWork,
    '',
    `## ${c.llms.contact}`,
    '',
    c.contactText,
    '',
    contactLinks(c).map(([label, href]) => `- [${label}](${href})`),
    '',
  );
}

// schema.org description of the person behind the site, for search engines and AI crawlers.
export function buildPersonJsonLd() {
  const current = en.experience[0];
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: NAME,
    url: SITE_URL,
    jobTitle: 'Web developer and team lead',
    description: en.introParagraph1,
    worksFor: { '@type': 'Organization', name: current.company },
    address: { '@type': 'PostalAddress', addressLocality: 'Burgos', addressCountry: 'ES' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: en.education[0].name },
    knowsAbout: en.skills,
    knowsLanguage: ['es', 'en'],
    sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.github, SOCIAL_LINKS.x],
  };
}
