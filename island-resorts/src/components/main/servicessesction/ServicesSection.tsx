import { islandTravelServices } from "./ServicesData";

import "./services.css";

const ServicesSection = () => {
    return (
        <>
            <section className="services-section">
                <div className="headersection">
                    <h2>Our Services</h2>
                </div>
                <div className="service-section">
                    {
                        islandTravelServices.map(({category, services, image}, index) => (
                            <div className="services" key={index}>  
                                <div className="imgsec">
                                    <img style={
                                        {
                                            height: 200
                                        }
                                    } src={image} alt="" />
                                </div>
                                <h3>{category}</h3>
                                {services.map((item, index) => (
                                    <ul key={index}>
                                        <p>{item}</p>
                                    </ul>
                                ))}
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default ServicesSection;