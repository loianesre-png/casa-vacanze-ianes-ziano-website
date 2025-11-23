/**
 * Content Dictionary Loader
 * =========================
 * Utility functions for loading localized content from YAML files.
 *
 * The content dictionary system provides an i18n-ready structure:
 * - Content files are stored in src/content/dictionary/{locale}/
 * - Default locale is 'it' (Italian)
 * - Adding a new language is as simple as copying the folder and translating
 *
 * Usage in Astro components:
 * ```astro
 * ---
 * import { getContent, t } from '@/utils/content';
 * const homepage = await getContent('homepage');
 * ---
 * <h1>{homepage.hero.title}</h1>
 * ```
 */

// Default locale - change this to set a different default language
export const DEFAULT_LOCALE = 'it';

// Supported locales (for future i18n)
export const SUPPORTED_LOCALES = ['it'] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

/**
 * Content sections that can be loaded
 */
export type ContentSection = 'common' | 'homepage' | 'contact' | 'apartments';

/**
 * Cache for loaded content to avoid re-reading files
 */
const contentCache: Map<string, unknown> = new Map();

/**
 * Load content from a YAML file
 *
 * @param section - The content section to load (e.g., 'homepage', 'common')
 * @param locale - The locale to load (defaults to DEFAULT_LOCALE)
 * @returns The parsed content object
 *
 * @example
 * const homepage = await getContent('homepage');
 * console.log(homepage.hero.title);
 */
export async function getContent<T = Record<string, unknown>>(
  section: ContentSection,
  locale: SupportedLocale = DEFAULT_LOCALE
): Promise<T> {
  const cacheKey = `${locale}/${section}`;

  // Check cache first
  if (contentCache.has(cacheKey)) {
    return contentCache.get(cacheKey) as T;
  }

  try {
    // Dynamic import of YAML file
    // Vite/Astro handles YAML parsing automatically
    const content = await import(`../content/dictionary/${locale}/${section}.yaml`);
    const data = content.default as T;

    // Cache the result
    contentCache.set(cacheKey, data);

    return data;
  } catch (error) {
    // If locale-specific file not found, try default locale
    if (locale !== DEFAULT_LOCALE) {
      console.warn(
        `Content file not found for locale "${locale}", section "${section}". Falling back to "${DEFAULT_LOCALE}".`
      );
      return getContent<T>(section, DEFAULT_LOCALE);
    }

    // If default locale also fails, throw error
    throw new Error(
      `Content file not found: ${section}.yaml for locale "${locale}". ` +
        `Make sure the file exists at src/content/dictionary/${locale}/${section}.yaml`
    );
  }
}

/**
 * Get a nested value from content using dot notation
 *
 * @param obj - The content object
 * @param path - Dot-notation path to the value (e.g., 'hero.title')
 * @param fallback - Fallback value if path not found
 * @returns The value at the path or fallback
 *
 * @example
 * const title = getNestedValue(homepage, 'hero.title', 'Default Title');
 */
export function getNestedValue<T = string>(
  obj: Record<string, unknown>,
  path: string,
  fallback?: T
): T {
  const keys = path.split('.');
  let current: unknown = obj;

  for (const key of keys) {
    if (current === null || current === undefined) {
      return fallback as T;
    }
    if (typeof current !== 'object') {
      return fallback as T;
    }
    current = (current as Record<string, unknown>)[key];
  }

  return (current as T) ?? (fallback as T);
}

/**
 * Create a translation function for a specific content section
 * Useful for components that need multiple translations
 *
 * @param section - The content section
 * @param locale - The locale
 * @returns A translation function
 *
 * @example
 * const t = await createTranslator('common');
 * const buttonText = t('buttons.submit', 'Submit');
 */
export async function createTranslator(
  section: ContentSection,
  locale: SupportedLocale = DEFAULT_LOCALE
): Promise<(path: string, fallback?: string) => string> {
  const content = await getContent<Record<string, unknown>>(section, locale);

  return (path: string, fallback?: string): string => {
    return getNestedValue<string>(content, path, fallback ?? path);
  };
}

/**
 * Load multiple content sections at once
 *
 * @param sections - Array of section names to load
 * @param locale - The locale
 * @returns Object with section names as keys and content as values
 *
 * @example
 * const { common, homepage } = await getMultipleContent(['common', 'homepage']);
 */
export async function getMultipleContent<
  T extends Record<ContentSection, Record<string, unknown>> = Record<ContentSection, Record<string, unknown>>,
>(
  sections: ContentSection[],
  locale: SupportedLocale = DEFAULT_LOCALE
): Promise<Partial<T>> {
  const results: Partial<T> = {};

  await Promise.all(
    sections.map(async (section) => {
      const content = await getContent(section, locale);
      (results as Record<string, unknown>)[section] = content;
    })
  );

  return results;
}

/**
 * Clear the content cache
 * Useful during development when content files change
 */
export function clearContentCache(): void {
  contentCache.clear();
}

