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
            title: product.title,
            name: product.name,
            price: product.price,
            thumbnailUrl: product.images[0].url,
            thumbnailAlt: product.title,
            thumbnailWidth: product.images[0].width,
            thumbnailHeight: product.images[0].height,
            review_score: product.review_score,
          }}
        />
      ))}
    </ProductListWrapper>
  );
};
