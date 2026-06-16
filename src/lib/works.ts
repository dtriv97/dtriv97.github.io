import { works, type WorkItem } from '@/data/works';

export const sortByYear = (a: WorkItem, b: WorkItem) => Number(b.start) - Number(a.start);

export const getTimelineItems = () => [...works].sort(sortByYear);

export const getRoleLabel = (roleId: string) => {
  const role = works.find((item): item is Extract<WorkItem, { kind: 'role' }> => item.kind === 'role' && item.id === roleId);
  return role?.company ?? 'previous role';
};
