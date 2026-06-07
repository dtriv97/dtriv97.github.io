import { useEffect, useState } from 'react';

const taglines = ['embedded systems', 'full-stack apps', 'useful tools'];

export const Hero = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    syncMotionPreference();
    mediaQuery.addEventListener('change', syncMotionPreference);
    return () => mediaQuery.removeEventListener('change', syncMotionPreference);
  }, []);

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
      <div className="hero-layer" />
      <div className="hero-overlay">
        <p className="hero-kicker">Software Engineer</p>
        <h1>Dhairya Trivedi</h1>
        <p className="hero-copy">
          I build innovative, interesting and useful software solutions that solve practical
          problems.
        </p>
        <p className="hero-tagline hero-tagline--animated" aria-live="polite">
          {prefersReducedMotion ? taglines[0] : taglines[taglineIndex]}
        </p>
      </div>
    </section>
  );
};
