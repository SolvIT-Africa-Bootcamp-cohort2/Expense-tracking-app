const mongoose = require("mongoose");

const schema = mongoose.Schema({
    title: {type:String, required:[true,"Expense title is required"]},
    amount:{type: Number, required: true},
    category:{type:String, required:true},
    userId:{type: String, required:true},
    created_at: {type: Date, default: Date.now()}
},{
    versionKey:false
})

module.exports = mongoose.model("Transaction",schema);