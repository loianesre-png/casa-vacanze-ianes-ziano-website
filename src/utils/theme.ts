/**
 * Theme Utilities
 * ================
 * Utility functions for generating CSS variables from theme configuration.
 *
 * This module enables dynamic theming by:
 * 1. Loading theme presets
 * 2. Converting theme config to CSS variables
 * 3. Generating HSL values from hex colors
 *
 * Usage:
 * ```typescript
 * import { generateThemeCSS, getTheme } from '@/utils/theme';
 *
 * const theme = getTheme();
 * const cssVariables = generateThemeCSS(theme);
 * ```
 */

import type { ThemeConfig, ThemePreset } from '~/config/schema/theme';
import themeConfig from '~/config/theme.config';

// =============================================================================
// Theme Presets
// =============================================================================

/**
 * Built-in theme presets
 * Each preset defines a complete color palette and style settings
 */
export const themePresets: Record<ThemePreset, Partial<ThemeConfig>> = {
  luxury: {
    colors: {
      primary: '#c9a961',     // Gold
      secondary: '#f5f2ed',   // Beige
      accent: '#a98b5f',      // Bronze
      muted: '#e8e4dd',       // Sand
      background: '#faf8f5',  // Cream
      foreground: '#1a1a1a',  // Near black
    },
    typography: {
      headingFont: 'Playfair Display',
      bodyFont: 'Inter Variable',
      monoFont: 'monospace',
      baseFontSize: 16,
      lineHeight: 1.6,
    },
    style: {
      borderRadius: 'small',
      shadowIntensity: 'medium',
      transitionSpeed: 'normal',
    },
  },

  modern: {
    colors: {
      primary: '#3b82f6',     // Blue
      secondary: '#f1f5f9',   // Slate light
      accent: '#2563eb',      // Blue dark
      muted: '#e2e8f0',       // Slate muted
      background: '#ffffff',  // White
      foreground: '#0f172a',  // Slate dark
    },
    typography: {
      headingFont: 'Inter Variable',
      bodyFont: 'Inter Variable',
      monoFont: 'monospace',
      baseFontSize: 16,
      lineHeight: 1.6,
    },
    style: {
      borderRadius: 'medium',
      shadowIntensity: 'light',
      transitionSpeed: 'fast',
    },
  },

  rustic: {
    colors: {
      primary: '#d97706',     // Amber
      secondary: '#fef3c7',   // Amber light
      accent: '#b45309',      // Amber dark
      muted: '#fde68a',       // Amber muted
      background: '#fffbeb',  // Warm white
      foreground: '#451a03',  // Brown dark
    },
    typography: {
      headingFont: 'Merriweather',
      bodyFont: 'Source Sans Pro',
      monoFont: 'monospace',
      baseFontSize: 16,
      lineHeight: 1.7,
    },
    style: {
      borderRadius: 'small',
      shadowIntensity: 'medium',
      transitionSpeed: 'slow',
    },
  },

  coastal: {
    colors: {
      primary: '#06b6d4',     // Cyan
      secondary: '#ecfeff',   // Cyan light
      accent: '#0891b2',      // Cyan dark
      muted: '#cffafe',       // Cyan muted
      background: '#f0fdfa',  // Teal lightest
      foreground: '#164e63',  // Cyan dark
    },
    typography: {
      headingFont: 'Montserrat',
      bodyFont: 'Open Sans',
      monoFont: 'monospace',
      baseFontSize: 16,
      lineHeight: 1.6,
    },
    style: {
      borderRadius: 'large',
      shadowIntensity: 'light',
      transitionSpeed: 'normal',
    },
  },

  minimal: {
    colors: {
      primary: '#171717',     // Neutral dark
      secondary: '#f5f5f5',   // Neutral light
      accent: '#404040',      // Neutral accent
      muted: '#e5e5e5',       // Neutral muted
      background: '#ffffff',  // White
      foreground: '#0a0a0a',  // Near black
    },
    typography: {
      headingFont: 'Inter Variable',
      bodyFont: 'Inter Variable',
      monoFont: 'monospace',
      baseFontSize: 16,
      lineHeight: 1.5,
    },
    style: {
      borderRadius: 'none',
      shadowIntensity: 'none',
      transitionSpeed: 'fast',
    },
  },

  custom: {
    // Empty preset - uses values from theme.config.ts directly
  },
};

