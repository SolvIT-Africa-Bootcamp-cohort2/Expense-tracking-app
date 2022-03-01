import { Schema, model } from "mongoose";
import { object, string, number } from "@hapi/joi";

const schema = Schema({
    email: {type:String, required:[true,"Email is required"]},
    phone:{type:Number, length:12},
    username:{type:String, required:[true,"Username is required"]},
    password:{type:String, required: true},
    gender:{type:String, required:true}
},{
    versionKey:false
})
  
const User = model("User",schema);

const validateUser = (user) => {
    const schema = object({
        email:string().email().required(),
        phone:number().min(12).required(),
        username: string().required(),
        password:string().min(8).required(),
        gender: string().required()
    })
  
    return schema.validate(user)
  }

const validateUserLogin = (user)=>{
    const schema = object({
        email:string().email().required(),
        password:string().required(),
    })
    return schema.validate(user)
}
  export default{
      User,
      validateUser,
      validateUserLogin
  }