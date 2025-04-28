import { useParams } from "react-router";

const SingleProduct = () => {
  const params = useParams();
  return <div>The product id is {params.productId}</div>;
};

export default SingleProduct;
