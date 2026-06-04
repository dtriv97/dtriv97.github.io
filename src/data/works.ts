export type WorkItem =
  | {
      kind: 'role';
      id: string;
      company: string;
      title: string;
      start: string;
      end?: string;
      summary: string;
      highlights: string[];
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
    id: 'role-senior-engineer',
    company: 'Innovative Solutions Co.',
    title: 'Senior Software Engineer',
    start: '2023',
    end: 'Present',
    summary: 'Leading delivery of product-grade platforms across cloud, web and device layers.',
    highlights: ['Architected scalable services', 'Mentored engineers', 'Improved deployment velocity'],
  },
  {
    kind: 'project',
    id: 'project-observability',
    name: 'Realtime Observability Console',
    start: '2024',
    description: 'Built a live monitoring dashboard for distributed systems and service health.',
    stack: ['React', 'TypeScript', 'Node.js', 'WebSockets'],
    url: 'https://github.com/dtriv97',
    relatedRoleId: 'role-senior-engineer',
  },
  {
    kind: 'project',
    id: 'project-iot-suite',
    name: 'IoT Device Provisioning Suite',
    start: '2023',
    description: 'Created an onboarding workflow for edge devices with secure provisioning steps.',
    stack: ['Go', 'AWS', 'PostgreSQL'],
    url: 'https://github.com/dtriv97',
    relatedRoleId: 'role-senior-engineer',
  },
  {
    kind: 'role',
    id: 'role-full-stack',
    company: 'Product Studio',
    title: 'Full-Stack Engineer',
    start: '2021',
    end: '2023',
    summary: 'Delivered customer-facing products from idea to release across multiple domains.',
    highlights: ['Shipped MVPs quickly', 'Designed reusable UI systems', 'Reduced support incidents'],
  },
  {
    kind: 'project',
    id: 'project-knowledge',
    name: 'Knowledge Automation Platform',
    start: '2022',
    description: 'Developed workflow automation for internal documentation and support triage.',
    stack: ['React', 'Python', 'PostgreSQL'],
    url: 'https://github.com/dtriv97',
    relatedRoleId: 'role-full-stack',
  },
];
