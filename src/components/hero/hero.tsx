import React from "react";
import { HeroHeader, HeroContent } from "./hero.styles";

export const Hero = () => {
  return (
    <HeroHeader>
      <HeroContent>
        <h1>Discover Your Perfect Plant Companion</h1>
        <p>
          We offer a wide selection of premium quality plants and expert advice
          to help you create your own indoor oasis.
        </p>
      </HeroContent>
    </HeroHeader>
  );
};
