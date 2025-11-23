/**
 * Theme Configuration
 * ====================
 * Customize the visual appearance of your website.
 *
 * Options:
 * 1. Use a preset: Set `preset` to 'luxury', 'modern', 'rustic', 'coastal', or 'minimal'
 * 2. Customize: Set `preset` to 'custom' and modify colors, typography, and style
 * 3. Override preset: Use a preset but override specific values
 *
 * For detailed documentation, see: docs/configuration/theme.md
 */

import type { ThemeConfig } from './schema/theme';

const themeConfig: ThemeConfig = {
  // ==========================================================================
  // THEME PRESET
  // ==========================================================================
  /**
   * Available presets:
   * - 'luxury'   : Gold, cream, bronze (current Casa Negrano theme)
   * - 'modern'   : Blue, clean, minimal
   * - 'rustic'   : Warm amber, earthy tones
   * - 'coastal'  : Cyan, light, airy
   * - 'minimal'  : Black, white, neutral
   * - 'custom'   : Use your own colors below
   */
  preset: 'luxury',

  // ==========================================================================
  // COLOR PALETTE
  // ==========================================================================
  /**
   * Colors can be specified as:
   * - Hex: '#c9a961'
   * - RGB: 'rgb(201, 169, 97)'
   * - HSL: 'hsl(42, 50%, 58%)'
   *
   * When using a preset, these values override the preset defaults.
   * When using 'custom' preset, all values are required.
   */
  colors: {
    /** Primary brand color (buttons, links, accents) */
    primary: '#c9a961', // Gold

    /** Secondary/surface color (cards, sections) */
    secondary: '#f5f2ed', // Beige

    /** Accent color (highlights, hover states) */
    accent: '#a98b5f', // Bronze

    /** Muted color (subtle backgrounds, borders) */
    muted: '#e8e4dd', // Sand

    /** Main background color */
    background: '#faf8f5', // Cream

    /** Primary text color */
    foreground: '#1a1a1a', // Near black
  },

  // ==========================================================================
  // TYPOGRAPHY
  // ==========================================================================
  typography: {
    /**
     * Heading font family
     * Popular options: 'Playfair Display', 'Merriweather', 'Montserrat', 'Lora'
     */
    headingFont: 'Playfair Display',

    /**
     * Body text font family
     * Popular options: 'Inter', 'Open Sans', 'Roboto', 'Source Sans Pro'
     */
    bodyFont: 'Inter Variable',

    /** Monospace font (for code blocks) */
    monoFont: 'monospace',

    /** Base font size in pixels */
    baseFontSize: 16,

    /** Line height multiplier */
    lineHeight: 1.6,
  },

  // ==========================================================================
  // STYLE
  // ==========================================================================
  style: {
    /**
     * Border radius style
     * - 'none'   : Sharp corners (0px)
     * - 'small'  : Subtle rounding (4px)
     * - 'medium' : Moderate rounding (8px)
     * - 'large'  : Pronounced rounding (12px)
     * - 'full'   : Pill-shaped (9999px)
     */
    borderRadius: 'small',

    /**
     * Shadow intensity
     * - 'none'   : No shadows
     * - 'light'  : Subtle shadows
     * - 'medium' : Balanced shadows
     * - 'strong' : Dramatic shadows
     */
    shadowIntensity: 'medium',

    /**
     * Animation/transition speed
     * - 'fast'   : 150ms (snappy)
     * - 'normal' : 300ms (balanced)
     * - 'slow'   : 500ms (elegant)
     */
    transitionSpeed: 'normal',
  },

  // ==========================================================================
  // DARK MODE (optional)
  // ==========================================================================
  /**
   * Override colors for dark mode
   * Only specify colors that should change in dark mode
   */
  // darkColors: {
  //   primary: '#dbc078',
  //   secondary: '#1a1a1a',
  //   background: '#0a0a0a',
  //   foreground: '#fafafa',
  //   muted: '#262626',
  // },
};

export default themeConfig;
