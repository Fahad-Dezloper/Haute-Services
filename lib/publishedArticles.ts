export type PublishedArticle = {
  title: string;
  publication: string;
  section?: string;
  date: string;
  excerpt: string;
  image: string;
  category?: string;
  images?: string[];
};

// Ordered newest -> oldest (used for "latest article" previews).
const RAW_PUBLISHED_ARTICLES: PublishedArticle[] = [
  // Culinary festivals published articles
  {
    title: "Food For Thought at Aerocity",
    publication: "BWAerocity Live",
    section: "",
    date: "January–February 2023",
    excerpt:
      "Chefs, authors, and hospitality leaders reunite at GMR Aerocity for the sixth edition of Food For Thought Fest—two days of masterclasses and conversations on wellness and heritage.",
    image: "/food/article/9.jpg",
    images: ["/food/article/5.jpg", "/food/article/9.jpg"],
  },
  {
    title: "Eating Right",
    publication: "BWAerocity Live",
    section: "",
    date: "July 2022",
    excerpt:
      "How understanding your body type, nurturing gut health, and embracing seasonal, probiotic-rich foods and traditional herbs can transform well-being.",
    image: "/food/article/3.jpg",
    images: ["/food/article/3.jpg", "/food/article/4.jpg"],
  },
  {
    title: "Gastronomically Speaking!",
    publication: "BWAerocity Live",
    section: "",
    date: "June 2022",
    excerpt:
      "Food philosophy and the diets of sports icons at Food For Thought Fest, from sleep habits to protein regimes, and why ghee and moderation matter.",
    image: "/food/article/1.jpg",
    images: ["/food/article/1.jpg", "/food/article/2.jpg"],
  },
  // Art advisory published articles
  {
    title: "Fine Art, A Fine Investment",
    publication: "CFO Connect",
    section: "Think Tank",
    date: "November 2014",
    category: "Art Advisory",
    excerpt:
      "An exploration of fine art as both an emotional pursuit and a long-term investment in the evolving Indian art market.",
    image: "/art/article/fineart.jpeg",
  },
  {
    title: "Medley of Indian Visual Art",
    publication: "CFO Connect",
    section: "Think Tank",
    date: "September 2014",
    category: "Art & Culture",
    excerpt:
      "A journey through the evolution of Indian visual art, from royal patronage to modern and contemporary practices.",
    image: "/art/article/medley.jpeg",
  },
];

export const publishedArticles: PublishedArticle[] = Array.from(
  new Map(RAW_PUBLISHED_ARTICLES.map((a) => [a.title, a])).values(),
);

export const latestPublishedArticle: PublishedArticle | undefined =
  publishedArticles[0];

