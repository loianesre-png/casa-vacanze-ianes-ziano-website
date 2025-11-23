/**
 * Property Loader Utility
 * =======================
 * Loads property data from YAML files in src/content/properties/
 *
 * This utility provides a unified interface for accessing property data,
 * whether loaded from YAML files or the legacy TypeScript data file.
 *
 * Usage:
 * ```typescript
 * import { getProperties, getPropertyBySlug } from '@/utils/properties';
 *
 * // Get all properties
 * const properties = await getProperties();
 *
 * // Get single property
 * const property = await getPropertyBySlug('bilocale');
 * ```
 */

import type { Property, Room, PropertyCapacity, PropertySize, PropertyImages } from '~/config/schema/property';
import { validateProperty, sortProperties, getPublishedProperties } from '~/config/schema/property';

/**
 * Raw YAML property structure (before normalization)
 */
interface RawYamlProperty {
  id: string;
  slug: string;
  published?: boolean;
  order?: number;
  name: string;
  subtitle?: string;
  description: string;
  shortDescription?: string;
  capacity: {
    guests: number;
    bedrooms: string;
    bathrooms: string;
    beds?: {
      double?: number;
      single?: number;
      sofa?: number;
    };
  };
  size: {
    value: number;
    unit: 'sqm' | 'sqft';
  };
  images: {
    hero: string;
    thumbnail: string;
    gallery: string | string[];
  };
  rooms: Array<{
    name: string;
    description: string;
    image?: string;
    amenities?: string[];
  }>;
  features: string[];
  amenities?: string[];
  idealFor?: string[];
  pricing?: {
    enabled: boolean;
    currency: string;
    currencySymbol?: string;
    startingFrom?: number;
    periods?: Array<{
      name: string;
      dates: string;
      pricePerNight?: number;
      minimumStay?: number;
    }>;
    note?: string;
  };
  seo?: {
    title?: string;
    description?: string;
    image?: string;
  };
}

/**
 * Cache for loaded properties
 */
let propertiesCache: Property[] | null = null;

/**
 * Normalize YAML property to Property interface
 */
function normalizeProperty(raw: RawYamlProperty): Property {
  return {
    id: raw.id,
    slug: raw.slug,
    name: raw.name,
    subtitle: raw.subtitle,
    description: raw.description,
    shortDescription: raw.shortDescription,
    published: raw.published ?? true,
    order: raw.order ?? 0,
    capacity: {
      guests: raw.capacity.guests,
      bedrooms: raw.capacity.bedrooms,
      bathrooms: raw.capacity.bathrooms,
      beds: raw.capacity.beds,
    },
    size: {
      value: raw.size.value,
      unit: raw.size.unit,
    },
    rooms: raw.rooms.map((room) => ({
      name: room.name,
      description: room.description,
      image: room.image,
      amenities: room.amenities,
    })),
    images: {
      hero: raw.images.hero,
      thumbnail: raw.images.thumbnail,
      gallery: raw.images.gallery,
    },
    features: raw.features,
    amenities: raw.amenities,
    idealFor: raw.idealFor,
    pricing: raw.pricing,
    seo: raw.seo,
  };
}

/**
 * Load all properties from YAML files
 *
 * @param includeUnpublished - Include unpublished properties (default: false)
 * @returns Array of Property objects
 */
export async function getProperties(includeUnpublished = false): Promise<Property[]> {
  // Return cached if available
  if (propertiesCache) {
    return includeUnpublished ? propertiesCache : getPublishedProperties(propertiesCache);
  }

  try {
    // Import all YAML files from properties directory
    const propertyFiles = import.meta.glob<{ default: RawYamlProperty }>(
      '/src/content/properties/*.yaml',
      { eager: true }
    );

    const properties: Property[] = [];

    for (const [path, module] of Object.entries(propertyFiles)) {
      // Skip example/template files
      if (path.includes('_example') || path.includes('_template')) {
        continue;
      }

      try {
        const raw = module.default;
        const normalized = normalizeProperty(raw);
        const validated = validateProperty(normalized);
        properties.push(validated);
      } catch (error) {
        console.error(`Error loading property from ${path}:`, error);
      }
    }

    // Sort and cache
    propertiesCache = sortProperties(properties);

    return includeUnpublished ? propertiesCache : getPublishedProperties(propertiesCache);
  } catch (error) {
    console.error('Error loading properties:', error);
    // Fallback to legacy data if YAML loading fails
    return fallbackToLegacyData();
  }
}

