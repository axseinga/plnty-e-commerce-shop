import { NewsletterFormWrapper } from "./newsletter-form.styles";
import { newsletterFormSchema } from "@/utils/validations/newsletter-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormTypes } from "@/types";
import { Input } from "@/components/form/elements/input/input";
import { Button } from "@/components/button/button";
import { useAddToNewsletterMutation } from "@/services/api/addToNewsletterMutation";

export const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormTypes>({ resolver: yupResolver(newsletterFormSchema) });
  const { mutate, error } = useAddToNewsletterMutation();

  const onSubmit = async (formData: FormTypes) => {
    mutate(formData.email);
    if (!error) reset();
  };

  return (
    <NewsletterFormWrapper noValidate onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="email"
        type="text"
        label="Never miss a plant sale or event"
        placeholder="Your email"
        register={register}
        errors={errors}
      />
      <Button type="submit">Sign up now</Button>
    </NewsletterFormWrapper>
  );
};
