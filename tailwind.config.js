import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';
import tailwindcssAnimate from 'tailwindcss-animate';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: false,
  
  theme: {
    extend: {
      colors: {
        // Existing color system (keeping for backward compatibility)
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        // Luxury Color Palette
        // Note: These use hex values to support Tailwind opacity modifiers (e.g., /20)
        // For theme-aware colors, use: text-primary, bg-secondary, etc.
        luxury: {
          // Primary brand colors (hex for opacity support)
          gold: '#c9a961',
          bronze: '#a98b5f',
          copper: '#b87333',

          // Neutral tones
          black: '#1a1a1a',
          charcoal: '#2d2d2d',
          graphite: '#4a4a4a',

          // Background tones
          cream: '#faf8f5',
          beige: '#f5f2ed',
          sand: '#e8e4dd',

          white: '#ffffff',
          gray: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#e5e5e5',
            300: '#d4d4d4',
            400: '#a3a3a3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
          },
        },

        // Theme-aware semantic colors (use CSS variables)
        // These change when theme.config.ts preset changes
        theme: {
          primary: 'var(--theme-primary)',
          accent: 'var(--theme-accent)',
          bg: 'hsl(var(--background))',
          fg: 'hsl(var(--foreground))',
        },
      },
      fontFamily: {
        // Fonts now use CSS variables from theme.config.ts
        sans: ['var(--font-body, Inter Variable)', 'ui-sans-serif', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-heading, Playfair Display)', 'ui-serif', ...defaultTheme.fontFamily.serif],
        heading: ['var(--font-heading, Playfair Display)', 'ui-serif', ...defaultTheme.fontFamily.serif],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        // Theme-aware shadows using CSS variables from theme.config.ts
        // Override Tailwind defaults with theme values
        sm: 'var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05))',
        md: 'var(--shadow-md, 0 4px 6px -1px rgb(0 0 0 / 0.08))',
        lg: 'var(--shadow-lg, 0 10px 15px -3px rgb(0 0 0 / 0.08))',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  
  // 🔥 Disable unused core plugins (saves significant KB)
  corePlugins: {
    // Keep commonly used ones
    preflight: true,
    container: true,
    
    // Disable visual effects if not used
    // backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    backdropSepia: false,
    
    // Disable scroll utilities if not used
    // scrollSnapType: false,
    // scrollSnapAlign: false,
    // scrollMargin: false,
    // scrollPadding: false,
    
    // Disable touch utilities if desktop-only
    // touchAction: false,
    
    // Disable 3D transforms if not used
    transformStyle: false,
    perspectiveOrigin: false,
    perspective: false,
  },
  
  plugins: [
    typographyPlugin,
    tailwindcssAnimate,
  ],
};