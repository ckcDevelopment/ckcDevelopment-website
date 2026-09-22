# CKC Development

Marketing website for [ckcDevelopment.com](https://ckcdevelopment.com) — custom software, plus the design and management of IT infrastructure for in-house ownership.

CKC stands for **Cool Kids Club**.

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
| `public/brand/ckc-mark.webp` | Transparent graffiti mark for nav/footer |
| `public/brand/ckc-logo.png` | Full lockup on black for Open Graph |
| `src/app/icon.png` / `src/app/apple-icon.png` | Favicon from the CKC letterforms |
| `src/app/opengraph-image.tsx` | Social preview with the logo |

The contact form is front-end only: submit shows a confirmation and points people to `hello@ckcdevelopment.com`. Wire a route handler or form service in `src/components/Contact.tsx` when you are ready.

## Design notes

Neon-on-black graffiti language from the official Cool Kids Club mark: cyan, magenta, purple, and lime on deep black. Interactive service cards expand on click, keyboard, or Enter/Space. Motion respects `prefers-reduced-motion`.
