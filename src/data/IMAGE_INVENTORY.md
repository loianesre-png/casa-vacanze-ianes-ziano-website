# Property Rental Template - Image Inventory

This document describes the image structure for the property rental template.

## Image Organization

All property images are stored in:
```
src/assets/images/
├── property-1/      # First property images
├── property-2/      # Second property images
├── property-3/      # Third property images
└── default.png      # Default SEO/OpenGraph image
```

---

## Placeholder Images

The template includes SVG placeholder images that should be replaced with your actual property photos.

### Property 1 (One Bedroom Apartment)

**Directory**: `src/assets/images/property-1/`

| Filename | Purpose | Recommended Size |
|----------|---------|------------------|
| hero.svg | Hero banner image | 1920x1080px |
| thumbnail.svg | Card/overview image | 800x600px |
| bedroom.svg | Bedroom photo | 1200x800px |
| living-room.svg | Living room photo | 1200x800px |
| kitchen.svg | Kitchen photo | 1200x800px |
| bathroom.svg | Bathroom photo | 1200x800px |
| balcony.svg | Balcony/outdoor photo | 1200x800px |

### Property 2 (Two Bedroom Apartment)

**Directory**: `src/assets/images/property-2/`

| Filename | Purpose | Recommended Size |
|----------|---------|------------------|
| hero.svg | Hero banner image | 1920x1080px |
| thumbnail.svg | Card/overview image | 800x600px |
| master-bedroom.svg | Master bedroom | 1200x800px |
| twin-bedroom.svg | Twin/second bedroom | 1200x800px |
| living-room.svg | Living room photo | 1200x800px |
| kitchen.svg | Kitchen photo | 1200x800px |
| main-bathroom.svg | Main bathroom | 1200x800px |
| second-bathroom.svg | Second bathroom | 1200x800px |
| balcony.svg | Balcony/outdoor photo | 1200x800px |

### Property 3 (Deluxe Suite)

**Directory**: `src/assets/images/property-3/`

| Filename | Purpose | Recommended Size |
|----------|---------|------------------|
| hero.svg | Hero banner image | 1920x1080px |
| thumbnail.svg | Card/overview image | 800x600px |
| master-bedroom-1.svg | First master bedroom | 1200x800px |
| master-bedroom-2.svg | Second master bedroom | 1200x800px |
| twin-bedroom-1.svg | First twin bedroom | 1200x800px |
| twin-bedroom-2.svg | Second twin bedroom | 1200x800px |
| living-room.svg | Living room photo | 1200x800px |
| kitchen.svg | Kitchen photo | 1200x800px |
| main-bathroom.svg | Main bathroom | 1200x800px |
| second-bathroom.svg | Second bathroom | 1200x800px |

---

## Replacing Placeholder Images

### Recommended Image Formats
- **WebP** - Best for web (smaller file size, good quality)
- **JPEG** - Alternative for photos
- **PNG** - For images with transparency

### Image Guidelines

1. **Hero Images**
   - Aspect ratio: 16:9 or 21:9
   - Minimum width: 1920px
   - Use `loading="eager"` and `fetchpriority="high"`

2. **Room Images**
   - Aspect ratio: 4:3 or 3:2
   - Minimum width: 1200px
   - Use `loading="lazy"` for below-fold images

3. **Thumbnails**
   - Aspect ratio: 4:3
   - Minimum width: 800px

### Optimization Tips

- Compress images before uploading
- Use WebP format when possible
- Astro will automatically generate responsive variants

---

## Adding More Images

To add additional images for a property gallery:

1. Add images to the property directory (e.g., `property-1/`)
2. Update the property YAML file to reference them:

```yaml
# In src/content/properties/property-1.yaml
images:
  hero: "hero.webp"
  thumbnail: "thumbnail.webp"
  gallery: "property-1"  # Loads all images from directory
```

Or specify individual images:

```yaml
images:
  hero: "hero.webp"
  thumbnail: "thumbnail.webp"
  gallery:
    - "image1.webp"
    - "image2.webp"
    - "image3.webp"
```

---

## Image Statistics (Template Default)

| Property | Placeholder Images |
|----------|-------------------|
| Property 1 | 7 SVG files |
| Property 2 | 9 SVG files |
| Property 3 | 10 SVG files |
| **Total** | **26 placeholder images** |

Replace these with your actual property photos for production use.
