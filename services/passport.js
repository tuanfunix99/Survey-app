
//Dependencies
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("../config/keys");
const Users = require("../models/Users");

passport.serializeUser((user,callback) => {
    callback(null, user._id);
})


passport.deserializeUser(async (id, callback) => {
    try {
        const user = await Users.findById(id);
        callback(null, user);
    }catch (error) {
        console.log(error);
    }
})

//passport
passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientId,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, cb) => {
          try {
              const user = await Users.findOne({googleId: profile.id});
              if(user){
                  cb(null, user);
              }
              else{
                const newUser = await Users({googleId: profile.id});
                await newUser.save();
                cb(null, newUser);
              }
          }
          catch (err) {
              console.log(err);
          }
      }
    )
  );