# Theme Configuration

Customize the visual appearance of your website through the theme configuration file.

## Configuration File

Location: `src/config/theme.config.ts`

## Using Theme Presets

The easiest way to change your site's look is using a preset:

```typescript
const themeConfig = {
  preset: 'luxury',  // Choose your preset
};
```

### Available Presets

| Preset | Description | Primary Color | Style |
|--------|-------------|---------------|-------|
| `luxury` | Gold, cream, elegant | Gold (#c9a961) | Refined, sophisticated |
| `modern` | Blue, clean, professional | Blue (#3b82f6) | Minimal, clean |
| `rustic` | Amber, warm, earthy | Amber (#d97706) | Warm, cozy |
| `coastal` | Cyan, light, airy | Cyan (#06b6d4) | Fresh, relaxed |
| `minimal` | Black & white, neutral | Black (#171717) | Ultra-minimal |

## Customizing Colors

Override preset colors or create a custom theme:

```typescript
const themeConfig = {
  preset: 'luxury',  // Start from a preset

  // Override specific colors
  colors: {
    primary: '#your-brand-color',
    secondary: '#f5f2ed',
    accent: '#a98b5f',
    muted: '#e8e4dd',
    background: '#faf8f5',
    foreground: '#1a1a1a',
  },
};
```

### Color Properties

| Property | Description | Usage |
|----------|-------------|-------|
| `primary` | Main brand color | Buttons, links, accents |
| `secondary` | Surface color | Card backgrounds, sections |
| `accent` | Highlight color | Hover states, CTAs |
| `muted` | Subtle color | Borders, dividers |
| `background` | Page background | Main page background |
| `foreground` | Text color | Primary text |

### Color Formats

Colors can be specified as:
- **Hex**: `'#c9a961'`
- **RGB**: `'rgb(201, 169, 97)'`
- **HSL**: `'hsl(42, 50%, 58%)'`

## Typography

Customize fonts for your site:

```typescript
const themeConfig = {
  typography: {
    headingFont: 'Playfair Display',  // For h1-h6
    bodyFont: 'Inter Variable',        // For body text
    monoFont: 'monospace',            // For code
    baseFontSize: 16,                 // Base font size in px
    lineHeight: 1.6,                  // Line height multiplier
  },
};
```

### Popular Font Combinations

| Style | Heading Font | Body Font |
|-------|-------------|-----------|
| Elegant | Playfair Display | Inter |
| Modern | Montserrat | Open Sans |
| Classic | Merriweather | Source Sans Pro |
| Minimal | Inter | Inter |

> **Note:** The template includes Inter and Playfair Display. For other fonts, you'll need to add them to your project.

## Style Options

Customize the overall style:

```typescript
const themeConfig = {
  style: {
    borderRadius: 'small',      // Corner rounding
    shadowIntensity: 'medium',  // Shadow depth
    transitionSpeed: 'normal',  // Animation speed
  },
};
```

### Border Radius Options

| Value | Result |
|-------|--------|
| `'none'` | Sharp corners (0px) |
| `'small'` | Subtle (4px) |
| `'medium'` | Moderate (8px) |
| `'large'` | Pronounced (12px) |
| `'full'` | Pill-shaped (9999px) |

### Shadow Intensity Options

| Value | Result |
|-------|--------|
| `'none'` | No shadows |
| `'light'` | Subtle shadows |
| `'medium'` | Balanced shadows |
| `'strong'` | Dramatic shadows |

### Transition Speed Options

| Value | Duration | Feel |
|-------|----------|------|
| `'fast'` | 150ms | Snappy |
| `'normal'` | 300ms | Balanced |
| `'slow'` | 500ms | Elegant |

## Dark Mode (Optional)

Override colors for dark mode:

```typescript
const themeConfig = {
  // ... other config

  darkColors: {
    primary: '#dbc078',
    secondary: '#1a1a1a',
    background: '#0a0a0a',
    foreground: '#fafafa',
    muted: '#262626',
  },
};
```

> **Note:** Dark mode is prepared but not fully implemented in the current version.

## Complete Example

```typescript
// src/config/theme.config.ts
import type { ThemeConfig } from './schema/theme';

const themeConfig: ThemeConfig = {
  // Use luxury preset as base
  preset: 'luxury',

  // Override with custom brand colors
  colors: {
    primary: '#8B4513',      // SaddleBrown
    secondary: '#FFF8DC',    // Cornsilk
    accent: '#D2691E',       // Chocolate
    muted: '#F5DEB3',        // Wheat
    background: '#FFFAF0',   // FloralWhite
    foreground: '#2F1810',   // Dark brown
  },

  // Custom typography
  typography: {
    headingFont: 'Playfair Display',
    bodyFont: 'Inter Variable',
    monoFont: 'monospace',
    baseFontSize: 16,
    lineHeight: 1.6,
  },

  // Style preferences
  style: {
    borderRadius: 'medium',
    shadowIntensity: 'light',
    transitionSpeed: 'normal',
  },
};

export default themeConfig;
```

## How It Works

1. The theme configuration is loaded at build time
2. CSS variables are generated based on your config
3. The `ThemeStyles` component injects these variables
4. Tailwind CSS and components use these variables

## Preset Comparison

### Luxury (Default)
- Best for: High-end rentals, boutique properties
- Feels: Sophisticated, refined, premium

### Modern
- Best for: Urban apartments, business travelers
- Feels: Clean, professional, contemporary

### Rustic
- Best for: Country homes, mountain retreats
- Feels: Warm, cozy, natural

### Coastal
- Best for: Beach properties, seaside rentals
- Feels: Fresh, relaxed, vacation

### Minimal
- Best for: Design-focused properties
- Feels: Clean, neutral, photography-first

## Next Steps

- [Content Customization](../customization/content.md)
- [Quick Start Guide](../getting-started/quick-start.md)
