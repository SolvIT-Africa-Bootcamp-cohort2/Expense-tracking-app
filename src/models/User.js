const mongoose = require("mongoose");
const Joi = require("@hapi/joi")

const schema = mongoose.Schema({
    email: {type:String, required:[true,"Email is required"]},
    phone:{type:Number, length:12},
    username:{type:String, required:[true,"Username is required"]},
    password:{type:String, required: true},
    gender:{type:String, required:true}
},{
    versionKey:false
})
  
const User = mongoose.model("User",schema);

const validateUser = (user) => {
    const schema = Joi.object({
        email:Joi.string().email().required(),
        phone:Joi.number().min(12).required(),
        username: Joi.string().required(),
        password:Joi.string().min(8).required(),
        gender: Joi.string().required()
    })
  
    return schema.validate(user)
  }


  module.exports ={
      User,
      validateUser
  }