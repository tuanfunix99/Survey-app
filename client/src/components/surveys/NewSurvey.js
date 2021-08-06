import React, { useState } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

const NewSurvey = () => {
  const [showReview, setShowReview] = useState(false);
  const display = () => {
    if (!showReview) return <SurveyForm onSubmit={() => setShowReview(true)} />;
    return <SurveyFormReview onCancle={() => setShowReview(false)} />;
  };
  return <div>{display()}</div>;
};

export default NewSurvey;
