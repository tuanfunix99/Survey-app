
//Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//create user schema
const userSchema = new Schema({
    googleId: {
        type: String,
        required: true
    },
    credits: {
        type: Number,
        required: true,
        default: 0
    },
})


userSchema.methods.addCredit = async function(){
    const user = this;
    user.credits += 10;
    await user.save();
    return user;
}

const Users = mongoose.model("User", userSchema);

//export the module
module.exports = Users;