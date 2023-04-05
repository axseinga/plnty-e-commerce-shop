// Product

export type ProductListItem = {
  title: string;
  slug: string;
  name: string;
  price: number;
  description: string;
  images: {
    url: string;
    width: number;
    height: number;
  }[];
  review_score: number;
};
