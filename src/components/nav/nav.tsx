"use-client";
import Link from "next/link";
import React from "react";
import { NavWrapper, NavLinks, NavIcons } from "./nav.styles";
import { FavIcon } from "@/components/icons/fav-icon";
import { UserIcon } from "@/components/icons/user-icon";
import { SearchIcon } from "@/components/icons/search-icon";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
import { SessionEnum } from "@/types";

const DynamicCartLink = dynamic(
  () => import("./cart-link"),
  {
    ssr: false,
  }
);

export const Nav = () => {
  const session = useSession();
  return (
    <NavWrapper>
      <p>LOGO</p>
      <NavLinks>
        <Link href="/">Home</Link> <Link href="/plants">Our plants</Link>{" "}
        <Link href="/contact">Contact</Link>
      </NavLinks>
      <NavIcons>
        <DynamicCartLink/>
        <Link href="/favourites">
          <FavIcon />
        </Link>
        <Link href={session.status === SessionEnum.authenticated ? "/account" : "/sign"}>
          <UserIcon />
        </Link>
        <SearchIcon />
      </NavIcons>
    </NavWrapper>
  );
};
