# Property Rental Website Template - Development Plan

> **Document Version:** 1.0
> **Created:** 2024
> **Status:** Planning Phase
> **Original Project:** Casa Negrano (casanegrano.it)

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Current State Analysis](#2-current-state-analysis)
3. [Target State](#3-target-state)
4. [Development Phases](#4-development-phases)
5. [Technical Specifications](#5-technical-specifications)
6. [File Structure](#6-file-structure)
7. [Configuration Schema](#7-configuration-schema)
8. [Implementation Checklist](#8-implementation-checklist)
9. [Future Considerations](#9-future-considerations)

---

## 1. Project Overview

### 1.1 Goal

Transform the Casa Negrano vacation rental website into a **reusable, configurable template** that allows property owners to create their own rental websites by modifying configuration files and content, with minimal or no code changes required.

### 1.2 Target Users

| User Type | Technical Level | Primary Interaction |
|-----------|-----------------|---------------------|
| Property Owners | Non-technical | Edit YAML/JSON config files, replace images |
| Web Developers | Technical | Full customization, component modifications |
| Agencies | Mixed | Deploy for multiple clients with different configs |

### 1.3 Scope

**In Scope (v1.0):**
- Single or multiple apartment/property support
- Centralized configuration system
- Content abstraction (text, images, data)
- Theming system (colors, typography)
- Comprehensive documentation
- i18n-ready architecture (single language initially)

**Out of Scope (v1.0):**
- Booking platform integrations
- Multi-language UI (prepared for, not implemented)
- CMS integration
- User authentication

### 1.4 Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Astro | 4.15.5 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 3.4.11 |
| UI Components | React | 18.x |
| Interactivity | Alpine.js | 3.14.3 |
| Build Output | Static Site (SSG) | - |

---

## 2. Current State Analysis

### 2.1 What's Already Template-Ready

| Feature | Status | Notes |
|---------|--------|-------|
| Component Architecture | ✅ Good | 70+ reusable Astro components |
| Data Separation | ✅ Good | `apartments.ts`, `services.ts`, `reviews.ts` |
| Design System | ✅ Good | Tailwind with HSL color variables |
| Image Optimization | ✅ Good | Sharp integration, responsive images |
| TypeScript Types | ✅ Good | Interfaces for apartments, reviews, services |
| Performance | ✅ Good | Static output, minimal JS, lazy loading |

### 2.2 What Needs Refactoring

| Issue | Location | Impact |
|-------|----------|--------|
| Hardcoded site name | 10+ files | High |
| Hardcoded contact info | `services.ts`, pages, components | High |
| Hardcoded Italian text | All components | High |
| Fixed webhook URL | `CalendarForm.jsx` | Medium |
| Hardcoded image paths | `apartments.ts` | Medium |
| Hardcoded navigation | `navigation.ts` | Medium |
| Hardcoded legal info | Footer, pages | Medium |
| Fixed color scheme | `tailwind.config.js`, `globals.css` | Low |

### 2.3 Hardcoded Content Inventory

#### Site Identity (scattered across codebase)
- Site name: "Casa Negrano"
- Domain: casanegrano.it
- Email: casanegrano@gmail.com
- Phone: (in services.ts)
- Address: "Località Negrano 13, Trento, 38123, Italy"
- CIN codes: IT-TN-022205-L0C9QHIT, etc.

#### UI Text (Italian, hardcoded in components)
- Hero headlines and subtitles
- Section titles ("I nostri appartamenti", "Comfort e servizi", etc.)
- Button labels ("Prenota ora", "Contattaci", etc.)
- Form labels and validation messages
- Footer text and copyright

#### Integration URLs
- Booking webhook: `https://n8n.casanegrano.it/webhook/[UUID]`
- Google Analytics: `G-2DYB43PT74`

---

## 3. Target State

### 3.1 Configuration-Driven Architecture

```
User edits config files → Build system reads config → Site generates with custom content
```

### 3.2 Customization Layers

```
┌─────────────────────────────────────────────────────┐
│  Layer 1: Site Configuration (YAML)                 │
│  - Site identity, contact info, legal details       │
│  - No code knowledge required                       │
├─────────────────────────────────────────────────────┤
│  Layer 2: Content Files (YAML/Markdown)             │
│  - Property data, amenities, reviews                │
│  - Section text and descriptions                    │
│  - Basic formatting knowledge helpful               │
├─────────────────────────────────────────────────────┤
│  Layer 3: Theme Configuration (YAML)                │
│  - Colors, typography, spacing                      │
│  - Can use presets or customize                     │
├─────────────────────────────────────────────────────┤
│  Layer 4: Component Customization (Code)            │
│  - Layout modifications                             │
│  - New features                                     │
│  - Requires developer skills                        │
└─────────────────────────────────────────────────────┘
```

### 3.3 Key Principles

1. **Configuration over Code** - Users should be able to customize 90% of the site without touching code
2. **Sensible Defaults** - Template works out-of-the-box with example content
3. **Progressive Complexity** - Simple things simple, complex things possible
4. **i18n-Ready** - Structure supports future multi-language without refactoring
5. **Type Safety** - All configuration validated with TypeScript schemas

---

## 4. Development Phases

### Phase 1: Configuration Centralization

**Priority:** 🔴 Critical
**Effort:** Medium
**Dependencies:** None

#### Objectives
- Create a single source of truth for all site configuration
- Eliminate scattered hardcoded values
- Establish configuration schema with TypeScript validation

#### Tasks

- [ ] **1.1** Create `/src/config/` directory structure
- [ ] **1.2** Design and implement site configuration schema (`site.config.ts`)
- [ ] **1.3** Create TypeScript interfaces for all config sections
- [ ] **1.4** Migrate site identity from hardcoded values to config
- [ ] **1.5** Migrate contact information to config
- [ ] **1.6** Migrate legal/compliance info to config
- [ ] **1.7** Migrate integration URLs (webhooks, analytics) to config
- [ ] **1.8** Create config validation utility
- [ ] **1.9** Update all components to read from centralized config
- [ ] **1.10** Create example configuration file with documentation

#### Deliverables
- `src/config/site.config.ts` - Main configuration file
- `src/config/schema/` - TypeScript interfaces
- `src/utils/config.ts` - Config loader and validator
- Updated components using config values

---

### Phase 2: Content Abstraction

**Priority:** 🔴 Critical
**Effort:** High
**Dependencies:** Phase 1

#### Objectives
- Extract all hardcoded UI text into content files
- Create i18n-ready content structure
- Make all user-facing text configurable

#### Tasks

- [ ] **2.1** Design content directory structure (i18n-ready)
- [ ] **2.2** Create content schema for each content type
- [ ] **2.3** Extract homepage content to YAML files
- [ ] **2.4** Extract navigation content (header, footer)
- [ ] **2.5** Extract apartment page content
- [ ] **2.6** Extract contact page content
- [ ] **2.7** Extract common UI text (buttons, labels, messages)
- [ ] **2.8** Create content loader utility
- [ ] **2.9** Refactor `HomeHero.astro` to use content files
- [ ] **2.10** Refactor `ApartmentsOverview.astro` to use content files
- [ ] **2.11** Refactor `CalendarForm.jsx` to use content files
- [ ] **2.12** Refactor navigation components
- [ ] **2.13** Refactor footer component
- [ ] **2.14** Update all remaining components
- [ ] **2.15** Create fallback system for missing content

#### Deliverables
- `src/content/dictionary/` - Content files organized by section
- `src/utils/content.ts` - Content loader utility
- All components refactored to use content system

#### Content Structure (i18n-Ready)
```
src/content/dictionary/
├── it/                      # Default language (Italian)
│   ├── common.yaml          # Shared UI text
│   ├── homepage.yaml        # Homepage sections
│   ├── navigation.yaml      # Header & footer
│   ├── apartments.yaml      # Property-related text
│   ├── contact.yaml         # Contact page
│   └── forms.yaml           # Form labels & messages
└── _schema.ts               # Content type definitions
```

---

### Phase 3: Property Data Schema

**Priority:** 🔴 Critical
**Effort:** Medium
**Dependencies:** Phase 1

#### Objectives
- Generalize property data structure
- Support single or multiple properties
- Make property configuration intuitive for non-developers

#### Tasks

- [ ] **3.1** Design flexible property schema
- [ ] **3.2** Create TypeScript interfaces for property types
- [ ] **3.3** Implement property data validation
- [ ] **3.4** Migrate current `apartments.ts` to new schema
- [ ] **3.5** Create property content directory structure
- [ ] **3.6** Implement dynamic image path resolution
- [ ] **3.7** Add support for single-property mode
- [ ] **3.8** Add support for multi-property mode
- [ ] **3.9** Create property page generator
- [ ] **3.10** Update property-related components
- [ ] **3.11** Create example property configurations

#### Deliverables
- `src/config/schema/property.ts` - Property type definitions
- `src/content/properties/` - Property data files
- Dynamic property page generation
- Example property configurations

#### Property Schema Design
```typescript
interface Property {
  // Identity
  id: string;
  slug: string;
  name: string;
  subtitle?: string;

  // Details
  description: string;
  shortDescription?: string;
  capacity: number;
  size: number;
  sizeUnit: 'sqm' | 'sqft';

  // Rooms
  bedrooms: number | string;
  bathrooms: number | string;
  rooms: Room[];

  // Media
  images: {
    hero: string;
    thumbnail: string;
    gallery: string[];  // or folder path
  };

  // Features
  features: string[];
  amenities: string[];
  idealFor: string[];

  // Pricing (optional)
  pricing?: PricingConfig;

  // SEO
  seo?: {
    title?: string;
    description?: string;
  };
}
```

---

### Phase 4: Theming System

**Priority:** 🟡 Medium
**Effort:** Medium
**Dependencies:** Phase 1

#### Objectives
- Make visual identity fully customizable via configuration
- Create theme presets for quick setup
- Maintain design consistency

#### Tasks

- [ ] **4.1** Design theme configuration schema
- [ ] **4.2** Extract current theme values to config
- [ ] **4.3** Create CSS variable injection system
- [ ] **4.4** Implement theme preset system
- [ ] **4.5** Create "luxury" preset (current theme)
- [ ] **4.6** Create "modern" preset
- [ ] **4.7** Create "rustic" preset
- [ ] **4.8** Update Tailwind config to use theme variables
- [ ] **4.9** Update `globals.css` for dynamic theming
- [ ] **4.10** Create theme customization documentation

#### Deliverables
- `src/config/theme.config.ts` - Theme configuration
- `src/themes/` - Theme preset files
- Dynamic CSS variable system
- Theme documentation

#### Theme Configuration Design
```yaml
# theme.config.yaml
preset: luxury  # or: modern, rustic, custom

# Override specific values (optional)
colors:
  primary: "#c9a961"      # Main brand color
  secondary: "#f5f2ed"    # Background accent
  accent: "#a98b5f"       # Highlight color

typography:
  headingFont: "Playfair Display"
  bodyFont: "Inter"

style:
  borderRadius: "4px"     # or: rounded, sharp
  shadowIntensity: medium # light, medium, strong
```

---

### Phase 5: Documentation

**Priority:** 🔴 Critical
**Effort:** Medium
**Dependencies:** Phases 1-4

#### Objectives
- Create comprehensive documentation for all user types
- Provide step-by-step setup guides
- Include examples and troubleshooting

#### Tasks

- [ ] **5.1** Create documentation structure
- [ ] **5.2** Write Quick Start guide
- [ ] **5.3** Write Configuration Reference
- [ ] **5.4** Write Content Customization guide
- [ ] **5.5** Write Property Setup guide
- [ ] **5.6** Write Theming guide
- [ ] **5.7** Write Image Management guide
- [ ] **5.8** Write Deployment guides (Netlify, Vercel, etc.)
- [ ] **5.9** Create example configurations
- [ ] **5.10** Write Troubleshooting guide
- [ ] **5.11** Create video tutorials (optional)
- [ ] **5.12** Write Developer Customization guide

#### Deliverables
- `docs/` - Documentation directory
- `README.md` - Updated project readme
- `SETUP.md` - Quick setup guide
- Example configuration files

#### Documentation Structure
```
docs/
├── getting-started/
│   ├── quick-start.md
│   ├── requirements.md
│   └── installation.md
├── configuration/
│   ├── site-config.md
│   ├── properties.md
│   ├── content.md
│   └── theme.md
├── customization/
│   ├── images.md
│   ├── components.md
│   └── advanced.md
├── deployment/
│   ├── netlify.md
│   ├── vercel.md
│   └── self-hosted.md
├── examples/
│   ├── single-property.md
│   └── multi-property.md
└── troubleshooting.md
```

---

### Phase 6: Integration Flexibility (Future)

**Priority:** 🟢 Low (Future Enhancement)
**Effort:** Medium
**Dependencies:** Phases 1-4

> **Note:** This phase is planned for future versions. The architecture from Phases 1-4 will support these integrations.

#### Potential Integrations
- Booking.com widget
- Airbnb calendar sync
- Custom booking forms with various backends
- Payment processing
- Email service providers

---

### Phase 7: Internationalization (Future)

**Priority:** 🟢 Low (Future Enhancement)
**Effort:** High
**Dependencies:** Phase 2 (i18n-ready structure)

> **Note:** Phase 2 creates an i18n-ready structure. This phase adds actual multi-language support.

#### Future Tasks
- Install Astro i18n integration
- Create translation files for additional languages
- Implement language switcher component
- Add locale-based routing
- Create translation management workflow

---

## 5. Technical Specifications

### 5.1 Configuration Loading

```typescript
// src/utils/config.ts

import siteConfig from '@/config/site.config';
import themeConfig from '@/config/theme.config';

// Validated, typed configuration access
export const config = {
  site: validateSiteConfig(siteConfig),
  theme: validateThemeConfig(themeConfig),
};

// Helper functions
export const getSiteName = () => config.site.identity.name;
export const getContactEmail = () => config.site.contact.email;
// etc.
```

### 5.2 Content Loading

```typescript
// src/utils/content.ts

const DEFAULT_LOCALE = 'it';

export async function getContent(section: string, locale = DEFAULT_LOCALE) {
  try {
    const content = await import(`@/content/dictionary/${locale}/${section}.yaml`);
    return content.default;
  } catch {
    // Fallback to default locale
    const fallback = await import(`@/content/dictionary/${DEFAULT_LOCALE}/${section}.yaml`);
    return fallback.default;
  }
}

// Usage in components
const homepage = await getContent('homepage');
const { hero_title, hero_subtitle } = homepage;
```

### 5.3 Property Loading

```typescript
// src/utils/properties.ts

export async function getProperties(): Promise<Property[]> {
  const propertyFiles = await Astro.glob('@/content/properties/*.yaml');
  return propertyFiles.map(file => validateProperty(file.default));
}

export async function getPropertyBySlug(slug: string): Promise<Property | null> {
  const properties = await getProperties();
  return properties.find(p => p.slug === slug) || null;
}
```

### 5.4 Theme System

```typescript
// src/utils/theme.ts

export function generateCSSVariables(theme: ThemeConfig): string {
  return `
    :root {
      --color-primary: ${theme.colors.primary};
      --color-secondary: ${theme.colors.secondary};
      --color-accent: ${theme.colors.accent};
      --font-heading: ${theme.typography.headingFont};
      --font-body: ${theme.typography.bodyFont};
      --radius: ${theme.style.borderRadius};
    }
  `;
}
```

---

## 6. File Structure

### 6.1 New Directory Structure

```
property-rental-website-template/
├── src/
│   ├── config/                    # [NEW] Configuration files
│   │   ├── site.config.ts         # Main site configuration
│   │   ├── theme.config.ts        # Theme/design configuration
│   │   └── schema/                # TypeScript interfaces
│   │       ├── site.ts
│   │       ├── theme.ts
│   │       ├── property.ts
│   │       └── content.ts
│   │
│   ├── content/
│   │   ├── dictionary/            # [NEW] UI text content
│   │   │   └── it/                # Italian (default)
│   │   │       ├── common.yaml
│   │   │       ├── homepage.yaml
│   │   │       ├── navigation.yaml
│   │   │       ├── apartments.yaml
│   │   │       ├── contact.yaml
│   │   │       └── forms.yaml
│   │   │
│   │   └── properties/            # [NEW] Property data
│   │       ├── _example.yaml      # Example property template
│   │       ├── bilocale.yaml
│   │       ├── trilocale.yaml
│   │       └── suite-deluxe.yaml
│   │
│   ├── themes/                    # [NEW] Theme presets
│   │   ├── luxury.css
│   │   ├── modern.css
│   │   └── rustic.css
│   │
│   ├── utils/
│   │   ├── config.ts              # [NEW] Config loader
│   │   ├── content.ts             # [NEW] Content loader
│   │   ├── properties.ts          # [NEW] Property loader
│   │   └── theme.ts               # [NEW] Theme utilities
│   │
│   ├── components/                # Existing (to be updated)
│   ├── layouts/                   # Existing
│   ├── pages/                     # Existing (to be updated)
│   ├── assets/                    # Existing
│   └── data/                      # Existing → migrate to content/
│
├── docs/                          # [NEW] Documentation
│   ├── getting-started/
│   ├── configuration/
│   ├── customization/
│   ├── deployment/
│   └── examples/
│
├── examples/                      # [NEW] Example configurations
│   ├── single-property/
│   └── multi-property/
│
├── DEVELOPMENT_PLAN.md            # This document
├── README.md                      # Updated readme
├── SETUP.md                       # [NEW] Quick setup guide
└── ...
```

### 6.2 Files to Deprecate/Migrate

| Current File | Action | New Location |
|--------------|--------|--------------|
| `src/data/apartments.ts` | Migrate | `src/content/properties/*.yaml` |
| `src/data/services.ts` | Migrate | `src/config/site.config.ts` + content files |
| `src/data/reviews.ts` | Migrate | `src/content/reviews/` |
| `src/navigation.ts` | Migrate | `src/content/dictionary/*/navigation.yaml` |
| `src/config.yaml` | Extend | Keep + add new config files |

---

## 7. Configuration Schema

### 7.1 Site Configuration (`site.config.ts`)

```typescript
export interface SiteConfig {
  // Site Identity
  identity: {
    name: string;                    // "Villa Serena"
    tagline?: string;                // "Your home away from home"
    logo?: {
      src: string;
      alt: string;
      width?: number;
      height?: number;
    };
  };

  // Contact Information
  contact: {
    email: string;
    phone?: string;
    whatsapp?: string;
    address: {
      street: string;
      city: string;
      postalCode: string;
      country: string;
      coordinates?: {
        lat: number;
        lng: number;
      };
    };
  };

  // Social Media
  social?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    tripadvisor?: string;
    airbnb?: string;
    booking?: string;
  };

  // Legal & Compliance
  legal?: {
    companyName?: string;
    vatNumber?: string;
    registrationCodes?: string[];    // CIN codes, etc.
    privacyPolicyUrl?: string;
    termsUrl?: string;
  };

  // Integrations
  integrations: {
    // Contact form
    contactForm?: {
      provider: 'webhook' | 'email' | 'none';
      webhookUrl?: string;
      emailTo?: string;
    };

    // Analytics
    analytics?: {
      googleAnalyticsId?: string;
      plausibleDomain?: string;
    };

    // Maps
    maps?: {
      provider: 'google' | 'openstreetmap';
      apiKey?: string;
    };
  };

  // SEO & Metadata
  seo: {
    defaultTitle: string;
    titleTemplate: string;           // "%s | Villa Serena"
    description: string;
    language: string;                // "it"
    robots: {
      index: boolean;
      follow: boolean;
    };
    openGraph?: {
      image?: string;
      type?: string;
    };
  };
}
```

### 7.2 Theme Configuration (`theme.config.ts`)

```typescript
export interface ThemeConfig {
  // Use a preset or customize
  preset?: 'luxury' | 'modern' | 'rustic' | 'coastal';

  // Color palette (HSL or hex)
  colors: {
    primary: string;       // Main brand color
    secondary: string;     // Background/surface color
    accent: string;        // Highlight/CTA color
    muted: string;         // Subtle backgrounds
    background: string;    // Page background
    foreground: string;    // Main text color

    // Optional extended palette
    success?: string;
    warning?: string;
    error?: string;
  };

  // Typography
  typography: {
    headingFont: string;   // "Playfair Display"
    bodyFont: string;      // "Inter"
    monoFont?: string;     // For code blocks
  };

  // Spacing & Shape
  style: {
    borderRadius: 'none' | 'small' | 'medium' | 'large';
    shadowIntensity: 'none' | 'light' | 'medium' | 'strong';
    transitionSpeed: 'fast' | 'normal' | 'slow';
  };
}
```

### 7.3 Property Configuration

```typescript
export interface PropertyConfig {
  id: string;
  slug: string;
  published: boolean;

  // Basic Info
  name: string;
  subtitle?: string;
  description: string;
  shortDescription?: string;

  // Capacity & Size
  capacity: {
    guests: number;
    bedrooms: number | string;
    bathrooms: number | string;
    beds?: {
      double?: number;
      single?: number;
      sofa?: number;
    };
  };

  size: {
    value: number;
    unit: 'sqm' | 'sqft';
  };

  // Rooms (detailed breakdown)
  rooms: Array<{
    name: string;
    description: string;
    image?: string;
    amenities?: string[];
  }>;

  // Media
  images: {
    hero: string;
    thumbnail: string;
    gallery: string | string[];  // Folder path or array of paths
  };

  // Features & Amenities
  features: string[];
  amenities: string[];
  idealFor?: string[];

  // Optional: Pricing Display
  pricing?: {
    enabled: boolean;
    currency: string;
    periods?: Array<{
      name: string;
      dates: string;
      price: number;
    }>;
    note?: string;
  };

  // SEO Override
  seo?: {
    title?: string;
    description?: string;
    image?: string;
  };
}
```

---

## 8. Implementation Checklist

### Phase 1: Configuration Centralization
- [ ] Create `src/config/` directory
- [ ] Create `src/config/schema/site.ts` with interfaces
- [ ] Create `src/config/site.config.ts` with default values
- [ ] Create `src/utils/config.ts` loader utility
- [ ] Update `src/components/Logo.astro` to use config
- [ ] Update `src/components/widgets/Header.astro` to use config
- [ ] Update `src/components/widgets/Footer.astro` to use config
- [ ] Update `src/components/widgets/CalendarForm.jsx` webhook URL
- [ ] Update `src/components/common/Metadata.astro` to use config
- [ ] Update `src/pages/contatti.astro` to use config
- [ ] Test all config-driven values render correctly

### Phase 2: Content Abstraction
- [ ] Create `src/content/dictionary/it/` directory
- [ ] Create content schema definitions
- [ ] Create `common.yaml` with shared UI text
- [ ] Create `homepage.yaml` with homepage content
- [ ] Create `navigation.yaml` with nav content
- [ ] Create `apartments.yaml` with property labels
- [ ] Create `contact.yaml` with contact page content
- [ ] Create `forms.yaml` with form labels
- [ ] Create `src/utils/content.ts` loader utility
- [ ] Refactor `HomeHero.astro`
- [ ] Refactor `ApartmentsOverview.astro`
- [ ] Refactor `CalendarForm.jsx`
- [ ] Refactor `Header.astro` navigation
- [ ] Refactor `Footer.astro`
- [ ] Refactor all remaining hardcoded text

### Phase 3: Property Data Schema
- [ ] Create `src/config/schema/property.ts`
- [ ] Create `src/content/properties/` directory
- [ ] Create `src/utils/properties.ts` loader
- [ ] Migrate `bilocale` data to YAML
- [ ] Migrate `trilocale` data to YAML
- [ ] Migrate `suite-deluxe` data to YAML
- [ ] Update property page generation
- [ ] Update `ApartmentCard.astro`
- [ ] Update `ApartmentHero.astro`
- [ ] Update `PropertyOverview.astro`
- [ ] Update `RoomShowcase.astro`
- [ ] Create single-property mode support
- [ ] Test with different property counts

### Phase 4: Theming System
- [ ] Create `src/config/schema/theme.ts`
- [ ] Create `src/config/theme.config.ts`
- [ ] Create `src/utils/theme.ts` utilities
- [ ] Create luxury theme preset
- [ ] Create modern theme preset
- [ ] Create rustic theme preset
- [ ] Update `globals.css` for dynamic variables
- [ ] Update `tailwind.config.js` integration
- [ ] Test theme switching

### Phase 5: Documentation
- [ ] Create `docs/` directory structure
- [ ] Write Quick Start guide
- [ ] Write Site Configuration reference
- [ ] Write Property Configuration guide
- [ ] Write Content Customization guide
- [ ] Write Theme Customization guide
- [ ] Write Image Management guide
- [ ] Write Netlify deployment guide
- [ ] Write Vercel deployment guide
- [ ] Create example: single property
- [ ] Create example: multi property
- [ ] Update main README.md
- [ ] Create SETUP.md quick reference

---

## 9. Future Considerations

### 9.1 i18n Implementation (When Ready)

The content structure from Phase 2 is designed for easy i18n addition:

```
src/content/dictionary/
├── it/           # Current (default)
├── en/           # Add later
├── de/           # Add later
└── fr/           # Add later
```

**Steps to add i18n:**
1. Install `astro-i18n-aut` or similar
2. Copy `it/` folder to new language folder
3. Translate content files
4. Add language switcher component
5. Configure locale routing

### 9.2 Potential Future Features

| Feature | Complexity | Value |
|---------|------------|-------|
| Booking.com widget integration | Low | High |
| Airbnb calendar sync | Medium | High |
| Online payment/deposits | High | Medium |
| Guest review submission | Medium | Medium |
| Availability calendar | Medium | High |
| Newsletter signup | Low | Low |
| CMS integration (Decap/Contentful) | High | Medium |

### 9.3 Maintenance Considerations

- Keep Astro and dependencies updated
- Document any breaking changes in config schema
- Maintain backward compatibility when possible
- Version configuration schemas

---

## Appendix A: Migration from Casa Negrano

When converting an existing Casa Negrano installation to the template:

1. **Backup** existing content and images
2. **Create** new config files based on schema
3. **Migrate** text content to dictionary files
4. **Migrate** property data to YAML files
5. **Update** image references
6. **Test** thoroughly before deployment

---

## Appendix B: Quick Reference

### Key Files to Edit (Non-Technical Users)

| What to Change | File to Edit |
|----------------|--------------|
| Site name, contact info | `src/config/site.config.ts` |
| Colors, fonts | `src/config/theme.config.ts` |
| Homepage text | `src/content/dictionary/it/homepage.yaml` |
| Navigation menu | `src/content/dictionary/it/navigation.yaml` |
| Property details | `src/content/properties/[name].yaml` |
| Property images | `src/assets/images/[property-slug]/` |

### Common Commands

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Build for production
npm run preview      # Preview production build

# Quality
npm run check        # TypeScript check
npm run fix          # Fix linting issues
```

---

*End of Development Plan*
