export type WorkItem =
  | {
      kind: 'role';
      id: string;
      company: string;
      title: string;
      start: string;
      end?: string;
      summary: string;
      highlights?: string[];
    }
  | {
      kind: 'project';
      id: string;
      name: string;
      start: string;
      end?: string;
      description: string;
      stack: string[];
      url?: string;
      relatedRoleId?: string;
    };

export const works: WorkItem[] = [
  {
    kind: 'role',
    id: 'r1',
    company: 'Innovative Systems Co.',
    title: 'Senior Software Engineer',
    start: '2023',
    end: 'Present',
    summary: 'Led full-stack product delivery for internal and client-facing applications.',
    highlights: ['System architecture', 'Mentoring', 'Performance tuning'],
  },
  {
    kind: 'project',
    id: 'p1',
    name: 'Workflow Intelligence Platform',
    start: '2024',
    description: 'Built workflow orchestration and analytics features for enterprise teams.',
    stack: ['React', 'TypeScript', 'Node.js'],
    relatedRoleId: 'r1',
  },
  {
    kind: 'role',
    id: 'r2',
    company: 'Applied Embedded Labs',
    title: 'Software Engineer',
    start: '2020',
    end: '2023',
    summary: 'Developed embedded and web software for connected products.',
    highlights: ['Embedded C', 'IoT telemetry', 'Cloud APIs'],
  },
  {
    kind: 'project',
    id: 'p2',
    name: 'Remote Device Monitoring Suite',
    start: '2022',
    description: 'Designed monitoring dashboards and alerting flows for distributed devices.',
    stack: ['React', 'Go', 'PostgreSQL'],
    relatedRoleId: 'r2',
  },
  {
    kind: 'project',
    id: 'p3',
    name: 'Developer Productivity CLI',
    start: '2021',
    description: 'Created tooling to automate repetitive engineering workflows.',
    stack: ['TypeScript', 'CLI', 'CI/CD'],
    url: '#',
    relatedRoleId: 'r2',
  },
];
