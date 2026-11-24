export interface PublicationItem {
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
