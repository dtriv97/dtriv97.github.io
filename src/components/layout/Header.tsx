import { useEffect, useState } from 'react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { scrollToSection } from '@/lib/scrollTo';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'testimonials', label: 'References' },
  { id: 'contact', label: 'Contact' },
];

export const Header = () => {
  const activeId = useScrollSpy(navItems.map((item) => item.id));
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, []);

  const onNavigate = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <button className="brand" onClick={() => onNavigate('home')} aria-label="Go to home section">
        <img src="/logo.png" alt="Dhairya Trivedi logo" />
      </button>

      <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-link ${activeId === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button
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
            className={`mobile-nav-link ${activeId === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
};
