import { useCallback, useEffect, useState } from 'react';

const getHeaderOffset = () => {
  const value = getComputedStyle(document.documentElement).getPropertyValue('--header-height');
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 72;
};

const resolveActiveSection = (ids: string[]) => {
  const scrollY = window.scrollY;
  const offset = getHeaderOffset();
  const probe = scrollY + offset + 96;

  const docBottom = document.documentElement.scrollHeight - window.innerHeight - 8;
  if (scrollY >= docBottom) {
    return ids[ids.length - 1] ?? ids[0];
  }

  let active = ids[0];
  for (const id of ids) {
    const section = document.getElementById(id);
    if (!section) continue;
    if (section.offsetTop <= probe) {
      active = id;
    }
  }

  return active;
};

export const useScrollSpy = (ids: string[]) => {
  const [active, setActive] = useState(() => ids[0] ?? 'home');

  const updateActive = useCallback(() => {
    setActive(resolveActiveSection(ids));
  }, [ids]);

  useEffect(() => {
    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [updateActive]);

  return { active, setActive };
};
