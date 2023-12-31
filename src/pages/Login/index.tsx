import { useForm } from "react-hook-form";
import { ButtonStyled } from "@/components/Common/Button/styles";
import { StyledForm, FormContainer, NavigateText } from "./styles";
import { ErrorText } from "../NoteDetails/styles";
import axios from "@/api/axiosInstance";
import { useNavigate } from "react-router-dom";
import useLogin from "@/hooks/useLogin";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import useAuth from "@/hooks/useAuth";

interface FormData {
  username: string;
  password: string;
  confirmPassword?: string;
}

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormData>({
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { btnText, isLogin, loginText, toggleLogin } = useLogin(reset);

  const onSubmit = async (data: FormData) => {
    const { username, password } = data;
    try {
      if (isLogin) {
        const res = await axios.post("/users/login", { username, password });
        setAuth({ username, accessToken: res?.data?.accessToken });
      } else {
        const res = await axios.post("/users/signup", { username, password });
        setAuth({ username, accessToken: res?.data?.data?.accessToken });
      }
      navigate("/", { replace: true });
    } catch (e: unknown) {
      const err = e as AxiosError;
      if (err.response?.status === 409) {
        toast.error("User already exists");
      } else {
        toast.error("Something went wrong");
      }
    }
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
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
          })}
        />
        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
        {!isLogin && (
          <input
            type="password"
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
