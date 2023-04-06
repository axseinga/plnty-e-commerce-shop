import React from "react";
import {
  ProductWrapper,
  ProductImageCarousel,
  ProductDetails,
  ProductPrice,
  ProductTitle,
  ProductCategories,
  ProductDescription,
  ProductReviews,
} from "./product.styles";
import { ProductT } from "@/types";
import { formatCurrency } from "@/utils";
import { Button, ButtonVariantType } from "@/components/button/button";

type ProductProps = {
  data: ProductT;
};

export const Product = ({ data }: ProductProps) => {
  return (
    <ProductWrapper>
      <ProductImageCarousel>carousel</ProductImageCarousel>
      <ProductDetails>
        <h2>{data.name}</h2>
        <ProductPrice>£{formatCurrency(data.price)}</ProductPrice>
        <ProductTitle>{data.title}</ProductTitle>
        <ProductCategories>
          {data.categories.map((category) => (
            <Button
              key={category.title}
              type="button"
              variant={ButtonVariantType.gray}
            >
              {category.title}
            </Button>
          ))}
        </ProductCategories>
        <ProductDescription>{data.description}</ProductDescription>
        <Button type="button" variant={ButtonVariantType.dark}>
          Add plant to bag
        </Button>
      </ProductDetails>
      <ProductReviews>reviews with form</ProductReviews>
    </ProductWrapper>
  );
};
