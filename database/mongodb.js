//Dependencies
const mongoose = require("mongoose");
const keys = require("../config/keys");

mongoose
  .connect(keys.mongodb_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("connect mongodb");
  })
  .catch((err) => console.log(err));
