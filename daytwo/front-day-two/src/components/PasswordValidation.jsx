const Valid = () => <p>Successful</p>

const InValid = () => <p>Unsuccessful</p>

const Password = ({isValid}) => {
    return isValid? <Valid /> : <InValid />
}

export default Password;