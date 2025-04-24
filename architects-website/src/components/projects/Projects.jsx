import "../../styles/projects.css";
import { FaArrowRightLong } from "react-icons/fa6";


const Products = () => {
    return (
        <>
            <section className="project-section">
                <div className="product-container">
                    <div className="header">
                        <h2>Our Projects</h2>
                    </div>
                    <div className="project-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam nesciunt officia quas et architecto optio doloribus laborum dolorem eos ullam?
                    </div>
                    <div className="project-text-large">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ullam ratione. Itaque consequatur eum doloremque iusto veritatis sequi ad dolore officiis, dolorum delectus deserunt reprehenderit, voluptatem saepe dolorem dolores ea omnis ipsam assumenda. Debitis, veniam repellendus, ipsum, nulla nemo similique eius deleniti rem ad labore alias aperiam obcaecati ullam neque ex explicabo illo distinctio sed. Corrupti, qui. Excepturi iusto, itaque aperiam voluptate obcaecati pariatur voluptatem earum repellat, fugit, unde similique!
                    </div>
                    <div className="image-containers">
                        <div className="first-two">
                            <div className="project-background-image">
                                <div className="background-text">
                                    <h2>Sample Project</h2>
                                    <a href="">View More <FaArrowRightLong className="arrow-icon" /></a>
                                </div>
                            </div>
                            <img className="img-sec-one" src="/public/about-two.png" alt="" />
                        </div>
                        <div className="three-images">
                            <img className="three-img-one" src="/public/about3.png" alt="" />
                            <img className="third-img" src="/public/about4.png" alt="" />
                            <img className="thir-img" src="/public/about5.png" alt="" />
                            <div className="this-img">
                                <div className="background-text">
                                    <h2>Ring Park</h2>
                                    <a href="">View more <FaArrowRightLong className="arrow-icon" /></a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="products-btn">
                        <button>
                            All Projects
                            <FaArrowRightLong className="arrow-icon" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Products;

