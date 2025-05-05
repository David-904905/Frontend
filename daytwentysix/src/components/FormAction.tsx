import FormButton from "./FormButton"


const FormAction = () => {
    const myAction = async (formData: any) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const newPost = {
            name: formData.get("firstname"),
            email: formData.get("email"),
            
        };

        console.log(newPost);
    }
  return (
    <>
        <form action={myAction}>
            <h1>Action form</h1>
            <label htmlFor="firstname">Name: </label><br />
            <input type="text" required id="firstname" name="firstname" /><br />

            <label htmlFor="email">Email: </label><br />
            <input type="email" required id="email" name="email" /><br />

            <FormButton />
        </form>
    </>
  )
}

export default FormAction