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
    name: 'Your Property Name',

    /** Short tagline (shown in some components) */
    tagline: 'Vacation rentals in Your City',

    /** Logo configuration (optional - uses text if not provided) */
    logo: {
      // src: 'images/logo.png',  // Uncomment and add your logo
      alt: 'Your Property Name',
      useText: true, // Set to false when using an image logo
    },
  },

  // ==========================================================================
  // CONTACT INFORMATION
  // ==========================================================================
  contact: {
    /** Primary contact email */
    email: 'contact@example.com',

    /** Phone number with country code */
    phone: '+1 XXX XXX XXXX', // TODO: Add actual phone number

    /** WhatsApp number (optional) */
    // whatsapp: '+1 XXX XXX XXXX',

    /** Physical address */
    address: {
      street: '123 Main Street',
      city: 'Your City',
      region: 'Your State/Region',
      postalCode: '12345',
      country: 'Country',
    },

    /** GPS coordinates for maps */
    coordinates: {
      lat: 40.7128,
      lng: -74.0060,
    },
  },

  // ==========================================================================
  // SOCIAL MEDIA LINKS (optional)
  // ==========================================================================
  social: {
    // facebook: 'https://facebook.com/yourproperty',
    // instagram: 'https://instagram.com/yourproperty',
    // tripadvisor: 'https://tripadvisor.com/...',
    // airbnb: 'https://airbnb.com/rooms/...',
    // booking: 'https://booking.com/hotel/...',
  },

  // ==========================================================================
  // LEGAL & COMPLIANCE
  // ==========================================================================
  legal: {
    /** Legal business name (if different from site name) */
    companyName: 'Your Company Name',

    /** VAT/Tax ID number */
    // vatNumber: 'XX12345678901',

    /** Registration codes (CIN, licenses, etc.) */
    registrationCodes: [
      'LICENSE-001',
      'LICENSE-002',
      'LICENSE-003',
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
      webhookUrl: 'https://your-webhook-url.com/endpoint',
      // Alternative: send to email
      // provider: 'email',
      // emailTo: 'contact@example.com',
    },

    /** Analytics configuration */
    analytics: {
      // googleAnalyticsId: 'G-XXXXXXXXXX',
      // plausibleDomain: 'yourdomain.com',
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
    defaultTitle: 'Your Property Name',

    /** Title template (use %s for page title) */
    titleTemplate: '%s — Your Property Name',

    /** Default meta description */
    description: 'Vacation rentals for your perfect getaway in Your City',

    /** Site language (ISO 639-1 code) */
    language: 'en',

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
      handle: '@yourproperty',
      site: '@yourproperty',
      cardType: 'summary_large_image',
    },

    /** Google site verification */
    // googleSiteVerificationId: 'your-verification-id',
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
  url: 'https://yourdomain.com',

  /** Base path (usually '/') */
  basePath: '/',

  /** Use trailing slashes in URLs */
  trailingSlash: false,
};

export default siteConfig;
