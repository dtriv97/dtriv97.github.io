export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'C/C++'],
  },
  {
    label: 'Frontend',
    items: ['React', 'HTML/CSS', 'Vite'],
  },
  {
    label: 'Backend & data',
    items: ['Node.js', 'PostgreSQL', 'REST APIs', 'WebSockets'],
  },
  {
    label: 'Platforms',
    items: ['AWS', 'Embedded systems', 'IoT', 'Linux'],
  },
];
