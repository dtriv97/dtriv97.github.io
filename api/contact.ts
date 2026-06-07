import type { VercelRequest, VercelResponse } from '@vercel/node';
import { handleContactSubmission, type ContactPayload } from '../src/lib/contactHandler';

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

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }

  const result = handleContactSubmission((req.body ?? {}) as ContactPayload);
  return res.status(result.status).json(result.body);
}
