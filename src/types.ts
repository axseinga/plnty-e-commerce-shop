// Product

export type ProductListItemT = {
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

export type ProductThumbnailItemT = {
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

export type CategoryT = {
  __typename: string;
  title: string;
};

export type ImageItemT = {
  url: string;
  width: number;
  height: number;
};

export type ProductT = {
  id: string;
  title: string;
  name: string;
  price: number;
  images: ImageItemT[];
  review_score: number;
  description: string;
  longDescription: string;
  categories: CategoryT[];
};
