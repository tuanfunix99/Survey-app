//Dependencies
const express = require("express");
require("./services/passport");
const authRoutes = require('./routes/authRoutes');

//variables default
const PORT = process.env.PORT || 8080;

//Instantiate app
const app = express();

//use routes
app.use(authRoutes);

//listen server
app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
