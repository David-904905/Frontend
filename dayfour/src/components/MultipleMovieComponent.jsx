import { useState } from "react";
import { PiCursorClickLight } from "react-icons/pi";

const moviesArray = [
    {
        id: 1,
        title: "Finding Nemo",
        rating: 7.5,
    },
    {
        id: 2,
        title: "Finding Dory",
        rating: 7.5
    }
]

const MultipleMovieComponent = () => {

    const [movies, setMovies] = useState(moviesArray)

    const handleClick = (elementId) => {
        setMovies(
            movies.map((m) => m.id === elementId ? {...m, title: "Cars"} : m)
        )
    }

    return (
        <>
            <div>
                <h2>Multiple Movie Component</h2>
                    {
                        movies.map((m) => (
                            <div key={m.id} className="movieTileMultiple">
                                <h3>Title: {m.title}</h3>
                                <p>Rating: {m.rating}</p>
                                <button onClick={() => handleClick(m.id)}>Change Rating <PiCursorClickLight /></button>
                            </div>
                        ))
                    }

            </div>
        </>
    )
}


export default MultipleMovieComponent;