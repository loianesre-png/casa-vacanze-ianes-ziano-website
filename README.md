# Property Rental Website Template

A beautiful, configurable website template for vacation rentals, apartments, and holiday properties. Built with Astro 4.15.5, TypeScript, and Tailwind CSS featuring a customizable design system.

## Features

- **Configuration-Driven**: Customize everything through YAML/TypeScript config files
- **Multiple Properties**: Support for single or multiple rental properties
- **Theme Presets**: 5 built-in themes (luxury, modern, rustic, coastal, minimal)
- **Performance Optimized**: Static site generation, WebP images, lazy loading
- **SEO Ready**: Open Graph, meta tags, sitemap, structured data
- **i18n Ready**: Architecture supports future multi-language expansion
- **Responsive Design**: Mobile-first, works on all devices

## Quick Start

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/property-rental-website-template.git
cd property-rental-website-template

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to view your site.

### Build for Production

```bash
npm run build
```

## Configuration

### 1. Site Settings (`src/config/site.config.ts`)

Configure your site identity, contact info, and integrations:

```typescript
const siteConfig = {
  identity: {
    name: 'Your Property Name',
    tagline: 'Your tagline here',
  },
  contact: {
    email: 'your@email.com',
    phone: '+1 234 567 8900',
    // ...
  },
  // ...
};
```

### 2. Properties (`src/content/properties/*.yaml`)

Add your rental properties as YAML files:

```yaml
id: my-property
slug: my-property
name: "My Property Name"
description: "Property description..."

capacity:
  guests: 4
  bedrooms: "2 bedrooms"
  bathrooms: "1 bathroom"

images:
  hero: "hero.webp"
  thumbnail: "thumb.webp"
  gallery: "my-property"
```

See `src/content/properties/_example.yaml` for a complete template.

### 3. Theme (`src/config/theme.config.ts`)

Choose a preset or customize colors:

```typescript
const themeConfig = {
  preset: 'luxury',  // or: 'modern', 'rustic', 'coastal', 'minimal'
  colors: {
    primary: '#your-brand-color',
    // ...
  },
};
```

### 4. Content (`src/content/dictionary/`)

Customize all text content in YAML files:
- `common.yaml` - Buttons, labels, navigation
- `homepage.yaml` - Homepage content
- `contact.yaml` - Contact page
- `apartments.yaml` - Property labels

## Project Structure

```
src/
├── config/                  # Configuration files
│   ├── site.config.ts       # Site identity, contact, SEO
│   ├── theme.config.ts      # Theme customization
│   └── schema/              # TypeScript interfaces
├── content/
│   ├── dictionary/          # UI text content
│   │   └── it/              # Language folder
│   │       ├── common.yaml
│   │       ├── homepage.yaml
│   │       └── ...
│   └── properties/          # Property data
│       ├── _example.yaml    # Template
│       └── *.yaml           # Your properties
├── assets/images/           # Images by property
│   └── {property-slug}/
├── components/              # Astro/React components
├── layouts/                 # Page layouts
├── pages/                   # Site pages
└── utils/                   # Utility functions
```

## Theme Presets

| Preset | Style | Best For |
|--------|-------|----------|
| `luxury` | Gold, cream, elegant | High-end rentals |
| `modern` | Blue, clean, minimal | Urban apartments |
| `rustic` | Amber, warm, cozy | Country retreats |
| `coastal` | Cyan, fresh, airy | Beach properties |
| `minimal` | Black & white | Design-focused |

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run check` | TypeScript type checking |

## Documentation

- [Quick Start Guide](./docs/getting-started/quick-start.md)
- [Site Configuration](./docs/configuration/site-config.md)
- [Property Configuration](./docs/configuration/properties.md)
- [Theme Configuration](./docs/configuration/theme.md)
- [Development Plan](./DEVELOPMENT_PLAN.md)

## Technology Stack

- **Framework**: Astro 4.15.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.11
- **Components**: React 18 (for interactive elements)
- **Output**: Static HTML (SSG)

## Deployment

The site generates static HTML and can be deployed anywhere:

- **Netlify**: Connect your Git repo for automatic deploys
- **Vercel**: Similar to Netlify
- **GitHub Pages**: Use `gh-pages` branch
- **Any server**: Upload the `dist/` folder

## License

MIT License - feel free to use this template for personal and commercial projects.

---

Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/)
