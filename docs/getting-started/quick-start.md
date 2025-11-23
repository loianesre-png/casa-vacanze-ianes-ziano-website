# Quick Start Guide

Get your property rental website up and running in minutes.

## Prerequisites

- [Node.js](https://nodejs.org/) 18.x or higher
- npm or yarn
- Basic familiarity with editing YAML/JSON files (for customization)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/property-rental-website-template.git
   cd property-rental-website-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit `http://localhost:4321` to see your site

## Quick Customization

### 1. Site Identity

Edit `src/config/site.config.ts`:

```typescript
const siteConfig = {
  identity: {
    name: 'Your Property Name',
    tagline: 'Your tagline here',
  },
  contact: {
    email: 'your@email.com',
    phone: '+1 234 567 8900',
    address: {
      street: '123 Main Street',
      city: 'Your City',
      postalCode: '12345',
      country: 'Your Country',
    },
  },
  // ... more options
};
```

### 2. Properties

Create or edit property files in `src/content/properties/`:

```yaml
# src/content/properties/your-property.yaml
id: your-property
slug: your-property
name: "Your Property Name"
subtitle: "A brief description"

description: >
  Full description of your property...

capacity:
  guests: 4
  bedrooms: "2 bedrooms"
  bathrooms: "1 bathroom"

size:
  value: 80
  unit: sqm

images:
  hero: "hero-image.webp"
  thumbnail: "thumb.webp"
  gallery: "your-property"

rooms:
  - name: "Bedroom"
    description: "Description of the bedroom"
    image: "bedroom.webp"

features:
  - "Free WiFi"
  - "Air conditioning"
  - "Free parking"
```

### 3. Images

Add your images to `src/assets/images/{property-slug}/`:
- `hero-image.webp` - Main hero image
- `thumb.webp` - Thumbnail for cards
- Room images as specified in YAML

### 4. Theme

Edit `src/config/theme.config.ts`:

```typescript
const themeConfig = {
  // Use a preset theme
  preset: 'luxury', // or: 'modern', 'rustic', 'coastal', 'minimal'

  // Or customize colors
  colors: {
    primary: '#your-color',
    secondary: '#your-color',
    // ...
  },
};
```

### 5. Content (Text)

Edit files in `src/content/dictionary/it/`:
- `homepage.yaml` - Homepage text
- `common.yaml` - Common buttons, labels
- `contact.yaml` - Contact page text
- `apartments.yaml` - Property-related text

## Building for Production

```bash
npm run build
```

The built site will be in the `dist/` folder.

## Deployment

The site is static and can be deployed anywhere:

- **Netlify**: Connect your Git repo for automatic deploys
- **Vercel**: Similar to Netlify
- **GitHub Pages**: Use `gh-pages` branch
- **Any web server**: Just upload the `dist/` folder

## Next Steps

- [Site Configuration](../configuration/site-config.md)
- [Property Configuration](../configuration/properties.md)
- [Theme Customization](../configuration/theme.md)
- [Content Customization](../customization/content.md)

## Common Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run check    # TypeScript type checking
```

## Need Help?

- Check the [Troubleshooting Guide](../troubleshooting.md)
- Open an issue on GitHub
