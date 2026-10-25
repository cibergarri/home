import { StudyPage, CardList } from '@/components/Study';
import {
  allUnits, findSubject, findUnit, countWords,
} from '@/components/Study/subjects';

export const dynamicParams = false;

export function generateStaticParams() {
  return allUnits().map(({ subject, unit }) => ({ subject: subject.slug, unit: unit.slug }));
}

export async function generateMetadata({ params }) {
  const { subject, unit } = await params;
  const found = findSubject(subject);
  return { title: `Julia · ${found.title} · ${findUnit(found, unit).title}` };
}

// A unit: all of its exercises.
export default async function UnitPage({ params }) {
  const { subject: subjectSlug, unit: unitSlug } = await params;
  const subject = findSubject(subjectSlug);
  const unit = findUnit(subject, unitSlug);
  return (
    <StudyPage back={`/julia/${subject.slug}`} kicker={`${subject.icon} ${subject.title}`} title={unit.title}>
      <CardList
        cards={unit.exercises.map(exercise => ({
          href: `/julia/${subject.slug}/${unit.slug}/${exercise.slug}`,
          icon: unit.icon,
          title: exercise.title,
          subtitle: countWords(exercise),
        }))}
        empty="No exercises here yet. They are on their way! 🚧"
      />
    </StudyPage>
  );
}
