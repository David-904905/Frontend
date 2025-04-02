import "./welcome.css";

const WelcomeSection = () => {
    return (
        <>
            <section className="welcome-section">
                <div className="welcome-msg">
                    <h2>Welcome to Island Resorts</h2>
                    <p>Where peace and tranquility is inevitable</p>
                </div>
                <div className="view-services">
                    <p>want to be part of this experience? <a className="book-link" href="">click here</a></p>
                </div>
            </section>
        </>
    )
}

export default WelcomeSection;