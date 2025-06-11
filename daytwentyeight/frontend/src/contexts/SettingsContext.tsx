import { createContext, useState } from "react";

import type { SettingsContextPayload } from "@interfaces/Interface";
import type { Children } from "@interfaces/Interface";

export const settingsContext = createContext<SettingsContextPayload | null>(
  null
);

export const SettingsContextProvider = ({children}: Children) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  return (
    <settingsContext.Provider value={{ searchValue, setSearchValue, showModal, setShowModal, showEditModal, setShowEditModal}}>
        {children}
    </settingsContext.Provider>
  );
};

export default SettingsContextProvider;
