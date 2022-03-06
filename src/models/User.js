import { Schema, model } from "mongoose";
const Joi = require("@hapi/joi")

const schema = Schema({
    email: {type:String, required:[true,"Email is required"]},
    phone:{type:Number, length:12},
    username:{type:String, required:[true,"Username is required"]},
    password:{type:String, required: true},
    gender:{type:String, required:true},
    role:{type:String},
    isVerified: {type: Boolean, default:false}
},{
    versionKey:false
})
  
const User = model("User",schema);

const tokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

const Token = model("token", tokenSchema);

const validateUser = (user) => {
    const schema = Joi.object({
        email:Joi.string().email().required(),
        phone:Joi.number().min(12).required(),
        username: Joi.string().required(),
        password:Joi.string().min(8).required(),
        gender: Joi.string().required(),
    })
  
    return schema.validate(user)
  }

const validateUserLogin = (user)=>{
    const schema = Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().required(),
    })
    return schema.validate(user)
}

  export default{
      User,
      Token,
      validateUser,
      validateUserLogin
  }