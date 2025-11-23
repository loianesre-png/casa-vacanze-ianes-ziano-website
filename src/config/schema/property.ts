/**
 * Property Configuration Schema
 * TypeScript interfaces for property/apartment data
 */

/**
 * Bed configuration for a room
 */
export interface BedConfig {
  /** Number of double beds */
  double?: number;
  /** Number of single beds */
  single?: number;
  /** Number of sofa beds */
  sofa?: number;
  /** Number of bunk beds */
  bunk?: number;
}

/**
 * Room/space within a property
 */
export interface Room {
  /** Room name (e.g., "Camera da letto principale") */
  name: string;
  /** Room description */
  description: string;
  /** Room image filename or path */
  image?: string;
  /** Room-specific amenities */
  amenities?: string[];
  /** Bed configuration (for bedrooms) */
  beds?: BedConfig;
}

/**
 * Property capacity information
 */
export interface PropertyCapacity {
  /** Maximum number of guests */
  guests: number;
  /** Number of bedrooms (can be string for "Studio") */
  bedrooms: number | string;
  /** Number of bathrooms */
  bathrooms: number | string;
  /** Detailed bed breakdown (optional) */
  beds?: BedConfig;
}

/**
 * Property size information
 */
export interface PropertySize {
  /** Size value */
  value: number;
  /** Size unit */
  unit: 'sqm' | 'sqft';
}

/**
 * Property images configuration
 */
export interface PropertyImages {
  /** Hero/main image filename */
  hero: string;
  /** Thumbnail image filename */
  thumbnail: string;
  /**
   * Gallery images - can be:
   * - Array of image filenames
   * - Folder path (will load all images from folder)
   */
  gallery: string | string[];
}

/**
 * Pricing period configuration
 */
export interface PricingPeriod {
  /** Period name (e.g., "Alta stagione") */
  name: string;
  /** Date range description */
  dates: string;
  /** Price per night */
  pricePerNight?: number;
  /** Minimum stay in nights */
  minimumStay?: number;
}

/**
 * Property pricing configuration
 */
export interface PropertyPricing {
  /** Enable pricing display */
  enabled: boolean;
  /** Currency code (e.g., "EUR", "USD") */
  currency: string;
  /** Currency symbol (e.g., "€", "$") */
  currencySymbol?: string;
  /** Starting price (for "from X per night" display) */
  startingFrom?: number;
  /** Pricing periods */
  periods?: PricingPeriod[];
  /** Additional pricing note */
  note?: string;
}

/**
 * Property SEO configuration
 */
export interface PropertySEO {
  /** Custom page title */
  title?: string;
  /** Custom meta description */
  description?: string;
  /** Custom OG image */
  image?: string;
}

/**
 * Complete property configuration
 */
export interface Property {
  /** Unique property ID */
  id: string;
  /** URL slug (used in /appartamenti/[slug]) */
  slug: string;
  /** Property name */
  name: string;
  /** Short subtitle/tagline */
  subtitle?: string;
  /** Full description (supports markdown) */
  description: string;
  /** Short description for cards/previews */
  shortDescription?: string;
  /** Is this property published/visible */
  published: boolean;
  /** Display order (lower = first) */
  order?: number;
  /** Capacity information */
  capacity: PropertyCapacity;
  /** Size information */
  size: PropertySize;
  /** Detailed room breakdown */
  rooms: Room[];
  /** Property images */
  images: PropertyImages;
  /** Feature highlights (short list for cards) */
  features: string[];
  /** Full amenities list */
  amenities?: string[];
  /** Target audience (e.g., "Famiglie", "Coppie") */
  idealFor?: string[];
  /** Pricing configuration */
  pricing?: PropertyPricing;
  /** SEO overrides */
  seo?: PropertySEO;
}

/**
 * Property mode configuration
 */
export type PropertyMode = 'single' | 'multi';

/**
 * Properties collection configuration
 */
export interface PropertiesConfig {
  /** Single property or multiple properties mode */
  mode: PropertyMode;
  /** Section title for properties list */
  sectionTitle?: string;
  /** Section subtitle */
  sectionSubtitle?: string;
  /** Base path for property pages (default: "appartamenti") */
  basePath?: string;
  /** Label for properties (e.g., "Appartamenti", "Camere", "Suites") */
  propertyLabel?: {
    singular: string;
    plural: string;
  };
}

/**
 * Default properties configuration
 */
export const defaultPropertiesConfig: PropertiesConfig = {
  mode: 'multi',
  basePath: 'appartamenti',
  propertyLabel: {
    singular: 'Appartamento',
    plural: 'Appartamenti',
  },
};

/**
 * Validate a property configuration
 */
export function validateProperty(property: Partial<Property>): Property {
  const errors: string[] = [];

  if (!property.id) errors.push('id is required');
  if (!property.slug) errors.push('slug is required');
  if (!property.name) errors.push('name is required');
  if (!property.description) errors.push('description is required');
  if (!property.capacity) errors.push('capacity is required');
  if (!property.size) errors.push('size is required');
  if (!property.images?.hero) errors.push('images.hero is required');
  if (!property.rooms || property.rooms.length === 0) {
    errors.push('at least one room is required');
  }

  if (errors.length > 0) {
    throw new Error(
      `Property validation failed for "${property.name || property.id}":\n${errors.join('\n')}`
    );
  }

  return {
    ...property,
    published: property.published ?? true,
    order: property.order ?? 0,
    features: property.features ?? [],
  } as Property;
}

/**
 * Sort properties by order and name
 */
export function sortProperties(properties: Property[]): Property[] {
  return [...properties].sort((a, b) => {
    // First by order
    if (a.order !== b.order) {
      return (a.order ?? 0) - (b.order ?? 0);
    }
    // Then by name
    return a.name.localeCompare(b.name);
  });
}

/**
 * Filter published properties
 */
export function getPublishedProperties(properties: Property[]): Property[] {
  return properties.filter((p) => p.published);
}
