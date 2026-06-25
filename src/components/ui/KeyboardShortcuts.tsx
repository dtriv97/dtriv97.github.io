import { useEffect, useRef } from 'react';
import { navItems } from '@/data/navigation';
import { useFocusTrap } from '@/hooks/useFocusTrap';

type KeyboardShortcutsProps = {
  open: boolean;
  onClose: () => void;
};

export const KeyboardShortcuts = ({ open, onClose }: KeyboardShortcutsProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useFocusTrap(dialogRef, closeRef, open);

  useEffect(() => {
    document.body.classList.toggle('shortcuts-open', open);
    return () => document.body.classList.remove('shortcuts-open');
  }, [open]);

  if (!open) return null;

  return (
    <>
      <button
        type="button"
        className="shortcuts-backdrop"
        aria-label="Close keyboard shortcuts"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        id="keyboard-shortcuts"
        className="shortcuts-dialog theme-dark"
        role="dialog"
        aria-modal="true"
        aria-labelledby="shortcuts-title"
      >
        <header className="shortcuts-header">
          <h2 id="shortcuts-title">Keyboard shortcuts</h2>
          <button
            ref={closeRef}
            type="button"
            className="shortcuts-close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </header>
        <ul className="shortcuts-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <span>{item.label}</span>
              <kbd>{item.shortcut}</kbd>
            </li>
          ))}
          <li>
            <span>Show this help</span>
            <kbd>?</kbd>
          </li>
        </ul>
      </div>
    </>
  );
};
