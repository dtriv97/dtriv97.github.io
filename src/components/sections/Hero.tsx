import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const taglines = ['embedded systems', 'full-stack apps', 'useful tools'];

export const Hero = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  const heroClassName = prefersReducedMotion
    ? 'hero-section'
    : 'hero-section is-animated';

  return (
    <section id="home" className={heroClassName} aria-label="Introduction">
      <div className="hero-layer" role="presentation" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-overlay">
        <p className="hero-kicker">Software Engineer</p>
        <h1>
          <span className="hero-name">Dhairya Trivedi</span>
        </h1>
        <p className="hero-copy">
          I build innovative, interesting and useful software solutions that solve practical
          problems.
        </p>
        <p className="hero-tagline" aria-live="polite">
          {prefersReducedMotion ? (
            taglines[0]
          ) : (
            <>
              <span className="hero-tagline-prefix">specialising in </span>
              <span key={taglineIndex} className="hero-tagline-word">
                {taglines[taglineIndex]}
              </span>
            </>
          )}
        </p>
      </div>
    </section>
  );
};
