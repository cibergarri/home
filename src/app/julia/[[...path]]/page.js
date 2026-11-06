import { ALL_SUBJECTS } from '@/components/Study/subjects';
import MovedTo from './MovedTo';

export const dynamicParams = false;

// Every page the study corner had under /julia, hidden units too: the corner, each subject, unit
// and exercise.
export function generateStaticParams() {
  return [
    { path: [] },
    ...ALL_SUBJECTS.flatMap(subject => [
      { path: [subject.slug] },
      ...subject.units.flatMap(unit => [
        { path: [subject.slug, unit.slug] },
        ...unit.exercises.map(exercise => ({ path: [subject.slug, unit.slug, exercise.slug] })),
      ]),
    ]),
  ];
}

export default async function OldStudyCornerPage({ params }) {
  const { path = [] } = await params;
  return <MovedTo to={['/study-corner', ...path].join('/')} />;
}
