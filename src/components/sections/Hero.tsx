import { useEffect, useRef, useState } from 'react';
import { HeroCursorGlow } from '@/components/ui/HeroCursorGlow';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { scrollToSection } from '@/lib/scrollTo';

const taglines = ['embedded systems', 'full-stack apps', 'useful tools'];

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
    ? 'hero-section theme-dark'
    : 'hero-section theme-dark is-animated';

  return (
    <section ref={sectionRef} id="home" className={heroClassName} aria-label="Introduction">
      <div className="hero-layer" role="presentation" />
      <HeroCursorGlow sectionRef={sectionRef} />
      <div className="hero-overlay">
        <p className="hero-kicker">Software Engineer</p>
        <h1>
          <span className="hero-name">Dhairya Trivedi</span>
        </h1>
        <p className="hero-copy">
          Software that solves practical problems — from edge devices and IoT workflows to
          full-stack platforms teams rely on every day.
        </p>
        <p className="hero-tagline" aria-live="polite">
          {prefersReducedMotion ? (
            taglines[0]
          ) : (
            <>
              <span className="hero-tagline-prefix">specialising in </span>
              <span className="hero-tagline-rotator">
                <span key={taglineIndex} className="hero-tagline-word">
                  {taglines[taglineIndex]}
                </span>
              </span>
            </>
          )}
        </p>
        <div className="hero-actions">
          <button type="button" className="btn btn-primary" onClick={() => scrollToSection('experience')}>
            View experience
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => scrollToSection('contact')}>
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};
