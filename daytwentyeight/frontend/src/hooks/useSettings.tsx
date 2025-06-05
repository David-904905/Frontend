import { useContext } from "react"
import { settingsContext } from "@contexts/SettingsContext"

export const useSettings = () => {
    const context = useContext(settingsContext);
    if (!context)
    {
        throw new Error("useSettings must be used within a settings context provider");
    }
    return context;
}
