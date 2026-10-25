import { StudyPage, Exercise } from '@/components/Study';
import {
  allExercises, findSubject, findUnit, findExercise,
} from '@/components/Study/subjects';

export const dynamicParams = false;

export function generateStaticParams() {
  return allExercises().map(({ subject, unit, exercise }) => ({
    subject: subject.slug,
    unit: unit.slug,
    exercise: exercise.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { subject, unit, exercise } = await params;
  return { title: `Julia · ${findExercise(findUnit(findSubject(subject), unit), exercise).title}` };
}

export default async function ExercisePage({ params }) {
  const { subject: subjectSlug, unit: unitSlug, exercise: exerciseSlug } = await params;
  const subject = findSubject(subjectSlug);
  const unit = findUnit(subject, unitSlug);
  const exercise = findExercise(unit, exerciseSlug);
  return (
    <StudyPage
      back={`/julia/${subject.slug}/${unit.slug}`}
      kicker={`${subject.title} · ${unit.title}`}
      title={exercise.title}
    >
      <Exercise subject={subject.slug} unit={unit.slug} exercise={exercise.slug} />
    </StudyPage>
  );
}
