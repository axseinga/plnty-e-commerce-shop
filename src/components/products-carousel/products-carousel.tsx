import React from "react";
import { ProductsCarouselWrapper, ProductsCarouselContainer, ProductsCarouselItems, ProductsCarouselInner } from "./products-carousel.styles";
import { ProductListItemT } from "@/types";
import { ProductThumbnail } from "@/components/product-thumbnail/product-thumbnail";

type ProductsCarouselProps = {
  items: ProductListItemT[];
  title: string;
};

export const ProductsCarousel = ({ items, title }: ProductsCarouselProps) => {
  const [itemsCount, setItemsCount] = React.useState(7);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [itemWidth, setItemWidth] = React.useState(100);
  const [showItems, setShowItems] = React.useState(4);

  React.useEffect(() => {
    setItemWidth(100 / showItems);
}, [showItems]);

  const prev = () => {
    if (activeIndex === 0){
      setActiveIndex(itemsCount);
    } else {
      setActiveIndex((prev) => prev - 1 );
    }
  }

  const next = () => {
    if (activeIndex === itemsCount) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prev) => prev + 1 );
    }
  }

  // @todo finish carousels

  return (
    <ProductsCarouselWrapper>
      <h2>{title}</h2>
      <ProductsCarouselContainer>
        <button onClick={prev}>prev</button>
        <ProductsCarouselItems>
          <ProductsCarouselInner style={{
                            transform: `translateX(${
                                -itemWidth * activeIndex
                            }%)`,
                        }}>
            {items.map((product) => (
              <div key={product?.slug} style={{ width: `${itemWidth}%`, border: "1px solid purple" }}>
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
              </div>
            ))}
          </ProductsCarouselInner>
        </ProductsCarouselItems>
        <button onClick={next}>next</button>
      </ProductsCarouselContainer>
    </ProductsCarouselWrapper>
  );
};
