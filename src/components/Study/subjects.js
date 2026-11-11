import { isHidden } from './hidden';
import landscape from './exercises/landscape';
import coastalLandscape from './exercises/coastal-landscape';
import mountainLandscapes from './exercises/mountain-landscapes';
import flatLandscape from './exercises/flat-landscape';
import rivers from './exercises/rivers';
import findDirections from './exercises/find-directions';
import physicalAndHumanFeatures from './exercises/physical-and-human-features';
import villagesAndCities from './exercises/social-science/unit-2/villages-and-cities';
import livingTogether from './exercises/social-science/unit-2/living-together';
import roadSafety from './exercises/social-science/unit-2/road-safety';
import localCouncil from './exercises/social-science/unit-2/local-council';
import streetMap from './exercises/social-science/unit-2/street-map';
import safeRoutes from './exercises/social-science/unit-2/safe-routes';
import reviewSocial2 from './exercises/social-science/unit-2/review';
import daysOfTheWeek from './exercises/english/days-of-the-week';
import placesAtSchool from './exercises/english/places-at-school';
import wheres from './exercises/english/wheres';
import positions from './exercises/english/positions';
import rulesAndGames from './exercises/english/rules-and-games';
import storyPhrases from './exercises/english/story-phrases';
import numbers from './exercises/english/numbers';
import review from './exercises/english/review';
import englishWelcome from './exercises/english/welcome';
import englishFestivals from './exercises/english/festivals';
import englishUnit2 from './exercises/english/unit-2';
import englishUnit3 from './exercises/english/unit-3';
import englishUnit4 from './exercises/english/unit-4';
import englishUnit5 from './exercises/english/unit-5';
import englishUnit6 from './exercises/english/unit-6';
import numerosDeDosCifras from './exercises/mates/numeros-de-dos-cifras';
import comparar from './exercises/mates/comparar';
import aproximar from './exercises/mates/aproximar';
import sumar from './exercises/mates/sumar';
import restar from './exercises/mates/restar';
import problemas from './exercises/mates/problemas';
import tablaCien from './exercises/mates/tabla-cien';
import tablas from './exercises/mates/tablas';
import repaso from './exercises/mates/repaso';
import conLasManos from './exercises/mates/con-las-manos';
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
import tresCifras from './exercises/mates/tema-2/tres-cifras';
import conLasManos2 from './exercises/mates/tema-2/con-las-manos';
import matesBienvenida from './exercises/mates/bienvenida';
import matesTema3 from './exercises/mates/tema-3';
import matesTema4 from './exercises/mates/tema-4';
import matesTema5 from './exercises/mates/tema-5';
import matesTema6 from './exercises/mates/tema-6';
import matesTema7 from './exercises/mates/tema-7';
import matesTema8 from './exercises/mates/tema-8';
import matesTema9 from './exercises/mates/tema-9';
import teoRegresa from './exercises/lengua/bienvenida/teo-regresa';
import empezamos from './exercises/lengua/bienvenida/empezamos';
import trolls from './exercises/lengua/tema-1/trolls';
import generoNumero from './exercises/lengua/tema-1/genero-numero';
import mayusculas from './exercises/lengua/tema-1/mayusculas';
import abecedario from './exercises/lengua/tema-1/abecedario';
import receta from './exercises/lengua/tema-1/receta';
import pareados from './exercises/lengua/tema-1/pareados';
import juegosTopi from './exercises/lengua/tema-1/juegos';
import ciervo from './exercises/lengua/tema-2/ciervo';
import adjetivos from './exercises/lengua/tema-2/adjetivos';
import silabas from './exercises/lengua/tema-2/silabas';
import sinonimos from './exercises/lengua/tema-2/sinonimos';
import nutrias from './exercises/lengua/tema-2/nutrias';
import cancion from './exercises/lengua/tema-2/cancion';
import lenguaTema3 from './exercises/lengua/tema-3';
import lenguaTema4 from './exercises/lengua/tema-4';
import lenguaTema5 from './exercises/lengua/tema-5';
import lenguaTema6 from './exercises/lengua/tema-6';
import lenguaTema7 from './exercises/lengua/tema-7';
import lenguaTema8 from './exercises/lengua/tema-8';
import lenguaTema9 from './exercises/lengua/tema-9';
import etapas from './exercises/naturales/tema-1/etapas';
import funciones from './exercises/naturales/tema-1/funciones';
import movemos from './exercises/naturales/tema-1/movemos';
import respirar from './exercises/naturales/tema-1/respirar';
import alimentamos from './exercises/naturales/tema-1/alimentamos';
import repasoNaturales from './exercises/naturales/tema-1/repaso';
import salud from './exercises/naturales/tema-2/salud';
import habitos from './exercises/naturales/tema-2/habitos';
import alimentacion from './exercises/naturales/tema-2/alimentacion';
import accidentes from './exercises/naturales/tema-2/accidentes';
import ejercicioEmociones from './exercises/naturales/tema-2/ejercicio-emociones';
import menuSaludable from './exercises/naturales/tema-2/menu-saludable';
import repasoNaturales2 from './exercises/naturales/tema-2/repaso';

