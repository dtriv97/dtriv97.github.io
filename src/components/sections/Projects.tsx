import { useMemo, useState } from 'react';
import { works } from '@/data/works';
import { Section } from '@/components/ui/Section';
import { ProjectTile, type Project } from '@/components/ui/ProjectTile';
import { sortByYear } from '@/lib/works';

export const Projects = () => {
  const projects = useMemo(
    () => works.filter((item): item is Project => item.kind === 'project').sort(sortByYear),
    []
  );
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <Section
      id="projects"
      title="Selected builds from recent roles"
      eyebrow="Projects"
      theme="light"
      atmosphere="projects"
      intro="Highlighted work from the timeline above — expand any card for stack details and links."
    >
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
