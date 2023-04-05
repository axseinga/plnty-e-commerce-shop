import React from "react";
import { ProductListWrapper } from "./product-list.styles";
import { ProductThumbnail } from "../product-thumbnail/product-thumbnail";
import { ProductListItem } from "@/types";

type ProductListProps = {
  items: ProductListItem[];
};

export const ProductList = ({items}: ProductListProps) => {
  return (
    <ProductListWrapper>
      {items.map((product) => (
        <ProductThumbnail key={product?.slug} product={product} />
      ))}
    </ProductListWrapper>
  );
};
