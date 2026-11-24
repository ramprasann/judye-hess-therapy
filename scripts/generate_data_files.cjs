const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'audit_raw');

function cleanText(t) {
  if (!t) return '';
  return t
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#038;/g, '&')
    .replace(/&amp;/g, '&')
    .replace(/&#010;/g, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/[ \t]+/g, ' ')
    .trim();
}

function getHtml(file) {
  return fs.readFileSync(path.join(dir, file), 'utf-8');
}

// 1. My Practice
const myPracticeHtml = getHtml('my-practice.html');
const myPracticeParagraphs = [...myPracticeHtml.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
  .map(m => cleanText(m[1]))
  .filter(p => p.length > 30 && !p.includes('Proudly powered') && !p.includes('Theme:') && !p.includes('Contact me') && !p.includes('Skip to'));

const myPracticeTs = `export const MY_PRACTICE_DATA = {
  title: "My Practice",
  subtitle: "A Clinical Psychologist in California",
  image: "/images/therapist/judye-hess-about.jpg",
  paragraphs: ${JSON.stringify(myPracticeParagraphs, null, 2)}
};
`;
fs.writeFileSync('src/data/myPractice.ts', myPracticeTs, 'utf-8');

// 2. About Me
const aboutMeHtml = getHtml('about-me.html');
const aboutMeParagraphs = [...aboutMeHtml.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
  .map(m => cleanText(m[1]))
  .filter(p => p.length > 30 && !p.includes('Proudly powered') && !p.includes('Theme:') && !p.includes('Contact me') && !p.includes('Skip to'));

const aboutMeTs = `export const ABOUT_ME_DATA = {
  title: "About Me",
  subtitle: "Clinical Psychologist & Relationship Specialist in Berkeley, CA",
  image: "/images/therapist/judye-hess-about.jpg",
  paragraphs: ${JSON.stringify(aboutMeParagraphs, null, 2)}
};
`;
fs.writeFileSync('src/data/aboutMe.ts', aboutMeTs, 'utf-8');

// 3. Qualifications
const qualHtml = getHtml('my-qualifications.html');
const qualParagraphs = [...qualHtml.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
  .map(m => cleanText(m[1]))
  .filter(p => p.length > 30 && !p.includes('Proudly powered') && !p.includes('Theme:') && !p.includes('Contact me') && !p.includes('Skip to'));

const qualTs = `export const QUALIFICATIONS_DATA = {
  title: "My Qualifications",
  subtitle: "Education, Clinical Training & Professional Memberships",
  license: "California Clinical Psychologist (License PSY 7468)",
  paragraphs: ${JSON.stringify(qualParagraphs, null, 2)},
  highlights: [
    {
      title: "Interpersonal Communication Specialist",
      desc: "Helping people communicate in a more direct, authentic and compassionate manner."
    },
    {
      title: "Therapeutic Orientations",
      desc: "Informed by Gestalt therapy, Systems theory, Psychodynamic therapy, and ongoing personal mindfulness/meditation practice."
    },
    {
      title: "Group Therapy Leadership",
      desc: "Active member and past board member of the Northern California Group Psychotherapy Society (NCGPS)."
    },
    {
      title: "Family Therapy Leadership",
      desc: "Active member and former steering committee member of the Association for Family Therapy of Northern California."
    },
    {
      title: "Academic Faculty Emerita",
      desc: "Over 30 years teaching Family Dynamics, Couples Therapy, and Group Dynamics at the California Institute of Integral Studies (CIIS)."
    }
  ]
};
`;
fs.writeFileSync('src/data/qualifications.ts', qualTs, 'utf-8');

// 4. Publications
const pubTs = `export interface PublicationItem {
  title: string;
  author: string;
  details: string;
  pdfUrl?: string;
  linkUrl?: string;
  linkText?: string;
}

export const PUBLICATIONS_DATA = {
  title: "Publications",
  subtitle: "Books, Academic Articles, Media Features & Interviews",
  myPublications: [
    {
      title: "Core Focused Family Therapy: Moving from Chaos to Clarity",
      author: "Judye Hess PhD and Ross Cohen LPC",
      details: "Idyll Arbor - 2008",
      linkUrl: "https://www.amazon.com/Core-Focused-Family-Therapy-Clarity/dp/1882883705",
      linkText: "View on Amazon",
      image: "/images/books/core-focused-family-therapy.jpg"
    },
    {
      title: "Speaking from the Heart: An Experiential Approach to Resolving Family Cleavages",
      author: "Judye Hess PhD",
      details: "The Journal of Systemic Therapies, 2008",
      pdfUrl: "/publications/SpeakingfromtheHeart.pdf",
      linkText: "Download Full PDF"
    },
    {
      title: "Dual-Dwelling Duos: An Alternative for Couples",
      author: "Judye Hess PhD and Padma Catell PhD",
      details: "Alternative Family Styles, 2004",
      pdfUrl: "/publications/Duos-Hess.pdf",
      linkText: "Download Full PDF"
    },
    {
      title: "Closeness in the Couple Relationship",
      author: "Judye Hess PhD",
      details: "The California Psychologist, 2004",
      note: "Archived monograph & clinical reference"
    }
  ],
  citedPublications: [
    {
      title: "Divide and Conquer: Married but Separate",
      author: "Elle Magazine",
      details: "March 2012 (feature on Dr. Judye Hess's Living Apart Together research, see pg. 2)",
      linkUrl: "http://www.elle.com/life-love/sex-relationships/divide-conquer-married-but-separate-644331",
      linkText: "Read Article on Elle.com"
    },
    {
      title: "Living Apart Together",
      author: "The New York Times",
      details: "May 4, 2006 (House & Home Section feature citing Dr. Hess)",
      linkUrl: "http://www.nytimes.com/2006/05/04/garden/04lat.html?pagewanted=all",
      linkText: "Read in The New York Times"
    },
    {
      title: "Achieving Domestic Harmony in Separate Living",
      author: "San Francisco Chronicle",
      details: "Interview and feature on couple lifestyles and LAT arrangements",
      linkUrl: "http://www.sfgate.com/default/article/Achieving-domestic-harmony-in-separate-living-2517232.php",
      linkText: "Read on SFGate"
    }
  ],
  interviews: [
    {
      title: 'Mind-Body Radio: "Relationship Therapy"',
      author: "Judye Hess, PhD",
      details: "Featured interview on clinical approaches to couples and family dynamics, 2020."
    },
    {
      title: 'Ask the Shrinks: "Dual Dwelling Duos"',
      author: "KGO-AM Radio San Francisco",
      details: "Guest therapist radio interview discussing modern relationship configurations.",
      videoUrl: "https://youtu.be/--lx9id8BZ4"
    },
    {
      title: "CIIS Faculty & Academic Contributions",
      author: "California Institute of Integral Studies",
      details: "30+ years of training Masters and Doctoral clinical psychology students in systems and couples therapy.",
      linkUrl: "https://www.ciis.edu/academics/faculty",
      linkText: "CIIS Faculty"
    }
  ]
};
`;
fs.writeFileSync('src/data/publications.ts', pubTs, 'utf-8');

// 5. Therapy Pages (Family, Couples, Group)
const familyHtml = getHtml('family-therapy.html');
const familyParagraphs = [...familyHtml.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
  .map(m => cleanText(m[1]))
  .filter(p => p.length > 30 && !p.includes('Proudly powered') && !p.includes('Theme:') && !p.includes('Contact me') && !p.includes('Skip to'));

const couplesHtml = getHtml('couples-therapy.html');
const couplesParagraphs = [...couplesHtml.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
  .map(m => cleanText(m[1]))
  .filter(p => p.length > 30 && !p.includes('Proudly powered') && !p.includes('Theme:') && !p.includes('Contact me') && !p.includes('Skip to'));

const couplesChallenges = [
  "Communication breakdowns • Repeating destructive loops and misunderstandings",
  "Intimacy and emotional distance struggles • Pursuer-distancer patterns",
  "Infidelity, betrayal, and rebuilding broken trust",
  "Parenting friction, blended family stresses, and life transitions",
  "Negotiating differing needs for autonomy versus closeness",
  "Managing conflict constructively without contempt, defensiveness, or stonewalling",
  "Rekindling affection, playfulness, and shared purpose in long-term relationships"
];

const groupHtml = getHtml('group-therapy.html');
const groupParagraphs = [...groupHtml.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
  .map(m => cleanText(m[1]))
  .filter(p => p.length > 30 && !p.includes('Proudly powered') && !p.includes('Theme:') && !p.includes('Contact me') && !p.includes('Skip to'));

const therapyPagesTs = `export const FAMILY_THERAPY_DATA = {
  title: "Intergenerational Family Therapy",
  subtitle: '"Adult Children" and their Families',
  introLead: "Addressing childhood wounds, unspoken tensions, and intergenerational patterns in a safe, constructive space.",
  paragraphs: ${JSON.stringify(familyParagraphs, null, 2)}
};

export const COUPLES_THERAPY_DATA = {
  title: "Couples Therapy",
  subtitle: "Couples Therapy in my Berkeley office, or on-line all over the state of California",
  sections: [
    {
      heading: "A Systems-Based Approach to Couples Therapy",
      content: [
        ${JSON.stringify(couplesParagraphs[0] || '')},
        ${JSON.stringify(couplesParagraphs[1] || '')},
        ${JSON.stringify(couplesParagraphs[2] || '')}
      ]
    },
    {
      heading: "Relationship Challenges Couples Often Bring to Therapy",
      challenges: ${JSON.stringify(couplesChallenges, null, 2)},
      content: [
        ${JSON.stringify(couplesParagraphs[3] || '')}
      ]
    },
    {
      heading: "A Collaborative and Interactive Experience",
      content: [
        ${JSON.stringify(couplesParagraphs[4] || '')},
        ${JSON.stringify(couplesParagraphs[5] || '')}
      ]
    },
    {
      heading: "Teletherapy Options for California Couples",
      content: [
        ${JSON.stringify(couplesParagraphs[6] || '')}
      ]
    },
    {
      heading: "Why Couples Therapy Matters",
      content: [
        ${JSON.stringify(couplesParagraphs[7] || '')}
      ]
    },
    {
      heading: "Getting Started",
      content: [
        ${JSON.stringify(couplesParagraphs[8] || '')}
      ]
    }
  ]
};

export const GROUP_THERAPY_DATA = {
  title: "Group Therapy",
  subtitle: "Safe, Supportive Interpersonal Therapy Groups in Berkeley",
  guidingQuestions: [
    "What do I do that creates distance?",
    "How could I bring others closer?",
    "How can I have more satisfying relationships with friends, family, and intimate partners?"
  ],
  paragraphs: ${JSON.stringify(groupParagraphs, null, 2)}
};
`;
fs.writeFileSync('src/data/therapyPages.ts', therapyPagesTs, 'utf-8');

// 6. Blog Posts
const blogJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'full_blog_posts.json'), 'utf-8'));
const blogPostsTs = `export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: {
    type: 'paragraph' | 'heading' | 'quote' | 'list';
    text?: string;
    items?: string[];
  }[];
  media?: {
    type: 'video' | 'audio' | 'link';
    url: string;
    caption: string;
  };
}

export const BLOG_POSTS: BlogPost[] = ${JSON.stringify(blogJson.map(b => {
  let excerpt = '';
  const firstP = b.content.find(c => c.type === 'paragraph');
  if (firstP && firstP.text) {
    excerpt = firstP.text.slice(0, 180) + '...';
  }
  let media = undefined;
  if (b.slug === 'dual-dwelling-duos') {
    media = {
      type: 'video',
      url: 'https://www.youtube.com/embed/--lx9id8BZ4',
      caption: 'Guest therapist Dr. Judye Hess on "Ask the Shrinks" radio show on KGO-AM, San Francisco'
    };
  }
  return {
    ...b,
    excerpt,
    media
  };
}), null, 2)};
`;
fs.writeFileSync('src/data/blogPosts.ts', blogPostsTs, 'utf-8');

// 7. Contact & Location
const contactTs = `export const CONTACT_PAGE_DATA = {
  title: "Location & Contact",
  subtitle: "Berkeley Office & California-Wide Teletherapy",
  officeDescription: "My office is conveniently located in Berkeley near the Ashby BART station at 2927A Shattuck Avenue. I am currently seeing clients both in person at this location and online via teletherapy for clients throughout the state of California.",
  contactDetails: {
    address: "2927A Shattuck Avenue, Berkeley, CA 94705",
    area: "Near Ashby BART station",
    landline: "(510) 843-5683",
    landlineNote: "land line, messages only",
    cell: "(510) 333-7686",
    email: "help@judyehess.com",
    altEmail: "judyehess@gmail.com",
    mapUrl: "https://goo.gl/maps/fAfmtPC6ffGDuVJ36"
  },
  consultationNote: "I offer a free initial phone consultation to discuss what brings you to therapy, answer any questions you may have, and determine if we are a good fit for working together."
};
`;
fs.writeFileSync('src/data/contactLocation.ts', contactTs, 'utf-8');

console.log('All structured TypeScript data files created successfully in src/data/!');
