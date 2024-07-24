import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./authContext";

interface AuthProviderProps {
  children: ReactNode;
}
interface IAuthContext {
  authenticated: boolean;
  setAuthenticated: (newState: boolean) => void;
}
const initialValue: IAuthContext = {
  authenticated: false,
  setAuthenticated: () => {},
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authenticated, setAuthenticated] = useState(
    initialValue.authenticated
  );

  const navigate = useNavigate();

  const value = {
    authenticated,
    setAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