/**
 * Check if a locale is supported
 */
export function isLocaleSupported(locale: string): locale is SupportedLocale {
  return SUPPORTED_LOCALES.includes(locale as SupportedLocale);
}

/**
 * Get the current locale from URL or default
 * This is a placeholder for future i18n routing
 */
export function getCurrentLocale(url?: URL): SupportedLocale {
  if (!url) return DEFAULT_LOCALE;

  // Future: Extract locale from URL path
  // e.g., /en/about -> 'en'
  const pathSegments = url.pathname.split('/').filter(Boolean);
  const potentialLocale = pathSegments[0];

  if (potentialLocale && isLocaleSupported(potentialLocale)) {
    return potentialLocale;
  }

  return DEFAULT_LOCALE;
}

// =============================================================================
// Type definitions for content sections
// =============================================================================

/**
 * Common content structure
 */
export interface CommonContent {
  buttons: {
    contact: string;
    book_now: string;
    learn_more: string;
    view_all: string;
    send: string;
    submit: string;
    submitting: string;
    back: string;
    close: string;
    discover: string;
    explore: string;
  };
  navigation: {
    home: string;
    about: string;
    apartments: string;
    all_apartments: string;
    comfort: string;
    testimonials: string;
    contact: string;
  };
  labels: {
    guests: string;
    bedrooms: string;
    bathrooms: string;
    size: string;
    sqm: string;
    sqft: string;
    from: string;
    per_night: string;
    check_in: string;
    check_out: string;
    min_stay: string;
    nights: string;
    wifi_included?: string;
    ideal_for?: string;
    parking_included?: string;
    features?: string;
    amenities?: string;
  };
  form: Record<string, string>;
  placeholders: Record<string, string>;
  messages: {
    success: Record<string, string>;
    error: Record<string, string>;
    info: Record<string, string>;
  };
  date: {
    locale: string;
    format: Record<string, string>;
  };
  misc: Record<string, string>;
}

/**
 * Homepage content structure
 */
export interface HomepageContent {
  hero: {
    badge: string;
    title: string;
    title_highlight: string;
    subtitle: string;
    description: string;
    cta_primary: string;
    cta_secondary: string;
    features: Array<{
      title: string;
      subtitle: string;
      icon: string;
    }>;
    scroll_text: string;
    image_alt: string;
  };
  about: {
    section_id: string;
    title: string;
    description: string;
    highlights: string[];
  };
  apartments: {
    section_id: string;
    title: string;
    subtitle: string;
    comparison_banner: {
      title: string;
      description: string;
      cta: string;
    };
    card: {
      guests_label: string;
      size_label: string;
      view_details: string;
    };
  };
  comfort: {
    section_id: string;
    title: string;
    subtitle: string;
    description: string;
  };
  testimonials: {
    section_id: string;
    title: string;
    subtitle: string;
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
  seo: {
    title: string;
    description: string;
  };
}

/**
 * Contact page content structure
 */
export interface ContactContent {
  page: {
    tagline: string;
    title: string;
    description: string;
  };
  form: {
    title: string;
    subtitle: string;
    fields: Record<string, { label: string; placeholder: string }>;
    submit: string;
    submitting: string;
  };
  info: {
    title: string;
    items: Array<{
      icon: string;
      label: string;
      value: string;
    }>;
  };
  messages: {
    success: string;
    error: string;
    disabled: string;
  };
  seo: {
    title: string;
    description: string;
  };
}

/**
 * Apartments page content structure
 */
export interface ApartmentsContent {
  labels: {
    guests: string;
    bedrooms: string;
    bathrooms: string;
    size: string;
    sqm: string;
    features: string;
    amenities: string;
    ideal_for: string;
    rooms: string;
    gallery: string;
    reviews: string;
    benefits: string;
  };
  sections: {
    overview: { title: string };
    rooms: { title: string; subtitle: string };
    gallery: { title: string; subtitle: string };
    services: {
      title: string;
      subtitle: string;
      core_services_title: string;
      premium_services_title: string;
    };
    reviews: { title: string; subtitle: string };
    benefits: { title: string; subtitle: string };
    cta: { title: string; description: string; button: string };
  };
  rooms_section?: {
    title: string;
    subtitle: string;
  };
  card: {
    view_details: string;
    starting_from: string;
    per_night: string;
  };
  comparison: {
    title: string;
    headers: Record<string, string>;
  };
  guest_card: {
    title: string;
    description: string;
    cta: string;
  };
  testimonials?: {
    title?: string;
    subtitle?: string;
    default?: Array<{
      text: string;
      name: string;
    }>;
  };
}

// Type-safe content getters
export const getCommonContent = () => getContent<CommonContent>('common');
export const getHomepageContent = () => getContent<HomepageContent>('homepage');
export const getContactContent = () => getContent<ContactContent>('contact');
export const getApartmentsContent = () => getContent<ApartmentsContent>('apartments');
