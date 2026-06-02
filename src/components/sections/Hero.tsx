const rotatingTaglines = ['embedded systems', 'full-stack apps', 'automation tools'];

export const Hero = () => {
  return (
    <section id="home" className="hero-section" aria-label="Introduction">
      <div className="hero-layer" />
      <div className="hero-overlay">
        <p className="hero-kicker">Software Engineer</p>
        <h1>Dhairya Trivedi</h1>
        <p className="hero-copy">
          I build innovative, interesting and useful software solutions that solve practical
          problems.
        </p>
        <div className="hero-ticker" aria-label="Core focus areas">
          {rotatingTaglines.map((tagline) => (
            <span key={tagline}>{tagline}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
