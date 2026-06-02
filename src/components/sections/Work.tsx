import { useState } from 'react';
import { works, type WorkItem } from '@/data/works';
import { Section } from '@/components/ui/Section';

const itemSort = (a: WorkItem, b: WorkItem) => Number(b.start) - Number(a.start);

export const Work = () => {
  const [expandedId, setExpandedId] = useState<string | null>(works[0]?.id ?? null);

  return (
    <Section id="work" title="Past roles and projects" eyebrow="Selected work">
      <div className="timeline">
        {works.sort(itemSort).map((item, index) => {
          const isExpanded = expandedId === item.id;
          const side = index % 2 === 0 ? 'left' : 'right';

          return (
            <article
              key={item.id}
              className={`timeline-card ${item.kind} ${side} ${isExpanded ? 'expanded' : ''}`}
              onClick={() => setExpandedId((prev) => (prev === item.id ? null : item.id))}
            >
              <div className="timeline-dot" aria-hidden="true" />
              <header className="timeline-head">
                <p className="timeline-type">{item.kind === 'role' ? 'Role' : 'Project'}</p>
                <h3>{item.kind === 'role' ? item.title : item.name}</h3>
                <p className="timeline-meta">
                  {item.kind === 'role' ? item.company : item.stack.join(' • ')} • {item.start}
                  {item.end ? ` - ${item.end}` : ''}
                </p>
              </header>

              {isExpanded && (
                <div className="timeline-body">
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
                    </>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </Section>
  );
};
