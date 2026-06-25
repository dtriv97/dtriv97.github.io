export type SectionTheme = 'light' | 'dark';

export const navItems = [
  { id: 'home', label: 'Home', theme: 'dark', shortcut: '1' },
  { id: 'about', label: 'About', theme: 'light', shortcut: '2' },
  { id: 'experience', label: 'Experience', theme: 'dark', shortcut: '3' },
  { id: 'projects', label: 'Projects', theme: 'light', shortcut: '4' },
  { id: 'contact', label: 'Contact', theme: 'dark', shortcut: '5' },
] as const;

export type NavItem = (typeof navItems)[number];

export const sectionThemes = Object.fromEntries(
  navItems.map((item) => [item.id, item.theme])
) as Record<NavItem['id'], SectionTheme>;
