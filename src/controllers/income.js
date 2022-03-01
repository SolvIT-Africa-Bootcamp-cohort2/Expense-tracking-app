const Transaction = require("../models/Transaction").default;
const chalk = require("chalk");

const getIncome = async (req,res, next) =>{
    try {
        const incomes = await Transaction.find({type:"income",userId: req.user["id"]});
        res.status(200).send(incomes)
    } catch (error) {
        console.log(chalk.red(error));
        res.status(404).send("No incomes were found")
    }
}

const getOneIncome = async (req,res, next) =>{
    try {
        const id = req.params.id;
        const income = await Transaction.findOne({_id:id});
        res.status(200).send(income)
    } catch (error) {
        res.status(404).send("Income Not Found")
    }
}

const addIncome = async (req,res, next) =>{
  try {
    const {description, amount , category} = req.body;
    
   const newIncome = new Transaction({
       description,amount,category, userId: req.user["id"], type:"income"
   })
   newIncome.save();
   res.status(201).send({Message:"Income added successfully"})   
  } catch (error) {
      res.status(500).send({Message:"Error adding income"})
  }
}

const updateIncome = async(req,res,next) =>{
	try {
        let income = await Transaction.findOne({_id: req.params.id})
        if (income) {
            let {description, amount, category} = req.body;
            if (description) {
                income.description = description
            }
            if(amount){
               income.amount = amount;
            }
            if (category) {
               income.category = category;
            }
            await income.save()
            res.status(200).send({Message:"Income Details updated successfully"})
        }else{
            res.status(404).send({Message:"Income Not Found"})  
        }
	} catch(err) {
		res.status(404).send({error: "We couldn't find this income " })
        console.log(err);
	}   
}

const deleteIncome = async(req,res, next) =>{
        try {
                await Transaction.deleteOne({ _id: req.params.id })
                res.status(202).send("Income Deleted Successfully")
        } catch {
            res.status(404).send({ error: "This Income doesn't exist!" })
        }    
}


module.exports = {
    getIncome,
    getOneIncome,
    addIncome,
    updateIncome,
    deleteIncome
}

