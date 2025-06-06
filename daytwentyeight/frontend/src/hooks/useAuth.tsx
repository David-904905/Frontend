import { AuthContext } from "@contexts/AuthContext"
import { useContext } from "react"

const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context)
    {
        throw new Error("Auth context must be used inside a provider");
    }
    return context;
}

export default useAuth;