# Property Configuration

Properties are defined using YAML files in `src/content/properties/`. Each property has its own file.

## Property File Location

```
src/content/properties/
├── _example.yaml       # Template for creating new properties
├── bilocale.yaml       # Example property
├── trilocale.yaml      # Example property
└── suite-deluxe.yaml   # Example property
```

## Creating a New Property

1. Copy `_example.yaml` to a new file (e.g., `my-apartment.yaml`)
2. Edit the values to match your property
3. Add images to `src/assets/images/{property-slug}/`

## Property Schema

### Basic Information (Required)

```yaml
id: my-apartment           # Unique identifier (no spaces)
slug: my-apartment         # URL-friendly slug
published: true            # Set to false to hide
order: 1                   # Display order (lower = first)

name: "My Apartment Name"  # Display name
subtitle: "Brief tagline"  # Short subtitle for cards

description: >             # Full description
  Write your full apartment description here.
  This text appears on the property detail page.

shortDescription: "Brief description for cards"  # Optional
```

### Capacity & Size (Required)

```yaml
capacity:
  guests: 4                # Maximum guests
  bedrooms: "2 bedrooms"   # Bedroom text
  bathrooms: "1 bathroom"  # Bathroom text
  beds:                    # Optional: detailed beds
    double: 1
    single: 2
    sofa: 0

size:
  value: 80                # Size number
  unit: sqm                # sqm or sqft
```

### Images (Required)

```yaml
images:
  hero: "hero-image.webp"      # Main hero image
  thumbnail: "thumb.webp"      # Card thumbnail
  gallery: "my-apartment"      # Folder for gallery images
  # Or list specific images:
  # gallery:
  #   - "image1.webp"
  #   - "image2.webp"
```

**Image Requirements:**
- Place images in `src/assets/images/{slug}/`
- Use WebP format for best performance
- Recommended sizes:
  - Hero: 1920x1080px minimum
  - Thumbnail: 800x600px
  - Room images: 1200x800px

### Rooms

```yaml
rooms:
  - name: "Bedroom"
    description: "Description of the bedroom"
    image: "bedroom.webp"     # Image filename
    amenities:                # Optional: room amenities
      - "King bed"
      - "Wardrobe"
      - "Air conditioning"

  - name: "Living Room"
    description: "Description of the living room"
    image: "living.webp"
    amenities:
      - "Sofa"
      - "Smart TV"
      - "Dining table"

  - name: "Kitchen"
    description: "Description of the kitchen"
    image: "kitchen.webp"
    amenities:
      - "Refrigerator"
      - "Stove"
      - "Microwave"

  - name: "Bathroom"
    description: "Description of the bathroom"
    image: "bathroom.webp"
    amenities:
      - "Shower"
      - "Hair dryer"
```

### Features & Amenities

```yaml
features:                     # Key features (shown prominently)
  - "Free WiFi"
  - "Free parking"
  - "Air conditioning"
  - "Fully equipped kitchen"

amenities:                    # Full amenities list
  - "Washing machine"
  - "Iron"
  - "Desk"
  - "Safe"

idealFor:                     # Target audience
  - "Couples"
  - "Families"
  - "Business travelers"
```

### Pricing (Optional)

```yaml
pricing:
  enabled: true
  currency: EUR
  currencySymbol: "€"
  startingFrom: 80            # "From X per night"
  periods:
    - name: "Low season"
      dates: "November - March"
      pricePerNight: 80
      minimumStay: 2
    - name: "High season"
      dates: "June - August"
      pricePerNight: 120
      minimumStay: 3
  note: "Prices exclude cleaning fee"
```

### SEO (Optional)

```yaml
seo:
  title: "Custom page title"
  description: "Custom meta description"
  image: "og-image.webp"     # Custom Open Graph image
```

## Complete Example

```yaml
# src/content/properties/beach-house.yaml
id: beach-house
slug: beach-house
published: true
order: 1

name: "Beach House Retreat"
subtitle: "Oceanfront paradise with stunning views"

description: >
  Experience the ultimate beach getaway in our stunning oceanfront property.
  Wake up to the sound of waves and enjoy breathtaking sunset views from
  your private terrace. Perfect for families and couples seeking relaxation.

shortDescription: "Oceanfront property with private beach access"

capacity:
  guests: 6
  bedrooms: "3 bedrooms"
  bathrooms: "2 bathrooms"
  beds:
    double: 2
    single: 2

size:
  value: 150
  unit: sqm

images:
  hero: "beach-hero.webp"
  thumbnail: "beach-thumb.webp"
  gallery: "beach-house"

rooms:
  - name: "Master Bedroom"
    description: "Ocean-view master suite with king bed and ensuite bathroom"
    image: "master.webp"
    amenities:
      - "King bed"
      - "Ocean view"
      - "Ensuite bathroom"
      - "Walk-in closet"

  - name: "Guest Bedroom"
    description: "Comfortable twin room perfect for children or guests"
    image: "guest.webp"
    amenities:
      - "Two single beds"
      - "Wardrobe"
      - "Desk"

  - name: "Living Area"
    description: "Open-plan living with panoramic ocean views"
    image: "living.webp"
    amenities:
      - "Smart TV"
      - "Sofa bed"
      - "Ocean view"

  - name: "Kitchen"
    description: "Modern fully-equipped kitchen"
    image: "kitchen.webp"
    amenities:
      - "Full-size appliances"
      - "Dishwasher"
      - "Coffee maker"

features:
  - "Private beach access"
  - "Ocean view terrace"
  - "Free WiFi"
  - "Air conditioning"
  - "Free parking"

amenities:
  - "BBQ grill"
  - "Outdoor shower"
  - "Beach chairs & umbrellas"
  - "Kayaks"

idealFor:
  - "Families"
  - "Couples"
  - "Beach lovers"

pricing:
  enabled: true
  currency: USD
  currencySymbol: "$"
  startingFrom: 200
  periods:
    - name: "Off-season"
      dates: "September - May"
      pricePerNight: 200
      minimumStay: 2
    - name: "Peak season"
      dates: "June - August"
      pricePerNight: 350
      minimumStay: 7
  note: "Security deposit required"

seo:
  title: "Beach House Retreat - Oceanfront Vacation Rental"
  description: "Book our stunning oceanfront beach house with private beach access."
```

## Single Property Mode

If you have only one property, the template automatically detects this and adjusts the UI accordingly (e.g., hiding property selection).

To check for single property mode in code:

```typescript
import { isSinglePropertyMode } from '~/utils/properties';

const isSingle = await isSinglePropertyMode();
```

## Accessing Property Data

```typescript
import {
  getProperties,
  getPropertyBySlug,
  getPropertyById,
} from '~/utils/properties';

// Get all published properties
const properties = await getProperties();

// Get single property by slug
const property = await getPropertyBySlug('beach-house');

// Get property by ID
const property = await getPropertyById('beach-house');
```

## Next Steps

- [Theme Configuration](./theme.md)
- [Content Customization](../customization/content.md)
