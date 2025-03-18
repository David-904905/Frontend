import { useState } from "react"
import { PiCursorClickLight } from "react-icons/pi";
const MovieComponent = () => {
    const [movie, setMovie] = useState({
        title: "Extraction",
        rating: 6.8,
    })

    const changeMovieRating = () => setMovie({
        ...movie, // making a copy of the movie object.
        rating: 5.5,
    });
        // we want to make a copy of the movie object, so as to avoid mutating the original values
        // const movieCopy = {
        //     ...movie,
        //     rating: 5.5,
        // }

        
    
    return (
        <>
            <div className="movieTile">
                <h1>Single Movie Component</h1>
                <h2>Title: {movie.title}</h2>
                <p>Rating: {movie.rating}</p>
                <button onClick={changeMovieRating}>Change Rating <PiCursorClickLight /></button>
            </div>
        </>
    )
}

export default MovieComponent;