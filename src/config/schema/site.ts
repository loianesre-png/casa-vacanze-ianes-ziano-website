/**
 * Site Configuration Schema
 * TypeScript interfaces for the main site configuration
 */

/**
 * Logo configuration
 */
export interface LogoConfig {
  /** Path to logo image (relative to src/assets/) */
  src?: string;
  /** Alt text for logo */
  alt: string;
  /** Logo width in pixels */
  width?: number;
  /** Logo height in pixels */
  height?: number;
  /** Use text instead of image */
  useText?: boolean;
}

/**
 * Site identity configuration
 */
export interface SiteIdentity {
  /** Site/business name */
  name: string;
  /** Short tagline or slogan */
  tagline?: string;
  /** Logo configuration */
  logo?: LogoConfig;
}

/**
 * Physical address
 */
export interface Address {
  /** Street address */
  street: string;
  /** City name */
  city: string;
  /** Postal/ZIP code */
  postalCode: string;
  /** Country name */
  country: string;
  /** Region/Province (optional) */
  region?: string;
}

/**
 * Geographic coordinates
 */
export interface Coordinates {
  /** Latitude */
  lat: number;
  /** Longitude */
  lng: number;
}

/**
 * Contact information
 */
export interface ContactConfig {
  /** Primary email address */
  email: string;
  /** Phone number (with country code) */
  phone?: string;
  /** WhatsApp number (with country code) */
  whatsapp?: string;
  /** Physical address */
  address: Address;
  /** GPS coordinates for maps */
  coordinates?: Coordinates;
}

/**
 * Social media links
 */
export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  tripadvisor?: string;
  airbnb?: string;
  booking?: string;
  linkedin?: string;
  youtube?: string;
}

/**
 * Legal and compliance information
 */
export interface LegalConfig {
  /** Legal company/business name */
  companyName?: string;
  /** VAT/Tax ID number */
  vatNumber?: string;
  /** Registration codes (CIN, licenses, etc.) */
  registrationCodes?: string[];
  /** Privacy policy URL or page path */
  privacyPolicyUrl?: string;
  /** Terms of service URL or page path */
  termsUrl?: string;
  /** Cookie policy URL or page path */
  cookiePolicyUrl?: string;
  /** Copyright year (defaults to current year) */
  copyrightYear?: number;
}

/**
 * Contact form configuration
 */
export interface ContactFormConfig {
  /** Form submission provider */
  provider: 'webhook' | 'email' | 'none';
  /** Webhook URL for form submissions */
  webhookUrl?: string;
  /** Email address to receive form submissions */
  emailTo?: string;
  /** Enable/disable the contact form */
  enabled: boolean;
}

/**
 * Analytics configuration
 */
export interface AnalyticsConfig {
  /** Google Analytics measurement ID (G-XXXXXXXXXX) */
  googleAnalyticsId?: string;
  /** Plausible Analytics domain */
  plausibleDomain?: string;
  /** Other analytics script URL */
  customScript?: string;
}

/**
 * Maps configuration
 */
export interface MapsConfig {
  /** Map provider */
  provider: 'google' | 'openstreetmap' | 'none';
  /** Google Maps API key (if using Google) */
  apiKey?: string;
  /** Default zoom level */
  defaultZoom?: number;
}

/**
 * External integrations
 */
export interface IntegrationsConfig {
  /** Contact form settings */
  contactForm: ContactFormConfig;
  /** Analytics settings */
  analytics?: AnalyticsConfig;
  /** Maps settings */
  maps?: MapsConfig;
}

/**
 * SEO and metadata configuration
 */
export interface SEOConfig {
  /** Default page title */
  defaultTitle: string;
  /** Title template (use %s for page title) */
  titleTemplate: string;
  /** Default meta description */
  description: string;
  /** Site language (ISO 639-1 code) */
  language: string;
  /** Text direction */
  textDirection: 'ltr' | 'rtl';
  /** Robots meta tag settings */
  robots: {
    index: boolean;
    follow: boolean;
  };
  /** Open Graph settings */
  openGraph?: {
    /** OG image path */
    image?: string;
    /** OG site type */
    type?: string;
  };
  /** Twitter card settings */
  twitter?: {
    handle?: string;
    site?: string;
    cardType?: 'summary' | 'summary_large_image';
  };
  /** Google site verification ID */
  googleSiteVerificationId?: string;
}

/**
 * Feature flags for optional functionality
 */
export interface FeatureFlags {
  /** Enable/disable blog functionality */
  blog: boolean;
  /** Enable/disable testimonials section */
  testimonials: boolean;
  /** Enable/disable pricing display */
  pricing: boolean;
  /** Enable/disable dark mode toggle */
  darkMode: boolean;
}

/**
 * Complete site configuration
 */
export interface SiteConfig {
  /** Site identity (name, logo, tagline) */
  identity: SiteIdentity;
  /** Contact information */
  contact: ContactConfig;
  /** Social media links */
  social?: SocialLinks;
  /** Legal/compliance information */
  legal?: LegalConfig;
  /** External integrations */
  integrations: IntegrationsConfig;
  /** SEO and metadata */
  seo: SEOConfig;
  /** Feature flags */
  features?: FeatureFlags;
  /** Site URL (for sitemap, canonical URLs) */
  url: string;
  /** Base path (usually '/') */
  basePath: string;
  /** Use trailing slashes in URLs */
  trailingSlash: boolean;
}

/**
 * Default feature flags
 */
export const defaultFeatures: FeatureFlags = {
  blog: false,
  testimonials: true,
  pricing: false,
  darkMode: false,
};

/**
 * Validate site configuration
 * Throws error if required fields are missing
 */
export function validateSiteConfig(config: Partial<SiteConfig>): SiteConfig {
  const errors: string[] = [];

  // Required fields validation
  if (!config.identity?.name) {
    errors.push('identity.name is required');
  }
  if (!config.contact?.email) {
    errors.push('contact.email is required');
  }
  if (!config.contact?.address) {
    errors.push('contact.address is required');
  }
  if (!config.seo?.defaultTitle) {
    errors.push('seo.defaultTitle is required');
  }
  if (!config.url) {
    errors.push('url is required');
  }

  if (errors.length > 0) {
    throw new Error(`Site configuration validation failed:\n${errors.join('\n')}`);
  }

  // Apply defaults
  return {
    ...config,
    features: { ...defaultFeatures, ...config.features },
    basePath: config.basePath ?? '/',
    trailingSlash: config.trailingSlash ?? false,
  } as SiteConfig;
}
