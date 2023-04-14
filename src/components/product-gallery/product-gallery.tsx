import React from "react";
import {
  ProductGalleryWrapper,
  ProductGallerySlider,
  ProductGallerySliderInner,
  ProductGalleryNavArrow,
  ProductGalleryImageWrapper,
  ProductGalleryActiveImage,
  GalleryNavigation,
  GalleryNavigationDot,
} from "./product-gallery.styles";
import { ImageItemT } from "@/types";
import Image from "next/image";
import { ArrowIcon } from "../icons/arrow-icon";

type ProductGalleryProps = {
  items: ImageItemT[];
};

export const ProductGallery = ({ items }: ProductGalleryProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (offset: number) => {
    if (sliderRef.current === null) return;
    sliderRef.current.scrollBy(0, offset);
  };

  return (
    <ProductGalleryWrapper>
      <ProductGallerySlider>
        <ProductGalleryNavArrow
          type="button"
          aria-label="Reveal more from top"
          onClick={() => handleScroll(-300)}
        >
          <ArrowIcon />
        </ProductGalleryNavArrow>
        <ProductGallerySliderInner ref={sliderRef}>
          {items.map((image, i) => (
            <ProductGalleryImageWrapper
              key={`item_${i}`}
              onClick={() => setActiveIndex(i)}
            >
              <Image
                src={image.url}
                alt=""
                width={image.width ?? "640"}
                height={image.height ?? "800"}
              />
            </ProductGalleryImageWrapper>
          ))}
        </ProductGallerySliderInner>
        <ProductGalleryNavArrow
          type="button"
          aria-label="Reveal more from bottom"
          onClick={() => handleScroll(300)}
        >
          <ArrowIcon />
        </ProductGalleryNavArrow>
      </ProductGallerySlider>
      <ProductGalleryActiveImage key="cos">
        <Image
          src={items?.[activeIndex]?.url}
          alt=""
          width={items?.[activeIndex]?.width ?? "640"}
          height={items?.[activeIndex]?.height ?? "800"}
        />
      </ProductGalleryActiveImage>
      <GalleryNavigation>
        {items.map((item, i) => (
          <GalleryNavigationDot
            key={`dot_${i}`}
            type="button"
            aria-label={`See image ${i + 1} of ${items.length}`}
            onClick={() => setActiveIndex(i)}
            isActive={activeIndex === i}
          >
            &nbsp;
          </GalleryNavigationDot>
        ))}
      </GalleryNavigation>
    </ProductGalleryWrapper>
  );
};
