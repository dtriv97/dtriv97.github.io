import { Resend } from 'resend';

export type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
};

export type ContactResult = {
  status: number;
  body: { ok: boolean; message: string };
};

const isValid = (value: unknown, min = 1, max = 5000) =>
  typeof value === 'string' && value.trim().length >= min && value.trim().length <= max;

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const getEmailConfig = () => {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL?.trim() ?? 'Portfolio Contact <onboarding@resend.dev>';

  return { apiKey, toEmail, fromEmail };
};

export const handleContactSubmission = async (payload: ContactPayload): Promise<ContactResult> => {
  if (payload.website) {
    return { status: 200, body: { ok: true, message: 'Message received.' } };
  }

  if (
    !isValid(payload.name, 2, 80) ||
    !isValid(payload.email, 5, 180) ||
    !isValid(payload.message, 10, 4000)
  ) {
    return {
      status: 400,
      body: { ok: false, message: 'Please provide valid contact details.' },
    };
  }

  const { apiKey, toEmail, fromEmail } = getEmailConfig();

  if (!apiKey || !toEmail) {
    console.error('Contact form misconfigured: RESEND_API_KEY and CONTACT_TO_EMAIL are required.');
    return {
      status: 503,
      body: {
        ok: false,
        message: 'Contact form is not configured yet. Please email me directly.',
      },
    };
  }

  const name = payload.name!.trim();
  const email = payload.email!.trim();
  const message = payload.message!.trim();

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: email,
    subject: `Portfolio contact from ${name}`,
    text: `New message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <p><strong>New message from your portfolio contact form.</strong></p>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replaceAll('\n', '<br />')}</p>
    `,
    tags: [{ name: 'source', value: 'portfolio-contact-form' }],
  });

  if (error) {
    console.error('Resend contact form error:', error);
    return {
      status: 502,
      body: {
        ok: false,
        message: 'Unable to send your message right now. Please try again or email me directly.',
      },
    };
  }

  console.log('Contact form email sent:', { id: data?.id, to: toEmail, from: email });

  return {
    status: 200,
    body: {
      ok: true,
      message: 'Thanks — your message has been sent. I will get back to you soon.',
    },
  };
};
