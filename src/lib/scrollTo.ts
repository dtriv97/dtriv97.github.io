export const scrollToSection = (id: string) => {
  const target = document.getElementById(id);
  if (!target) return;

  const headerOffset = Number.parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue('--header-height')
  );
  const offset = Number.isFinite(headerOffset) ? headerOffset + 12 : 84;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top, behavior: 'smooth' });
};
