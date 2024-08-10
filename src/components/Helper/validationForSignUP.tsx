import * as Yup from "yup";

export const signUpschema = Yup.object({
  email: Yup.string().email("Email Invallid!").required("Please Enter email"),
  password: Yup.string()
    .min(8, "Password must be more than 8 digits")
    .required("Please Enter password")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,"Special character and Number is Must")
});
