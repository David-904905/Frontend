// The useActionState changes the value of a state based on the result of a form action.

import { useActionState } from "react";

// the function for our useActionState will have two parameters, previousState and formData
const increment = async (previousState: any, formData: any ) => {
    console.log(formData.get("firstname"));
    return previousState + 1;
};

const ActionState = () => {

    const [state, formAction] = useActionState(increment, 0);

    

    return  (
        <>
            <form>
                <h1>{state}</h1>
                <button formAction={formAction}>Increment</button>

                <input type="text" id="firstname"  name="firstname"/><br />
            </form>
        </>
    )
}

export default ActionState;