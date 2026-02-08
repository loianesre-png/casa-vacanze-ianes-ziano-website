# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Property rental website template built on **Astro 5** (server output mode with Vercel adapter), **TypeScript**, **Tailwind CSS 3**, with **React 18** for interactive components and **Alpine.js** for lightweight interactivity. Based on the AstroWind theme framework. Default language is Italian.

## Commands

```bash
npm run dev            # Dev server at localhost:4321
npm run build          # Production build
npm run preview        # Preview production build
npm run check          # Run all checks (astro type-check + eslint + prettier)
npm run fix            # Auto-fix eslint + prettier issues
```

CI runs `npm run build` (Node 18/20/22) and `npm run check` (Node 22) on pushes/PRs to main.

## Architecture

### Rendering & Deployment
- Astro `server` output mode with `@astrojs/vercel` adapter (60s max duration)
- Also supports Netlify (`netlify.toml` present)

### Component Hybrid
- **Astro components** (`.astro`) — all static/template components
- **React components** (`.jsx/.tsx`) — interactive widgets like `CalendarForm.jsx`, booking forms
- **Alpine.js** — lightweight toggles, carousels, locale switcher

### Configuration-Driven Design
Three config files drive the site:
- `src/config/site.config.ts` — identity, contact info, SEO, integrations, feature flags
- `src/config/theme.config.ts` — theme preset (`luxury`|`modern`|`rustic`|`coastal`|`minimal`) or custom colors
- `src/navigation.ts` — header/footer navigation structure

Config is loaded via `src/config/index.ts` which re-exports helper functions.

### i18n System
- YAML dictionaries in `src/content/dictionary/{locale}/` (it, en, de)
- Content loaded via `src/utils/content.ts` with in-memory caching
- Locale switched via `?lang=` URL param, persisted in `localStorage` as `preferred-locale`
- Fallback chain: requested locale → default locale (Italian) → error

### Property Data
- YAML files in `src/content/properties/{slug}.yaml` define property data
- Loaded by `src/utils/properties.ts` with schema validation and caching
- Falls back to legacy TypeScript data in `src/data/apartments.ts` if YAML loading fails
- Property images organized under `src/assets/images/{property-slug}/`
- Dynamic routes via `src/pages/appartamenti/[slug].astro` using `getStaticPaths()`

### Contact Form
- `POST /api/contact` endpoint in `src/pages/api/contact.ts`
- Uses **Mailgun** (`mailgun.js`) for email delivery
- Requires `MAILGUN_API_KEY` and `MAILGUN_DOMAIN` env vars

### Styling
- Tailwind with custom luxury color palette (gold, bronze, cream, sand) in `tailwind.config.js`
- CSS variables (HSL) injected via `ThemeStyles.astro` component
- Typography: Playfair Display (serif headings), Inter Variable (sans body)
- Path alias: `~` and `@` both map to `src/`

### Layouts
- `Layout.astro` — base HTML shell with theme variable injection
- `PageLayout.astro` — wraps Layout with Header + Footer + locale switcher

### Key Routes
- `/` — homepage
- `/appartamenti/{slug}` — property detail pages
- `/contact` or `/contatti` — contact form
- `/privacy`, `/cookies`, `/terms` — legal pages (markdown)
- `/api/contact` — form submission endpoint
- `/rss.xml` — RSS feed
