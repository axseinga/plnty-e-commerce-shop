import { signOut } from "next-auth/react";
import { UserAccountWrapper, UserAccountHeader, UserAccountAvatar, UserAccountBody, UserAccountNavigation, UserAccountNavigationHeading, UserAccountNavigationList, UserAccountContent } from "./user-account.styles";
import Image from "next/image";
import { Button } from "@/components/button/button";
import { useQuery } from "@apollo/client";
import { GetAccountDetailsByEmailDocument, GetAccountDetailsByEmailQuery, GetAccountDetailsByEmailQueryVariables } from "../../../generated/graphql";
import { ProductList } from "@/components/product-list/product-list";

type UserAccountProps = {
  email: string;
};

export const UserAccount = ({ email }: UserAccountProps) => {
  const { loading, error, data } = useQuery<GetAccountDetailsByEmailQuery, GetAccountDetailsByEmailQueryVariables>(GetAccountDetailsByEmailDocument, { variables: { email: email } });

  // @todo make a nice spiner and error message

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong...</div>;
  return (
    <UserAccountWrapper>
      <UserAccountHeader>
        <div>
          <UserAccountAvatar>
            <Image src="/temp/user-avatar-placeholder.png" alt="User avatar" width={200} height={200} />
          </UserAccountAvatar>
          <p>Welcome, {data?.person?.name ?? ""}!</p>
        </div>
        <Button type="button" onClick={() => signOut()}>
          Log out
        </Button>
      </UserAccountHeader>
      <UserAccountBody>
        <UserAccountNavigation>
          <UserAccountNavigationHeading>
            <h2>Your dashboard</h2>
          </UserAccountNavigationHeading>
          <UserAccountNavigationList>
            <button>Update your details</button>
            <button>fav plants</button>
            <button>your reviews</button>
            <button>your shopping history</button>
          </UserAccountNavigationList>
        </UserAccountNavigation>
        <UserAccountContent>Check out your fav products:
          <div>
            { data?.person?.products && <ProductList items={data?.person?.products} variant="favourites"/>}
          </div>
        </UserAccountContent>
      </UserAccountBody>
    </UserAccountWrapper>
  );
};
