# LinSera Solutions — Corporate Website

Production-ready marketing site for LinSera Solutions, built with Next.js (App Router), TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

- `src/app` — routes (home, about, services, work, contact) using the App Router
- `src/components` — presentation components, grouped by page/section
- `src/data` — content (services, projects, team, technologies) kept separate from presentation
- `src/lib` — shared utilities and constants
- `src/types` — shared TypeScript types

## Notes on content

Placeholder content is marked clearly in `src/data/*.ts`. Replace with verified
client names, project outcomes, team photography and metrics before launch —
no client names, testimonials, statistics or outcomes have been fabricated.

## Before deploying

- Swap placeholder OG image / favicon set in `public/images`
- Set the production domain in `src/lib/constants.ts` and `src/app/sitemap.ts`
- Wire the contact form in `src/app/contact/page.tsx` to a real backend/email service
- Add real team photography to `public/images/team`
