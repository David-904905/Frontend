//database
import { ourlocations } from "./LocationsDB";

//styling
import "./location.css";

const Locations = () => {
    return (
        <>
            <section className="locations">
                <div className="section-header">
                    <h2>Locations</h2>
                </div>
                <div className="locations-section">
                    {
                        ourlocations.map(({name, description, image}, index) => (
                            <div className="location-tile" key={index}>
                                <div className="imgsec">
                                    <img src={image} alt={name} />
                                </div>
                                <h3>{name}</h3>
                                <p>{description}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>

    )
}


export default Locations;