import { useMemo, useState } from 'react';
import { works } from '@/data/works';
import { Section } from '@/components/ui/Section';
import { WorkTimelineCard } from '@/components/ui/WorkTimelineCard';

const roles = works.filter((item) => item.kind === 'role');

const sortByYear = (a: (typeof roles)[number], b: (typeof roles)[number]) =>
  Number(b.start) - Number(a.start);

export const Experience = () => {
  const sortedRoles = useMemo(() => [...roles].sort(sortByYear), []);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <Section id="experience" title="Where I've worked" eyebrow="Career" theme="dark">
      <div className="timeline">
        {sortedRoles.map((item, index) => {
          const side = index % 2 === 0 ? 'left' : 'right';
          const isExpanded = expandedId === item.id;

          return (
            <div key={item.id} className="timeline-row">
              <div className="timeline-row-side timeline-row-side--left">
                {side === 'left' ? (
                  <WorkTimelineCard
                    item={item}
                    side="left"
                    isExpanded={isExpanded}
                    onToggle={() => setExpandedId((prev) => (prev === item.id ? null : item.id))}
                  />
                ) : null}
              </div>

              <div className="timeline-row-marker" aria-hidden="true">
                <span className={`timeline-dot ${item.kind}`} />
              </div>

              <div className="timeline-row-side timeline-row-side--right">
                {side === 'right' ? (
                  <WorkTimelineCard
                    item={item}
                    side="right"
                    isExpanded={isExpanded}
                    onToggle={() => setExpandedId((prev) => (prev === item.id ? null : item.id))}
                  />
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
