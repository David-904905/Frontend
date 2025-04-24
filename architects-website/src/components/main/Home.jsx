import { useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

import "../../styles/home.css"

import { ImageArray } from "../nav/WelcomeDB";

const Home = () => {

    const [imageUrl, setImageUrl] = useState("/public/homepicture.png")
    const [imgName, setImgName] = useState("Lorem");
    const nextImage = () => {
        const currentIndex = ImageArray.findIndex(image => image.src === imageUrl);
        const nextIndex = (currentIndex + 1) % ImageArray.length;
        setImageUrl(ImageArray[nextIndex].src);
        setImgName(ImageArray[nextIndex].name);
      };

    const previousImage = () => {
        const currentIndex = ImageArray.findIndex(image => image.src == imageUrl);
        const previousIndex = (currentIndex - 1) % ImageArray.length;
        setImageUrl(ImageArray[previousIndex].src);
        setImgName(ImageArray[previousIndex].name);
    }
      
      

    return (
        <>
            <section className="home">
                <div className="main-contain">
                    <div className="text-section">
                        <div className="texts">
                            <h2>POJECT</h2>
                            <p>{imgName}</p>
                        </div>
                        <div className="selections">
                            <button className="btns" onClick={previousImage}><GrLinkPrevious /></button>
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
