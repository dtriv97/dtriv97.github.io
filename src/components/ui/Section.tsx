import { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
};

export const Section = ({ id, title, eyebrow = 'Portfolio', children }: SectionProps) => {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="section-header">
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 id={`${id}-title`}>{title}</h2>
      </div>
      {children}
    </section>
  );
};
