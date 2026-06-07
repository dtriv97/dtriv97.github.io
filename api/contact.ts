import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * Contact form handler (v1 stub).
 *
 * TODO: Wire real email delivery via Resend or SendGrid:
 *   - RESEND_API_KEY — API key from Resend dashboard
 *   - CONTACT_TO_EMAIL — inbox that receives form submissions
 *
 * TODO: Add rate limiting (e.g. @upstash/ratelimit or Vercel KV) before production traffic.
 * TODO: Consider CAPTCHA if spam becomes an issue.
 */

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
};

const isValid = (value: unknown, min = 1, max = 5000) =>
  typeof value === 'string' && value.trim().length >= min && value.trim().length <= max;

const handleContactSubmission = (payload: ContactPayload) => {
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

  console.log('Contact form stub submission:', {
    name: payload.name,
    email: payload.email,
    message: payload.message,
    receivedAt: new Date().toISOString(),
  });

  return {
    status: 200,
    body: {
      ok: true,
      message: 'Email delivery not configured yet. Your message was captured in the server log.',
    },
  };
};

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }

  const result = handleContactSubmission((req.body ?? {}) as ContactPayload);
  return res.status(result.status).json(result.body);
}
