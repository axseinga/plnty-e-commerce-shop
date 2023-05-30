import * as yup from "yup";

export const signupFormSchema = yup.object({
  email: yup.string().required("Email is required").email("This field has to be valid email").min(6, "Email has to be at least 6 characters long"),
  password: yup.string().required("Password is required").min(6, "Password has to be at least 6 characters long"),
});
