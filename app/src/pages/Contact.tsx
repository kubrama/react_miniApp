import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2"; 
import {
  Container,
  Title,
  Form,
  Input,
  Textarea,
  Button,
  ErrorText,
} from "../assets/css/Contact.styled";

const contactSchema = yup.object({
  name: yup.string().required("Required").min(2, "Min 2 symbols"),
  email: yup.string().required("Required").email("Enter correct email"),
  message: yup.string().required("Required").min(10, "Min 10 symbols"),
});

type ContactFormInputs = yup.InferType<typeof contactSchema>;

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    console.log("Send", data);

    await Swal.fire({
      title: "✅ Message Sent!",
      text: "Thank you for contacting us. We’ll reply soon!",
      icon: "success",
      confirmButtonText: "Great!",
      confirmButtonColor: "#000",
      background: "#fefefe",
    });

    reset();
  };

  return (
    <Container>
      <Title>Contact Us</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <Input {...register("name")} placeholder="name" />
          {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
        </label>

        <label>
          Email:
          <Input {...register("email")} placeholder="email" />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </label>

        <label>
          Message:
          <Textarea {...register("message")} placeholder="enter your message" />
          {errors.message && <ErrorText>{errors.message.message}</ErrorText>}
        </label>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Send"}
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
