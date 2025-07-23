import * as yup from "yup";

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&._]{8,}$/;

export const userSchema = yup.object().shape({
  first_name: yup.string().required("First Name is required."),
  last_name: yup.string().required("Last Name is required."),
  email: yup.string().email("Enter a valid email address").required("Valid email is required."),
  password: yup
    .string()
    .matches(PASSWORD_REGEX, {
      message: "Password must be at least 8 characters, include uppercase, lowercase, number, and special character"
    })
    .required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
  phone_number: yup
    .string()
    .matches(/^(09\d{9}|(\+639|639)\d{9})$/, "Please enter a valid PH phone number")
    .required("Phone number is required"),
});