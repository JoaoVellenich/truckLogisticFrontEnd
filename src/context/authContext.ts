import { createContext } from "react";

interface IAuthContext {
  authenticated: boolean;
  setAuthenticated: (newState: boolean) => void;
}
const initialValue: IAuthContext = {
  authenticated: false,
  setAuthenticated: () => {},
};

export const AuthContext = createContext<IAuthContext>(initialValue);
