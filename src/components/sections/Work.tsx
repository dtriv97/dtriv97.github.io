import { useMemo, useState } from 'react';
import { works, type WorkItem } from '@/data/works';
import { Section } from '@/components/ui/Section';
import { WorkTimelineCard } from '@/components/ui/WorkTimelineCard';

const itemSort = (a: WorkItem, b: WorkItem) => Number(b.start) - Number(a.start);

export const Work = () => {
  const sortedWorks = useMemo(() => [...works].sort(itemSort), []);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <Section id="work" title="Past roles and projects" eyebrow="Selected work">
      <div className="timeline">
        {sortedWorks.map((item, index) => {
          const side = index % 2 === 0 ? 'left' : 'right';
          const isExpanded = expandedId === item.id;

          return (
            <WorkTimelineCard
              key={item.id}
              item={item}
              side={side}
              isExpanded={isExpanded}
              onToggle={() => setExpandedId((prev) => (prev === item.id ? null : item.id))}
            />
          );
        })}
      </div>
    </Section>
  );
};
