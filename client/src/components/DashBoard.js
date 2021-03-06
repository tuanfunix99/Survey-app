import React from "react";
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {

  return (
    <React.Fragment>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/surveys/news" className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
