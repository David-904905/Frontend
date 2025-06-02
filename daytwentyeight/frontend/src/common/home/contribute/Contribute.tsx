import "@css/contribute.css";
import { useMenuOpen } from "@hooks/useMenuOpen";

const Contribute = () => {
  const {setMenuOpen} = useMenuOpen()
  return (
    <section id="contribute" className="contribute" onClick={() => setMenuOpen(false)}>
      <div className="contribute-header"><h2>Contribute</h2></div>
      <div className="how-to-contribute">
        <div className="brief-message">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, animi
            enim voluptatum, libero esse officia quia suscipit eum magni a velit
            voluptate aliquam repudiandae perferendis iste fugit facere quas
            ullam, cupiditate magnam odit! Ratione, alias doloribus optio quae
            omnis adipisci laborum nam natus beatae error unde hic. Laboriosam,
            expedita minima.
          </p>
        </div>
        <div className="contribution-steps">
          <ul>
            <li>Clone the repository</li>
            <li>Create a branch</li>
            <li>Make the necessary changes</li>
            <li>In a file called changes.txt, describe the changes you have made</li>
            <li>Push the changes to that branch</li>
            <li>Submit a pull request</li>
          </ul>
          <p>If your request has been accepted, your changes will be incooperated.</p>
        </div>
      </div>
      <div className="links"></div>
    </section>
  );
};

export default Contribute;
