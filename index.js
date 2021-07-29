//Dependencies
const express = require("express");
require("./services/passport");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
require("./database/mongodb");
const passport = require("passport");
const keys = require("./config/keys");
var cookieSession = require("cookie-session");

//variables default
const PORT = process.env.PORT || 8080;

//Instantiate app
const app = express();

//use cors
app.use(cors());

app.use(
  cookieSession({
    maxAge: 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);


app.use(passport.initialize());
app.use(passport.session());

//use routes
app.use(authRoutes);

//listen server
app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
