import { Section } from '@/components/ui/Section';
import { testimonials } from '@/data/testimonials';

export const Testimonials = () => {
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <Section id="testimonials" title="Testimonials" eyebrow="References">
      <div className="testimonials-wrap">
        <div className="testimonials-track" aria-label="Scrolling testimonials">
          {marqueeItems.map((item, index) => (
            <article key={`${item.id}-${index}`} className="testimonial-card">
              <p className="quote">{item.quote}</p>
              <p className="author">{item.name}</p>
              <p className="author-role">{item.role}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="testimonials-mobile">
        {testimonials.map((item) => (
          <article key={item.id} className="testimonial-card">
            <p className="quote">{item.quote}</p>
            <p className="author">{item.name}</p>
            <p className="author-role">{item.role}</p>
          </article>
        ))}
      </div>
    </Section>
  );
};
