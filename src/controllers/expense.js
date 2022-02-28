const {Transaction} = require("../models/Transaction");
const chalk = require("chalk");

const getExpenses = async (req,res, next) =>{
    try {
        const expenses = await Transaction.find({type:"expense",userId: req.user["id"]});
        res.status(200).send(expenses)
    } catch (error) {
        console.log(chalk.red(error));
        res.status(404).send("No expenses were found")
    }
}

const getOneExpense = async (req,res, next) =>{
    try {
        const id = req.params.id;
        const expense = await Transaction.findOne({_id:id});
        res.status(200).send(expense)
    } catch (error) {
        res.status(404).send("Expense Not Found")
    }
}

const getExpenseFromDate = async(req,res,next) =>{
    const {from, to } =req.params;
    res.send({from:from, to: to})
}

const addExpense = async (req,res, next) =>{
  try {
    const {description, amount , category} = req.body;
    
   const newExpense = new Transaction({
       description,amount,category, userId: req.user["id"], type:"expense"
   })
   newExpense.save();
   res.status(201).send({Message:"Expense added csuccessfully"})   
  } catch (error) {
      console.log(chalk.red(error))
      res.status(500).send({Message:"Error adding expense"})
  }
}

const updateExpense = async(req,res,next) =>{
	try {
        let expense = await Transaction.findOne({_id: req.params.id})
        if (expense) {
            let {description, amount, category} = req.body;
            if (description) {
                expense.description = description
            }
            if(amount){
               expense.amount = amount;
            }
            if (category) {
               expense.category = category;
            }
            await expense.save()
            res.status(200).send({Message:"Expense Details updated successfully"})
        }else{
            res.status(404).send({Message:"Expense Not Found"})  
        }
	} catch(err) {
		res.status(404).send({error: "We couldn't find this expense " })
        console.log(err);
	}   
}

const deleteExpense = async(req,res, next) =>{
        try {
                await Transaction.deleteOne({ _id: req.params.id })
                res.status(202).send("Expense Deleted Successfully")
        } catch {
            res.status(404).send({ error: "This Expense doesn't exist!" })
        }    
}

module.exports = {
    getExpenses,
    getOneExpense,
    getExpenseFromDate,
    addExpense,
    updateExpense,
    deleteExpense
}

