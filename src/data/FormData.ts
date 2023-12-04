import { InputConfig } from "@/components/extras/FormGenerator";
import * as yup from "yup";

export const inputConfigs: InputConfig[] = [
  {
    name: "email",
    defaultValue: "",
    label: "Email",
    type: "text",
    validationSchema: yup
      .string()
      .required("Email is required")
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Invalid email address"
      ),
  },
  {
    name: "phone",
    defaultValue: "",
    label: "Phone Number",
    type: "text",
    validationSchema: yup
      .string()
      .required("Phone Number is required")
      .matches(/^\d{10}$/, "Invalid phone number"),
  },
  // Add more input configurations with regex patterns as needed

  {
    name: "gender",
    defaultValue: "Male",
    label: "Gender",
    type: "radio", // For radio buttons
    options: ["Male", "Female", "Other"],
    validationSchema: yup.string().required("Gender is required"),
  },
  {
    name: "interests",
    defaultValue: [], // For checkboxes (use an array for multiple selections)
    label: "Interests",
    type: "checkbox", // For checkboxes
    options: ["Sports", "Music", "Reading"],
    validationSchema: yup.array().min(1, "Select at least one interest"),
  },
];
