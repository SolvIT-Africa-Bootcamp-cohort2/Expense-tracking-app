const express = require("express")
const router = express.Router();

const { verifyToken } = require("../middlewares/verifyToken")
const {getExpenses , getOneExpense, addExpense,deleteExpense, updateExpense} = require("../controllers/expense.js");

router.all("/*",verifyToken)
router.get("/:id",getOneExpense)

router.route("/")
      .get(getExpenses)
      .post(addExpense)

router.put("/:id",updateExpense)     
router.delete("/:id",deleteExpense)

module.exports = router;