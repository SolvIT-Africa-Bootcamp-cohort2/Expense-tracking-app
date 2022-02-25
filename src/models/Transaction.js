const mongoose = require("mongoose");

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

module.exports = mongoose.model("Transaction",schema);