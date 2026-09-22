# CKC Development

Marketing website for [ckcDevelopment.com](https://ckcdevelopment.com) — custom software, plus the design and management of IT infrastructure for in-house ownership.

## Stack

- [Next.js](https://nextjs.org) App Router (TypeScript)
- [Tailwind CSS](https://tailwindcss.com) v4
- [Framer Motion](https://www.framer.com/motion/) for section reveals and the mobile menu
- Deployable on [Vercel](https://vercel.com) with default settings

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Site structure

| Path | Role |
| --- | --- |
| `src/app/page.tsx` | Homepage composition |
| `src/content.ts` | Copy, services, and contact fields |
| `src/components/` | Header, hero, services, approach, why CKC, contact, footer, ambient field |
| `src/app/icon.svg` / `public/logo.svg` | CKC mark |
| `src/app/opengraph-image.tsx` | Social preview |

The contact form is front-end only: submit shows a confirmation and points people to `hello@ckcdevelopment.com`. Wire a route handler or form service in `src/components/Contact.tsx` when you are ready.

## Design notes

Dark olive ink, brass, and sage — a studio/atelier palette rather than a generic purple gradient. Interactive service cards expand on click, keyboard, or Enter/Space. Motion respects `prefers-reduced-motion`.
