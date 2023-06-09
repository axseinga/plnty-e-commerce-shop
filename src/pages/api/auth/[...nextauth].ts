import { authorizedApolloClient } from "@/services/graphql/apolloClient";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { GetAccountByEmailDocument, GetAccountByEmailQuery, GetAccountByEmailQueryVariables } from "../../../../generated/graphql";
import * as bcrypt from "bcrypt";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Email", type: "email", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;

        const userByEmail = await authorizedApolloClient.query<GetAccountByEmailQuery, GetAccountByEmailQueryVariables>({
          query: GetAccountByEmailDocument,
          variables: {
            email: credentials.username,
          },
        });

        if (!userByEmail.data.person?.password) return null;

        const arePasswordEqual = bcrypt.compare(credentials.password, userByEmail.data.person.password);

        if (!arePasswordEqual) return null;

        return { id: userByEmail.data.person.id, email: userByEmail.data.person.email }
      },
    }),
  ],
};
export default NextAuth(authOptions);
