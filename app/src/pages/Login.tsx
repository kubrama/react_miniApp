import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import {
  Container,
  Title,
  Form,
  Input,
  Button,
  ErrorText,
} from "../assets/css/Login.styled";


const loginSchema = yup.object({
  email: yup.string().required("Email is required").email("Enter a valid email"),
  password: yup.string().required("Password is required").min(6, "Min 6 symbols"),
});

type LoginInputs = yup.InferType<typeof loginSchema>;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInputs>({
    resolver: yupResolver(loginSchema),
  });

 
  const fakeLoginRequest = async (email: string, password: string) => {
    return new Promise<{ token: string }>((resolve, reject) => {
      setTimeout(() => {
        if (email === "test@mail.com" && password === "123456") {
          resolve({ token: "fake-jwt-token-123" });
        } else {
          reject(new Error("Invalid email or password"));
        }
      }, 1000);
    });
  };

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    try {
      const res = await fakeLoginRequest(data.email, data.password);
      localStorage.setItem("token", res.token);
      login(data.email);

      await Swal.fire({
        icon: "success",
        title: "Login successful",
        text: "You are now logged in!",
      });

      navigate("/"); 
    } catch (error: unknown) {
      let message = "Something went wrong";
      if (error instanceof Error) message = error.message;

      await Swal.fire({
        icon: "error",
        title: "Login failed",
        text: message,
      });
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email:
          <Input {...register("email")} placeholder="Enter your email" />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </label>

        <label>
          Password:
          <Input
            type="password"
            {...register("password")}
            placeholder="Enter your password"
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
        </label>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
