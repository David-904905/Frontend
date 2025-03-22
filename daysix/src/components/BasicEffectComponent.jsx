import { useEffect } from "react";

const BasicEffectComponent = () => {

    // using useEffect to render a message to the console when the component first mounts.

    useEffect(() => {
        console.log("message haha");
    }, [])

}
export default BasicEffectComponent;