const mongoose = require("mongoose");

const schema = mongoose.Schema({
    email: {type:String, required:[true,"Email is required"]},
    username:{type:String, required:[true,"Username is required"]},
    password:{type:String, required: true},
    gender:{type:String, required:true}
},{
    versionKey:false
})

module.exports = mongoose.model("User",schema);