// SurveyFormReview shows users their form inputs for review
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Fields from "./Fields";
import allActions from '../../actions/index';
import { withRouter } from "react-router-dom";

const SurveyFormReview = (props) => {
  let form = useSelector((state) => state.form);
  const [survey, setSurvey] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (form.surveyForm !== undefined) {
      setSurvey(form.surveyForm.values);
    }
  }, [form]);

  const displayReview = () => {
    return Fields.map((field, key) => {
      return (
        <div key={key}>
          <h6>{field.label}</h6>
          <div>{survey[field.name]}</div>
        </div>
      );
    });
  };

  return (
    <section className="row">
      <div className="col s10 offset-s1">
        <h5>Please confirm your entries</h5>
        {displayReview()}
        <button
          className="yellow darken-3 white-text btn-flat"
          onClick={() => props.onCancle()}
        >
          Back
        </button>
        <button
          className="green btn-flat right white-text"
          onClick={() => dispatch(allActions.surveyAction.addSurvey(survey, props.history))}
        >
          Send Survey
          <i className="material-icons right">email</i>
        </button>
      </div>
    </section>
  );
};
export default withRouter(SurveyFormReview);
