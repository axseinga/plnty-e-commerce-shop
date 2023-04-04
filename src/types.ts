// Product

export type ProductListItem = {
  title: string;
  slug: string;
  name: string;
  price: number;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
  review_score: number;
};
