// Product

export type ProductListItemT = {
  id: string;
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
  slug: string;
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

export type CaresIconT = {
  url: string;
  width: number;
  height: number;
};

export type CaresT = {
  title: string;
  description: string;
  icon: CaresIconT;
};

export enum ProductDropdownVariantT {
  cares = "cares",
  about = "about",
}

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
  cares: CaresT[];
};

// Blog

export type BlogTileItem = {
  image: string;
  alt: string;
  title: string;
  shortDescription: string;
  slug: string;
};
