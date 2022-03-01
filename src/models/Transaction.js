import { Schema, model } from "mongoose";
import { object, number, string } from "@hapi/joi";

const schema = Schema({
    description: {type:String, required:[true,"Expense Description is required"]},
    amount:{type: Number, required: true},
    category:{type:String, required:true},
    type:{type:String, required:true},
    userId:{type: String, required:true},
    created_at: {type: Date, default: new Date().toISOString().slice(0,10)}
},{
    versionKey:false
})


const Transaction = model("Transaction",schema);

const validateTransaction = (transaction) =>{
    const schema = object({
        amount: number().required(),
        description: string().required(),
        category:string().required()
    })
    return schema.validate(transaction);
}

export default {
    Transaction,
    validateTransaction
}