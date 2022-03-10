import { Schema, model } from "mongoose";
const Joi = require("@hapi/joi")

const schema = Schema({
    categoryName: {type:String, required:true},
    userId:{type: String, required:true},
},{
    versionKey:false
})

const Category = model("Category",schema);

const validateCategory = (category) =>{
    const schema = Joi.object({
        categoryName: Joi.string().required().min(3),
    })
    return schema.validate(category);
}

export default {
    Category,
    validateCategory
}