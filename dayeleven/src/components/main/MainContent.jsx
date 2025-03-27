import { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import { GiShoppingBag } from "react-icons/gi";
import data from "../../db/data";

import "../../styling/maincontent.css"

const MainContent = () => {
    const { filter, _setFilter, colorFilter, _setColorFilter, currentColor, _setCurrentColor } = useContext(FilterContext)

    // const filteredItems = data.filter((item) => {
    //     if(filter === "all") return true;
    //     return item.brand.toLowerCase() === filter.toLowerCase()
    // })

    const companyFilter = data.filter((item) => item.company.toLowerCase() === filter.toLowerCase())
    const colorFiltered = data.filter((item) => item.color.toLowerCase() === currentColor.toLowerCase())

    return (
        <>
            <div className="items-container">
                {
                    colorFilter ? colorFiltered.map((item, index) => (
                        <div className="item-container" key={index}>
                            <div className="image-sec">
                                <img className="item-image" src={item.img} alt="" />
                            </div>
                            <h2>{item.title}</h2>
                            <div className="rating-sec">
                                <p style={{ color: "gold" }}>{item.star}{item.star}{item.star}{item.star}</p>
                                <p>{item.reviews}</p>
                            </div>
                            <div className="price-add-to-cart">
                                <p><strike>{item.prevPrice}</strike> $ {item.newPrice}</p>
                                <GiShoppingBag />
                            </div>
                        </div>
                    )) : filter === "all" ? data.map((item, index) => (
                        <div className="item-container" key={index}>
                            <div className="image-sec">
                                <img className="item-image" src={item.img} alt="" />
                            </div>
                            <h2>{item.title}</h2>
                            <div className="rating-sec">
                                <p style={{ color: "gold" }}>{item.star}{item.star}{item.star}{item.star}</p>
                                <p>{item.reviews}</p>
                            </div>
                            <div className="price-add-to-cart">
                                <p><strike>{item.prevPrice}</strike> $ {item.newPrice}</p>
                                <GiShoppingBag />
                            </div>
                        </div>
                    )) : companyFilter.map((item, index) => (
                        <div className="item-container" key={index}>
                            <div className="image-sec">
                                <img className="item-image" src={item.img} alt="" />
                            </div>
                            <h2>{item.title}</h2>
                            <div className="rating-sec">
                                <p style={{ color: "gold" }}>{item.star}{item.star}{item.star}{item.star}</p>
                                <p>{item.reviews}</p>
                            </div>
                            <div className="price-add-to-cart">
                                <p><strike>{item.prevPrice}</strike> $ {item.newPrice}</p>
                                <GiShoppingBag />
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default MainContent;