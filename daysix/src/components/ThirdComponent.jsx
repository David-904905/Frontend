import { createContext } from "react";
import { Data } from "../App";

const ThirdComponent = () => {
    // method one
    // return (
    //     <Data.Consumer>
    //         {(author) => (
    //             <>
    //                 <h2>{author}</h2>
    //                 <p>Will this work?</p>
    //             </>
    //         )}
    //     </Data.Consumer>
    // );
    // the more efficient way of doing it.
    const author = createContext(Data);

    return (
        <>
            <h2>{author}</h2>
            <p>Will this work?</p>
        </>
    )

};

export default ThirdComponent;
