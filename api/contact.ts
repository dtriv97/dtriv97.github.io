import type { VercelRequest, VercelResponse } from '@vercel/node';

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
};

const isValid = (value: unknown, min = 1, max = 5000) =>
  typeof value === 'string' && value.trim().length >= min && value.trim().length <= max;

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }

  const payload = (req.body ?? {}) as ContactPayload;

  if (payload.website) {
    return res.status(200).json({ ok: true, message: 'Message received.' });
  }

  if (!isValid(payload.name, 2, 80) || !isValid(payload.email, 5, 180) || !isValid(payload.message, 10, 4000)) {
    return res.status(400).json({ ok: false, message: 'Please provide valid contact details.' });
  }

  console.log('Contact form stub submission:', {
    name: payload.name,
    email: payload.email,
    message: payload.message,
    receivedAt: new Date().toISOString(),
  });

  return res.status(200).json({
    ok: true,
    message: 'Email delivery not configured yet. Your message was captured in the server log.',
  });
}
