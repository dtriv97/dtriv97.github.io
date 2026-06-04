import { useEffect, useState } from 'react';

const taglines = ['embedded systems', 'full-stack apps', 'useful tools'];

export const Hero = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero-section is-animated" aria-label="Introduction">
      <div className="hero-layer" />
      <div className="hero-overlay">
        <p className="hero-kicker">Software Engineer</p>
        <h1>Dhairya Trivedi</h1>
        <p className="hero-copy">
          I build innovative, interesting and useful software solutions that solve practical
          problems.
        </p>
        <p className="hero-tagline hero-tagline--animated" aria-live="polite">
          {taglines[taglineIndex]}
        </p>
      </div>
    </section>
  );
};
