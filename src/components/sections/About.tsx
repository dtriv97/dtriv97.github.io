import { skillGroups } from '@/data/skills';
import { AboutPhoto } from '@/components/ui/AboutPhoto';
import { Section } from '@/components/ui/Section';

export const About = () => (
  <Section
    id="about"
    title="Engineer at the intersection"
    eyebrow="About"
    className="about-section"
    theme="light"
    atmosphere="about"
  >
    <div className="about-layout">
      <div className="about-photo-wrap">
        <AboutPhoto />
      </div>
      <div className="about-copy">
        <p>
          I care about clear architecture, reliable delivery, and software that stays maintainable
          long after the first release. My work spans embedded systems, IoT device workflows,
          full-stack applications, and the internal tools teams depend on.
        </p>
        <p>
          Whether it is edge provisioning, a product dashboard, or an automation platform, I aim for
          solutions that are thoughtful, robust, and genuinely useful — built to last, not just to
          ship.
        </p>
      </div>
    </div>
    <div className="about-skills">
      <h3 className="about-skills-title">Skills &amp; stack</h3>
      <div className="about-skills-groups">
        {skillGroups.map((group) => (
          <div key={group.label} className="about-skills-group">
            <p className="about-skills-label">{group.label}</p>
            <ul className="about-skills-list">
              {group.items.map((skill) => (
                <li key={skill}>
                  <span className="skill-chip">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </Section>
);
