const { Transaction } = require("../models/Transaction").default;
const chalk = require("chalk");

const getIncome = async (req, res, next) => {
  try {
    const incomes = await Transaction.find({
      type: "income",
      userId: req.user["id"],
    });
    if (incomes.length == 0)
      return res.status(204).send({ Message: "No incomes currently" });
    res.status(200).send({ incomes: incomes });
  } catch (error) {
    //console.log(chalk.red(error));
    res.status(404).send({ Message: "No incomes were found" });
  }
};

const getOneIncome = async (req, res, next) => {
  try {
    const id = req.params.id;
    const income = await Transaction.findOne({ _id: id });
    if (!income)
      return res.status(204).send({ Message: "No income currently" });
    res.status(200).send({ income: income });
  } catch (error) {
    res.status(404).send({ Message: "Income Not Found" });
  }
};

const addIncome = async (req, res, next) => {
  try {
    const { description, amount, category, accountId } = req.body;

    const newIncome = new Transaction({
      description,
      amount,
      category,
      userId: req.user["id"],
      type: "income",
      accountId,
    });
    newIncome.save();
    res.status(201).send({ Message: "Income added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ Message: "Error adding income" });
  }
};

const updateIncome = async (req, res, next) => {
  try {
    let income = await Transaction.findOne({ _id: req.body.id });
    if (income) {
      let { description, amount, category } = req.body;
      if (description) {
        income.description = description;
      }
      if (amount) {
        income.amount = amount;
      }
      if (category) {
        income.category = category;
      }
      await income.save();
      res.status(200).send({ Message: "Income Details updated successfully" });
    } else {
      res.status(404).send({ Message: "Income Not Found" });
    }
  } catch (err) {
    res.status(404).send({ Message: "We couldn't find this income " });
    //console.log(err);
  }
};

const deleteIncome = async (req, res, next) => {
  try {
    await Transaction.deleteOne({ _id: req.body.id });
    res.status(202).send({ Message: "Income Deleted Successfully" });
  } catch {
    res.status(404).send({ Message: "This Income doesn't exist!" });
  }
};

module.exports = {
  getIncome,
  getOneIncome,
  addIncome,
  updateIncome,
  deleteIncome,
};
