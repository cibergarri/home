import { StudyPage, CardList } from '@/components/Study';
import {
  SUBJECTS, findSubject, countExercises, textFor,
} from '@/components/Study/subjects';

export const dynamicParams = false;

export function generateStaticParams() {
  return SUBJECTS.map(subject => ({ subject: subject.slug }));
}

export async function generateMetadata({ params }) {
  const { subject } = await params;
  return { title: `Julia · ${findSubject(subject).title}` };
}

// A subject: all of its units.
export default async function SubjectPage({ params }) {
  const subject = findSubject((await params).subject);
  const text = textFor(subject);
  return (
    <StudyPage back="/julia" kicker={`${subject.icon} ${text.subject}`} title={subject.title}>
      <CardList
        cards={subject.units.map(unit => ({
          href: `/julia/${subject.slug}/${unit.slug}`,
          icon: unit.icon,
          title: unit.title,
          subtitle: countExercises(unit, subject),
        }))}
        empty={text.noUnits}
      />
    </StudyPage>
  );
}
