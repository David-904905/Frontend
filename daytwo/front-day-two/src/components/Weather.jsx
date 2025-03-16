const Weather = ({temperature}) => {
    let message;
    if (temperature < 15){
        message = "It's cold!";
    }
    else if (temperature >= 15 <= 25) {
        message = "It's nice outside";
    }
    else{
        message = "It's hot outside";
    }   
    return (
        <>
            <p>{message}</p>
        </>
    )
}

export default Weather;