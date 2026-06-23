import type { VercelRequest, VercelResponse } from '@vercel/node';
import { handleContactSubmission, type ContactPayload } from '../lib/contactHandler';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }

  try {
    const result = await handleContactSubmission((req.body ?? {}) as ContactPayload);
    return res.status(result.status).json(result.body);
  } catch (error) {
    console.error('Contact form handler error:', error);
    return res.status(500).json({
      ok: false,
      message: 'Unable to send your message right now. Please try again or email me directly.',
    });
  }
}
