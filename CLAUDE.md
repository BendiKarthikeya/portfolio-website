# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server at http://localhost:3000
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint (eslint-config-next)

There is no test setup in this project.

## Architecture

A single-developer personal portfolio built with **Next.js 14 (App Router)**, TypeScript, Tailwind CSS, and Framer Motion. Deployed to Vercel.

### Content is data-driven

All site content (bio, skills, projects, n8n automations, education, certifications, social links) lives in [src/data/portfolio.ts](src/data/portfolio.ts) as typed exports: `personalInfo`, `socialLinks`, `n8nProjects`, `skills`, `projects`, `education`, `certifications`, `achievements`. Components import from this file and render it — **to change site content, edit this data file, not the components.** `portfolio_backup.ts` and the root `temp_personal.ts` are stale copies; ignore them.

### Pages and components

- [src/app/page.tsx](src/app/page.tsx) — home page; composes section components in order: Header → Hero → About → N8nPreview → Skills → Projects → Education → Contact. Marked `'use client'`.
- [src/app/n8n-portfolio/page.tsx](src/app/n8n-portfolio/page.tsx) — dedicated route (`/n8n-portfolio`) rendering the full `N8nShowcase`. The home page's `N8nPreview` is a teaser linking here.
- [src/app/layout.tsx](src/app/layout.tsx) — root layout; sets SEO/OpenGraph metadata, Inter font, and forces dark mode (`<html className="dark">`, dark body background).
- Section components in [src/components/](src/components/) are each `'use client'` (use Framer Motion / hooks).

### Styling

Tailwind with `darkMode: 'class'`. Custom color palettes defined in [tailwind.config.js](tailwind.config.js): `cream`, `gold`, `burgundy`, and `n8n` — use these tokens rather than hardcoded hex. Custom animations: `fade-in`, `slide-up`, `float`.

### Conventions

- Import alias `@/*` maps to `src/*` (see [tsconfig.json](tsconfig.json)).
- Images live in `public/Images/` and are referenced by path string in `portfolio.ts` (e.g. `image: "/Images/Reddit.png"`). External image domains must be allowlisted in [next.config.js](next.config.js).
