// Product

export type ProductListItemT = {
  __typename?: 'Product', 
  id: string, 
  slug: string, 
  title: string, 
  name: string, 
  price: number, 
  reviewScore: number, 
  images: ImageItemT[]
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
  reviewScore: number;
};

export type CategoryT = {
  __typename?: "Category";
  title: string;
};

export type ImageItemT = {
  __typename?: "Asset" | undefined;
  url: string;
  height: number | null;
  width: number | null;
};

export type CaresIconT = {
  __typename?: "Asset";
  url: string;
  width: number | null;
  height: number | null;
};

export type CaresT = {
  __typename?: "Care";
  title: string | null;
  description: string;
  icon: CaresIconT;
};

export enum ProductDropdownVariantT {
  cares = "cares",
  about = "about",
}

export type ProductT = {
  __typename?: "Product" | undefined;
  id: string;
  slug: string;
  title: string;
  name: string;
  price: number;
  reviewScore: number;
  description: string;
  longDescription: string;
  images: ImageItemT[];
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

// Forms

export type FormTypes = {
  email: string;
}