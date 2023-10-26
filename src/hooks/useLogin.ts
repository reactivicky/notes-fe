import { useState } from "react";

const useLogin = (reset: () => void) => {
  const [loginState, setLoginState] = useState<string>("sign-in");
  const toggleLogin = () => {
    reset();
    if (loginState === "sign-in") {
      setLoginState("sign-up");
    } else {
      setLoginState("sign-in");
    }
  };
  const isLogin = loginState === "sign-in";
  const loginText = loginState === "sign-in" ? "up" : "in";
  const btnText = isLogin ? "Login" : "Sign Up";

  return { isLogin, loginText, btnText, toggleLogin };
};

export default useLogin;