// =============================================================================
// Color Conversion Utilities
// =============================================================================

/**
 * Convert hex color to HSL values (without 'hsl()' wrapper)
 * Returns format: "42 38% 59%" suitable for CSS variables
 */
export function hexToHSL(hex: string): string {
  // Remove # if present
  hex = hex.replace(/^#/, '');

  // Parse hex values
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  // Convert to degrees and percentages
  const hDeg = Math.round(h * 360);
  const sPercent = Math.round(s * 100);
  const lPercent = Math.round(l * 100);

  return `${hDeg} ${sPercent}% ${lPercent}%`;
}

/**
 * Check if a color is in hex format
 */
function isHex(color: string): boolean {
  return /^#?([0-9A-Fa-f]{3}){1,2}$/.test(color);
}

/**
 * Convert any color format to HSL string for CSS variables
 * Supports: hex, rgb(), hsl()
 */
export function colorToHSL(color: string): string {
  if (isHex(color)) {
    return hexToHSL(color);
  }

  // If already HSL format (hsl(x, y%, z%)), extract values
  const hslMatch = color.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
  if (hslMatch) {
    return `${hslMatch[1]} ${hslMatch[2]}% ${hslMatch[3]}%`;
  }

  // If HSL without wrapper, return as-is
  if (/^\d+\s+\d+%\s+\d+%$/.test(color)) {
    return color;
  }

  // Fallback: return as-is and hope for the best
  console.warn(`Unable to parse color format: ${color}`);
  return color;
}

// =============================================================================
// Theme Resolution
// =============================================================================

/**
 * Get the resolved theme configuration
 * Merges preset defaults with user overrides
 */
export function getTheme(): ThemeConfig {
  const preset = themeConfig.preset || 'luxury';
  const presetConfig = themePresets[preset] || themePresets.luxury;

  // Deep merge preset with user config
  return {
    preset,
    colors: {
      ...presetConfig.colors,
      ...themeConfig.colors,
    },
    typography: {
      ...presetConfig.typography,
      ...themeConfig.typography,
    },
    style: {
      ...presetConfig.style,
      ...themeConfig.style,
    },
    darkColors: themeConfig.darkColors,
  } as ThemeConfig;
}

// =============================================================================
// CSS Variable Generation
// =============================================================================

/**
 * Map border radius setting to CSS value
 */
function getBorderRadius(setting: string): string {
  const radiusMap: Record<string, string> = {
    none: '0',
    small: '0.25rem',
    medium: '0.5rem',
    large: '0.75rem',
    full: '9999px',
  };
  return radiusMap[setting] || '0.25rem';
}

/**
 * Map transition speed to CSS value
 */
function getTransitionSpeed(setting: string): string {
  const speedMap: Record<string, string> = {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  };
  return speedMap[setting] || '300ms';
}

/**
 * Map shadow intensity to CSS values
 */
function getShadowValues(intensity: string): { sm: string; md: string; lg: string } {
  const shadowMap: Record<string, { sm: string; md: string; lg: string }> = {
    none: {
      sm: 'none',
      md: 'none',
      lg: 'none',
    },
    light: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.03)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.05)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.05)',
    },
    medium: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.08)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.08)',
    },
    strong: {
      sm: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.15)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.15)',
    },
  };
  return shadowMap[intensity] || shadowMap.medium;
}

/**
 * Generate CSS variable declarations for :root
 */
