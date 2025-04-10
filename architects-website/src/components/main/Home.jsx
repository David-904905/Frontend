import { useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

import "../../styles/home.css"

import { ImageArray } from "../nav/WelcomeDB";

const Home = () => {

    const [imageUrl, setImageUrl] = useState("/public/homepicture.png")

    const nextImage = () => {
        const currentIndex = ImageArray.indexOf(imageUrl);
        const nextIndex = (currentIndex + 1) % ImageArray.length; // wrap around
        setImageUrl(ImageArray[nextIndex]);
      };
      

    return (
        <>
            <section className="home">
                <div className="main-contain">
                    <div className="text-section">
                        <div className="texts">
                            <h2>POJECT</h2>
                            <p>Lorum</p>
                        </div>
                        <div className="selections">
                            <button className="btns" onClick={nextImage}><GrLinkPrevious /></button>
                            <button className="btns" onClick={nextImage}><GrLinkNext /></button>
                        </div>
                    </div>
                    <div className="image-section">
                        <img src={imageUrl} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;
