import { useForm } from "react-hook-form";
import { ButtonStyled } from "@/components/Common/Button/styles";
import { StyledForm, FormContainer, NavigateText } from "./styles";
import { useState } from "react";
import { ErrorText } from "../NoteDetails/styles";

interface FormData {
  username: string;
  password: string;
  confirmPassword?: string;
}

const Login = () => {
  const [loginState, setLoginState] = useState<string>("sign-in");

  const toggleLogin = () => {
    if (loginState === "sign-in") {
      setLoginState("sign-up");
    } else {
      setLoginState("sign-in");
    }
  };
  const isLogin = loginState === "sign-in";
  const loginText = loginState === "sign-in" ? "up" : "in";
  const btnText = isLogin ? "Login" : "Sign Up";

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Username"
          {...register("username", {
            required: "Username is required",
          })}
        />
        {errors.username && <ErrorText>{errors.username.message}</ErrorText>}
        <input
          type="text"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
          })}
        />
        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
        {!isLogin && (
          <input
            type="text"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Password is required",
              validate: (val): string | boolean => {
                if (watch("password") != val) {
                  return "Your passwords do not match";
                }
                return true;
              },
            })}
          />
        )}
        {errors.confirmPassword && (
          <ErrorText>{errors.confirmPassword.message}</ErrorText>
        )}
        <ButtonStyled>{btnText}</ButtonStyled>
        <NavigateText>
          <span onClick={toggleLogin}>Sign {loginText}</span> instead
        </NavigateText>
      </StyledForm>
    </FormContainer>
  );
};

export default Login;
