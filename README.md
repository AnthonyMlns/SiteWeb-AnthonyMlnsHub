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
├── app/           # Pages et layout (App Router)
│   ├── facea-faceb/   # Page textes personnels
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
- [x] Page projet FaceA/FaceB (structure) ([#2](https://github.com/AnthonyMlns/SiteWeb-AnthonyMlnsHub/issues/2))
- [ ] **PRIO** — Ajouter les textes sur FaceA/FaceB
- [ ] **PRIO** — Page Portfolio ([#5](https://github.com/AnthonyMlns/SiteWeb-AnthonyMlnsHub/issues/5))
- [ ] Déploiement Vercel + domaine personnalisé ([#1](https://github.com/AnthonyMlns/SiteWeb-AnthonyMlnsHub/issues/1))
- [ ] Mode sombre ([#3](https://github.com/AnthonyMlns/SiteWeb-AnthonyMlnsHub/issues/3))
- [ ] SEO & analytics ([#4](https://github.com/AnthonyMlns/SiteWeb-AnthonyMlnsHub/issues/4))

## Licence

MIT
