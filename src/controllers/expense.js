const { Transaction } = require("../models/Transaction").default;
import { queryIncludes } from "../utils/queryIncludes";

/**
 *
 *  Controller to get all Expense
 */
const getExpenses = async (req, res, next) => {
  try {
    console.log(queryIncludes(req.query, "accountId"));
    if (queryIncludes(req.query, "from")) {
      return getExpenseFromDate(req, res);
    } else if (queryIncludes(req.query, "accountId")) {
      return getExpenseByAccount(req, res);
    } else {
      const expenses = await Transaction.find({
        type: "expense",
        userId: req.user["id"],
      });
      res.status(200).send({ expenses: expenses });
    }
  } catch (error) {
    //console.log(chalk.red(error));
    res.status(404).send({ Message: "No expenses were found" });
  }
};

/**
 *
 *  Controller to get one Expense
 */
const getOneExpense = async (req, res, next) => {
  try {
    const id = req.params.id;
    const expense = await Transaction.findOne({ _id: id });
    expense
      ? res.status(200).send(expense)
      : res.status(401).send({ Message: "Expense Not Found" });
  } catch (error) {
    res.status(404).send({ Message: "Expense Not Found" });
  }
};

/**
 *
 *  Controller to get  Expenses between 2 dates
 */
const getExpenseFromDate = async (req, res, next) => {
  try {
    const { from, to } = req.query;
    const expenses = await Transaction.find({
      created_at: {
        $gte: new Date(from).toISOString(),
        $lte: new Date(to).toISOString(),
      },
      type: "expense",
      userId: req.user["id"],
    });
    expenses.length > 0
      ? res.status(200).send({ expenses: expenses })
      : res.status(200).send({ Message: "No expenses created yet" });
  } catch (error) {
    res.status(404).send({ Message: "No Expense between these dates" });
  }
};
/**
 *
 *  Controller to get  Expense from a particular account
 */

const getExpenseByAccount = async (req, res, next) => {
  try {
    const { accountId } = req.query;
    const expenses = await Transaction.find({
      type: "expense",
      userId: req.user["id"],
      accountId: accountId,
    });
    res.status(200).send({ expenses: expenses });
  } catch (error) {
    res.send(404).send({ Message: "No expenses from this account" });
  }
};

/**
 *
 *  Controller to add new Expense
 */
const addExpense = async (req, res, next) => {
  try {
    const { description, amount, category, accountId } = req.body;

    const newExpense = new Transaction({
      description,
      amount,
      category,
      userId: req.user["id"],
      type: "expense",
      accountId,
    });
    newExpense.save();
    res.status(201).send({ Message: "Expense added successfully" });
  } catch (error) {
    //console.log(chalk.red(error))
    res.status(500).send({ Message: "Error adding expense" });
  }
};

/**
 *
 *  Controller to update  Expense
 */

const updateExpense = async (req, res, next) => {
  try {
    let expense = await Transaction.findOne({ _id: req.body.id });
    if (expense) {
      let { description, amount, category } = req.body;
      if (description) {
        expense.description = description;
      }
      if (amount) {
        expense.amount = amount;
      }
      if (category) {
        expense.category = category;
      }
      await expense.save();
      res.status(200).send({ Message: "Expense Details updated successfully" });
    } else {
      res.status(404).send({ Message: "Expense Not Found" });
    }
  } catch (err) {
    res.status(404).send({ Message: "We couldn't find this expense " });
    // console.log(err);
  }
};

/**
 *
 *  Controller to delete Expense
 */
const deleteExpense = async (req, res, next) => {
  try {
    await Transaction.deleteOne({ _id: req.body.id });
    res.status(202).send({ Message: "Expense Deleted Successfully" });
  } catch {
    res.status(404).send({ Message: "This Expense doesn't exist!" });
  }
};

module.exports = {
  getExpenses,
  getOneExpense,
  getExpenseFromDate,
  getExpenseByAccount,
  addExpense,
  updateExpense,
  deleteExpense,
};
