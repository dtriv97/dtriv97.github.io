import { useMemo, useState } from 'react';
import { works } from '@/data/works';
import { Section } from '@/components/ui/Section';
import { ProjectTile, type Project } from '@/components/ui/ProjectTile';

const sortByYear = (a: Project, b: Project) => Number(b.start) - Number(a.start);

export const Projects = () => {
  const projects = useMemo(
    () => works.filter((item): item is Project => item.kind === 'project').sort(sortByYear),
    []
  );
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <Section id="projects" title="Personal and contract work" eyebrow="Projects" theme="light">
      <div className="projects-masonry">
        {projects.map((project) => (
          <ProjectTile
            key={project.id}
            project={project}
            isExpanded={expandedId === project.id}
            onToggle={() => setExpandedId((prev) => (prev === project.id ? null : project.id))}
          />
        ))}
      </div>
    </Section>
  );
};
