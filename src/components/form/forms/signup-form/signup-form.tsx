import { Hero } from "@/components/hero/hero";
import { Input } from "@/components/form/elements/input/input";
import { signupFormSchema } from "@/utils/validations/signup-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormTypes } from "@/types";
import { useForm } from "react-hook-form";
import { SignupFormWrapper } from "./signup-form.styles";

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormTypes>({ resolver: yupResolver(signupFormSchema) });

  const onSubmit = async (formData: FormTypes) => {
        await fetch("http://localhost:3000/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  };

  return (
      <SignupFormWrapper noValidate onSubmit={handleSubmit(onSubmit)}>
        <Input name="email" type="text" label="Email:" placeholder="Your email" register={register} errors={errors} />
        <Input name="password" type="text" label="Password:" placeholder="Your password" register={register} errors={errors} />
        <button type="submit">Sign up</button>
      </SignupFormWrapper>
  );
};