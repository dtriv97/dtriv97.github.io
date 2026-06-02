import { useState } from 'react';
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

  const onNavigate = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className="site-header">
      <button className="brand" onClick={() => onNavigate('home')}>
        <img src="/logo.png" alt="Dhairya Trivedi signature logo" />
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
        className="menu-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
};
