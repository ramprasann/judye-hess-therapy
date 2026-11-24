export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export const MAIN_NAVIGATION: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'My Practice', href: '/my-practice' },
  { title: 'About Me', href: '/about-me' },
  { title: 'My Qualifications', href: '/my-qualifications' },
  { title: 'Publications', href: '/publications' },
  { title: 'Family Therapy', href: '/family-therapy' },
  { title: 'Couples Therapy', href: '/couples-therapy' },
  { title: 'Group Therapy', href: '/group-therapy' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact & Location', href: '/contact-location' },
];

export const CONTACT_INFO = {
  landline: '(510) 843-5683',
  landlineRaw: '+15108435683',
  landlineNote: 'land line, messages only',
  cell: '(510) 333-7686',
  cellRaw: '+15103337686',
  email: 'help@judyehess.com',
  altEmail: 'judyehess@gmail.com',
  address: {
    street: '2927A Shattuck Avenue',
    city: 'Berkeley',
    state: 'CA',
    zip: '94705',
    area: 'near Ashby BART station',
    full: '2927A Shattuck Avenue, Berkeley, CA 94705',
    mapUrl: 'https://goo.gl/maps/fAfmtPC6ffGDuVJ36'
  },
  license: 'Licensed Clinical Psychologist (PSY 7468)',
  theraviveUrl: 'http://www.theravive.com/therapists/judye-hess.aspx',
  facebookUrl: 'https://www.facebook.com/judyehess/',
  linkedinUrl: 'https://www.linkedin.com',
};
