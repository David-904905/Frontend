import { createContext, useState } from "react";
import type { Children, ToastContextPayload } from "../interfaces/interface";

export const ToastContext = createContext<ToastContextPayload | undefined>(undefined);

export const ToastProvider = ({ children }: Children) => {
  const [showToast, setShowToast] = useState<boolean>(false);
  return (
    <>
      <ToastContext.Provider value={{ showToast, setShowToast }}>
        {children}
      </ToastContext.Provider>
    </>
  );
};
