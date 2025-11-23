/**
 * Site Configuration
 * ===================
 * Main configuration file for your property rental website.
 *
 * Edit this file to customize:
 * - Site name and branding
 * - Contact information
 * - Social media links
 * - Legal/compliance info
 * - External integrations
 * - SEO settings
 *
 * For detailed documentation, see: docs/configuration/site-config.md
 */

import type { SiteConfig } from './schema/site';

const siteConfig: SiteConfig = {
  // ==========================================================================
  // SITE IDENTITY
  // ==========================================================================
  identity: {
    /** Your business/site name */
    name: 'Casa Negrano',

    /** Short tagline (shown in some components) */
    tagline: 'Appartamenti vacanze a Trento',

    /** Logo configuration (optional - uses text if not provided) */
    logo: {
      // src: 'images/logo.png',  // Uncomment and add your logo
      alt: 'Casa Negrano',
      useText: true, // Set to false when using an image logo
    },
  },

  // ==========================================================================
  // CONTACT INFORMATION
  // ==========================================================================
  contact: {
    /** Primary contact email */
    email: 'casanegrano@gmail.com',

    /** Phone number with country code */
    phone: '+39 XXX XXX XXXX', // TODO: Add actual phone number

    /** WhatsApp number (optional) */
    // whatsapp: '+39 XXX XXX XXXX',

    /** Physical address */
    address: {
      street: 'Località Negrano 13',
      city: 'Trento',
      region: 'Trentino-Alto Adige',
      postalCode: '38123',
      country: 'Italy',
    },

    /** GPS coordinates for maps */
    coordinates: {
      lat: 46.0588,
      lng: 11.1389,
    },
  },

  // ==========================================================================
  // SOCIAL MEDIA LINKS (optional)
  // ==========================================================================
  social: {
    // facebook: 'https://facebook.com/casanegrano',
    // instagram: 'https://instagram.com/casanegrano',
    // tripadvisor: 'https://tripadvisor.com/...',
    // airbnb: 'https://airbnb.com/rooms/...',
    // booking: 'https://booking.com/hotel/...',
  },

  // ==========================================================================
  // LEGAL & COMPLIANCE
  // ==========================================================================
  legal: {
    /** Legal business name (if different from site name) */
    companyName: 'Casa Negrano',

    /** VAT/Tax ID number */
    // vatNumber: 'IT12345678901',

    /** Registration codes (CIN, licenses, etc.) */
    registrationCodes: [
      'IT022205C2A7J22SB7',
      'IT022205C269BP38G3',
      'IT022205C2I72MMQXZ',
    ],

    /** Legal page URLs */
    privacyPolicyUrl: '/privacy',
    cookiePolicyUrl: '/cookies',
    // termsUrl: '/terms',

    /** Copyright year (defaults to current year if not set) */
    copyrightYear: 2025,
  },

  // ==========================================================================
  // EXTERNAL INTEGRATIONS
  // ==========================================================================
  integrations: {
    /** Contact form configuration */
    contactForm: {
      enabled: true,
      provider: 'webhook',
      webhookUrl: 'https://n8n.casanegrano.it/webhook/99e9a979-9ef4-472b-b75c-8f3dc29c40c1',
      // Alternative: send to email
      // provider: 'email',
      // emailTo: 'casanegrano@gmail.com',
    },

    /** Analytics configuration */
    analytics: {
      googleAnalyticsId: 'G-2DYB43PT74',
      // plausibleDomain: 'casanegrano.it',
    },

    /** Maps configuration */
    maps: {
      provider: 'openstreetmap', // 'google' | 'openstreetmap' | 'none'
      // apiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Required for Google Maps
      defaultZoom: 15,
    },
  },

  // ==========================================================================
  // SEO & METADATA
  // ==========================================================================
  seo: {
    /** Default page title */
    defaultTitle: 'Casa Negrano',

    /** Title template (use %s for page title) */
    titleTemplate: '%s — Casa Negrano',

    /** Default meta description */
    description: 'Appartamenti per la tua vacanza in Trentino, Trento, Italia',

    /** Site language (ISO 639-1 code) */
    language: 'it',

    /** Text direction */
    textDirection: 'ltr',

    /** Robots meta settings */
    robots: {
      index: true,
      follow: true,
    },

    /** Open Graph settings */
    openGraph: {
      image: '~/assets/images/default.png',
      type: 'website',
    },

    /** Twitter card settings */
    twitter: {
      handle: '@casanegrano',
      site: '@casanegrano',
      cardType: 'summary_large_image',
    },

    /** Google site verification */
    googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
  },

  // ==========================================================================
  // FEATURE FLAGS
  // ==========================================================================
  features: {
    /** Enable blog functionality */
    blog: false,

    /** Show testimonials section */
    testimonials: true,

    /** Show pricing information */
    pricing: false,

    /** Enable dark mode toggle */
    darkMode: false,
  },

  // ==========================================================================
  // SITE URLS
  // ==========================================================================
  /** Full site URL (for sitemap, canonical URLs) */
  url: 'https://casanegrano.it',

  /** Base path (usually '/') */
  basePath: '/',

  /** Use trailing slashes in URLs */
  trailingSlash: false,
};

export default siteConfig;
