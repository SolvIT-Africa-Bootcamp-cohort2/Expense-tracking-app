const mongoose = require("mongoose");
const Joi = require("@hapi/joi")
const schema = mongoose.Schema({
    description: {type:String, required:[true,"Expense Description is required"]},
    amount:{type: Number, required: true},
    category:{type:String, required:true},
    type:{type:String, required:true},
    userId:{type: String, required:true},
    created_at: {type: Date, default: Date.now()}
},{
    versionKey:false
})

const Transaction = mongoose.model("Transaction",schema);

const validateTransaction = (transaction) =>{
    const schema = Joi.object({
        amount: Joi.number().required(),
        description: Joi.string().required(),
        category:Joi.string().required()
    })
    return schema.validate(transaction);
}

module.exports = {
    Transaction,
    validateTransaction
}