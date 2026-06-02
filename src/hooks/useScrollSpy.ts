import { useEffect, useState } from 'react';

const options: IntersectionObserverInit = {
  rootMargin: '-35% 0px -50% 0px',
  threshold: [0.2, 0.4, 0.6],
};

export const useScrollSpy = (ids: string[]) => {
  const [active, setActive] = useState(ids[0] ?? 'home');

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible[0]?.target.id) {
        setActive(visible[0].target.id);
      }
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [ids]);

  return active;
};
