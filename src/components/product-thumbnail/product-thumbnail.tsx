import React from "react";
import Image from "next/image";
import {
  ProductThumbnailWrapper,
  ProductThumbnailDetails,
  ProductThumbnailHeader,
  ProductThumbnailForm,
} from "./product-thumbnail.styles";
import { ProductListItem } from "@/types";
import { Button } from "@/components/button/button";
import { ButtonVariantType } from "@/components/button/button";
import { formatCurrency } from "@/utils";
import Link from "next/link";

type ProductThumbnailProps = {
  product: ProductListItem;
};

export const ProductThumbnail = ({ product }: ProductThumbnailProps) => {
  return (
    <ProductThumbnailWrapper>
      <Link href="">
        <Image
          src={product?.images?.[0]?.src}
          alt={product?.images?.[0]?.alt}
          width="640"
          height="800"
        />
        <ProductThumbnailDetails>
          <ProductThumbnailHeader>
            <div>
              <h2>{product?.name}</h2>
              <p>{product?.review_score}</p>
            </div>
            <p>{product?.title}</p>
          </ProductThumbnailHeader>
          <p>£{formatCurrency(product?.price)}</p>
        </ProductThumbnailDetails>
      </Link>
      <ProductThumbnailForm>
        <label htmlFor="qty" aria-label="Quantity" />
        <input
          type="number"
          name="Qqy"
          id="qty"
          placeholder="1"
          min="1"
          max="99"
        />
        <Button type="submit" variant={ButtonVariantType.dark}>
          Add to bag
        </Button>
      </ProductThumbnailForm>
    </ProductThumbnailWrapper>
  );
};
