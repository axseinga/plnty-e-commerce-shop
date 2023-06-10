import NextAuth from "next-auth";
import { ProductListItemT } from "@/types";
import { StringLiteral } from "typescript";

declare module "next-auth" {
  interface User {
    id: string;
    email: string;
  }
  interface Session {
    user: User;
  }
}
