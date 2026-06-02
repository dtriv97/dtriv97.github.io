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

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.website) return;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as { message?: string };
      setStatus(payload.message ?? 'Message sent.');
      setForm(initialState);
    } catch {
      setStatus('Unable to send right now. Please email me directly.');
    }
  };

  return (
    <Section id="contact" title="Get in touch" eyebrow="Contact">
      <div className="contact-grid">
        <aside className="contact-links">
          <a href="/cv-placeholder.txt" target="_blank" rel="noreferrer">
            View CV
          </a>
          <a href="https://www.linkedin.com/in/dhairya-trivedi-44b356144/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:hello@example.com">Email</a>
        </aside>

        <form className="contact-form" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            required
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            required
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          />
          <textarea
            placeholder="Message"
            value={form.message}
            rows={5}
            required
            onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          />
          <input
            type="text"
            value={form.website}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hp"
            onChange={(event) => setForm((prev) => ({ ...prev, website: event.target.value }))}
          />
          <button type="submit">Send message</button>
          {status ? <p className="form-status">{status}</p> : null}
        </form>
      </div>
    </Section>
  );
};
