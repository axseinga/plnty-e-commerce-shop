import React from "react";
import {
  ProductWrapper,
  ProductDetails,
  ProductPrice,
  ProductTitle,
  ProductCategories,
  ProductDescription,
  ProductDropdownWrapper,
  ProductDropdownHeader,
  ProductDropdownContent,
  ProductDropdownCares,
  ProductDropdownCare,
  ProductDropdownDescription,
  ProductReviews,
} from "./product.styles";
import { ProductGallery } from "@/components/product-gallery/product-gallery";
import { ProductT, CaresT, ProductDropdownVariantT } from "@/types";
import { formatCurrency } from "@/utils";
import { Button, ButtonVariantType } from "@/components/button/button";
import { ArrowIcon } from "@/components/icons/arrow-icon";
import Image from "next/image";

type ProductProps = {
  data: ProductT;
};

export const Product = ({ data }: ProductProps) => {
  return (
    <ProductWrapper>
      <ProductGallery items={data.images} />
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
          type={ProductDropdownVariantT.cares}
          cares={data.cares}
        />
        <ProductDropdown
          title={data.title}
          longDescription={data.longDescription}
          type={ProductDropdownVariantT.about}
        />
      </ProductDetails>
      <ProductReviews>reviews with form</ProductReviews>
    </ProductWrapper>
  );
};

type ProductDropdownProps = {
  name?: string;
  title?: string;
  longDescription?: string;
  cares?: CaresT[];
  type: ProductDropdownVariantT;
};

const ProductDropdown = ({
  name,
  title,
  longDescription,
  cares = [],
  type,
}: ProductDropdownProps) => {
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
        {type === ProductDropdownVariantT.cares ? (
          <span>{name} likes...</span>
        ) : (
          <span>Read about {title?.toLowerCase()}</span>
        )}{" "}
        <ArrowIcon />
      </ProductDropdownHeader>
      <ProductDropdownContent
        isOpen={isOpen}
        aria-expanded={isOpen}
        ref={dropdownRef}
      >
        {type === ProductDropdownVariantT.cares ? (
          <ProductDropdownCares>
            {cares &&
              cares.map((care, i) => (
                <ProductDropdownCare key={`care_${i}`}>
                  <Image
                    src={care.icon.url}
                    alt=""
                    width={care.icon.width}
                    height={care.icon.height}
                  />
                  <div>
                    <p>{care.title}</p>
                    <p>{care.description}</p>
                  </div>
                </ProductDropdownCare>
              ))}
          </ProductDropdownCares>
        ) : (
          <ProductDropdownDescription dangerouslySetInnerHTML={{ __html: longDescription ?? "" }} />
        )}
      </ProductDropdownContent>
    </ProductDropdownWrapper>
  );
};
