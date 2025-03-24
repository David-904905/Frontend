import { useId } from "react";

const CustomIdComponent = () => {
    const uniqueId = useId();
    console.log(uniqueId);
    return (
        <>
            <label htmlFor={`${uniqueId}-email`}></label>
            <input type="email" id={`${uniqueId}-email`} />
            {/* These components have a unique id */}
            
        </>
    )
}

export default CustomIdComponent;