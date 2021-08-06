

//Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create recipientSchema object
const recipientSchema = new Schema({
    email: { type: String, required: true},
    responded: { type: Boolean, required: true, default: false}
})


module.exports = recipientSchema;