import Link from "next/link";
import React from "react";
import { NavWrapper, NavLinks, NavIcons } from "./nav.styles";

export const Nav = () => {
  return (
    <NavWrapper>
      <p>LOGO</p>
      <NavLinks>
        <Link href="/">Home</Link> <Link href="/plants">Our plants</Link>{" "}
        <Link href="/contact">Contact</Link>
      </NavLinks>
      <NavIcons>
          {" "}
          <p>C</p>
          <p>P</p>
          <p>S</p>
        </NavIcons>
    </NavWrapper>
  );
};
