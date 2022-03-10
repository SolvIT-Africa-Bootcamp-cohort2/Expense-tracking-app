import { Schema, model } from "mongoose";
const Joi = require("@hapi/joi")

const schema = Schema({
    description: {type:String, required:[true,"Expense Description is required"]},
    amount:{type: Number, required: true},
    category:{type:String, required:true},
    type:{type:String, required:true},
    userId:{type: String, required:true},
    accountId:{type:String, required:true},
    created_at: {type: Date, default: new Date().toISOString().slice(0,10)}
},{
    versionKey:false
})


const Transaction = model("Transaction",schema);

const validateTransaction = (transaction) =>{
    const schema = Joi.object({
        amount: Joi.number().required(),
        description: Joi.string().required(),
        category:Joi.string().required(),
        accountId:Joi.string().required()
    })
    return schema.validate(transaction);
}

export default {
    Transaction,
    validateTransaction
}