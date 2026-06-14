import { skillGroups } from '@/data/skills';
import { AboutCircuitBg } from '@/components/ui/AboutCircuitBg';
import { AboutPhoto } from '@/components/ui/AboutPhoto';
import { Section } from '@/components/ui/Section';

export const About = () => (
  <Section
    id="about"
    title="Engineer at the intersection"
    eyebrow="An intro…"
    className="about-section"
    background={
      <div className="about-motif-wrap" aria-hidden="true">
        <AboutCircuitBg />
      </div>
    }
  >
    <div className="about-layout">
      <div className="about-photo-wrap">
        <AboutPhoto />
      </div>
      <div className="about-copy">
        <p>
          I build innovative, interesting, and useful software that solves practical problems —
          from embedded systems and IoT device workflows to full-stack applications and the tools
          teams rely on every day.
        </p>
        <p>
          I care about clear architecture, reliable delivery, and software that stays maintainable
          long after the first release. Whether it is edge provisioning, a product dashboard, or an
          internal automation platform, I aim for solutions that are thoughtful, robust, and genuinely
          useful.
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
