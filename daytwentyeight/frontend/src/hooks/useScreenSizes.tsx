import { useContext } from 'react'
import { ScreenSizeContext } from "@contexts/ScreenSizeContext"

export const useScreenSizes = () => {
    const context = useContext(ScreenSizeContext)

    if(!context)
    {
        throw new Error("Screen size context has to be used within a screen size provider");
    }
  return context;
}
