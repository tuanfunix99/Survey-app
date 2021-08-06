//Dependencies
const express = require("express");
require("./services/passport");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
require("./database/mongodb");
const passport = require("passport");
const keys = require("./config/keys");
var cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const billingRoutes = require("./routes/billingRoutes");
const surveyRoutes = require("./routes/surveyRoutes");
const path = require("path");

//variables default
const PORT = process.env.PORT || 8080;

//Instantiate app
const app = express();

app.use(express.json());

//use cors
app.use(cors());

//use body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//config cookie
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);


app.use(passport.initialize());
app.use(passport.session());

//use routes
app.use(authRoutes);
app.use(billingRoutes);
app.use(surveyRoutes);


if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  })
}

//listen server
app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
