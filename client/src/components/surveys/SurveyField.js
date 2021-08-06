import React from "react";

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} className="validate"></input>
      <div className="red-text" style={{ margin: '5px 0px' }}>{touched && error}</div>
    </div>
  );
};

export default SurveyField;
