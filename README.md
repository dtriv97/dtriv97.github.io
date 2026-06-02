## Portfolio Site (React + Vite)

Single-page portfolio built with React and TypeScript.

### Sections

- Hero with responsive overlay and subtle animation
- Unified work timeline for roles and projects
- Testimonials marquee with mobile fallback cards
- Contact section with CV/LinkedIn/email links and form

### Development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

### Build

```bash
npm run build
npm run preview
```

### Contact form stub

The client posts to `/api/contact`.

Current behavior:
- validates payload server-side
- logs the submission in server output
- returns success response

Planned env variables for real email delivery:
- `CONTACT_TO_EMAIL`
- `RESEND_API_KEY`

### Deploy

This repo includes `vercel.json` configured for Vite static output (`dist`) and SPA rewrites.
