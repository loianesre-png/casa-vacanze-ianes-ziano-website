/**
 * Client-side Locale Manager
 * ==========================
 * Handles language preference storage and provides translation utilities for the client.
 * 
 * Usage:
 * 1. Include in Layout.astro via <script src="/scripts/locale-manager.js"></script>
 * 2. Access via window.localeManager
 */

const STORAGE_KEY = 'preferred-locale';
const DEFAULT_LOCALE = 'it';
const SUPPORTED_LOCALES = ['it', 'en', 'de'];

// Translation cache
const translationCache = {};

/**
 * Get the current preferred locale from localStorage
 */
function getLocale() {
  if (typeof localStorage === 'undefined') return DEFAULT_LOCALE;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_LOCALES.includes(stored)) {
    return stored;
  }
  return DEFAULT_LOCALE;
}

/**
 * Set the preferred locale
 */
function setLocale(locale) {
  if (!SUPPORTED_LOCALES.includes(locale)) {
    console.warn(`Unsupported locale: ${locale}`);
    return false;
  }
  localStorage.setItem(STORAGE_KEY, locale);
  return true;
}

/**
 * Load translations for a given locale and section
 * Returns cached version if available
 */
async function loadTranslations(section, locale = null) {
  const targetLocale = locale || getLocale();
  const cacheKey = `${targetLocale}/${section}`;
  
  if (translationCache[cacheKey]) {
    return translationCache[cacheKey];
  }
  
  try {
    // Try to fetch from the embedded translations
    const response = await fetch(`/translations/${targetLocale}/${section}.json`);
    if (response.ok) {
      const data = await response.json();
      translationCache[cacheKey] = data;
      return data;
    }
  } catch (e) {
    console.warn(`Could not load translations for ${cacheKey}:`, e);
  }
  
  // Fallback to default locale
  if (targetLocale !== DEFAULT_LOCALE) {
    return loadTranslations(section, DEFAULT_LOCALE);
  }
  
  return {};
}

/**
 * Get a nested value from an object using dot notation
 */
function getNestedValue(obj, path, fallback = '') {
  const keys = path.split('.');
  let current = obj;
  
  for (const key of keys) {
    if (current === null || current === undefined) {
      return fallback;
    }
    if (typeof current !== 'object') {
      return fallback;
    }
    current = current[key];
  }
  
  return current ?? fallback;
}

/**
 * Translate a key from a loaded section
 */
function t(translations, path, fallback = '') {
  return getNestedValue(translations, path, fallback);
}

// Export to window for global access
window.localeManager = {
  getLocale,
  setLocale,
  loadTranslations,
  getNestedValue,
  t,
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  STORAGE_KEY,
};
