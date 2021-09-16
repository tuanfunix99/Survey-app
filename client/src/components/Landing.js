import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <React.Fragment>
      <h1>Survey!</h1>
      <p>welcome to the survey app</p>
      <div className="fixed-action-btn">
        <Link to="/surveys" className="btn-floating btn-large red">
          <i className="large material-icons">assessment</i>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Landing;
