import { NextApiHandler } from "next";
import * as bcrypt from "bcrypt";
import { authorizedApolloClient } from "@/services/graphql/apolloClient";
import { CreateAccountDocument, CreateAccountMutation, CreateAccountMutationVariables } from "../../../../generated/graphql";

const SignupHandler: NextApiHandler = async (req, res) => {
  // @todo add validation of body with yup
  const { email, password } = req.body;

  const passwordHash = await bcrypt.hash(password, 12);

  console.log(email, password, passwordHash);

  const user = await authorizedApolloClient.mutate<CreateAccountMutation, CreateAccountMutationVariables>({
    mutation: CreateAccountDocument,
    variables: {
      email: email,
      password: passwordHash,
    },
  });

  res.json({ userId: user.data?.createPerson?.id });
};

export default SignupHandler;
