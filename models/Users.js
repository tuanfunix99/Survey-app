
//Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//create user schema
const userSchema = new Schema({
    googleId: {
        type: String,
        required: true
    }
})


const Users = mongoose.model("User", userSchema);


//export the module
module.exports = Users;