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
    res.redirect("/");
  }
);

//export the module
module.exports = router;
