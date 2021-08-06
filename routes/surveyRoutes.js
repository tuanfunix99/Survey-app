//Dependencies
const express = require("express");
const isLoggedIn = require("../middlewares/requireLogin");
const isEnoughCredit = require("../middlewares/requireCredit");
const Survey = require("../models/Surveys");
const nodemailer = require("nodemailer");
const surveyTemplate = require("../services/surveyTemplate");

//Instantiate router
const router = express.Router();

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "tuanphamtran99@gmail.com", // generated ethereal user
    pass: "pcwqxngjowawdgxo", // generated ethereal password
  },
});


router.get('/api/surveys/', isLoggedIn, async (req, res, next) => {
  try {
    const surveys = await Survey.find({ creator: req.user._id });
    res.status(200).send(surveys);
  }catch (error) {
    res.status(404).send({ message: error.message });
  }
})

router.get(
  "/api/surveys/:idSurvey/:feedback",
  async (req, res, next) => {
    const events = {
      survey: req.params.idSurvey,
      feedback: req.params.feedback
    };
    try{
      const survey = await Survey.findById(events.survey);
      if(!survey){
        throw new Error('Survey not exist');
      }
      if(events.feedback === 'yes'){
        survey.yes += 1;
      }
      else{
        survey.no += 1;
      }
      await survey.save();
      res.send('Thank you');
    }catch (error) {
      res.status(404).send({ message: error.message }); 
    }
  }
);

//create new survey
router.post(
  "/api/surveys",
  isLoggedIn,
  isEnoughCredit,
  async (req, res, next) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients
        .split(",")
        .map((email) => ({ email: email.trim() })),
      creator: req.user._id,
    });
    try {
      await survey.save();

      await transporter.sendMail({
        from: "Admin minggu 👻", // sender address
        to: req.body.recipients.trim(), // list of receivers
        subject: survey.subject, // Subject line
        text: survey.body, // plain text body
        html: surveyTemplate(survey), // html body
      });

      req.user.credits -= 1;

      await req.user.save();

      res.status(201).send(survey);
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  }
);

//export the module
module.exports = router;
