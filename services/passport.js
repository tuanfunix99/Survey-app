

//Dependencies
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("../config/keys");

//passport
passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientId,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
      },
      function (accessToken, refreshToken, profile, cb) {
          console.log(profile);
      }
    )
  );