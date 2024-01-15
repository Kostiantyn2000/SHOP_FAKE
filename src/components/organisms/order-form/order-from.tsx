"use client";
import React from "react";
import { Input, Button, notification } from "antd";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaOderFrom } from "./validation";
import emailjs from "emailjs-com";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export const OrderForm = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
    resolver: yupResolver(schemaOderFrom),
  });

  const sendEmail = (data: FormData) => {
    emailjs
      .send(
        "service_j713dhg",
        "template_4ngq95l",
        {
          email_id: data.email,
          from_name: "New order",
          customer_name: data.name,
          phone: data.phone,
        },
        "eIYJCjZruJwT-pglJ"
      )
      .then(() => {
        console.log("Email sent successfully:");
        notification.success({
          message: "Successful order",
          description: "Thank you for your order. We will contact you soon!",
        });
      })
      .catch(() => {
        console.error("Email sending error:");
      });
  };

  const onSubmit = (data: FormData) => {
    try {
      console.log("Order Data:", data);
      sendEmail(data);
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div>
      <label title="Name">
        Name
        <Controller
          name="name"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input value={value} onChange={onChange} />
          )}
        />
        {errors.name && (
          <span style={{ color: "red" }}>{errors.name.message}</span>
        )}
      </label>

      <label style={{ marginBottom: 15 }} title="Email">
        Email
        <Controller
          name="email"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input value={value} onChange={onChange} />
          )}
        />
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}
      </label>

      <label style={{ marginBottom: 15 }} title="Phone number">
        Phone number
        <Controller
          name="phone"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input value={value} onChange={onChange} />
          )}
        />
        {errors.phone && (
          <span style={{ color: "red" }}>{errors.phone.message}</span>
        )}
      </label>

      <Button
        style={{ marginTop: 15 }}
        type="primary"
        onClick={handleSubmit(onSubmit)}
      >
        Buy
      </Button>
    </div>
  );
};
