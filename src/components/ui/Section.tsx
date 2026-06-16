import { ReactNode, useRef } from 'react';
import { useInView } from '@/hooks/useInView';

type Atmosphere = 'about' | 'experience' | 'projects' | 'contact';

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  intro?: string;
  className?: string;
  theme?: 'light' | 'dark';
  atmosphere?: Atmosphere;
  children: ReactNode;
};

export const Section = ({
  id,
  title,
  eyebrow = 'Portfolio',
  intro,
  className,
  theme = 'dark',
  atmosphere,
  children,
}: SectionProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(headerRef, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  const themeClass = theme === 'light' ? 'theme-light' : 'theme-dark';
  const atmosphereClass = atmosphere ? `section-atmosphere section-atmosphere--${atmosphere}` : '';
  const sectionClass = ['section', themeClass, atmosphereClass, className].filter(Boolean).join(' ');

  return (
    <section
      id={id}
      className={sectionClass}
      data-theme={theme}
      aria-labelledby={`${id}-title`}
    >
      {atmosphere ? <div className="section-atmosphere-layer" aria-hidden="true" /> : null}
      <div className="section-inner">
        <div ref={headerRef} className={`section-header ${isVisible ? 'is-visible' : ''}`}>
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`}>{title}</h2>
          {intro ? <p className="section-intro">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
};
