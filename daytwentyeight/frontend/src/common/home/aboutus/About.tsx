import "@css/aboutus.css";
import { useMenuOpen } from "@hooks/useMenuOpen";

const About = () => {
  const {setMenuOpen} = useMenuOpen()
  return (
    <>
      <section className="about-us-container" id="about-us" onClick={() => setMenuOpen(false)} >
        <div className="about-us-header">
          <h2>About Us</h2>
        </div>
        <div className="briefing">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ipsa assumenda praesentium in voluptas velit aliquam perspiciatis natus amet aut, distinctio necessitatibus porro? Magnam in commodi quasi quae ipsum voluptatum, quisquam animi veniam cum! Consectetur perferendis sapiente quam ea, vitae quidem. Quos possimus odit vitae ad, sapiente vero ipsam animi sunt fugit distinctio itaque eligendi laborum voluptatibus adipisci iusto! Quibusdam?</p>
        </div>
        <div className="second-about-section">
          <div className="mission-img">
            {/* <img src="/aboutus/firstabout.jpg" alt="" /> */}
          </div>
          <div className="about-message-main">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              deleniti laudantium facere doloribus nostrum quasi veritatis
              molestiae inventore. Ratione fuga reiciendis corrupti veniam ullam
              dolores ducimus, impedit necessitatibus eos facilis tempora minus
              consequuntur molestias possimus debitis quidem porro accusantium
              quas? Culpa minus nisi quod aliquid, accusamus corrupti magni unde
              nemo.
            </p>
          </div>
        </div>

      </section>
    </>
  );
};

export default About;
