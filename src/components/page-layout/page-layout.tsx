import React, { ReactNode } from "react";
import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer/footer";
import { Banner } from "../banner/banner";

type PageLayoutProps = {
  children: ReactNode;
};

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Banner/>
      <Footer />
    </>
  );
};
