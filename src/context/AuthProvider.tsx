import { type ReactNode, type Dispatch, createContext, useState } from "react";

interface AuthType {
  username?: string;
  accessToken?: string;
}

interface AuthContextType {
  auth: AuthType;
  setAuth: Dispatch<React.SetStateAction<AuthType>>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<AuthType>({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
