import {Schema , model} from 'mongoose'
const Joi =require("@hapi/joi")


const accountSchema = Schema ({
 accountName : {
      type:String ,
      required:true 
    } 

});
 
const accountModel = model ("accountModel" , accountSchema);


module.exports= {accountModel}; 