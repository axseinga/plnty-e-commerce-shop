import { Hero } from "@/components/hero/hero";
import { useSession, signIn, signOut } from "next-auth/react";
import { SessionEnum } from "@/types";

const SignPage = () => {
  const session = useSession();

  
  return (
    <>
      <Hero heroImage="/assets/contactpage-header.png" />
      {session.status !== SessionEnum.authenticated ? <button onClick={() => signIn()}>Log in</button> :  <button onClick={() => signOut()}>Log out</button>}
    </>
  );
};

export default SignPage;