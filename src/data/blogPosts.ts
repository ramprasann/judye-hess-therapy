export interface BlogPost {
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

export const BLOG_POSTS: BlogPost[] = [
  {
    "slug": "less-is-more",
    "title": "Less Is More",
    "date": "Oct 14, 2026",
    "category": "Couples Therapy",
    "content": [
      {
        "type": "paragraph",
        "text": "All companionship can consist only in the strengthening of two neighboring solitudes, whereas everything that one is wont to call giving oneself is by nature harmful to companionship: for when a person abandons himself, he is no longer anything, and when two people both give themselves up in order to come close to each other, there is no longer any ground beneath them and their being together is a continual falling. (Rainer Maria Rilke, In J.J.L. Mood, (trans.), (1975). Rilke on Love and other difficulties. Translations and considerations of Rainer Maria Rilke, New York:W.W. Norton & Co."
      },
      {
        "type": "paragraph",
        "text": "In our materialistic society, we are socialized to accept the idea that MORE IS BETTER. It is almost as though we are born with this phrase tattooed on our chests. Even as young children we learn that more friends and better grades will be our ticket to approval by our family members and to eventual success in our culture. We believe that the more presents we are given, the more we are loved. We see discrepancies between what we are given and what our siblings are given and we react with concern. We have subtly been learning to measure our worth by what we have and what we do, rather than who we are as unique individuals. We see our parents, who we naturally want to model ourselves after, negotiating for bigger salaries, moving into bigger houses and getting larger SUVs. Clearly, the drive to get more and to \"have it all,\" is a constant source of tension and anxiety in Western culture, especially since the recent economic downturn. We are so entranced by this myth that we go on believing it even in the face of so much evidence to the contrary. We can easily read in the research literature that there is little correlation between children having more toys, adults having bigger and better houses and cars and the overall happiness and satisfaction they each have in life."
      },
      {
        "type": "paragraph",
        "text": "Related to the “more is better” philosophy in regard to material possessions, there is a subtle spillover into our intimate relationships. We take it as a positive sign that the more time we spend together, the sooner we move in together, the more \"successful\" the relationship. The whole notion of \"togetherness\" becomes an indicator of how successful, stable, meaningful and secure the relationship is. And it is this assumption that “more is better” in our relationships that must be critically challenged."
      },
      {
        "type": "paragraph",
        "text": "The goal of this blog is to deconstruct our prior notions of what an intimate relationship is, and to put forth the premise that \"LESS IS MORE' may just as well result in more satisfying, loving and enduring relationships. Indeed, it may be that slowing down the pace with which we become emotionally involved with another and taking time to really get to know each other before deciding to move in together, or whether to move in together at all, is a new pattern worthy of consideration. Contrary to the cultural script, we may discover that we experience MORE satisfaction in our relationship when we spend LESS time with our loved one!"
      },
      {
        "type": "paragraph",
        "text": "Zen Buddhists remind us of the necessity to be in touch with polarities, in order to have a perspective where we can see and appreciate the bigger picture. Without the darkness, we cannot fully appreciate the light. The two are inextricably part of a whole. Similarly with relationships, time apart from our beloved can make time together feel more precious. The principle of satiation is well established in the psychological literature. Basically, what this means is that a stimulus loses its value with repeated exposure Just as we tire of eating the same food, listening to the same music or watching the same movie twice, so satiation is relevant to relationships. Indeed, couples who are in a long-distance dating relationship know the joy of “missing “ each other and the excitement of being with each other again."
      },
      {
        "type": "paragraph",
        "text": "In addition to this, if we have more time with ourselves while away from our partner, we can develop a stronger sense of self which we then bring back to our relationship. Outside interests, friends and activities which are inherently satisfying to us as people, can all be gifts to our partner when we can share this enthusiasm with them. Not to mention just time spent being alone with ourselves; reading, journaling, walking in nature, meditating. When we continually take time to nourish the relationship we have with ourselves, we have much more to bring to our partner."
      },
      {
        "type": "paragraph",
        "text": "Those entranced by the \"togetherness myth\", may feel threatened by any suggestion implying that \"Less is More.\" They may interpret their own feelings of loneliness when away from their beloved to be a sign of how much they love their partner. Another interpretation is that the partners who must constantly be together are merely providing relief from loneliness rather than having truly intimate and growthful connections together. Perhaps if some of that togetherness time were mixed with time to be alone in a creative way, the partners would each learn to be more complete in themselves and experience the joy of \"aloneness,\" rather than just learning to \"tolerate loneliness.\""
      },
      {
        "type": "paragraph",
        "text": "Living Apart Together or LAT refers to couples who are in a committed, long-term, monogamous relationship who choose to live in separate dwellings. While the term LAT refers to couples who actually live in separate dwellings, we have come to see that this phenomenon is better understood on a continuum in which partners may arrange their lives to accommodate varying degrees of separation in their lives. On one end of the continuum are couples who have their own space within a shared dwelling, from an office to a private room for meditation to a separate bedroom, or further along the continuum would be a separate floor or wing of the house that was specified solely for one's use. The next level of LAT would be couples who live in a duplex such that each has his or her own full apartment within the larger structure of an apartment building or house. Beyond that, the couple may have their own separate dwellings within five minutes of each other, to a further distance within the same city, to another city, another state, another part of the country, and another continent."
      },
      {
        "type": "paragraph",
        "text": "Regardless of the degree of separation, LAT couples share in a common a desire to maintain their solitude as well as their passionate connection to each other. It may be that one couple sees themselves on a path going slowly towards decreasing the amount of separation in their relationship, another couple may see themselves testing out more opportunities for autonomous living."
      },
      {
        "type": "paragraph",
        "text": "Another aspect of the continuum is how long the couple chooses to live with this arrangement. While LAT may be a stage some couples go through on their way to living in a one-dwelling situation, there are clearly couples for whom LAT is their chosen style for life. These couples have consciously decided that this living situation meets their needs for intimacy and autonomy without sacrificing their passion for life and for each other. They continue to deepen their connection to each other over time and find that this lifestyle enhances their growth as a couple and as individuals."
      },
      {
        "type": "paragraph",
        "text": "You probably know a couple who are living an LAT lifestyle. Whether or not they have their own bedroom within a house or are a thousand miles away from one another, the question they will be hit with and have to defend themselves against is, \"Are you really a couple?\""
      },
      {
        "type": "paragraph",
        "text": "Because of the strength of the myth of \"togetherness\" in this society, there is often shame about admitting to friends and family that they are living outside the traditional norms. One of the goals of this blog is to give a name to this already popular phenomenon, to validate its practicality as well as its integrity. Just as the last decades have brought a place of relative acceptance in society for independent women, African Americans, and gay, lesbian and transgender individuals, LAT couples can come \"out of the closet\", stand up and be counted, and be proud of the courage it took for them to challenge one of society's oldest traditions and follow their own hearts and mind."
      }
    ],
    "excerpt": "All companionship can consist only in the strengthening of two neighboring solitudes, whereas everything that one is wont to call giving oneself is by nature harmful to companionsh..."
  },
  {
    "slug": "walking-the-tightrope-of-intimacy",
    "title": "Walking the Tightrope of Intimacy",
    "date": "Jul 12, 2026",
    "category": "Couples Therapy",
    "content": [
      {
        "type": "paragraph",
        "text": "Judye Hess, now professor Emerita, was a core faculty member at the California Institute of Integral Studies,teaching Couples Counseling and Family Dynamics for 30+ years. She has a private practice in Berkeley,CA.  where she sees couples and families, almost exclusively.  Judye is the co-author of \"Dual Dwelling Duos: An Alternative for Long-term Relationships\" which was published in August, 2001 in The Journal of Couples Therapy and as a chapter in the book,”Couples, Intimacy Issues and Addictions” ed. By Barbara Jo Brothers, Haworth Press, 2001."
      },
      {
        "type": "paragraph",
        "text": "\"He keeps withdrawing from me whenever I want to be close. It makes me feel so abandoned.\""
      },
      {
        "type": "paragraph",
        "text": "\"She's in my face, wanting more than I can possibly give. I wind up feeling so smothered.\""
      },
      {
        "type": "paragraph",
        "text": "Have you ever heard yourself or your partner making statements like this? Did it make you wonder if the two of you were in an impossible bind from which there was no escape? Did you conclude that you had better start looking elsewhere for love, but dreaded going back to the personals or signing up with match.com?"
      },
      {
        "type": "paragraph",
        "text": "If you have answered \"yes\" to any of these questions, you may be interested to know that negotiations around closeness and distance are some of the most challenging aspects of ANY couple relationship. It doesn't necessarily mean that you need to part company if you want to find satisfaction in your intimate relationship."
      },
      {
        "type": "paragraph",
        "text": "The conflict over how much separation or togetherness each of us is desiring, often leads to painful power struggles. While both members of a couple usually feel powerless in these situations, it is usually the \"pursuer\" who becomes labeled as the \"needy\" one and the\"distancer\" who is thought of as \"withdrawn\" or \"withholding\" by the \"pursuer\"."
      },
      {
        "type": "paragraph",
        "text": "But even in those of us who tend to be very well matched on the overall amounts of closeness or contact we desire, there will still be daily, hourly or even moment-to-moment fluctuations in desire for contact, based on any number of internally or externally generated conditions. When we experience these differences in amounts of closeness desired, we can easily feel abandoned or engulfed by our partner. which can lead to painful feelings of rejection, guilt, feeling uncared for or smothered."
      },
      {
        "type": "paragraph",
        "text": "When we first get together as a couple, we often find ourselves in a \"honeymoon\" phase and experience"
      },
      {
        "type": "paragraph",
        "text": "feeling unconditionally loved and nourished by our partner. In this state of merger, we usually are very much aware of our similarities but less aware of our differences. Because these feelings are so positive, we may fantasize about or actually move in together to maximize the bliss or optimism we are experiencing."
      },
      {
        "type": "paragraph",
        "text": "In the natural course of a developing relationship, we will usually pass from the honeymoon or \"symbiotic\" stage into a more \"differentiated\" stage, where differences come to the fore. If we have already moved into a shared space, it can be very disconcerting to find that our bliss has now shifted into something much more irritating. It may seem like we can't agree on anything from money to sex to amount of contact desired. As positive projections onto our partner are shaken up and withdrawn, we may rudely awaken to a person who seems to be the opposite of what we had hoped and longed for. However, having now set up our entire lives around living with this person we may try to suppress these feelings of disappointment and/or irritation due to feeling shame for having made a \"mistake\". Or conversely, we may be in such a state of shock about the loss of \"bliss\" that we believe we have made a mistake about being with this person at all, and hasten to get away as quickly as we moved in. Clearly this can be a difficult and damaging time for both of us."
      },
      {
        "type": "paragraph",
        "text": "In this fast-paced world of the 21st century where everything moves so quickly, there is pressure on couples to move in together, get married and have a family, sooner rather than later. To not go along with this program can be eyed suspiciously as a \"fear of intimacy\". I believe that \"one size fits all\" does not apply to all individuals or couples. While some of us may decide to co-habit very quickly and our situation could turn out favorably, others of us may rush into this and find ourselves unhappy and disillusioned. What is of greatest import here is for us to remember to tune in to our own"
      },
      {
        "type": "paragraph",
        "text": "natural pace of couple development and not to give in to societal and familial pressures for how relationships ought to be lived; to really look inside ourselves and to discuss openly as a couple what kind of context would be most fertile for our commitment and intimacy to thrive. It may be that we could increase the probability of having our relationships work if we took these steps more slowly, waiting to really know our differences as well as our similarities before making costly decisions about our living situations. Some of us may find that we choose to maintain our own separate domiciles for the duration of our relationship, while still deepening our intimacy and shared growth in other ways."
      },
      {
        "type": "paragraph",
        "text": "There is no one way to have a relationship. Those of us who are \"pursuers\" and want to spend more time with our partner are not necessarily more or less healthy than those of us who are \"distancers\" and want more time and space alone. Each of our positions can be valid and need to be understood and appreciated by our partners. Living situations, whether separate or together, have pros and cons. My hope in writing this article is to increase our awareness of different ways of having relationships so that we can create a form of relationship that works best for each of us, separately and together."
      }
    ],
    "excerpt": "Judye Hess, now professor Emerita, was a core faculty member at the California Institute of Integral Studies,teaching Couples Counseling and Family Dynamics for 30+ years. She has ..."
  },
  {
    "slug": "dual-dwelling-duos",
    "title": "Dual Dwelling Duos",
    "date": "May 12, 2017",
    "category": "Uncategorized",
    "content": [
      {
        "type": "paragraph",
        "text": "Dr. Judye Hess as guest therapist on “Ask the Shrinks” radio show on KGGV (8/27/15), speaking on “The Dual Dwelling Duos: An Alternative for Long-term Relationships”"
      },
      {
        "type": "paragraph",
        "text": "Based on article by Judye Hess, Ph.D. and Padma Catell, Ph.D., originally printed in Journal of Couples Therapy, vol 10, number 3/4, 2001"
      }
    ],
    "excerpt": "Dr. Judye Hess as guest therapist on “Ask the Shrinks” radio show on KGGV (8/27/15), speaking on “The Dual Dwelling Duos: An Alternative for Long-term Relationships”...",
    "media": {
      "type": "video",
      "url": "https://www.youtube.com/embed/--lx9id8BZ4",
      "caption": "Guest therapist Dr. Judye Hess on \"Ask the Shrinks\" radio show on KGO-AM, San Francisco"
    }
  },
  {
    "slug": "got-questions",
    "title": "Got Questions?",
    "date": "Jan 27, 2017",
    "category": "Uncategorized",
    "content": [
      {
        "type": "paragraph",
        "text": "Let’s get this blog going! In order for me to give advice, I need you to write in some questions! Whats on your mind today? Which relationships are you confused about? Partner? Mom? Dad? Employer? Roommate? Pet? Bus driver? Professor? Submit your relationship queries to my email judyehess@gmail.com, and I will attempt to give you an answer."
      }
    ],
    "excerpt": "Let’s get this blog going! In order for me to give advice, I need you to write in some questions! Whats on your mind today? Which relationships are you confused about? Partner? Mom..."
  }
];
