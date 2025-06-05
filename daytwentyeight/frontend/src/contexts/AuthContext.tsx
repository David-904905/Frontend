import { createContext, useState } from "react";
import axios from "axios";
import type { AuthContextDependency, Children, LoginPayLoad, SignUpPayLoad } from "@interfaces/Interface";

// types




export const AuthContext = createContext<AuthContextDependency | undefined>(
  undefined
);

export const AuthProvider = ({ children }: Children) => {
  const [loginStatus, setLoginStatus] = useState<boolean>(true);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [signUpError, setSignUpError] = useState<string | null>(null);
  const [isHome, setIsHome] = useState<boolean>(true);
  // auth functions

  const Login = async (payload: LoginPayLoad) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        payload
      );
      const { token, error } = response.data;

      if (error) {
        setLoginError(error);
        setLoginStatus(false);
        return;
      }
      if (token) {
        localStorage.setItem("auth-token", token);
        setLoginStatus(true);
        setLoginError(null);
      }
    } catch (err: any) {
      console.log("Login failed: ", err);
      setLoginError("Something went wrong. Please try again.");
      setLoginStatus(false);
    }
  };

  const Logout = () => {
    localStorage.removeItem("auth-token");
    setLoginStatus(false);
  };

  const SignUp = async (payload: SignUpPayLoad) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/sign-up",
        payload
      );

      const { token, error } = response.data;

      if (error) {
        setLoginError(error);
        setLoginStatus(false);
        return;
      }
      if (token) {
        localStorage.setItem("auth-token", token);
        setLoginStatus(true);
        setSignUpError(null);
      }
    } catch (err: any) {
      console.log("Login failed: ", err);
      setSignUpError("Something went wrong. Please try again.");
      setLoginStatus(false);
    }
  };

  return (
    <AuthContext.Provider value={{ loginStatus, loginError, signUpError,isHome, setIsHome, Login, Logout, SignUp }}>
      {children}
    </AuthContext.Provider>
  );
};
