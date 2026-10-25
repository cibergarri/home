'use client';

import LabelMap from './LabelMap';
import { findSubject, findUnit, findExercise } from './subjects';
import {
  Page, Header, Back, Titles, Kicker, Title, Main, Empty, Cards, Card, CardIcon, CardText, Part, PartTitle,
} from './style';

// The frame of every page in Julia's study corner: a way back, a title, and the page itself.
export function StudyPage({
  title, kicker, back, children,
}) {
  return (
    <Page>
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

// An exercise, looked up here because its drawings cannot be passed down from a server page.
// Some have more pictures after the first, each under its own title.
export function Exercise({ subject, unit, exercise }) {
  const found = findExercise(findUnit(findSubject(subject), unit), exercise);
  return (
    <>
      <LabelMap exercise={found} />
      {found.more?.map(part => (
        <Part key={part.title}>
          <PartTitle>{part.title}</PartTitle>
          <LabelMap exercise={part} />
        </Part>
      ))}
    </>
  );
}
