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
import numerosDeDosCifras from './exercises/mates/numeros-de-dos-cifras';
import comparar from './exercises/mates/comparar';
import aproximar from './exercises/mates/aproximar';
import sumar from './exercises/mates/sumar';
import restar from './exercises/mates/restar';
import problemas from './exercises/mates/problemas';
import tablaCien from './exercises/mates/tabla-cien';
import tablas from './exercises/mates/tablas';
import repaso from './exercises/mates/repaso';
import centena from './exercises/mates/tema-2/centena';
import hasta199 from './exercises/mates/tema-2/hasta-199';
import sumar2 from './exercises/mates/tema-2/sumar';
import restar2 from './exercises/mates/tema-2/restar';
import dieces from './exercises/mates/tema-2/dieces';
import euros from './exercises/mates/tema-2/euros';
import barras from './exercises/mates/tema-2/barras';
import tabla100 from './exercises/mates/tema-2/tabla-100-199';
import mensajeSecreto from './exercises/mates/tema-2/mensaje-secreto';
import repaso2 from './exercises/mates/tema-2/repaso';

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
    slug: 'mates',
    title: 'Mates',
    icon: '🔢',
    lang: 'es', // its pages and exercises are in Spanish
    summary: 'parts', // its exercises are summed up by how many parts they have, not words
    scrap: true, // with scrap paper to work things out on
    units: [
      {
        slug: 'tema-1',
        title: 'Tema 1',
        icon: '🧮',
        exercises: [
          numerosDeDosCifras, comparar, aproximar, sumar, restar, problemas, tablaCien, tablas, repaso,
        ],
      },
      {
        slug: 'tema-2',
        title: 'Tema 2',
        icon: '💯',
        exercises: [
          centena, hasta199, sumar2, restar2, dieces, euros, barras, tabla100, mensajeSecreto, repaso2,
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

// What the pages say around the exercises, in the language of the subject.
export const TEXT = {
  en: {
    subject: 'Subject',
    noUnits: 'No units here yet. They are on their way! 🚧',
    noExercises: 'No exercises here yet. They are on their way! 🚧',
    unit: 'unit',
    exercise: 'exercise',
    word: 'word',
    part: 'part',
    none: plural => `No ${plural} yet`,
  },
  es: {
    subject: 'Asignatura',
    noUnits: 'Todavía no hay temas. ¡Pronto llegarán! 🚧',
    noExercises: 'Todavía no hay ejercicios. ¡Pronto llegarán! 🚧',
    unit: 'tema',
    exercise: 'ejercicio',
    word: 'palabra',
    part: 'parte',
    none: plural => `Aún no hay ${plural}`,
  },
};

export const textFor = subject => TEXT[subject?.lang ?? 'en'];

const count = (n, word, text) => {
  const plural = `${word}s`;
  if (n === 0) return text.none(plural);
  return `${n} ${n === 1 ? word : plural}`;
};

export const countUnits = (subject) => {
  const text = textFor(subject);
  return count(subject.units.length, text.unit, text);
};
export const countExercises = (unit, subject) => {
  const text = textFor(subject);
  return count(unit.exercises.length, text.exercise, text);
};
// What an exercise's card says about it: how many different words it teaches, if it teaches words
// at all, or how many parts it has for a subject summed up that way.
export const countWords = (exercise, subject) => {
  const text = textFor(subject);
  if (subject?.summary === 'parts') return count(1 + (exercise.more?.length ?? 0), text.part, text);
  const words = new Set([exercise, ...(exercise.more ?? [])]
    .flatMap(part => part.items ?? part.words ?? part.pairs ?? [])
    .map(({ word, en }) => (word ?? en).toLowerCase()));
  return words.size > 0 ? count(words.size, text.word, text) : undefined;
};
