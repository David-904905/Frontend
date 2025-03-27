
import { useContext, useEffect } from "react";

import "../../styling/navbarfilter.css";
import { FilterContext } from "../../contexts/FilterContext";


const NavigationFilter = () => {

    const { filter, setFilter } = useContext(FilterContext)

    useEffect(() => {
        console.log(filter)
    }, [filter])

    return (
        <>
            <div className="nav-filter-container">
                <div className="nav-filter-header">
                    <h3>Recommended</h3>
                </div>
                <div className="nav-filters">
                    <div onClick={() => setFilter("all")} className="filter-button">
                        All Products
                    </div>
                    <div onClick={() => setFilter("nike")} className="filter-button">
                        Nike
                    </div>
                    <div onClick={() => setFilter("adidas")} className="filter-button">
                        Adidas
                    </div>
                    <div onClick={() => setFilter("puma")} className="filter-button">
                        Puma
                    </div>
                    <div onClick={() => setFilter("vans")} className="filter-button">
                        Vans
                    </div>
                </div>
            </div>
    
        </>
    )
}

export default NavigationFilter;