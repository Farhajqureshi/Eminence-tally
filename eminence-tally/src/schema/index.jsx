import * as Yup from "yup";

const registerSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Name is required"),
  lastName: Yup.string().min(2).max(25).required("Last name is required"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Phone number is must be required 10 digits")
    .required("Phone number is required"),
});

export default registerSchema;
