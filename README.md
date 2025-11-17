# Casa Negrano - Luxury Rental Website

Luxury vacation rental website for Casa Negrano apartments in Trento, Trentino, Italia. Built with Astro 4.15.5, TypeScript, and Tailwind CSS featuring a custom minimal luxury design system.

## Overview

Casa Negrano offers three luxury apartments for short-term rental:
- **Bilocale** - Two-room apartment
- **Trilocale** - Three-room apartment
- **Suite Deluxe** - Premium suite

This website showcases these properties with elegant photo galleries, detailed room information, service listings, and integrated booking capabilities.

## Quick Start

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` to view the site.

### Build

```bash
npm run build
```

Production files are generated in the `./dist/` directory.

### Preview

```bash
npm run preview
```

Preview the production build locally before deploying.

## Project Structure

```
/
├── public/                 # Static assets
├── src/
│   ├── assets/
│   │   ├── images/         # Optimized images by apartment
│   │   │   ├── bilocale/
│   │   │   ├── trilocale/
│   │   │   └── suite-deluxe/
│   │   └── styles/
│   │       └── tailwind.css
│   ├── components/
│   │   ├── appartamenti/   # Apartment-specific components
│   │   │   ├── ApartmentHero.astro
│   │   │   ├── PhotoGallery.astro
│   │   │   ├── RoomShowcase.astro
│   │   │   └── ServicesGrid.astro
│   │   ├── ui/             # Reusable UI components
│   │   └── widgets/        # Complex widgets
│   │       ├── Header.astro
│   │       ├── Footer.astro
│   │       ├── ImageCarousel.astro
│   │       └── CalendarForm.tsx
│   ├── layouts/
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── appartamenti/   # Apartment detail pages
│   │   │   ├── bilocale.astro
│   │   │   ├── trilocale.astro
│   │   │   └── suite-deluxe.astro
│   │   ├── index.astro     # Homepage
│   │   └── ...
│   └── config.yaml         # Site configuration
├── ARCHITECTURE.md         # Complete documentation
└── package.json
```

## Technology Stack

- **Astro 4.15.5** - Static site generator with partial hydration
- **TypeScript** - Type-safe component development
- **Tailwind CSS 3.4.11** - Utility-first CSS with custom luxury tokens
- **Alpine.js** - Lightweight JavaScript for interactive components
- **React 18** - For complex interactive components (CalendarForm)
- **Astro Assets** - Built-in image optimization

## Key Features

### Photo Gallery System
- Luxury-styled image carousel with fullscreen modal
- Responsive srcset (800w, 1200w, 1600w, 2400w)
- Touch/swipe support
- Keyboard navigation (←/→ arrows, Escape)
- Autoplay mode with progress indicators
- Lazy loading for performance

### Luxury Design System
Custom design tokens following minimal luxury aesthetic:

| Color | Hex | Usage |
|-------|-----|-------|
| Luxury Gold | `#c9a961` | Primary accent, CTAs, highlights |
| Luxury Bronze | `#a98b5f` | Secondary accent, hover states |
| Luxury Cream | `#faf8f5` | Light backgrounds |
| Luxury Beige | `#f5f2ed` | Subtle backgrounds |
| Luxury Black | `#1a1a1a` | Headings, primary text |
| Luxury Charcoal | `#2d2d2d` | Dark elements |
| Luxury Graphite | `#4a4a4a` | Body text |

**Typography:**
- Headings: Playfair Display (serif, elegant)
- Body: Inter Variable (sans-serif, clean)

**Design Principles:**
- Border radius: Always `rounded` (0.25rem)
- Transitions: Always `duration-400` (400ms)
- Font weights: `font-medium` (500) for headings
- Shadows: `shadow-luxury-sm/md/lg`

### Performance Optimizations
- WebP image format throughout
- Responsive image srcsets
- Lazy loading with Intersection Observer
- Deferred carousel initialization with `requestIdleCallback`
- Minimal JavaScript footprint

### SEO & Meta
- Open Graph tags for social sharing
- Structured data for rental properties
- Automatic sitemap generation
- Optimized meta descriptions

## Content Management

### Adding Apartment Photos

1. Add WebP images to the appropriate directory:
   ```
   src/assets/images/bilocale/*.webp
   src/assets/images/trilocale/*.webp
   src/assets/images/suite-deluxe/*.webp
   ```

2. Images are automatically loaded by `PhotoGallery.astro` component

3. Multiple sizes are generated automatically:
   - Thumbnails: 800w, 1200w
   - Fullscreen: 1600w, 2400w

### Updating Apartment Information

Edit apartment data in the respective page files:
- `src/pages/appartamenti/bilocale.astro`
- `src/pages/appartamenti/trilocale.astro`
- `src/pages/appartamenti/suite-deluxe.astro`

Each file contains structured data for:
- Title and description
- Room details (bedrooms, bathrooms, capacity)
- Services and amenities
- Pricing information

### Modifying Site Configuration

Edit `src/config.yaml` for:
- Site name and URL
- Meta descriptions
- Google Analytics ID
- Contact information

## Styling Guidelines

### Button Styles

```astro
<!-- Primary button -->
<a class="btn font-medium bg-luxury-gold text-luxury-black border border-luxury-gold/20
          hover:bg-luxury-bronze shadow-luxury-sm hover:shadow-luxury-md
          uppercase tracking-wide transition-all duration-400">
  Prenota Ora
</a>

<!-- Secondary button -->
<a class="btn font-medium bg-luxury-white text-luxury-black border border-luxury-sand
          hover:bg-luxury-cream shadow-luxury-sm transition-all duration-400">
  Scopri di Più
</a>
```

### Section Layouts

```astro
<section class="bg-luxury-white py-12 md:py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <!-- Section heading -->
    <div class="text-center mb-8 md:mb-12">
      <h2 class="text-3xl md:text-4xl font-heading font-medium text-luxury-black mb-4">
        Titolo Sezione
      </h2>
      <div class="w-20 h-0.5 bg-luxury-gold mx-auto mb-4"></div>
      <p class="text-lg text-luxury-graphite max-w-2xl mx-auto">
        Descrizione della sezione
      </p>
    </div>

    <!-- Content -->
  </div>
</section>
```

### Card Components

```astro
<div class="bg-luxury-white rounded border border-luxury-sand shadow-luxury-sm
            hover:shadow-luxury-md transition-all duration-400">
  <div class="p-6">
    <!-- Card content -->
  </div>
</div>
```

## Available Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run format` | Format code with Prettier |
| `npm run lint:eslint` | Run ESLint |

## Deployment

### Manual Deployment

```bash
npm run build
```

Deploy the `dist/` folder to your hosting provider.

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Documentation

For complete documentation including:
- Detailed design system specifications
- Component architecture
- Styling patterns and examples
- Performance optimization strategies
- File structure details

See **[ARCHITECTURE.md](./ARCHITECTURE.md)**

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is based on the AstroWind template, licensed under the MIT license.

---

Built with [Astro](https://astro.build/) • Styled with [Tailwind CSS](https://tailwindcss.com/)
