/**
 * Theme Configuration Schema
 * TypeScript interfaces for visual theming
 */

/**
 * Color configuration (HSL or hex values)
 */
export interface ColorPalette {
  /** Primary brand color (e.g., gold #c9a961) */
  primary: string;
  /** Secondary/surface color (e.g., beige #f5f2ed) */
  secondary: string;
  /** Accent/highlight color (e.g., bronze #a98b5f) */
  accent: string;
  /** Muted background color (e.g., sand #e8e4dd) */
  muted: string;
  /** Main background color (e.g., cream #faf8f5) */
  background: string;
  /** Primary text color (e.g., black #1a1a1a) */
  foreground: string;
  /** Card/surface background */
  card?: string;
  /** Card text color */
  cardForeground?: string;
  /** Border color */
  border?: string;
  /** Success state color */
  success?: string;
  /** Warning state color */
  warning?: string;
  /** Error/danger state color */
  error?: string;
}

/**
 * Typography configuration
 */
export interface TypographyConfig {
  /** Font for headings (e.g., "Playfair Display") */
  headingFont: string;
  /** Font for body text (e.g., "Inter") */
  bodyFont: string;
  /** Font for monospace/code (optional) */
  monoFont?: string;
  /** Base font size in pixels */
  baseFontSize?: number;
  /** Line height multiplier */
  lineHeight?: number;
}

/**
 * Spacing and shape configuration
 */
export interface StyleConfig {
  /** Border radius style */
  borderRadius: 'none' | 'small' | 'medium' | 'large' | 'full';
  /** Shadow intensity */
  shadowIntensity: 'none' | 'light' | 'medium' | 'strong';
  /** Animation/transition speed */
  transitionSpeed: 'fast' | 'normal' | 'slow';
}

/**
 * Available theme presets
 */
export type ThemePreset = 'luxury' | 'modern' | 'rustic' | 'coastal' | 'minimal' | 'custom';

/**
 * Complete theme configuration
 */
export interface ThemeConfig {
  /** Use a preset theme (overrides individual settings if not 'custom') */
  preset: ThemePreset;
  /** Color palette */
  colors: ColorPalette;
  /** Typography settings */
  typography: TypographyConfig;
  /** Spacing and shape settings */
  style: StyleConfig;
  /** Dark mode color overrides (optional) */
  darkColors?: Partial<ColorPalette>;
}

/**
 * Luxury theme preset (current Casa Negrano theme)
 */
