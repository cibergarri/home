import landscape from './exercises/landscape';
import coastalLandscape from './exercises/coastal-landscape';
import mountainLandscapes from './exercises/mountain-landscapes';
import flatLandscape from './exercises/flat-landscape';
import rivers from './exercises/rivers';
import findDirections from './exercises/find-directions';
import physicalAndHumanFeatures from './exercises/physical-and-human-features';
import daysOfTheWeek from './exercises/english/days-of-the-week';
import placesAtSchool from './exercises/english/places-at-school';
import wheres from './exercises/english/wheres';
import positions from './exercises/english/positions';
import rulesAndGames from './exercises/english/rules-and-games';
import storyPhrases from './exercises/english/story-phrases';
import review from './exercises/english/review';

// What Julia is studying: subjects, their units, and the exercises of each unit. A new exercise
// goes in ./exercises and is listed under its unit here; the pages are generated from this list.
export const SUBJECTS = [
  {
    slug: 'social-science',
    title: 'Social Science',
    icon: '🌍',
    units: [
      {
        slug: 'unit-1',
        title: 'Unit 1',
        icon: '🏖️',
        exercises: [
          landscape, coastalLandscape, mountainLandscapes, flatLandscape, rivers, findDirections,
          physicalAndHumanFeatures,
        ],
      },
    ],
  },
  {
    slug: 'english',
    title: 'English',
    icon: '🇬🇧',
    units: [
      {
        slug: 'unit-1',
        title: 'Unit 1',
        icon: '🏫',
        exercises: [
          daysOfTheWeek, placesAtSchool, wheres, positions, rulesAndGames, storyPhrases, review,
        ],
      },
    ],
  },
];

export const findSubject = slug => SUBJECTS.find(subject => subject.slug === slug);

export const findUnit = (subject, slug) => subject?.units.find(unit => unit.slug === slug);

export const findExercise = (unit, slug) => unit?.exercises.find(exercise => exercise.slug === slug);

// Every subject, unit and exercise, for the pages to be generated at build time.
export const allUnits = () => SUBJECTS.flatMap(subject => subject.units.map(unit => ({ subject, unit })));

export const allExercises = () => allUnits()
  .flatMap(({ subject, unit }) => unit.exercises.map(exercise => ({ subject, unit, exercise })));

const count = (n, word) => (n === 0 ? `No ${word}s yet` : `${n} ${word}${n === 1 ? '' : 's'}`);

export const countUnits = subject => count(subject.units.length, 'unit');
export const countExercises = unit => count(unit.exercises.length, 'exercise');
// How many different words an exercise teaches, if it teaches words at all.
export const countWords = (exercise) => {
  const words = new Set([exercise, ...(exercise.more ?? [])]
    .flatMap(part => part.items ?? part.words ?? part.pairs ?? [])
    .map(({ word, en }) => (word ?? en).toLowerCase()));
  return words.size > 0 ? count(words.size, 'word') : undefined;
};
