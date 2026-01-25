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
   * - 'luxury'   : Gold, cream, bronze
   * - 'modern'   : Blue, clean, minimal
   * - 'rustic'   : Warm amber, earthy tones
   * - 'coastal'  : Cyan, light, airy
   * - 'minimal'  : Black, white, neutral
   * - 'custom'   : Use your own colors below
   */
  preset: 'modern',

  // ==========================================================================
  // COLOR PALETTE (Optional Overrides)
  // ==========================================================================
  /**
   * IMPORTANT: When using a preset (not 'custom'), leave this section empty
   * to use the preset's colors. Only add values here if you want to override
   * specific colors from the preset.
   *
   * Colors can be specified as:
   * - Hex: '#c9a961'
   * - RGB: 'rgb(201, 169, 97)'
   * - HSL: 'hsl(42, 50%, 58%)'
   *
   * When using 'custom' preset, all color values are required.
   *
   * Example override (uncomment to use):
   * colors: {
   *   primary: '#your-color',  // Override just the primary color
   * },
   */
  colors: {
    // Leave empty to use preset colors, or add specific overrides here
    // primary: '#c9a961',      // Uncomment to override preset primary color
    // secondary: '#f5f2ed',    // Uncomment to override preset secondary color
    // accent: '#a98b5f',       // Uncomment to override preset accent color
    // muted: '#e8e4dd',        // Uncomment to override preset muted color
    // background: '#faf8f5',   // Uncomment to override preset background color
    // foreground: '#1a1a1a',   // Uncomment to override preset foreground color
  },

  // ==========================================================================
  // TYPOGRAPHY (Optional Overrides)
  // ==========================================================================
  /**
   * IMPORTANT: When using a preset, leave this section empty to use the
   * preset's typography. Only add values here if you want to override
   * specific typography settings from the preset.
   *
   * Popular font options:
   * - Headings: 'Playfair Display', 'Merriweather', 'Montserrat', 'Lora'
   * - Body: 'Inter', 'Open Sans', 'Roboto', 'Source Sans Pro'
   */
  typography: {
    // Leave empty to use preset typography, or add specific overrides here
    // headingFont: 'Playfair Display',
    // bodyFont: 'Inter Variable',
    // baseFontSize: 16,
    // lineHeight: 1.6,
  },

  // ==========================================================================
  // STYLE (Optional Overrides)
  // ==========================================================================
  /**
   * IMPORTANT: When using a preset, leave this section empty to use the
   * preset's style settings. Only add values here if you want to override
   * specific style settings from the preset.
   *
   * Border radius options: 'none', 'small', 'medium', 'large', 'full'
   * Shadow intensity options: 'none', 'light', 'medium', 'strong'
   * Transition speed options: 'fast', 'normal', 'slow'
   */
  style: {
    // Leave empty to use preset style, or add specific overrides here
    // borderRadius: 'small',
    // shadowIntensity: 'medium',
    // transitionSpeed: 'normal',
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
