const name = "David Nduonofit"
const date = new Date();

const DynamicRender = () => {
    return (
        <>
            <h2>Greetings, My name is {name}</h2>
            <p>The current date is {date.toLocaleDateString()}</p>
        </>
    )
}

export default DynamicRender;