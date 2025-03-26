import { useState } from "react";

const Form = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [usernameError, setShowUsernameError] = useState(false);
    const [emailError, setShowEmailError] = useState(false);
    const [passwordError, setShowPasswordError] = useState(false);
    const [confirmPasswordError, setShowComfirmPasswordError] = useState(false)


    


    const [usernameColor, setUsernameColor] = useState("black");
    const [emailColor, setEmailColor] = useState("black");
    const [passwordColor, setPasswordColor] = useState("black");
    const [confirmPasswordColor, setConfirmPasswordColor] = useState("black");


    const [displayMessage, setDisplayMessage] = useState(false);

    const validateCredentials = (e) => {
        e.preventDefault();
        
        if(validateUsername(username) === false)
        {
            setUsernameColor("red");
            setShowUsernameError(true);
            return;
   
        }
        else
        {
            setUsernameColor("green");
        }
        if(validateEmail(email) === false)
        {
            setEmailColor("red");
            setShowEmailError(true);
            return;
    
        }
        else
        {
            setEmailColor("green");
        }
        if(validatePassword(password) === false){
            setPasswordColor("red");
            setShowPasswordError(true);
            return;

        }
        else
        {
            setPasswordColor("green");
        }
        if(validateConfirmPassword(validateConfirmPassword(password, confirmPassword)))
        {
            setConfirmPasswordColor("red");
            setShowComfirmPasswordError(true);
            return;

        }
        else
        {
            setConfirmPasswordColor("green");
            
        }
        setDisplayMessage(true);

    }

    if(displayMessage === true)
    {
        window.alert("Validation Successful");
    }
    

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%+_)(*&^!])[A-Za-z\d@#$%+_)(*&^!]{8,}$/;
        return passwordRegex.test(password)
    }

    const validateEmail = (email) => {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/
        return emailRegex.test(email);
    }

    const validateUsername = (username) => {
        const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,10}/;
        return usernameRegex.test(username);
    }

    const validateConfirmPassword = (password1, password2) => {
        return password1 === password2;
    }   


    return (
        <>
            <div className="form-container">
                <div className="heading">
                    <h2>Sign in</h2>
                </div>
                <form onSubmit={(e) => validateCredentials(e)} className="form-class">
                    <label htmlFor="username">Username: </label>
                    {usernameError ? <p style={{fontSize: "12px", margin: "4px"}}>username is invalid</p> : ""}
                    <input type="text" style={{color: usernameColor}} value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <label htmlFor="email">Email: </label>
                    {emailError ? <p style={{fontSize: "12px", margin: "4px"}}>your email is invalid, email must contain a ., an @ symbol and an extension</p> : ""}
                    <input type="text" style={{color: emailColor}}  value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="password">Password: </label>
                    {passwordError ? <p style={{fontSize: "12px", margin: "4px"}}>password is invalid, password should be a minimum of 8 in length, must begin with a letter, and must contain a number and a special symbol</p> : ""}
                    <input type="password" style={{color: passwordColor}}  value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <label htmlFor="confirmpassword">Confirm Password: </label>
                    {confirmPasswordError ? <p style={{fontSize: "12px", margin: "4px"}}>your passwords do not match, try again</p> : ""}
                    <input type="password" style={{color: confirmPasswordColor}}  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

// the form will take username, email, password, confirmpassword

export default Form;