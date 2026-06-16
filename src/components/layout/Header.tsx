import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useFocusTrap } from '@/hooks/useFocusTrap';
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
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  const syncScrolled = useCallback(() => setScrolled(window.scrollY > 40), []);
  useRafScroll(syncScrolled);

  useFocusTrap(mobileNavRef, menuToggleRef, open);

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

  const onNavigate = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    setActiveId(id);
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <>
      <header className={`site-header theme-dark ${scrolled ? 'is-scrolled' : ''}`}>
        <a
          className="brand"
          href="#home"
          onClick={(event) => onNavigate(event, 'home')}
          aria-label="Go to home section"
        >
          <img src="/logo.png" alt="Dhairya Trivedi logo" width={160} height={36} decoding="async" />
        </a>

        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeId === item.id ? 'active' : ''}`}
              onClick={(event) => onNavigate(event, item.id)}
              aria-current={activeId === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          ref={menuToggleRef}
          type="button"
          className={`menu-toggle ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <button
        type="button"
        className={`mobile-nav-backdrop ${open ? 'is-visible' : ''}`}
        aria-hidden={!open}
        tabIndex={-1}
        onClick={() => setOpen(false)}
      />

      <nav
        ref={mobileNavRef}
        id="mobile-nav"
        className={`mobile-nav ${open ? 'is-open' : ''}`}
        aria-label="Mobile navigation"
        aria-modal={open}
        role="dialog"
      >
        {navItems.map((item) => (
          <a
            key={`${item.id}-mobile`}
            href={`#${item.id}`}
            className={`mobile-nav-link ${activeId === item.id ? 'active' : ''}`}
            onClick={(event) => onNavigate(event, item.id)}
            aria-current={activeId === item.id ? 'page' : undefined}
            tabIndex={open ? undefined : -1}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
};
