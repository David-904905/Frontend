import { useContext } from "react";
import { ToastContext } from "../contexts/ToastContext";
const useToastContext = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("Toast Context must be used within a provider");
  }
  return context;
};

export default useToastContext;
