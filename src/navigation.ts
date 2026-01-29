import { getPermalink } from './utils/permalinks';
import { getContactEmail, getFormattedRegistrationCodes, getCopyrightText } from './config';

/**
 * Navigation Data
 * ---------------
 * Text labels here are fallback values only.
 * Translations are applied in PageLayout.astro using the dictionary system.
 * See: src/content/dictionary/{locale}/common.yaml -> navigation section
 */
export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Chi siamo',
      href: '/#about',
    },
    {
      text: 'Appartamenti',
      href: '/appartamenti/casa-vacanze-ianes',
    },
    {
      text: 'Servizi',
      href: '/#amenities',
    },
    {
      text: 'Testimonianze',
      href: '/#testimonials',
    },
  ],
  actions: [
    {
      text: 'Contatti',
      href: '/contact',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Link rapidi',
      links: [
        { text: 'Home', href: '/' },
        { text: 'Chi siamo', href: '/#about' },
        { text: 'Appartamenti', href: '/#properties' },
        { text: 'Servizi', href: '/#amenities' },
        { text: 'Testimonianze', href: '/#testimonials' },
        { text: 'Contatti', href: '/contact' },
      ],
    },
    {
      title: 'Appartamenti',
      links: [
        { text: 'I nostri appartamenti', href: '/appartamenti/casa-vacanze-ianes' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Cookie', href: getPermalink('/cookies') },
    { text: 'Privacy', href: getPermalink('/privacy') },
    { text: getContactEmail(), href: `mailto:${getContactEmail()}` },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
      ${getFormattedRegistrationCodes('<br />')}
      <br />
      ${getCopyrightText()}. Tutti i diritti riservati.

  `,
};
