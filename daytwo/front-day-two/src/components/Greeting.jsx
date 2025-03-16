
const Greeting = ({timeOfDay}) => {
    let message;
    if(timeOfDay == "morning"){
        message = "Good Morning";
    }
    if(timeOfDay == "afternoon"){
        message = "Good Afternoon";
    }
    return (
        <>
            <p>{message}</p>
        </>
    )
}

export default Greeting;