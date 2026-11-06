'use client';

import { useEffect, useState } from 'react';

import LabelMap from './LabelMap';
import Story from './Story';
import SortGame from './SortGame';
import ColourGame from './ColourGame';
import DirectionsGame from './DirectionsGame';
import MatchGame from './MatchGame';
import BuildGame from './BuildGame';
import QuizGame from './QuizGame';
import NumberGame from './NumberGame';
import BlocksGame from './BlocksGame';
import TowerGame from './TowerGame';
import LetterGame from './LetterGame';
import MoneyGame from './MoneyGame';
import ScrapPaper from './ScrapPaper';
import Explain, { ExplainContext } from './Explain';
import { findSubject, findUnit, findExercise } from './subjects';
import { showsAll } from './hidden';
import { LanguageContext, useStrings } from './language';
import { loadProfile, saveProfile, useName } from './profile';
import {
  Page, Header, Back, Titles, Kicker, Title, Main, Empty, Cards, Card, CardIcon, CardText, Part, PartTitle,
  SettingsButton, SettingsPanel, SettingsForm, NameInput, SaveButton, SettingsNote,
} from './style';

// Hello to whoever is studying, by name if the settings have one.
export function Hello() {
  const text = useStrings();
  return text.hi(useName());
}

// The ⚙️ in the corner of every page, to type the name of who is studying. It is kept in this
// browser only (see ./profile.js).
export function Settings() {
  const text = useStrings();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const toggle = () => {
    if (!open) setName(loadProfile().name);
    setOpen(!open);
  };
  const save = (event) => {
    event.preventDefault();
    saveProfile({ name });
    setOpen(false);
  };
  return (
    <>
      <SettingsButton type="button" onClick={toggle} aria-expanded={open} aria-label={text.settings}>⚙️</SettingsButton>
      {open && (
        <SettingsPanel role="dialog" aria-label={text.settings} onKeyDown={event => event.key === 'Escape' && setOpen(false)}>
          <SettingsForm onSubmit={save}>
            <label htmlFor="study-name">{text.nameLabel}</label>
            <NameInput
              id="study-name"
              value={name}
              onChange={event => setName(event.target.value)}
              placeholder={text.namePlaceholder}
              maxLength={30}
              autoComplete="off"
              autoFocus
            />
            <SaveButton type="submit">{text.save}</SaveButton>
          </SettingsForm>
          <SettingsNote>{text.noName}</SettingsNote>
        </SettingsPanel>
      )}
    </>
  );
}

// The frame of every page in the study corner: a way back, a title, the settings, and the page.
export function StudyPage({
  title, kicker, back, children,
}) {
  return (
    <Page data-study-page>
      <Header>
        {back && <Back href={back} aria-label="Back">←</Back>}
        <Titles>
          {kicker && <Kicker>{kicker}</Kicker>}
          <Title>{title}</Title>
        </Titles>
        <Settings />
      </Header>
      <Main>{children}</Main>
    </Page>
  );
}

// Big tappable cards, one per subject, unit or exercise, or a note when there are none yet. A
// `hidden` card is left out unless this browser shows the hidden units (see ./hidden.js), and
// then it is drawn faded.
export function CardList({ cards, empty }) {
  const [all, setAll] = useState(false);
  // Read once on the client, after the page drawn on the server (which shows none) has loaded.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setAll(showsAll(window.location.search)), []);
  const shown = cards.filter(card => all || !card.hidden);
  if (shown.length === 0) return <Empty>{empty}</Empty>;
  return (
    <Cards>
      {shown.map(({
        href, icon, title, subtitle, hidden,
      }) => (
        <li key={href}>
          <Card href={href} $hidden={hidden}>
            <CardIcon aria-hidden="true">{icon}</CardIcon>
            <CardText>
              {title}
              {subtitle && <small>{subtitle}</small>}
            </CardText>
          </Card>
        </li>
      ))}
    </Cards>
  );
}

// The kinds of game a part of an exercise can be; labelling a picture unless it says otherwise.
const GAMES = {
  label: LabelMap,
  story: Story,
  sort: SortGame,
  colour: ColourGame,
  directions: DirectionsGame,
  match: MatchGame,
  build: BuildGame,
  quiz: QuizGame,
  numbers: NumberGame,
  blocks: BlocksGame,
  tower: TowerGame,
  letters: LetterGame,
  money: MoneyGame,
};

function Game({ part }) {
  const Kind = GAMES[part.type ?? 'label'];
  return <Kind exercise={part} />;
}

// An exercise, looked up here because its drawings cannot be passed down from a server page.
// Some have more parts after the first, each under its own title; the first can have one too.
// Subjects with `scrap` have scrap paper beside them, and with `explain` their words in Spanish.
export function Exercise({ subject, unit, exercise }) {
  const studied = findSubject(subject);
  const found = findExercise(findUnit(studied, unit), exercise);
  const parts = (
    <>
      {found.heading && (
        <PartTitle>
          {found.heading}
          {' '}
          <Explain word={found.heading} />
        </PartTitle>
      )}
      <Game part={found} />
      {found.more?.map(part => (
        <Part key={part.title}>
          <PartTitle>
            {part.title}
            {' '}
            <Explain word={part.title} />
          </PartTitle>
          <Game part={part} />
        </Part>
      ))}
    </>
  );
  return (
    <LanguageContext.Provider value={studied.lang ?? 'en'}>
      <ExplainContext.Provider value={Boolean(studied.explain)}>
        {studied.scrap ? <ScrapPaper>{parts}</ScrapPaper> : parts}
      </ExplainContext.Provider>
    </LanguageContext.Provider>
  );
}
