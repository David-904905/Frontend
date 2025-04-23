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
                    <div className="image-containers">
                        <div className="first-two">
                            <div className="project-background-image">
                                <div className="background-text">
                                    <h2>Sample Project</h2>
                                    <a href="">VIEW MORE <FaArrowRightLong className="arrow-icon" /></a>
                                </div>
                            </div>
                            <img className="img-sec-one" src="/public/about-two.png" alt="" />
                        </div>
                        <div className="three-images">
                            <img className="three-img-one" src="/public/about3.png" alt="" />
                            <img className="third-img" src="/public/about4.png" alt="" />
                            <img src="/public/about5.png" alt="" />
                        </div>

                    </div>
                    <div className="products-btn">
                        <button>
                            ALL PROJECTS
                            <FaArrowRightLong className="arrow-icon" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Products;

