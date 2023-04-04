import React from "react";
import { BannerWrapper } from "./banner.styles";
import Image from "next/image";

export const Banner = () => {
  return (
    <BannerWrapper>
      <Image
        src="/assets/delivery-banner.png"
        alt="Free delivery on orders over £50"
        width="1000"
        height="202"
      />
    </BannerWrapper>
  );
};
