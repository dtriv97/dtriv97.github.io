import { CSSProperties, MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import { navItems, sectionThemes } from '@/data/navigation';
import { KeyboardShortcuts } from '@/components/ui/KeyboardShortcuts';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useKeyboardNav } from '@/hooks/useKeyboardNav';
import { useRafScroll } from '@/hooks/useRafScroll';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { scrollToSection } from '@/lib/scrollTo';

export const Header = () => {
  const sectionIds = navItems.map((item) => item.id);
  const { active: activeId, setActive: setActiveId } = useScrollSpy(sectionIds);
  const [open, setOpen] = useState(false);
  const [shortcutsOpen, setShortcutsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  const syncScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    setScrollProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
  }, []);

  useRafScroll(syncScroll);

  useFocusTrap(mobileNavRef, menuToggleRef, open);

  const showShortcuts = useCallback(() => setShortcutsOpen(true), []);
  const hideShortcuts = useCallback(() => setShortcutsOpen(false), []);

  useKeyboardNav({
    helpOpen: shortcutsOpen,
    onShowHelp: showShortcuts,
    onHideHelp: hideShortcuts,
    setActiveId,
  });

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

  const activeTheme = sectionThemes[activeId as keyof typeof sectionThemes] ?? 'dark';
  const headerContext = scrolled && activeTheme === 'light' ? 'light' : 'dark';

  return (
    <>
      <header
        className={`site-header theme-dark ${scrolled ? 'is-scrolled' : ''} header-context--${headerContext}`}
      >
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

        <div className="header-actions">
          <button
            type="button"
            className="shortcuts-trigger"
            onClick={() => setShortcutsOpen((prev) => !prev)}
            aria-label="Keyboard shortcuts"
            aria-expanded={shortcutsOpen}
            aria-controls="keyboard-shortcuts"
          >
            <kbd>?</kbd>
          </button>

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
        </div>

        <div
          className="scroll-progress"
          style={{ transform: `scaleX(${scrollProgress})` }}
          aria-hidden="true"
        />
      </header>

      <KeyboardShortcuts open={shortcutsOpen} onClose={hideShortcuts} />

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
        {navItems.map((item, index) => (
          <a
            key={`${item.id}-mobile`}
            href={`#${item.id}`}
            className={`mobile-nav-link ${activeId === item.id ? 'active' : ''}`}
            style={{ '--nav-stagger': `${index * 60}ms` } as CSSProperties}
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
