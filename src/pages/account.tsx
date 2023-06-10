import React from "react";
import { Hero } from "@/components/hero/hero";
import { useSession, signIn } from "next-auth/react";
import { SessionEnum } from "@/types";
import { SignInPageWrapper } from "@/styles/pages/account.styles";
import { SignupForm } from "@/components/form/forms/signup-form/signup-form";
import { UserAccount } from "@/components/user-account/user-account";

const AccountPage = () => {
  const session = useSession();
  const [email, setEmail] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (session.status !== SessionEnum.authenticated) return;
    const userEmail = session.data.user.email;
    setEmail(userEmail);
  }, [session]);

  return (
    <>
      <Hero heroImage="/assets/contactpage-header.png" />
      {session.status === SessionEnum.authenticated && email ? (
        <UserAccount email={email} />
      ) : (
        <SignInPageWrapper>
          <p>
            Please <button onClick={() => signIn()}>Log in</button> to see your account
          </p>
          <p>If you do not have an account yet, you can easily create one by clicking on the link below.</p>
          <SignupForm />
        </SignInPageWrapper>
      )}
    </>
  );
};

export default AccountPage;
