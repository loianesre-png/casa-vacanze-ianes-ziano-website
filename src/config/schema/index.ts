/**
 * Configuration Schema Exports
 * Central export point for all configuration type definitions
 */

// Site configuration
export type {
  SiteConfig,
  SiteIdentity,
  LogoConfig,
  ContactConfig,
  Address,
  Coordinates,
  SocialLinks,
  LegalConfig,
  ContactFormConfig,
  AnalyticsConfig,
  MapsConfig,
  IntegrationsConfig,
  SEOConfig,
  FeatureFlags,
} from './site';

export { validateSiteConfig, defaultFeatures } from './site';

// Theme configuration
export type {
  ThemeConfig,
  ThemePreset,
  ColorPalette,
  TypographyConfig,
  StyleConfig,
} from './theme';

export {
  luxuryPreset,
  modernPreset,
  rusticPreset,
  coastalPreset,
  minimalPreset,
  getThemePreset,
  resolveTheme,
  borderRadiusValues,
  transitionSpeedValues,
} from './theme';

// Property configuration
export type {
  Property,
  PropertyCapacity,
  PropertySize,
  PropertyImages,
  PropertyPricing,
  PricingPeriod,
  PropertySEO,
  Room,
  BedConfig,
  PropertiesConfig,
  PropertyMode,
} from './property';

export {
  validateProperty,
  sortProperties,
  getPublishedProperties,
  defaultPropertiesConfig,
} from './property';
