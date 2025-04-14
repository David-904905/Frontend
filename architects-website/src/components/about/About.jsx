import { FaArrowRightLong } from "react-icons/fa6";

import "../../styles/about.css"

const About = () => {
    return (
        <>
            <section className="about">
                <div className="about-contain">
                    <div className="two-images">
                        <img src="/public/abouttop.png" alt="" />
                        <img src="/public/aboutbottom.png" alt="" />
                    </div>
                    <div className="other-sec">
                        <div className="img-section">
                            <img src="/public/aboutlarge.png" alt="" />
                        </div>
                        <div className="text-section-about">
                            <h2>About</h2>
                            <p>Lorem ipsum, dsolor sit amet consectetur adipisicing elit. Voluptates, aspernatur soluta ut quae vero quis eaque dolore. Non assumenda vero omnis deserunt corrupti a neque quas. Corrupti ipsum velit enim dolores itaque autem tenetur ea, natus porro fugiat est minus eum error suscipit excepturi, blanditiis mollitia facilis! Ex, ducimus. Eos excepturi iste nisi architecto atque perferendis magni, quidem pariatur ex aperiam. Ullam quas provident perferendis, ad alias quisquam ipsa sapiente, eveniet, veritatis qui soluta impedit dignissimos ut. Voluptates numquam ipsam corporis consequuntur a, et nostrum beatae unde odio, tempora adipisci consectetur tempore ratione sapiente velit culpa reiciendis, voluptatum dolorum quas!</p>
                            <button className="readmore-btn">Read More <FaArrowRightLong className="read-more" /></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
