import { useCallback, useEffect, useState } from 'react';
import { useRafScroll } from '@/hooks/useRafScroll';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { scrollToSection } from '@/lib/scrollTo';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const Header = () => {
  const sectionIds = navItems.map((item) => item.id);
  const { active: activeId, setActive: setActiveId } = useScrollSpy(sectionIds);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const syncScrolled = useCallback(() => setScrolled(window.scrollY > 40), []);
  useRafScroll(syncScrolled);

  useEffect(() => {
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  const onNavigate = (id: string) => {
    setActiveId(id);
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <button className="brand" onClick={() => onNavigate('home')} aria-label="Go to home section">
        <img src="/logo.png" alt="Dhairya Trivedi logo" width={160} height={36} decoding="async" />
      </button>

      <nav className="nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`nav-link ${activeId === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
            aria-current={activeId === item.id ? 'true' : undefined}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button
        type="button"
        className={`menu-toggle ${open ? 'is-open' : ''}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <nav id="mobile-nav" className={`mobile-nav ${open ? 'is-open' : ''}`} aria-label="Mobile navigation">
        {navItems.map((item) => (
          <button
            key={`${item.id}-mobile`}
            type="button"
            className={`mobile-nav-link ${activeId === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
            aria-current={activeId === item.id ? 'true' : undefined}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
};
