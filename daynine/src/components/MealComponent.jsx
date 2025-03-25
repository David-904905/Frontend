/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

import axios from "axios";

const MealComponent = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood")
            .then((res) => setData(res.data.meals))
        
    },[])
    

    return (
        <>
            <div className="container">
                <div className="col-md-8">
                    {
                        data.map(({strMeal, strMealThumb, _idMeal}, index) => (
                            <div key={index} className="card shadow my-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img className="img-thumbnail" src={strMealThumb ? strMealThumb : "./public/placeholder.png" } alt="" />
                                        </div>
                                        <div className="col-md-8">
                                            <p><strong>Name:</strong> {strMeal}</p>
                                            <p><strong>Price:</strong> ${strMeal.length ** 2}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default MealComponent;
