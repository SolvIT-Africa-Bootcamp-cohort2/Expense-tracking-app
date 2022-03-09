import {Schema , model} from 'mongoose'
const Joi =require("@hapi/joi")


const accountSchema = Schema ({
 accountName : {
      type:String ,
      required:true 
    },
  userId : {
    type:String ,required:true 
  }
},{
  versionKey:false
})
 
const Account = model("Account" ,accountSchema);


const validateAccount = (account) =>{
   const schema = Joi.object({
     accountName : Joi.string().required()
   })
   return schema.validate(account);

}
export default {
  Account,
  validateAccount 
}