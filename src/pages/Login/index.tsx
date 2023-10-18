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
  const isLogin = loginState === "sign-in";
  const loginText = loginState === "sign-in" ? "up" : "in";
  const btnText = isLogin ? "Login" : "Sign Up";

  return (
    <FormContainer>
      <StyledForm>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        {!isLogin && <input type="text" placeholder="Confirm Password" />}
        <ButtonStyled>{btnText}</ButtonStyled>
        <p>
          <span onClick={toggleLogin}>Sign {loginText}</span> instead
        </p>
      </StyledForm>
    </FormContainer>
  );
};

export default Login;
