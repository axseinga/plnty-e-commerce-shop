"use-client";
import Link from "next/link";
import React from "react";
import { NavWrapper, NavLinks, NavIcons } from "./nav.styles";
import { FavIcon } from "@/components/icons/fav-icon";
import { UserIcon } from "@/components/icons/user-icon";
import { SearchIcon } from "@/components/icons/search-icon";
import dynamic from "next/dynamic";

const DynamicCartLink = dynamic(() => import("./cart-link"), {
  ssr: false,
});

export const Nav = () => {
  return (
    <NavWrapper>
      <p>LOGO</p>
      <NavLinks>
        <Link href="/">Home</Link> <Link href="/plants">Our plants</Link> <Link href="/contact">Contact</Link>
      </NavLinks>
      <NavIcons>
        <DynamicCartLink />
        <Link href="/favourites">
          <FavIcon />
        </Link>
        <Link href="/account">
          <UserIcon />
        </Link>
        <SearchIcon />
      </NavIcons>
    </NavWrapper>
  );
};
