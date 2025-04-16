import { ReactNode } from "react";

interface ReactNodeInterface
{
    children: ReactNode
}

const Child = ({children}: ReactNodeInterface) => {

    return (
        <>
            <div className="display-child">
                {children}
            </div>
        </>
    )
}

export default Child;