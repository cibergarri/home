import { StudyPage, CardList, Hello } from '@/components/Study';
import { SUBJECTS, countUnits } from '@/components/Study/subjects';

export default function JuliaPage() {
  return (
    <StudyPage kicker={<Hello />} title="What are we studying today?">
      <CardList
        cards={SUBJECTS.map(subject => ({
          href: `/julia/${subject.slug}`,
          icon: subject.icon,
          title: subject.title,
          subtitle: countUnits(subject),
        }))}
      />
    </StudyPage>
  );
}
