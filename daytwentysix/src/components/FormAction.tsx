import FormButton from "./FormButton"


const FormAction = () => {
    const myAction = async (formData: any) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // we make this function asynchronous because we want to wait for the timeout to complete
        // before we move onto the next aspect of the function.

        const newPost = {
            name: formData.get("firstname"),
            email: formData.get("email"),
            
        };

        console.log(newPost);
    }
  return (
    <>
        <form action={myAction}> 
            {/* Instead of making use of onSubmit, in React 19, we make use of action. */}

            <h1>Action form</h1>
            <label htmlFor="firstname">Name: </label><br />
            <input type="text" required id="firstname" name="firstname" /><br />

            <label htmlFor="email">Email: </label><br />
            <input type="email" required id="email" name="email" /><br />

            <FormButton />
        </form>

        {/* This is some sort of a server operation, that is why the my action function is asynchronous, when
        working with servers, the operations are usually asynchronous.*/}
    </>
  )
}

export default FormAction