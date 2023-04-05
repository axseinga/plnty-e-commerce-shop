// Product

export type ProductListItem = {
  title: string;
  slug: string;
  name: string;
  price: number;
  images: {
    url: string;
    width: number;
    height: number;
  }[];
  review_score: number;
};

export type ProductThumbnailItem = {
  id: string;
  title: string;
  name: string;
  price: number;
  thumbnailUrl: string;
  thumbnailAlt: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  review_score: number;
};
