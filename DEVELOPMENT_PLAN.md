# Casa Negrano Website Redesign - Development Plan

## 📋 Table of Contents
1. [Current Structure Analysis](#current-structure-analysis)
2. [Target Structure](#target-structure)
3. [Technical Architecture](#technical-architecture)
4. [Detailed Implementation Steps](#detailed-implementation-steps)
5. [Content Structure](#content-structure)
6. [Design System Guidelines](#design-system-guidelines)

---

## 🔍 Current Structure Analysis

### Technology Stack
- **Framework**: Astro 4.15.5
- **Styling**: Tailwind CSS 3.4.11
- **Components**: React + Alpine.js for interactive elements
- **Image Optimization**: Astro's built-in image optimization with WebP format
- **Icons**: Tabler Icons via astro-icon

### Current Page Structure
```
/                          → Landing page (index.astro → home/personal.astro)
/contact                   → Contact page
/privacy, /terms, /cookies → Legal pages
```

### Current Component Architecture
```
src/
├── pages/
│   ├── index.astro (redirects to home/personal.astro)
│   ├── home/
│   │   └── personal.astro (main landing page)
│   └── contact.astro
├── components/
│   ├── home/
│   │   ├── bilocale.astro (2-person apartment component)
│   │   ├── trilocale.astro (4-person apartment component)
│   │   ├── suiteDelux.astro (8-person apartment component)
│   │   └── intro.astro
│   └── widgets/
│       ├── HeroCasaNegrano.astro
│       ├── Features3.astro (Comfort/services grid)
│       ├── Testimonials.astro
│       ├── CallToAction.astro
│       ├── ImageCarousel.astro
│       └── Header.astro
└── assets/
    └── images/
        ├── bilocale/
        ├── trilocale/
        └── suiteDeluxe/
```

### Current Apartment Data
1. **Bilocale** (Mini)
   - Capacity: 2 guests
   - Size: 70 m²
   - Features: 1 bedroom, 1 bathroom, living room, kitchen, private balcony

2. **Trilocale** (Medio)
   - Capacity: 4 guests
   - Size: 120 m²
   - Features: 2 bedrooms, 2 bathrooms, living room, kitchen

3. **Suite Deluxe** (Grande)
   - Capacity: 8 guests
   - Size: 180 m²
   - Features: 4 bedrooms, 2 bathrooms, living room, kitchen, balcony

### Existing Reusable Components
- ✅ ImageCarousel with lazy loading
- ✅ Responsive image optimization
- ✅ Features3 grid layout
- ✅ Testimonials carousel
- ✅ CallToAction section
- ✅ Header with navigation
- ✅ Footer

---

## 🎯 Target Structure

### New Site Map
```
/                           → Home page (overview of all 3 apartments)
/appartamenti/bilocale      → Bilocale dedicated page
/appartamenti/trilocale     → Trilocale dedicated page
/appartamenti/suite-deluxe  → Suite Deluxe dedicated page
/contatti                   → Contact page (renamed from /contact)
/privacy, /terms, /cookies  → Legal pages (unchanged)
```

### Navigation Structure
```
Header Navigation:
- Home
- Appartamenti (dropdown/submenu)
  - Bilocale
  - Trilocale
  - Suite Deluxe
- I nostri Comfort
- Testimonianze
- Contatti (CTA button)
```

---

## 🏗 Technical Architecture

### New File Structure
```
src/
├── pages/
│   ├── index.astro (NEW home page)
│   ├── appartamenti/
│   │   ├── bilocale.astro (NEW)
│   │   ├── trilocale.astro (NEW)
│   │   └── suite-deluxe.astro (NEW)
│   ├── contatti.astro (renamed from contact.astro)
│   └── [legal pages]
├── components/
│   ├── appartamenti/
│   │   ├── ApartmentHero.astro (NEW - page header component)
│   │   ├── PropertyOverview.astro (NEW - apartment description)
│   │   ├── RoomShowcase.astro (NEW - room-by-room cards)
│   │   ├── ServicesGrid.astro (reuse/adapt Features3)
│   │   ├── Benefits.astro (NEW - Trentino Guest Card section)
│   │   └── ApartmentCTA.astro (NEW - booking CTA)
│   ├── home/
│   │   ├── HomeHero.astro (NEW - main hero section)
│   │   ├── ApartmentCard.astro (NEW - apartment summary card)
│   │   ├── ApartmentsOverview.astro (NEW - 3 apartments grid)
│   │   └── [keep intro.astro if needed]
│   └── widgets/
│       └── [existing widgets]
└── data/
    ├── apartments.ts (NEW - centralized apartment data)
    └── services.ts (NEW - services/comfort data)
```

### Data Structure (TypeScript)
```typescript
// src/data/apartments.ts
export interface Room {
  name: string;
  description: string;
  image: string;
  amenities?: string[];
}

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
}
```

---

## 📝 Detailed Implementation Steps

### Phase 1: Data Structure & Organization (1-2 hours)

#### Step 1.1: Create Centralized Data Files
**File**: `src/data/apartments.ts`

**Tasks**:
- [ ] Create TypeScript interfaces for Apartment, Room, Service
- [ ] Define data for all 3 apartments with complete information
- [ ] Structure room-by-room data for each apartment
- [ ] Add image paths and metadata

**File**: `src/data/services.ts`
- [ ] Extract existing comfort/services data from personal.astro
- [ ] Organize into structured format
- [ ] Add Trentino Guest Card benefits

#### Step 1.2: Organize Image Assets
- [ ] Review existing images in each apartment folder
- [ ] Identify which images represent specific rooms vs general views
- [ ] Create naming convention: `[apartment]-[room]-[number].webp`
- [ ] Ensure we have images for:
  - Hero/exterior shots
  - Living room
  - Kitchen
  - Each bedroom
  - Each bathroom
  - Balcony/outdoor spaces

---

### Phase 2: Create Apartment Page Components (3-4 hours)

#### Step 2.1: Apartment Hero Component
**File**: `src/components/appartamenti/ApartmentHero.astro`

**Features**:
- Full-width hero image
- Overlay with apartment name and subtitle
- Breadcrumb navigation
- Responsive design

**Props**:
```typescript
interface Props {
  title: string;
  subtitle: string;
  heroImage: string;
}
```

#### Step 2.2: Property Overview Component
**File**: `src/components/appartamenti/PropertyOverview.astro`

**Layout**:
- Two-column layout (desktop)
- Left: Large feature image
- Right: Description text
- Key specs (capacity, size) highlighted

**Props**:
```typescript
interface Props {
  description: string;
  image: string;
  capacity: number;
  size: number;
  bedrooms: string;
  bathrooms: string;
}
```

#### Step 2.3: Room Showcase Component
**File**: `src/components/appartamenti/RoomShowcase.astro`

**Layout**:
- Repeating card pattern
- Alternating image left/right (desktop)
- Stacked on mobile
- Each card includes:
  - Room title (h3)
  - Description paragraph
  - Large image (responsive)
  - Optional amenities list

**Props**:
```typescript
interface Props {
  rooms: Room[];
}
```

**Styling**:
- Clean, modern cards with subtle shadows
- Ample white space between sections
- Images with aspect ratio preservation
- Smooth hover effects

#### Step 2.4: Services Grid Component
**File**: `src/components/appartamenti/ServicesGrid.astro`

**Action**: Adapt existing `Features3.astro` widget
- [ ] Copy Features3 widget
- [ ] Simplify/customize for apartment pages
- [ ] Ensure consistent styling with new design
- [ ] Add icons for each service

#### Step 2.5: Benefits Section Component
**File**: `src/components/appartamenti/Benefits.astro`

**Features**:
- Trentino Guest Card information
- Bulleted list of benefits
- Card image/icon
- Local recommendations section

**Content**:
- Guest card perks
- Nearby attractions
- Partner discounts
- Transportation info

#### Step 2.6: Apartment CTA Component
**File**: `src/components/appartamenti/ApartmentCTA.astro`

**Features**:
- Prominent contact/booking button
- Brief encouragement text
- Link to contact page
- Apartment-specific messaging

---

### Phase 3: Build Apartment Pages (2-3 hours)

#### Step 3.1: Create Bilocale Page
**File**: `src/pages/appartamenti/bilocale.astro`

**Structure**:
```astro
---
import Layout from '~/layouts/PageLayout.astro';
import ApartmentHero from '~/components/appartamenti/ApartmentHero.astro';
import PropertyOverview from '~/components/appartamenti/PropertyOverview.astro';
import RoomShowcase from '~/components/appartamenti/RoomShowcase.astro';
import ServicesGrid from '~/components/appartamenti/ServicesGrid.astro';
import Testimonials from '~/components/widgets/Testimonials.astro';
import Benefits from '~/components/appartamenti/Benefits.astro';
import ApartmentCTA from '~/components/appartamenti/ApartmentCTA.astro';
import { apartments } from '~/data/apartments';

const apartment = apartments.find(a => a.slug === 'bilocale');
---

<Layout metadata={{ title: apartment.name }}>
  <ApartmentHero {...apartment} />
  <PropertyOverview {...apartment} />
  <RoomShowcase rooms={apartment.rooms} />
  <ServicesGrid />
  <Testimonials />
  <Benefits />
  <ApartmentCTA apartment={apartment.name} />
</Layout>
```

**Content Sections**:
1. Hero with main image
2. Property overview (L'appartamento)
3. Room showcase:
   - Camera da letto matrimoniale
   - Soggiorno
   - Cucina
   - Bagno
   - Balcone
4. Services grid
5. Testimonials (filtered or all)
6. Benefits/Guest Card
7. Contact CTA

#### Step 3.2: Create Trilocale Page
**File**: `src/pages/appartamenti/trilocale.astro`

**Room Sections**:
- Camera matrimoniale
- Camera con letti singoli
- Soggiorno
- Cucina
- Bagno principale
- Secondo bagno
- Balcone

#### Step 3.3: Create Suite Deluxe Page
**File**: `src/pages/appartamenti/suite-deluxe.astro`

**Room Sections**:
- Prima camera matrimoniale (with balcony)
- Seconda camera matrimoniale
- Prima camera doppia
- Seconda camera doppia
- Soggiorno
- Cucina
- Bagno principale
- Secondo bagno

---

### Phase 4: Redesign Home Page (2-3 hours)

#### Step 4.1: Create Home Hero Component
**File**: `src/components/home/HomeHero.astro`

**Features**:
- Large hero image or video
- Welcome message
- Main value proposition
- Scroll indicator/CTA to apartments

**Content**:
```
Title: "Benvenuti a Casa Negrano"
Subtitle: "Appartamenti moderni nel cuore di Trento"
Description: "Scegli il tuo appartamento ideale per una vacanza indimenticabile in Trentino"
```

#### Step 4.2: Create Apartment Card Component
**File**: `src/components/home/ApartmentCard.astro`

**Layout**:
- Image (landscape)
- Title + capacity badge
- Brief description (2-3 lines)
- Key features (icons)
- "Scopri di più" button → apartment page

**Props**:
```typescript
interface Props {
  apartment: Apartment;
}
```

#### Step 4.3: Create Apartments Overview Component
**File**: `src/components/home/ApartmentsOverview.astro`

**Layout**:
- Section title: "I nostri appartamenti"
- 3-column grid (desktop), 1-column (mobile)
- ApartmentCard for each apartment
- Balanced spacing

#### Step 4.4: Update Home Page
**File**: `src/pages/index.astro`

**New Structure**:
```astro
<Layout>
  <HomeHero />

  <!-- About Section -->
  <Intro /> <!-- Keep existing or simplify -->

  <!-- Apartments Overview -->
  <ApartmentsOverview apartments={apartments} />

  <!-- Why Choose Us / Comfort -->
  <Features3 />

  <!-- Testimonials -->
  <Testimonials />

  <!-- Final CTA -->
  <CallToAction />
</Layout>
```

---

### Phase 5: Update Navigation & Routing (1-2 hours)

#### Step 5.1: Update Header Component
**File**: `src/components/widgets/Header.astro` or `src/navigation.ts`

**New Navigation Links**:
```typescript
links: [
  { text: 'Home', href: '/' },
  { text: 'Chi siamo', href: '/#chi-siamo' },
  {
    text: 'Appartamenti',
    href: '/#appartamenti',
    links: [
      { text: 'Bilocale', href: '/appartamenti/bilocale' },
      { text: 'Trilocale', href: '/appartamenti/trilocale' },
      { text: 'Suite Deluxe', href: '/appartamenti/suite-deluxe' },
    ]
  },
  { text: 'I nostri comfort', href: '/#comfort' },
  { text: 'Testimonianze', href: '/#testimonianze' },
]
actions: [
  { text: 'Contatti', href: '/contatti' }
]
```

#### Step 5.2: Implement Dropdown Menu
- [ ] Add dropdown functionality for "Appartamenti" menu item
- [ ] Style dropdown with Tailwind
- [ ] Ensure mobile-friendly hamburger menu includes submenu
- [ ] Test keyboard navigation

#### Step 5.3: Rename Contact Page
**Action**: Rename `src/pages/contact.astro` → `src/pages/contatti.astro`
- [ ] Update file name
- [ ] Update all internal links
- [ ] Add redirect from /contact to /contatti if needed

#### Step 5.4: Update Footer Links
**File**: `src/components/widgets/Footer.astro`
- [ ] Update navigation links to match new structure
- [ ] Add apartment page links
- [ ] Update contact link

---

### Phase 6: Content Creation & Refinement (3-4 hours)

#### Step 6.1: Write Apartment Descriptions
For each apartment, create:
- [ ] Main description (property overview)
- [ ] Room-by-room descriptions:
  - Focus on features, atmosphere, amenities
  - 2-4 sentences per room
  - Highlight unique selling points

**Bilocale Example**:
```
Camera da letto:
Spaziosa camera matrimoniale con ampi armadi, aria condizionata a pavimento
e accesso diretto al balcone privato. La camera è arredata con gusto moderno
e offre un ambiente tranquillo per un riposo perfetto.

Soggiorno:
Il luminoso soggiorno combina comfort e funzionalità con un comodo divano,
TV a schermo piatto e una zona pranzo. Le ampie finestre offrono una vista
splendida e abbondante luce naturale.
```

#### Step 6.2: Select and Organize Images
For each apartment:
- [ ] Choose best hero image (exterior or best view)
- [ ] Select property overview image
- [ ] Choose 1-2 images per room
- [ ] Ensure image quality and consistency
- [ ] Add appropriate alt text

#### Step 6.3: Create Services Content
- [ ] List all apartment amenities
- [ ] Create service icons mapping
- [ ] Write Trentino Guest Card benefits
- [ ] Add local recommendations

#### Step 6.4: Curate Testimonials
- [ ] Review existing testimonials
- [ ] Optionally assign specific testimonials to specific apartments
- [ ] Or keep general testimonials for all pages

---

### Phase 7: Styling & Design Polish (2-3 hours)

#### Step 7.1: Design System Refinement
**File**: `src/styles/globals.css` or Tailwind config

**Define**:
- [ ] Color palette
  - Primary: Current brand colors
  - Neutral grays for backgrounds
  - Accent colors for CTAs
- [ ] Typography scale
  - Headings: bold, clear hierarchy
  - Body: readable, comfortable line-height
- [ ] Spacing system
  - Consistent section padding
  - Component margins
- [ ] Shadow/elevation
  - Subtle shadows for cards
  - Consistent depth

#### Step 7.2: Responsive Design Testing
Test on:
- [ ] Mobile (320px - 480px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1280px+)
- [ ] Large desktop (1920px+)

**Key areas**:
- [ ] Navigation (hamburger on mobile)
- [ ] Image carousels
- [ ] Room showcase cards (stack on mobile)
- [ ] Grid layouts (1 col → 2 col → 3 col)

#### Step 7.3: Image Optimization
- [ ] Ensure responsive images with srcset
- [ ] Lazy loading for below-fold images
- [ ] Optimize loading="eager" for hero images
- [ ] Check image sizes and compression

#### Step 7.4: White Space & Readability
- [ ] Generous padding between sections
- [ ] Comfortable line-height (1.6-1.8 for body text)
- [ ] Max-width for text content (65-75ch)
- [ ] Balanced margins

---

### Phase 8: SEO & Metadata (1 hour)

#### Step 8.1: Page Metadata
For each page, add:
- [ ] Unique title
- [ ] Meta description (150-160 characters)
- [ ] Open Graph tags
- [ ] Canonical URLs

**Example** (`bilocale.astro`):
```astro
const metadata = {
  title: 'Bilocale - Camera Matrimoniale con Balcone | Casa Negrano',
  description: 'Appartamento bilocale a Trento: camera matrimoniale, soggiorno, cucina attrezzata e balcone privato. Perfetto per coppie. Prenota ora!',
  canonical: 'https://casanegrano.it/appartamenti/bilocale',
  openGraph: {
    title: 'Bilocale con Balcone Privato',
    description: '...',
    images: [{ url: heroImage, width: 1200, height: 630 }],
  }
};
```

#### Step 8.2: Structured Data (Schema.org)
Add JSON-LD for:
- [ ] Organization
- [ ] Apartment listings (Product or Accommodation)
- [ ] Breadcrumbs
- [ ] Reviews/ratings (from testimonials)

#### Step 8.3: Internal Linking
- [ ] Home → Apartment pages
- [ ] Apartment pages → Contact
- [ ] Apartment pages → Other apartments (related)
- [ ] Breadcrumbs on apartment pages

---

### Phase 9: Testing & QA (2 hours)

#### Step 9.1: Functionality Testing
- [ ] All navigation links work
- [ ] Dropdown menus function correctly
- [ ] Mobile menu opens/closes
- [ ] Image carousels load and navigate
- [ ] Forms submit correctly (contact page)
- [ ] CTAs link to correct pages

#### Step 9.2: Cross-browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

#### Step 9.3: Performance Testing
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Optimize if needed:
  - Image sizes
  - JavaScript bundle
  - CSS delivery

#### Step 9.4: Accessibility Testing
- [ ] Keyboard navigation
- [ ] Screen reader testing (basic)
- [ ] Color contrast (WCAG AA)
- [ ] Alt text for images
- [ ] ARIA labels where needed

#### Step 9.5: Content Review
- [ ] Proofread all text
- [ ] Check for consistency
- [ ] Verify contact information
- [ ] Test all external links

---

### Phase 10: Deployment & Launch (1 hour)

#### Step 10.1: Pre-deployment Checklist
- [ ] Build production version (`npm run build`)
- [ ] Test production build locally
- [ ] Check for console errors
- [ ] Verify environment variables

#### Step 10.2: Deploy
- [ ] Push to repository
- [ ] Deploy via Netlify/Vercel (auto-deploy if configured)
- [ ] Verify deployment success
- [ ] Check live URLs

#### Step 10.3: Post-launch Verification
- [ ] Test all pages on live site
- [ ] Verify analytics tracking
- [ ] Check sitemap generation
- [ ] Submit sitemap to Google Search Console

#### Step 10.4: Redirects (if needed)
If changing URLs:
- [ ] Set up 301 redirects from old URLs to new
- [ ] Update any external links
- [ ] Monitor 404 errors

---

## 📊 Content Structure

### Apartment Page Template

```markdown
# [Apartment Name]
Subtitle: [Brief tagline about the apartment]

## Section 1: Property Overview
**Title**: "L'appartamento"
**Content**:
- 2-3 paragraph description
- What makes this apartment special
- Ideal for: couples/families/groups
- Key amenities highlighted

**Image**: Main exterior or best room view

## Section 2: Room Showcase
**Pattern**: Alternating image-text cards

### Room 1: [Room Name]
- Description paragraph
- Amenities list
- Image

### Room 2: [Room Name]
- Description paragraph
- Amenities list
- Image

[Repeat for each room]

## Section 3: Services Grid
**Title**: "I nostri servizi"
**Subtitle**: "Scopri tutto ciò che abbiamo pensato per rendere speciale la tua esperienza"

**Services** (with icons):
- WiFi ad alta velocità
- Parcheggio in struttura
- Check-in flessibile
- Riscaldamento/raffrescamento a pavimento
- Cucina attrezzata
- Balcone privato
- Biancheria e asciugamani
- Ascensore
- Cassaforte

## Section 4: Testimonials
**Title**: "Cosa dicono i nostri ospiti"
**Subtitle**: "La soddisfazione dei nostri ospiti è la nostra priorità"

[Carousel of testimonials]

## Section 5: Benefits
**Title**: "Le nostre convenzioni e consigli"

### Trentino Guest Card
**Benefits**:
- Free public transportation
- Discounts on attractions
- Museum access
- Cable car discounts

### Local Recommendations
- Nearby restaurants
- Attractions
- Activities

## Section 6: Contact CTA
**Title**: "Contattaci per avere informazioni o per prenotare l'appartamento!"
**Button**: "Prenota ora" → /contatti
```

---

## 🎨 Design System Guidelines

### Typography

```css
/* Headings */
H1: text-4xl (36px) font-bold → Page title
H2: text-3xl (30px) font-bold → Section titles
H3: text-2xl (24px) font-semibold → Subsection/card titles
H4: text-xl (20px) font-medium → Small headings

/* Body */
Body: text-base (16px) line-height-relaxed
Small: text-sm (14px)
```

### Colors

```javascript
// Tailwind config
colors: {
  primary: {
    // Current brand blue
    50: '#d7edff',  // Light background (already used)
    500: '#3b82f6', // Primary blue
    600: '#2563eb', // Hover state
  },
  accent: {
    500: '#10b981', // Green (for checkmarks, highlights)
  },
  neutral: {
    50: '#f9fafb',  // Light background
    100: '#f3f4f6', // Card backgrounds
    700: '#374151', // Body text
    900: '#111827', // Headings
  }
}
```

### Spacing

```
Section padding: py-16 md:py-24 (64px-96px vertical)
Container max-width: max-w-7xl (1280px)
Section gap: gap-12 md:gap-16 (48px-64px)
Card padding: p-6 md:p-8
```

### Components

**Card Style**:
```astro
<div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
```

**Button Primary**:
```astro
<a class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
```

**Button Secondary**:
```astro
<a class="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg transition-colors">
```

### Images

- **Aspect Ratios**:
  - Hero: 16:9 or 21:9
  - Room images: 4:3 or 16:9
  - Thumbnails: 1:1 or 4:3

- **Responsive**:
  ```astro
  <img
    srcset="image-400.webp 400w, image-800.webp 800w, image-1200.webp 1200w"
    sizes="(max-width: 768px) 100vw, 50vw"
    loading="lazy"
    class="rounded-lg"
  />
  ```

---

## ⏱ Timeline Estimate

| Phase | Duration | Priority |
|-------|----------|----------|
| Phase 1: Data Structure | 1-2 hours | High |
| Phase 2: Components | 3-4 hours | High |
| Phase 3: Apartment Pages | 2-3 hours | High |
| Phase 4: Home Page | 2-3 hours | High |
| Phase 5: Navigation | 1-2 hours | High |
| Phase 6: Content | 3-4 hours | Medium |
| Phase 7: Styling | 2-3 hours | Medium |
| Phase 8: SEO | 1 hour | Medium |
| Phase 9: Testing | 2 hours | High |
| Phase 10: Deployment | 1 hour | High |
| **Total** | **18-27 hours** | |

---

## 🚀 Implementation Priority

### Must Have (MVP)
1. ✅ Create 3 apartment pages with basic structure
2. ✅ Update home page with apartment cards
3. ✅ Update navigation with links to new pages
4. ✅ Basic room showcase on each apartment page
5. ✅ Contact CTA on each page

### Should Have
1. ✅ Dropdown menu for apartments
2. ✅ Services grid on apartment pages
3. ✅ Benefits/Trentino Guest Card section
4. ✅ Testimonials on apartment pages
5. ✅ Responsive design polish

### Nice to Have
1. ⭕ Apartment comparison table
2. ⭕ Virtual tour/360° images
3. ⭕ Availability calendar integration
4. ⭕ Multi-language support (EN/DE)
5. ⭕ Booking system integration

---

## 📁 File Changes Summary

### New Files (Create)
```
src/data/
  ├── apartments.ts
  └── services.ts

src/pages/appartamenti/
  ├── bilocale.astro
  ├── trilocale.astro
  └── suite-deluxe.astro

src/components/appartamenti/
  ├── ApartmentHero.astro
  ├── PropertyOverview.astro
  ├── RoomShowcase.astro
  ├── ServicesGrid.astro
  ├── Benefits.astro
  └── ApartmentCTA.astro

src/components/home/
  ├── HomeHero.astro
  ├── ApartmentCard.astro
  └── ApartmentsOverview.astro
```

### Modified Files
```
src/pages/
  ├── index.astro (complete rewrite)
  └── contact.astro → contatti.astro (rename)

src/navigation.ts (update links)

src/components/widgets/
  └── Header.astro (add dropdown)
```

### Deprecated Files (Can keep for reference)
```
src/pages/home/personal.astro
src/components/home/
  ├── bilocale.astro
  ├── trilocale.astro
  └── suiteDelux.astro
```

---

## ✅ Quality Checklist

### Design
- [ ] Clean, modern aesthetic
- [ ] Generous white space
- [ ] High-quality images prominently displayed
- [ ] Consistent typography hierarchy
- [ ] Mobile-first responsive design

### Content
- [ ] Clear, compelling apartment descriptions
- [ ] Room-by-room details with images
- [ ] Services/amenities clearly listed
- [ ] Social proof (testimonials)
- [ ] Strong calls-to-action

### Technical
- [ ] Fast page loads (< 3s)
- [ ] Optimized images (WebP, responsive)
- [ ] Accessible (WCAG AA)
- [ ] SEO optimized (meta, schema, headings)
- [ ] Cross-browser compatible

### User Experience
- [ ] Intuitive navigation
- [ ] Easy to find apartment information
- [ ] Clear path to contact/booking
- [ ] Breadcrumbs for orientation
- [ ] Mobile-friendly interactions

---

## 🔄 Next Steps After Launch

1. **Analytics Setup**
   - Track page views for each apartment
   - Monitor conversion funnel (view → contact)
   - A/B test CTAs and layouts

2. **Content Expansion**
   - Add blog posts about Trento attractions
   - Create seasonal promotion pages
   - Develop FAQ page

3. **Feature Enhancements**
   - Integrate booking system
   - Add live availability calendar
   - Implement multi-language support

4. **SEO Optimization**
   - Create location-specific content
   - Build backlinks
   - Optimize for local search

---

## 📞 Support & Maintenance

### Regular Tasks
- Update availability calendars
- Refresh testimonials
- Update seasonal promotions
- Monitor and fix broken links
- Update images as needed

### Performance Monitoring
- Weekly Lighthouse audits
- Monthly analytics review
- Quarterly content refresh

---

**Document Version**: 1.0
**Last Updated**: November 2024
**Author**: Development Team
