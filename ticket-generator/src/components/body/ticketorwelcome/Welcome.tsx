import "./welcome.css";

const Welcome = () => {
  return (
    <>
        <section className="welcome-section">
            <div className="main-text">
                <h2>Welcome to Code Nation</h2>
                <p>An event to showcase your skills by solving complex real-world problems, alongside industry experts</p>
                <p style={{fontSize: "13px"}}>Want to be part of this event?<a href=""> register here</a></p>
            </div>
        </section>
    </>
  )
}

export default Welcome