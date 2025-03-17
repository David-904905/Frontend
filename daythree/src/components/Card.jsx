// const style = {
//     backgroundColor: "grey",
//     color: "white",
//     padding: "30px",
//     marginTop: "15px",
//     borderRadius: "5px"
// }

const Card = () => {
    const handleCopyEvent = () => window.alert("Dont copy this text bro 👀 ");
    const moveEventHandler = () => window.alert("You placed the mouse on the section stuff....")
    return (
        <>
            <div className="container">
                <p id="text" onMouseLeave={moveEventHandler} onCopy={handleCopyEvent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quam perspiciatis minus laudantium. Ipsum sint distinctio quam exercitationem facere mollitia ipsam! Libero fugit assumenda explicabo corrupti blanditiis eveniet soluta non magni eius architecto omnis asperiores sit alias pariatur vero, rem corporis dolore neque incidunt impedit quas quaerat sapiente! Deleniti delectus dicta quis veniam exercitationem nulla itaque nobis, vitae omnis qui voluptatem dolorem iste error, eius placeat blanditiis in! Molestiae, blanditiis.</p>
            </div>
        </>
    )
}


export default Card;