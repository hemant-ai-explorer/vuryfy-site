# Vuryfy — marketing site

The public marketing/pricing site for Vuryfy, meant for **vuryfy.com**. This
is a separate Next.js project from the actual app (which lives in its own
repo/Vercel project — see `architecture-decisions.md`'s "never blur the
Vuryfy project line" rule). This site never touches the app's database,
auth, or APIs — every call-to-action just links out to the app.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- No backend, no database, no env vars required — fully static

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/page.tsx` — home page, composed from `components/sections/*`
- `app/pricing/page.tsx` — full pricing + FAQ
- `app/privacy/page.tsx`, `app/terms/page.tsx` — placeholder legal pages
  (explicitly marked as non-final — see the amber notice on each page)
- `lib/site-config.ts` — the app's URL, contact email, supported languages
- `lib/plans.ts` — the two pricing plans (single source of truth for copy)

## Before this goes live

1. **Point `APP_URL` correctly.** It's currently
   `https://vuryfy.vercel.app`. If/when the app moves to a subdomain like
   `app.vuryfy.com`, update the one constant in `lib/site-config.ts`.
2. **Set a real contact inbox.** `CONTACT_EMAIL` in `lib/site-config.ts` is
   a placeholder (`hello@vuryfy.com`) — point it at an inbox you actually
   monitor.
3. **Replace the placeholder Privacy/Terms pages** with real,
   legally-reviewed versions before public launch — they're explicitly
   marked as non-final on the pages themselves.
4. **Wire up real billing** in the app, then update the pricing page's copy
   and FAQ answer about payment once checkout actually exists.

## Deploying

This is a brand-new, separate project — it needs its own GitHub repo and
its own Vercel project (don't add it to the existing `vuryfy` Vercel
project, to keep the same clean separation the app itself already follows).

1. Push this folder to a new GitHub repo (e.g. `vuryfy-site`).
2. In Vercel: **New Project** → import that repo → deploy (no env vars
   needed, no build settings to change).
3. In the new Vercel project's **Settings → Domains**, add `vuryfy.com`
   (and `www.vuryfy.com` if you want it) and follow Vercel's DNS
   instructions at your domain registrar.
4. Optional: add `vuryfy.in` to the same project and set it to redirect to
   `vuryfy.com`, or point it separately — your call.
