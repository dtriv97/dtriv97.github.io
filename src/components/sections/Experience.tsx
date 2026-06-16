import { useMemo, useState } from 'react';
import { Section } from '@/components/ui/Section';
import { WorkTimelineCard } from '@/components/ui/WorkTimelineCard';
import { getTimelineItems } from '@/lib/works';

export const Experience = () => {
  const timelineItems = useMemo(() => getTimelineItems(), []);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <Section
      id="experience"
      title="Where I've worked"
      eyebrow="Career"
      theme="dark"
      atmosphere="experience"
      intro="Roles and selected projects — each build ties back to the team and context it shipped in."
    >
      <div className="timeline">
        {timelineItems.map((item, index) => {
          const side = index % 2 === 0 ? 'left' : 'right';
          const isExpanded = expandedId === item.id;
          const rowClass =
            item.kind === 'project' ? 'timeline-row timeline-row--project' : 'timeline-row';

          return (
            <div key={item.id} className={rowClass}>
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
