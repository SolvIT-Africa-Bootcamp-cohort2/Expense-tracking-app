const express = require("express")
const router = express.Router();

const { verifyToken } = require("../middlewares/verifyToken");
const {validateInput} = require("../middlewares/validateInput")
const {validateTransaction} = require("../models/Transaction").default
const {getExpenses , getOneExpense, getExpenseFromDate, addExpense,deleteExpense, updateExpense} = require("../controllers/expense.js");

router.all("/*",verifyToken)

router.route("/")
      .get(getExpenses)
      .post(validateInput(validateTransaction), addExpense)

router.get("/:from-:to",getExpenseFromDate);

router.get("/:id",getOneExpense)

router.put("/:id",updateExpense)     
router.delete("/:id",deleteExpense)

module.exports = router;