export function generateThemeCSS(theme?: ThemeConfig): string {
  const resolvedTheme = theme || getTheme();
  const { colors, typography, style } = resolvedTheme;

  const shadows = getShadowValues(style.shadowIntensity);

  const cssVars = `
  :root {
    /* Colors - HSL values for Tailwind compatibility */
    --background: ${colorToHSL(colors.background)};
    --foreground: ${colorToHSL(colors.foreground)};
    --primary: ${colorToHSL(colors.primary)};
    --primary-foreground: ${colorToHSL(colors.foreground)};
    --secondary: ${colorToHSL(colors.secondary)};
    --secondary-foreground: ${colorToHSL(colors.foreground)};
    --accent: ${colorToHSL(colors.accent)};
    --accent-foreground: 0 0% 100%;
    --muted: ${colorToHSL(colors.muted)};
    --muted-foreground: ${colorToHSL(colors.foreground)};

    /* Card & Popover */
    --card: 0 0% 100%;
    --card-foreground: ${colorToHSL(colors.foreground)};
    --popover: 0 0% 100%;
    --popover-foreground: ${colorToHSL(colors.foreground)};

    /* Border & Input */
    --border: ${colorToHSL(colors.muted)};
    --input: ${colorToHSL(colors.muted)};
    --ring: ${colorToHSL(colors.primary)};

    /* Destructive (keeping functional) */
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    /* Typography */
    --font-heading: '${typography.headingFont}', serif;
    --font-body: '${typography.bodyFont}', sans-serif;
    --font-mono: ${typography.monoFont};
    --font-size-base: ${typography.baseFontSize}px;
    --line-height: ${typography.lineHeight};

    /* Style */
    --radius: ${getBorderRadius(style.borderRadius)};
    --transition-speed: ${getTransitionSpeed(style.transitionSpeed)};
    --shadow-sm: ${shadows.sm};
    --shadow-md: ${shadows.md};
    --shadow-lg: ${shadows.lg};

    /* Theme-specific colors (for luxury utilities) */
    --theme-primary: ${colors.primary};
    --theme-secondary: ${colors.secondary};
    --theme-accent: ${colors.accent};
  }`;

  return cssVars;
}

/**
 * Generate dark mode CSS variables
 */
export function generateDarkModeCSS(theme?: ThemeConfig): string {
  const resolvedTheme = theme || getTheme();

  if (!resolvedTheme.darkColors) {
    // Default dark mode fallback
    return `
  .dark {
    --background: 0 0% 4%;
    --foreground: 0 0% 98%;
    --card: 0 0% 4%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 4%;
    --popover-foreground: 0 0% 98%;
    --primary: ${colorToHSL(resolvedTheme.colors.primary)};
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 15%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 15%;
    --muted-foreground: 0 0% 64%;
    --accent: 0 0% 15%;
    --accent-foreground: 0 0% 98%;
    --border: 0 0% 15%;
    --input: 0 0% 15%;
    --ring: 0 0% 83%;
  }`;
  }

  const { darkColors } = resolvedTheme;

  return `
  .dark {
    --background: ${darkColors.background ? colorToHSL(darkColors.background) : '0 0% 4%'};
    --foreground: ${darkColors.foreground ? colorToHSL(darkColors.foreground) : '0 0% 98%'};
    --primary: ${darkColors.primary ? colorToHSL(darkColors.primary) : colorToHSL(resolvedTheme.colors.primary)};
    --secondary: ${darkColors.secondary ? colorToHSL(darkColors.secondary) : '0 0% 15%'};
    --muted: ${darkColors.muted ? colorToHSL(darkColors.muted) : '0 0% 15%'};
    --card: ${darkColors.background ? colorToHSL(darkColors.background) : '0 0% 4%'};
    --card-foreground: ${darkColors.foreground ? colorToHSL(darkColors.foreground) : '0 0% 98%'};
    --popover: ${darkColors.background ? colorToHSL(darkColors.background) : '0 0% 4%'};
    --popover-foreground: ${darkColors.foreground ? colorToHSL(darkColors.foreground) : '0 0% 98%'};
    --border: ${darkColors.muted ? colorToHSL(darkColors.muted) : '0 0% 15%'};
    --input: ${darkColors.muted ? colorToHSL(darkColors.muted) : '0 0% 15%'};
  }`;
}

/**
 * Generate complete theme stylesheet
 */
export function generateFullThemeCSS(theme?: ThemeConfig): string {
  return generateThemeCSS(theme) + '\n' + generateDarkModeCSS(theme);
}

// =============================================================================
// Exports
// =============================================================================

export type { ThemeConfig, ThemePreset };
