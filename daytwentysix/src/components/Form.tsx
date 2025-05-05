// interface FormData
// {
//     firstname: string,
//     email: string
// }



const Form = () => {
    const formAction = (formData: any) => {
        const userData = {
            firstname: formData.get("firstname"), 
            // The firstname that the formData object is getting is from the value of the firstname attribute in the html
            email: formData.get("email"),
        }
        console.log(userData);
    }
    return (
        <>
            <div className="container">
                <form action={formAction}>
                    <label htmlFor="firstname">Firstname</label><br />
                    <input required type="text" id="firstname" name="firstname" /><br />
                    <label htmlFor="email">Email</label><br />
                    <input required type="email" id="email" name="email" /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form;