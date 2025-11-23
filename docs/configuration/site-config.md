# Site Configuration

The site configuration file (`src/config/site.config.ts`) contains all the essential settings for your website identity, contact information, integrations, and SEO.

## Configuration File

Location: `src/config/site.config.ts`

## Configuration Options

### Identity

```typescript
identity: {
  name: string;        // Your property/business name
  tagline?: string;    // Optional tagline
  logo?: {
    src: string;       // Path to logo image
    alt: string;       // Alt text for logo
    width?: number;    // Optional width
    height?: number;   // Optional height
  };
}
```

**Example:**
```typescript
identity: {
  name: 'Villa Serena',
  tagline: 'Your home away from home',
  logo: {
    src: '/images/logo.svg',
    alt: 'Villa Serena Logo',
  },
}
```

### Contact Information

```typescript
contact: {
  email: string;
  phone?: string;
  whatsapp?: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
}
```

**Example:**
```typescript
contact: {
  email: 'info@villaserena.com',
  phone: '+39 123 456 7890',
  whatsapp: '+39123456789',
  address: {
    street: 'Via Roma 123',
    city: 'Trento',
    postalCode: '38100',
    country: 'Italy',
    coordinates: {
      lat: 46.0748,
      lng: 11.1217,
    },
  },
}
```

### Social Media

```typescript
social?: {
  facebook?: string;     // Facebook page URL
  instagram?: string;    // Instagram profile URL
  twitter?: string;      // Twitter profile URL
  tripadvisor?: string;  // TripAdvisor listing URL
  airbnb?: string;       // Airbnb listing URL
  booking?: string;      // Booking.com listing URL
}
```

**Example:**
```typescript
social: {
  facebook: 'https://facebook.com/villaserena',
  instagram: 'https://instagram.com/villaserena',
  tripadvisor: 'https://tripadvisor.com/your-listing',
}
```

### Legal Information

```typescript
legal?: {
  companyName?: string;       // Legal company name
  vatNumber?: string;         // VAT/Tax ID
  registrationCodes?: string[]; // CIN codes, registration numbers
  privacyPolicyUrl?: string;
  termsUrl?: string;
}
```

**Example:**
```typescript
legal: {
  companyName: 'Villa Serena S.r.l.',
  vatNumber: 'IT12345678901',
  registrationCodes: [
    'CIN: IT-TN-012345-ABC123',
  ],
}
```

### Integrations

```typescript
integrations: {
  contactForm?: {
    provider: 'webhook' | 'email' | 'none';
    webhookUrl?: string;
    emailTo?: string;
  };
  analytics?: {
    googleAnalyticsId?: string;
    plausibleDomain?: string;
  };
  maps?: {
    provider: 'google' | 'openstreetmap';
    apiKey?: string;
  };
}
```

**Example:**
```typescript
integrations: {
  contactForm: {
    provider: 'webhook',
    webhookUrl: 'https://your-webhook-url.com/contact',
  },
  analytics: {
    googleAnalyticsId: 'G-XXXXXXXXXX',
  },
  maps: {
    provider: 'openstreetmap',
  },
}
```

### SEO Configuration

```typescript
seo: {
  defaultTitle: string;
  titleTemplate: string;    // e.g., "%s | Villa Serena"
  description: string;
  language: string;         // e.g., "it", "en"
  siteUrl: string;
  robots: {
    index: boolean;
    follow: boolean;
  };
  openGraph?: {
    image?: string;
    type?: string;
  };
}
```

**Example:**
```typescript
seo: {
  defaultTitle: 'Villa Serena - Holiday Apartments in Trento',
  titleTemplate: '%s | Villa Serena',
  description: 'Beautiful holiday apartments in the heart of Trento, Italy.',
  language: 'it',
  siteUrl: 'https://villaserena.com',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    image: '/images/og-image.jpg',
    type: 'website',
  },
}
```

## Complete Example

```typescript
// src/config/site.config.ts
import type { SiteConfig } from './schema/site';

const siteConfig: SiteConfig = {
  identity: {
    name: 'Villa Serena',
    tagline: 'Your home away from home',
  },

  contact: {
    email: 'info@villaserena.com',
    phone: '+39 123 456 7890',
    address: {
      street: 'Via Roma 123',
      city: 'Trento',
      postalCode: '38100',
      country: 'Italy',
    },
  },

  social: {
    instagram: 'https://instagram.com/villaserena',
  },

  legal: {
    companyName: 'Villa Serena S.r.l.',
    vatNumber: 'IT12345678901',
  },

  integrations: {
    contactForm: {
      provider: 'webhook',
      webhookUrl: 'https://your-webhook.com/contact',
    },
    maps: {
      provider: 'openstreetmap',
    },
  },

  seo: {
    defaultTitle: 'Villa Serena',
    titleTemplate: '%s | Villa Serena',
    description: 'Holiday apartments in Trento',
    language: 'it',
    siteUrl: 'https://villaserena.com',
    robots: {
      index: true,
      follow: true,
    },
  },
};

export default siteConfig;
```

## Accessing Configuration

Use the helper functions from `src/config/index.ts`:

```typescript
import {
  getSiteName,
  getContactEmail,
  getContactPhone,
  getSocialLinks,
  getSiteUrl,
} from '~/config';

// In your component
const siteName = getSiteName();
const email = getContactEmail();
```

## Next Steps

- [Property Configuration](./properties.md)
- [Theme Configuration](./theme.md)