/**
 * Fallback to legacy TypeScript data file
 */
async function fallbackToLegacyData(): Promise<Property[]> {
  try {
    const { apartments } = await import('~/data/apartments');

    // Convert legacy format to new Property format
    return apartments.map((apt) => ({
      id: apt.id,
      slug: apt.slug,
      name: apt.name,
      subtitle: apt.subtitle,
      description: apt.description,
      published: true,
      order: 0,
      capacity: {
        guests: apt.capacity,
        bedrooms: apt.bedrooms,
        bathrooms: apt.bathrooms,
      },
      size: {
        value: apt.size,
        unit: 'sqm' as const,
      },
      rooms: apt.rooms.map((room) => ({
        name: room.name,
        description: room.description,
        image: room.image,
        amenities: room.amenities,
      })),
      images: {
        hero: apt.heroImage,
        thumbnail: apt.propertyImage,
        gallery: apt.slug, // Use slug as folder name
      },
      features: apt.features,
      idealFor: apt.idealFor,
    }));
  } catch (error) {
    console.error('Error loading legacy apartment data:', error);
    return [];
  }
}

/**
 * Get a single property by slug
 *
 * @param slug - Property URL slug
 * @returns Property or null if not found
 */
export async function getPropertyBySlug(slug: string): Promise<Property | null> {
  const properties = await getProperties(true); // Include unpublished for admin
  return properties.find((p) => p.slug === slug) || null;
}

/**
 * Get a single property by ID
 *
 * @param id - Property ID
 * @returns Property or null if not found
 */
export async function getPropertyById(id: string): Promise<Property | null> {
  const properties = await getProperties(true);
  return properties.find((p) => p.id === id) || null;
}

/**
 * Get all property slugs (for generating static routes)
 *
 * @param includeUnpublished - Include unpublished properties
 * @returns Array of slugs
 */
export async function getPropertySlugs(includeUnpublished = false): Promise<string[]> {
  const properties = await getProperties(includeUnpublished);
  return properties.map((p) => p.slug);
}

/**
 * Get property count
 */
export async function getPropertyCount(): Promise<number> {
  const properties = await getProperties();
  return properties.length;
}

/**
 * Check if in single-property mode
 * Returns true if there's only one property
 */
export async function isSinglePropertyMode(): Promise<boolean> {
  const count = await getPropertyCount();
  return count === 1;
}

/**
 * Get the first/only property (for single-property mode)
 */
export async function getMainProperty(): Promise<Property | null> {
  const properties = await getProperties();
  return properties[0] || null;
}

/**
 * Clear property cache (useful for development)
 */
export function clearPropertyCache(): void {
  propertiesCache = null;
}

/**
 * Get image path for a property
 *
 * @param property - Property object
 * @param imageType - Type of image (hero, thumbnail, or room image filename)
 * @returns Relative image path
 */
export function getPropertyImagePath(property: Property, imageType: 'hero' | 'thumbnail' | string): string {
  const basePath = `~/assets/images/${property.slug}`;

  if (imageType === 'hero') {
    return `${basePath}/${property.images.hero}`;
  }

  if (imageType === 'thumbnail') {
    return `${basePath}/${property.images.thumbnail}`;
  }

  // Assume it's a room image filename
  return `${basePath}/${imageType}`;
}

// =============================================================================
// Re-export types for convenience
// =============================================================================
export type { Property, Room, PropertyCapacity, PropertySize, PropertyImages };
