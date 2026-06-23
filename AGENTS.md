# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single-page React + TypeScript portfolio built with Vite (see `README.md` for the canonical command list). There is no monorepo, database, auth, or external service — the only "backend" is the contact form endpoint.

### Services

| Service | Command | Notes |
|---------|---------|-------|
| Vite dev server (SPA + contact API stub) | `npm run dev` | Serves at `http://localhost:5173`. Includes a built-in dev middleware for `POST /api/contact`, so the contact form works without Vercel. This is the only service needed to exercise the whole site. |
| Vercel-parity API (optional) | `npm run dev:vercel` | Runs the real `api/contact.ts` serverless function via `vercel dev`. Only needed for production-parity API testing; requires the Vercel CLI. |

### Node version (non-obvious)

- The app targets Node 24 (`package.json` `engines`, `.nvmrc`). The VM's default on-PATH `node` (`/exec-daemon/node`) is v22, which takes PATH precedence over nvm.
- Node 24 is installed via `nvm` and login/interactive shells default to it (configured in `~/.bashrc`). If you spawn a non-login shell and need Node 24 explicitly, run `nvm use 24` or prepend `"$NVM_DIR/versions/node/v24.17.0/bin"` to `PATH`. Node 22 also builds/runs this app fine.

### Build / run

- Build: `npm run build` (runs `tsc -p tsconfig.app.json` then `vite build`, output `dist/`). Verified working.
- Preview production build: `npm run preview`.

### Lint (pre-existing breakage)

- `npm run lint` currently fails: ESLint 9 requires an `eslint.config.js` (flat config) but no ESLint config file exists in the repo. This is a repository issue, not an environment problem — do not "fix" it as part of environment setup.

### Notes

- `next.config.mjs` is vestigial; there is no `next` dependency. The project is purely Vite + React.
- The contact form is a stub: it validates input and logs to the server console (visible in the `npm run dev` output) but does not send email. Planned env vars `CONTACT_TO_EMAIL` / `RESEND_API_KEY` are not yet wired up.
