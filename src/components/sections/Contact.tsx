import { FormEvent, useState } from 'react';
import { Section } from '@/components/ui/Section';

type FormState = {
  name: string;
  email: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
  website: '',
};

export const Contact = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<string>('');

  const validate = () => {
    if (form.name.trim().length < 2) return 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email.';
    if (form.message.trim().length < 10) return 'Message should be at least 10 characters.';
    return '';
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.website) return;

    const validationError = validate();
    if (validationError) {
      setStatus(validationError);
      return;
    }

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
        setStatus(payload.message ?? 'Unable to send message.');
        return;
      }

      setStatus(payload.message ?? 'Message sent.');
      setForm(initialState);
    } catch {
      setStatus('Unable to send right now. Please email me directly.');
    }
  };

  return (
    <Section id="contact" title="Get in touch" eyebrow="Contact" theme="dark">
      <div className="contact-grid">
        <aside className="contact-links">
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
          <a href="mailto:hello@example.com">Email</a>
        </aside>

        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            required
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            required
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            rows={5}
            required
            onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          />
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
          <button type="submit">Send message</button>
          {status ? (
            <p className="form-status" role="status">
              {status}
            </p>
          ) : null}
        </form>
      </div>
    </Section>
  );
};
