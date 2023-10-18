import { ButtonStyled } from "@/components/Common/Button/styles";
import { StyledForm, FormContainer } from "./styles";
import { useState } from "react";

const Login = () => {
  const [loginState, setLoginState] = useState<string>("sign-in");

  const toggleLogin = () => {
    if (loginState === "sign-in") {
      setLoginState("sign-up");
    } else {
      setLoginState("sign-in");
    }
  };

  const loginText = loginState === "sign-in" ? "up" : "in";

  return (
    <FormContainer>
      <StyledForm>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <ButtonStyled>Login</ButtonStyled>
        <p onClick={toggleLogin}>Sign {loginText} instead</p>
      </StyledForm>
    </FormContainer>
  );
};

export default Login;
