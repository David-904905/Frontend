const ButtonElement = () => {
    const handleClickEvent = () => {
        window.alert("You clicked me!")
    }
    return (
        <>
            <button style={{padding: "10px", marginTop: "10px"}} onClick={handleClickEvent}>Click me</button>
        </>
    )
}


export default ButtonElement;