# SiteWeb Anthony Milans

[![Status](https://img.shields.io/badge/status-en%20d%C3%A9veloppement-yellow)]()
[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black)](https://nextjs.org)

Site personnel d'Anthony Milans — Chef de Projet Digital spécialisé en IA,
automatisation et product operations. Portfolio, projets et liens.

## Stack

- **Framework** — Next.js 16.2.6 (App Router)
- **Langage** — TypeScript
- **CSS** — Design system custom + Tailwind v4
- **Fonts** — Inter, JetBrains Mono (via `next/font`)
- **Hébergement** — [Vercel](https://vercel.com)

## Prérequis

- Node.js >= 18
- npm

## Installation

```bash
cd hub
npm install
```

## Utilisation

```bash
npm run dev     # Développement — http://localhost:3000
npm run build   # Production build
npm run lint    # ESLint
```

## Structure

```
hub/
├── app/           # Pages et layout (App Router)
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/    # Composants React
├── lib/           # Logique métier, traductions, contextes
└── public/        # Assets statiques (CV, images)
```

## Roadmap

- [x] Design system initial (tokens, composants)
- [x] Switch FR/EN
- [x] Sections : header, liens, projets, compétences
- [ ] Déploiement Vercel + domaine personnalisé
- [ ] Page projet FaceA/FaceB
- [ ] Mode sombre
- [ ] SEO & analytics

## Licence

MIT
