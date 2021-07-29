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
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/api/user_current");
  }
);


//log out
router.get('/api/logout', (req, res) => {
  req.logOut();
  res.send(req.user);
})


//
router.get('/api/user_current', (req, res) => {
  res.send(req.user);
})

//export the module
module.exports = router;
