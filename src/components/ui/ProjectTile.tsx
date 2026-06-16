import { useRef } from 'react';
import type { WorkItem } from '@/data/works';
import { useInView } from '@/hooks/useInView';

export type Project = Extract<WorkItem, { kind: 'project' }>;

type ProjectTileProps = {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
};

const formatYear = (start: string, end?: string) => (end ? `${start} – ${end}` : start);

export const ProjectTile = ({ project, isExpanded, onToggle }: ProjectTileProps) => {
  const tileRef = useRef<HTMLElement>(null);
  const isVisible = useInView(tileRef, { threshold: 0.12 });
  const detailId = `${project.id}-detail`;

  return (
    <article
      ref={tileRef}
      className={`project-tile surface-card ${isVisible ? 'is-visible' : ''} ${isExpanded ? 'is-expanded' : ''}`}
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
      aria-controls={detailId}
      aria-label={`${project.name}, ${formatYear(project.start, project.end)}`}
    >
      <div className="project-tile-front">
        <header className="project-tile-head">
          <h3>{project.name}</h3>
          <p className="project-tile-year">{formatYear(project.start, project.end)}</p>
        </header>
        <div className="chip-row">
          {project.stack.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
        <div className="card-expand-hint" aria-hidden="true">
          <span>{isExpanded ? 'Show less' : 'View details'}</span>
          <span className={`expand-chevron ${isExpanded ? 'is-open' : ''}`} />
        </div>
      </div>

      <div id={detailId} className={`project-tile-detail ${isExpanded ? 'is-open' : ''}`}>
        <div className="project-tile-detail-inner">
          <p>{project.description}</p>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
            >
              View project
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
};
