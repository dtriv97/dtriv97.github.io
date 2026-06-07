import { useMemo, useState } from 'react';
import { works, type WorkItem } from '@/data/works';
import { Section } from '@/components/ui/Section';
import { WorkTimelineCard } from '@/components/ui/WorkTimelineCard';

/** Newest first; stable order for same year (roles before projects). */
const sortByTimeline = (a: WorkItem, b: WorkItem) => {
  const yearDiff = Number(b.start) - Number(a.start);
  if (yearDiff !== 0) return yearDiff;
  if (a.kind !== b.kind) return a.kind === 'role' ? -1 : 1;
  return 0;
};

export const Work = () => {
  const sortedWorks = useMemo(() => [...works].sort(sortByTimeline), []);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <Section id="work" title="Past roles and projects" eyebrow="Selected work">
      <div className="timeline">
        {sortedWorks.map((item, index) => {
          const side = index % 2 === 0 ? 'left' : 'right';
          const isExpanded = expandedId === item.id;

          return (
            <div
              key={item.id}
              className={`timeline-row ${item.kind === 'project' ? 'timeline-row--project' : ''}`}
            >
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
