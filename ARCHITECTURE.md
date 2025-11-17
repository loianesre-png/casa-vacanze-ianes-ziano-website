# Casa Negrano Website - Architecture Documentation

## Overview

Casa Negrano is a luxury vacation rental website showcasing three apartments in Trento, Italy. Built with **Astro 4.15.5**, **Tailwind CSS 3.4.11**, and a custom luxury design system, the site provides a refined, minimal aesthetic that emphasizes elegance without extravagance.

**Live Site:** https://casanegrano.it

---

## Table of Contents

- [Technology Stack](#technology-stack)
- [Luxury Design System](#luxury-design-system)
- [Architecture & File Structure](#architecture--file-structure)
- [Key Features](#key-features)
- [Data Structure](#data-structure)
- [Component Library](#component-library)
- [Styling Patterns](#styling-patterns)
- [Performance Optimizations](#performance-optimizations)

---

## Technology Stack

### Core Technologies
- **Astro 4.15.5** - Static Site Generator (SSG)
- **TypeScript** - Type-safe data structures
- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **Alpine.js** - Lightweight JavaScript for interactive components
- **React 18** - For complex form components (CalendarForm)

### Fonts
- **Playfair Display** (serif) - Headings and luxury typography
- **Inter Variable** - Body text and UI elements

### Image Optimization
- **Astro Assets** - Built-in image optimization
- **WebP format** - All images optimized as WebP
- **Responsive srcset** - Multiple image sizes for different viewports

---

## Luxury Design System

### Color Palette

The color system is built on warm, neutral tones that evoke sophistication:

```css
/* Primary Colors */
--luxury-gold: #c9a961      /* Main accent color */
--luxury-bronze: #a98b5f    /* Secondary accent */

/* Neutral Backgrounds */
--luxury-cream: #faf8f5     /* Lightest background */
--luxury-white: #ffffff     /* Pure white surfaces */
--luxury-beige: #f5f2ed     /* Subtle background variation */
--luxury-sand: #e8e4dd      /* Border and divider color */

/* Text Colors */
--luxury-black: #1a1a1a     /* Primary text */
--luxury-charcoal: #2d2d2d  /* Secondary text / dark backgrounds */
--luxury-graphite: #4a4a4a  /* Body text, subtle elements */
```

### Typography System

```css
/* Font Families */
font-heading: 'Playfair Display', serif
font-sans: 'Inter Variable', sans-serif

/* Font Weights */
- font-medium (500) - Primary weight for headings and emphasis
- font-normal (400) - Body text
- AVOID font-bold unless specifically needed

/* Letter Spacing */
- tracking-tight: Headings (h1, h2)
- tracking-wide: Uppercase labels, navigation
- tracking-wider: Small uppercase text, buttons
```

### Spacing & Layout

```css
/* Border Radius */
- rounded (0.25rem / 4px) - Standard for all elements
- NEVER use rounded-lg, rounded-xl, or rounded-full (except special cases)

/* Shadows */
- shadow-luxury-sm: Subtle depth (buttons, small cards)
- shadow-luxury-md: Standard elevation (cards, panels)
- shadow-luxury-lg: Prominent elements (modals, heroes)
- shadow-luxury-gold: Gold-tinted shadow for special accents

/* Transitions */
- duration-400 (400ms) - Standard transition time
- NEVER use duration-300 or other values
```

### Design Principles

1. **Minimal Elegance**: Clean lines, generous white space, subtle refinements
2. **Warm Neutrals**: Beige, cream, and gold palette over stark whites and grays
3. **Refined Typography**: Playfair Display for luxury feel, medium weight over bold
4. **Subtle Interactions**: Gentle hover states, smooth 400ms transitions
5. **Restrained Accents**: Gold used sparingly for maximum impact

---

## Architecture & File Structure

```
casa-negrano-website-v1/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── bilocale/          # 17 photos
│   │   │   ├── trilocale/         # 17 photos
│   │   │   └── suite-deluxe/      # 17 photos
│   │   └── styles/
│   │       └── tailwind.css       # Button system & utilities
│   │
│   ├── components/
│   │   ├── appartamenti/          # Apartment-specific components
│   │   │   ├── ApartmentHero.astro
│   │   │   ├── PropertyOverview.astro
│   │   │   ├── RoomShowcase.astro
│   │   │   ├── PhotoGallery.astro
│   │   │   ├── ServicesGrid.astro
│   │   │   ├── Benefits.astro
│   │   │   └── ApartmentCTA.astro
│   │   │
│   │   ├── home/                  # Home page components
│   │   │   ├── HomeHero.astro
│   │   │   ├── ApartmentCard.astro
│   │   │   └── ApartmentsOverview.astro
│   │   │
│   │   ├── widgets/               # Reusable widgets
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── ImageCarousel.astro
│   │   │   ├── CalendarForm.jsx
│   │   │   ├── Testimonials.astro
│   │   │   ├── CallToAction.astro
│   │   │   ├── Features2.astro
│   │   │   ├── Features3.astro
│   │   │   └── HeroText.astro
│   │   │
│   │   └── ui/                    # Base UI components
│   │       ├── Headline.astro
│   │       ├── ItemGrid.astro
│   │       ├── ItemGrid2.astro
│   │       ├── Button.astro
│   │       ├── button.tsx         # Shadcn/ui React button
│   │       ├── card.tsx           # Shadcn/ui card components
│   │       ├── input.tsx
│   │       ├── textarea.tsx
│   │       ├── calendar.tsx
│   │       ├── popover.tsx
│   │       └── label.tsx
│   │
│   ├── data/
│   │   ├── apartments.ts          # Apartment data & type definitions
│   │   └── services.ts            # Services, amenities, benefits data
│   │
│   ├── layouts/
│   │   ├── Layout.astro           # Base HTML layout
│   │   └── PageLayout.astro       # Page layout with header/footer
│   │
│   ├── pages/
│   │   ├── index.astro            # Home page
│   │   ├── contatti.astro         # Contact page
│   │   ├── 404.astro              # Error page
│   │   └── appartamenti/
│   │       ├── bilocale.astro
│   │       ├── trilocale.astro
│   │       └── suite-deluxe.astro
│   │
│   └── styles/
│       └── globals.css            # Global styles, CSS variables
│
├── tailwind.config.js             # Tailwind configuration
└── astro.config.mjs               # Astro configuration
```

---

## Key Features

### 1. Multi-Page Structure

**Home Page** (`/`)
- Hero section with property showcase
- Overview of all three apartments
- Apartment comparison table
- About section
- Testimonials
- Call-to-action

**Apartment Pages** (`/appartamenti/*`)
Each apartment has a dedicated page with:
- Hero with breadcrumb navigation
- Property overview with specs
- Room-by-room showcase
- **Photo gallery carousel** (17 photos each)
- Services grid
- Testimonials
- Trentino Guest Card benefits
- Local recommendations
- Call-to-action

**Contact Page** (`/contatti`)
- Contact form with calendar integration
- Contact information cards
- Google Maps embed

### 2. Photo Gallery Carousel

A luxury-styled, full-featured image carousel with:

**Features:**
- 📱 Touch/swipe support for mobile
- ⌨️ Keyboard navigation (arrow keys)
- 🖼️ Fullscreen modal with high-res images
- ▶️ Autoplay mode
- ⚡ Lazy loading with intersection observer
- 🎯 Responsive images (srcset: 800w, 1200w, 1600w, 2400w)

**Luxury Styling:**
- Gold navigation buttons with charcoal backgrounds
- Minimal rounded borders
- Luxury shadows and smooth 400ms transitions
- Gold progress indicator
- Elegant loading placeholders

**Component:** `PhotoGallery.astro` + `ImageCarousel.astro`

### 3. Responsive Image System

All images use Astro's built-in optimization:

```typescript
// Thumbnail variants for carousel
const thumbnail = await getImage({
  src: originalImage,
  width: 800,
  format: 'webp',
  quality: 85,
});

// Full-size variants for modal
const full = await getImage({
  src: originalImage,
  width: 1600,
  format: 'webp',
  quality: 90,
});
```

### 4. Interactive Calendar Form

React-based booking inquiry form with:
- Date picker for check-in/check-out
- Guest count input
- Special requests textarea
- Webhook integration for form submission

**Component:** `CalendarForm.jsx` (React + Shadcn/ui)

---

## Data Structure

### Apartments

```typescript
// src/data/apartments.ts
export interface Apartment {
  id: string;                    // 'bilocale' | 'trilocale' | 'suite-deluxe'
  name: string;                  // Display name
  subtitle: string;              // Short description
  description: string;           // Full description
  capacity: number;              // Max guests
  size: string;                  // Square meters
  bedrooms: number;
  bathrooms: number;
  heroImage: ImageMetadata;      // Hero banner image
  propertyImage: ImageMetadata;  // Overview section image
  rooms: Room[];                 // Room-by-room details
  features: string[];            // Key features list
  idealFor: string[];            // Target audience tags
}

export interface Room {
  name: string;
  icon: string;                  // Tabler icon name
  amenities: string[];
  images: ImageMetadata[];       // Multiple room photos
}
```

### Services & Amenities

```typescript
// src/data/services.ts
export interface Service {
  title: string;
  description: string;
  icon: string;                  // Tabler icon name
}

// Categories
- coreServices: Service[]        // All apartments
- premiumServices: Service[]     // Suite Deluxe only
- guestCardBenefits: Benefit[]   // Trentino Guest Card
- localRecommendations: LocalRecommendation[]
```

---

## Component Library

### Layout Components

**Header** (`Header.astro`)
- Sticky navigation with luxury styling
- Dropdown menu for apartment selection
- Gold hover states
- Responsive mobile menu

**Footer** (`Footer.astro`)
- Site links and contact info
- Google Maps embed
- Luxury typography and colors

### Apartment Page Components

**ApartmentHero** (`ApartmentHero.astro`)
- Full-screen hero with gradient overlay
- Breadcrumb navigation
- Playfair Display heading
- Scroll indicator

**PropertyOverview** (`PropertyOverview.astro`)
- Apartment description
- Key specifications (capacity, size, bedrooms, bathrooms)
- Large featured image
- Icon-based spec cards with luxury styling

**RoomShowcase** (`RoomShowcase.astro`)
- Grid layout of all rooms
- Hover effects with image zoom
- Amenity icons
- Room-specific photos

**PhotoGallery** (`PhotoGallery.astro`)
- Section heading with gold divider
- Image carousel integration
- Photo count display
- Fullscreen instructions

**ServicesGrid** (`ServicesGrid.astro`)
- Grid of service cards
- Icon backgrounds with hover effects
- Luxury beige to gold transitions

**Benefits** (`Benefits.astro`)
- Two-column layout
- Trentino Guest Card section (gold accents)
- Local recommendations (bronze accents)
- Dark luxury banner for CTA

**ApartmentCTA** (`ApartmentCTA.astro`)
- Dark charcoal/black gradient background
- Gold decorative elements
- Primary and secondary CTAs
- Trust indicators

### Home Page Components

**HomeHero** (`HomeHero.astro`)
- Large hero banner with overlay
- Luxury gold welcome badge
- Key features grid
- Primary CTAs

**ApartmentCard** (`ApartmentCard.astro`)
- Compact apartment preview
- Capacity badge
- Feature icons
- "Ideal for" tags
- Hover effects

**ApartmentsOverview** (`ApartmentsOverview.astro`)
- Gradient background section
- Comparison table
- Dark luxury banner with CTAs

### Shared Widgets

**ImageCarousel** (`ImageCarousel.astro`)
- Alpine.js powered carousel
- Touch gesture support
- Modal fullscreen view
- Autoplay functionality
- Lazy loading

**Testimonials** (`Testimonials.astro`)
- Customer review cards
- Luxury card styling
- Gold link accents

**CallToAction** (`CallToAction.astro`)
- Reusable CTA sections
- Luxury card with borders
- Flexible content slots

### UI Components

**Headline** (`Headline.astro`)
- Standardized section headings
- Gold tagline
- Playfair Display title
- Graphite subtitle

**ItemGrid** (`ItemGrid.astro`)
- Flexible grid layout
- Icon + title + description
- Gold default icons
- Customizable classes

**Button** (`Button.astro`)
- Four variants: primary, secondary, tertiary, link
- Maps to Tailwind button classes
- Icon support

---

## Styling Patterns

### Button System

Defined in `src/assets/styles/tailwind.css`:

```css
/* Primary Button - Gold background, black text */
.btn-primary {
  @apply btn font-medium bg-luxury-gold text-luxury-black
         border border-luxury-gold/20 hover:bg-luxury-bronze
         shadow-luxury-sm hover:shadow-luxury-md uppercase
         tracking-wide transition-all duration-400;
}

/* Secondary Button - Gold outline */
.btn-secondary {
  @apply btn font-medium bg-transparent text-luxury-gold
         border border-luxury-gold hover:bg-luxury-gold
         hover:text-luxury-black shadow-luxury-sm
         uppercase tracking-wide transition-all duration-400;
}

/* Ghost Button - Transparent on dark backgrounds */
.btn-ghost {
  @apply btn border border-white/30 text-white bg-transparent
         hover:bg-white/10 hover:border-white/50
         transition-all duration-400;
}

/* Tertiary Button - Minimal styling */
.btn-tertiary {
  @apply font-medium text-luxury-gold hover:text-luxury-bronze
         underline-offset-4 hover:underline transition-all duration-400;
}
```

### Common Component Patterns

**Section Structure:**
```astro
<section class="bg-luxury-white py-12 md:py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <!-- Section Heading -->
    <div class="text-center mb-8 md:mb-12">
      <h2 class="text-3xl md:text-4xl font-heading font-medium text-luxury-black mb-4">
        Section Title
      </h2>
      <div class="w-20 h-0.5 bg-luxury-gold mx-auto mb-4"></div>
      <p class="text-lg text-luxury-graphite max-w-2xl mx-auto">
        Subtitle text
      </p>
    </div>

    <!-- Content -->
  </div>
</section>
```

**Card Pattern:**
```astro
<div class="bg-luxury-white rounded shadow-luxury-md border border-luxury-sand
            hover:shadow-luxury-lg hover:border-luxury-gold transition-all duration-400">
  <!-- Card content -->
</div>
```

**Icon Container:**
```astro
<!-- Square icon background (luxury standard) -->
<div class="rounded bg-luxury-gold">
  <svg class="text-luxury-black">
    <!-- Icon -->
  </svg>
</div>
```

**Gradient Backgrounds:**
```astro
<!-- Light gradient -->
<section class="bg-gradient-to-br from-luxury-cream via-luxury-white to-luxury-beige">

<!-- Dark gradient -->
<section class="bg-gradient-to-br from-luxury-charcoal via-luxury-black to-luxury-charcoal">
```

### Hover States

**Navigation Links:**
```astro
<a class="hover:text-luxury-gold transition-all duration-400">
```

**Interactive Cards:**
```astro
<div class="hover:shadow-luxury-lg hover:border-luxury-gold
            hover:scale-105 transition-all duration-400">
```

**Buttons:**
```astro
<button class="hover:bg-luxury-gold hover:text-luxury-black
               hover:scale-110 transition-all duration-400">
```

---

## Performance Optimizations

### Image Optimization
- **WebP format** for all images
- **Responsive srcset** with multiple sizes (400w, 800w, 1200w, 1600w, 2400w)
- **Lazy loading** with native `loading="lazy"` and Intersection Observer
- **Astro Assets** for automatic optimization at build time

### JavaScript
- **Alpine.js** for lightweight interactivity (carousel, dropdowns)
- **Minimal React** usage (only CalendarForm)
- **Lazy initialization** for carousel with requestIdleCallback
- **Image preloading** only for visible carousel slides

### Build Output
- **Static Site Generation** (SSG) - all pages pre-rendered
- **Optimized HTML** - no runtime rendering
- **Page sizes**: 111K-140K per apartment page (excellent!)

### Best Practices
- **Content-visibility** CSS for images
- **Will-change** for animated elements
- **Transition duration** reduction for users who prefer reduced motion
- **Focus-visible** outlines for accessibility

---

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Design System Reference

### Quick Reference Card

| Element | Style |
|---------|-------|
| Border radius | `rounded` (4px) |
| Button hover | `hover:bg-luxury-gold hover:text-luxury-black` |
| Card shadow | `shadow-luxury-md` |
| Divider line | `h-0.5 bg-luxury-gold` |
| Focus outline | `focus:ring-2 focus:ring-luxury-gold` |
| Heading font | `font-heading` (Playfair Display) |
| Heading weight | `font-medium` (500) |
| Icon background | `rounded bg-luxury-gold` |
| Label style | `uppercase tracking-wide text-sm` |
| Link hover | `hover:text-luxury-gold transition-all duration-400` |
| Section padding | `py-12 md:py-16` |
| Transition | `duration-400` (400ms) |

### Color Usage Guide

| Use Case | Color |
|----------|-------|
| Primary accent, CTAs | `luxury-gold` |
| Hover states, links | `luxury-gold` |
| Secondary accent | `luxury-bronze` |
| Page backgrounds | `luxury-white`, `luxury-cream` |
| Card backgrounds | `luxury-white`, `luxury-beige` |
| Borders, dividers | `luxury-sand` |
| Headings | `luxury-black` |
| Body text | `luxury-graphite` |
| Dark sections | `luxury-charcoal`, `luxury-black` |

---

## Deployment

The site is configured for static site deployment. Build output goes to `dist/` directory.

**Supported platforms:**
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

**Build configuration:**
```javascript
// astro.config.mjs
export default defineConfig({
  output: 'static',
  // ... other config
});
```

---

## Future Enhancements

Potential areas for expansion:
- Multi-language support (Italian/English)
- Online booking integration
- Availability calendar
- Guest reviews system
- Blog/news section
- Virtual tour integration

---

## Credits

- **Framework**: Astro 4.15.5
- **Base Template**: AstroWind (heavily customized)
- **Design**: Custom luxury design system
- **Fonts**: Playfair Display, Inter Variable
- **Icons**: Tabler Icons
- **Images**: Casa Negrano photography collection

---

## License

See LICENSE.md for details.

---

**Last Updated**: November 2025
