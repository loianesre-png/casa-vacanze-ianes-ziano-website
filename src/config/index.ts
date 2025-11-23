/**
 * Configuration Loader
 * ====================
 * Central access point for all site configuration.
 *
 * Usage in Astro components:
 * ```astro
 * ---
 * import { config, getSiteName, getContactEmail } from '@/config';
 * ---
 * <h1>{getSiteName()}</h1>
 * ```
 *
 * Usage in React/JS:
 * ```tsx
 * import { config } from '@/config';
 * const siteName = config.site.identity.name;
 * ```
 */

import siteConfig from './site.config';
import themeConfig from './theme.config';
import { validateSiteConfig, type SiteConfig } from './schema/site';
import { resolveTheme, type ThemeConfig } from './schema/theme';

// =============================================================================
// CONFIGURATION OBJECTS
// =============================================================================

/**
 * Validated site configuration
 */
export const site: SiteConfig = validateSiteConfig(siteConfig);

/**
 * Resolved theme configuration (with preset applied)
 */
export const theme: ThemeConfig = resolveTheme(themeConfig);

/**
 * Combined configuration object
 */
export const config = {
  site,
  theme,
} as const;

// =============================================================================
// SITE IDENTITY HELPERS
// =============================================================================

/**
 * Get site name
 */
export function getSiteName(): string {
  return site.identity.name;
}

/**
 * Get site tagline
 */
export function getTagline(): string | undefined {
  return site.identity.tagline;
}

/**
 * Get logo configuration
 */
export function getLogo() {
  return site.identity.logo;
}

/**
 * Check if site uses text logo
 */
export function useTextLogo(): boolean {
  return site.identity.logo?.useText ?? true;
}

// =============================================================================
// CONTACT HELPERS
// =============================================================================

/**
 * Get contact email
 */
export function getContactEmail(): string {
  return site.contact.email;
}

/**
 * Get contact phone
 */
export function getContactPhone(): string | undefined {
  return site.contact.phone;
}

/**
 * Get WhatsApp number
 */
export function getWhatsApp(): string | undefined {
  return site.contact.whatsapp;
}

/**
 * Get formatted address
 */
export function getFormattedAddress(): string {
  const { street, city, postalCode, country, region } = site.contact.address;
  const parts = [street, city, postalCode, region, country].filter(Boolean);
  return parts.join(', ');
}

/**
 * Get address object
 */
export function getAddress() {
  return site.contact.address;
}

/**
 * Get coordinates
 */
export function getCoordinates() {
  return site.contact.coordinates;
}

// =============================================================================
// SOCIAL MEDIA HELPERS
// =============================================================================

/**
 * Get all social links
 */
export function getSocialLinks() {
  return site.social ?? {};
}

/**
 * Check if any social links are configured
 */
export function hasSocialLinks(): boolean {
  const social = site.social;
  if (!social) return false;
  return Object.values(social).some((value) => value !== undefined);
}

// =============================================================================
// LEGAL HELPERS
// =============================================================================

/**
 * Get registration codes (CIN, licenses)
 */
export function getRegistrationCodes(): string[] {
  return site.legal?.registrationCodes ?? [];
}

/**
 * Get formatted registration codes string
 */
export function getFormattedRegistrationCodes(separator = ' | '): string {
  return getRegistrationCodes().join(separator);
}

/**
 * Get copyright year
 */
export function getCopyrightYear(): number {
  return site.legal?.copyrightYear ?? new Date().getFullYear();
}

/**
 * Get copyright text
 */
export function getCopyrightText(): string {
  const year = getCopyrightYear();
  const name = site.legal?.companyName ?? site.identity.name;
  return `© ${year} ${name}`;
}

// =============================================================================
// INTEGRATION HELPERS
// =============================================================================

/**
 * Get contact form webhook URL
 */
export function getContactFormWebhook(): string | undefined {
  const form = site.integrations.contactForm;
  if (form.provider === 'webhook') {
    return form.webhookUrl;
  }
  return undefined;
}

/**
 * Check if contact form is enabled
 */
export function isContactFormEnabled(): boolean {
  return site.integrations.contactForm.enabled;
}

/**
 * Get Google Analytics ID
 */
export function getGoogleAnalyticsId(): string | undefined {
  return site.integrations.analytics?.googleAnalyticsId;
}

/**
 * Get map coordinates with zoom
 */
export function getMapConfig() {
  return {
    coordinates: site.contact.coordinates,
    provider: site.integrations.maps?.provider ?? 'openstreetmap',
    apiKey: site.integrations.maps?.apiKey,
    zoom: site.integrations.maps?.defaultZoom ?? 15,
  };
}

// =============================================================================
// SEO HELPERS
// =============================================================================

/**
 * Get page title with template
 */
export function getPageTitle(pageTitle?: string): string {
  if (!pageTitle) {
    return site.seo.defaultTitle;
  }
  return site.seo.titleTemplate.replace('%s', pageTitle);
}

/**
 * Get default meta description
 */
export function getDefaultDescription(): string {
  return site.seo.description;
}

/**
 * Get site language
 */
export function getSiteLanguage(): string {
  return site.seo.language;
}

/**
 * Get robots meta content
 */
export function getRobotsMeta(): string {
  const { index, follow } = site.seo.robots;
  const parts: string[] = [];
  parts.push(index ? 'index' : 'noindex');
  parts.push(follow ? 'follow' : 'nofollow');
  return parts.join(', ');
}

// =============================================================================
// FEATURE FLAG HELPERS
// =============================================================================

/**
 * Check if a feature is enabled
 */
export function isFeatureEnabled(feature: keyof NonNullable<SiteConfig['features']>): boolean {
  return site.features?.[feature] ?? false;
}

/**
 * Check if blog is enabled
 */
export function isBlogEnabled(): boolean {
  return isFeatureEnabled('blog');
}

/**
 * Check if testimonials are enabled
 */
export function isTestimonialsEnabled(): boolean {
  return isFeatureEnabled('testimonials');
}

/**
 * Check if dark mode is enabled
 */
export function isDarkModeEnabled(): boolean {
  return isFeatureEnabled('darkMode');
}

// =============================================================================
// URL HELPERS
// =============================================================================

/**
 * Get site URL
 */
export function getSiteUrl(): string {
  return site.url;
}

/**
 * Get full URL for a path
 */
export function getFullUrl(path: string): string {
  const base = site.url.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

// =============================================================================
// EXPORTS
// =============================================================================

// Re-export types
export type { SiteConfig, ThemeConfig };

// Re-export schema utilities
export * from './schema';

// Default export
export default config;
