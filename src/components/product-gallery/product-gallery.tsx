import React from "react";
import {
  ProductGalleryWrapper,
  ProductGallerySlider,
  ProductGalleryImageWrapper,
  ProductGalleryImageActive,
} from "./product-gallery.styles";
import { ImageItemT } from "@/types";
import Image from "next/image";

type ProductGalleryProps = {
  items: ImageItemT[];
};

export const ProductGallery = ({ items }: ProductGalleryProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <ProductGalleryWrapper>
      <ProductGallerySlider>
        {items.map((image, i) => (
          <ProductGalleryImageWrapper key={`item_${i}`} onClick={() => setActiveIndex(i)}>
            <Image
              src={image.url}
              alt=""
              width={image.width}
              height={image.height}
            />
          </ProductGalleryImageWrapper>
        ))}
      </ProductGallerySlider>
      <ProductGalleryImageActive src={items?.[activeIndex]?.url}
              alt=""
              width={items?.[activeIndex]?.width}
              height={items?.[activeIndex]?.height}/>
    </ProductGalleryWrapper>
  );
};
