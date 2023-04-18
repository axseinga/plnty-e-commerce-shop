import React from "react";
import { NewsletterFormWrapper, NewsletterModal } from "./newsletter-form.styles";
import { newsletterFormSchema } from "@/utils/validations/newsletter-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormTypes } from "@/types";
import { Input } from "@/components/form/elements/input/input";
import { Button, ButtonVariantType } from "@/components/button/button";
import { useAddToNewsletterMutation } from "@/services/api/addToNewsletterMutation";
import { Modal } from "@/components/modal/modal";
import Link from "next/link";

export const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormTypes>({ resolver: yupResolver(newsletterFormSchema) });
  const { mutate, error } = useAddToNewsletterMutation();
  const [showModal, setShowModal] = React.useState(false);

  const onSubmit = async (formData: FormTypes) => {
    mutate(formData.email);
    if (!error) {
      reset();
      setShowModal(true);
    }
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
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <NewsletterModal>
          <p>Thank you for signing up for our plant shop newsletter!</p>
          <p>
            We&apos;re thrilled to have you join our community of fellow plant
            enthusiasts.
          </p>
          <Link href="/plants" onClick={() => setShowModal(false)}><Button variant={ButtonVariantType.dark}>Continue shopping</Button></Link>
        </NewsletterModal>
      </Modal>
    </NewsletterFormWrapper>
  );
};
