const { string } = require("@hapi/joi");
const mongoose = require("mongoose");
const { type } = require("os");

const schema = mongoose.Schema({
    email: {type:String, required:[true,"Email is required"]},
    password:{type:String, required: true},
    gender:{type:String, required:true}
},{
    versionKey:false
})

module.exports = mongoose.model("User",schema);