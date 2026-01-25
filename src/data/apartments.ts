// src/data/apartments.ts
/**
 * Centralized apartment data (Legacy fallback)
 * Contains placeholder information for the three template apartments
 *
 * NOTE: Primary data source is now YAML files in src/content/properties/
 * This file is used as a fallback if YAML loading fails.
 */

export interface Room {
  /** Room name (e.g., "Bedroom", "Kitchen") */
  name: string;
  /** Detailed description of the room */
  description: string;
  /** Image filename from the apartment's image directory */
  image: string;
  /** Optional list of specific amenities in this room */
  amenities?: string[];
}

export interface Apartment {
  /** Unique identifier */
  id: string;
  /** URL-friendly slug for routing */
  slug: string;
  /** Display name of the apartment */
  name: string;
  /** Subtitle/tagline */
  subtitle: string;
  /** Main description paragraph */
  description: string;
  /** Number of guests */
  capacity: number;
  /** Size in square meters */
  size: number;
  /** Bedroom configuration description */
  bedrooms: string;
  /** Bathroom configuration description */
  bathrooms: string;
  /** Main hero image filename */
  heroImage: string;
  /** Property overview image filename */
  propertyImage: string;
  /** Detailed room-by-room information */
  rooms: Room[];
  /** Key features/highlights */
  features: string[];
  /** Ideal for (target audience) */
  idealFor: string[];
}

export const apartments: Apartment[] = [
  {
    id: 'property-1',
    slug: 'property-1',
    name: 'One Bedroom Apartment',
    subtitle: 'Cozy apartment with private balcony',
    description:
      'A charming one-bedroom apartment perfect for couples or solo travelers. Features a comfortable bedroom, modern bathroom with shower, and a bright living room with fully equipped kitchen. The private balcony offers a peaceful retreat with scenic views.',
    capacity: 2,
    size: 70,
    bedrooms: '1 double bedroom',
    bathrooms: '1 bathroom with shower',
    heroImage: 'WhatsApp Image 2025-09-10 at 17.16.55.webp',
    propertyImage: 'thumbnail.svg',
    rooms: [
      {
        name: 'Bedroom',
        description:
          'Spacious double bedroom with large wardrobes, floor heating and cooling, and direct access to the private balcony. The room is decorated with modern taste and offers a tranquil atmosphere for perfect rest.',
        image: 'bedroom.svg',
        amenities: ['Double bed', 'Spacious wardrobe', 'Balcony access', 'Floor climate control'],
      },
      {
        name: 'Living Room',
        description:
          'The bright living room combines comfort and functionality with a comfortable sofa, flat-screen TV, and elegant dining area. Large windows provide abundant natural light and splendid views.',
        image: 'living-room.svg',
        amenities: ['Sofa', 'Flat-screen TV', 'Dining table', 'Large windows', 'Floor climate control'],
      },
      {
        name: 'Kitchen',
        description:
          'Modern and fully equipped kitchen with everything you need to prepare your favorite meals. Features refrigerator, induction cooktop, oven, microwave, and complete utensils.',
        image: 'kitchen.svg',
        amenities: [
          'Refrigerator',
          'Induction cooktop',
          'Microwave',
          'Dishwasher',
          'Coffee maker',
          'Complete utensils',
        ],
      },
      {
        name: 'Bathroom',
        description:
          'Modern bathroom with spacious shower, quality fixtures, and elegant finishes. Equipped with hairdryer, courtesy set, and ample space for your personal items.',
        image: 'bathroom.svg',
        amenities: ['Spacious shower', 'Hairdryer', 'Courtesy set', 'Towels provided'],
      },
      {
        name: 'Balcony',
        description:
          'Private balcony equipped with table and chairs, perfect for enjoying a morning coffee or relaxing in the evening while admiring the panoramic views.',
        image: 'balcony.svg',
        amenities: ['Table', 'Chairs', 'Panoramic view'],
      },
    ],
    features: [
      'High-speed WiFi',
      'Parking included',
      'Private balcony',
      'Fully equipped kitchen',
      'Floor heating and cooling',
      'Flat-screen TV',
      'Linens and towels included',
      'Elevator',
      'Safe',
      'Cots and cribs available'
    ],
    idealFor: ['Couples', 'Solo travelers', 'Business trips', 'Romantic weekends'],
  }
];

/**
 * Get apartment by slug
 */
export function getApartmentBySlug(slug: string): Apartment | undefined {
  return apartments.find((apt) => apt.slug === slug);
}

/**
 * Get apartment by ID
 */
export function getApartmentById(id: string): Apartment | undefined {
  return apartments.find((apt) => apt.id === id);
}

/**
 * Get all apartment slugs (useful for generating routes)
 */
export function getApartmentSlugs(): string[] {
  return apartments.map((apt) => apt.slug);
}
