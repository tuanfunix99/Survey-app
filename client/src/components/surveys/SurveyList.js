import React from "react";
import { useSelector } from "react-redux";

const SurveyList = () => {
  const surveys = useSelector((state) => state.survey);

  console.log(surveys);

  const display = () => {
    if (surveys.length > 0) {
      return surveys.map((survey, key) => {
        return (
          <div className="col s12 m8 offset-m2" key={key}>
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{survey.title}</span>
                <p>{survey.body}</p>
                <p className="right">
                  Sent On: {new Date(survey.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="card-action">
                <a href="#">Yes: {survey.yes}</a>
                <a href="#">No: {survey.no}</a>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return <div class="row">{display()}</div>;
};

export default SurveyList;
