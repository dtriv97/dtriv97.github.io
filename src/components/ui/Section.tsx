import { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export const Section = ({ id, title, children }: SectionProps) => {
  return (
    <section id={id} className="section">
      <div className="section-header">
        <p className="section-kicker">Portfolio</p>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
};
