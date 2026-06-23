import { FormEvent, useState } from 'react';
import { Section } from '@/components/ui/Section';
import { CONTACT_EMAIL } from '@/config/site';

type FormState = {
  name: string;
  email: string;
  message: string;
  website: string;
};

type StatusState = {
  type: 'error' | 'success';
  message: string;
} | null;

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
  website: '',
};

export const Contact = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<StatusState>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    if (form.name.trim().length < 2) return 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email.';
    if (form.message.trim().length < 10) return 'Message should be at least 10 characters.';
    return '';
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.website || isSubmitting) return;

    const validationError = validate();
    if (validationError) {
      setStatus({ type: 'error', message: validationError });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          website: form.website,
        }),
      });

      const payload = (await response.json()) as { message?: string };
      if (!response.ok) {
        setStatus({ type: 'error', message: payload.message ?? 'Unable to send message.' });
        return;
      }

      setStatus({ type: 'success', message: payload.message ?? 'Message sent.' });
      setForm(initialState);
    } catch {
      setStatus({ type: 'error', message: `Unable to send right now. Please email me at ${CONTACT_EMAIL}.` });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" title="Get in touch" eyebrow="Contact" theme="dark" atmosphere="contact">
      <div className="contact-grid">
        <aside className="contact-links">
          <p className="contact-links-heading">Quick links</p>
          <a href="/cv-placeholder.txt" target="_blank" rel="noreferrer">
            View CV
          </a>
          <a
            href="https://www.linkedin.com/in/dhairya-trivedi-44b356144/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`}>Email</a>
        </aside>

        <div className="contact-form-wrap">
          <p className="contact-form-heading">Or send a message</p>
          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                required
                disabled={isSubmitting}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                required
                disabled={isSubmitting}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="What would you like to discuss?"
                value={form.message}
                rows={5}
                required
                disabled={isSubmitting}
                onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              />
            </div>
            <input
              type="text"
              name="website"
              value={form.website}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hp"
              onChange={(event) => setForm((prev) => ({ ...prev, website: event.target.value }))}
            />
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send message'}
            </button>
            {status ? (
              <p className={`form-status form-status--${status.type}`} role="status">
                {status.message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </Section>
  );
};