// What Julia is studying: subjects, their units, and the exercises of each unit. A new exercise
// goes in ./exercises and is listed under its unit here; the pages are generated from this list.
// Every unit has its pages; the ones in ./hidden.js are only left out of their subject's list.
export const ALL_SUBJECTS = [
  {
    slug: 'social-science',
    title: 'Social Science',
    icon: '🌍',
    explain: true, // its words are explained in Spanish too
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
      {
        slug: 'unit-2',
        title: 'Unit 2',
        icon: '🏘️',
        exercises: [villagesAndCities, livingTogether, roadSafety, localCouncil, streetMap, safeRoutes, reviewSocial2],
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
        slug: 'bienvenida',
        title: 'Bienvenidos a segundo',
        icon: '🎒',
        exercises: matesBienvenida,
      },
      {
        slug: 'tema-1',
        title: 'Tema 1. ¡Qué bien estoy!',
        icon: '🧮',
        exercises: [
          numerosDeDosCifras, comparar, aproximar, sumar, restar, problemas, tablaCien, tablas, conLasManos, repaso,
        ],
      },
      {
        slug: 'tema-2',
        title: 'Tema 2. Animales al rescate',
        icon: '💯',
        exercises: [
          centena, hasta199, tresCifras, sumar2, restar2, dieces, euros, barras, tabla100, mensajeSecreto, conLasManos2,
          repaso2,
        ],
      },
      {
        slug: 'tema-3',
        title: 'Tema 3. El jardín mágico',
        icon: '🌸',
        exercises: matesTema3,
      },
      {
        slug: 'tema-4',
        title: 'Tema 4. ¡Menudo día!',
        icon: '⏰',
        exercises: matesTema4,
      },
      {
        slug: 'tema-5',
        title: 'Tema 5. El agua se va volando',
        icon: '💧',
        exercises: matesTema5,
      },
      {
        slug: 'tema-6',
        title: 'Tema 6. ¿Qué tiempo hace?',
        icon: '🌦️',
        exercises: matesTema6,
      },
      {
        slug: 'tema-7',
        title: 'Tema 7. Mira cómo suena',
        icon: '🎵',
        exercises: matesTema7,
      },
      {
        slug: 'tema-8',
        title: 'Tema 8. ¡Planos y misterios!',
        icon: '🗺️',
        exercises: matesTema8,
      },
      {
        slug: 'tema-9',
        title: 'Tema 9. ¡Qué arte tienes!',
        icon: '🎨',
        exercises: matesTema9,
      },
    ],
  },
  {
    slug: 'lengua',
    title: 'Lengua',
    icon: '📖',
    lang: 'es',
    summary: 'parts',
    units: [
      {
        slug: 'bienvenida',
        title: 'Bienvenidos',
        icon: '🎒',
        exercises: [teoRegresa, empezamos],
      },
      {
        slug: 'tema-1',
        title: 'Tema 1. Cocineros de salud',
        icon: '🍓',
        exercises: [trolls, generoNumero, mayusculas, abecedario, receta, pareados, juegosTopi],
      },
      {
        slug: 'tema-2',
        title: 'Tema 2. Seres fantásticos',
        icon: '🦌',
        exercises: [ciervo, adjetivos, silabas, sinonimos, nutrias, cancion],
      },
      {
        slug: 'tema-3',
        title: 'Tema 3. Compartimos el planeta',
        icon: '🌱',
        exercises: lenguaTema3,
      },
      {
        slug: 'tema-4',
        title: 'Tema 4. Habitantes de la Tierra',
        icon: '🌍',
        exercises: lenguaTema4,
      },
      {
        slug: 'tema-5',
        title: 'Tema 5. Aire, agua y vida',
        icon: '🫧',
        exercises: lenguaTema5,
      },
      {
        slug: 'tema-6',
        title: 'Tema 6. La magia de las nubes',
        icon: '☁️',
        exercises: lenguaTema6,
      },
      {
        slug: 'tema-7',
        title: 'Tema 7. El sonido del silencio',
        icon: '🔇',
        exercises: lenguaTema7,
      },
      {
        slug: 'tema-8',
        title: 'Tema 8. Rodeados de palabras',
        icon: '🗣️',
        exercises: lenguaTema8,
      },
      {
        slug: 'tema-9',
        title: 'Tema 9. Las huellas del pasado',
        icon: '🏛️',
        exercises: lenguaTema9,
      },
    ],
  },
  {
    slug: 'naturales',
    title: 'Naturales',
    icon: '🌱',
    lang: 'es',
    summary: 'parts',
    units: [
      {
        slug: 'tema-1',
        title: 'Tema 1',
        icon: '🧍',
        exercises: [etapas, funciones, movemos, respirar, alimentamos, repasoNaturales],
      },
      {
        slug: 'tema-2',
        title: 'Tema 2',
        icon: '🩺',
        exercises: [salud, habitos, alimentacion, accidentes, ejercicioEmociones, menuSaludable, repasoNaturales2],
      },
    ],
  },
  {
    slug: 'english',
    title: 'English',
    icon: '🇬🇧',
    units: [
      {
        slug: 'welcome',
        title: 'Welcome. A magical surprise',
        icon: '👋',
        exercises: englishWelcome,
      },
      {
        slug: 'unit-1',
        title: 'Unit 1. Where can you learn at school?',
        icon: '🏫',
        exercises: [
          daysOfTheWeek, placesAtSchool, wheres, positions, rulesAndGames, storyPhrases, numbers, review,
        ],
      },
      {
        slug: 'unit-2',
        title: 'Unit 2. My dream house',
        icon: '🏠',
        exercises: englishUnit2,
      },
      {
        slug: 'unit-3',
        title: 'Unit 3. Why do we wear clothes?',
        icon: '👕',
        exercises: englishUnit3,
      },
      {
        slug: 'unit-4',
        title: 'Unit 4. How do we look different?',
        icon: '🧔',
        exercises: englishUnit4,
      },
      {
        slug: 'unit-5',
        title: 'Unit 5. Fun at camp',
        icon: '⛺',
        exercises: englishUnit5,
      },
      {
        slug: 'unit-6',
        title: 'Unit 6. Fun in summer',
        icon: '🏖️',
        exercises: englishUnit6,
      },
      {
        slug: 'festivals',
        title: 'Festivals',
        icon: '🎉',
        exercises: englishFestivals,
      },
    ],
  },
];

// The subjects, each unit marked `hidden` when it is in ./hidden.js.
export const SUBJECTS = ALL_SUBJECTS.map(subject => ({
  ...subject,
  units: subject.units.map(unit => ({ ...unit, hidden: isHidden(subject, unit) })),
}));

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
  return count(subject.units.filter(unit => !unit.hidden).length, text.unit, text); // the ones on show
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
