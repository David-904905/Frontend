import "@css/aboutus.css";
import { useMenuOpen } from "@hooks/useMenuOpen";

const Mission = () => {
  const {setMenuOpen} = useMenuOpen()
  return (
    <section className="mission-statement-container" id="mission-statement" onClick={() => setMenuOpen(false)}>
      <div className="mission-statement">
        <div className="mission-statement-header">
          <h2>Mission Statement</h2>
        </div>
        <div className="mission-briefing">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cumque et ullam cupiditate possimus, similique velit. Ratione sed, nesciunt voluptatum minima harum nulla eum omnis illo asperiores, blanditiis error quaerat totam. Nostrum, debitis? Quam enim ullam reiciendis nihil corrupti, amet dicta architecto! Autem veniam, numquam excepturi alias adipisci sit necessitatibus!</p>
        </div>
        <div className="mission-list-container">
          <div className="count-n-messages">
            <h2>1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              laborum.
            </p>
          </div>
          <div className="count-n-messages">
            <h2>2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
