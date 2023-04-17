import React from "react";
import { ProductListWrapper } from "./product-list.styles";
import { ProductThumbnail } from "../product-thumbnail/product-thumbnail";
import { ProductListItemT } from "@/types";

type ProductListProps = {
  items: ProductListItemT[];
};

export const ProductList = ({ items }: ProductListProps) => {
  return (
    <ProductListWrapper>
      {items.map((product) => (
        <ProductThumbnail
          key={product?.slug}
          product={{
            id: product.id,
            slug: product.slug,
            title: product.title,
            name: product.name,
            price: product.price,
            thumbnailUrl: product.images[0].url,
            thumbnailAlt: product.title,
            thumbnailWidth: product.images[0].width ?? 640,
            thumbnailHeight: product.images[0].height ?? 800,
            reviewScore: product.reviewScore,
          }}
        />
      ))}
    </ProductListWrapper>
  );
};
