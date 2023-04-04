import React from "react";
import { HeroHeader, HeroContent } from "./hero.styles";
import { Button } from "../button/button";
import { ButtonVariantType } from "../button/button";

export const Hero = () => {
  return (
    <HeroHeader>
      <HeroContent>
        <h1>Discover Your Perfect Plant Companion</h1>
        <p>
          We offer a wide selection of premium quality plants and expert advice
          to help you create your own indoor oasis.
        </p>
        <Button variant={ButtonVariantType.hero}>Shop Plants</Button>
      </HeroContent>
    </HeroHeader>
  );
};
