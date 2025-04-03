import "./aboutus.css";

const AboutUs = () => {
  return (
    <>
      <section className="about-us">
        <div className="head-section">
          <h3>About Us</h3>
        </div>
        <div className="about-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste delectus quia libero debitis itaque consequuntur, quis voluptatibus qui, possimus numquam quo nobis quas, at consectetur! Possimus commodi est saepe, labore accusantium, ducimus soluta non quod amet iusto aut assumenda numquam? Soluta sed velit iusto quam! Maxime quo placeat cumque quae temporibus earum! Maiores sed ratione quod, porro quas, rem quibusdam expedita, necessitatibus commodi iste rerum in repudiandae. Commodi deserunt fugit at modi tempora sit? Ut eum voluptas, fuga consequatur odit voluptatum quibusdam temporibus illum culpa laboriosam impedit similique. Eveniet quos ad dolore asperiores quidem molestiae recusandae accusamus pariatur nulla in.</p>
        </div>
        <div className="map-container">
            <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.349202968429!2d7.476633475891729!3d9.031874691029573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0be7f76d176f%3A0x9e788c92d18d1ad6!2sWalex%20Biz%20Nigeria!5e0!3m2!1sen!2sng!4v1743601823803!5m2!1sen!2sng"
                 width="100%" 
                 height="400" 
                 style={{border: 0}}
                 allowFullScreen
                 loading="lazy" 
            ></iframe>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
