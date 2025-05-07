import "../stylesheets/profile.css";

const Profile = () => {
  return (
    <div className="profile-dashboard">
      <div className="profile-container">
        <div className="profile-cover-img">
          <div className="profile-img"></div>
        </div>
      </div>
      <div className="other-section">
        <div className="info">
          <h2>Name: David Nduonofit</h2>
        </div>
        <div className="about-me">
          <h2>
            Bio:{" "}
            <span style={{ fontWeight: "100", fontSize: "20px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel
              ea alias, laboriosam corporis officia esse minus magnam earum
              blanditiis saepe rerum mollitia. Sunt est tempora vel deserunt
              minima voluptatibus blanditiis quam a distinctio error, quisquam
              minus necessitatibus consectetur odit ipsam perferendis iusto sit
              exercitationem esse sint laudantium iste placeat.
            </span>
          </h2>
        </div>
        <div className="skills-and-other-info">
          <div className="card-slips-tab-stuff">
            <h2>Skills</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
          <div className="card-slips-tab-stuff">
            <h2>Stats</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
        </div>
        <div className="skills-and-other-info">
          <div className="card-slips-tab-stuff">
            <h2>Top Books</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
          <div className="card-slips-tab-stuff">
            <h2>Completed</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
