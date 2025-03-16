
const products = {
    "name": "Black Trousers",
    "image": "/pants.jpeg",
    "description": "Smooth black trousers, that prioritizes easy wear, good wash and does not fade",
    "price": "$500",
    "availability": "In stock"
}

const Products = () => {
    return (
        <>
            <h3>Today's Top Pick</h3>
            <div className="products">
                <img style={{height: "200px"}} src={products.image} alt="black pants" />
                <p>Name: {products.name}</p>
                <p>Desription: {products.description}</p>
                <p>Price: {products.price}</p>
                <p>Availability: {products.availability}</p>
            </div>
        </>
    )
}


export default Products;