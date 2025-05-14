import { useState } from "react"
import { FaCamera } from "react-icons/fa";


import "../styles/bgimg.css";

const ImageContainer = () => {
    const [ backgroundImage, setBackgroundImage ] = useState<string>("https://placehold.co/1500x400")
    const changeBackgroundImage = (e: any) => {
        const file = e.target.files[0]
        if (file)
        {
            setBackgroundImage(URL.createObjectURL(file))
        }
    }
    // absolute
  return (
    <div className="img-container">
        <img src={backgroundImage} alt="background-image" className="main-image"/>
        <label htmlFor="upload-btn" className="camera-icon-container"><div className="sub-container"><FaCamera className="camera-icon" /></div></label>
        <input type="file" id="upload-btn" className="upload-btn" hidden={true} accept="image/*" onChange={changeBackgroundImage} />
    </div>

  )
}

export default ImageContainer;