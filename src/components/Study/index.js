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
import { LanguageContext } from './language';
import {
  Page, Header, Back, Titles, Kicker, Title, Main, Empty, Cards, Card, CardIcon, CardText, Part, PartTitle,
} from './style';

// The frame of every page in Julia's study corner: a way back, a title, and the page itself.
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
