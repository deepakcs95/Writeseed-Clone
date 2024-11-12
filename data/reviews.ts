export type Review = {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  shortText: string;
  review: string;
  timeAgo: string;
};

export const DUMMY_REVIEWS: Review[] = [
  {
    id: 1,
    name: "John Doe",
    avatar: "/6.jpg",
    rating: 5,
    shortText: "Worked great for me!",
    review:
      "Very dynamic, well done results and with the feeling of really having come out of a human. It is practical, easy to use and for a very affordable price in the market",
    timeAgo: "1 day ago",
  },
  {
    id: 2,
    name: "Sarah Smith",
    avatar: "/6.jpg",
    rating: 5,
    shortText: "Excellent tool!",
    review:
      "This AI writer has completely transformed how I create content. The quality is outstanding and it saves me hours of work every week.",
    timeAgo: "2 days ago",
  },
  {
    id: 3,
    name: "Mike Johnson",
    avatar: "/6.jpg",
    rating: 5,
    shortText: "Game changer!",
    review:
      "I've tried many AI writing tools, but this one stands out. The content is natural, engaging, and requires minimal editing.",
    timeAgo: "3 days ago",
  },
  {
    id: 4,
    name: "Emily Chen",
    avatar: "/6.jpg",
    rating: 5,
    shortText: "Incredible Results!",
    review:
      "The AI-generated content is he SEO optimization features are particularly impressive he SEO optimization features are particularly impressive remarkably human-like. It's helped me scale my content production without sacrificing quality.",
    timeAgo: "4 days ago",
  },
  {
    id: 5,
    name: "David Wilson",
    avatar: "/6.jpg",
    rating: 5,
    shortText: "Best AI Writer!",
    review:
      "This tool has revolutionized my content creation process. The SEO optimization features are particularly impressivehe SEO optimization features are particularly impressive.",
    timeAgo: "5 days ago",
  },
  {
    id: 6,
    name: "Lisa Anderson",
    avatar: "/6.jpg",
    rating: 5,
    shortText: "Time Saver!",
    review:
      "What used to take me hours now takes minutes. The quality of the output is consistently high, and the interface is intuitive.",
    timeAgo: "1 week ago",
  },
  {
    id: 6,
    name: "Lisa Anderson",
    avatar: "/6.jpg",
    rating: 5,
    shortText: "Time Saver!",
    review:
      "What used to take me hours now takes minutes. he SEO optimization features are particularly impressivehe SEO optimization features are particularly impressivehe SEO optimization features are particularly impressive The quality of the output is consistently high, and the interface is intuitive.",
    timeAgo: "1 week ago",
  },
];
