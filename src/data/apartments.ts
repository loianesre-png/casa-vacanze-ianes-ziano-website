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
    heroImage: 'hero.svg',
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
  },
  {
    id: 'property-2',
    slug: 'property-2',
    name: 'Two Bedroom Apartment',
    subtitle: 'Spacious apartment with 2 bedrooms and 2 bathrooms',
    description:
      'This apartment offers two bedrooms (one double and one twin), two full bathrooms, and a spacious living room with well-equipped kitchen. The generous spaces and smart layout make it perfect for families or groups of friends.',
    capacity: 4,
    size: 120,
    bedrooms: '1 double bedroom + 1 twin bedroom',
    bathrooms: '2 bathrooms with shower',
    heroImage: 'hero.svg',
    propertyImage: 'thumbnail.svg',
    rooms: [
      {
        name: 'Master Bedroom',
        description:
          'Elegant master bedroom with built-in wardrobes and floor heating. Modern furnishings and relaxing colors create a welcoming atmosphere.',
        image: 'master-bedroom.svg',
        amenities: ['Double bed', 'Built-in wardrobe', 'Floor climate control', 'Large windows'],
      },
      {
        name: 'Twin Bedroom',
        description:
          'Spacious room with two single beds, perfect for children or friends. Equipped with large wardrobe and desk, it offers a bright and comfortable environment.',
        image: 'twin-bedroom.svg',
        amenities: ['Two single beds', 'Wardrobe', 'Floor climate control'],
      },
      {
        name: 'Living Room',
        description:
          'Large open-space living room with dining and relaxation areas. The comfortable sofa can accommodate additional guests, while the smart TV and fast WiFi ensure entertainment.',
        image: 'living-room.svg',
        amenities: ['Sofa bed', 'Smart TV', 'Dining table', 'Relaxation area', 'Floor climate control'],
      },
      {
        name: 'Kitchen',
        description:
          'Modern and spacious kitchen, perfectly equipped to prepare meals for the whole family. Includes latest generation appliances and ample counter space.',
        image: 'kitchen.svg',
        amenities: [
          'Refrigerator',
          'Induction cooktop',
          'Electric oven',
          'Dishwasher',
          'Microwave',
          'Coffee machine',
          'Pots and dishes',
        ],
      },
      {
        name: 'Main Bathroom',
        description:
          'Spacious main bathroom with large shower, sink, and premium finishes. Includes washing machine for convenience during extended stays.',
        image: 'main-bathroom.svg',
        amenities: ['Shower', 'Sink', 'Washing machine', 'Hairdryer', 'Courtesy set'],
      },
      {
        name: 'Second Bathroom',
        description:
          'Second bathroom, ideal for ensuring privacy and comfort to all guests. Equipped with all necessary amenities and modern finishes.',
        image: 'second-bathroom.svg',
        amenities: ['Sink', 'Hairdryer', 'Towels provided'],
      },
      {
        name: 'Balcony',
        description:
          'Private balcony equipped with table and chairs, perfect for enjoying morning coffee or evening relaxation while admiring the panoramic views.',
        image: 'balcony.svg',
        amenities: ['Table', 'Chairs', 'Panoramic view'],
      },
    ],
    features: [
      'High-speed WiFi',
      'Parking included',
      'Two bathrooms',
      'Spacious equipped kitchen',
      'Floor heating and cooling',
      'Smart TV',
      'Washing machine',
      'Linens and towels included',
      'Elevator',
      'Safe',
      'Cots and cribs available'
    ],
    idealFor: ['Families with children', 'Groups of friends', 'Extended stays', 'Those seeking space and privacy'],
  },
  {
    id: 'property-3',
    slug: 'property-3',
    name: 'Deluxe Suite',
    subtitle: 'Luxury apartment with 4 bedrooms and 2 bathrooms',
    description:
      'Our most spacious apartment offers four large bedrooms: two double (one with romantic private balcony) and two twin, perfect for large families or groups. The home is completed by two modern bathrooms with showers, a fully equipped kitchen, and a large living room.',
    capacity: 8,
    size: 180,
    bedrooms: '2 double bedrooms + 2 twin bedrooms',
    bathrooms: '2 bathrooms with shower',
    heroImage: 'hero.svg',
    propertyImage: 'thumbnail.svg',
    rooms: [
      {
        name: 'Master Bedroom with Balcony',
        description:
          'The main master bedroom is a true gem, with spacious built-in wardrobe and exclusive access to a private balcony. Perfect for moments of intimacy with all modern comforts.',
        image: 'master-bedroom-1.svg',
        amenities: ['Double bed', 'Built-in wardrobe', 'Private balcony', 'Floor climate control', 'Panoramic view'],
      },
      {
        name: 'Second Master Bedroom',
        description:
          'Elegant master bedroom with refined furnishings and ample wardrobe space. Offers a quiet and comfortable environment, perfect for ensuring privacy to guests.',
        image: 'master-bedroom-2.svg',
        amenities: ['Double bed', 'Large wardrobe', 'Floor climate control', 'Large windows'],
      },
      {
        name: 'First Twin Bedroom',
        description:
          'Spacious room with two single beds, ideal for children or friends. Equipped with wardrobe, desk, and ample space to move around.',
        image: 'twin-bedroom-1.svg',
        amenities: ['Two single beds', 'Wardrobe', 'Desk', 'Floor climate control'],
      },
      {
        name: 'Second Twin Bedroom',
        description:
          'Second twin bedroom, configured identically to the first to ensure balanced comfort to all guests. Perfect for children or as an additional room.',
        image: 'twin-bedroom-2.svg',
        amenities: ['Two single beds', 'Wardrobe', 'Floor climate control'],
      },
      {
        name: 'Living Room',
        description:
          'Large open-space living room with distinct dining and relaxation zones. The large sectional sofa can comfortably accommodate the whole group.',
        image: 'living-room.svg',
        amenities: ['Sectional sofa', 'Large smart TV', 'Dining table for 8+ people', 'Play area', 'Floor climate control'],
      },
      {
        name: 'Kitchen',
        description:
          'Professional fully equipped kitchen, designed for cooking enthusiasts. Features all necessary appliances, large stone countertop, central island, and pantry.',
        image: 'kitchen.svg',
        amenities: [
          'XXL refrigerator with freezer',
          '5-burner induction cooktop',
          'Double electric oven',
          'Large capacity dishwasher',
          'Microwave',
          'Professional coffee machine',
          'Central island',
          'Pots and dishes for 10+ people',
        ],
      },
      {
        name: 'Main Bathroom',
        description:
          'Main bathroom with shower, sink, and ample space. Includes washing machine for maximum convenience. Elegant design with high-quality finishes.',
        image: 'main-bathroom.svg',
        amenities: ['Shower', 'Sink', 'Washing machine', 'Hairdryer', 'Premium courtesy set'],
      },
      {
        name: 'Second Bathroom',
        description:
          'Complete second bathroom with shower and all comforts. Designed to handle the needs of a large group, ensuring everyone has convenient access.',
        image: 'second-bathroom.svg',
        amenities: ['Shower', 'Sink', 'Hairdryer', 'Towels provided', 'Courtesy set'],
      },
    ],
    features: [
      'High-speed WiFi',
      'Parking for 2 cars',
      'Private balcony',
      'Two full bathrooms',
      'Professional equipped kitchen',
      'Floor heating and cooling',
      'Large smart TV',
      'Washer and dryer',
      'Linens and towels for everyone',
      'Elevator',
      'Safe',
      'Cots and cribs available',
    ],
    idealFor: [
      'Large families',
      'Groups of friends',
      'Family reunions',
      'Special events',
      'Extended stays',
      'Those seeking maximum space',
    ],
  },
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
