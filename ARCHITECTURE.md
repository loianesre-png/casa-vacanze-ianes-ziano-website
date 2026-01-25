# Property Rental Website Template - Architecture Documentation

## Overview

This is a property rental website template for vacation rentals and apartments. Built with **Astro 4.15.5**, **Tailwind CSS 3.4.11**, and a customizable luxury design system, the template provides a refined, minimal aesthetic that emphasizes elegance.

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
- **SVG/WebP format** - All images optimized
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
property-rental-website-template/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── property-1/      # Property 1 images
│   │   │   ├── property-2/      # Property 2 images
│   │   │   └── property-3/      # Property 3 images
│   │   └── styles/
│   │       └── tailwind.css     # Button system & utilities
│   │
│   ├── components/
│   │   ├── appartamenti/        # Property-specific components
│   │   │   ├── ApartmentHero.astro
│   │   │   ├── PropertyOverview.astro
│   │   │   ├── RoomShowcase.astro
│   │   │   ├── PhotoGallery.astro
│   │   │   ├── ServicesGrid.astro
│   │   │   ├── Benefits.astro
│   │   │   └── ApartmentCTA.astro
│   │   │
│   │   ├── home/                # Home page components
│   │   │   ├── HomeHero.astro
│   │   │   ├── ApartmentCard.astro
│   │   │   └── ApartmentsOverview.astro
│   │   │
│   │   ├── widgets/             # Reusable widgets
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── ImageCarousel.astro
│   │   │   ├── CalendarForm.jsx
│   │   │   ├── Testimonials.astro
│   │   │   └── CallToAction.astro
│   │   │
│   │   └── ui/                  # Base UI components
│   │       ├── Headline.astro
│   │       ├── Button.astro
│   │       └── ...
│   │
│   ├── config/                  # Configuration files
│   │   ├── site.config.ts       # Site identity, contact, SEO
│   │   ├── theme.config.ts      # Theme customization
│   │   └── schema/              # TypeScript interfaces
│   │
│   ├── content/
│   │   ├── dictionary/          # UI text content
│   │   │   └── it/              # Language folder
│   │   │       ├── common.yaml
│   │   │       ├── homepage.yaml
│   │   │       └── ...
│   │   └── properties/          # Property YAML files
│   │       ├── property-1.yaml
│   │       ├── property-2.yaml
│   │       └── property-3.yaml
│   │
│   ├── data/
│   │   └── apartments.ts        # Legacy apartment data (fallback)
│   │
│   ├── layouts/
│   │   ├── Layout.astro         # Base HTML layout
│   │   └── PageLayout.astro     # Page layout with header/footer
│   │
│   ├── pages/
│   │   ├── index.astro          # Home page
│   │   ├── contact.astro        # Contact page
│   │   ├── 404.astro            # Error page
│   │   └── properties/
│   │       └── [slug].astro     # Dynamic property pages
│   │
│   ├── utils/
│   │   └── properties.ts        # Property loader utility
│   │
│   └── navigation.ts            # Navigation configuration
│
├── docs/                        # Documentation
│   ├── configuration/
│   │   ├── properties.md
│   │   ├── site-config.md
│   │   └── theme.md
│   └── getting-started/
│       └── quick-start.md
│
├── tailwind.config.js           # Tailwind configuration
└── astro.config.ts              # Astro configuration
```

---

## Key Features

### 1. Multi-Page Structure

**Home Page** (`/`)
- Hero section with property showcase
- Overview of all properties
- Property comparison table
- About section
- Testimonials
- Call-to-action

**Property Pages** (`/properties/*`)
Each property has a dedicated page with:
- Hero with breadcrumb navigation
- Property overview with specs
- Room-by-room showcase
- Photo gallery carousel
- Services grid
- Testimonials
- Benefits section
- Call-to-action

**Contact Page** (`/contact`)
- Contact form with calendar integration
- Contact information cards
- Maps embed

### 2. Photo Gallery Carousel

A luxury-styled, full-featured image carousel with:

**Features:**
- Touch/swipe support for mobile
- Keyboard navigation (arrow keys)
- Fullscreen modal with high-res images
- Autoplay mode
- Lazy loading with intersection observer
- Responsive images

**Luxury Styling:**
- Gold navigation buttons with charcoal backgrounds
- Minimal rounded borders
- Luxury shadows and smooth 400ms transitions
- Gold progress indicator
- Elegant loading placeholders

### 3. Interactive Calendar Form

React-based booking inquiry form with:
- Date picker for check-in/check-out
- Guest count input
- Special requests textarea
- Webhook integration for form submission

---

## Data Structure

### Properties

Properties are configured in YAML files (`src/content/properties/*.yaml`):

```yaml
id: property-1
slug: property-1
name: "Property Name"
subtitle: "Property tagline"
description: "Full description..."

capacity:
  guests: 4
  bedrooms: "2 bedrooms"
  bathrooms: "1 bathroom"

images:
  hero: "hero.svg"
  thumbnail: "thumbnail.svg"
  gallery: "property-1"

rooms:
  - name: "Bedroom"
    description: "Room description..."
    image: "bedroom.svg"
    amenities:
      - "Double bed"
      - "Wardrobe"

features:
  - "High-speed WiFi"
  - "Parking included"
```

### Legacy TypeScript Format (fallback)

```typescript
// src/data/apartments.ts
export interface Apartment {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  capacity: number;
  size: number;
  bedrooms: string;
  bathrooms: string;
  heroImage: string;
  propertyImage: string;
  rooms: Room[];
  features: string[];
  idealFor: string[];
}
```

---

## Component Library

### Layout Components

**Header** (`Header.astro`)
- Sticky navigation with luxury styling
- Dropdown menu for property selection
- Gold hover states
- Responsive mobile menu

**Footer** (`Footer.astro`)
- Site links and contact info
- Maps embed
- Luxury typography and colors

### Property Page Components

**ApartmentHero** - Full-screen hero with gradient overlay
**PropertyOverview** - Property description and specs
**RoomShowcase** - Grid layout of all rooms
**PhotoGallery** - Image carousel integration
**ServicesGrid** - Grid of service cards
**Benefits** - Two-column layout with benefits
**ApartmentCTA** - Call-to-action section

### UI Components

**Headline** - Standardized section headings
**ItemGrid** - Flexible grid layout
**Button** - Four variants: primary, secondary, tertiary, link

---

## Styling Patterns

### Button System

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
```

### Common Component Patterns

**Section Structure:**
```astro
<section class="bg-luxury-white py-12 md:py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <!-- Section Heading -->
    <div class="text-center mb-8 md:mb-12">
      <h2 class="text-3xl md:text-4xl font-heading font-medium">
        Section Title
      </h2>
      <div class="w-20 h-0.5 bg-luxury-gold mx-auto mb-4"></div>
    </div>
    <!-- Content -->
  </div>
</section>
```

---

## Performance Optimizations

### Image Optimization
- **WebP/SVG format** for all images
- **Responsive srcset** with multiple sizes
- **Lazy loading** with native `loading="lazy"`
- **Astro Assets** for automatic optimization at build time

### JavaScript
- **Alpine.js** for lightweight interactivity
- **Minimal React** usage (only CalendarForm)
- **Lazy initialization** for carousel

### Build Output
- **Static Site Generation** (SSG) - all pages pre-rendered
- **Optimized HTML** - no runtime rendering

---

## Deployment

The site generates static HTML and can be deployed anywhere:

- **Netlify**: Connect your Git repo for automatic deploys
- **Vercel**: Similar to Netlify
- **GitHub Pages**: Use `gh-pages` branch
- **Any server**: Upload the `dist/` folder

---

## Customization

1. Edit `src/config/site.config.ts` for site identity
2. Add/edit property YAML files in `src/content/properties/`
3. Replace placeholder images in `src/assets/images/`
4. Customize theme in `src/config/theme.config.ts`
5. Update text content in `src/content/dictionary/`

---

**Last Updated**: November 2025
