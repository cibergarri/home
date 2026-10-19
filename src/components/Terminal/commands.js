'use client';

import { Fragment } from 'react';

import { SOCIAL_LINKS } from '@/components/Header/social';
import { PLAYGROUND, SITE_SOURCE } from '@/content/links';
import { NAME_BANNER } from './banner';
import {
  Banner, Block, Bright, Columns, Grid, Indent, Line, List, Muted, NeofetchLogo, Photo, TermLink,
} from './style';

const CODING_SINCE = 2012;

// In the order `help` lists them; the shortcuts bar shows the same ones.
export const COMMANDS = [
  'help', 'whoami', 'neofetch', 'experience', 'skills', 'projects', 'background', 'contact', 'play',
  'lang', 'clear', 'exit',
];

const list = (t, key) => {
  const value = t(key, { returnObjects: true });
  return Array.isArray(value) ? value : [];
};

export function NameBanner() {
  return NAME_BANNER.map(word => <Banner key={word[0]} aria-hidden="true">{word.join('\n')}</Banner>);
}

function Help({ t }) {
  return (
    <Block>
      <Line>{t('terminal.helpIntro')}</Line>
      <Grid>
        {COMMANDS.map(name => (
          <Fragment key={name}>
            <dt>{name}</dt>
            <dd>{t(`terminal.help.${name}`)}</dd>
          </Fragment>
        ))}
      </Grid>
    </Block>
  );
}

function Whoami({ t }) {
  return (
    <Columns>
      <Photo src="/img/terminal/photo.png" alt={t('terminal.photoAlt')} width={80} height={90} />
      <div style={{ flex: '1 1 30ch' }}>
        <Line><Bright>Javier Garrido</Bright></Line>
        <Line><Muted>{t('terminal.tagline')}</Muted></Line>
        <Line />
        <Line>{t('introParagraph1')}</Line>
        <Line />
        <Line>{t('introParagraph2')}</Line>
      </div>
    </Columns>
  );
}

function Neofetch({ t }) {
  const years = new Date().getFullYear() - CODING_SINCE;
  const rows = [
    ['role', t('terminal.neofetch.roleValue')],
    ['location', t('terminal.neofetch.locationValue')],
    ['uptime', t('terminal.neofetch.uptimeValue', { count: years })],
    ['stack', 'Node.js, TypeScript, React'],
    ['languages', t('terminal.neofetch.languagesValue')],
    ['shell', 'zsh @ javiergarrido.dev'],
  ];
  return (
    <Columns>
      <NeofetchLogo src="/img/terminal/jg.png" alt="" width={32} height={32} />
      <div>
        <Line><Bright>javier</Bright>@<Bright>garrido</Bright></Line>
        <Line><Muted>--------------</Muted></Line>
        <Grid>
          {rows.map(([key, value]) => (
            <Fragment key={key}>
              <dt>{t(`terminal.neofetch.${key}`)}</dt>
              <dd>{value}</dd>
            </Fragment>
          ))}
        </Grid>
      </div>
    </Columns>
  );
}

function Experience({ t }) {
  return list(t, 'experience').map(job => (
    <Block key={job.company}>
      <Line><Bright>▸ {job.company}</Bright></Line>
      <Indent>
        <Line><Muted>{[job.period, job.place].filter(Boolean).join(' · ')}</Muted></Line>
        {[].concat(job.summary).map(paragraph => <Line key={paragraph}>{paragraph}</Line>)}
      </Indent>
    </Block>
  ));
}

function Skills({ t }) {
  return (
    <Block>
      <List>
        {list(t, 'skills').map(skill => <li key={skill}>{skill.toLowerCase().replace(/ /g, '-')}</li>)}
      </List>
    </Block>
  );
}

function Projects({ t }) {
  return list(t, 'projects').map(project => (
    <Block key={project.name}>
      <Line><Bright>▸ {project.name}</Bright></Line>
      <Indent>
        <Line>{project.description}</Line>
        {project.awards.map(award => <Line key={award}>★ {award}</Line>)}
        {project.links.map(link => (
          <Line key={link.href}>→ <TermLink href={link.href}>{link.label}</TermLink></Line>
        ))}
      </Indent>
    </Block>
  ));
}

function Background({ t }) {
  const groups = [
    [t('educationLabel'), list(t, 'education')],
    [t('workshopsLabel'), list(t, 'workshops')],
    [t('languagesLabel'), list(t, 'languages')],
  ];
  return (
    <>
      {groups.map(([label, items]) => (
        <Block key={label}>
          <Line><Bright>▸ {label}</Bright></Line>
          <Indent>
            {items.map(item => (
              <Line key={`${item.name} ${item.detail}`}>
                <Muted>{item.name}</Muted>
                {'  '}
                {item.detail.replace(/\n/g, ' ')}
              </Line>
            ))}
          </Indent>
        </Block>
      ))}
      <Block>
        <Line><Bright>▸ {t('offWorkLabel')}</Bright></Line>
        <Indent><Line>{t('offWork')}</Line></Indent>
      </Block>
    </>
  );
}

function Contact({ t }) {
  const links = [
    [t('contactLinkedin'), SOCIAL_LINKS.linkedin],
    [t('contactX'), SOCIAL_LINKS.x],
    [t('contactGithub'), SOCIAL_LINKS.github],
    [t('contactPlayground'), PLAYGROUND],
    [t('contactSource'), SITE_SOURCE],
  ];
  return (
    <Block>
      <Line>{t('contactText')}</Line>
      <Line />
      <Grid>
        {links.map(([label, href]) => (
          <Fragment key={href}>
            <dt>{label}</dt>
            <dd><TermLink href={href}>{href.replace(/^https?:\/\/(www\.)?/, '')}</TermLink></dd>
          </Fragment>
        ))}
      </Grid>
    </Block>
  );
}

const OUTPUTS = {
  help: Help,
  whoami: Whoami,
  neofetch: Neofetch,
  experience: Experience,
  skills: Skills,
  projects: Projects,
  background: Background,
  contact: Contact,
};

// Works out what a command line does. Returns the output to print, and for some commands an
// action for the terminal to carry out: clear the screen, leave, start the game or switch language.
export function runCommand(input, t) {
  const [name = '', ...args] = input.trim().split(/\s+/);
  const command = name.toLowerCase();
  if (!command) return { output: null };
  if (OUTPUTS[command]) {
    const Output = OUTPUTS[command];
    return { output: <Output t={t} /> };
  }
  switch (command) {
    case 'clear':
      return { action: 'clear' };
    case 'exit':
      return { output: <Line>{t('terminal.exiting')}</Line>, action: 'exit' };
    case 'play':
      return { output: <Line>{t('terminal.launching')}</Line>, action: 'play' };
    case 'lang': {
      const lang = (args[0] || '').toLowerCase();
      if (lang === 'en' || lang === 'es') return { action: 'lang', lang };
      return { output: <Line>{t('terminal.langUsage')}</Line> };
    }
    case 'sudo':
      return { output: <Line>{t('terminal.sudo')}</Line> };
    default:
      return { output: <Line>{t('terminal.notFound', { command })}</Line> };
  }
}
