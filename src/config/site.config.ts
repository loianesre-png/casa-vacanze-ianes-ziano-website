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
    name: 'Casa Vacanze Ianes',

    /** Short tagline (shown in some components) */
    tagline: 'Il tuo rifugio di pace nel cuore delle Dolomiti Trentine',

    /** Logo configuration (optional - uses text if not provided) */
    logo: {
      // src: 'images/logo.png',  // Uncomment and add your logo
      alt: 'Casa Vacanze Ianes',
      useText: true, // Set to false when using an image logo
    },
  },

  // ==========================================================================
  // CONTACT INFORMATION
  // ==========================================================================
  contact: {
    /** Primary contact email */
    email: 'loianes.re@gmail.com',

    /** Phone number with country code */
    phone: '+39 349 291 4657', // TODO: Add actual phone number

    /** WhatsApp number (optional) */
    whatsapp: '+39 349 291 4657', // TODO: Add actual WhatsApp number

    /** Physical address */
    address: {
      street: 'Località Mosenè',
      city: 'Ziano di Fiemme',
      region: 'Trentino Alto Adige',
      postalCode: '38030',
      country: 'Italia',
    },

    /** GPS coordinates for maps */
    coordinates: {
      lat: 46.2864,
      lng: 11.5614,
    },
  },

  // ==========================================================================
  // SOCIAL MEDIA LINKS (optional)
  // ==========================================================================
  social: {
    // facebook: 'https://facebook.com/casavacanzeianes',
    // instagram: 'https://instagram.com/casavacanzeianes',
    // tripadvisor: 'https://tripadvisor.com/...',
    // airbnb: 'https://airbnb.com/rooms/...',
    // booking: 'https://booking.com/hotel/...',
    // vrbo: 'https://www.vrbo.com/it-it/affitto-vacanze/p11986442',
  },

  // ==========================================================================
  // LEGAL & COMPLIANCE
  // ==========================================================================
  legal: {
    /** Legal business name (if different from site name) */
    companyName: 'Casa Vacanze Ianes',

    /** VAT/Tax ID number */
    // vatNumber: 'XX12345678901',

    /** Registration codes (CIN, licenses, etc.) */
    registrationCodes: [
      'CIN: IT022226C2S3BZ8358',
      'CIR: 022226-AT015570', // TODO: Add actual CIR code
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
      provider: 'google', // 'google' | 'openstreetmap' | 'none'
      // apiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Required for Google Maps
      defaultZoom: 15,
      /** Google Maps embed URL (get from Google Maps share > embed) */
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1159.1567345292046!2d11.571141527463851!3d46.29011366946691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4778635ae66f0901%3A0x1bc5e2a0a4447d6c!2sCasa%20vacanze%20Ianes%20-%20Il%20tuo%20angolo%20di%20pace%20nelle%20Dolomiti%20trentine!5e1!3m2!1sit!2sit!4v1769709112114!5m2!1sit!2sit',
    },
  },

  // ==========================================================================
  // SEO & METADATA
  // ==========================================================================
  seo: {
    /** Default page title */
    defaultTitle: 'Casa Vacanze Ianes - Dolomiti Trentine',

    /** Title template (use %s for page title) */
    titleTemplate: '%s — Casa Vacanze Ianes',

    /** Default meta description */
    description: 'Appartamento vacanze a piano terra a Ziano di Fiemme nel cuore delle Dolomiti Trentine. Panorama mozzafiato sul Lagorai, ampio prato privato, 4 posti letto + lettino bimbo. Il tuo rifugio di pace in Val di Fiemme.',

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
      handle: '@casavacanzeianes',
      site: '@casavacanzeianes',
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
  url: 'https://casavacanzeianes.it',

  /** Base path (usually '/') */
  basePath: '/',

  /** Use trailing slashes in URLs */
  trailingSlash: false,
};

export default siteConfig;
