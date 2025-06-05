import { createContext, useState } from "react";

import type { SettingsContextPayload } from "@interfaces/Interface";
import type { Children } from "@interfaces/Interface";

export const settingsContext = createContext<SettingsContextPayload | null>(
  null
);

export const SettingsContextProvider = ({children}: Children) => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <settingsContext.Provider value={{ searchValue, setSearchValue}}>
        {children}
    </settingsContext.Provider>
  );
};

export default SettingsContextProvider;
