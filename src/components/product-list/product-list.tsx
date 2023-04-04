import React from "react";
import { ProductListWrapper } from "./product-list.styles";
import { ProductThumbnail } from "../product-thumbnail/product-thumbnail";
import { ProductListItem } from "@/types";

type ProductListProps = {
  items: ProductListItem[];
};

export const ProductList = () => {
  const temp = [
    {
      title: "Aglaonema Laurel Green",
      slug: "aglaonema-laurel-green",
      name: "Philo",
      price: 4990,
      description:
        "Aglaonema Laurel Green is a beautiful indoor plant that is popular for its attractive foliage and ease of care.",
      images: [
        { src: "/temp/aglonomea-1.jpg", alt: "Aglaonema Laurel Green" },
        { src: "/temp/aglonomea-2.jpg", alt: "Aglaonema Laurel Green" },
        { src: "/temp/aglonomea-3.jpg", alt: "Aglaonema Laurel Green" },
      ],
      review_score: 4,
    },
    {
      title: "Philodendron Prince of Orange",
      slug: "philodendron-prince-of-orange",
      name: "Philo",
      price: 4990,
      description:
        "Aglaonema Laurel Green is a beautiful indoor plant that is popular for its attractive foliage and ease of care.",
      images: [
        { src: "/temp/aglonomea-1.jpg", alt: "Aglaonema Laurel Green" },
        { src: "/temp/aglonomea-2.jpg", alt: "Aglaonema Laurel Green" },
        { src: "/temp/aglonomea-3.jpg", alt: "Aglaonema Laurel Green" },
      ],
      review_score: 2,
    },
    {
      title: "Philodendron Prince of Orange",
      slug: "philodendron-prince-of-orange",
      name: "Philo",
      price: 4990,
      description:
        "Aglaonema Laurel Green is a beautiful indoor plant that is popular for its attractive foliage and ease of care.",
      images: [
        { src: "/temp/aglonomea-1.jpg", alt: "Aglaonema Laurel Green" },
        { src: "/temp/aglonomea-2.jpg", alt: "Aglaonema Laurel Green" },
        { src: "/temp/aglonomea-3.jpg", alt: "Aglaonema Laurel Green" },
      ],
      review_score: 2,
    },
    {
      title: "Philodendron Prince of Orange",
      slug: "philodendron-prince-of-orange",
      name: "Philo",
      price: 4990,
      description:
        "Aglaonema Laurel Green is a beautiful indoor plant that is popular for its attractive foliage and ease of care.",
      images: [
        { src: "/temp/aglonomea-1.jpg", alt: "Aglaonema Laurel Green" },
        { src: "/temp/aglonomea-2.jpg", alt: "Aglaonema Laurel Green" },
        { src: "/temp/aglonomea-3.jpg", alt: "Aglaonema Laurel Green" },
      ],
      review_score: 2,
    },
    {
      title: "Philodendron Prince of Orange",
      slug: "philodendron-prince-of-orange",
      name: "Philo",
      price: 4990,
      description:
        "Aglaonema Laurel Green is a beautiful indoor plant that is popular for its attractive foliage and ease of care.",
      images: [
        { src: "/temp/aglonomea-1.jpg", alt: "Aglaonema Laurel Green" },
        { src: "/temp/aglonomea-2.jpg", alt: "Aglaonema Laurel Green" },
        { src: "/temp/aglonomea-3.jpg", alt: "Aglaonema Laurel Green" },
      ],
      review_score: 2,
    },
  ];
  return (
    <ProductListWrapper>
      {temp.map((product) => (
        <ProductThumbnail key={product?.slug} product={product} />
      ))}
    </ProductListWrapper>
  );
};
