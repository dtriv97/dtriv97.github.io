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

### Contact form

The client posts to `/api/contact`. Submissions are delivered to your inbox via [Resend](https://resend.com), which works well with Vercel serverless functions (no SMTP, good deliverability, simple API).

**Setup**

1. Create a free [Resend](https://resend.com) account.
2. Add and verify your domain (e.g. `dtriv.tech`) under [Domains](https://resend.com/domains).
3. Create an API key under [API Keys](https://resend.com/api-keys).
4. In your Vercel project → **Settings → Environment Variables**, add:

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Resend API key for outbound email |
| `CONTACT_TO_EMAIL` | Your inbox — where form submissions are delivered |
| `CONTACT_FROM_EMAIL` | Verified sender, e.g. `Portfolio Contact <contact@dtriv.tech>` |
| `VITE_CONTACT_EMAIL` | Optional — email shown in the contact section mailto link |

5. Redeploy after adding env vars.

For local testing, copy `.env.example` to `.env.local` and run `npm run dev:vercel` (Vite dev uses the same handler but needs env vars loaded by Vercel CLI).

**Behavior**

- validates payload server-side (name, email, message length limits)
- silently accepts honeypot submissions (`website` field)
- sends email via Resend with `replyTo` set to the visitor's address
- returns a friendly error if email delivery is not configured

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
- [ ] Contact form POST delivers email to your inbox (requires Resend env vars)
- [ ] CV link opens (`/cv-placeholder.txt` until real PDF is added)
- [ ] LinkedIn link opens in new tab
- [ ] `prefers-reduced-motion: reduce` disables hero motion and marquee
