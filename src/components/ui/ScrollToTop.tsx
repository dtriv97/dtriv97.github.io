import { useCallback, useState } from 'react';
import { useRafScroll } from '@/hooks/useRafScroll';
import { scrollToSection } from '@/lib/scrollTo';

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const syncVisibility = useCallback(() => {
    setVisible(window.scrollY > window.innerHeight * 0.55);
  }, []);

  useRafScroll(syncVisibility);

  return (
    <button
      type="button"
      className={`scroll-to-top ${visible ? 'is-visible' : ''}`}
      onClick={() => scrollToSection('home')}
      aria-label="Back to top"
      tabIndex={visible ? undefined : -1}
    >
      <span className="scroll-to-top-icon" aria-hidden="true" />
    </button>
  );
};
