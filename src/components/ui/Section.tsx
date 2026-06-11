import { ReactNode, useRef } from 'react';
import { useInView } from '@/hooks/useInView';

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  className?: string;
  background?: ReactNode;
  children: ReactNode;
};

export const Section = ({
  id,
  title,
  eyebrow = 'Portfolio',
  className,
  background,
  children,
}: SectionProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(headerRef, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  const sectionClass = className ? `section ${className}` : 'section';

  return (
    <section id={id} className={sectionClass} aria-labelledby={`${id}-title`}>
      {background}
      <div className="section-inner">
        <div
          ref={headerRef}
          className={`section-header ${isVisible ? 'is-visible' : ''}`}
        >
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`}>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
};
