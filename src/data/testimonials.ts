export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role?: string;
  rating: number;
  date: string;
  verified: boolean;
  content: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'bradly',
    name: 'Bradly',
    avatar: '/images/testimonials/reviewer-1.png',
    rating: 5,
    date: 'Verified Google Review',
    verified: true,
    content: "My partner and I have had an incredibly positive experience working with Judye. From the very beginning, I was impressed by her ability to identify underlying patterns and dynamics in our relationship rather than simply focusing on surface-level communication issues. It felt like we were able to get into meaningful work almost immediately, without spending weeks establishing background or explaining every detail of our history.\n\nJudye creates a space where both partners feel heard and understood while also being willing to challenge each of us when it's needed. She's thoughtful about recognizing when one person needs more room to explore something individually, while never losing sight of the relationship as a whole. Her insights have helped us recognize and understand patterns that we might otherwise have continued to overlook.\n\nMost importantly, the work we've done with her has made a real, substantive difference in our relationship. We've grown considerably closer, rebuilt trust, and developed a much deeper understanding of how we each show up in our relationship. I'm genuinely grateful for her guidance and would wholeheartedly recommend her to other couples."
  },
  {
    id: 'cathy-diamond',
    name: 'Cathy Diamond',
    role: 'LMFT',
    avatar: '/images/testimonials/reviewer-2.png',
    rating: 5,
    date: 'Verified Google Review',
    verified: true,
    content: "I have known Judye Hess for about 40 years, as a dear friend, and consultation partner. We have a weekly time where we discuss our cases to get another point of view about our work.\n\nIn all these years, I have found Judye to be an intelligent, empathetic woman, who clearly has an extensive knowledge of family, couple and group dynamics, and a dedication to professionalism. She has shined a light on many of the cases we have discussed, and I always feel richer for our contacts.\n\nAs a friend, I have always found Judye to be an unconditional, non-judgmental supporter of me and my growth as a therapist and as a good human being. I trust her judgment, her ability to maintain complete confidentiality, and her willingness to share her own vulnerabilities."
  },
  {
    id: 'david-k',
    name: 'David K',
    avatar: '/images/testimonials/reviewer-3.png',
    rating: 5,
    date: 'Verified Google Review',
    verified: true,
    content: "Judye is a skilled and compassionate therapist. She has helped my wife and me untangle long-standing family patterns we each brought into the relationship. While working with her, we moved from a rough patch to marriage and a baby, with our relationship getting stronger the whole time. Her unique warmth and humor make it easy to open up. We can't recommend her highly enough!"
  },
  {
    id: 'simon-friedman',
    name: 'Simon Friedman',
    avatar: '/images/testimonials/reviewer-4.png',
    rating: 5,
    date: 'Verified Google Review',
    verified: true,
    content: "I cannot recommend Dr. Judye Hess, clinical psychologist, highly enough. With decades of experience in couples and family therapy dating back to 1980, she brings an extraordinary depth of insight, wisdom and perspective to her work.\n\nWhat truly sets her apart, however, is her remarkable vitality and sharp sense of humor—you would never guess she is 81.\n\nHer energy, attentiveness and genuine curiosity about people make every session feel engaging and meaningful. She helps couples and families understand one another to navigate even long-standing challenges with renewed hope. She creates a safe, respectful environment where both partners or many family members feel supported and heard. If you are looking for a seasoned and insightful therapist, you will be in exceptionally good hands."
  }
];
