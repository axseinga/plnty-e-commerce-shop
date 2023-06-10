import React from "react";
import { ProductListWrapper } from "./product-list.styles";
import { ProductThumbnail } from "../product-thumbnail/product-thumbnail";
import { ProductListItemT } from "@/types";
import useAppStateStore from "@/store/app-store";

type ProductListProps = {
  items: ProductListItemT[];
  variant: "default" | "favourites";
};

export const ProductList = ({ items, variant = "default" }: ProductListProps) => {
  const { filters } = useAppStateStore();
  const [productListKey, setProductListKey] = React.useState(0.75931);

  React.useEffect(() => {
    let randomKey = Math.random();
    setProductListKey(randomKey);
  }, [filters]);

  return (
    <ProductListWrapper key={productListKey} variant={variant}>
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
