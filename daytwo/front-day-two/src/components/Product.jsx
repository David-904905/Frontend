const Product = ({name, price}) => {
    return (
        <>
            <div className="backgroundTile">
                <h2>Name: {name}</h2>
                <p>Price: ${price}</p>
            </div>
        </>
    )
}


export default Product;