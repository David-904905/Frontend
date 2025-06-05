import { useContext } from "react";
import { UserContext } from "@contexts/UserDetails";

export const useUserDetails = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useUserDetails has to be used within a userDetails Provider"
    );
  }
  return context;
};
