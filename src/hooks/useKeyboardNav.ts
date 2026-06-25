import { useEffect } from 'react';
import { navItems } from '@/data/navigation';
import { scrollToSection } from '@/lib/scrollTo';

const isTypingTarget = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target.isContentEditable;
};

type UseKeyboardNavOptions = {
  onShowHelp: () => void;
  onHideHelp: () => void;
  helpOpen: boolean;
  setActiveId: (id: string) => void;
};

export const useKeyboardNav = ({
  onShowHelp,
  onHideHelp,
  helpOpen,
  setActiveId,
}: UseKeyboardNavOptions) => {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (isTypingTarget(event.target)) return;

      if (event.key === 'Escape' && helpOpen) {
        event.preventDefault();
        onHideHelp();
        return;
      }

      if (event.key === '?' || (event.key === '/' && event.shiftKey)) {
        event.preventDefault();
        if (helpOpen) {
          onHideHelp();
        } else {
          onShowHelp();
        }
        return;
      }

      if (helpOpen) return;

      const item = navItems.find((entry) => entry.shortcut === event.key);
      if (!item) return;

      event.preventDefault();
      setActiveId(item.id);
      scrollToSection(item.id);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [helpOpen, onHideHelp, onShowHelp, setActiveId]);
};
