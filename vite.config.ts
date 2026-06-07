import path from 'path';
import type { IncomingMessage, ServerResponse } from 'http';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { handleContactSubmission, type ContactPayload } from './api/lib/contactHandler';

const readJsonBody = (req: IncomingMessage): Promise<ContactPayload> =>
  new Promise((resolve, reject) => {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        resolve(body ? (JSON.parse(body) as ContactPayload) : {});
      } catch {
        reject(new Error('Invalid JSON'));
      }
    });

    req.on('error', reject);
  });

const contactDevMiddleware = async (req: IncomingMessage, res: ServerResponse, next: () => void) => {
  if (req.url !== '/api/contact') {
    next();
    return;
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: false, message: 'Method not allowed' }));
    return;
  }

  try {
    const payload = await readJsonBody(req);
    const result = handleContactSubmission(payload);
    res.statusCode = result.status;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result.body));
  } catch {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: false, message: 'Invalid request body.' }));
  }
};

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'contact-api-dev',
      configureServer(server) {
        server.middlewares.use(contactDevMiddleware);
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
