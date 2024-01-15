import { string, object } from "yup";

export const schemaOderFrom = object().shape({
  name: string().required("Ім'я є обов'язковим полем"),
  email: string()
    .email("Введіть коректний email")
    .required("Email є обов'язковим полем"),
  phone: string().required("Номер телефону є обов'язковим полем"),
});
