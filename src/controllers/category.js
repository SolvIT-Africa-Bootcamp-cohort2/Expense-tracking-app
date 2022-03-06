const {Category} = require("../models/Category").default;
import { red,green } from "chalk";

const log = console.log

const getCategories = async (req,res, next) =>{
    try {
        const categories = await Category.find({userId: req.user["id"]});
        res.status(200).send({categories: categories})
    } catch (error) {
        log(red(error));
        res.status(404).send({Message:"No categories were found"})
    }
}

const getOneCategory = async (req,res, next) =>{
    try {
        const id = req.params.id;
        const category = await Category.findOne({_id:id});
        res.status(200).send({category: category})
    } catch (error) {
        res.status(404).send({Message:"Category Not Found"})
    }
}

const addCategory = async (req,res, next) =>{
  try {
    const {categoryName } = req.body;
    
   const newCategory = new Category({
       categoryName, userId: req.user["id"]
   })
   newCategory.save();
   res.status(201).send({Message:"Category added successfully"})   
  } catch (error) {
   //   log(red(error))
      res.status(500).send({Message:"Error adding category"})
  }
}

const updateCategory = async(req,res,next) =>{
	try {
        let category = await Category.findOne({_id: req.params.id})
        if (category) {
            if (req.body.categoryName) {
                category.categoryName = req.body.categoryName
            }
          
            await category.save()
            res.status(200).send({Message:"Category Details updated successfully"})
        }else{
            res.status(404).send({Message:"Category Not Found"})  
        }
	} catch(err) {
		res.status(404).send({Message: "We couldn't find this category " })
       // log(red(err));
	}   
}

const deleteCategory = async(req,res, next) =>{
        try {
             let id = req.params.id;
             if(id){
                await Category.deleteOne({ _id: req.params.id })
                res.status(202).send({Message:"Category Deleted Successfully"})
             }
             else{
                 res.status(400).send({Message:"Please provide id of category to delete"})
             }
        } catch {
            res.status(404).send({ Message: "This Category doesn't exist!" })
        }    
}

module.exports = {
    getCategories,
    getOneCategory,
    addCategory,
    updateCategory,
    deleteCategory
}

