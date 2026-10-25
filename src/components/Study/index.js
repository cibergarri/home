'use client';

import LabelMap from './LabelMap';
import { findSubject, findUnit, findExercise } from './subjects';
import {
  Page, Header, Back, Titles, Kicker, Title, Main, Cards, Card, CardIcon, CardText,
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

// Big tappable cards, one per subject or exercise.
export function CardList({ cards }) {
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

// An exercise, looked up here because its drawing cannot be passed down from a server page.
export function Exercise({ subject, unit, exercise }) {
  return <LabelMap exercise={findExercise(findUnit(findSubject(subject), unit), exercise)} />;
}
