import { useState, createContext } from "react"

import type { ScreenSizes } from "@interfaces/Interface";
import type { Children } from "@interfaces/Interface";

export const ScreenSizeContext = createContext<ScreenSizes | undefined>(undefined);

export const ScreenSizeProvider = ({children}: Children) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isMediumScreen, setIsMediumScreen] = useState<boolean>(false);


  return (
    <ScreenSizeContext.Provider value={{isMobile, setIsMobile, isMediumScreen, setIsMediumScreen}}>
        {children}
    </ScreenSizeContext.Provider >
  )
}

