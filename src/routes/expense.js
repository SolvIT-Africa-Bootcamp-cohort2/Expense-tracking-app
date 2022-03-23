const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middlewares/verifyToken");
const { validateInput } = require("../middlewares/validateInput");
const { validateTransaction } = require("../models/Transaction").default;
const {
  getExpenses,
  getOneExpense,
  getExpenseFromDate,
  addExpense,
  deleteExpense,
  updateExpense,
} = require("../controllers/expense.js");

// router.all("/*",verifyToken)

router
  .route("/")
  .get(verifyToken, getExpenses)
  .post(verifyToken, validateInput(validateTransaction), addExpense);

router.get("/:from-:to", verifyToken, getExpenseFromDate);

router.get("/:id", verifyToken, getOneExpense);

// router.put("/:id", verifyToken, updateExpense);
router.post("/update", verifyToken, updateExpense);

// router.delete("/:id",verifyToken,deleteExpense)
router.post("/remove", verifyToken, deleteExpense);

module.exports = router;