export const luxuryPreset: Omit<ThemeConfig, 'preset'> = {
  colors: {
    primary: '#c9a961',      // Gold
    secondary: '#f5f2ed',    // Beige
    accent: '#a98b5f',       // Bronze
    muted: '#e8e4dd',        // Sand
    background: '#faf8f5',   // Cream
    foreground: '#1a1a1a',   // Black
    card: '#ffffff',
    cardForeground: '#1a1a1a',
    border: '#e8e4dd',
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
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
};

/**
 * Modern theme preset
 */
export const modernPreset: Omit<ThemeConfig, 'preset'> = {
  colors: {
    primary: '#3b82f6',      // Blue
    secondary: '#f8fafc',    // Slate-50
    accent: '#8b5cf6',       // Violet
    muted: '#f1f5f9',        // Slate-100
    background: '#ffffff',   // White
    foreground: '#0f172a',   // Slate-900
    card: '#ffffff',
    cardForeground: '#0f172a',
    border: '#e2e8f0',
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
  },
  typography: {
    headingFont: 'Inter Variable',
    bodyFont: 'Inter Variable',
    baseFontSize: 16,
    lineHeight: 1.5,
  },
  style: {
    borderRadius: 'medium',
    shadowIntensity: 'light',
    transitionSpeed: 'fast',
  },
};

/**
 * Rustic theme preset
 */
export const rusticPreset: Omit<ThemeConfig, 'preset'> = {
  colors: {
    primary: '#92400e',      // Amber-800
    secondary: '#fef3c7',    // Amber-100
    accent: '#b45309',       // Amber-700
    muted: '#fde68a',        // Amber-200
    background: '#fffbeb',   // Amber-50
    foreground: '#451a03',   // Amber-950
    card: '#ffffff',
    cardForeground: '#451a03',
    border: '#fde68a',
    success: '#15803d',
    warning: '#ca8a04',
    error: '#dc2626',
  },
  typography: {
    headingFont: 'Merriweather',
    bodyFont: 'Source Sans Pro',
    baseFontSize: 16,
    lineHeight: 1.7,
  },
  style: {
    borderRadius: 'small',
    shadowIntensity: 'medium',
    transitionSpeed: 'slow',
  },
};

/**
 * Coastal theme preset
 */
export const coastalPreset: Omit<ThemeConfig, 'preset'> = {
  colors: {
    primary: '#0891b2',      // Cyan-600
    secondary: '#ecfeff',    // Cyan-50
    accent: '#06b6d4',       // Cyan-500
    muted: '#cffafe',        // Cyan-100
    background: '#ffffff',   // White
    foreground: '#164e63',   // Cyan-900
    card: '#ffffff',
    cardForeground: '#164e63',
    border: '#a5f3fc',
    success: '#059669',
    warning: '#d97706',
    error: '#e11d48',
  },
  typography: {
    headingFont: 'Montserrat',
    bodyFont: 'Open Sans',
    baseFontSize: 16,
    lineHeight: 1.6,
  },
  style: {
    borderRadius: 'large',
    shadowIntensity: 'light',
    transitionSpeed: 'normal',
  },
};

/**
 * Minimal theme preset
 */
export const minimalPreset: Omit<ThemeConfig, 'preset'> = {
  colors: {
    primary: '#171717',      // Neutral-900
    secondary: '#fafafa',    // Neutral-50
    accent: '#525252',       // Neutral-600
    muted: '#f5f5f5',        // Neutral-100
    background: '#ffffff',   // White
    foreground: '#171717',   // Neutral-900
    card: '#ffffff',
    cardForeground: '#171717',
    border: '#e5e5e5',
    success: '#16a34a',
    warning: '#ea580c',
    error: '#dc2626',
  },
  typography: {
    headingFont: 'Inter Variable',
    bodyFont: 'Inter Variable',
    baseFontSize: 16,
    lineHeight: 1.5,
  },
  style: {
    borderRadius: 'none',
    shadowIntensity: 'none',
    transitionSpeed: 'fast',
  },
};

/**
 * Get theme preset by name
 */
export function getThemePreset(preset: ThemePreset): Omit<ThemeConfig, 'preset'> {
  switch (preset) {
    case 'luxury':
      return luxuryPreset;
    case 'modern':
      return modernPreset;
    case 'rustic':
      return rusticPreset;
    case 'coastal':
      return coastalPreset;
    case 'minimal':
      return minimalPreset;
    case 'custom':
    default:
      return luxuryPreset; // Default fallback
  }
}

/**
 * Border radius values in pixels
 */
export const borderRadiusValues: Record<StyleConfig['borderRadius'], string> = {
  none: '0px',
  small: '4px',
  medium: '8px',
  large: '12px',
  full: '9999px',
};

/**
 * Transition duration values in milliseconds
 */
export const transitionSpeedValues: Record<StyleConfig['transitionSpeed'], string> = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
};

/**
 * Merge theme preset with custom overrides
 */
export function resolveTheme(config: ThemeConfig): ThemeConfig {
  if (config.preset === 'custom') {
    return config;
  }

  const preset = getThemePreset(config.preset);

  return {
    preset: config.preset,
    colors: { ...preset.colors, ...config.colors },
    typography: { ...preset.typography, ...config.typography },
    style: { ...preset.style, ...config.style },
    darkColors: config.darkColors,
  };
}
