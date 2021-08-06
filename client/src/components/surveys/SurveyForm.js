import React from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import { emailIsValid } from "../../utils/emailValid";
import Fields from './Fields';

const SurveyForm = (props) => {

  const renderField = function () {
    return Fields.map((field, key) => {
      return (
        <Field
          key={key}
          label={field.label}
          type="text"
          name={field.name}
          component={SurveyField}
        />
      );
    });
  };

  return (
    <div className="row">
      <form
        className="col s10 offset-s1"
        onSubmit={props.handleSubmit(() => props.onSubmit())}
      >
        {renderField()}
        <Link to="/surveys" className="red btn-flat white-text">
          Cancel
        </Link>
        <button className="teal btn-flat right white-text" type="submit">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
};

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "You must provide a title";
  }
  if (!values.subject) {
    errors.subject = "You must provide a subject";
  }
  if (!values.body) {
    errors.body = "You must provide a body";
  }
  if (!values.recipients) {
    errors.recipients = "You must provide at least an email";
  } else {
    const emailValid = emailIsValid(values.recipients);
    if (!emailValid) {
      errors.recipients =
        "Your email provide not valid, please check list email again";
    }
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
