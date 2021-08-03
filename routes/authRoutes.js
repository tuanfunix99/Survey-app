//Dependencies
const passport = require("passport");
const express = require("express");

//Instantiate router
const router = express.Router();

//get auth google
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

//get auth google callback
router.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    res.redirect('/surveys');
  }
);

//log out
router.get("/api/logout", (req, res) => {
  console.log('logout');
  req.logOut();
  res.redirect('/');
});

//
router.get("/api/current_user", (req, res) => {
  res.send(req.user);
});


//export the module
module.exports = router;
