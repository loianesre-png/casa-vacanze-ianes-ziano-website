import { getPermalink } from './utils/permalinks';
import {
  getContactEmail,
  getFormattedRegistrationCodes,
  getCopyrightText,
  getSiteName,
} from './config';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About Us',
      href: '/#about',
    },
    {
      text: 'Properties',
      href: '/#properties',
      links: [
        {
          text: 'One Bedroom Apartment',
          href: '/properties/property-1',
        },
        {
          text: 'Two Bedroom Apartment',
          href: '/properties/property-2',
        },
        {
          text: 'Deluxe Suite',
          href: '/properties/property-3',
        },
        {
          text: 'All Properties',
          href: '/#properties',
        },
      ],
    },
    {
      text: 'Amenities',
      href: '/#amenities',
    },
    {
      text: 'Testimonials',
      href: '/#testimonials',
    },
  ],
  actions: [
    {
      text: 'Contact Us',
      href: '/contact',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Quick Links',
      links: [
        { text: 'Home', href: '/' },
        { text: 'About Us', href: '/#about' },
        { text: 'Properties', href: '/#properties' },
        { text: 'Amenities', href: '/#amenities' },
        { text: 'Testimonials', href: '/#testimonials' },
        { text: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Properties',
      links: [
        { text: 'One Bedroom Apartment', href: '/properties/property-1' },
        { text: 'Two Bedroom Apartment', href: '/properties/property-2' },
        { text: 'Deluxe Suite', href: '/properties/property-3' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Cookies', href: getPermalink('/cookies') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
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
      Registration Codes: ${getFormattedRegistrationCodes()}
      <br />
      ${getCopyrightText()}. All rights reserved.

  `,
};
