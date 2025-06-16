// react
import { createContext, useState } from "react";

// types
import type { Children, LoadingContextPayload } from "@interfaces/Interface";

export const LoadingContext = createContext<LoadingContextPayload | undefined>(
  undefined
);

export const LoadingProvider = ({ children }: Children) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
