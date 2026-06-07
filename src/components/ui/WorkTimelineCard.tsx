import { useRef } from 'react';
import { WorkItem, works } from '@/data/works';
import { useInView } from '@/hooks/useInView';

type WorkTimelineCardProps = {
  item: WorkItem;
  side: 'left' | 'right';
  isExpanded: boolean;
  onToggle: () => void;
};

const roleLabelById = works.reduce<Record<string, string>>((acc, entry) => {
  if (entry.kind === 'role') {
    acc[entry.id] = entry.company;
  }
  return acc;
}, {});

export const WorkTimelineCard = ({
  item,
  side,
  isExpanded,
  onToggle,
}: WorkTimelineCardProps) => {
  const cardRef = useRef<HTMLElement>(null);
  const isVisible = useInView(cardRef, { threshold: 0.1 });

  return (
    <article
      ref={cardRef}
      className={`timeline-card ${item.kind} ${side} ${isExpanded ? 'expanded' : ''} ${
        isVisible || isExpanded ? 'is-visible' : ''
      }`}
      onClick={onToggle}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onToggle();
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
    >
      {item.kind === 'project' && item.relatedRoleId ? (
        <p className="timeline-connector">
          Built while at {roleLabelById[item.relatedRoleId] ?? 'previous role'}
        </p>
      ) : null}
      <header className="timeline-head">
        <p className="timeline-type">{item.kind === 'role' ? 'Role' : 'Project'}</p>
        <h3>{item.kind === 'role' ? item.title : item.name}</h3>
        <p className="timeline-meta">
          {item.kind === 'role' ? item.company : item.stack.join(' • ')} • {item.start}
          {item.end ? ` - ${item.end}` : ''}
        </p>
      </header>

      <div className={`timeline-body ${isExpanded ? 'is-open' : ''}`}>
        <div className="timeline-body-inner">
          {item.kind === 'role' ? (
            <>
              <p>{item.summary}</p>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <p>{item.description}</p>
              <div className="chip-row">
                {item.stack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                >
                  View project
                </a>
              ) : null}
            </>
          )}
        </div>
      </div>
    </article>
  );
};
