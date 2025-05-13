import { useEffect, useState } from "react"

// custom hooks
import { fetchSingleProduct } from "../hooks/FetchData"

// interfaces
import type { SingleProductResponse } from "../interfaces/Interface";

const Product = () => {
    const [id, setId] = useState<number>(0);
    const [product, setProduct] = useState<SingleProductResponse | null>(null);
    const [submited, setSubmited] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    { 
        e.preventDefault()
        const response = await fetchSingleProduct(id)
        setProduct(response)
        setSubmited(true)
    }

    useEffect(() => {
      if (product?.error)
      {
        setTimeout(() => {
          setSubmited(false);
        }, 5000);
      }
    }, [product]);
  return (
    <div>
        {
          submited ? (
            <div className="container">
              {!product && <p>Loading...</p>}
              {product?.error && <p>{product.error}</p>}              
              {product?.item && (
                <div className="product-container">
                  <p>Id: {product.item.id}</p>
                  <p>Title: {product.item.title}</p>
                  <p>Price: {product.item.price}</p>
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input type="number" required id="number" onChange={(e) => setId(Number(e.target.value))} />
              <button type="submit">Find</button>
            </form>
          )
        }
    </div>
  )
}

export default Product