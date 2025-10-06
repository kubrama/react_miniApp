import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/slices/authSlice";

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
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInputs>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    try {
      if (data.email === "test@mail.com" && data.password === "123456") {
        const token = "fake-jwt-token-123";
        dispatch(loginSuccess({ token, email: data.email }));

        await Swal.fire({
          icon: "success",
          title: "Login successful",
          text: "Welcome back!",
          timer: 2000,
          showConfirmButton: false,
        });

        navigate("/");
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";

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
