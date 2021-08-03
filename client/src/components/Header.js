import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Payment from "./Payment";

const Header = () => {

  const auth = useSelector(state => state.auth);

  return (
    <React.Fragment>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="left brand-logo">
            Emaily
          </Link>
          <ul className="right">
              {!auth &&  <li><a href="/auth/google">Login With Google</a></li>}
              {auth && <li><Payment/></li>}
              {auth && <li style={{ margin: '0px 10px' }}>Credits: {auth.credits}</li>}
              {auth && <li><a href="/api/logout">Logout</a></li>}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
