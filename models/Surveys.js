
//Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Recipients = require("./Recipients");

//create surveySchema object
const surveySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    recipients: [Recipients],
    yes: { type: Number, required: true, default: 0 },
    no: { type: Number, required: true, default: 0 },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

surveySchema.methods.toJSON = function () {
  const survey = this;
  const surveyObject = survey.toObject();
  surveyObject.amountRecipients = surveyObject.recipients.length;
  delete surveyObject.recipients;
  return surveyObject;
}

const Surveys = mongoose.model("Survey", surveySchema);

module.exports = Surveys;
