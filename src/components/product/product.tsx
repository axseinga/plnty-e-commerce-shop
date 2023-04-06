import React from "react";
import {
  ProductWrapper,
  ProductImageCarousel,
  ProductDetails,
  ProductPrice,
  ProductTitle,
  ProductCategories,
  ProductDescription,
  ProductDropdownWrapper,
  ProductDropdownHeader,
  ProductDropdownContent,
  ProductReviews,
} from "./product.styles";
import { ProductT } from "@/types";
import { formatCurrency } from "@/utils";
import { Button, ButtonVariantType } from "@/components/button/button";
import { ArrowIcon } from "@/components/icons/arrow-icon";

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
        <ProductDropdown
          name={data.name}
          longDescription={data.longDescription}
        />
        <ProductDropdown
          name={data.name}
          longDescription={data.longDescription}
        />
      </ProductDetails>
      <ProductReviews>reviews with form</ProductReviews>
    </ProductWrapper>
  );
};

type ProductDropdownProps = {
  name: string;
  longDescription: string;
};

const ProductDropdown = ({ name, longDescription }: ProductDropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    if (dropdownRef.current === null) return;
    dropdownRef.current.style.setProperty("--height", `${height}px`);

    if (isOpen) {
      setHeight(dropdownRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen, height]);

  return (
    <ProductDropdownWrapper>
      <ProductDropdownHeader
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
        aria-label="Open accordion"
      >
        <span>{name} likes...</span> <ArrowIcon />
      </ProductDropdownHeader>
      <ProductDropdownContent
        isOpen={isOpen}
        aria-expanded={isOpen}
        ref={dropdownRef}
      >
        <p dangerouslySetInnerHTML={{__html: longDescription}}/>
      </ProductDropdownContent>
    </ProductDropdownWrapper>
  );
};
