'use client';

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
import ScrapPaper from './ScrapPaper';
import Explain, { ExplainContext } from './Explain';
import { findSubject, findUnit, findExercise } from './subjects';
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

// Big tappable cards, one per subject, unit or exercise, or a note when there are none yet.
export function CardList({ cards, empty }) {
  if (cards.length === 0) return <Empty>{empty}</Empty>;
  return (
    <Cards>
      {cards.map(({
        href, icon, title, subtitle,
      }) => (
        <li key={href}>
          <Card href={href}>
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
