## Portfolio Site (React + Vite)

Single-page portfolio built with React and TypeScript, deployed on Vercel.

### Sections

- Hero with Ken Burns background, staggered headline, and rotating tagline
- Unified work timeline for roles and projects with scroll reveals
- Testimonials marquee with mobile fallback cards
- Contact section with CV/LinkedIn/email links and form

### Development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

The dev server includes a local stub for `POST /api/contact` so the contact form can be tested without Vercel.

For production-parity API testing, use:

```bash
npm run dev:vercel
```

### Build

```bash
npm run build
npm run preview
```

### Contact form stub

The client posts to `/api/contact`.

Current behavior:

- validates payload server-side (name, email, message length limits)
- silently accepts honeypot submissions (`website` field)
- logs valid submissions in server output
- returns a success response without sending email

Planned environment variables for real email delivery (set in Vercel project settings, never in client code):

| Variable | Purpose |
|----------|---------|
| `CONTACT_TO_EMAIL` | Inbox that receives form submissions |
| `RESEND_API_KEY` | Resend API key for outbound email |

### Deploy (Vercel)

1. Push `master` (or connect the repo in the [Vercel dashboard](https://vercel.com/new)).
2. Framework preset: **Vite** (auto-detected).
3. Build command: `npm run build` — output directory: `dist`.
4. `vercel.json` handles SPA rewrites; `/api/contact` is a serverless function in `api/`.
5. Add a custom domain (e.g. `www.dtriv.tech`) under Project → Settings → Domains.

Production deploy:

```bash
npx vercel --prod
```

### Smoke test checklist (Phase 5)

After deploy, verify on desktop and at 375px width:

- [ ] Nav links scroll to `#home`, `#work`, `#testimonials`, `#contact`
- [ ] Mobile hamburger opens/closes; Escape closes menu
- [ ] Work timeline cards expand on click
- [ ] Contact form POST returns success message
- [ ] CV link opens (`/cv-placeholder.txt` until real PDF is added)
- [ ] LinkedIn link opens in new tab
- [ ] `prefers-reduced-motion: reduce` disables hero motion and marquee
