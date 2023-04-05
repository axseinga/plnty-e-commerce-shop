import Link from "next/link";
import React from "react";
import { NavWrapper, NavLinks, NavIcons } from "./nav.styles";
import { CartIcon } from "@/components/icons/cart-icon";
import { FavIcon } from "@/components/icons/fav-icon";
import { UserIcon } from "@/components/icons/user-icon";
import { SearchIcon } from "@/components/icons/search-icon";

export const Nav = () => {
  return (
    <NavWrapper>
      <p>LOGO</p>
      <NavLinks>
        <Link href="/">Home</Link> <Link href="/plants">Our plants</Link>{" "}
        <Link href="/contact">Contact</Link>
      </NavLinks>
      <NavIcons>
        <Link href="/cart">
          <CartIcon />
        </Link>
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
