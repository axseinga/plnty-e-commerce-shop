import React from "react";
import { useRouter } from "next/router";
import { HeroHeader, HeroContent } from "./hero.styles";
import { Button, ButtonVariantType } from "@/components/button/button";

type HeroProps = {
  heroImage: string;
};

export const Hero = ({ heroImage }: HeroProps) => {
  const router = useRouter();
  const isHomepage = router.asPath === "/";

  return (
    <HeroHeader heroImage={heroImage} isHomepage={isHomepage}>
      {isHomepage && (
        <HeroContent>
          <h1>Discover Your Perfect Plant Companion</h1>
          <p>
            We offer a wide selection of premium quality plants and expert
            advice to help you create your own indoor oasis.
          </p>
          <Button variant={ButtonVariantType.hero}>Shop Plants</Button>
        </HeroContent>
      )}
    </HeroHeader>
  );
};
