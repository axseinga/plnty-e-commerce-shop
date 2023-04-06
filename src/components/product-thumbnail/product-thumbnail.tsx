import React from "react";
import Image from "next/image";
import {
  ProductThumbnailWrapper,
  ProductThumbnailDetails,
  ProductThumbnailHeader,
  ProductThumbnailForm,
} from "./product-thumbnail.styles";
import { ProductThumbnailItemT } from "@/types";
import { Button } from "@/components/button/button";
import { ButtonVariantType } from "@/components/button/button";
import { formatCurrency } from "@/utils";
import Link from "next/link";

type ProductThumbnailProps = {
  product: ProductThumbnailItemT;
};

export const ProductThumbnail = ({ product }: ProductThumbnailProps) => {
  return (
    <ProductThumbnailWrapper>
      <Link href={`/plants/${product?.id}`}>
        <Image
          src={product?.thumbnailUrl}
          alt={product?.title}
          width={product?.thumbnailWidth}
          height={product?.thumbnailHeight}
        />
        <ProductThumbnailDetails>
          <ProductThumbnailHeader>
            <div>
              <h3>{product?.name}</h3>
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
