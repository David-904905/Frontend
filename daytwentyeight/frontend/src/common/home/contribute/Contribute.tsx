import "@css/contribute.css";

const Contribute = () => {
  return (
    <div id="contribute">
      <div className="contribute-header">Contribute</div>
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
            <li>1. Clone the repository</li>
            <li>2. Create a branch</li>
            <li>3. Make the necessary changes</li>
            <li>4. In a file called changes.txt, describe the changes you have made</li>
            <li>5. Push the changes to that branch</li>
            <li>6. Submit a pull request</li>
          </ul>
          <p>If your request has been accepted, your changes will be incooperated.</p>
        </div>
      </div>
      <div className="links"></div>
    </div>
  );
};

export default Contribute;
