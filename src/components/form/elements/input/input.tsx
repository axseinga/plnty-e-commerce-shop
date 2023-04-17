import React, { InputHTMLAttributes } from "react";
import { InputWrapper } from "./input.styles";
import { Path, UseFormRegister, FieldErrorsImpl } from "react-hook-form";
import { FormTypes } from "@/types";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<FormTypes>;
  label: string;
  type: "text" | "number" | "email";
  placeholder: string;
  register: UseFormRegister<FormTypes>;
  errors: Partial<FieldErrorsImpl<FormTypes>>;
}

export const Input = ({
  name,
  label,
  type,
  placeholder,
  register,
  errors,
}: InputProps) => {
  const errorMsg: string | undefined = errors?.[name]?.message;
  const hasError = Boolean(errors && errorMsg);

  return (
    <InputWrapper>
      <label htmlFor={name}>{label}</label>
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          {...(register && register(name))}
          name={name}
        />
        <p>{hasError ? errorMsg : ""}</p>
    </InputWrapper>
  );
};
